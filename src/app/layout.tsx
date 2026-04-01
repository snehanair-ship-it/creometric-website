import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://creometric.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "NSnkzpHnqcPLki1ZYaxuNc0KjMcdKzU61SgYOy-JGrU",
  },
  title: "Creometric | AI-Powered Digital Growth Agency in India",
  description:
    "Creometric is an AI-powered digital growth agency based in India. We use intelligent automation, predictive analytics, and machine learning to drive measurable business results.",
  openGraph: {
    title: "Creometric | AI-Powered Digital Growth Agency in India",
    description:
      "AI-driven marketing that delivers real results. Predictive SEO, intelligent ad optimization, and data-powered strategies for businesses ready to scale.",
    url: siteUrl,
    siteName: "Creometric",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creometric | AI-Powered Digital Growth Agency in India",
    description:
      "AI-driven marketing that delivers real results. Predictive SEO, intelligent automation, and data-powered growth strategies.",
  },
};

// Tracking IDs from existing creometric.com
const GA_ID = "G-MZJW7K33NY";
const GTM_ID = "GTM-N4WPPM6";
const GT_ID = "GT-TNPBMMZ";

// Ad platform pixels — replace YOUR_*_ID with actual IDs when ready
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased font-inter`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:rounded-lg focus:bg-orange-500 focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
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

        {/* Meta Pixel (Facebook/Instagram) */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* LinkedIn Insight Tag */}
        {LINKEDIN_PARTNER_ID && (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
        )}

        {/* Clicky Web Analytics */}
        <Script
          async
          data-id="101427348"
          src="//static.getclicky.com/js"
          strategy="afterInteractive"
        />

        {/* Google Ads Conversion Tag */}
        {GADS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gads-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('config', '${GADS_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
