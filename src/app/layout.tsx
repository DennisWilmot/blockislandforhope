import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Block Island Hope for Jamaica",
  description:
    "A story-led charity website for Block Island Hope for Jamaica, serving Jamaican communities through outreach, medical missions, and feeding programmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <SiteHeader />
        <main>{children}</main>
        <CtaBanner />
        <SiteFooter />
      </body>
    </html>
  );
}
