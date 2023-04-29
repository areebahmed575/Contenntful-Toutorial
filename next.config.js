/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SPACE_ID: "ro0789tt2xp9",
    CONTENTFUL_ACCESS_KEY: "ULtZ6Hr6hzoe_VFZvuQ67fyeCbKpuaqBDQfoc4myqTs"
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
