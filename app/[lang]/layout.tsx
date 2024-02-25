import type { Metadata } from "next";
import { Providers } from '../providers'

import { dir } from 'i18next'
import { languages } from '../settings'

import "./globals.css";

export const metadata: Metadata = {
  title: "Book App",
  description: "A simple book app",
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: {
    lang,
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: string;
  };
}>) {
  return (
      <html lang={lang} dir={dir(lang)}>
        <Providers>{children}</Providers>
      </html>
  );
}

