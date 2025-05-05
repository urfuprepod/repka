import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["antd", "recordrtc"],
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      stream: require.resolve("stream-browserify"),
    };
    return config;
  },
};

export default nextConfig;
