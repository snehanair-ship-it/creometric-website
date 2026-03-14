const clients = [
  "Andrade Dental Clinic",
  "Shai-N Dance Academy",
  "Henry's Cocktails",
  "Doggy Styles",
  "Foxes Fiesta",
  "Gastronut",
  "Met Creations",
  "Goa Tourism",
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
          Trusted by 20+ businesses across Goa
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client}
              className="h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center px-4"
            >
              <span className="text-sm font-medium text-gray-400 text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Replace these with your actual client logos
        </p>
      </div>
    </section>
  );
}
