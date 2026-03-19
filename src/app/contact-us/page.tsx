import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Creometric — Digital Marketing Agency in Goa",
  description:
    "Get in touch with Creometric. Call +91 98509 50259 or fill out the form. We reply within 24 hours.",
};

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3 font-inter">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 font-sora">
            Let&apos;s Talk Growth
          </h1>
          <p className="text-lg text-[#8A8A8A] max-w-xl mx-auto font-inter">
            Have a project in mind? We reply within <strong className="text-white">24 hours</strong>.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ContactForm />

          {/* Info + Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-medium text-[#525252] uppercase tracking-wide mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+919850950259"
                  className="text-xl font-bold hover:underline"
                >
                  +91 98509 50259
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#525252] uppercase tracking-wide mb-1">
                  Email
                </h3>
                <a
                  href="mailto:hello@creometric.com"
                  className="text-xl font-bold hover:underline"
                >
                  hello@creometric.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#525252] uppercase tracking-wide mb-1">
                  Office
                </h3>
                <p className="text-[#8A8A8A]">
                  Nordic Intent, Lane 4,<br />
                  PDA Colony, Porvorim, Goa
                </p>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 rounded-full px-4 py-2 text-sm font-medium">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                We reply within 24 hours
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#2A2A2A]">
              <iframe
                title="Creometric Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.0!2d73.8278!3d15.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI5JzI3LjIiTiA3M8KwNDknNDAuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Nordic+Intent,+Lane+4,+PDA+Colony,+Porvorim,+Goa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
