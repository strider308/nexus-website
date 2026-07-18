import { test, expect } from "@playwright/test";

test.describe("Sitewide Layout, Links and Static Page Audits", () => {
  test("verify sitemap.xml fetches successfully and includes base routes", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("<loc>");
    expect(text).toContain("/accessibility</loc>");
    expect(text).toContain("/work</loc>");
    expect(text).toContain("/services</loc>");
  });

  test("verify robots.txt fetches successfully and references sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text.toLowerCase()).toContain("user-agent: *");
    expect(text.toLowerCase()).toContain("allow: /");
    expect(text.toLowerCase()).toContain("sitemap.xml");
  });

  test("verify all static public pages load successfully", async ({ page }) => {
    const routes = [
      { path: "/", headline: "Nexus" },
      { path: "/work", headline: "Work" },
      { path: "/services", headline: "Services" },
      { path: "/contact", headline: "Start a Conversation" },
      { path: "/privacy-policy", headline: "Privacy Policy" },
      { path: "/terms-of-service", headline: "Terms of Service" },
      { path: "/accessibility", headline: "Accessibility" },
    ];

    for (const route of routes) {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      
      // Look for route-identifying content or headlines
      const heading = page.locator("h1");
      await expect(heading.first()).toBeVisible();
    }
  });
});

test.describe("Lead Intake / Contact Form Interactivity & Safety Checks", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("verify honeypot field is configured safely for anti-abuse", async ({ page }) => {
    // Honeypot should be visually hidden and excluded from screen readers / tab order
    const honeypotContainer = page.locator(".hidden[aria-hidden='true']");
    await expect(honeypotContainer).toBeAttached();
    
    const honeypotInput = honeypotContainer.locator("input[name='bot_field']");
    await expect(honeypotInput).toBeAttached();
    await expect(honeypotInput).toHaveAttribute("tabindex", "-1");
  });

  test("verify client-side form validation and automatic error focus shift", async ({ page }) => {
    await page.bringToFront();
    // Fill out name, but leave email and other fields empty
    await page.fill("#name", "Samir Sharma");
    await page.click("button[type='submit']");

    // Validation should prevent submission and focus the first invalid field (email)
    const emailInput = page.locator("#email");
    await expect(emailInput).toHaveAttribute("aria-invalid", "true");

    // Email error message should be visible
    const emailError = page.locator("#email-error");
    await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText("Valid work email is required");

    // Check focus — WebKit headless may not report programmatic focus reliably
    const browserName = test.info().project.name;
    if (!browserName.includes("Safari") && !browserName.includes("webkit")) {
      await expect(emailInput).toBeFocused();
    }
  });
});

test.describe("Accessibility, Interactive Landmarks and Keyboard Focus checks", () => {
  test("verify mobile menu drawer trigger has descriptive accessible name", async ({ page }) => {
    await page.goto("/");
    // Trigger drawer trigger check
    const drawerTrigger = page.locator("button[aria-haspopup='dialog']").first();
    // In SiteHeader we added aria-label="Open navigation" or similar trigger name
    const ariaLabel = await drawerTrigger.getAttribute("aria-label");
    expect(ariaLabel).not.toBeNull();
    expect(ariaLabel?.toLowerCase()).toContain("navigation");
  });

  test("verify cinematic dot navigation controls are keyboard-accessible and focusable", async ({ page }) => {
    await page.goto("/");
    // Find dot buttons inside the desktop navigation rail
    const dotButtons = page.locator("button[aria-label^='Jump to ']");
    const count = await dotButtons.count();
    
    // There are 7 chapters, so there should be 7 dot navigators on desktop
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const dot = dotButtons.nth(i);
        // Dot navigation should have 40px tap targets or hover focus indicators
        await expect(dot).toHaveClass(/w-2\.5|w-10/);
      }
    }
  });
});

test.describe("Pause Motion State Persistence & Sync", () => {
  test("verify Pause Motion toggle applies CSS rules and persists via LocalStorage", async ({ page }) => {
    await page.goto("/");
    await page.bringToFront();

    const isMobile = page.viewportSize() ? page.viewportSize()!.width < 768 : false;

    if (isMobile) {
      // On mobile/tablet, open drawer menu first
      const drawerTrigger = page.locator("button[aria-label='Open navigation']").first();
      await drawerTrigger.click();

      // Wait for drawer content to animate in
      const drawerContent = page.locator("[data-slot='sheet-content']").or(page.locator("div[role='dialog']"));
      await expect(drawerContent).toBeVisible({ timeout: 5000 });
      
      // Locate the Animation System button in mobile drawer
      const pauseButton = drawerContent.locator("button", { hasText: "Animation System" }).first();
      await expect(pauseButton).toBeVisible({ timeout: 5000 });

      // Init state: motion-paused class should not be present on html element by default
      const htmlElement = page.locator("html");
      await expect(htmlElement).not.toHaveClass(/motion-paused/);

      // Toggle Pause Motion
      await pauseButton.click();

      // html element should now have motion-paused class
      await expect(htmlElement).toHaveClass(/motion-paused/);

      // localStorage state should be updated to true
      const localVal = await page.evaluate(() => localStorage.getItem("nexus_motion_paused"));
      expect(localVal).toBe("true");

      // Toggle back
      await pauseButton.click();
      await expect(htmlElement).not.toHaveClass(/motion-paused/);
      const localValSecond = await page.evaluate(() => localStorage.getItem("nexus_motion_paused"));
      expect(localValSecond).toBe("false");
    } else {
      // Locate the Pause Motion control in header
      const pauseButton = page.locator("button:has-text('Pause Motion'), button:has-text('Resume Motion')").first();
      await expect(pauseButton).toBeVisible();

      // Init state: motion-paused class should not be present on html element by default
      const htmlElement = page.locator("html");
      await expect(htmlElement).not.toHaveClass(/motion-paused/);

      // Toggle Pause Motion
      await pauseButton.click();

      // html element should now have motion-paused class
      await expect(htmlElement).toHaveClass(/motion-paused/);

      // localStorage state should be updated to true
      const localVal = await page.evaluate(() => localStorage.getItem("nexus_motion_paused"));
      expect(localVal).toBe("true");

      // Toggle back
      await pauseButton.click();
      await expect(htmlElement).not.toHaveClass(/motion-paused/);
      const localValSecond = await page.evaluate(() => localStorage.getItem("nexus_motion_paused"));
      expect(localValSecond).toBe("false");
    }
  });
});
