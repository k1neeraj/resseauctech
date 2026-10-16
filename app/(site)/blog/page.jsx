import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import { getAllPosts, getAllCategories, getRecentPosts } from "@/app/api/data";
import RelatedFaqs from "@/components/RelatedFaqs";
import { pageFaqs } from "@/components/faq/pageFaqs";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Read Resseaux Tech insights on GeM procurement, IT infrastructure, networking, power backup, security, and deployment planning for organisations.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const recentPosts = getRecentPosts(4);

  return (
    <>
      <PageBanner
        pageName="Blog"
        pageTitle="Insights, Procurement & Infrastructure Knowledge"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        width={1200}
                        height={630}
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
                      <ul className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <li className="font-medium text-emerald-700">
                          {post.category}
                        </li>
                        <li>•</li>
                        <li>{post.date}</li>
                        <li>•</li>
                        <li>{post.readTime}</li>
                      </ul>

                      <h2 className="mb-4 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                        {post.title}
                      </h2>

                      <p className="max-w-3xl text-base leading-8 text-slate-600">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 xl:col-span-3 xl:col-start-10">
              <div className="space-y-10">
                <div>
                  <h5 className="mb-5 text-lg font-semibold text-slate-900">
                    About Resseaux Tech
                  </h5>
                  <p className="text-sm leading-7 text-slate-600">
                    Resseaux Tech shares practical insights on enterprise IT
                    infrastructure, GeM procurement, networking, security, power
                    backup, and implementation planning for organisations,
                    projects, and deployment-led requirements.
                  </p>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div>
                  <h5 className="mb-5 text-lg font-semibold text-slate-900">
                    Recent Posts
                  </h5>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300"
                      >
                        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-emerald-700">
                          {post.category}
                        </p>
                        <h6 className="text-sm font-semibold leading-6 text-slate-900">
                          {post.title}
                        </h6>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div>
                  <h5 className="mb-5 text-lg font-semibold text-slate-900">
                    Categories
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div>
                  <h5 className="mb-5 text-lg font-semibold text-slate-900">
                    Need Assistance?
                  </h5>
                  <p className="mb-5 text-sm leading-7 text-slate-600">
                    Need help with procurement planning, infrastructure
                    deployment or solution consultation for your organisation?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition hover:text-emerald-700"
                  >
                    <span>Contact Resseaux Tech</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <RelatedFaqs
        items={pageFaqs.blog}
        title="About our infrastructure insights"
        description="How to use these articles when researching procurement and technical requirements."
      />
    </>
  );
}
