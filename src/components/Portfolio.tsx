"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const businessPhone = "919597345529";

const packagePosters = [
  {
    title: "Platinum Package",
    price: "Starting from Rs. 1,00,000",
    src: "/images/packages/platinum-package.jpeg",
    alt: "Sundar Photography Platinum Package wedding and engagement poster",
    summary:
      "A complete premium wedding and engagement story with photography, videography, creative shoots, aerial visuals, and keepsake deliverables.",
    coverage: [
      "Wedding and engagement coverage",
      "Traditional photography",
      "Traditional videography",
      "Candid photography",
      "Candid videography",
      "Creative bride and groom photoshoot",
    ],
    deliverables: ["Premium albums", "Pen drive", "Photo frames", "Customized calendar"],
    highlights: ["Drone coverage", "Cinematic reels", "Pre-wedding photoshoot", "Post-wedding photoshoot"],
  },
  {
    title: "Diamond Package",
    price: "Starting from Rs. 55,000",
    src: "/images/packages/diamond-package.jpeg",
    alt: "Sundar Photography Diamond Package two-day wedding coverage poster",
    summary:
      "A polished two-day package for engagement and wedding coverage with creative portraits, candid moments, and refined printed keepsakes.",
    coverage: [
      "Two-day wedding coverage",
      "Engagement and wedding",
      "Traditional function photoshoot",
      "Candid event coverage",
      "Creative bride and groom photoshoot",
      "Complete traditional wedding coverage",
    ],
    deliverables: ["Premium albums", "Pen drive", "Photo frames", "Calendar"],
    highlights: ["Pre-wedding or post-wedding shoot", "Package with video option", "Soft copy delivery"],
  },
  {
    title: "Gold Package",
    price: "Starting from Rs. 35,000",
    src: "/images/packages/gold-package.jpeg",
    alt: "Sundar Photography Gold Package wedding coverage poster",
    summary:
      "A balanced engagement and wedding-day photography package with essential coverage, creative couple portraits, and album delivery.",
    coverage: [
      "Engagement evening coverage",
      "Traditional function photography",
      "Candid photography",
      "Creative bride and groom photoshoot",
      "Wedding-day coverage",
    ],
    deliverables: ["Premium album", "Pen drive", "Photo frames"],
    highlights: ["Optional videography add-on", "Two-day story coverage", "Clean printed memories"],
  },
  {
    title: "Silver Package",
    price: "Starting from Rs. 25,000",
    src: "/images/packages/silver-package.jpeg",
    alt: "Sundar Photography Silver Package two days complete coverage poster",
    summary:
      "An elegant two-day essentials package for engagement and wedding functions with couple coverage and core printed deliverables.",
    coverage: [
      "Two-day complete coverage",
      "Engagement photoshoot",
      "Bride and groom couple shoot",
      "Wedding function coverage",
    ],
    deliverables: ["Premium album", "Pen drive", "Photo frames"],
    highlights: ["Optional traditional video coverage", "Engagement plus wedding coverage", "Simple keepsake package"],
  },
];

type PackagePoster = (typeof packagePosters)[number];

export default function Portfolio() {
  const [selectedPackage, setSelectedPackage] = useState<PackagePoster | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedPackage) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPackage(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedPackage]);

  const handleEnquiry = (packageName: string) => {
    const contactSection = document.getElementById("contact");
    const sessionInput = document.querySelector<HTMLInputElement>('input[name="session"]');

    setSelectedPackage(null);

    if (sessionInput) {
      sessionInput.value = packageName;
      sessionInput.dispatchEvent(new Event("input", { bubbles: true }));
      sessionInput.dispatchEvent(new Event("change", { bubbles: true }));
    }

    window.setTimeout(
      () => {
        contactSection?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        window.setTimeout(() => sessionInput?.focus({ preventScroll: true }), reduceMotion ? 0 : 650);
      },
      reduceMotion ? 0 : 180,
    );
  };

  const handleWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(
      `Hi Sundar Photography, I would like to enquire about the ${packageName}. Please share more details.`,
    );
    window.open(`https://wa.me/${businessPhone}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.section
        id="portfolio"
        initial={reduceMotion ? false : { opacity: 0, y: 36 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.14 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="bg-[#090705] py-24 sm:py-32"
      >
        <div className="section-shell">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d6b467]">PACKAGES</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Photography Packages
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/62 sm:text-base">
              Choose from four curated Sundar Photography wedding packages, each presented with the
              uploaded package poster for quick review.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {packagePosters.map((packageItem, index) => (
              <motion.article
                key={packageItem.title}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group overflow-hidden border border-[#d6b467]/28 bg-[#050403] shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition-transform duration-500 hover:-translate-y-2"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPackage(packageItem)}
                  className="block w-full bg-black/72 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467] sm:p-4"
                  aria-label={`View ${packageItem.title} poster`}
                >
                  <span className="relative block aspect-[3/4.35] w-full overflow-hidden bg-[#100d09]">
                    <Image
                      src={packageItem.src}
                      alt={packageItem.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </span>
                </button>

                <div className="border-t border-[#d6b467]/20 p-5 sm:p-6">
                  <h3 className="text-2xl font-semibold text-white">{packageItem.title}</h3>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setSelectedPackage(packageItem)}
                      className="min-h-12 flex-1 border border-[#d6b467]/55 px-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2dc9b] transition-colors hover:bg-[#d6b467] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467]"
                      aria-label={`Open ${packageItem.title} details`}
                    >
                      View Package
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEnquiry(packageItem.title)}
                      className="min-h-12 flex-1 border border-white/14 bg-white/[0.06] px-5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-[#d6b467] hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467]"
                      aria-label={`Enquire about ${packageItem.title}`}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedPackage ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#050302]/94 p-3 backdrop-blur-md sm:p-6 lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPackage.title} package details`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedPackage(null);
              }
            }}
          >
            <motion.div
              className="relative max-h-[calc(100vh-1.5rem)] w-full max-w-6xl overflow-y-auto border border-[#d6b467]/36 bg-[#0b0704] shadow-[0_30px_120px_rgba(0,0,0,0.72)] sm:max-h-[calc(100vh-3rem)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.94, y: 18 }}
              transition={{ duration: 0.34, ease: "easeOut" }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,180,103,0.18),transparent_30%),linear-gradient(135deg,rgba(214,180,103,0.12),transparent_28%,rgba(214,180,103,0.08))]" />

              <div className="relative grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                <aside className="border-b border-[#d6b467]/24 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:border-[#d6b467]/24">
                  <div className="sticky top-0">
                    <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-[#d6b467]">
                      Poster Preview
                    </p>
                    <div className="relative mx-auto aspect-[3/4.35] max-h-[58vh] w-full overflow-hidden bg-black/60 ring-1 ring-[#d6b467]/20 sm:max-w-md lg:max-h-[72vh]">
                      <Image
                        src={selectedPackage.src}
                        alt={selectedPackage.alt}
                        fill
                        sizes="(min-width: 1024px) 34vw, 92vw"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </aside>

                <div className="relative p-5 sm:p-8 lg:p-10">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-[#d6b467]">
                    Sundar Photography
                  </p>
                  <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                        {selectedPackage.title}
                      </h3>
                      <p className="mt-3 text-xl font-semibold text-[#f2dc9b]">
                        {selectedPackage.price}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                    {selectedPackage.summary}
                  </p>

                  <div className="mt-8 grid gap-6">
                    <section>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6b467]">
                        Coverage Details
                      </h4>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {selectedPackage.coverage.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-white/76">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#d6b467]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6b467]">
                        Deliverables
                      </h4>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {selectedPackage.deliverables.map((item) => (
                          <div
                            key={item}
                            className="border border-[#d6b467]/22 bg-black/30 p-4 text-sm font-medium text-white/82"
                          >
                            <span className="mb-3 block h-px w-10 bg-[#d6b467]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6b467]">
                        Special Highlights
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedPackage.highlights.map((item) => (
                          <span
                            key={item}
                            className="border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/78"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="mt-8 grid gap-3 border-t border-[#d6b467]/24 pt-5 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => handleEnquiry(selectedPackage.title)}
                      className="min-h-12 border border-[#d6b467] bg-[#d6b467] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Enquire Now
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatsApp(selectedPackage.title)}
                      className="min-h-12 border border-[#d6b467]/55 bg-white/[0.06] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f2dc9b] transition-colors hover:bg-[#d6b467] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPackage(null)}
                      className="min-h-12 border border-white/14 bg-black/45 px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10 hover:text-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      autoFocus
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
