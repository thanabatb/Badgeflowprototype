const stats = [
  { value: "10M+", label: "Badges Issued" },
  { value: "10K+", label: "Organizations" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "150+", label: "Countries" },
];

export function Stats() {
  return (
    <section className="py-20 bg-amber-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-amber-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-amber-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
