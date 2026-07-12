 "use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-[#080604] py-24 sm:py-32"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden premium-border bg-gradient-to-br from-[#1a120b] via-[#5b4930] to-black">
          <div className="absolute inset-8 border border-white/10" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs uppercase tracking-[0.34em] text-[#f2dc9b]">
              Sudar Photography
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">Cinematic. Poised. Personal.</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.42em] text-[#d6b467]">About</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A luxury photography experience built around emotion, light, and timeless detail.
          </h2>
          <p className="mt-7 text-base leading-8 text-white/64">
            Sudar Photography creates refined visual stories across weddings, portraits,
            private events, and cinematic films. Every session is shaped with a calm eye for
            direction, elegant composition, and honest moments that still feel alive years later.
          </p>
          <div className="mt-9 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
            {["10+", "250+", "4K"].map((stat, index) => (
              <div key={stat}>
                <p className="text-3xl font-semibold text-[#d6b467]">{stat}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/44">
                  {["Years", "Stories", "Films"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
