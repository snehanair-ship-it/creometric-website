import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
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
    </div>
  );
}
