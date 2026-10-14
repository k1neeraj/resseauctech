"use client";

import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const serviceLinks = [
  { label: "Network Infrastructure", href: "/services/network-infrastructure" },
  { label: "Security Solutions", href: "/services/security-solutions" },
  { label: "Cloud Services", href: "/services/cloud-services" },
  { label: "Virtualization", href: "/services/virtualization" },
  { label: "Storage HCI", href: "/services/storage-hci" },
  { label: "Implementation Support", href: "/services/implementation-support" },
  { label: "View All Services", href: "/services" },
];

const companyLinks = [
  { label: "About Company", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blog" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/resseaux-tech-private-limited",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[19px] w-[19px]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.41v1.57h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/resseauxtech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-[19px] w-[19px]"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--neutral-900)] text-[var(--color-text-inverse)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#161c27_0%,#10151f_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 xl:grid-cols-[1.1fr_1fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center">
              <Image
                src="/img/logo/resseaux-tech-logo.png"
                alt="Resseaux Tech logo"
                width={160}
                height={44}
                className="h-auto w-[110px] object-contain sm:w-[125px] lg:w-[135px]"
                priority
              />
            </a>

            <p className="mt-5 max-w-[280px] text-[14px] leading-7 text-[var(--color-text-inverse-muted)]">
              Secure and scalable IT infrastructure solutions for enterprise,
              institutional, and project-driven environments.
            </p>

            <p className="mt-5 max-w-[280px] text-[14px] leading-7 text-[var(--color-text-inverse-soft)]">
              T19 A, near Krishna Mandir, Khirki Extension, Malviya Nagar, New
              Delhi - 110017
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[var(--font-heading)] text-[17px] font-semibold text-[var(--color-text-inverse)]">
              Services
            </h3>

            <div className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[14px] text-[var(--color-text-inverse-muted)] transition hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* More */}
          <div>
            <h3 className="font-[var(--font-heading)] text-[17px] font-semibold text-[var(--color-text-inverse)]">
              More
            </h3>

            <div className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[14px] text-[var(--color-text-inverse-muted)] transition hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-heading)] text-[17px] font-semibold text-[var(--color-text-inverse)]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-[14px] leading-7 text-[var(--color-text-inverse-muted)]">
              <div>
                <p className="text-[var(--color-text-inverse)]">Call Us</p>

                <a
                  href="tel:+911141616233"
                  className="transition hover:text-[var(--color-primary)]"
                >
                  (+91)-11-41616233
                </a>
              </div>

              <div>
                <p className="text-[var(--color-text-inverse)]">Email</p>

                <a
                  href="mailto:info@resseauxtech.com"
                  className="transition hover:text-[var(--color-primary)]"
                >
                  info@resseauxtech.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Resseaux Tech ${item.label}`}
                  title={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[var(--color-text-inverse-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-border-inverse-soft)] py-5">
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {policyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] text-[var(--color-text-inverse-muted)] transition hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <p className="text-[13px] text-[var(--color-text-inverse-muted)]">
              © {new Date().getFullYear()} Resseaux Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
