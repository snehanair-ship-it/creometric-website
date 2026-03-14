import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Website Design & Development in Goa | Creometric",
  description:
    "Professional website design and development services in Goa. Creometric builds fast, mobile-friendly, SEO-optimised websites that convert visitors into customers for local businesses.",
};

export default function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      title="Website Design That Converts Visitors Into Customers"
      subtitle="Website Design & Development in Goa"
      description="Your website is your most important salesperson — it works 24/7 and never takes a day off. Creometric designs and develops high-performance websites for Goa businesses that load fast, look stunning on every device, and are built from the ground up to generate leads and sales."
      benefits={[
        "Custom designs tailored to your brand — no cookie-cutter templates that make you look like every other business in Goa",
        "Mobile-first, responsive development that ensures a seamless experience on phones, tablets, and desktops",
        "Built-in SEO foundations with clean code, fast load times, and optimised site architecture",
        "Conversion-focused layouts with strategic placement of calls-to-action, contact forms, and trust signals",
        "Content management systems like WordPress that let you update your own content without needing a developer",
        "SSL security, regular backups, and ongoing maintenance to keep your website safe and running smoothly",
        "Integration with Google Analytics, search console, and your existing business tools",
        "Fast turnaround — most projects launch within 4 to 8 weeks from kickoff",
      ]}
      process={[
        {
          step: "Discovery & Wireframing",
          description:
            "We start by understanding your business goals, target audience, and competitors in Goa. We then create wireframes that map out the structure and user flow of your website before any design work begins.",
        },
        {
          step: "Visual Design & Branding",
          description:
            "Our designers create high-fidelity mockups that reflect your brand identity. You review and approve the designs before we move to development — ensuring the final product matches your vision exactly.",
        },
        {
          step: "Development & Integration",
          description:
            "We build your website using clean, modern code with a focus on speed and accessibility. We integrate your CMS, contact forms, payment gateways, maps, and any third-party tools your business needs.",
        },
        {
          step: "Testing & Quality Assurance",
          description:
            "Every page is tested across browsers and devices for functionality, responsiveness, and load speed. We fix every issue before launch so your customers get a flawless experience from day one.",
        },
        {
          step: "Launch & Ongoing Support",
          description:
            "Once you approve, we launch your site and monitor it closely. We offer ongoing maintenance plans to handle updates, security patches, and content changes so your website stays in peak condition.",
        },
      ]}
      faq={[
        {
          q: "How much does a website cost for a business in Goa?",
          a: "Website costs vary based on complexity, number of pages, and features required. A professional business website typically starts from INR 30,000 for a standard informational site. E-commerce websites and custom web applications cost more depending on functionality. We provide detailed quotes after understanding your specific needs during our free consultation.",
        },
        {
          q: "Will my website work well on mobile phones?",
          a: "Absolutely. Over 70 percent of web traffic in India comes from mobile devices, so every website we build is designed mobile-first. This means we start with the mobile experience and scale up to tablets and desktops, ensuring your site looks and functions perfectly on every screen size.",
        },
        {
          q: "Can I update the website content myself after it is built?",
          a: "Yes. We build most websites on WordPress or similar content management systems that allow you to edit text, swap images, add blog posts, and manage pages without any coding knowledge. We also provide a walkthrough session after launch so you feel confident managing your own content.",
        },
      ]}
    />
  );
}
