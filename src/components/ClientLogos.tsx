import Image from "next/image";

const row1 = [
  "/images/clients/client-61.png",
  "/images/clients/client-62.png",
  "/images/clients/client-63.png",
  "/images/clients/client-64.png",
  "/images/clients/client-65.png",
  "/images/clients/client-67.png",
  "/images/clients/client-68.png",
  "/images/clients/client-69.png",
  "/images/clients/client-70.png",
  "/images/clients/client-71.png",
  "/images/clients/client-72.png",
];

const row2 = [
  "/images/clients/client-73.png",
  "/images/clients/client-74.png",
  "/images/clients/client-75.png",
  "/images/clients/client-76.png",
  "/images/clients/client-77.png",
  "/images/clients/client-78.png",
  "/images/clients/client-79.png",
  "/images/clients/client-80.png",
  "/images/clients/client-81.png",
  "/images/clients/client-82.png",
  "/images/clients/client-83.png",
  "/images/clients/client-84.png",
];

function MarqueeRow({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  // Duplicate logos for seamless loop
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />
      <div
        className="flex items-center gap-8 sm:gap-12 animate-marquee"
        style={{ direction: reverse ? "rtl" : "ltr" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 h-12 sm:h-14 w-24 sm:w-32 flex items-center justify-center"
          >
            <Image
              src={src}
              alt="Client logo"
              width={120}
              height={50}
              className="object-contain max-h-10 sm:max-h-12 brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-14 sm:py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest">
          Trusted by businesses across Goa
        </p>
      </div>
      <div className="space-y-6">
        <MarqueeRow logos={row1} />
        <MarqueeRow logos={row2} reverse />
      </div>
    </section>
  );
}
