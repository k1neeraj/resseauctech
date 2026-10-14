"use client";

import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getFeaturedServices } from "@/app/api/data";

import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const featuredServices = getFeaturedServices();

  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-[110px] max-[992px]:py-[90px]">
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
        className="pointer-events-none absolute right-[8%] top-[14%] z-[1] hidden h-[160px] w-[140px] rotate-90 bg-contain bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/img/deco/deco-2.svg')",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-[50px] flex flex-col gap-[24px] md:flex-row md:items-end md:justify-between">
          <div className="max-w-[700px]">
            <p className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgba(245,124,0,1)]">
              Services &amp; Solutions
            </p>

            <h2 className="max-w-[760px] text-[48px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#121820] max-[1200px]:text-[42px] max-[992px]:text-[34px] max-[768px]:text-[28px]">
              Infrastructure services built for deployment, continuity and
              scale.
            </h2>

            <p className="mt-[18px] max-w-[620px] text-[16px] leading-[1.9] text-[rgba(18,24,32,0.62)] max-[768px]:text-[15px]">
              Explore Resseaux Tech’s core service areas across networking,
              security, cloud, virtualization, storage and implementation
              support.
            </p>
          </div>

          <div className="flex items-center gap-[12px]">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous services"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(18,24,32,0.12)] bg-white text-[#121820] transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
            >
              ←
            </button>

            <button
              ref={nextRef}
              type="button"
              aria-label="Next services"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(18,24,32,0.12)] bg-white text-[#121820] transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            watchOverflow={true}
            observer={true}
            observeParents={true}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="services-swiper !overflow-visible"
          >
            {featuredServices.map((service) => (
              <SwiperSlide key={service.id} className="!h-auto">
                <div className="flex h-full min-h-[390px] flex-col rounded-[28px] border border-[rgba(18,24,32,0.08)] bg-white p-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_30px_80px_rgba(15,23,42,0.08)] max-[768px]:min-h-[360px] max-[768px]:rounded-[22px] max-[768px]:p-[22px]">
                  <div className="mb-[22px] flex items-center justify-between gap-[12px]">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[rgba(245,124,0,1)]">
                      {String(service.id).padStart(2, "0")}
                    </span>

                    <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[rgba(245,124,0,0.08)] text-[rgba(245,124,0,1)]">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-[28px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#121820] max-[768px]:text-[24px]">
                    {service.title}
                  </h3>

                  <p className="mt-[14px] text-[15px] leading-[1.85] text-[rgba(18,24,32,0.62)]">
                    {service.description}
                  </p>

                  <div className="my-[24px] h-px w-full bg-[rgba(18,24,32,0.08)]" />

                  <ul className="mb-[26px] space-y-[12px]">
                    {service.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-[10px] text-[14px] text-[rgba(18,24,32,0.74)]"
                      >
                        <span className="h-[6px] w-[6px] rounded-full bg-[rgba(245,124,0,1)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-[14px] pt-[10px]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-[8px] text-[15px] font-semibold text-[#121820] transition-colors duration-300 hover:text-[rgba(245,124,0,1)]"
                    >
                      <span>View Details</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center rounded-full border border-[rgba(18,24,32,0.12)] px-[16px] py-[10px] text-[13px] font-semibold text-[#121820] transition-all duration-300 hover:border-[rgba(245,124,0,1)] hover:text-[rgba(245,124,0,1)]"
                    >
                      All Services
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-[44px] flex flex-col gap-[16px] border-t border-[rgba(18,24,32,0.08)] pt-[28px] sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[760px] text-[14px] leading-[1.8] text-[rgba(18,24,32,0.56)]">
            Need a broader view first? Visit the main services page to explore
            all solution areas before diving into individual service details.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-[rgba(245,124,0,1)] px-[22px] py-[13px] text-[14px] font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:bg-[rgba(224,108,0,1)]"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;