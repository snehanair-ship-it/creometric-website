import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Creometric — Digital Marketing Tips & Insights",
  description:
    "Read the latest digital marketing tips, SEO strategies, and social media insights from the Creometric team in Goa.",
};

const posts = [
  {
    slug: "importance-of-digital-marketing-for-businesses-in-goa",
    title: "Importance of Digital Marketing for Businesses in Goa",
    date: "January 15, 2025",
    author: "Sneha Nair",
    excerpt:
      "Discover why digital marketing is essential for businesses in Goa and how it can help you reach more customers, build brand awareness, and drive revenue growth.",
  },
  {
    slug: "how-to-choose-the-right-social-media-platform-for-your-business",
    title: "How to Choose the Right Social Media Platform for Your Business",
    date: "December 8, 2024",
    author: "Sneha Nair",
    excerpt:
      "Not every platform is right for every business. Learn how to pick the social media channels that will give you the best ROI based on your industry and audience.",
  },
  {
    slug: "top-seo-strategies-to-rank-higher-on-google-in-2025",
    title: "Top SEO Strategies to Rank Higher on Google in 2025",
    date: "November 22, 2024",
    author: "Sneha Nair",
    excerpt:
      "From local SEO to technical optimizations, here are the proven strategies that will help your website climb Google rankings this year.",
  },
];

export default function Blog() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          Blog
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Insights & Tips
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
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
              className="block rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <time>{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-sm font-medium text-gray-900 hover:underline">
                Read More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
