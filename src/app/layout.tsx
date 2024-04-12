import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComp from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="m-0 h-full p-0 font-sans antialiased">
      <body className="h-full">
        <div className="h-full">
          {children}
        </div>
        <FooterComp />
      </body>
    </html>
  );
}
