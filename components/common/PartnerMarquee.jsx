// import Image from "next/image";

// const partnersRowOne = [
//   { name: "Acceleron Labs", logo: "/partners/acceleron-labs.png" },
//   { name: "Socomec", logo: "/partners/socomec.png" },
//   { name: "Vertiv", logo: "/partners/vertiv.png" },
//   { name: "Numeric UPS", logo: "/partners/numeric-ups.png" },
//   { name: "NED", logo: "/partners/ned.png" },
//   { name: "Exide", logo: "/partners/exide.png" },
//   { name: "HBL", logo: "/partners/hbl.png" },
// ];

// const partnersRowTwo = [
//   { name: "Leoch", logo: "/partners/leoch.png" },
//   { name: "Dell", logo: "/partners/dell.png" },
//   { name: "Cisco", logo: "/partners/cisco.png" },
//   { name: "HP", logo: "/partners/hp.png" },
//   { name: "Broadcom", logo: "/partners/broadcom.png" },
//   { name: "Nutanix", logo: "/partners/nutanix.png" },
//   { name: "Exicom", logo: "/partners/exicom.png" },
// ];

// function MarqueeRow({ items, reverse = false }) {
//   const repeated = [...items, ...items];

//   return (
//     <div className="group relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f6f3ee] to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f6f3ee] to-transparent" />

//       <div
//         className="flex w-max gap-5 py-2 group-hover:[animation-play-state:paused]"
//         style={{
//           animation: reverse
//             ? "clientMarqueeReverse 34s linear infinite"
//             : "clientMarquee 34s linear infinite",
//         }}
//       >
//         {repeated.map((item, index) => (
//           <div
//             key={`${item.name}-${index}`}
//             className="flex min-w-[230px] flex-col items-center justify-center rounded-[28px] border border-black/8 bg-white px-6 py-7 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:min-w-[250px]"
//           >
//             <div className="flex h-24 w-full items-center justify-center">
//               <Image
//                 src={item.logo}
//                 alt={item.name}
//                 width={170}
//                 height={90}
//                 className="max-h-20 w-auto object-contain"
//               />
//             </div>

//             <p className="mt-5 text-center text-sm font-semibold leading-6 text-[#111827]">
//               {item.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function PartnerMarquee() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
//       <div className="max-w-3xl">
//         <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
//           Technology partnerships
//         </div>

//         <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
//           Partner ecosystem that powers reliable delivery
//         </h2>

//         <p className="mt-4 text-base leading-8 text-[#111827]/68">
//           From power backup and data center systems to enterprise compute,
//           networking and infrastructure software, our ecosystem helps support
//           resilient deployments.
//         </p>
//       </div>

//       <div className="mt-10 space-y-5">
//         <MarqueeRow items={partnersRowOne} />
//         <MarqueeRow items={partnersRowTwo} reverse />
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

const partners = [
  { name: "Acceleron Labs", logo: "/partners/acceleron-labs.png" },
  { name: "Socomec", logo: "/partners/socomec.png" },
  { name: "Vertiv", logo: "/partners/vertiv.png" },
  { name: "Numeric UPS", logo: "/partners/numeric-ups.png" },
  { name: "NED", logo: "/partners/ned.png" },
  { name: "Exide", logo: "/partners/exide.png" },
  { name: "HBL", logo: "/partners/hbl.png" },
  { name: "Leoch", logo: "/partners/leoch.png" },
  { name: "Dell", logo: "/partners/dell.png" },
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "HP", logo: "/partners/hp.png" },
  { name: "Broadcom", logo: "/partners/broadcom.png" },
  { name: "Nutanix", logo: "/partners/nutanix.png" },
  { name: "Exicom", logo: "/partners/exicom.png" },
];

function PartnerMarqueeRow({ items }) {
  const repeated = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f6f3ee] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f6f3ee] to-transparent md:w-24" />

      <div
        className="flex w-max gap-5 py-3 group-hover:[animation-play-state:paused] md:gap-7"
        style={{
          animation: "clientMarquee 38s linear infinite",
        }}
      >
        {repeated.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex min-w-[250px] items-center justify-center rounded-[32px] border border-black/8 bg-white px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:min-w-[320px] md:px-6 md:py-5 lg:min-w-[360px] lg:px-7 lg:py-5"
          >
            <div className="flex h-[118px] w-full items-center justify-center md:h-[140px] lg:h-[152px]">
              <Image
                src={item.logo}
                alt={item.name}
                width={340}
                height={190}
                className="max-h-[100px] w-auto object-contain md:max-h-[122px] lg:max-h-[134px]"
                priority={index < items.length}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnerMarquee() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
      <div className="max-w-3xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
          Technology partnerships
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
          Partner ecosystem that powers reliable delivery
        </h2>

        <p className="mt-4 text-base leading-8 text-[#111827]/68">
          From power backup and data centre systems to enterprise compute,
          networking and infrastructure software, our ecosystem supports
          resilient and dependable deployments.
        </p>
      </div>

      <div className="mt-10">
        <PartnerMarqueeRow items={partners} />
      </div>
    </section>
  );
}