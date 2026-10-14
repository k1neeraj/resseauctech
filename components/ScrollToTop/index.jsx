"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-[9999] inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/90 text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-neutral-900/90 dark:text-white dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] dark:hover:bg-neutral-900 ${
        show
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp size={20} strokeWidth={2.4} />
    </button>
  );
};

export default ScrollToTop;