import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarginGrip — Grip op je marge, over al je marketplaces",
  description: "Zie elke dag wat je wérkelijk overhoudt op Bol, Amazon, Praxis en Shopify — tot op de cent, gevalideerd tegen de marketplace-factuur. Zelf doen, met begeleiding of volledig uitbesteed.",
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
