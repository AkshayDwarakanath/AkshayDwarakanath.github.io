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
};

module.exports = nextConfig
