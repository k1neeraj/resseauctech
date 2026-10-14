"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/img/homebanner/banner.png",
    subtitle: "Enterprise IT Infrastructure & Procurement",
    title: "Infrastructure planning, procurement and deployment support.",
    text: "Resseaux Tech helps organizations source, plan and implement networking, compute, power backup and security solutions.",
  },
  {
    id: 2,
    image: "/img/homebanner/banner2.png",
    subtitle: "Project-Led Infrastructure Support",
    title: "Built for enterprises, institutions and critical environments.",
    text: "We support deployment-focused infrastructure requirements with practical planning and procurement alignment.",
  },
];

const HeroBanner = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="hero-swiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-[#0f1720] pb-[130px] pt-[150px] max-[1024px]:pb-[120px] max-[992px]:pt-[135px]">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(8,12,18,0.68)_0%,rgba(8,12,18,0.68)_40%,rgba(8,12,18,0.84)_100%)]" />

              <div className="relative z-[3] mx-auto flex min-h-[calc(100dvh-150px-130px)] w-full max-w-[1320px] items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-10 max-[1024px]:min-h-[calc(100dvh-135px-120px)]">
                <div className="max-w-[900px] text-center">
                  <p className="mb-[22px] inline-flex max-w-full rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-[16px] py-[8px] text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,173,92,1)] max-[768px]:px-[14px] max-[768px]:py-[7px] max-[768px]:text-[10px] max-[768px]:tracking-[0.16em]">
                    {item.subtitle}
                  </p>

                  <h1 className="text-[64px] font-semibold leading-[1.04] tracking-[-0.05em] text-white max-[1200px]:text-[54px] max-[992px]:text-[42px] max-[768px]:text-[32px] max-[768px]:leading-[1.12]">
                    {item.title}
                  </h1>

                  <p className="mx-auto mt-[24px] max-w-[720px] text-[17px] leading-[1.9] text-[rgba(255,255,255,0.72)] max-[768px]:mt-[18px] max-[768px]:max-w-[92%] max-[768px]:text-[15px] max-[768px]:leading-[1.8]">
                    {item.text}
                  </p>

                  <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[14px] max-[768px]:mt-[26px] max-[768px]:gap-[12px]">
                    <a
                      href="/contact"
                      className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[rgba(245,124,0,1)] px-[24px] py-[14px] text-[15px] font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:bg-[rgba(224,108,0,1)]"
                    >
                      Get in Touch
                    </a>

                    <a
                      href="/services"
                      className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] px-[24px] py-[14px] text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop arrows only */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-[10] hidden lg:block">
        <div className="mx-auto flex h-full max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <button className="hero-prev pointer-events-auto flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(15,23,42,0.65)] text-white backdrop-blur-md transition-all duration-300 hover:bg-[rgba(15,23,42,0.9)]">
            ←
          </button>

          <button className="hero-next pointer-events-auto flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(15,23,42,0.65)] text-white backdrop-blur-md transition-all duration-300 hover:bg-[rgba(15,23,42,0.9)]">
            →
          </button>
        </div>
      </div>

      {/* Mobile + tablet arrows */}
      <div className="pointer-events-none absolute bottom-[26px] left-0 right-0 z-[10] lg:hidden">
        <div className="mx-auto flex max-w-[1320px] items-center justify-center gap-3 px-4 sm:px-6">
          <button className="hero-prev pointer-events-auto flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(15,23,42,0.72)] text-white backdrop-blur-md transition-all duration-300 sm:h-[46px] sm:w-[46px]">
            ←
          </button>

          <button className="hero-next pointer-events-auto flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(15,23,42,0.72)] text-white backdrop-blur-md transition-all duration-300 sm:h-[46px] sm:w-[46px]">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;