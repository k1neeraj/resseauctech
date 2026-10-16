import Link from "next/link";

const CtaBand = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-[90px] max-[992px]:py-[75px]">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
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
        className="pointer-events-none absolute left-[8%] top-[18%] z-[1] hidden h-[140px] w-[120px] bg-contain bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/img/deco/deco-2.svg')",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="overflow-hidden rounded-[34px] border border-[rgba(18,24,32,0.08)] bg-[#121820] px-[34px] py-[42px] shadow-[0_24px_80px_rgba(2,6,23,0.18)] max-[992px]:rounded-[28px] max-[992px]:px-[24px] max-[992px]:py-[32px]">
          <div className="flex flex-col gap-[26px] lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[760px]">
              <p className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgba(245,124,0,1)]">
                Let’s Talk
              </p>

              <h2 className="max-w-[760px] text-[42px] font-semibold leading-[1.1] tracking-[-0.04em] text-white max-[1200px]:text-[36px] max-[992px]:text-[30px] max-[768px]:text-[24px]">
                Need pricing or implementation support for an IT project?
              </h2>

              <p className="mt-[16px] max-w-[640px] text-[15px] leading-[1.9] text-[rgba(255,255,255,0.72)]">
                Tell us which products or services you need—networking, security, servers, storage, cloud, virtualization, UPS or batteries. Send your BOQ and site details to start the discussion.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-[12px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[rgba(245,124,0,1)] px-[22px] py-[13px] text-[14px] font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:bg-[rgba(224,108,0,1)]"
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] px-[22px] py-[13px] text-[14px] font-semibold text-white transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;