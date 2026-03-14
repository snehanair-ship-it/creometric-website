import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SEO Services in Goa | Search Engine Optimisation | Creometric",
  description:
    "Top-rated SEO services in Goa by Creometric. We help businesses rank higher on Google with technical SEO, local SEO, content optimisation, and link building strategies.",
};

export default function SearchEngineOptimisationPage() {
  return (
    <ServicePageLayout
      title="SEO Services That Put Your Business on Page One of Google"
      subtitle="Search Engine Optimisation in Goa"
      description="When potential customers in Goa search for your products or services, your website should be the first thing they find. Creometric delivers data-driven SEO strategies that increase organic traffic, improve search rankings, and generate qualified leads for your business."
      benefits={[
        "Comprehensive technical SEO audits to fix crawl errors, speed issues, and indexing problems holding your site back",
        "Local SEO optimisation including Google Business Profile management to dominate Goa-specific search results",
        "Keyword research focused on high-intent search terms your Goa customers are actually using",
        "On-page optimisation of titles, meta descriptions, headings, and content structure for maximum relevance",
        "Quality link building through outreach, digital PR, and local Goa business directory submissions",
        "Regular content creation and blog strategy aligned with your target keywords and audience questions",
        "Transparent monthly reporting with rankings, traffic, and conversion data — no vanity metrics",
        "Mobile-first optimisation ensuring your site performs flawlessly on every device",
      ]}
      process={[
        {
          step: "SEO Audit & Competitive Analysis",
          description:
            "We perform a thorough audit of your website's technical health, on-page factors, and backlink profile. We also analyse your top competitors in Goa to identify ranking opportunities they are missing.",
        },
        {
          step: "Keyword Strategy & Mapping",
          description:
            "Using tools like Ahrefs and Google Search Console, we identify the most valuable keywords for your business. Each keyword is mapped to a specific page on your site to avoid cannibalisation and maximise ranking potential.",
        },
        {
          step: "On-Page & Technical Implementation",
          description:
            "We optimise your site's structure, meta tags, internal linking, schema markup, and page speed. Every technical barrier to ranking is addressed systematically.",
        },
        {
          step: "Content & Link Building",
          description:
            "We create SEO-optimised content that answers your audience's questions and attracts authoritative backlinks. Our link building focuses on quality over quantity, targeting relevant Goa and industry publications.",
        },
        {
          step: "Monitoring & Continuous Improvement",
          description:
            "SEO is never finished. We track your rankings weekly, analyse algorithm updates, and continuously refine your strategy to maintain and improve your search visibility in Goa and nationally.",
        },
      ]}
      faq={[
        {
          q: "How long does it take to see SEO results in Goa?",
          a: "SEO is a medium to long-term strategy. Most businesses start seeing measurable improvements in rankings and organic traffic within 3 to 6 months. Competitive keywords may take longer, while local Goa-focused terms can rank faster due to lower competition. We provide monthly progress reports so you can track improvements from the start.",
        },
        {
          q: "Do you guarantee first page rankings on Google?",
          a: "No ethical SEO agency can guarantee specific rankings because Google's algorithm considers hundreds of factors. What we do guarantee is a proven, white-hat methodology that has consistently delivered results for our Goa clients. We focus on sustainable growth, not shortcuts that risk penalties.",
        },
        {
          q: "What is the difference between local SEO and regular SEO?",
          a: "Local SEO targets customers in a specific geographic area — in our case, Goa and surrounding regions. It involves optimising your Google Business Profile, building local citations, earning reviews, and targeting location-based keywords. Regular SEO casts a wider net for national or global visibility. Most Goa businesses benefit from a combination of both.",
        },
      ]}
    />
  );
}
