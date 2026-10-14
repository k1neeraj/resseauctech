"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";

const faqData = [
  {
    question: "What services does Resseaux Tech provide?",
    answer:
      "We provide enterprise IT infrastructure solutions including network design, data center setup, cloud infrastructure, cyber security, and virtualization."
  },
  {
    question: "Do you work with government projects?",
    answer:
      "Yes, we handle enterprise and government-level IT infrastructure and system integration projects."
  },
  {
    question: "Where is your company located?",
    answer:
      "We are based in New Delhi, India and serve clients globally."
  },
  {
    question: "Do you offer cloud solutions?",
    answer:
      "Yes, we provide scalable cloud infrastructure solutions including AWS, Azure, and hybrid environments."
  },
  {
    question: "How can we contact you?",
    answer:
      "You can reach us via our contact page or email us at contact@resseauxtech.com."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <PageBanner pageName="FAQs" pageTitle="FAQs" />

      <section className="mil-faqs mil-p-0-120">
        <div className="container">

          <div className="row justify-content-between">

            {/* Left Content */}
            <div className="col-lg-4">
              <h3 className="mil-up-font mil-mb-30">
                <span className="mil-accent">Resseaux Tech</span> Frequently Asked Questions
              </h3>
              <p className="mil-mb-60">
                Find answers to common questions about our enterprise IT infrastructure services and solutions.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="col-lg-7">
              {faqData.map((item, index) => (
                <div key={index}>
                  
                  <div
                    className={`mil-accordion ${activeIndex === index ? "mil-active" : ""}`}
                    onClick={() => toggle(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h6>{item.question}</h6>
                  </div>

                  {activeIndex === index && (
                    <div className="mil-panel">
                      <div className="mil-window">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <ContactForm />
    </>
  );
}