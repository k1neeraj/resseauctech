import { createPageMetadata } from "@/lib/seo";
import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at Resseaux Tech. We are hiring experienced sales professionals for government, institutional, and enterprise IT infrastructure business.",
  path: "/careers",
});

const openRole = {
  title: "Sales Manager – Government / Institutional Business",
  experience: "4–5 years",
  location: "New Delhi / Bengaluru",
  type: "FULL_TIME",
  applyEmail: "info@resseauxtech.com",
};

const highlights = [
  "Work on government, institutional, and enterprise IT infrastructure opportunities.",
  "Engage with solution areas spanning networking, security, cloud, virtualization, storage, power backup, and implementation support.",
  "Contribute to requirement shaping, account growth, and long-cycle B2B opportunity development.",
];

const requirements = [
  "4–5 years of experience in sales for government, institutional, or enterprise-facing organisations.",
  "Practical understanding of IT infrastructure, system integration, networking, security, servers, storage, cloud, or related solution environments.",
  "Strong communication, relationship-building, presentation, and follow-up discipline.",
  "Comfort working with long sales cycles, structured requirements, and coordination-heavy opportunities.",
  "Experience with government or institutional procurement environments will be strongly preferred.",
];

export default function CareersPage() {
  const subject = encodeURIComponent(
    "Application for Sales Manager – Government / Institutional Business"
  );

  const body = encodeURIComponent(`Hello Resseaux Tech Team,

I would like to apply for the Sales Manager – Government / Institutional Business role.

Name:
Phone:
Current Location:
Total Experience:
Relevant Government / Institutional Sales Experience:
Current Company:
Notice Period:

Please find my resume attached.

Regards,`);

  const mailtoLink = `mailto:${openRole.applyEmail}?subject=${subject}&body=${body}`;

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: openRole.title,
    description:
      "Resseaux Tech is hiring an experienced sales professional for government, institutional, and enterprise IT infrastructure business. The role involves requirement shaping, account growth, solution-led sales, and long-cycle opportunity development across networking, security, cloud, virtualization, storage, power backup, and implementation support.",
    employmentType: openRole.type,
    jobLocation: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressCountry: "IN",
        },
      },
    ],
    hiringOrganization: {
      "@type": "Organization",
      name: "Resseaux Tech",
      sameAs: "https://www.resseauxtech.com",
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    directApply: true,
    experienceRequirements: "4–5 years of relevant sales experience",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />

      <PageBanner
        pageName="Careers"
        pageTitle="Careers at Resseaux Tech"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
            Careers
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-5xl">
            Join Resseaux Tech and help grow institutional infrastructure
            business
          </h1>

          <p className="mt-5 text-base leading-8 text-[#111827]/70">
            Resseaux Tech works across IT infrastructure and system integration
            requirements for enterprise, institutional, and project-driven
            environments. We are currently hiring an experienced sales
            professional with exposure to government or institutional business
            development.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-black/8 bg-white px-6 py-7 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:px-8 md:py-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff7a1a]">
                  Open Position
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#111827] md:text-3xl">
                  {openRole.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff3e8] px-4 py-2 text-sm font-medium text-[#b45309]">
                  {openRole.experience}
                </span>
                <span className="rounded-full bg-[#f3f4f6] px-4 py-2 text-sm font-medium text-[#374151]">
                  {openRole.location}
                </span>
                <span className="rounded-full bg-[#f3f4f6] px-4 py-2 text-sm font-medium text-[#374151]">
                  Full-time
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#111827]">
                Role overview
              </h3>
              <div className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff7a1a]" />
                    <p className="text-[15px] leading-7 text-[#111827]/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#111827]">
                Requirements
              </h3>
              <div className="mt-4 space-y-3">
                {requirements.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#111827]" />
                    <p className="text-[15px] leading-7 text-[#111827]/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-black/8 bg-[#111827] px-6 py-7 text-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] md:px-8 md:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9d57]">
              Apply directly
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Send your resume by email
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/72">
              We are keeping the application process simple. If your background
              matches government, institutional, or infrastructure-led sales,
              send your resume directly to our team.
            </p>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/60">Application email</p>
              <a
                href={`mailto:${openRole.applyEmail}`}
                className="mt-2 inline-block text-base font-semibold text-white transition hover:text-[#ff9d57]"
              >
                {openRole.applyEmail}
              </a>

              <div className="mt-5 space-y-2 text-sm text-white/70">
                <p>Role: {openRole.title}</p>
                <p>Experience: {openRole.experience}</p>
                <p>Location: {openRole.location}</p>
              </div>
            </div>

            <a
              href={mailtoLink}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ff7a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e96c10]"
            >
              Apply via Email
            </a>

            <p className="mt-4 text-sm leading-6 text-white/55">
              Clicking the button opens your default email app with the subject
              and a basic application template prefilled.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9d57]">
                Looking for another role?
              </p>
              <p className="mt-3 text-[15px] leading-7 text-white/70">
                You can still share your resume for future sales, business
                development, or infrastructure-related opportunities.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-[#ff9d57]"
              >
                Contact our team
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <RelatedFaqs
        items={pageFaqs.careers}
        title="Careers FAQs"
        description="Application details and what to do if you do not see a matching opening."
      />
    </>
  );
}