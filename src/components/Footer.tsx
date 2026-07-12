const links = ["Home", "Portfolio", "Services", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050403] py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.22em] text-white">SUDAR</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.38em] text-[#d6b467]">
            Photography
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.22em] text-white/52 transition-colors hover:text-[#f2dc9b]"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-white/38">
          © 2026 Sudar Photography
        </p>
      </div>
    </footer>
  );
}
