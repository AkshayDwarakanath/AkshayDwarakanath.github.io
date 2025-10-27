/** @type {import('next').NextConfig} */
const REPO_BASE = process.env.BASE_PATH || ""; // e.g. "/akshay-portfolio" for project pages

const nextConfig = {
  output: "export",
  // For GitHub Pages project sites, Next needs a base path & asset prefix
  // If deploying to user/organization pages (root), keep these empty.
  basePath: REPO_BASE || undefined,
  assetPrefix: REPO_BASE ? `${REPO_BASE}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Exclude blog directory from Next.js compilation
  webpack: (config: any) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/blog/**', '**/node_modules/**'],
    };
    return config;
  },
  // Exclude blog from TypeScript checking
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src', 'app'], // Only lint Next.js directories
  },
};

module.exports = nextConfig
