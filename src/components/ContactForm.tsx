"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@/lib/analytics";

export default function ContactForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });

      if (!res.ok) throw new Error("Submission failed");

      sendGAEvent("form_submission", { form_name: "contact-form" });
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="lead-form" />
      <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-website" className="block text-sm font-medium mb-1">
          Website URL
        </label>
        <input
          type="url"
          id="contact-website"
          name="website"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="https://yourbusiness.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
          Tell us about your project
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          placeholder="What can we help you with?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
