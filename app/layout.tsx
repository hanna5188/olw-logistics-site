import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: {
    default:
      "OLW Global | Cross-Border Logistics, Warehousing & Fulfillment",
    template: "%s | OLW Global",
  },
  description:
    "OLW Global delivers cross-border logistics, warehousing, and fulfillment—international freight, customs clearance, U.S. transportation, and omnichannel warehouse services.",
  keywords: [
    "OLW Global",
    "cross-border logistics",
    "warehousing and fulfillment",
    "China to USA logistics",
    "customs clearance",
    "Los Angeles 3PL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
