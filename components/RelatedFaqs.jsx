"use client";

export default function RelatedFaqs({
  items = [],
  title = "Frequently Asked Questions",
  description = "Helpful answers about this page and the next steps.",
}) {
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

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[20px] border border-black/10 bg-white p-5 shadow-sm transition-colors open:border-[#ff7a1a]/40 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md text-base font-semibold leading-7 text-[#111827] outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a1a] focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff2e8] text-lg leading-none text-[#b95408] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-2 text-sm leading-7 text-[#374151]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
