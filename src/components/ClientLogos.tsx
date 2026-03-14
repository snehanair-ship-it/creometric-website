import Image from "next/image";

const clients = [
  { src: "/images/clients/client-61.png", alt: "Client" },
  { src: "/images/clients/client-62.png", alt: "Client" },
  { src: "/images/clients/client-63.png", alt: "Client" },
  { src: "/images/clients/client-64.png", alt: "Client" },
  { src: "/images/clients/client-65.png", alt: "Client" },
  { src: "/images/clients/client-67.png", alt: "Client" },
  { src: "/images/clients/client-68.png", alt: "Client" },
  { src: "/images/clients/client-69.png", alt: "Client" },
  { src: "/images/clients/client-70.png", alt: "Client" },
  { src: "/images/clients/client-71.png", alt: "Client" },
  { src: "/images/clients/client-72.png", alt: "Client" },
  { src: "/images/clients/client-73.png", alt: "Client" },
  { src: "/images/clients/client-74.png", alt: "Client" },
  { src: "/images/clients/client-75.png", alt: "Client" },
  { src: "/images/clients/client-76.png", alt: "Client" },
  { src: "/images/clients/client-77.png", alt: "Client" },
  { src: "/images/clients/client-78.png", alt: "Client" },
  { src: "/images/clients/client-79.png", alt: "Client" },
  { src: "/images/clients/client-80.png", alt: "Client" },
  { src: "/images/clients/client-81.png", alt: "Client" },
  { src: "/images/clients/client-82.png", alt: "Client" },
  { src: "/images/clients/client-83.png", alt: "Client" },
  { src: "/images/clients/client-84.png", alt: "Client" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
          Trusted by 20+ businesses across Goa
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="h-16 sm:h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center px-3"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={50}
                className="object-contain max-h-10 sm:max-h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
