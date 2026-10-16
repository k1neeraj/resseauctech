"use client";

import { useId, useState } from "react";

export default function FaqAccordion({ items = [], className = "" }) {
  const instanceId = useId().replace(/:/g, "");
  const [openIndex, setOpenIndex] = useState(items.length ? 0 : -1);

  if (!items.length) return null;

  return (
    <div className={`w-full space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `${instanceId}-answer-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-[20px] border bg-white shadow-sm transition-colors duration-200 ${
              isOpen
                ? "border-[#ff7a1a]/50"
                : "border-black/10 hover:border-[#ff7a1a]/30"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-start justify-between gap-4 rounded-[20px] px-5 py-5 text-left text-base font-semibold leading-7 text-[#111827] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ff7a1a] sm:px-6"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff2e8] text-lg leading-none text-[#b95408] transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            {isOpen && (
              <div id={answerId} className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="max-w-4xl pr-2 text-sm leading-7 text-[#374151]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
