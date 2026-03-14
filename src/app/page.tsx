import type { Metadata } from "next";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

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
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "PPC / Google Ads" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Analytics" } },
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
        text: "Digital marketing costs in Goa vary based on your goals and scope. Basic packages start around \u20B915,000\u2013\u20B925,000/month. Comprehensive strategies range from \u20B940,000\u2013\u20B91,00,000+/month.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most businesses see measurable improvements within 3\u20136 months. Competitive industries may take 6\u201312 months.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Creometric offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO, Social Media Management, PPC/Google Ads, Website Design, Content Marketing, and Web Analytics.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white pointer-events-none" />
        <div className="relative z-10">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4">
            Digital Marketing Agency in Goa
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance">
            We Help Brands
            <span className="text-orange-500"> Grow</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Strategy. Design. Technology. We deliver real results in SEO, social
            media, PPC, and web design for businesses across Goa and India.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="rounded-full bg-orange-500 text-white px-8 py-3.5 text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
            >
              Get a Free Audit
            </a>
            <a
              href="#services"
              className="rounded-full border border-gray-300 px-8 py-3.5 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Our Services
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Trusted by 20+ businesses &bull; 250+ projects completed &bull; 5
            Cr+ ROI generated
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* FAQ */}
      <FAQ />

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
