import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Creometric — Digital Marketing Tips & Insights",
  description:
    "Read the latest digital marketing tips, SEO strategies, and social media insights from the Creometric team in Goa.",
};

const posts = [
  {
    slug: "sustainable-marketing-promoting-eco-friendly-practices-in-the-digital-age",
    title:
      "Sustainable Marketing: Promoting Eco-Friendly Practices in the Digital Age",
    date: "October 12, 2024",
    author: "Creometric",
    excerpt:
      "Learn how brands can adopt sustainable marketing practices and promote eco-friendly initiatives in today's digital landscape.",
  },
  {
    slug: "the-intersection-of-ux-design-and-seo-creating-user-friendly-websites",
    title:
      "The Intersection of UX Design and SEO: Creating User-Friendly Websites",
    date: "September 28, 2024",
    author: "Creometric",
    excerpt:
      "Discover how UX design and SEO work together to create websites that rank well and deliver an exceptional user experience.",
  },
  {
    slug: "exploring-the-impact-of-voice-search-on-digital-marketing",
    title: "Exploring the Impact of Voice Search on Digital Marketing",
    date: "September 10, 2024",
    author: "Creometric",
    excerpt:
      "Voice search is changing how people find information online. Here's how to adapt your digital marketing strategy for the voice-first era.",
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
