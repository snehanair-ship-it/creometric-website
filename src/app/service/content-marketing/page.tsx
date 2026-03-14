import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Content Marketing Services in Goa | Creometric",
  description:
    "Strategic content marketing services in Goa by Creometric. We create blogs, videos, infographics, and email campaigns that attract, engage, and convert your target audience.",
};

export default function ContentMarketingPage() {
  return (
    <ServicePageLayout
      title="Content Marketing That Builds Authority and Drives Revenue"
      subtitle="Content Marketing Services in Goa"
      description="Great content does more than fill up your blog — it builds trust, answers your audience's questions, and moves them closer to becoming customers. Creometric creates strategic content marketing campaigns for Goa businesses that attract organic traffic, establish thought leadership, and generate measurable business results."
      benefits={[
        "Data-driven content strategy built around the keywords and topics your Goa audience is actively searching for",
        "Professional blog writing, articles, and long-form guides that rank on Google and position you as an industry expert",
        "Video content planning and scriptwriting for YouTube, Instagram Reels, and website landing pages",
        "Email marketing campaigns with segmented lists, automated sequences, and compelling copy that converts",
        "Infographic and visual content design that simplifies complex information and earns social shares",
        "Content repurposing — one piece of content transformed into blog posts, social snippets, emails, and more",
        "Editorial calendar management so your content is published consistently without gaps",
        "Performance tracking with clear metrics on traffic, engagement, lead generation, and content ROI",
      ]}
      process={[
        {
          step: "Audience Research & Content Audit",
          description:
            "We analyse your existing content, study your target audience in Goa, and map out the buyer journey. This reveals content gaps and opportunities to reach potential customers at every stage of their decision-making process.",
        },
        {
          step: "Content Strategy & Calendar",
          description:
            "We develop a comprehensive content plan that aligns with your business goals and SEO strategy. Every piece of content is planned with a specific purpose — whether that is driving organic traffic, nurturing leads, or converting prospects.",
        },
        {
          step: "Content Creation & Review",
          description:
            "Our writers and designers produce high-quality content tailored to your brand voice. Every piece goes through an editorial review process and is shared with you for approval before publishing.",
        },
        {
          step: "Distribution & Promotion",
          description:
            "Publishing is only half the job. We promote your content through social media, email newsletters, outreach, and paid amplification to ensure it reaches the right audience in Goa and beyond.",
        },
        {
          step: "Analysis & Iteration",
          description:
            "We track how every piece of content performs using analytics tools. Insights from the data feed directly into future content decisions, ensuring your strategy gets sharper and more effective over time.",
        },
      ]}
      faq={[
        {
          q: "What types of content does Creometric create?",
          a: "We create a full range of content including SEO-optimised blog posts, landing page copy, email campaigns, social media content, video scripts, case studies, whitepapers, and infographics. The content mix depends on your industry, audience, and goals. For most Goa businesses, we recommend starting with a blog strategy and email marketing as the foundation.",
        },
        {
          q: "How often should my business publish new content?",
          a: "Consistency matters more than volume. For most small to medium businesses in Goa, publishing 2 to 4 high-quality blog posts per month combined with regular email newsletters delivers strong results. We focus on quality and relevance over churning out content for the sake of it.",
        },
        {
          q: "How do you measure the success of content marketing?",
          a: "We track a range of metrics depending on your goals: organic traffic growth, keyword rankings, time on page, email open and click rates, social engagement, lead form submissions, and ultimately revenue attributed to content. Every monthly report ties content performance back to real business outcomes.",
        },
      ]}
    />
  );
}
