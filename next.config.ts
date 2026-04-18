import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tryhackme.com",
        pathname: "/img/badges/**",
      },
      {
        protocol: "https",
        hostname: "tryhackme-badges.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
