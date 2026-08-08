import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const GA_MEASUREMENT_ID = "G-9F6V5K1QY1";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — Web, ERP, AI & Marketing, under one roof`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital agency india",
    "web development company",
    "erp software company",
    "school management system",
    "clinic management software",
    "ai automation agency",
    "performance marketing agency",
    "social media management",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${site.domain}`,
    siteName: site.name,
    title: `${site.name} — We build it. We grow it.`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — We build it. We grow it.`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: `https://${site.domain}`,
  description: site.description,
  email: site.email,
  sameAs: [site.socials.instagram, site.socials.linkedin, site.socials.x, site.socials.threads],
  areaServed: "IN",
  knowsAbout: [
    "Web Development",
    "ERP Software",
    "School Management System",
    "Clinic Management System",
    "AI Automation",
    "Performance Marketing",
    "Social Media Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
