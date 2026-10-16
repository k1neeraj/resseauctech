"use client";

import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/common/PageBanner";
import FaqAccordion from "@/components/FaqAccordion";

const faqData = [
  {
    question: "What services does Resseaux Tech provide?",
    answer:
      "We work across network design and implementation, data centre, security, cloud, virtualization, storage, HCI and related IT infrastructure services.",
  },
  {
    question: "Do you work with government projects?",
    answer:
      "Yes. We consider government, institutional and enterprise requirements based on the project scope and applicable tender conditions.",
  },
  {
    question: "Where is your company located?",
    answer:
      "We are based in New Delhi and consider requirements across India, depending on the products, site locations and service scope.",
  },
  {
    question: "Do you offer cloud solutions?",
    answer:
      "We discuss cloud and hybrid infrastructure requirements based on the workloads, existing environment and project scope.",
  },
  {
    question: "How can we contact you?",
    answer:
      "Use the contact page or email info@resseauxtech.com.",
  },
];

export default function Faq() {
  return (
    <>
      <PageBanner pageName="FAQs" pageTitle="FAQs" />

      <section className="bg-[#f8f6f1] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
              Helpful answers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-8 text-[#111827]/68">
              Answers about our IT products, services and project enquiries.
            </p>
          </div>

          <FaqAccordion items={faqData} className="mt-8 max-w-5xl" />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
