"use client";

import FaqAccordion from "@/components/FaqAccordion";

export default function RelatedFaqs({
  items = [],
  title = "Frequently Asked Questions",
  description = "Helpful answers about this page and the next steps.",
}) {
  const [openIndex, setOpenIndex] = useState(items.length ? 0 : -1);

  if (!items.length) return null;

  return (
    <section
      aria-labelledby="related-faqs-heading"
      className="bg-[#f8f6f1] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
            Helpful answers
          </p>
          <h2
            id="related-faqs-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#111827]/68">
            {description}
          </p>
        </div>

        <FaqAccordion items={items} className="mt-8 max-w-5xl" />
      </div>
    </section>
  );
}
