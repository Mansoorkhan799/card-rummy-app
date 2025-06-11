/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable React strict mode to prevent double-rendering which can cause hydration issues
  reactStrictMode: false,
  poweredByHeader: false,
};

module.exports = nextConfig; 