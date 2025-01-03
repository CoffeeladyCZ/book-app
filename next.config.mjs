import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'cz'],
    defaultLocale: 'en-US',
  },
};

export default withSentryConfig(nextConfig, {
  org: "test-jyu",
  project: "book-app",

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,
});