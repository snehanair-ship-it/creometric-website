import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Social Media Management in Goa | Creometric Digital Marketing",
  description:
    "Professional social media management services in Goa. Creometric helps local businesses grow their brand on Instagram, Facebook, LinkedIn & more with data-driven strategies.",
};

export default function SocialMediaManagementPage() {
  return (
    <ServicePageLayout
      title="Social Media Management That Drives Real Business Growth"
      subtitle="Social Media Management in Goa"
      heroImage="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80"
      description="Your customers in Goa are scrolling right now. Creometric builds and manages social media strategies that turn followers into paying customers — with consistent content, active community engagement, and measurable ROI for businesses across Goa and beyond."
      benefits={[
        "Dedicated social media strategist who understands the Goa market and local audience behaviour",
        "Custom content calendars with a mix of reels, carousels, stories, and static posts tailored to your brand",
        "Community management — we respond to comments, DMs, and mentions so your audience always feels heard",
        "Monthly performance reports with clear metrics: reach, engagement, follower growth, and conversions",
        "Platform-specific strategies for Instagram, Facebook, LinkedIn, X (Twitter), and Google Business Profile",
        "Competitor analysis and trend monitoring to keep your brand ahead in the Goa digital landscape",
        "Paid social ad management integrated with organic strategy for maximum impact",
        "Brand voice development that resonates with local and tourist audiences in Goa",
      ]}
      process={[
        {
          step: "Discovery & Brand Audit",
          description:
            "We analyse your current social media presence, competitors, and target audience in Goa. This helps us identify gaps, opportunities, and the tone that will resonate with your customers.",
        },
        {
          step: "Strategy & Content Planning",
          description:
            "We build a custom social media strategy with platform selection, posting schedules, content pillars, and hashtag research focused on Goa-related and industry-specific keywords.",
        },
        {
          step: "Content Creation & Scheduling",
          description:
            "Our creative team produces scroll-stopping visuals, compelling captions, and short-form video content. Everything is scheduled in advance and reviewed by you before it goes live.",
        },
        {
          step: "Engagement & Community Building",
          description:
            "We actively manage your community — replying to comments, engaging with followers, and building relationships that turn casual browsers into loyal customers.",
        },
        {
          step: "Reporting & Optimisation",
          description:
            "Each month, we deliver a detailed performance report and refine the strategy based on what is working. Data drives every decision we make for your brand.",
        },
      ]}
      faq={[
        {
          q: "How many social media posts will you create per month?",
          a: "Our standard packages include 12 to 20 posts per month across your chosen platforms, plus stories and reels. We tailor the volume to your industry and goals — a restaurant in Goa may need daily posts, while a B2B service provider may benefit from fewer, higher-quality pieces.",
        },
        {
          q: "Which social media platforms should my Goa business be on?",
          a: "It depends on your audience. Most Goa-based businesses see strong results on Instagram and Facebook for local reach. LinkedIn works well for B2B and professional services. During our discovery phase, we recommend the platforms that will deliver the best return for your specific business.",
        },
        {
          q: "How soon will I see results from social media management?",
          a: "Organic social media is a long-term play. Most clients see noticeable improvements in engagement and follower quality within the first 60 to 90 days. Combined with paid campaigns, you can start generating leads much sooner. We set realistic expectations from day one.",
        },
      ]}
    />
  );
}
