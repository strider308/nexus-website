import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com; media-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
