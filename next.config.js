/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/restfront',
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    API_RESULTADOS: process.env.API_RESULTADOS
  }
}

module.exports = nextConfig
