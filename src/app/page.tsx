export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Creometric
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
          A digital marketing agency in Goa, India. We help brands grow through
          strategy, design, and technology.
        </p>
        <div className="mt-4 flex gap-4">
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
      </main>
    </div>
  );
}
