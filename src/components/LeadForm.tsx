export default function LeadForm() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get a Free Website Audit
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Tell us about your business and we&apos;ll call you within 24 hours
          with a custom growth plan.
        </p>

        <form
          name="lead-form"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="lead-form" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-1">
              Website URL
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="https://yourbusiness.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Tell us about your business
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              placeholder="What services are you interested in?"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Get My Free Audit
          </button>
        </form>
      </div>
    </section>
  );
}
