import "./globals.css";
import './prism.css'
import '@radix-ui/themes/styles.css';

import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "linzheng's",
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
