import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner2 from "@/components/common/PageBanner2";
import {
  blogPosts,
  getPostBySlug,
  getRecentPostsForSlug,
} from "@/app/api/data";
import RelatedFaqs from "@/components/RelatedFaqs";
import { getBlogFaqs } from "@/components/faq/pageFaqs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The requested article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description:
      post.excerpt ||
      "Read infrastructure, procurement and deployment insights from Resseaux Tech.",
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description:
        post.excerpt ||
        "Read infrastructure, procurement and deployment insights from Resseaux Tech.",
      url: `/blog/${post.slug}`,
      type: "article",
      images: post.cover
        ? [
            {
              url: post.cover,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt ||
        "Read infrastructure, procurement and deployment insights from Resseaux Tech.",
      images: post.cover ? [post.cover] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPostsForSlug(post.slug, 4);

  return (
    <>
      <PageBanner2
        pageName={post.category}
        pageTitle={post.title}
        eyebrow={post.category}
        author={post.author?.name}
        date={post.date}
        readTime={post.readTime}
      />

      <section className="bg-[var(--color-bg)] py-[80px] max-[992px]:py-[60px]">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-12 gap-[30px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="col-span-12 lg:col-span-8">
            {post.tags?.length > 0 && (
              <div className="mb-[30px] flex flex-wrap gap-[12px]">
                {post.tags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-[16px] py-[8px] text-[14px] text-[var(--color-text-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.cover && (
              <div className="mb-[30px] overflow-hidden rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={1200}
                  height={700}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            )}

            {post.excerpt && (
              <p className="mb-[28px] text-[18px] leading-[1.9] text-[var(--color-text-soft)] max-[768px]:text-[16px]">
                {post.excerpt}
              </p>
            )}

            <div className="space-y-[26px]">
              {post.content?.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-[10px] text-[34px] leading-[1.25] text-[var(--color-text)] max-[992px]:text-[28px] max-[768px]:text-[24px]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-[17px] leading-[1.95] text-[var(--color-text-soft)] max-[768px]:text-[16px]"
                    >
                      {block.text}
                    </p>
                  );
                }

                return null;
              })}
            </div>

            <div className="mt-[50px] rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)] p-[32px] max-[768px]:p-[24px]">
              <h3 className="mb-[12px] text-[28px] leading-[1.3] text-[var(--color-text)] max-[768px]:text-[22px]">
                Need help with a similar requirement?
              </h3>
              <p className="mb-[18px] text-[16px] leading-[1.8] text-[var(--color-text-soft)]">
                Connect with Resseaux Tech for enterprise infrastructure
                planning, procurement support, implementation and project
                consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[15px] font-semibold text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
              >
                Talk to our team →
              </Link>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-[120px] space-y-[30px]">
              <div className="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-[28px]">
                <h3 className="mb-[14px] text-[22px] text-[var(--color-text)]">
                  About this section
                </h3>
                <p className="text-[15px] leading-[1.9] text-[var(--color-text-soft)]">
                  These articles are designed to help organisations, enterprises
                  and project teams make more informed decisions around
                  procurement, infrastructure and implementation planning.
                </p>
              </div>

              {recentPosts.length > 0 && (
                <div className="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-[28px]">
                  <h3 className="mb-[18px] text-[22px] text-[var(--color-text)]">
                    Recent Posts
                  </h3>

                  <div className="space-y-[14px]">
                    {recentPosts.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="block rounded-[18px] border border-[var(--color-border-soft)] px-[16px] py-[14px] transition-colors duration-200 hover:border-[var(--color-primary)]"
                      >
                        <span className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                          {item.category}
                        </span>
                        <span className="block text-[15px] leading-[1.7] text-[var(--color-text)]">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-[28px]">
                <h3 className="mb-[16px] text-[22px] text-[var(--color-text)]">
                  Explore More
                </h3>

                <div className="flex flex-col gap-[12px]">
                  <Link
                    href="/services"
                    className="text-[15px] font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  >
                    View Services →
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[15px] font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <RelatedFaqs
        items={getBlogFaqs(post.slug)}
        title="Questions related to this article"
        description="Practical notes to help interpret the topic against your own requirements and applicable tender documents."
      />
    </>
  );
}