/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['backend.peruexploring.pe'],
  },
  target: 'server', // Agrega esta línea

}

module.exports = nextConfig
