import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A package-lock.json in the home folder makes Next guess the wrong workspace root.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
