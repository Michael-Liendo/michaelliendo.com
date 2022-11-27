/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: '*' }],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
