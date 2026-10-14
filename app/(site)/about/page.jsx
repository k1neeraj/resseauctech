import Image from "next/image";
import AboutIntro from "@/components/About/AboutIntro";
import PageBanner from "@/components/common/PageBanner";
import PartnerMarquee from "@/components/common/PartnerMarquee";
import CtaBand from "@/components/sections/CtaBand";
import React from "react";

export const metadata = {
  title: "About Resseaux Tech | IT Infrastructure Organisation in India",
  description:
    "Learn about Resseaux Tech, a director-led IT infrastructure organisation delivering networking, server, storage, cloud, and security solutions for organisations across India.",
  alternates: {
    canonical: "/about",
  },
};

const directors = [
  {
    name: "Ramesh Kumar Vaswani",
    title: "Managing Director",
    image: "/img/team/ramesh-vaswani.png",
    bio: "Providing overall business direction, leadership oversight and long-term strategic guidance across Resseaux Tech operations.",
  },
  {
    name: "Raajeev R Vaswani",
    title: "Director",
    image: "/img/team/raajeev-vaswani.png",
    bio: "Supporting operational continuity, business coordination and internal alignment across ongoing enterprise requirements and delivery-led engagements.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        pageName="About Us"
        eyebrow="About Resseaux Tech"
        pageTitle="Infrastructure execution built for organisations, enterprises and mission-critical environments."
      />

      <AboutIntro />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
            Leadership
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
            Leadership guiding long-term execution and business continuity
          </h2>

          <p className="mt-4 text-base leading-8 text-[#111827]/68">
            Resseaux Tech is guided by director-led oversight across
            infrastructure planning, enterprise coordination and long-term
            delivery support for government and large private organisations.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {directors.map((director) => (
            <div
              key={director.name}
              className="border-t border-black/8 pt-8"
            >
              <div className="grid gap-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start">
                <div className="relative h-[240px] w-full overflow-hidden rounded-[28px] bg-[#f3efe8] sm:h-[250px] sm:w-[180px]">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover"
                  />
                </div>

                <div className="pt-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff7a1a]">
                    {director.title}
                  </div>

                  <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-tight text-[#111827]">
                    {director.name}
                  </h3>

                  <p className="mt-4 max-w-[42ch] text-base leading-8 text-[#111827]/68">
                    {director.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PartnerMarquee />
      <CtaBand />
    </div>
  );
}