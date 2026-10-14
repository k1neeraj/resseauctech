import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Resseaux Tech home"
    >
      <Image
        src="/img/logo/resseaux-tech-logo.png"
        alt="Resseaux Tech"
        width={260}
        height={64}
        priority
        className="h-11 w-auto sm:h-12 md:h-[3.3rem] lg:h-14"
      />
    </Link>
  );
}