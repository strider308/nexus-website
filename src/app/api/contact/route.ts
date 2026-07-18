import { NextResponse } from "next/server";

// Simple in-memory rate-limiter map to protect contact endpoint (max 5 requests per minute per IP)
const rateLimitCache = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitCache.get(ip) || [];
  
  // Filter out timestamps outside the active window
  const activeTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (activeTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  activeTimestamps.push(now);
  rateLimitCache.set(ip, activeTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    // 1. Enforce content-type
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 415 });
    }

    // 2. Enforce payload size limit (max 64KB)
    const contentLength = Number(req.headers.get("content-length") || "0");
    if (contentLength > 65536) {
      return NextResponse.json({ error: "Payload size limit exceeded" }, { status: 413 });
    }

    // 3. Simple Rate Limiting based on IP address
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submission attempts. Please try again later or email us directly." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { name, email, company, engagement, workflow, honeypot } = body;

    // 4. Honeypot check (anti-abuse)
    if (honeypot && honeypot.trim() !== "") {
      // Simulate success and latency so bots think it was sent, but discard data
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("[SECURITY ALERT] Contact Form Honeypot triggered. Bot request discarded.");
      return NextResponse.json({ success: true, message: "Request received." });
    }

    // 5. Schema Validation & Normalization
    const cleanName = name?.trim() || "";
    const cleanEmail = email?.trim().toLowerCase() || "";
    const cleanCompany = company?.trim() || "";
    const cleanWorkflow = workflow?.trim() || "";
    const cleanEngagement = engagement?.trim() || "diagnostic";

    if (!cleanName || !cleanEmail || !cleanCompany || !cleanWorkflow) {
      return NextResponse.json({ error: "All required form fields must be completed." }, { status: 400 });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ error: "Please provide a valid work email address." }, { status: 400 });
    }

    // Standard structured logging without full personal content (comply with data-minimization)
    const emailDomain = cleanEmail.split("@")[1] || "unknown";
    console.log(`[CONTACT INTAKE] Received request. Domain: @${emailDomain}, Engagement: ${cleanEngagement}, Length: ${cleanWorkflow.length} chars.`);

    // 6. Transnational Email dispatch (Resend API Integration)
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@nexus-workflows.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (resendKey) {
      // Send real email via Resend endpoint
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmail,
          subject: `[Nexus Lead] ${cleanEngagement.toUpperCase()} - ${cleanCompany}`,
          html: `
            <h3>New B2B Lead from Website</h3>
            <p><strong>Name:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> ${cleanEmail}</p>
            <p><strong>Company:</strong> ${cleanCompany}</p>
            <p><strong>Track:</strong> ${cleanEngagement}</p>
            <p><strong>Workflow Details:</strong></p>
            <blockquote style="background:#f5f5f5;padding:15px;border-left:4px solid #2a7d8a;">
              ${cleanWorkflow.replace(/\n/g, "<br>")}
            </blockquote>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error("[ERROR] Resend API rejected message:", errorData);
        throw new Error("Resend dispatch failed");
      }
    } else {
      // Development/Sandbox fallback logging (no crash)
      console.log("[OFFLINE SANDBOX MODE] No Resend API key configured. Logging sandbox lead trace:");
      console.log(`Lead Details: Company=${cleanCompany}, Track=${cleanEngagement}`);
    }

    return NextResponse.json({ success: true, message: "Intake successfully received." });
  } catch (err) {
    console.error("[CONTACT ERROR] Lead capture failed:", (err as Error)?.message || err);
    return NextResponse.json(
      { error: "Lead processing failed. Please contact hello@nexus-workflows.com directly." },
      { status: 500 }
    );
  }
}
