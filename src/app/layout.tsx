import type { Metadata } from "next";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "Clovers",
  description: "lin zheng's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 h-full p-0">
      <body>
        <ThemeProvider attribute="class">
          <Theme className="h-full dark">
            <div className="h-full">
              {children}
            </div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
