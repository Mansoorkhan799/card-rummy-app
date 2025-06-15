/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cardrummypk.org', 'www.cardrummypk.org'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig; 