"use client";

import Image from "next/image";
import { MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Packages", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const contactItems = [
  {
    label: "Address",
    icon: "location",
    content: (
      <address className="not-italic">
        1/120, K. P. Paramaguru Street
        <br />
        Ambalakaranpatti
        <br />
        Uthangudi Post
        <br />
        Madurai - 625 023
      </address>
    ),
  },
  {
    label: "Email",
    icon: "email",
    content: (
      <a
        href="mailto:framesbysundar@gmail.com"
        className="font-semibold text-[#d6b467] transition-colors hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        framesbysundar@gmail.com
      </a>
    ),
  },
  {
    label: "Phone",
    icon: "phone",
    content: (
      <a
        href="tel:+919597345529"
        className="font-semibold text-[#d6b467] transition-colors hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        9597345529
      </a>
    ),
  },
];

function FooterIcon({ icon }: { icon: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[#d6b467]">
      {icon === "location" ? (
        <>
          <path {...common} d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle {...common} cx="12" cy="10" r="3" />
        </>
      ) : null}
      {icon === "email" ? (
        <>
          <rect {...common} x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path {...common} d="m5 8 7 5 7-5" />
        </>
      ) : null}
      {icon === "phone" ? (
        <path
          {...common}
          d="M8.4 4.8 6.7 5.9c-.8.5-1.1 1.5-.8 2.4 1.4 4.2 4.6 7.5 8.8 8.8.9.3 1.9 0 2.4-.8l1.1-1.7c.4-.6.2-1.4-.4-1.8l-2.5-1.5c-.5-.3-1.2-.2-1.6.2l-.9.9a10.2 10.2 0 0 1-3.2-3.2l.9-.9c.4-.4.5-1.1.2-1.6L9.9 5.2c-.4-.6-1.2-.8-1.5-.4Z"
        />
      ) : null}
      {icon === "instagram" ? (
        <>
          <rect {...common} x="5" y="5" width="14" height="14" rx="4" />
          <circle {...common} cx="12" cy="12" r="3.2" />
          <path {...common} d="M16.4 7.7h.1" />
        </>
      ) : null}
      {icon === "whatsapp" ? (
        <>
          <path {...common} d="M12 4a8 8 0 0 0-6.8 12.2L4.5 20l3.9-.7A8 8 0 1 0 12 4Z" />
          <path {...common} d="M9.2 8.9c.2-.5.4-.6.7-.6h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.4.5c.6 1.1 1.5 2 2.7 2.6l.5-.5c.2-.2.5-.2.7-.1l1.5.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.6.9-.5.3-1.2.4-2.1.1-2.8-.8-5.1-3.1-5.9-5.8-.3-.8-.1-1.6.4-2.1Z" />
        </>
      ) : null}
    </svg>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();

    const headerOffset = window.innerWidth >= 1024 ? 104 : 96;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="border-t border-[#d6b467]/24 bg-[#050403] py-10 sm:py-12"
    >
      <div className="section-shell">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.05fr_0.7fr_1.1fr] lg:gap-14">
          <div className="mx-auto max-w-xs md:mx-0">
            <a
              href="#home"
              onClick={(event) => handleLinkClick(event, "home")}
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Sundar Photography & Team home"
            >
              <Image
                src="/images/logo/sundar-photography-team-logo.png"
                alt="Sundar Photography & Team logo"
                width={205}
                height={94}
                className="h-20 w-auto object-contain invert"
              />
            </a>
            <p className="mt-5 text-base font-semibold leading-7 text-white">
              Capturing Moments.
              <br />
              Creating Timeless Memories.
            </p>
            <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-white/62 md:justify-start">
              <FooterIcon icon="location" />
              Madurai, Tamil Nadu
            </p>
          </div>

          <nav aria-label="Footer quick links" className="mx-auto w-full max-w-xs md:mx-0">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b467]">
              Quick Links
            </h2>
            <div className="mt-5 grid gap-3">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleLinkClick(event, link.id)}
                  className="group relative mx-auto w-fit text-sm uppercase tracking-[0.18em] text-white/64 transition-colors hover:text-[#f2dc9b] focus:outline-none focus-visible:text-[#f2dc9b] md:mx-0"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#d6b467] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </nav>

          <div className="mx-auto w-full max-w-sm md:mx-0">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6b467]">
              Contact
            </h2>
            <div className="mt-5 grid gap-5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 text-sm leading-6 text-white/68 md:flex-row md:items-start"
                >
                  <FooterIcon icon={item.icon} />
                  <div>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#d6b467]/24 pt-6">
          <div className="grid gap-4 text-center text-xs uppercase tracking-[0.16em] text-white/48 md:grid-cols-3 md:items-center">
            <p className="md:text-left">&copy; 2026 Sundar Photography & Team</p>
            <p>
              Designed & Developed with{" "}
              <span aria-label="love" role="img">
                &#10084;&#65039;
              </span>
            </p>
            <div className="flex items-center justify-center gap-4 md:justify-end">
              <a
                href="https://www.instagram.com/sundar_photographymadurai?igsh=OGxpY3Nld2hiOGpz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#d6b467] transition-colors hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FooterIcon icon="instagram" />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/919597345529"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#d6b467] transition-colors hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FooterIcon icon="whatsapp" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:framesbysundar@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#d6b467] transition-colors hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <FooterIcon icon="email" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
