import Link from "next/link";

const PageBanner2 = ({
  pageTitle,
  pageName,
  eyebrow,
  author,
  date,
  readTime,
}) => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-soft)] pt-[145px] pb-[78px] max-[992px]:pt-[125px] max-[992px]:pb-[60px]">
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
              className="text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              Home
            </Link>
            <span className="mx-[15px] h-[7px] w-[7px] rounded-full bg-[var(--color-primary)]" />
          </li>

          <li className="flex items-center">
            <Link
              href="/blog"
              className="text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              Blog
            </Link>
            <span className="mx-[15px] h-[7px] w-[7px] rounded-full bg-[var(--color-primary)]" />
          </li>

          <li className="text-[var(--color-text-muted)]">{pageName}</li>
        </ul>

        {eyebrow && (
          <p className="mb-[8px] text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-[920px] text-[52px] font-semibold leading-[1.16] tracking-[-0.03em] text-[var(--color-text)] max-[1200px]:text-[44px] max-[992px]:text-[34px] max-[768px]:text-[28px]">
          {pageTitle}
        </h1>

        <div className="mt-[16px] flex flex-wrap items-center gap-x-[14px] gap-y-[8px] text-[15px] text-[var(--color-text-muted)]">
          {author && <span>{author}</span>}
          {author && date && (
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-primary)]" />
          )}
          {date && <span>{date}</span>}
          {(author || date) && readTime && (
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-primary)]" />
          )}
          {readTime && <span>{readTime}</span>}
        </div>
      </div>
    </section>
  );
};

export default PageBanner2;