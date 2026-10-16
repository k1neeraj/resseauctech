"use client";

import { useMemo, useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

const faqTabs = [
  {
    id: "information",
    label: "Products & Services",
    eyebrow: "About Resseaux Tech",
    title: "IT products and implementation support for your project.",
    description:
      "We work across networking, security, servers, storage, cloud, virtualization, HCI, UPS and batteries. Share what you need and where it has to be delivered.",
    noteTitle: "Looking for a quote?",
    noteText:
      "Send the BOQ or specification, quantities, delivery location and target date. We will follow up if we need any details clarified.",
    items: [
      {
        question: "What does Resseaux Tech supply and support?",
        answer:
          "We handle requirements across network design and implementation, security, data centre, cloud, virtualization, storage, HCI, UPS, batteries and related IT infrastructure support.",
      },
      {
        question: "Can you provide products as well as installation?",
        answer:
          "Yes. Tell us whether you need equipment supply only or also require installation, configuration, integration, testing or handover.",
      },
      {
        question: "Do you work with government and institutional buyers?",
        answer:
          "We consider government, institutional and enterprise requirements against the relevant project scope and tender conditions. Share the BOQ or bid documents when requesting a quote.",
      },
      {
        question: "Can you quote a specific OEM or model?",
        answer:
          "Yes. Include the preferred OEM and model or the required technical specification. The proposed supply will depend on the project conditions and product requirements.",
      },
      {
        question: "Do you work outside Delhi?",
        answer:
          "Our office is in New Delhi and we consider requirements across India based on the product, site locations and delivery scope.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Quotes",
    eyebrow: "Request pricing",
    title: "Get a quote based on your actual requirement.",
    description:
      "Pricing depends on the product or service, quantities, delivery locations and whether the job includes installation or ongoing support.",
    noteTitle: "Have a BOQ ready?",
    noteText:
      "Attach it to your enquiry and tell us the delivery location, preferred OEM and expected timeline.",
    items: [
      {
        question: "What should I send for a quotation?",
        answer:
          "Share the BOQ or specification, quantities, preferred OEM or model, delivery location, required date and any installation or support needs.",
      },
      {
        question: "Can you provide a price before the full scope is known?",
        answer:
          "We can review the details available. A firm quote may need confirmed quantities, technical requirements, delivery details and the agreed service scope.",
      },
      {
        question: "What affects the final price?",
        answer:
          "The OEM and model, quantities, licences, accessories, delivery locations, installation, warranty and support requirements can all affect the total.",
      },
      {
        question: "Can implementation and AMC be quoted separately?",
        answer:
          "Yes. Tell us whether you need equipment only, implementation, ongoing support or a combination, and we can review the requested scope.",
      },
      {
        question: "Do you review both small and multi-site requirements?",
        answer:
          "We review each enquiry against the products, quantities, locations, timeline and services involved. Include those details so we can assess the scope.",
      },
    ],
  },
  {
    id: "delivery",
    label: "Project Support",
    eyebrow: "Supply and implementation",
    title: "From equipment supply to deployment.",
    description:
      "Tell us which parts of the job you need help with: equipment, installation, configuration, integration, testing, documentation or maintenance.",
    noteTitle: "Planning a project?",
    noteText:
      "Share the project scope, site locations, current setup and expected completion date.",
    items: [
      {
        question: "What happens after I send a requirement?",
        answer:
          "We review the information, ask for any missing details and discuss the next steps for the requested products or services.",
      },
      {
        question: "Can you work with equipment we already have?",
        answer:
          "Tell us the current make, model and setup, plus what needs to be added or changed. Compatibility and the agreed scope will determine the options.",
      },
      {
        question: "Can installation and configuration be included?",
        answer:
          "Mention the work required in your enquiry. We can review installation, configuration, integration, testing and handover alongside the equipment scope.",
      },
      {
        question: "Can I ask about support after deployment?",
        answer:
          "Yes. Include the equipment list, locations, current warranty status and the type of maintenance or support you need.",
      },
      {
        question: "What should I prepare before contacting you?",
        answer:
          "A BOQ or specification, quantities, preferred OEM, site locations and timeline are a useful starting point. Tell us about any installation or support needs too.",
      },
    ],
  },
  {
    id: "security",
    label: "Security Solutions",
    eyebrow: "Firewalls and endpoint security",
    title: "Security products matched to your environment.",
    description:
      "The right requirement depends on users, sites, internet links, existing equipment, licence term and the support needed after installation.",
    noteTitle: "Requesting a security quote?",
    noteText:
      "Share the current firewall or security setup, the required features, preferred OEM and licence or support term.",
    items: [
      {
        question: "What security products can I enquire about?",
        answer:
          "You can enquire about firewall solutions, endpoint protection and related security requirements as part of an office or wider IT infrastructure project.",
      },
      {
        question: "Can you quote for an existing network upgrade?",
        answer:
          "Yes. Share the current devices, number of users and locations, internet links and what needs to change.",
      },
      {
        question: "Do I need to include licence and support terms?",
        answer:
          "Yes. State the required subscription period, OEM support, renewal expectations and any deployment services requested.",
      },
      {
        question: "Can security be part of a larger infrastructure order?",
        answer:
          "Yes. Include the security products and related requirements in the BOQ, along with any network, server or implementation work that must be coordinated.",
      },
      {
        question: "Can installation or configuration be included?",
        answer:
          "Mention whether you need policy configuration, migration, testing or integration with existing systems so the requested scope is clear.",
      },
    ],
  },
];

export default function Faq() {
  const [activeTab, setActiveTab] = useState(faqTabs[0].id);
  const currentTab = useMemo(
    () => faqTabs.find((tab) => tab.id === activeTab) || faqTabs[0],
    [activeTab]
  );


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
                    Answers to common questions about services, pricing and project support.
                  </p>
                </div>
              </div>
            </aside>

            <FaqAccordion key={currentTab.id} items={currentTab.items} />
          </div>
        </div>
      </section>

      <ContactForm/>
    </>
  );
}