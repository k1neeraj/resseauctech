import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import { getAllServices } from "@/app/api/data";

export const metadata = {
  title: "Services",
  description:
    "Explore Resseaux Tech services across network infrastructure, security, cloud, virtualization, storage, HCI and implementation support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageBanner
        pageName="Services"
        pageTitle="Products & Services"
      />

      <section className="bg-[#f8f6f1] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              What We Deliver
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Structured infrastructure and technology services aligned with real
              deployment needs.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Resseaux Tech supports organizations with practical service coverage
              across networking, security, cloud, virtualization, storage and
              deployment execution. The focus is not only on product supply, but
              on planning, implementation and long-term support continuity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group h-full rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-full min-h-[360px] flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-500">
                      {String(service.id).padStart(2, "0")}
                    </span>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-100">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold leading-snug text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600">
                          ✓
                        </span>
                        <span className="text-sm leading-6 text-slate-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-900 transition-colors duration-200 hover:text-orange-500"
                    >
                      View Service
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}