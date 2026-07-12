import Image from "next/image";

const links = [
  { label: "Home", id: "home" },
  { label: "Packages", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d6b467]/28 bg-[#050403] py-10 sm:py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[0.95fr_1.1fr_1.1fr_0.7fr] md:items-center">
        <div>
          <a
            href="#home"
            className="inline-flex w-[154px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Sudar Photography home"
          >
            <Image
              src="/images/logo/sudar-photography-logo.jpeg"
              alt="Sudar Photography logo"
              width={320}
              height={146}
              className="h-auto w-full object-contain [filter:invert(1)_grayscale(1)_contrast(1.3)]"
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-center">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs uppercase tracking-[0.2em] text-white/64 transition-colors hover:text-[#f2dc9b]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="mt-1 h-6 w-6 shrink-0 text-[#d6b467]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <address className="not-italic text-sm leading-6 text-white/68">
            1/120, K. P. Paramaguru Street
            <br />
            Ambalakaranpatti
            <br />
            Uthangudi Post
            <br />
            Madurai - 625 023
          </address>
        </div>
        <p className="text-xs uppercase leading-7 tracking-[0.16em] text-white/48 md:text-right">
          &copy; 2026
          <br />
          Sudar Photography
        </p>
      </div>
    </footer>
  );
}
