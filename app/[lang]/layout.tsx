import type { Metadata } from "next";
import { Providers } from '../providers'
import "./globals.css";

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
          <Providers>{children}</Providers>
        </body>
      </html>
  );
}

