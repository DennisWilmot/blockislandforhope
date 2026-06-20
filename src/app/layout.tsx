import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BackToSchoolBanner } from "@/components/ui/BackToSchoolBanner";

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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <BackToSchoolBanner />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
