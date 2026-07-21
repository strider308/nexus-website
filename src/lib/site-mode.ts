/**
 * Site Mode Resolver
 *
 * Resolves the active experience mode ("classic" | "cinematic").
 * Defaults safely to "classic" if unset, invalid, or during SSR fallback.
 */

export type SiteMode = "classic" | "cinematic";

export function getSiteMode(searchParams?: { [key: string]: string | string[] | undefined }): SiteMode {
  // 1. Check URL query parameter override (?mode=cinematic or ?mode=classic)
  if (searchParams?.mode) {
    const rawMode = Array.isArray(searchParams.mode) ? searchParams.mode[0] : searchParams.mode;
    if (rawMode === "cinematic") return "cinematic";
    if (rawMode === "classic") return "classic";
  }

  // 2. Check Environment Variable
  const envMode = process.env.NEXT_PUBLIC_NEXUS_SITE_MODE;
  if (envMode === "cinematic") return "cinematic";
  if (envMode === "classic") return "classic";

  // 3. Fail-safe default is ALWAYS classic
  return "classic";
}
