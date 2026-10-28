import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  turbopack: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
