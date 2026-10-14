import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  HeartPulse,
  GraduationCap,
  Factory,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "Clients",
  description:
    "See key client organisations served by Resseaux Tech across defence, government, research, healthcare, education, energy, infrastructure and enterprise environments in India.",
  alternates: {
    canonical: "/clients",
  },
};

const featuredClients = [
  { name: "Airports Authority of India", logo: "/clients/aai.png" },
  { name: "NICSI", logo: "/clients/nicsi.png" },
  { name: "National Informatics Centre", logo: "/clients/nic.png" },
  { name: "Indian Air Force", logo: "/clients/indian-air-force.png" },
  { name: "ISRO", logo: "/clients/isro.png" },
  { name: "AIIMS", logo: "/clients/aiims.png" },
  { name: "IGNOU", logo: "/clients/ignou.png" },
  { name: "C-DAC", logo: "/clients/cdac.png" },
  { name: "CSIR", logo: "/clients/csir.png" },
  { name: "ONGC", logo: "/clients/ongc.png" },
  { name: "Indian Navy", logo: "/clients/indian-navy.png" },
  { name: "Delhi Police", logo: "/clients/delhi-police.png" },
];

const sectors = [
  {
    title: "Defence & Aerospace",
    icon: ShieldCheck,
    description:
      "Trusted by defence, aerospace and strategic organisations working in highly secure and mission-critical environments.",
    items: [
      "Indian Air Force",
      "Indian Navy",
      "Indian Army",
      "BSF",
      "CRPF",
      "CISF",
      "DRDO-linked laboratories",
      "Research Centre Imarat",
    ],
  },
  {
    title: "Government & Public Sector",
    icon: Landmark,
    description:
      "Supporting central and public-sector organisations with enterprise-grade technology deployment and infrastructure programs.",
    items: [
      "NIC",
      "NICSI",
      "Lok Sabha Secretariat",
      "Delhi Development Authority",
      "NDMC",
      "MCD",
      "Department of Post",
      "Competition Commission of India",
    ],
  },
  {
    title: "Research & Innovation",
    icon: Cpu,
    description:
      "Serving advanced research, innovation and scientific organisations where reliability, performance and security matter most.",
    items: [
      "ISRO",
      "C-DAC",
      "CSIR",
      "ICAR",
      "Physical Research Laboratory",
      "NRDC",
      "IISST",
      "Wadia Institute of Himalayan Geology",
    ],
  },
  {
    title: "Healthcare & Medical",
    icon: HeartPulse,
    description:
      "Enabling organisations across healthcare, medical sciences and public health systems with dependable technology solutions.",
    items: [
      "AIIMS",
      "ICMR",
      "ESIC",
      "INMAS",
      "Medical College Thrissur",
      "SGPGIMS",
      "NAMS",
      "NIMHANS",
    ],
  },
  {
    title: "Education & Universities",
    icon: GraduationCap,
    description:
      "Working with leading academic organisations, universities and higher-education bodies across research and campus environments.",
    items: [
      "IGNOU",
      "University of Delhi",
      "IIT Bombay",
      "IIT Indore",
      "NCERT",
      "Gujarat Vidyapith",
      "DAVV",
      "Savitribai Phule Pune University",
    ],
  },
  {
    title: "Energy, Infra & Enterprise",
    icon: Factory,
    description:
      "Delivering solutions across energy, infrastructure, transport and industrial organisations operating at national scale.",
    items: [
      "ONGC",
      "Oil India Limited",
      "Indian Oil",
      "GAIL",
      "NHPC",
      "THDC India Ltd.",
      "RITES",
      "Dedicated Freight Corridor Corporation of India",
    ],
  },
];

const allClients = [
  { name: "Indian Air Force", icon: "shield" },
  { name: "Indian Navy", icon: "shield" },
  { name: "Indian Army", icon: "shield" },
  { name: "BSF", icon: "shield" },
  { name: "CRPF", icon: "shield" },
  { name: "CISF", icon: "shield" },
  { name: "National Security Guard", icon: "shield" },
  { name: "DRDL", icon: "shield" },
  { name: "DLRL", icon: "shield" },
  { name: "NSTL", icon: "shield" },
  { name: "LRDE", icon: "shield" },
  { name: "GTRE", icon: "shield" },
  { name: "ADE", icon: "shield" },
  { name: "ADA", icon: "shield" },
  { name: "DMRL", icon: "shield" },
  { name: "ADRDE", icon: "shield" },
  { name: "NPOL", icon: "shield" },
  { name: "LASTEC", icon: "shield" },

  { name: "Airports Authority of India", icon: "landmark" },
  { name: "NICSI", icon: "landmark" },
  { name: "National Informatics Centre", icon: "landmark" },
  { name: "Central Board of Excise and Customs", icon: "landmark" },
  { name: "Survey of India", icon: "landmark" },
  { name: "Engineers India Limited", icon: "landmark" },
  { name: "Lok Sabha Secretariat", icon: "landmark" },
  { name: "DDA", icon: "landmark" },
  { name: "NDMC", icon: "landmark" },
  { name: "MCD", icon: "landmark" },
  { name: "Department of Post", icon: "landmark" },
  { name: "CPWD", icon: "landmark" },
  { name: "Prasar Bharati", icon: "landmark" },
  { name: "Department of Atomic Energy", icon: "landmark" },
  {
    name: "Dedicated Freight Corridor Corporation of India",
    icon: "landmark",
  },
  { name: "Software Technology Parks of India", icon: "landmark" },
  { name: "CAG", icon: "landmark" },
  { name: "NIUA", icon: "landmark" },
  { name: "Central Pollution Control Board", icon: "landmark" },
  { name: "Competition Commission of India", icon: "landmark" },
  { name: "WAPCOS Limited", icon: "landmark" },
  { name: "RITES Limited", icon: "landmark" },
  { name: "India Meteorological Department", icon: "landmark" },
  { name: "Rural Electrification Corporation", icon: "landmark" },
  { name: "Tamil Nadu Tourism Development Corporation", icon: "landmark" },
  { name: "National Film Archive of India", icon: "landmark" },
  { name: "Government of Jharkhand", icon: "landmark" },
  { name: "Government of Maharashtra", icon: "landmark" },

  { name: "ISRO", icon: "cpu" },
  { name: "C-DAC", icon: "cpu" },
  { name: "CSIR", icon: "cpu" },
  { name: "ICAR", icon: "cpu" },
  { name: "Physical Research Laboratory", icon: "cpu" },
  { name: "NRDC", icon: "cpu" },
  { name: "Research Centre Imarat", icon: "cpu" },

  { name: "AIIMS", icon: "heart" },
  { name: "ESIC", icon: "heart" },
  { name: "ICMR", icon: "heart" },
  { name: "INMAS", icon: "heart" },
  { name: "NIMHANS", icon: "heart" },
  { name: "SGPGIMS", icon: "heart" },
  { name: "NAMS", icon: "heart" },

  { name: "IGNOU", icon: "grad" },
  { name: "University of Delhi", icon: "grad" },
  { name: "IIT Bombay", icon: "grad" },
  { name: "IIT Indore", icon: "grad" },
  { name: "NCERT", icon: "grad" },

  { name: "ONGC", icon: "factory" },
  { name: "Oil India Limited", icon: "factory" },
  { name: "Indian Oil Corporation", icon: "factory" },
  { name: "GAIL", icon: "factory" },
  { name: "NHPC Limited", icon: "factory" },
  { name: "THDC India Ltd.", icon: "factory" },
  { name: "Bharat Electronics Limited", icon: "factory" },
  { name: "Delhi Police", icon: "landmark" },
  { name: "Punjab & Sind Bank", icon: "landmark" },
  { name: "Punjab National Bank", icon: "landmark" },
  { name: "UP Police", icon: "landmark" },
];

const trustStats = [
  { value: "80+", label: "Client organisations represented" },
  { value: "6", label: "Core client segments" },
  { value: "National", label: "Presence across strategic sectors" },
  { value: "Enterprise", label: "Technology-led delivery focus" },
];

const iconMap = {
  shield: ShieldCheck,
  landmark: Landmark,
  cpu: Cpu,
  heart: HeartPulse,
  grad: GraduationCap,
  factory: Factory,
};

export default function ClientsPage() {
  return (
    <main className="bg-[#f6f3ee] text-[#111827]">
      <PageBanner
        pageName="Clients"
        eyebrow="Trusted Organisations"
        pageTitle="Trusted by organisations that power India’s critical systems."
        description="Resseaux Tech has supported organisations across defence, government, research, healthcare, education, public infrastructure and enterprise environments with technology solutions built for reliability, security and scale."
      />

      <section className="border-b border-black/8 bg白">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-black/8 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4 xl:px-8">
          {trustStats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-8 md:px-8">
              <div className="text-2xl font-semibold text-[#111827] md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-[#111827]/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 xl:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
            Featured organisations
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A clientele built on trust, compliance and execution
          </h2>
          <p className="mt-5 text-base leading-8 text-[#111827]/68">
            The company profile reflects a broad client footprint spanning
            public-sector organisations, defence establishments, scientific
            bodies, universities, healthcare organisations and large
            infrastructure-led entities.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredClients.map((client) => (
            <div
              key={client.name}
              className="group rounded-[28px] border border-black/8 bg-white px-6 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
            >
              <div className="flex h-24 items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="max-h-20 w-auto object-contain"
                />
              </div>

              <div className="mt-5 border-t border-black/8 pt-4">
                <p className="text-center text-sm font-semibold leading-6 text-[#111827]">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/8 bg-[#f1ece5]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 xl:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
              Sector coverage
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Serving high-trust and mission-critical environments
            </h2>
            <p className="mt-5 text-base leading-8 text-[#111827]/68">
              From strategic defence labs to public-sector enterprises and
              leading academic organisations, Resseaux Tech’s clientele reflects
              capability across diverse operating environments.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7a1a]/10 text-[#ff7a1a]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#111827]">
                    {sector.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#111827]/66">
                    {sector.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {sector.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/8 bg-[#f7f4ef] px-3 py-2 text-xs font-medium tracking-[0.01em] text-[#111827]/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 xl:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
              Client network
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Broad organisational reach across India
            </h2>
            <p className="mt-5 text-base leading-8 text-[#111827]/68">
              The organisation’s profile highlights client relationships across
              ministries, research bodies, defence institutions, PSUs,
              universities, regulatory agencies and transport or civic
              infrastructure entities.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] transition hover:text-[#ff7a1a]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allClients.map((client) => {
            const Icon = iconMap[client.icon];

            return (
              <div
                key={client.name}
                className="flex items-center gap-3 rounded-[22px] border border-black/8 bg-white px-5 py-4 text-sm font-medium text-[#111827]/78 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5efe6] text-[#ff7a1a]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="leading-5">{client.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="overflow-hidden rounded-[32px] border border-black/8 bg-[#111827] text-white shadow-[0_22px_70px_rgba(15,23,42,0.18)]">
            <div className="grid gap-8 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
                  Let’s build the next deployment
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Looking for a technology partner with proven experience across
                  complex organisations?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                  Resseaux Tech works with organisations that need dependable
                  execution, secure implementation and scalable enterprise
                  technology support across complex environments.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff7a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff8d37]"
                >
                  Talk to Our Team
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}