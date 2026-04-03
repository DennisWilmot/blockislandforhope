import type { Metadata } from "next";

import "./globals.css";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Block Island for Hope",
  description:
    "A story-led charity website for Block Island for Hope, serving Jamaican communities through outreach, medical missions, and feeding programmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <SiteHeader />
        <main>{children}</main>
        <CtaBanner />
        <SiteFooter />
      </body>
    </html>
  );
}
