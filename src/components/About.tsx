"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const highlights = [
  {
    title: "Wedding & Engagement",
    description: "Complete event coverage",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <circle cx="24" cy="34" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="40" cy="34" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M28 18l4-6 4 6M30 12h4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Photo + Film",
    description: "Photography and videography",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <rect
          x="10"
          y="24"
          width="34"
          height="24"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M44 31l12-7v24l-12-7z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <circle cx="22" cy="17" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="36" cy="17" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Madurai",
    description: "Available for destination events",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <path
          d="M32 58s20-18 20-34a20 20 0 0 0-40 0c0 16 20 34 20 34z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <circle cx="32" cy="24" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <motion.section
      id="about"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative overflow-hidden bg-[#070503] py-18 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(214,180,103,0.09),transparent_32%),radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.035),transparent_30%)]"
      />
      <div className="section-shell relative grid gap-10 md:grid-cols-[minmax(320px,0.44fr)_minmax(0,0.56fr)] md:items-center md:gap-12 xl:grid-cols-[minmax(380px,0.44fr)_minmax(0,0.56fr)] xl:gap-16">
        <motion.div
          className="relative aspect-[9/14] w-full overflow-hidden rounded-lg border border-[#d6b467]/75 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.46)] md:min-h-[620px] md:max-h-[760px] xl:min-h-[700px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduceMotion ? undefined : { scale: [1, 1.035, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/about-telephone-booth-portrait.png"
              alt="Sundar Photography & Team telephone booth portrait"
              fill
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 42vw, 92vw"
              className="object-cover object-[42%_center]"
              priority={false}
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/88 via-black/42 to-transparent" />
          <div className="absolute bottom-7 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
            <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-[#d6b467] sm:text-xs">
              Sundar Photography & Team
            </p>
            <p className="text-3xl font-semibold leading-[1.05] text-white sm:text-4xl md:text-3xl xl:text-[2.6rem]">
              Real emotions.
              <br />
              Timeless frames.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:flex md:flex-col md:justify-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.48em] text-[#d6b467]">About</p>
          <h2 className="mt-5 max-w-[640px] font-serif text-[clamp(2.25rem,3vw,3.85rem)] font-semibold leading-[1.04] text-white">
            Stories shaped by emotion, tradition, and timeless detail.
          </h2>
          <div className="mt-8 grid max-w-[640px] gap-6 text-base leading-8 text-white/70 lg:text-lg lg:leading-9">
            <p>
              Sundar Photography & Team captures weddings, engagements, portraits, and celebrations with a
              natural, cinematic approach. Every frame is thoughtfully composed to preserve genuine
              emotions, meaningful traditions, and the moments families will revisit for years.
            </p>
            <p>
              Based in Madurai, we provide photography, videography, drone coverage, creative couple
              sessions, and premium albums tailored to each celebration.
            </p>
          </div>

          <div className="mt-11 grid gap-7 border-t border-[#d6b467]/18 pt-9 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`text-[#d6b467] sm:pr-6 xl:pr-8 ${
                  index > 0 ? "sm:border-l sm:border-white/12 sm:pl-6 xl:pl-8" : ""
                }`}
              >
                <div className="h-12 w-12">{highlight.icon}</div>
                <p className="mt-5 text-base font-semibold uppercase leading-snug tracking-[0.18em] xl:text-lg">
                  {highlight.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70 xl:text-base xl:leading-7">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-col gap-5 min-[1120px]:flex-row min-[1120px]:items-center">
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="min-h-14 border border-[#d6b467] bg-[#d6b467] px-8 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Our Packages
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex min-h-14 items-center whitespace-nowrap text-left text-sm font-semibold uppercase tracking-[0.16em] text-[#d6b467] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467] focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:tracking-[0.18em]"
            >
              Contact Sundar Photography & Team <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
