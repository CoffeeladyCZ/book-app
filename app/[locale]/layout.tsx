import type { Metadata } from "next";

import { Providers } from '../Providers';
import "./globals.css";
import { I18nProviderClient } from '../../locales/client';

export const metadata: Metadata = {
  title: "Book App",
  description: "A simple book app",
};

export default function RootLayout({
  children,
  params: {
    locale,
  }
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
      <html lang={locale}>
        <body>
          <Providers>
            <I18nProviderClient locale={locale}>
              {children}
            </I18nProviderClient>
          </Providers>
        </body>
      </html>
  );
}

