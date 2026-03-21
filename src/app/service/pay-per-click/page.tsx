import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI-Driven PPC & Google Ads in Goa | Creometric",
  description:
    "AI-driven PPC and Google Ads management in Goa. Creometric uses intelligent bid optimization, predictive audience targeting, and real-time AI to maximize ROI on every rupee of ad spend.",
};

export default function PayPerClickPage() {
  return (
    <ServicePageLayout
      title="AI-Optimized PPC That Delivers Leads From Day One"
      subtitle="Smart PPC & Paid Advertising in Goa"
      heroImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
      description="Stop wasting money on ads that do not convert. Creometric uses AI-driven bid management, predictive audience modeling, and real-time optimization to run PPC campaigns on Google, Meta, and LinkedIn that put your Goa business in front of high-intent customers — with every rupee tracked and maximized by machine learning."
      benefits={[
        "Google Ads certified team with experience managing campaigns for Goa businesses across industries",
        "Granular keyword targeting that reaches customers actively searching for your products or services",
        "Landing page optimisation to improve quality scores, lower cost-per-click, and increase conversions",
        "A/B testing of ad copy, headlines, extensions, and audiences to continuously improve performance",
        "Geo-targeted campaigns focused on Goa, specific cities, or expanded to pan-India reach as needed",
        "Remarketing campaigns that bring back visitors who left your website without converting",
        "Transparent budget management — you see exactly where every rupee goes and what it generates",
        "Cross-platform expertise covering Google Search, Display, Shopping, YouTube, Meta Ads, and LinkedIn Ads",
      ]}
      process={[
        {
          step: "Account Audit & Goal Setting",
          description:
            "We review your existing ad accounts (if any), analyse competitor campaigns, and define clear KPIs. Whether your goal is lead generation, e-commerce sales, or brand awareness in Goa, we set measurable targets from the start.",
        },
        {
          step: "Campaign Architecture & Keyword Research",
          description:
            "We build a structured campaign with tightly themed ad groups, negative keyword lists, and match type strategies. Our research identifies the highest-value keywords your Goa customers are searching for.",
        },
        {
          step: "Ad Creation & Landing Page Alignment",
          description:
            "We write compelling ad copy with strong calls-to-action and ensure your landing pages are optimised for conversion. Every ad points to a relevant, fast-loading page designed to turn clicks into customers.",
        },
        {
          step: "Launch, Monitor & Optimise",
          description:
            "Once live, we monitor campaigns daily — adjusting bids, pausing underperforming keywords, testing new ad variations, and reallocating budget to the best-performing campaigns and ad groups.",
        },
        {
          step: "Reporting & Scaling",
          description:
            "You receive detailed monthly reports showing spend, clicks, conversions, cost-per-lead, and ROI. As we identify winning strategies, we scale budgets towards the campaigns delivering the best returns for your business.",
        },
      ]}
      faq={[
        {
          q: "What budget do I need to start PPC advertising in Goa?",
          a: "We recommend a minimum monthly ad spend of INR 15,000 to 20,000 for local Goa campaigns to gather enough data for optimisation. That said, the right budget depends on your industry, competition level, and goals. During our free consultation, we provide a recommended budget based on keyword costs and your target ROI.",
        },
        {
          q: "How quickly will I see results from Google Ads?",
          a: "PPC delivers results much faster than organic channels. You can start seeing clicks and enquiries within the first week of your campaign going live. However, it typically takes 4 to 6 weeks of data collection and optimisation to reach peak performance and the lowest possible cost-per-acquisition.",
        },
        {
          q: "Do you manage Meta (Facebook and Instagram) ads as well?",
          a: "Yes. We manage paid campaigns across Google Search, Google Display, YouTube, Meta (Facebook and Instagram), and LinkedIn. For many Goa businesses, a combination of Google Ads for high-intent search traffic and Meta Ads for awareness and retargeting delivers the best overall results.",
        },
      ]}
    />
  );
}
