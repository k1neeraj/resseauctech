import Image from "next/image";

const highlights = [
  "Requirement-first infrastructure planning and solution mapping",
  "Execution across security, network, cloud, data center and virtualization environments",
  "Strong relevance for government, defence and enterprise delivery contexts",
  "Support-led engagement with documentation, continuity and long-term reliability",
];

export default function AboutIntro() {
  return (
    <section className="bg-[#f8f6f1] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Company Overview
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            A system integration partner focused on dependable infrastructure outcomes.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Over the years, Resseaux Tech has expanded its technical capability
            across multiple domains and built a delivery model aligned with the
            needs of enterprise, institutional and public sector environments.
            The company&apos;s positioning is rooted in practical execution,
            experienced manpower, and an increasing base of satisfied customers.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            From network design and endpoint security to cloud, storage, HCI and
            data center implementation, the focus remains on building stable,
            scalable and supportable infrastructure environments rather than just
            supplying products.
          </p>

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                  ✓
                </span>
                <span className="text-base leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
            <Image
              src="/about/about-main.png"
              alt="Resseaux Tech infrastructure and enterprise execution"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:max-w-xs">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
              Core Services
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>Security Services</li>
              <li>Network Design &amp; Implementation</li>
              <li>Data Center Services</li>
              <li>Cloud &amp; Virtualization</li>
              <li>Storage, HCI &amp; IoT Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}