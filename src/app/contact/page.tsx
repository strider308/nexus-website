"use client";

import React, { useState, useRef } from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { BRAND_CONFIG } from "@/content/nexus";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import { gsap, useGSAP } from "@/lib/gsap/register";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    workflow: "",
    engagement: "diagnostic",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const engagementParam = params.get("engagement");
      if (engagementParam && ["diagnostic", "prototype", "build", "modernization"].includes(engagementParam)) {
        setFormData((prev) => ({ ...prev, engagement: engagementParam }));
      }
    }
  }, []);

  useGSAP(
    () => {
      if (!lineRef.current) return;
      const path = lineRef.current;
      const length = path.getTotalLength();
      
      // Animate steps connection line pulse
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" }
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerErrorMessage("");

    // Basic Client validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid work email is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.workflow.trim()) newErrors.workflow = "Workflow description is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) element.focus();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, honeypot }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server submission failed.");
      }

      setStatus("success");
      toast.success("Operational diagnostic request submitted.");
      setFormData({
        name: "",
        email: "",
        company: "",
        workflow: "",
        engagement: "diagnostic",
      });
    } catch (err: any) {
      setStatus("error");
      const msg = err?.message || "Submission failed. Please check connection and try again.";
      setServerErrorMessage(msg);
      toast.error(msg);
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      <Toaster theme="dark" closeButton />

      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10 px-6 md:px-12 pb-24 mt-12">
        {/* Page Header */}
        <div className="border-b border-[#dedbc8]/14 pb-8 flex flex-col gap-2">
          <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
            DIAGNOSTIC ENGAGEMENT
          </span>
          <h1 className="type-display text-5xl md:text-7xl mt-3 text-[#dedbc8]">
            Start a Conversation
          </h1>
          <p className="type-body text-base text-gray-300 max-w-xl mt-2">
            Tell us about your manual spreadsheets, message lists, or disconnected databases. We will help map the operational rules and build the systems.
          </p>
        </div>

        {/* Main Grid: Form vs. Process Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
          
          {/* Left Column: Form Intake (Primary Side) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {status === "success" ? (
              <div className="border border-[#2a7d8a] bg-[#2a7d8a]/5 p-8 flex flex-col gap-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#2a7d8a] font-bold">
                  Diagnostic Intake Received
                </h2>
                <p className="text-xs text-gray-300 leading-relaxed font-normal font-sans">
                  Thank you for outlining your workflow. A systems engineer will audit your description and contact you via email to schedule a diagnostic session.
                </p>
                <div className="h-[1px] bg-[#2a7d8a]/20 my-2" />
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-[#dedbc8] hover:underline text-left outline-none"
                >
                  &larr; Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                {/* Honeypot hidden input */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="bot_field"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Your Name</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samir Sharma"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`bg-[#0d0d0d] border-[#dedbc8]/20 text-[#dedbc8] rounded-none focus-visible:ring-1 focus-visible:ring-[#dedbc8] ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-red-400 text-xs font-mono">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Work Email</Label>
                    <Input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. samir@clinicos.com"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`bg-[#0d0d0d] border-[#dedbc8]/20 text-[#dedbc8] rounded-none focus-visible:ring-1 focus-visible:ring-[#dedbc8] ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <span id="email-error" className="text-red-400 text-xs font-mono">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Company / Project Name</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Outpatient Clinic Services Group"
                    aria-invalid={errors.company ? "true" : "false"}
                    aria-describedby={errors.company ? "company-error" : undefined}
                    className={`bg-[#0d0d0d] border-[#dedbc8]/20 text-[#dedbc8] rounded-none focus-visible:ring-1 focus-visible:ring-[#dedbc8] ${errors.company ? "border-red-500" : ""}`}
                  />
                  {errors.company && (
                    <span id="company-error" className="text-red-400 text-xs font-mono">{errors.company}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="engagement" className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Engagement Track</Label>
                  <select
                    id="engagement"
                    value={formData.engagement}
                    onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                    className="bg-[#0d0d0d] border border-[#dedbc8]/20 p-3 text-xs text-[#dedbc8] focus:outline-none focus:border-[#dedbc8] transition-colors rounded-none"
                  >
                    <option value="diagnostic">Workflow Diagnostic Mapping</option>
                    <option value="prototype">Prototype / Private Beta Development</option>
                    <option value="build">Operational System Build</option>
                    <option value="modernization">UX & Tech Stack Modernization</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="workflow" className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold flex flex-col gap-1">
                    <span>Describe the Current Workflow &amp; Silos</span>
                    <span className="text-[10px] text-red-400/80 font-normal normal-case tracking-normal font-sans">
                      Do not include passwords, patient records, payment-card information, access tokens or other sensitive records.
                    </span>
                  </Label>
                  <Textarea
                    id="workflow"
                    required
                    value={formData.workflow}
                    onChange={(e) => setFormData({ ...formData, workflow: e.target.value })}
                    placeholder="What manual spreadsheets, chat chains, or databases are currently disconnected? What is the main blocker?"
                    aria-invalid={errors.workflow ? "true" : "false"}
                    aria-describedby={errors.workflow ? "workflow-error" : undefined}
                    className={`bg-[#0d0d0d] border-[#dedbc8]/20 text-[#dedbc8] rounded-none focus-visible:ring-1 focus-visible:ring-[#dedbc8] min-h-[120px] ${errors.workflow ? "border-red-500" : ""}`}
                  />
                  {errors.workflow && (
                    <span id="workflow-error" className="text-red-400 text-xs font-mono">{errors.workflow}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="border border-[#dedbc8] bg-[#dedbc8] text-xs font-sans font-semibold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300 rounded-none w-full py-6 cursor-pointer"
                  >
                    {status === "submitting" ? "Submitting Request..." : BRAND_CONFIG.primaryCTA}
                  </Button>
                  <span className="text-xs font-mono text-gray-500 text-center mt-2">
                    We use the information you provide only to review and respond to your enquiry. Please review our Privacy Policy.
                  </span>
                </div>
              </form>
            )}

            {/* Direct Email alternative */}
            <div className="p-6 border border-[#dedbc8]/10 bg-[#0d0d0d] flex flex-col gap-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#dedbc8] font-bold">
                Alternative: Email Us Directly
              </h3>
              <p className="text-xs text-gray-400 font-normal leading-relaxed font-sans">
                If you prefer not to use our web intake, you can email our inbox at:
              </p>
              <div className="flex items-center gap-2 mt-1">
                <a href={`mailto:${BRAND_CONFIG.email}`} className="text-sm font-mono text-[#2a7d8a] hover:underline font-bold">
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Process & What happens next (Secondary Side) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Sequence flow map */}
            <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 flex flex-col gap-6 relative overflow-hidden">
              <h2 className="type-heading text-xl text-[#dedbc8] border-b border-[#dedbc8]/10 pb-3">
                What Happens Next
              </h2>

              <div className="flex flex-col gap-8 relative pl-10">
                {/* SVG connection line */}
                <div className="absolute left-[9px] top-4 bottom-4 w-[2px] pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 200">
                    <line x1="1" y1="0" x2="1" y2="200" stroke="rgba(222,219,200,0.06)" strokeWidth="2" />
                    <path
                      ref={lineRef}
                      d="M 1,0 L 1,200"
                      stroke="#2a7d8a"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-1 relative">
                  <div className="absolute -left-[37px] top-1 size-3 bg-[#0d0d0d] border border-gray-600 rounded-full z-10" />
                  <span className="text-xs font-mono text-[#2a7d8a] font-bold">STEP 01</span>
                  <span className="text-xs font-bold uppercase tracking-wide">Workflow Audit</span>
                  <span className="text-xs text-gray-400 font-light font-sans mt-0.5">We analyze your spreadsheet logic and identify blockers.</span>
                </div>

                <div className="flex flex-col gap-1 relative">
                  <div className="absolute -left-[37px] top-1 size-3 bg-[#0d0d0d] border border-gray-600 rounded-full z-10" />
                  <span className="text-xs font-mono text-[#2a7d8a] font-bold">STEP 02</span>
                  <span className="text-xs font-bold uppercase tracking-wide">Interactive Diagnostic</span>
                  <span className="text-xs text-gray-400 font-light font-sans mt-0.5">A joint session to map roles and transition triggers.</span>
                </div>

                <div className="flex flex-col gap-1 relative">
                  <div className="absolute -left-[37px] top-1 size-3 bg-[#0d0d0d] border border-gray-600 rounded-full z-10" />
                  <span className="text-xs font-mono text-[#2a7d8a] font-bold">STEP 03</span>
                  <span className="text-xs font-bold uppercase tracking-wide">Stack &amp; Proposal</span>
                  <span className="text-xs text-gray-400 font-light font-sans mt-0.5">We propose a software architecture and execution plan.</span>
                </div>
              </div>
            </div>

            {/* Quick Posture Checklist */}
            <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-4">
              <h3 className="type-heading text-lg text-[#dedbc8]">Our Direct Commitments</h3>
              <ul className="flex flex-col gap-3 text-xs text-gray-400 font-light leading-relaxed font-sans">
                <li className="flex gap-2 items-start">
                  <span className="text-green-400">&bull;</span>
                  <span>Direct founder technical consultations only.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-green-400">&bull;</span>
                  <span>Standalone codebase handovers with no lock-ins.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-green-400">&bull;</span>
                  <span>Clear, upfront scope pricing.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
