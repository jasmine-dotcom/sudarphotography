"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const packages = [
  {
    title: "Platinum Package",
    src: "/images/packages/platinum-package.jpeg",
    width: 1054,
    height: 1492,
    alt: "Sudar Photography Platinum Package wedding and engagement poster",
  },
  {
    title: "Diamond Package",
    src: "/images/packages/diamond-package.jpeg",
    width: 1024,
    height: 1536,
    alt: "Sudar Photography Diamond Package two-day wedding coverage poster",
  },
  {
    title: "Gold Package",
    src: "/images/packages/gold-package.jpeg",
    width: 1024,
    height: 1536,
    alt: "Sudar Photography Gold Package wedding coverage poster",
  },
  {
    title: "Silver Package",
    src: "/images/packages/silver-package.jpeg",
    width: 1024,
    height: 1536,
    alt: "Sudar Photography Silver Package two days complete coverage poster",
  },
];

type PackageCard = (typeof packages)[number];

export default function Portfolio() {
  const [selectedPackage, setSelectedPackage] = useState<PackageCard | null>(null);
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

    if (sessionInput) {
      sessionInput.value = packageName;
      sessionInput.dispatchEvent(new Event("input", { bubbles: true }));
      sessionInput.dispatchEvent(new Event("change", { bubbles: true }));
    }

    contactSection?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.setTimeout(() => sessionInput?.focus({ preventScroll: true }), reduceMotion ? 0 : 650);
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
              Choose the perfect coverage for your celebration.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {packages.map((packageItem, index) => (
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
                      aria-label={`Open ${packageItem.title} in full screen`}
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
            className="fixed inset-0 z-[100] grid place-items-center bg-black/92 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPackage.title} full poster`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedPackage(null);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedPackage(null)}
              className="absolute right-4 top-4 z-10 min-h-11 border border-[#d6b467]/50 bg-black/75 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#d6b467] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b467] sm:right-6 sm:top-6"
              aria-label="Close package poster"
              autoFocus
            >
              Close
            </button>

            <motion.div
              className="relative h-[86vh] w-full max-w-5xl"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Image
                src={selectedPackage.src}
                alt={selectedPackage.alt}
                fill
                sizes="100vw"
                className="object-contain drop-shadow-[0_24px_90px_rgba(214,180,103,0.18)]"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
