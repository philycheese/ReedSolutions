/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // GitHub Pages serves from /<repo> by default; set BASE_PATH in CI to "/<repo>"
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.BASE_PATH || "",

  // GitHub Pages works best with /route/ -> /route/index.html
  trailingSlash: true,

  // next/image optimization requires a server; disable for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



