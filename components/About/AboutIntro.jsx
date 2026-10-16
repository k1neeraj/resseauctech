import Image from "next/image";

const highlights = [
  "Network, security and data-centre equipment for new projects and upgrades",
  "Products and implementation support across networking, security, cloud, servers, storage and virtualization",
  "Support for government, institutional and enterprise requirements",
  "Installation, configuration, handover and maintenance where required by the scope",
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
            IT infrastructure products and implementation support for organisations across India.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Resseaux Tech Private Limited is based in New Delhi and works with organisations that need IT infrastructure products and related services. We handle requirements across networking, security, data centre, cloud, virtualization, storage, HCI and power backup.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            Whether you are buying equipment, upgrading an existing setup or planning a deployment, share the BOQ or specification, site details and timeline. We can review the scope for product supply and implementation support.
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