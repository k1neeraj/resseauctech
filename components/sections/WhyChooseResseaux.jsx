import Link from "next/link";

const reasons = [
  {
    id: "01",
    title: "Start with your BOQ and site requirements",
    text: "We review quantities, specifications, compatibility and site conditions before discussing a supply or deployment scope.",
  },
  {
    id: "02",
    title: "Government, institutional and enterprise projects",
    text: "Share the applicable tender or project requirements, delivery locations and timeline so we can review what is needed.",
  },
  {
    id: "03",
    title: "Products across established technology brands",
    text: "Our listed technology partners cover networking, compute, storage, UPS, batteries and data-centre infrastructure.",
  },
  {
    id: "04",
    title: "Supply and implementation in one discussion",
    text: "Where required, discuss equipment supply alongside installation, configuration, integration, testing and handover.",
  },
  {
    id: "05",
    title: "Clear installation and handover scope",
    text: "Tell us whether the scope needs configuration records, testing, site documentation or handover to your IT team.",
  },
  {
    id: "06",
    title: "Support after delivery",
    text: "Include warranty, service coverage or AMC requirements before finalising the order.",
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
            Why work with Resseaux Tech?
          </h2>

          <p className="mt-[18px] max-w-[680px] text-[16px] leading-[1.9] text-[rgba(18,24,32,0.62)] max-[768px]:text-[15px]">
            We can discuss the required equipment, delivery scope, installation and ongoing support against your project requirements.
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
            Have a BOQ, product list or deployment requirement to discuss?
          </p>

          <div className="flex flex-wrap items-center gap-[12px]">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(18,24,32,0.12)] px-[20px] py-[12px] text-[14px] font-semibold text-[#121820] transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[rgba(245,124,0,1)] px-[22px] py-[13px] text-[14px] font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:bg-[rgba(224,108,0,1)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseResseaux;