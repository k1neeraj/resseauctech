import PageBanner from "@/components/common/PageBanner";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Resseaux Tech regarding data collection, usage, security, cookies, and your rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner pageName="Privacy Policy" pageTitle="Privacy Policy" />

      <section className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="mx-auto max-w-[960px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-12 text-[15px] leading-8 text-[var(--color-text-soft)]">
            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                1. Who We Are
              </h2>
              <p className="mt-4">
                Resseaux Tech is an IT infrastructure and technology solutions
                company. This Privacy Policy applies to information collected
                through our website, enquiry forms, email communications, and
                related service interactions.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                2. Information We Collect
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Name, company name, phone number, and email address.</li>
                <li>Business enquiry details, project requirements, and messages.</li>
                <li>Files or documents you voluntarily upload.</li>
                <li>Technical data such as IP address, browser, device, and pages visited.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                3. How We Use Information
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>To respond to enquiries and support requests.</li>
                <li>To prepare proposals, quotations, and service discussions.</li>
                <li>To improve website performance, security, and user experience.</li>
                <li>To maintain internal records and comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                4. Cookies and Analytics
              </h2>
              <p className="mt-4">
                Our website may use cookies and analytics tools to understand site
                usage, improve functionality, and support security. You can control
                cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                5. Sharing of Information
              </h2>
              <p className="mt-4">
                We do not sell personal information. We may share information with
                internal team members, service providers, or authorities only when
                reasonably necessary for service delivery, operations, or legal compliance.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                6. Data Retention and Security
              </h2>
              <p className="mt-4">
                We retain data only as long as necessary for enquiry handling,
                service delivery, recordkeeping, or legal compliance. We use
                reasonable technical and administrative safeguards, but absolute
                security cannot be guaranteed.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                7. Your Rights
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Request access to your personal information.</li>
                <li>Request correction or update of inaccurate information.</li>
                <li>Request deletion where legally applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                8. Third-Party Links
              </h2>
              <p className="mt-4">
                Our website may contain links to third-party websites or platforms.
                We are not responsible for their content, privacy practices, or security.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                9. Changes to This Policy
              </h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. The revised
                version will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--color-text)]">
                10. Contact Information
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
    </>
  );
}