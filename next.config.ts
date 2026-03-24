import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "pub-5587da4808704294ad59666306105e43.r2.dev",
    }],
  },
  experimental: { serverActions: { bodySizeLimit: "12mb" } },
};
export default nextConfig;