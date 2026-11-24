import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";

const sans = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const brand = "Northline";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: `${brand} | Video, Web, Ads & SEO`, template: `%s | ${brand}` },
  description: "A digital marketing agency for video editing, web design, Google Ads and SEO — one team built to grow your business predictably.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand,
    title: "Online growth, without the guesswork",
    description: "Video, web, ads and SEO in one team.",
  },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#111312" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand,
  url: site,
  areaServed: "Worldwide",
  serviceType: ["Video Editing", "Web Design", "Google Ads", "SEO"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={sans.variable}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <div className="grain" aria-hidden="true" />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}.hero__title .line>span{animation:none!important}`}</style>
        </noscript>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
