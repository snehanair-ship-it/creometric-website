import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web Analytics & Data Tracking Services in Goa | Creometric",
  description:
    "Professional web analytics and data tracking services in Goa. Creometric sets up GA4, conversion tracking, and custom dashboards so you can make data-driven marketing decisions.",
};

export default function WebAnalyticsPage() {
  return (
    <ServicePageLayout
      title="Web Analytics That Turn Raw Data Into Actionable Growth Insights"
      subtitle="Web Analytics & Tracking in Goa"
      description="You cannot improve what you do not measure. Creometric helps Goa businesses set up accurate tracking, build custom dashboards, and interpret analytics data so every marketing decision is backed by evidence — not guesswork."
      benefits={[
        "Google Analytics 4 (GA4) setup and configuration tailored to your business goals and conversion events",
        "Google Tag Manager implementation for clean, flexible tracking without constant developer involvement",
        "Conversion tracking across forms, phone calls, purchases, and custom events specific to your business",
        "Custom dashboards in Looker Studio (Data Studio) that visualise the metrics that matter most to you",
        "Cross-channel attribution modelling to understand which marketing channels actually drive your revenue",
        "Heatmap and user behaviour analysis using tools like Hotjar to identify UX issues and conversion blockers",
        "Regular data audits to ensure your tracking is accurate and your reporting is trustworthy",
        "Training sessions for your team so you can read and act on your own analytics data confidently",
      ]}
      process={[
        {
          step: "Analytics Audit & Requirements Gathering",
          description:
            "We review your current tracking setup, identify gaps and errors, and define the key metrics and conversion events your Goa business needs to track. Many businesses we work with discover their existing data is inaccurate or incomplete.",
        },
        {
          step: "Tracking Implementation",
          description:
            "We set up GA4, Google Tag Manager, and any additional tracking tools your business requires. Every conversion event — form submissions, phone calls, purchases, downloads — is configured and tested for accuracy.",
        },
        {
          step: "Dashboard & Reporting Setup",
          description:
            "We build custom Looker Studio dashboards that pull data from all your marketing channels into one clear view. No more logging into five different platforms to understand your performance.",
        },
        {
          step: "Insights & Recommendations",
          description:
            "Data without interpretation is just numbers on a screen. We analyse your data monthly and provide actionable recommendations — where to increase spend, which pages to optimise, and which channels to double down on.",
        },
      ]}
      faq={[
        {
          q: "Why is web analytics important for my Goa business?",
          a: "Without accurate analytics, you are making marketing decisions in the dark. Web analytics tells you where your visitors come from, which pages they engage with, where they drop off, and what drives them to convert. For Goa businesses investing in digital marketing, this data is essential for maximising your return on every rupee spent.",
        },
        {
          q: "We already have Google Analytics installed. Do we still need help?",
          a: "Most likely, yes. The majority of Google Analytics setups we audit have issues — from missing conversion tracking to incorrect filters or duplicate data. GA4 in particular requires proper configuration of events, parameters, and audiences to be useful. A professional setup ensures the data you are looking at is actually accurate and actionable.",
        },
        {
          q: "What is the difference between GA4 and the old Universal Analytics?",
          a: "Google fully replaced Universal Analytics with GA4 in 2024. GA4 uses an event-based data model instead of session-based tracking, offers better cross-device measurement, and integrates more closely with Google Ads. If your site still references Universal Analytics or was set up before the migration, you likely need a fresh GA4 implementation to ensure proper data collection.",
        },
      ]}
    />
  );
}
