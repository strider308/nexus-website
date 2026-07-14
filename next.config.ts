import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
