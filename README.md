# Nexus website

Nexus is a static Next.js marketing site for a founder-led workflow software studio.

## Local development

```powershell
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Public identity configuration

The site intentionally fails closed for public identity. To publish a canonical URL, contact inbox, and social links, the owner must verify and set:

```text
NEXT_PUBLIC_SITE_URL_VERIFIED=true
NEXT_PUBLIC_SITE_URL=https://...
NEXT_PUBLIC_CONTACT_VERIFIED=true
NEXT_PUBLIC_CONTACT_EMAIL=...
NEXT_PUBLIC_CONTACT_URL=...
NEXT_PUBLIC_X_URL=...
NEXT_PUBLIC_LINKEDIN_URL=...
NEXT_PUBLIC_GITHUB_URL=...
```

Do not add values that are not owner-verified. The marketing site uses no analytics or non-essential cookies.
