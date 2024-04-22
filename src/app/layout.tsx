import type { Metadata } from "next";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: "Clovers",
  description: "lin zheng's website",
};

// TODO fetch cache
export const revalidate = 500

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme className="h-full dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
