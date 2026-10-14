"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Network & Infrastructure",
        href: "/services/network-infrastructure",
      },
      { label: "Security Solutions", href: "/services/security-solutions" },
      { label: "Cloud Services", href: "/services/cloud-services" },
      { label: "Virtualization", href: "/services/virtualization" },
      { label: "Storage & HCI", href: "/services/storage-hci" },
      {
        label: "Implementation Support",
        href: "/services/implementation-support",
      },
      { label: "View All Services", href: "/services" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

function isItemActive(pathname, item) {
  if (!pathname) return false;
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`))
    return true;
  return (
    item.children?.some(
      (child) =>
        pathname === child.href || pathname.startsWith(`${child.href}/`),
    ) || false
  );
}

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileSubmenu(null);
    setDesktopDropdown(null);
  }, [pathname]);

  // Close mobile menu if resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target)) {
        setDesktopDropdown(null);
        setMobileSubmenu(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  // Cleanup close timer
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openDropdown = (label) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setDesktopDropdown(label);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 140);
  };

  // Always-white navbar theme
  const shellClasses =
    "border-black/8 bg-white text-[#111827] shadow-[0_10px_35px_rgba(15,23,42,0.08)]";
  const navBase = "text-[#111827]/82 hover:text-[#111827]";
  const navActive = "text-[#111827]";
  const borderTone = "border-black/10";
  const mobileCard = "bg-black/[0.02]";
  const softButton =
    "border-black/10 bg-black/[0.03] text-[#111827]/80 hover:bg-black/[0.06] hover:text-[#111827]";

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full">
      <div className={`border-b transition-all duration-300 ${shellClasses}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="flex min-h-[96px] items-center justify-between gap-4 lg:min-h-[104px]">
            <div className="[&_span]:!text-[#111827] [&_.logo-eyebrow]:!text-[#111827]/45">
              <Logo />
            </div>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-9 xl:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const active = isItemActive(pathname, item);
                const open = desktopDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && openDropdown(item.label)}
                    onMouseLeave={() => hasChildren && scheduleCloseDropdown()}
                    onFocus={() => hasChildren && openDropdown(item.label)}
                    onBlur={() => hasChildren && scheduleCloseDropdown()}
                  >
                    {hasChildren ? (
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={item.href}
                          className={`inline-flex items-center text-sm font-medium transition ${
                            active ? navActive : navBase
                          }`}
                          onClick={() => setDesktopDropdown(null)}
                        >
                          {item.label}
                        </Link>

                        <button
                          type="button"
                          className={`inline-flex items-center justify-center rounded-full p-1 transition ${
                            active ? navActive : navBase
                          }`}
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={open}
                          aria-haspopup="menu"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDesktopDropdown((prev) =>
                              prev === item.label ? null : item.label,
                            );
                          }}
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-[#ff7a1a] transition ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`inline-flex items-center text-sm font-medium transition ${
                          active ? navActive : navBase
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Desktop dropdown */}
                    {hasChildren && open ? (
                      <div className="absolute left-1/2 top-full z-40 mt-5 w-[340px] -translate-x-1/2">
                        <div className="rounded-[22px] border border-black/8 bg-white p-3 text-[#111827] shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
                          <div className="mb-2 px-3 pt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111827]/40">
                            Services
                          </div>

                          <div className="space-y-1">
                            {item.children.map((child) => {
                              const childActive =
                                pathname === child.href ||
                                pathname.startsWith(`${child.href}/`);

                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={`block rounded-2xl px-4 py-3 text-sm transition ${
                                    childActive
                                      ? "bg-black/[0.05] text-[#111827]"
                                      : "text-[#111827]/78 hover:bg-black/[0.04] hover:text-[#111827]"
                                  }`}
                                  onClick={() => setDesktopDropdown(null)}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex xl:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#ff7a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff8d37]"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition xl:hidden ${softButton}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navbar"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-navbar"
          className={`overflow-hidden transition-all duration-300 xl:hidden ${
            menuOpen
              ? `max-h-[85vh] border-t ${borderTone} opacity-100`
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
            <div className="space-y-3">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const active = isItemActive(pathname, item);
                const open = mobileSubmenu === item.label;

                return (
                  <div
                    key={item.label}
                    className={`rounded-[22px] border ${borderTone} ${mobileCard}`}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <Link
                        href={item.href}
                        className={`flex-1 rounded-2xl px-4 py-4 text-sm font-medium transition ${
                          active
                            ? "bg-black/[0.05] text-[#111827]"
                            : "text-[#111827]/82 hover:bg-black/[0.04] hover:text-[#111827]"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>

                      {hasChildren ? (
                        <button
                          type="button"
                          className="grid h-11 w-11 place-items-center rounded-2xl text-[#111827]/70 transition hover:bg-black/[0.04] hover:text-[#111827]"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={open}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setMobileSubmenu((prev) =>
                              prev === item.label ? null : item.label,
                            );
                          }}
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-[#ff7a1a] transition ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : null}
                    </div>

                    {hasChildren && open ? (
                      <div className="space-y-1 px-2 pb-3">
                        {item.children.map((child) => {
                          const childActive =
                            pathname === child.href ||
                            pathname.startsWith(`${child.href}/`);

                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block rounded-2xl px-4 py-3 text-sm transition ${
                                childActive
                                  ? "bg-black/[0.05] text-[#111827]"
                                  : "text-[#111827]/68 hover:bg-black/[0.04] hover:text-[#111827]"
                              }`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#ff7a1a] px-4 text-sm font-semibold text-white transition hover:bg-[#ff8d37]"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
