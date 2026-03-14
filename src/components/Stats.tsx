const stats = [
  { value: "347+", label: "People Reached" },
  { value: "250+", label: "Projects Completed" },
  { value: "2,84,000", label: "Clicks Grabbed" },
  { value: "5 Cr+", label: "ROI Generated" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-3xl sm:text-4xl font-bold text-orange-400">
              {item.value}
            </p>
            <p className="text-sm text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
