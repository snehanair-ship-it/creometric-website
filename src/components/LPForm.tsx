"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@/lib/analytics";

export default function LPForm({
  formName,
  buttonText,
}: {
  formName: string;
  buttonText: string;
}) {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "03c25fe0-b587-4406-bc6d-c33112140ce0");
    formData.append("subject", `New Lead — ${formName}`);
    formData.append("from_name", "Creometric Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (!result.success) throw new Error("Submission failed");

      sendGAEvent("generate_lead", {
        form_name: formName,
        currency: "INR",
        value: "1",
      });

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: formName });
      }

      if (typeof window !== "undefined" && typeof window.lintrk === "function") {
        window.lintrk("track", { conversion_id: 0 });
      }

      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again or call us at +91 98509 50259.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label htmlFor={`${formName}-name`} className="sr-only">Your Name</label>
        <input
          type="text"
          id={`${formName}-name`}
          name="name"
          required
          className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-inter"
          placeholder="Your Name *"
        />
      </div>
      <div>
        <label htmlFor={`${formName}-phone`} className="sr-only">Phone Number</label>
        <input
          type="tel"
          id={`${formName}-phone`}
          name="phone"
          required
          className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-inter"
          placeholder="Phone Number *"
        />
      </div>
      <div>
        <label htmlFor={`${formName}-email`} className="sr-only">Email Address</label>
        <input
          type="email"
          id={`${formName}-email`}
          name="email"
          required
          className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-inter"
          placeholder="Email Address *"
        />
      </div>
      <div>
        <label htmlFor={`${formName}-website`} className="sr-only">Website URL</label>
        <input
          type="url"
          id={`${formName}-website`}
          name="website"
          className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-inter"
          placeholder="Website URL (optional)"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white py-3.5 text-sm font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-inter"
      >
        {buttonText}
      </button>

      <p className="text-xs text-[#525252] text-center font-inter">
        No spam. We&apos;ll only contact you about your audit.
      </p>
    </form>
  );
}
