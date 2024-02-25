/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'cz', 'de'],
    defaultLocale: 'en-US',
    // domains: [
    //   {
    //     domain: 'example.cz',
    //     defaultLocale: 'cz',
    //   },
    // ],
  },
};

export default nextConfig;
