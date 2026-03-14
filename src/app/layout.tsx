import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://lively-kleicha-d45dc0.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL("https://lively-kleicha-d45dc0.netlify.app"),
  title: "Creometric | Digital Marketing Agency in Goa, India",
  description:
    "Creometric is a digital marketing agency based in Goa, India. We help brands grow through strategy, design, and technology.",
  openGraph: {
    title: "Creometric | Digital Marketing Agency in Goa, India",
    description:
      "Goa's most trusted digital marketing agency. We deliver real results in SEO, social media, PPC and web design for local businesses.",
    url: siteUrl,
    siteName: "Creometric",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Creometric — Digital Marketing Agency in Goa, India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creometric | Digital Marketing Agency in Goa, India",
    description:
      "Goa's most trusted digital marketing agency. SEO, social media, PPC and web design.",
    images: [`${siteUrl}/og-image.png`],
  },
};

// Tracking IDs from existing creometric.com
const GA_ID = "G-MZJW7K33NY";
const GTM_ID = "GTM-N4WPPM6";
const GT_ID = "GT-TNPBMMZ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <WhatsAppButton />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={GTM_ID} />

        {/* GA4 — primary */}
        <GoogleAnalytics gaId={GA_ID} />

        {/* GA4 — secondary (GT-TNPBMMZ) with linker */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gt-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('set', 'developer_id.dZTNiMT', true);
            gtag('config', '${GT_ID}', {
              linker: { domains: ['creometric.com'] }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
