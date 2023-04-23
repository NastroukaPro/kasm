/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Nastrouka Pro',
    description: 'The test store from Nastrouka Pro',
    icon: '/img/logo.svg',
    listUrl: 'https://NastroukaPro.github.io/kasm/',
    contactUrl: 'https://github.com/NastroukaPro/kasm/issues/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
