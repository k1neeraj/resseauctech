"use client";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-[var(--neutral-900)] py-24">
      {/* soft gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#181f2b_0%,#10151f_100%)]" />

      {/* honeycomb-ish accent on top-right (matches template vibe) */}
      <div className="pointer-events-none absolute right-[10%] top-0 z-0 opacity-70">
        <div className="h-32 w-32 border border-[color:var(--brand-500)]/35 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 font-[var(--font-heading)] text-[42px] font-semibold leading-none tracking-[-0.03em] text-[var(--color-text-inverse)] md:text-[56px]">
          Contact <span className="text-[var(--color-primary)]">Me</span>
        </h2>

        <form className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            {/* Name */}
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-4 flex items-center gap-3 text-sm font-medium"
              >
                <span className="text-[var(--color-text-inverse)]">Name</span>
                <span className="text-[var(--color-primary)]">Required</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name Here"
                className="w-full border-0 border-b border-[var(--color-border-inverse-soft)] bg-transparent pb-4 text-[15px] text-[var(--color-text-inverse)] outline-none placeholder:text-[var(--color-text-inverse-muted)] focus:border-[var(--color-primary)]"
              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-4 flex items-center gap-3 text-sm font-medium"
              >
                <span className="text-[var(--color-text-inverse)]">
                  Email Address
                </span>
                <span className="text-[var(--color-primary)]">Required</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full border-0 border-b border-[var(--color-border-inverse-soft)] bg-transparent pb-4 text-[15px] text-[var(--color-text-inverse)] outline-none placeholder:text-[var(--color-text-inverse-muted)] focus:border-[var(--color-primary)]"
              />
            </div>

            {/* Phone */}
            <div className="mb-12">
              <label
                htmlFor="phone"
                className="mb-4 flex items-center gap-3 text-sm font-medium"
              >
                <span className="text-[var(--color-text-inverse)]">Phone</span>
                <span className="text-[var(--color-text-inverse-muted)]">
                  Optional
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your Phone"
                className="w-full border-0 border-b border-[var(--color-border-inverse-soft)] bg-transparent pb-4 text-[15px] text-[var(--color-text-inverse)] outline-none placeholder:text-[var(--color-text-inverse-muted)] focus:border-[var(--color-primary)]"
              />
            </div>

            {/* Attach file */}
            <div className="mb-12 flex items-start gap-3">
              <span className="mt-0.5 text-sm text-[var(--color-text-inverse)]">
                📎
              </span>
              <div>
                <label
                  htmlFor="file"
                  className="cursor-pointer text-sm text-[var(--color-text-inverse)] transition hover:text-[var(--color-primary)]"
                >
                  Attach your file
                </label>
                <input id="file" type="file" className="hidden" />
                <p className="mt-1 text-xs text-[var(--color-text-inverse-muted)]">
                  up to 20MB
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex h-full flex-col">
            {/* Message */}
            <div className="mb-8 flex-1">
              <label
                htmlFor="message"
                className="mb-4 flex items-center gap-3 text-sm font-medium"
              >
                <span className="text-[var(--color-text-inverse)]">
                  Message
                </span>
                <span className="text-[var(--color-primary)]">Required</span>
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={10}
                className="min-h-[258px] w-full resize-none border-0 border-b border-[var(--color-border-inverse-soft)] bg-transparent pb-4 text-[15px] text-[var(--color-text-inverse)] outline-none placeholder:text-[var(--color-text-inverse-muted)] focus:border-[var(--color-primary)]"
              />
            </div>

            {/* Privacy text */}
            <p className="mb-4 text-xs leading-6 text-[var(--color-text-inverse-muted)]">
              We will process your personal information in accordance with our
              Privacy Policy.
            </p>

            {/* Checkbox line */}
            <label className="mb-12 flex items-start gap-3 text-sm leading-6 text-[var(--color-text-inverse)]">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded-none border border-[var(--color-border-inverse-soft)] bg-transparent text-[var(--color-primary)] accent-[var(--color-primary)]"
              />
              <span>
                I would like to be contacted with news and updates about your{" "}
                <a
                  href="#."
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
                >
                  events and services
                </a>
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="inline-flex min-h-[64px] w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-[15px] font-semibold text-[#161b25] shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition hover:bg-[var(--color-primary-hover)]"
            >
              Send Message Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}