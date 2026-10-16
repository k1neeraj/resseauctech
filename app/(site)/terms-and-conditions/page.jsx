import { createPageMetadata } from "@/lib/seo";
import PageBanner from "@/components/common/PageBanner";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions governing your use of the Resseaux Tech website and related services.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageBanner pageName="Terms & Conditions" pageTitle="Terms & Conditions" />

      <section className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="mx-auto max-w-[960px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-12 text-[15px] leading-8 text-[var(--color-text-soft)]">
            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4">
                By accessing or using this website, you agree to be bound by these
                Terms & Conditions and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                2. Website Purpose
              </h2>
              <p className="mt-4">
                This website is provided for general information about Resseaux Tech,
                its services, contact channels, business profile, and related communications.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                3. Permitted Use
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>You may use this website only for lawful purposes.</li>
                <li>You must not misuse enquiry forms, email addresses, or contact channels.</li>
                <li>You must not attempt unauthorized access to systems or servers.</li>
                <li>You must not upload malicious code, spam, or harmful material.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                4. Intellectual Property
              </h2>
              <p className="mt-4">
                All original website content, design, branding, graphics, and layout
                are owned by or licensed to Resseaux Tech and may not be reproduced
                or reused without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                5. Accuracy of Information
              </h2>
              <p className="mt-4">
                We make reasonable efforts to keep website content accurate and up to
                date, but we do not guarantee completeness, accuracy, or suitability
                for every purpose.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                6. Third-Party Links
              </h2>
              <p className="mt-4">
                This website may contain links to third-party websites or services.
                We are not responsible for their content, practices, or availability.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                7. No Warranty
              </h2>
              <p className="mt-4">
                This website is provided on an “as is” and “as available” basis,
                without warranties of any kind, to the extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                8. Limitation of Liability
              </h2>
              <p className="mt-4">
                Resseaux Tech shall not be liable for losses or damages arising from
                the use of, inability to use, or reliance on the website or its content,
                to the extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                9. Service Discussions
              </h2>
              <p className="mt-4">
                Submission of an enquiry, contact form, or service request does not
                create a contractual relationship. Any formal engagement will be governed
                by separate written documentation.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                10. Governing Law
              </h2>
              <p className="mt-4">
                These Terms & Conditions are governed by the laws of India. Any disputes
                shall be subject to the jurisdiction of competent courts in New Delhi.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                11. Changes to These Terms
              </h2>
              <p className="mt-4">
                We may modify these Terms & Conditions at any time by updating this page.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                12. Contact Information
              </h2>
              <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6">
                <p><strong>Resseaux Tech</strong></p>
                <p>Email: info@resseauxtech.com</p>
                <p>Phone: +91-11-41616233</p>
                <p>Address: New Delhi, India</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <RelatedFaqs
        items={pageFaqs.terms}
        title="Terms and conditions FAQs"
        description="How to interpret general website information alongside formal procurement and contract documents."
      />
    </>
  );
}