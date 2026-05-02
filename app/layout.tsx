import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cockpit — De cockpit voor je marketplace business",
  description: "Multi-marketplace dashboard voor NL/BE e-commerce sellers. Bol, Amazon, Praxis en Shopify in één overzicht. Werkelijke marges, niet alleen omzet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
