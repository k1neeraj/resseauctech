import Link from "next/link";

const reasons = [
  {
    id: "01",
    title: "Requirement-first planning",
    text: "We begin with actual site, workload and project needs so recommendations stay aligned with deployment reality instead of generic product push.",
  },
  {
    id: "02",
    title: "Institutional and enterprise focus",
    text: "Our approach fits organizations that need reliability, structured coordination, documentation and delivery discipline across critical environments.",
  },
  {
    id: "03",
    title: "Strong partner ecosystem",
    text: "With access to established OEM and infrastructure partners, we help align solution design with performance, support and long-term continuity goals.",
  },
  {
    id: "04",
    title: "Implementation-led execution",
    text: "We think beyond supply by considering installation readiness, rollout coordination, integration dependencies and post-deployment usability.",
  },
  {
    id: "05",
    title: "Documentation and handover",
    text: "Structured documentation, configuration clarity and handover support help internal teams operate, maintain and scale environments with confidence.",
  },
  {
    id: "06",
    title: "Support-conscious delivery",
    text: "From deployment planning to continuity needs, we keep supportability in view so systems remain practical to manage after implementation.",
  },
];

const WhyChooseResseaux = () => {
  return (
    <section className="relative overflow-hidden bg-white py-[110px] max-[992px]:py-[90px]">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/img/deco/map.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[7%] top-[16%] z-[1] hidden h-[150px] w-[130px] bg-contain bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/img/deco/deco-2.svg')",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-[54px] max-w-[760px]">
          <p className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgba(245,124,0,1)]">
            Delivery Approach
          </p>

          <h2 className="max-w-[820px] text-[48px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#121820] max-[1200px]:text-[42px] max-[992px]:text-[34px] max-[768px]:text-[28px]">
            Why organizations choose Resseaux for infrastructure execution.
          </h2>

          <p className="mt-[18px] max-w-[680px] text-[16px] leading-[1.9] text-[rgba(18,24,32,0.62)] max-[768px]:text-[15px]">
            We support infrastructure projects with planning discipline, deployment awareness,
            ecosystem alignment and long-term operational thinking across enterprise and
            institutional environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="group rounded-[26px] border border-[rgba(18,24,32,0.08)] bg-[#fcfbf8] p-[28px] shadow-[0_16px_50px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(245,124,0,0.18)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] max-[768px]:rounded-[22px] max-[768px]:p-[22px]"
            >
              <div className="mb-[18px] flex items-center justify-between gap-[12px]">
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[rgba(245,124,0,1)]">
                  {item.id}
                </span>

                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(245,124,0,0.08)] text-[rgba(245,124,0,1)] transition-transform duration-300 group-hover:rotate-12">
                  +
                </span>
              </div>

              <h3 className="text-[26px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#121820] max-[768px]:text-[22px]">
                {item.title}
              </h3>

              <p className="mt-[14px] text-[15px] leading-[1.85] text-[rgba(18,24,32,0.62)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[44px] flex flex-col gap-[16px] border-t border-[rgba(18,24,32,0.08)] pt-[28px] sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[760px] text-[14px] leading-[1.8] text-[rgba(18,24,32,0.56)]">
            Need a clearer view of how we support planning, deployment and long-term infrastructure continuity?
          </p>

          <div className="flex flex-wrap items-center gap-[12px]">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(18,24,32,0.12)] px-[20px] py-[12px] text-[14px] font-semibold text-[#121820] transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
            >
              About Company
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[rgba(245,124,0,1)] px-[22px] py-[13px] text-[14px] font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:bg-[rgba(224,108,0,1)]"
            >
              Talk To Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseResseaux;