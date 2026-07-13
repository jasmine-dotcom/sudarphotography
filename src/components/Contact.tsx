"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";

const businessPhone = "919597345529";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const session = String(formData.get("session") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const enquiry = [
      "Hi Sundar Photography, I would like to send an enquiry.",
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      session ? `Session Type: ${session}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${businessPhone}?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="border-y border-[#d6b467]/18 bg-black py-24 sm:py-32"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.74fr_1fr] lg:items-start lg:gap-0">
        <div className="lg:pr-16">
          <h2 className="max-w-xl text-4xl font-semibold leading-[1.16] text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.12]">
            Book a session with a cinematic eye.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/66 sm:text-lg">
            Share the date, location, and mood of your story. Sundar Photography will shape the
            visual direction from there.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 border border-[#d6b467]/18 bg-black/35 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:p-8 lg:border-y lg:border-r lg:border-l-[#d6b467]/24 lg:p-10"
        >
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
            className="min-h-14 border border-[#d6b467] bg-[#d6b467] px-7 text-sm font-semibold uppercase tracking-[0.34em] text-black transition-all hover:bg-[#f2dc9b]"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </motion.section>
  );
}
