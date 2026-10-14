import Link from "next/link";

const PageBanner = ({ pageTitle, pageName, eyebrow, description }) => {
  return (
    <section className="relative overflow-hidden bg-[rgba(18,24,32,0.05)] pt-[145px] pb-[78px] max-[992px]:pt-[125px] max-[992px]:pb-[60px]">
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
        className="pointer-events-none absolute right-[10%] top-[47%] z-[1] hidden h-[160px] w-[135px] -translate-y-1/2 rotate-90 bg-contain bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/img/deco/deco-2.svg')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <ul className="mb-[16px] flex flex-wrap items-center text-[15px]">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-[rgba(18,24,32,1)] transition-colors duration-200 hover:text-[rgba(245,124,0,1)]"
            >
              Home
            </Link>
            <span className="mx-[15px] h-[7px] w-[7px] rounded-full bg-[rgba(245,124,0,1)]" />
          </li>

          <li className="text-[rgba(18,24,32,0.5)]">{pageName}</li>
        </ul>

        {eyebrow && (
          <p className="mb-[10px] text-[13px] font-semibold uppercase tracking-[0.22em] text-[rgba(245,124,0,1)]">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-[920px] text-[38px] font-semibold uppercase leading-[1.25] tracking-[-0.02em] text-[rgba(18,24,32,1)] max-[992px]:text-[30px] max-[768px]:text-[26px]">
          {pageTitle}
        </h1>

        {description && (
          <p className="mt-[18px] max-w-[760px] text-[16px] leading-[1.8] text-[rgba(18,24,32,0.68)] max-[768px]:text-[15px]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
