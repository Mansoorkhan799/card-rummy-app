/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  
  // Image configuration
  images: {
    domains: ['cardrummypk.org', 'www.cardrummypk.org'],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cardrummypk.org',
      }
    ]
  },
  
  // Styled components support
  compiler: {
    styledComponents: true
  },
  
  // Basic optimization
  swcMinify: true,
  
  // Simple redirects
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