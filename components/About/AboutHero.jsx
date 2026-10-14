const stats = [
  { value: "PAN India", label: "Execution presence" },
  { value: "2009", label: "Company incorporation" },
  { value: "Enterprise + Public Sector", label: "Primary delivery focus" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_22%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium tracking-wide text-orange-300">
            About Resseaux Tech
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Infrastructure execution built for institutions, enterprises and mission-critical environments.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Resseaux Tech Private Limited is a New Delhi-based IT infrastructure
            solutions company and system integrator with PAN India presence,
            delivering planning, procurement, deployment and support across
            security, networking, data center, cloud, virtualization, storage,
            HCI and IoT environments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="text-lg font-semibold text-white md:text-xl">
                {item.value}
              </div>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}