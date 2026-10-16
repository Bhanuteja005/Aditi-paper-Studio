import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // v1 photography comes from Unsplash until the generated images are dropped into public/img
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
