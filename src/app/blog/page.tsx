import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Creometric — Digital Marketing Tips & Insights",
  description:
    "Read the latest digital marketing tips, SEO strategies, and social media insights from the Creometric team in Goa.",
};

const posts = [
  {
    slug: "why-every-goa-business-needs-a-website-in-2025",
    title: "Why Every Goa Business Needs a Website in 2025",
    date: "March 10, 2025",
    author: "Creometric",
    excerpt:
      "Still relying only on social media? Here's why a professional website is essential for every Goa business in 2025 — from credibility to lead generation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "social-media-trends-to-watch-in-2025",
    title: "Social Media Trends to Watch in 2025",
    date: "March 1, 2025",
    author: "Creometric",
    excerpt:
      "From short-form video to social commerce and AI-assisted content, discover the social media trends shaping digital marketing in 2025.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    slug: "how-to-measure-roi-on-your-digital-marketing-campaigns",
    title: "How to Measure ROI on Your Digital Marketing Campaigns",
    date: "February 10, 2025",
    author: "Creometric",
    excerpt:
      "Learn how to track conversions, calculate ROAS, and use GA4 to measure the real return on your digital marketing investment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    slug: "local-seo-tips-for-small-businesses-in-goa",
    title: "Local SEO Tips for Small Businesses in Goa",
    date: "January 15, 2025",
    author: "Creometric",
    excerpt:
      "Practical local SEO strategies to help your Goa business rank higher on Google — from Google Business Profile to local citations and reviews.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
  {
    slug: "sustainable-marketing-promoting-eco-friendly-practices-in-the-digital-age",
    title:
      "Sustainable Marketing: Promoting Eco-Friendly Practices in the Digital Age",
    date: "October 12, 2024",
    author: "Creometric",
    excerpt:
      "Learn how brands can adopt sustainable marketing practices and promote eco-friendly initiatives in today's digital landscape.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
  {
    slug: "the-intersection-of-ux-design-and-seo-creating-user-friendly-websites",
    title:
      "The Intersection of UX Design and SEO: Creating User-Friendly Websites",
    date: "September 28, 2024",
    author: "Creometric",
    excerpt:
      "Discover how UX design and SEO work together to create websites that rank well and deliver an exceptional user experience.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  },
  {
    slug: "exploring-the-impact-of-voice-search-on-digital-marketing",
    title: "Exploring the Impact of Voice Search on Digital Marketing",
    date: "September 10, 2024",
    author: "Creometric",
    excerpt:
      "Voice search is changing how people find information online. Here's how to adapt your digital marketing strategy for the voice-first era.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          Blog
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Insights & Tips
        </h1>
        <p className="text-lg text-[#8A8A8A] max-w-xl mx-auto">
          Digital marketing strategies, SEO tips, and growth ideas for
          businesses in Goa and beyond.
        </p>
      </section>

      {/* Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-[#2A2A2A] overflow-hidden hover:border-[#3A3A3A] hover:shadow-lg hover:shadow-orange-500/5 transition-all"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-sm text-[#525252] mb-3">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 rounded-full bg-[#525252]" />
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 font-sora">
                  {post.title}
                </h2>
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4 font-inter">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium text-orange-500 group-hover:underline font-inter">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
