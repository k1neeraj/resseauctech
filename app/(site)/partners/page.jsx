import Image from "next/image";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = {
  title: "Partners",
  description:
    "Explore Resseaux Tech technology partners across enterprise infrastructure, networking, critical power, backup systems, devices and modern IT platforms.",
  alternates: {
    canonical: "/partners",
  },
};

const partners = [
  {
    name: "Dell",
    logo: "/partners/dell.png",
    website: "https://www.dell.com/en-in/lp",
    description:
      "Enterprise compute, endpoint infrastructure and business technology deployments across modern environments.",
  },
  {
    name: "HP",
    logo: "/partners/hp.png",
    website: "https://www.hp.com/in-en/home.html",
    description:
      "Business devices, print ecosystems and workplace technology solutions for operational needs.",
  },
  {
    name: "Cisco",
    logo: "/partners/cisco.png",
    website: "https://www.cisco.com/site/in/en/index.html",
    description:
      "Networking, switching, routing and secure connectivity solutions for enterprise and institutional projects.",
  },
  {
    name: "Acceleron Labs",
    logo: "/partners/acceleron-labs.png",
    website: "https://www.acceleronlabs.com/",
    description:
      "Specialized technology support for advanced solutions, deployment alignment and business-critical implementation needs.",
  },
  {
    name: "Socomec",
    logo: "/partners/socomec.png",
    website: "https://www.socomec.co.in/en-in",
    description:
      "Critical power, UPS systems and electrical infrastructure support for continuity-focused environments.",
  },
  {
    name: "Vertiv",
    logo: "/partners/vertiv.png",
    website: "https://www.vertiv.com/en-in/",
    description:
      "Power, cooling and data-center infrastructure solutions for resilient enterprise operations.",
  },
  {
    name: "Numeric UPS",
    logo: "/partners/numeric-ups.png",
    website: "https://www.numericups.com/",
    description:
      "Reliable UPS and backup power systems for offices, facilities and critical installations.",
  },
  {
    name: "NED",
    logo: "/partners/ned.png",
    website: "https://www.nedenergy.in/",
    description:
      "Battery and power-support solutions aligned to backup, uptime and operational continuity requirements.",
  },
  {
    name: "Exide",
    logo: "/partners/exide.png",
    website: "https://www.exideindustries.com/",
    description:
      "Battery-backed continuity solutions for backup power and essential infrastructure support.",
  },
  {
    name: "HBL",
    logo: "/partners/hbl.png",
    website: "https://hbl.in/",
    description:
      "Industrial battery and energy support solutions for performance-sensitive deployments.",
  },
  {
    name: "Leoch",
    logo: "/partners/leoch.png",
    website: "https://www.leoch.com/",
    description:
      "Power storage and battery support solutions for backup and infrastructure continuity systems.",
  },
  {
    name: "Broadcom",
    logo: "/partners/broadcom.png",
    website: "https://www.broadcom.com/",
    description:
      "Enterprise technology and infrastructure software support for scalable IT environments.",
  },
  {
    name: "Nutanix",
    logo: "/partners/nutanix.png",
    website: "https://www.nutanix.com/",
    description:
      "Hyperconverged and modern infrastructure solutions for simplified, scalable enterprise operations.",
  },
  {
    name: "Exicom",
    logo: "/partners/exicom.png",
    website: "https://www.exicom.com/",
    description:
      "Power and energy-focused infrastructure support for uptime-driven business environments.",
  },
];

function PartnerCard({ partner }) {
  return (
    <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[28px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.7] transition duration-300 group-hover:opacity-[0.9]">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={260}
            height={260}
            className="h-auto w-[500px] object-contain contrast-125 brightness-85"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.90)_0%,rgba(255,255,255,0.84)_45%,rgba(255,255,255,0.92)_100%)]" />
      </div>

      <div className="relative z-[2] flex h-full flex-col">
        {/* <div className="flex h-16 items-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={132}
            height={60}
            className="max-h-12 w-auto object-contain"
          />
        </div> */}

        <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#111827]">
          {partner.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#111827]/68">
          {partner.description}
        </p>

        <div className="mt-auto pt-6">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[#111827]/12 px-4 py-2 text-sm font-medium text-[#111827] transition hover:border-[#111827] hover:bg-[#111827] hover:text-white"
          >
            Know More
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PartnersPage() {
  return (
    <main className="bg-[#f6f3ee] text-[#111827]">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 md:px-6 md:pb-10 md:pt-20 xl:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
            Technology partnerships
          </div>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111827] md:text-5xl">
            Partners that strengthen every deployment
          </h1>

          <p className="mt-5 text-base leading-8 text-[#111827]/68 md:text-lg">
            Resseaux Tech works across enterprise infrastructure, critical
            power, backup systems, networking, devices and modern IT platforms
            through a focused ecosystem of technology partners.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20 xl:px-8">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </section>
      <RelatedFaqs
        items={pageFaqs.partners}
        title="Technology partner FAQs"
        description="How OEM fit, authorisations and procurement requirements should be checked for each opportunity."
      />
    </main>
  );
}