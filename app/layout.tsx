import type { Metadata } from "next";
import { Providers } from './providers'

import "./globals.css";

export const metadata: Metadata = {
  title: "Book App",
  description: "A simple book app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>

    </html>
  );
}

