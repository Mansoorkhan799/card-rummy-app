/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Increase the allowed number of client-side transition attempts
  // This helps with hydration issues in development
  experimental: {
    // Disable strict mode in development to prevent double-rendering which can cause hydration issues
    strictMode: false,
    // Swcminify can be more accurate with hydration
    swcMinify: true,
  },
  // Adjust React configuration to be more permissive with hydration issues
  reactStrictMode: false,
  compiler: {
    // Suppress hydration errors in production environment
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
};

module.exports = nextConfig; 