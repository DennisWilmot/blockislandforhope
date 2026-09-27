import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { socialLinks, SUPPORT_EMAIL, WHATSAPP_DISPLAY } from "@/data/site-contact";

const siteName = "Block Island Hope for Jamaica";
const siteDescription =
  "Supporting Jamaican communities through practical outreach, home restoration, education, health support, and trusted local partnerships.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blockislandhopeforjamaica.org";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  foundingDate: "2024",
  email: SUPPORT_EMAIL,
  telephone: WHATSAPP_DISPLAY,
  areaServed: {
    "@type": "Country",
    name: "Jamaica",
  },
  sameAs: socialLinks.filter((link) => link.label !== "WhatsApp").map((link) => link.href),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "support",
    email: SUPPORT_EMAIL,
    telephone: WHATSAPP_DISPLAY,
    availableLanguage: "English",
  },
};

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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_JM",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/optimized/DSC02671.jpg",
        width: 1200,
        height: 675,
        alt: "Block Island Hope for Jamaica volunteers serving a school community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/optimized/DSC02671.jpg"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
