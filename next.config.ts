import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cinematic",
        destination: "/",
        permanent: true,
      },
      {
        source: "/classic",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
