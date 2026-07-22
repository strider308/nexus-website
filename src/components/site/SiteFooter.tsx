import Link from "next/link";
import { METADATA } from "@/lib/content/nexus";

const socialLinks = [
  { label: "X", href: METADATA.socials.x },
  { label: "LinkedIn", href: METADATA.socials.linkedin },
  { label: "GitHub", href: METADATA.socials.github },
].filter((link): link is { label: string; href: string } => Boolean(link.href));

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="content-wrap flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-base font-bold text-foreground">Nexus</p><p className="mt-1 max-w-sm">Custom workflow software for founders and operators.</p></div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/sitemap.xml">Sitemap</Link>
          {socialLinks.map((link) => <a key={link.label} href={link.href} rel="noreferrer" target="_blank">{link.label}</a>)}
        </div>
      </div>
    </footer>
  );
}
