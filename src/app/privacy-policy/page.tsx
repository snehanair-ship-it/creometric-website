import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Creometric",
  description:
    "Read the Creometric privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <section className="pt-24 sm:pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Last updated: March 2026
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Creometric (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website creometric.com
            or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and website URL that you provide through our contact forms.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, browser type, device information, and IP address.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience. See Section 6 for details.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>To respond to your enquiries and provide requested services</li>
            <li>To send you marketing communications (only with your consent)</li>
            <li>To improve our website and services</li>
            <li>To analyse website traffic and user behaviour</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. How We Share Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell your personal information. We may share your data with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li><strong>Service Providers:</strong> Third-party tools like Google Analytics, Google Tag Manager, and Netlify that help us operate our website.</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement reasonable technical and organisational measures to protect
            your personal information. However, no method of transmission over the
            Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">6. Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website uses cookies for analytics (Google Analytics), advertising
            (Google Tag Manager), and essential website functionality. You can
            control cookie preferences through your browser settings.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">7. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">8. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <ul className="list-none text-gray-600 space-y-1 mb-4">
            <li><strong>Email:</strong> hello@creometric.com</li>
            <li><strong>Phone:</strong> +91 98509 50259</li>
            <li><strong>Location:</strong> Goa, India</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">10. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
        </div>
      </section>
    </div>
  );
}
