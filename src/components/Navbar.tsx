"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";

const navItems = ["Home", "Portfolio", "Services", "About", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    setIsOpen(false);
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/82 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" onClick={(event) => handleNavClick(event, "home")} className="group flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-[0.22em] text-white">
            SUDAR
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.38em] text-[#d6b467] transition-colors group-hover:text-[#f2dc9b]">
            Photography
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm uppercase tracking-[0.22em] transition-colors hover:text-[#f2dc9b] focus:outline-none focus:text-[#f2dc9b] ${
                  isActive ? "text-[#f2dc9b]" : "text-white/68"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[#d6b467] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#f2dc9b] focus:ring-offset-2 focus:ring-offset-black md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="section-shell flex flex-col py-5">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={(event) => handleNavClick(event, id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b border-white/8 py-4 text-sm uppercase tracking-[0.24em] last:border-b-0 ${
                      isActive ? "text-[#f2dc9b]" : "text-white/78"
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
