"use client";

import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [show, setShow] = useState(false);

  const phone = "918851140126";
  const message = "Hello, I want to discuss a project";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 left-5 z-[9999] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white ring-4 ring-white/80 shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] dark:ring-neutral-900/70 ${
        show
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-2 opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-[22px] w-[22px] fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.23c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.3-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.21 0 1.3.95 2.56 1.08 2.74.13.18 1.86 2.84 4.5 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.51-.31Z" />
        <path d="M16.03 3.2c-7.07 0-12.8 5.72-12.8 12.78 0 2.26.6 4.48 1.73 6.43L3.1 28.8l6.56-1.72a12.8 12.8 0 0 0 6.37 1.73h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.64-3.76-9.05A12.7 12.7 0 0 0 16.03 3.2Zm0 23.46h-.01a10.7 10.7 0 0 1-5.44-1.49l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.63 10.63 0 0 1-1.63-5.66c0-5.91 4.8-10.72 10.71-10.72 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.13 7.58c0 5.91-4.81 10.72-10.71 10.72Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;