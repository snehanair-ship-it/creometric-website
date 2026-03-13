import type { Metadata } from "next";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title:
    "Digital Marketing Agency in Goa | SEO, Social Media & PPC — Creometric",
  description:
    "Goa's most trusted digital marketing agency. We deliver real results in SEO, social media, PPC and web design for local businesses. Get a free audit today.",
  openGraph: {
    title:
      "Digital Marketing Agency in Goa | SEO, Social Media & PPC — Creometric",
    description:
      "Goa's most trusted digital marketing agency. We deliver real results in SEO, social media, PPC and web design for local businesses. Get a free audit today.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Creometric",
  description:
    "Digital marketing agency in Goa, India offering SEO, social media management, PPC, website design, content marketing and web analytics.",
  url: "https://lively-kleicha-d45dc0.netlify.app",
  telephone: "+919145246464",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goa",
    addressRegion: "Goa",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.4909,
    longitude: 73.8278,
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Social Media Management" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "PPC / Google Ads" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Website Design" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Content Marketing" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Web Analytics" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Goa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing costs in Goa vary based on your goals and scope. Basic packages for small businesses start around ₹15,000–₹25,000 per month for SEO or social media management. Comprehensive strategies covering SEO, PPC, social media and content marketing typically range from ₹40,000–₹1,00,000+ per month. Contact Creometric for a free audit and custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a long-term strategy. Most businesses start seeing measurable improvements in organic traffic and rankings within 3–6 months. Competitive industries may take 6–12 months for significant results. At Creometric, we provide monthly reports so you can track progress from day one.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Creometric offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creometric offers a full suite of digital marketing services including Search Engine Optimization (SEO), Social Media Management, Pay-Per-Click Advertising (Google Ads), Website Design & Development, Content Marketing, and Web Analytics. We serve local businesses in Goa and clients across India.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Creometric
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">
          A digital marketing agency in Goa, India. We help brands grow through
          strategy, design, and technology.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
