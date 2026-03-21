import Image from "next/image";

const row1 = [
  { src: "/images/clients/client-61.png", name: "Client 61" },
  { src: "/images/clients/client-62.png", name: "Client 62" },
  { src: "/images/clients/client-63.png", name: "Client 63" },
  { src: "/images/clients/client-64.png", name: "Client 64" },
  { src: "/images/clients/client-65.png", name: "Client 65" },
  { src: "/images/clients/client-67.png", name: "Client 67" },
  { src: "/images/clients/client-68.png", name: "Client 68" },
  { src: "/images/clients/client-69.png", name: "Client 69" },
  { src: "/images/clients/client-70.png", name: "Client 70" },
  { src: "/images/clients/client-71.png", name: "Client 71" },
  { src: "/images/clients/client-72.png", name: "Client 72" },
];

const row2 = [
  { src: "/images/clients/client-73.png", name: "Client 73" },
  { src: "/images/clients/client-74.png", name: "Client 74" },
  { src: "/images/clients/client-75.png", name: "Client 75" },
  { src: "/images/clients/client-76.png", name: "Client 76" },
  { src: "/images/clients/client-77.png", name: "Client 77" },
  { src: "/images/clients/client-78.png", name: "Client 78" },
  { src: "/images/clients/client-79.png", name: "Client 79" },
  { src: "/images/clients/client-80.png", name: "Client 80" },
  { src: "/images/clients/client-81.png", name: "Client 81" },
  { src: "/images/clients/client-82.png", name: "Client 82" },
  { src: "/images/clients/client-83.png", name: "Client 83" },
  { src: "/images/clients/client-84.png", name: "Client 84" },
];

function MarqueeRow({ logos, reverse = false }: { logos: { src: string; name: string }[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
      <div
        className="flex items-center gap-8 sm:gap-12 animate-marquee"
        style={{ direction: reverse ? "rtl" : "ltr" }}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 h-12 sm:h-14 w-24 sm:w-32 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={50}
              className="object-contain max-h-10 sm:max-h-12 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-16 sm:py-20 bg-[#0A0A0A] border-y border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-center text-xs font-bold text-[#525252] uppercase tracking-[0.2em] font-inter">
          Trusted by leading brands across Goa &amp; India for AI-powered growth
        </p>
      </div>
      <div className="space-y-6">
        <MarqueeRow logos={row1} />
        <MarqueeRow logos={row2} reverse />
      </div>
    </section>
  );
}
