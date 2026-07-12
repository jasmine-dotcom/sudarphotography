"use client";

import FloatingGallery3D from "@/components/FloatingGallery3D";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(620px circle at ${mouseX}px ${mouseY}px, rgba(214, 180, 103, 0.2), transparent 43%)`;

  return (
    <section
      id="home"
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className="relative flex min-h-screen overflow-hidden bg-black pt-20"
    >
      <motion.div aria-hidden className="absolute inset-0 z-0" style={{ background: glow }} />
      <div className="noise-layer absolute inset-0 z-0 opacity-35" />
      <motion.div
        aria-hidden
        className="absolute -left-1/4 top-20 z-0 h-44 w-[150%] rotate-[-16deg] bg-gradient-to-r from-transparent via-[#d6b467]/10 to-transparent blur-2xl"
        animate={reduceMotion ? undefined : { x: ["-8%", "8%", "-8%"], opacity: [0.16, 0.34, 0.16] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-1/2 z-0 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b467]/[0.045] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-56 bg-gradient-to-t from-[#090705] to-transparent" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-80px)] items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mb-6 text-xs uppercase tracking-[0.48em] text-[#d6b467]"
          >
            Luxury cinematic photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
            className="text-6xl font-black leading-[0.86] tracking-[0.02em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            SUDAR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
            className="mt-5 text-sm uppercase tracking-[0.62em] text-white/72 sm:text-base"
          >
            PHOTOGRAPHY
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.34, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-xl leading-8 text-white/82 sm:text-2xl"
          >
            Capturing Moments. Creating Timeless Stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.46, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="inline-flex min-h-12 items-center justify-center border border-[#d6b467] bg-[#d6b467] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-all hover:bg-[#f2dc9b] hover:shadow-[0_0_34px_rgba(214,180,103,0.28)] focus:outline-none focus:ring-2 focus:ring-[#f2dc9b] focus:ring-offset-2 focus:ring-offset-black"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-white/6 px-7 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:border-[#d6b467] hover:text-[#f2dc9b] focus:outline-none focus:ring-2 focus:ring-[#f2dc9b] focus:ring-offset-2 focus:ring-offset-black"
            >
              Book a Session
            </a>
          </motion.div>
        </div>

        <FloatingGallery3D />
      </div>
    </section>
  );
}


