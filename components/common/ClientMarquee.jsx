// import Image from "next/image";

// const clientsRowOne = [
//   { name: "Airports Authority of India", logo: "/clients/aai.png" },
//   { name: "NICSI", logo: "/clients/nicsi.png" },
//   { name: "National Informatics Centre", logo: "/clients/nic.png" },
//   { name: "Indian Air Force", logo: "/clients/indian-air-force.png" },
//   { name: "ISRO", logo: "/clients/isro.png" },
//   { name: "AIIMS", logo: "/clients/aiims.png" },
// ];

// const clientsRowTwo = [
//   { name: "IGNOU", logo: "/clients/ignou.png" },
//   { name: "C-DAC", logo: "/clients/cdac.png" },
//   { name: "CSIR", logo: "/clients/csir.png" },
//   { name: "ONGC", logo: "/clients/ongc.png" },
//   { name: "Indian Navy", logo: "/clients/indian-navy.png" },
//   { name: "Delhi Police", logo: "/clients/delhi-police.png" },
// ];

// function MarqueeRow({ items, reverse = false }) {
//   const repeated = [...items, ...items];

//   return (
//     <div className="group relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f6f3ee] to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f6f3ee] to-transparent" />

//       <div
//         className="flex w-max gap-4 py-2 group-hover:[animation-play-state:paused]"
//         style={{
//           animation: reverse
//             ? "clientMarqueeReverse 30s linear infinite"
//             : "clientMarquee 30s linear infinite",
//         }}
//       >
//         {repeated.map((item, index) => (
//           <div
//             key={`${item.name}-${index}`}
//             className="flex min-w-[190px] flex-col items-center justify-center rounded-[24px] border border-black/8 bg-white px-5 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
//           >
//             <div className="flex h-16 w-full items-center justify-center">
//               <Image
//                 src={item.logo}
//                 alt={item.name}
//                 width={110}
//                 height={60}
//                 className="max-h-12 w-auto object-contain"
//               />
//             </div>

//             <p className="mt-4 line-clamp-2 text-center text-sm font-semibold leading-5 text-[#111827]">
//               {item.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ClientMarquee() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
//       <div className="max-w-3xl">
//         <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
//           Trusted institutions
//         </div>
//         <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
//           Organisations we work with
//         </h2>
//         <p className="mt-4 text-base leading-8 text-[#111827]/68">
//           A selection of public-sector, research, defence and enterprise institutions
//           represented in the Resseaux Tech client profile.
//         </p>
//       </div>

//       <div className="mt-10 space-y-4">
//         <MarqueeRow items={clientsRowOne} />
//         <MarqueeRow items={clientsRowTwo} reverse />
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// const clients = [
//   { name: "Airports Authority of India", logo: "/clients/aai.png" },
//   { name: "NICSI", logo: "/clients/nicsi.png" },
//   { name: "National Informatics Centre", logo: "/clients/nic.png" },
//   { name: "Indian Air Force", logo: "/clients/indian-air-force.png" },
//   { name: "ISRO", logo: "/clients/isro.png" },
//   { name: "AIIMS", logo: "/clients/aiims.png" },
//   { name: "IGNOU", logo: "/clients/ignou.png" },
//   { name: "C-DAC", logo: "/clients/cdac.png" },
//   { name: "CSIR", logo: "/clients/csir.png" },
//   { name: "ONGC", logo: "/clients/ongc.png" },
//   { name: "Indian Navy", logo: "/clients/indian-navy.png" },
//   { name: "Delhi Police", logo: "/clients/delhi-police.png" },
// ];

// function ClientMarqueeRow({ items }) {
//   const repeated = [...items, ...items];

//   return (
//     <div className="group relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f6f3ee] to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f6f3ee] to-transparent" />

//       <div
//         className="flex w-max gap-6 py-2 group-hover:[animation-play-state:paused]"
//         style={{
//           animation: "clientMarquee 36s linear infinite",
//         }}
//       >
//         {repeated.map((item, index) => (
//           <div
//             key={`${item.name}-${index}`}
//             className="flex min-w-[270px] flex-col items-center justify-center rounded-[28px] border border-black/8 bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:min-w-[300px]"
//           >
//             <div className="flex h-28 w-full items-center justify-center">
//               <Image
//                 src={item.logo}
//                 alt={item.name}
//                 width={190}
//                 height={110}
//                 className="max-h-24 w-auto object-contain"
//               />
//             </div>

//             {/* <p className="mt-5 text-center text-sm font-semibold leading-6 text-[#111827]">
//               {item.name}
//             </p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ClientMarquee() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
//       <div className="max-w-3xl">
//         <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
//           Trusted institutions
//         </div>

//         <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
//           Organisations we work with
//         </h2>

//         <p className="mt-4 text-base leading-8 text-[#111827]/68">
//           A selection of public-sector, research, defence and enterprise
//           institutions represented in the Resseaux Tech client profile.
//         </p>
//       </div>

//       <div className="mt-10">
//         <ClientMarqueeRow items={clients} />
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const clients = [
  { name: "Airports Authority of India", logo: "/clients/aai.png" },
  { name: "NICSI", logo: "/clients/nicsi.png" },
  { name: "National Informatics Centre", logo: "/clients/nic.png" },
  { name: "Indian Air Force", logo: "/clients/indian-air-force.png" },
  { name: "ISRO", logo: "/clients/isro.png" },
  { name: "AIIMS", logo: "/clients/aiims.png" },
  { name: "IGNOU", logo: "/clients/ignou.png" },
  { name: "C-DAC", logo: "/clients/cdac.png" },
  { name: "CSIR", logo: "/clients/csir.png" },
  { name: "ONGC", logo: "/clients/ongc.png" },
  { name: "Indian Navy", logo: "/clients/indian-navy.png" },
  { name: "Delhi Police", logo: "/clients/delhi-police.png" },
];

function ClientMarqueeRow({ items }) {
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

export default function ClientMarquee() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16 xl:px-8">
      <div className="max-w-3xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">
          Trusted organisations
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
          Organisations we are proud to support
        </h2>

        <p className="mt-4 text-base leading-8 text-[#111827]/68">
          A selection of government, research, defence and enterprise
          organisations represented in the Resseaux Tech client profile.
        </p>
      </div>

      <div className="mt-10">
        <ClientMarqueeRow items={clients} />
      </div>
    </section>
  );
}
