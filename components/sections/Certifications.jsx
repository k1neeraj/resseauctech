const certifications = [
  {
    title: "ISO 9001:2015",
    image: "/certifications/iso-9001-2015.jpg",
  },
  {
    title: "ISO/IEC 20000-1:2018",
    image: "/certifications/iso-20000-1-2018.jpg",
  },
  {
    title: "ISO/IEC 27001:2022",
    image: "/certifications/iso-27001-2022.jpg",
  },
  {
    title: "ISO Maturity Level 5",
    image: "/certifications/iso-maturity-level-5.jpg",
  },
];

export default function Certifications() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-700">
            Certifications
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Certified standards that strengthen trust
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600 md:text-lg">
            Our certifications reflect our commitment to quality, security,
            service management, and process maturity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}