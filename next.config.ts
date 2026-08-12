import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
