/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cardrummypk.org'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig 