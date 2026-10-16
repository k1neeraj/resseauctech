import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

const cookieSections = [
  {
    title: "Essential Website Functions",
    text: "Some basic website functions may rely on technical storage or limited browser-based mechanisms required for page delivery, navigation, security or core functionality.",
    points: [
      "Page navigation and session continuity",
      "Basic website security and stability",
      "Core form and interface functionality",
    ],
  },
  {
    title: "Third-Party Embeds",
    text: "This website may include third-party content or services such as embedded maps. These providers may use cookies or similar technologies according to their own policies when you interact with embedded content.",
    points: [
      "Embedded map services",
      "Third-party hosted content",
      "External service functionality",
    ],
  },
  {
    title: "Analytics and Performance Tools",
    text: "Resseaux Tech may introduce analytics, performance monitoring or website improvement tools in the future to better understand usage and improve service quality. If such tools are used, this page may be updated accordingly.",
    points: [
      "Website performance review",
      "Traffic and engagement insights",
      "Usability improvement",
    ],
  },
];

const preferenceItems = [
  "You may manage or restrict cookies through your browser settings.",
  "Some embedded or third-party services may not function properly if cookies are blocked.",
  "We may update this Cookie Policy if website tools, integrations or functionality change over time.",
];

export const metadata = {
  title: "Cookie Policy",
  description:
    "Read the Cookie Policy of Resseaux Tech to understand how cookies, embedded services and related technologies may be used on this website.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner
        pageName="Cookie Policy"
        pageTitle="Cookie Policy"
      />

      <section className="bg-[#f8f6f1] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Last Updated
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
                How cookies and similar technologies may be used on this website.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                This Cookie Policy explains how Resseaux Tech may use cookies,
                embedded third-party services and similar technologies in
                connection with this website. It is intended to help visitors
                understand what these technologies do, why they may be used and
                what options may be available to manage them.
              </p>
            </div>

            <div className="mt-12 space-y-10">
              <section>
                <h3 className="text-2xl font-semibold text-slate-900">
                  1. What are cookies
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Cookies are small text files that may be stored on your device
                  when you visit a website. They may help websites function,
                  improve user experience, support embedded tools or provide
                  limited usage-related information.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-slate-900">
                  2. How cookies may be used
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {cookieSections.map((section) => (
                    <article
                      key={section.title}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                    >
                      <h4 className="text-xl font-semibold text-slate-900">
                        {section.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {section.text}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600">
                              ✓
                            </span>
                            <span className="text-sm leading-6 text-slate-700">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-slate-900">
                  3. Third-party providers
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Some website features may rely on third-party services. When
                  such services are embedded or loaded, those providers may
                  process technical information or use cookies according to their
                  own privacy and cookie practices. We recommend reviewing the
                  relevant third-party policies where applicable.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-slate-900">
                  4. Your choices
                </h3>

                <div className="mt-5 space-y-4">
                  {preferenceItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                    >
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-slate-900">
                  5. Updates to this policy
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Resseaux Tech may revise this Cookie Policy from time to time
                  to reflect changes in website functionality, third-party tools,
                  compliance expectations or operational requirements. The latest
                  version will always be published on this page.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-slate-900">
                  6. Contact
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  If you have any questions about this Cookie Policy or the use
                  of website technologies, you may contact Resseaux Tech through
                  the details below.
                </p>

                <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm leading-7 text-slate-700">
                    Email:{" "}
                    <a
                      href="mailto:info@resseauxtech.com"
                      className="font-medium text-orange-600 hover:underline"
                    >
                      info@resseauxtech.com
                    </a>
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Contact page:{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-orange-600 hover:underline"
                    >
                      Visit Contact Us
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <RelatedFaqs
        items={pageFaqs.cookiePolicy}
        title="Cookie policy FAQs"
        description="Basic information about browser storage and cookie controls."
      />
    </>
  );
}