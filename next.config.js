/** @type {import('next').NextConfig} */
const path = require('path');
const terserOptions = require('./terser.config');

// Add browserslist to target modern browsers
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable React strict mode to prevent double-rendering which can cause hydration issues
  reactStrictMode: false,
  poweredByHeader: false,
  
  // Add image optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    domains: ['cardrummypk.org', 'www.cardrummypk.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cardrummypk.org',
      }
    ],
    // Content security policy
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Image path configuration
    loader: 'default',
    path: '/_next/image'
  },
  
  // Use modern JavaScript optimization with SWC
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable compression
  compress: true,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Target modern browsers to avoid legacy JavaScript
  // This is the key fix for "serving legacy JavaScript to modern browsers" issue
  swcMinify: true,
  
  // Performance optimization - fix experimental options
  experimental: {
    // Only keep well-supported features
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
    // Enable server actions as a boolean
    serverActions: true,
    webVitalsAttribution: ['CLS', 'LCP']
  },
  
  // Headers for better SEO and crawler performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate'
          }
        ]
      }
    ];
  },
  
  webpack: (config, { isServer, dev, webpack }) => {
    // JavaScript optimization for modern browsers
    if (!dev && !isServer) {
      // Use custom terser config for minification
      const terserIndex = config.optimization.minimizer.findIndex(
        (minimizer) => minimizer.constructor.name === 'TerserPlugin'
      );
      
      if (terserIndex > -1) {
        config.optimization.minimizer[terserIndex].options.terserOptions = terserOptions;
      }
      
      // Add modern JS optimizations
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js/modules': path.resolve(__dirname, 'node_modules/core-js/modules'),
      };
    }
    
    return config;
  },
  
  // Redirects for better SEO - simplify the redirects
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig; 