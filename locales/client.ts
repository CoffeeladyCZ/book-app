'use client';

import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } =
  createI18nClient({
    en: async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return import('./en');
    },
    cs: async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return import('./cs');
    },
  });
