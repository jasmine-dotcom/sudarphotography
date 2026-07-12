 "use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-black py-24 sm:py-32"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.42em] text-[#d6b467]">Contact</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Book a session with a cinematic eye.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60">
            Share the date, location, and mood of your story. Sudar Photography will shape the
            visual direction from there.
          </p>
        </div>

        <form className="premium-border grid gap-5 bg-white/[0.035] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/52">
              Name
              <input
                className="min-h-12 border border-white/12 bg-black/40 px-4 text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#d6b467]"
                type="text"
                name="name"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/52">
              Email
              <input
                className="min-h-12 border border-white/12 bg-black/40 px-4 text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#d6b467]"
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/52">
            Session Type
            <input
              className="min-h-12 border border-white/12 bg-black/40 px-4 text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#d6b467]"
              type="text"
              name="session"
              placeholder="Wedding, portrait, event, or film"
            />
          </label>
          <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/52">
            Message
            <textarea
              className="min-h-36 resize-none border border-white/12 bg-black/40 px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#d6b467]"
              name="message"
              placeholder="Tell us what you want to create"
            />
          </label>
          <button
            type="submit"
            className="min-h-12 border border-[#d6b467] bg-[#d6b467] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-all hover:bg-[#f2dc9b]"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </motion.section>
  );
}
