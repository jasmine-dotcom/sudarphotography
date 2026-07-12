"use client";

import { motion } from "framer-motion";

const services = [
  "Wedding Photography",
  "Portrait Photography",
  "Event Photography",
  "Cinematic Videography",
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-black py-24 sm:py-32"
    >
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.42em] text-[#d6b467]">Services</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Premium coverage for stories that deserve presence.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="premium-border bg-white/[0.035] p-6 transition-colors hover:bg-[#d6b467]/10"
              >
                <span className="text-sm text-[#d6b467]">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold text-white">{service}</h3>
                <p className="mt-4 text-sm leading-7 text-white/56">
                  A polished visual direction, calm production flow, and refined final delivery.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
