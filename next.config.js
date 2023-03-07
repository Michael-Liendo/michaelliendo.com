/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'cdn.michaelliendo.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
  },
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
