import "./globals.css";
import '@radix-ui/themes/styles.css';

import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

import HeaderComp from '@/components/Header';

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
          <HeaderComp />
          {children}
        </Theme>
      </body>
    </html>
  );
}
