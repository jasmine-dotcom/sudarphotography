"use client";

import { motion } from "framer-motion";

const categories = [
  { title: "Wedding", tone: "from-[#2a1810] via-[#9a7040] to-[#0b0704]" },
  { title: "Portrait", tone: "from-[#0b1115] via-[#5d6970] to-[#050607]" },
  { title: "Events", tone: "from-[#151014] via-[#6f5265] to-[#050305]" },
  { title: "Outdoor", tone: "from-[#08100d] via-[#586f4c] to-[#020503]" },
];

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-[#090705] py-24 sm:py-32"
    >
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-[#d6b467]">Portfolio</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Frames with atmosphere.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/58">
            Editorial-inspired placeholders ready for the first curated image collections.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden premium-border bg-black"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.tone} transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.24),transparent_24%),linear-gradient(180deg,transparent,rgba(0,0,0,0.86))]" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:bg-black/26 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f2dc9b]/78">
                  Collection
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{category.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
