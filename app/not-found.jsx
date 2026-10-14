import Link from "next/link";

function DotMap() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 900"
      className="absolute inset-0 h-full w-full opacity-[0.16]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dotPattern"
          x="0"
          y="0"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="9" cy="9" r="3.2" stroke="#5d636f" strokeWidth="1.2" />
        </pattern>

        <clipPath id="worldMask">
          <path d="M38 160c36-20 87-25 140-22 24-45 65-69 121-75 39-4 87 2 128 22 35 17 51 45 78 61 24 14 54 13 72 37 13 19 22 43 15 70-10 42-52 72-87 89-22 10-48 17-58 39-12 28 5 58 13 86 7 25 4 52-10 76-20 34-63 52-101 48-41-4-78-29-93-67-11-28-11-58-21-86-8-22-23-44-47-52-29-9-62 8-91-2-31-10-57-41-63-73-9-44 11-96 44-130zm685 9c28-38 71-67 119-79 67-18 146-8 206 26 57 33 93 84 160 94 37 6 77-1 112 16 48 24 79 78 76 132-3 54-36 105-81 136-38 26-85 40-131 45-49 6-100 4-145 26-45 22-80 63-126 84-52 24-118 23-168-5-48-27-75-79-86-132-8-39-8-82-30-116-18-27-49-42-74-61-31-23-57-56-58-96 0-27 12-53 26-70zm807 198c17-13 40-18 62-13 28 6 50 27 65 50 16 25 27 53 26 82-2 36-24 70-55 88-18 10-40 15-54 31-15 16-17 40-15 61 3 24 13 46 15 70 2 24-5 50-25 65-19 15-45 15-66 7-34-13-60-44-72-78-10-28-9-59 0-87 9-27 28-49 38-75 12-29 13-62 30-88 12-18 30-35 51-43zM1147 695c21-12 49-10 69 4 30 20 41 58 39 93-2 33-15 66-40 88-25 22-63 33-95 22-30-10-53-39-60-70-7-32 4-66 23-92 16-21 39-35 64-45z" />
        </clipPath>
      </defs>

      <rect
        width="1600"
        height="900"
        fill="url(#dotPattern)"
        clipPath="url(#worldMask)"
      />
    </svg>
  );
}

function Honeycomb() {
  const cells = [
    "M0 21.65 12.5 0h25L50 21.65 37.5 43.3h-25L0 21.65Z",
    "M38 21.65 50.5 0h25L88 21.65 75.5 43.3h-25L38 21.65Z",
    "M76 21.65 88.5 0h25L126 21.65 113.5 43.3h-25L76 21.65Z",
    "M19 54.65 31.5 33h25L69 54.65 56.5 76.3h-25L19 54.65Z",
    "M57 54.65 69.5 33h25L107 54.65 94.5 76.3h-25L57 54.65Z",
    "M95 54.65 107.5 33h25L145 54.65 132.5 76.3h-25L95 54.65Z",
    "M38 87.65 50.5 66h25L88 87.65 75.5 109.3h-25L38 87.65Z",
    "M76 87.65 88.5 66h25L126 87.65 113.5 109.3h-25L76 87.65Z",
    "M95 120.65 107.5 99h25L145 120.65 132.5 142.3h-25L95 120.65Z",
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 150 145"
      className="h-[120px] w-[124px] md:h-[140px] md:w-[145px]"
    >
      {cells.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          fill="none"
          opacity={i < 7 ? 0.9 : 0.45}
        />
      ))}
    </svg>
  );
}

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
      style={{
        background: "var(--color-surface-dark)",
        color: "var(--color-text-inverse)",
      }}
    >
      <DotMap />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 md:px-6 xl:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[0.92fr_1.02fr_0.52fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-[14px] font-semibold text-white/90 md:text-[15px]">
              Error
            </p>
            <div className="mt-3 text-[82px] font-semibold leading-none tracking-[-0.08em] text-white sm:text-[96px] md:text-[120px] xl:text-[132px]">
              404
            </div>
            <p className="mt-3 text-[17px] font-medium text-white/88 md:text-[18px]">
              Page <span style={{ color: "var(--color-primary)" }}>not</span>{" "}
              found
            </p>
          </div>
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:pt-8 lg:text-left">
            <p className="text-[16px] leading-7 text-white/70 md:text-[18px] md:leading-8">
              The page you are looking for does not exist; it may have been
              moved or removed altogether.
            </p>
            <div className="mt-7">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border px-8 text-[15px] font-semibold transition md:min-h-14 md:px-9 md:text-base"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                  backgroundColor: "transparent",
                }}
              >
                Back to homepage
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:pt-8">
            <Honeycomb />
          </div>
        </div>
      </section>
    </main>
  );
}
