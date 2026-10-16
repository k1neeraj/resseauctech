import Link from "next/link";
import Image from "next/image";
import { getRecentPosts } from "@/app/api/data";

const Insights = () => {
  const posts = getRecentPosts(3);

  return (
    <section className="relative overflow-hidden bg-[#0f1720] py-[110px] max-[992px]:py-[90px]">
      {/* background deco */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
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
        className="pointer-events-none absolute right-[10%] top-[18%] z-[1] hidden h-[160px] w-[140px] rotate-90 bg-contain bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/img/deco/deco-2.svg')",
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* heading row */}
        <div className="mb-[40px] flex flex-col gap-[20px] md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <p className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgba(245,124,0,1)]">
              Insights & Resources
            </p>

            <h2 className="max-w-[720px] text-[44px] font-semibold leading-[1.12] tracking-[-0.04em] text-white max-[1200px]:text-[38px] max-[992px]:text-[32px] max-[768px]:text-[26px]">
              Product and procurement guides for your next IT project.
            </h2>

            <p className="mt-[16px] max-w-[620px] text-[15px] leading-[1.9] text-[rgba(255,255,255,0.7)]">
              Browse our guides to networking, security, servers, storage, UPS, batteries and IT procurement. Need a quote? Send us your BOQ or product requirement.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[12px]">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.22)] px-[20px] py-[11px] text-[14px] font-semibold text-white transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
            >
              Browse All Guides
            </Link>
          </div>
        </div>

        {/* posts grid */}
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[rgba(148,163,184,0.24)] bg-[rgba(15,23,42,0.9)] shadow-[0_18px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(245,124,0,0.7)] max-[768px]:rounded-[22px]"
            >
              <div className="relative h-[210px] w-full overflow-hidden bg-[#020617] max-[768px]:h-[190px]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </div>

              <div className="flex flex-1 flex-col p-[24px] max-[768px]:p-[20px]">
                <div className="mb-[12px] flex flex-wrap items-center gap-[10px] text-[12px] font-semibold uppercase tracking-[0.18em]">
                  <span className="text-[rgba(248,250,252,0.76)]">
                    {post.category}
                  </span>
                  <span className="h-[4px] w-[4px] rounded-full bg-[rgba(148,163,184,0.6)]" />
                  <span className="text-[rgba(148,163,184,0.9)]">
                    {post.date}
                  </span>
                  <span className="h-[4px] w-[4px] rounded-full bg-[rgba(148,163,184,0.6)]" />
                  <span className="text-[rgba(248,250,252,0.76)]">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[22px] font-semibold leading-[1.35] tracking-[-0.03em] text-white max-[768px]:text-[20px]">
                  {post.title}
                </h3>

                <p className="mt-[12px] line-clamp-3 text-[14px] leading-[1.8] text-[rgba(226,232,240,0.78)]">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-[18px]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-[8px] text-[14px] font-semibold text-[rgba(248,250,252,0.92)] transition-colors duration-300 group-hover:text-[rgba(245,124,0,1)]"
                  >
                    <span>View Guide</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-[3px]">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;