"use client";

import { useMemo, useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import ContactForm from "@/components/ContactForm";

const faqTabs = [
  {
    id: "information",
    label: "Information",
    eyebrow: "About Resseaux Tech",
    title: "IT infrastructure support built for modern organizations.",
    description:
      "We help businesses plan, deploy, and support secure environments across networking, cloud, virtualization, storage, HCI, and related enterprise systems.",
    noteTitle: "Need clarity before starting?",
    noteText:
      "Share your current setup, business goals, or technical pain points and we can guide you toward the right implementation path.",
    items: [
      {
        question: "What does Resseaux Tech do?",
        answer:
          "Resseaux Tech is an IT infrastructure solution provider and system integrator supporting businesses across network design, security, data center services, cloud services, virtualization, storage, HCI, and implementation support.",
      },
      {
        question: "Do you only supply products or also handle implementation?",
        answer:
          "We support more than procurement. Depending on the project scope, we can help with assessment, architecture planning, deployment, configuration, integration, documentation, and support.",
      },
      {
        question: "Which types of organizations do you usually work with?",
        answer:
          "Our services are suitable for businesses, institutions, and multi-location organizations that need secure connectivity, stable infrastructure, and scalable technology foundations.",
      },
      {
        question: "Can you work with our existing OEM ecosystem?",
        answer:
          "Yes. We can align with an existing OEM stack or evaluate alternatives based on support, cost, performance, and long-term maintainability.",
      },
      {
        question: "Do you support projects outside Delhi?",
        answer:
          "The company is based in New Delhi, but the delivery model can support broader location-based requirements depending on scope and execution planning.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing Plans",
    eyebrow: "Commercial clarity",
    title: "Pricing depends on scope, scale, and complexity.",
    description:
      "Infrastructure projects are rarely one-size-fits-all. Final commercials depend on the number of sites, endpoints, OEM mix, implementation depth, and support expectations.",
    noteTitle: "Want an estimate?",
    noteText:
      "The fastest way to get a useful proposal is to share your environment size, current issues, and expected outcomes.",
    items: [
      {
        question: "Can I request a quotation before starting?",
        answer:
          "Yes. Once the technical scope is understood, a proposal can be prepared according to the project requirement and expected delivery model.",
      },
      {
        question: "Do you offer fixed packages for every service?",
        answer:
          "Not always. Some focused assignments can be priced quickly, but broader infrastructure work usually needs technical scoping before final commercials are shared.",
      },
      {
        question: "What affects the final project cost?",
        answer:
          "Cost usually depends on service category, number of users or devices, number of sites, OEM selection, urgency, integration depth, and whether ongoing support is included.",
      },
      {
        question: "Can implementation and AMC be handled separately?",
        answer:
          "Yes. Some clients begin with deployment only and later move into a support or AMC structure once the environment is stable.",
      },
      {
        question: "Do you handle both small and large projects?",
        answer:
          "Yes. Focused assignments and larger rollout programs can both be supported as long as the scope is properly defined from the beginning.",
      },
    ],
  },
  {
    id: "privacy",
    label: "Data & Privacy",
    eyebrow: "Controlled access",
    title: "Sensitive information handled with professional discipline.",
    description:
      "Projects may involve diagrams, credentials, system notes, environment access, and internal configurations. These should be handled only on a controlled need-to-know basis.",
    noteTitle: "Sensitive environment?",
    noteText:
      "Discussions can begin at a high level first, then move into controlled technical access only when truly required.",
    items: [
      {
        question: "How do you handle confidential project information?",
        answer:
          "Internal diagrams, credentials, configuration notes, and project files should only be used for approved project activity and shared with authorized stakeholders involved in execution.",
      },
      {
        question: "Do you need access to internal systems?",
        answer:
          "Sometimes yes. Deployment and troubleshooting tasks may require restricted access, and project-specific or time-bound credentials are generally the safest approach.",
      },
      {
        question: "Who owns the final environment and configurations?",
        answer:
          "The production environment, data, and final configuration ownership remain with the client. Our role is to implement, document, structure, and support the environment within scope.",
      },
      {
        question: "Will information be shared externally?",
        answer:
          "Only where genuinely required for OEM coordination, escalation, or execution support, and even then only the minimum necessary information should be shared.",
      },
      {
        question: "Do you provide documentation and handover?",
        answer:
          "Yes. A proper handover helps the client team understand architecture, dependencies, and operational expectations after implementation.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    eyebrow: "Built into the stack",
    title: "Security works best when planned from the start.",
    description:
      "Access control, network hygiene, resilience, and hardening should be part of infrastructure planning early rather than added later as an isolated layer.",
    noteTitle: "Planning an upgrade?",
    noteText:
      "A structured review of the current setup usually reveals the highest-impact improvements before large investments are made.",
    items: [
      {
        question: "What kind of security support can be included?",
        answer:
          "Security support can include network-oriented protection, access structure planning, environment hardening, endpoint-related considerations, and broader infrastructure risk reduction depending on scope.",
      },
      {
        question: "Can you review our current setup for gaps?",
        answer:
          "Yes. Reviewing the current environment is often the first step in identifying misconfigurations, weak controls, and priority areas for improvement.",
      },
      {
        question: "Do you consider continuity and recovery in planning?",
        answer:
          "Where relevant, redundancy, backup thinking, failover, and recovery preparedness should be considered alongside performance and security objectives.",
      },
      {
        question: "Can security be part of a larger infrastructure project?",
        answer:
          "Yes. In many environments, integrating security into the broader network or infrastructure design gives better long-term results than treating it as a separate add-on.",
      },
      {
        question: "Can legacy environments be modernized more securely?",
        answer:
          "Yes. Modernization can improve resilience, architecture, access control, and operational stability together when it is planned properly.",
      },
    ],
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-black/6 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
          <span
            className={`block text-lg font-medium leading-none transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </span>

        <div className="flex-1">
          <h3 className="text-[16px] font-semibold leading-7 text-slate-900 sm:text-[17px]">
            {item.question}
          </h3>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black/6 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <p className="max-w-3xl text-[15px] leading-8 text-slate-600">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [activeTab, setActiveTab] = useState(faqTabs[0].id);
  const [openItems, setOpenItems] = useState({
    information: 0,
    pricing: 0,
    privacy: 0,
    security: 0,
  });

  const currentTab = useMemo(
    () => faqTabs.find((tab) => tab.id === activeTab) || faqTabs[0],
    [activeTab]
  );

  const handleToggle = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] === index ? -1 : index,
    }));
  };

  return (
    <>
      <PageBanner pageName="FAQs" pageTitle="FAQs" />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff8f2_100%)] py-16 sm:py-20 lg:py-24">
        <div className="absolute left-[-80px] top-20 h-64 w-64 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute bottom-0 right-[-80px] h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-3 sm:mb-12">
            {faqTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[0_12px_30px_rgba(255,122,26,0.24)]"
                      : "border-black/8 bg-white/80 text-slate-600 hover:border-[var(--color-primary)]/30 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-10">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-[28px] border border-black/6 bg-slate-950 p-7 text-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] sm:p-8">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                  {currentTab.eyebrow}
                </p>

                <h2 className="text-[28px] font-semibold leading-[1.2] sm:text-[34px]">
                  {currentTab.title}
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-slate-300">
                  {currentTab.description}
                </p>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="text-[15px] font-semibold text-white">
                    {currentTab.noteTitle}
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-300">
                    {currentTab.noteText}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-400" />
                  <p className="text-[13px] text-slate-400">
                    Clear answers for pre-sales questions, project scoping, and
                    decision-stage concerns.
                  </p>
                </div>
              </div>
            </aside>

            <div className="space-y-4">
              {currentTab.items.map((item, index) => (
                <FaqItem
                  key={`${currentTab.id}-${index}`}
                  item={item}
                  isOpen={openItems[activeTab] === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>
    </>
  );
}