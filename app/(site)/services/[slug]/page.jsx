import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import { getAllServices, getServiceBySlug } from "@/app/api/data";

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Resseaux Tech",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/services/${service.slug}`,
      siteName: "Resseaux Tech",
      title: `${service.title} | Resseaux Tech`,
      description: service.description,
      images: [
        {
          url: "/img/homebanner/banner.png",
          alt: "Resseaux Tech - IT Infrastructure Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Resseaux Tech`,
      description: service.description,
      images: ["/img/homebanner/banner.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const {
    title,
    description,
    intro,
    overview,
    points = [],
    deliverables,
    useCases,
    whyItMatters,
    process,
    faqs,
    ctaTitle,
    ctaText,
  } = service;

  const processSteps =
    process && process.length
      ? process
      : [
          {
            title: "Assess",
            text: "Review the current setup, required equipment, site locations and installation constraints.",
          },
          {
            title: "Plan",
            text: "Confirm the product list, installation tasks, dependencies and rollout schedule.",
          },
          {
            title: "Execute",
            text: "Coordinate the agreed installation tasks, testing, documentation and handover.",
          },
        ];

  const scopeItems = deliverables && deliverables.length ? deliverables : points;

  return (
    <>
      <PageBanner pageName={title} pageTitle={title} />

      <section className="bg-[#f8f6f1] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Service Overview
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
              {title} for new projects, upgrades and existing systems.
            </h2>

            {intro && (
              <p className="mt-6 text-base font-medium leading-8 text-slate-800 md:text-lg">
                {intro}
              </p>
            )}

            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              {description}
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              {overview ||
                "Tell us the products or services you need, which sites are involved and what work is required. We can review the scope for supply, installation or related support."}
            </p>

            {/* Scope of delivery */}
            {scopeItems && scopeItems.length > 0 && (
              <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Scope of delivery
                </h3>

                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {scopeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Typical use cases */}
            {useCases && useCases.length > 0 && (
              <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Typical use cases
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Why it matters */}
            {whyItMatters && whyItMatters.length > 0 && (
              <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Why this service matters
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {whyItMatters.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engagement approach */}
            <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                How we handle the requirement
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {processSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                      {step.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
              <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Common questions
                </h3>

                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <h4 className="text-base font-semibold text-slate-900">
                        {faq.question}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Products and services covered
              </p>

              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                  {ctaTitle || "Request a Quote"}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {ctaText ||
                    "Share your BOQ or specification, quantities, site location and timeline to discuss the scope."}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:text-orange-400"
                >
                  Request a Quote
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}