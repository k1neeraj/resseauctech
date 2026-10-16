"use client";

import FaqAccordion from "@/components/FaqAccordion";

export default function RelatedFaqs({
  items = [],
  title = "Frequently Asked Questions",
  description = "Helpful answers about this page and the next steps.",
}) {
  if (!items.length) return null;

  return (
    <section
      aria-labelledby="related-faqs-heading"
      className="relative overflow-hidden bg-[#f8f6f1] py-14 sm:py-16 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#ff7a1a]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-14 2xl:gap-20">
          <header className="max-w-2xl xl:sticky xl:top-28 xl:pt-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
              Helpful answers
            </p>
            <h2
              id="related-faqs-heading"
              className="mt-3 max-w-[16ch] text-3xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#111827]/70 sm:text-lg sm:leading-8">
              {description}
            </p>
            <div
              aria-hidden="true"
              className="mt-7 h-1 w-16 rounded-full bg-[#ff7a1a]"
            />
          </header>

          <FaqAccordion items={items} className="w-full max-w-none" />
        </div>
      </div>
    </section>
  );
}
