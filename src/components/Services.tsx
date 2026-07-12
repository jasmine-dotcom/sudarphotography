"use client";

import Image from "next/image";
import { useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Wedding Photography",
    icon: "camera",
    image: "/images/wedding-2.jpg",
    badge: "Most Popular",
    details: [
      "Traditional & candid coverage",
      "Creative couple portraits",
      "Complete wedding-day storytelling",
    ],
  },
  {
    title: "Engagement & Pre-Wedding",
    icon: "ring",
    image: "/images/couple-1.jpg",
    details: ["Couple sessions", "Save-the-date concepts", "Outdoor cinematic photography"],
  },
  {
    title: "Cinematic Films & Drone",
    icon: "video",
    image: "/images/event-1.jpg",
    details: ["Wedding highlight films", "Drone aerial coverage", "Premium cinematic editing"],
  },
  {
    title: "Premium Deliverables",
    icon: "gift",
    image: "/images/detail-1.jpg",
    details: ["Luxury albums", "Photo frames", "Pen drives", "Personalized presentation"],
  },
];

type ServiceIcon = (typeof services)[number]["icon"];

function ServiceIconMark({ icon }: { icon: ServiceIcon }) {
  const paths: Record<ServiceIcon, ReactNode> = {
    camera: (
      <>
        <path d="M4.5 8.5h3l1.4-2h6.2l1.4 2h3a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V10a1.5 1.5 0 0 1 1.5-1.5Z" />
        <path d="M12 16.6a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z" />
      </>
    ),
    ring: (
      <>
        <path d="M9.2 7.2 12 4.5l2.8 2.7-1.6 2.1h-2.4L9.2 7.2Z" />
        <path d="M6.8 14a5.2 5.2 0 1 0 10.4 0 5.2 5.2 0 0 0-10.4 0Z" />
      </>
    ),
    video: (
      <>
        <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h8A1.5 1.5 0 0 1 15 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 15.5v-7Z" />
        <path d="m15 11 5-2.8v7.6L15 13v-2Z" />
      </>
    ),
    gift: (
      <>
        <path d="M4.5 10h15v9h-15v-9Z" />
        <path d="M3.5 7h17v3h-17V7Z" />
        <path d="M12 7v12" />
        <path d="M12 7c-2.9 0-4.2-3.2-1.8-3.6C11.4 3.2 12 4.5 12 7Z" />
        <path d="M12 7c2.9 0 4.2-3.2 1.8-3.6C12.6 3.2 12 4.5 12 7Z" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[icon]}
    </svg>
  );
}

export default function Services() {
  const [tilt, setTilt] = useState<{ index: number; rotateX: number; rotateY: number } | null>(null);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: PointerEvent<HTMLElement>, index: number) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTilt({
      index,
      rotateX: y * -4,
      rotateY: x * 5,
    });
  };

  const scrollToPackages = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d6b467]/10 blur-3xl sm:h-[34rem] sm:w-[34rem]"
        animate={reduceMotion ? undefined : { opacity: [0.14, 0.28, 0.14], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0_0.7px,transparent_0.8px)] [background-size:18px_18px]"
      />
      <div className="section-shell relative">
        <div className="mt-5 grid gap-12 min-[1100px]:grid-cols-[0.36fr_0.64fr] min-[1100px]:items-start">
          <div className="relative max-w-[460px] py-1 min-[1100px]:sticky min-[1100px]:top-[110px]">
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d6b467]/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.42em] text-[#d6b467]">Services</p>
              <span className="mt-5 block h-px w-24 bg-[#d6b467] shadow-[0_0_18px_rgba(214,180,103,0.38)]" />

              <h2 className="mt-8 max-w-[460px] text-[clamp(2.125rem,4.8vw,3.625rem)] font-semibold leading-[1.01] text-white">
                <span className="block">Every celebration</span>
                <span className="block">deserves a story</span>
                <span className="block">worth remembering.</span>
              </h2>
              <p className="mt-6 max-w-[430px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                From intimate engagements to grand weddings, we combine creativity, cinematic storytelling
                and premium editing to preserve every emotion with timeless quality.
              </p>
              <button
                type="button"
                onClick={scrollToPackages}
                className="mt-7 min-h-12 border border-[#d6b467] bg-[#d6b467] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#f2dc9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dc9b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View Packages
              </button>

              <div className="mt-8 grid max-w-[460px] grid-cols-3 border-y border-[#d6b467]/18 py-5">
                {[
                  ["500+", "Events Covered"],
                  ["8+", "Years Experience"],
                  ["100%", "Client Satisfaction"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`px-3 first:pl-0 last:pr-0 ${index > 0 ? "border-l border-[#d6b467]/24" : ""}`}
                  >
                    <p className="text-2xl font-semibold text-[#f2dc9b] sm:text-3xl">{value}</p>
                    <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/56">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                onPointerMove={(event) => handlePointerMove(event, index)}
                onPointerLeave={() => setTilt(null)}
                className="group relative min-h-[290px] rounded-lg [perspective:1000px]"
              >
                <button
                  type="button"
                  aria-label={`${service.title} service`}
                  className="relative block h-full min-h-[290px] w-full overflow-hidden rounded-lg border border-[#d6b467]/24 bg-white/[0.035] p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.34)] outline-none transition-[border-color,box-shadow,transform] duration-700 ease-out focus-visible:border-[#d6b467]/80 focus-visible:ring-2 focus-visible:ring-[#d6b467]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black group-hover:-translate-y-2 group-hover:border-[#d6b467]/70 group-hover:shadow-[0_28px_90px_rgba(214,180,103,0.18)]"
                  style={
                    tilt?.index === index
                      ? {
                          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-8px)`,
                        }
                      : undefined
                  }
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover opacity-38 brightness-[0.58] saturate-[0.9] transition-all duration-[1400ms] ease-out group-hover:scale-[1.075] group-hover:opacity-58 group-hover:brightness-[0.86] group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_24%,rgba(0,0,0,0.72)_100%)] transition-opacity duration-700 group-hover:opacity-78" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/78 via-black/58 to-[#100b05]/66 transition-opacity duration-700 group-hover:opacity-62" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(214,180,103,0.14),transparent_32%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-24 -translate-x-32 rotate-12 bg-gradient-to-r from-transparent via-[#f2dc9b]/18 to-transparent"
                    animate={reduceMotion ? undefined : { x: ["-35%", "540%"], opacity: [0, 0.58, 0] }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.55,
                      repeat: Infinity,
                      repeatDelay: 7,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-[#d6b467] shadow-[0_0_22px_rgba(214,180,103,0.72)] transition-transform duration-700 ease-out group-hover:scale-x-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid gap-3">
                        <span className="text-sm font-semibold tracking-[0.16em] text-[#d6b467]">
                          0{index + 1}
                        </span>
                        {service.badge ? (
                          <span className="w-fit border border-[#d6b467]/44 bg-[#d6b467]/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f2dc9b] shadow-[0_0_24px_rgba(214,180,103,0.12)]">
                            {service.badge}
                          </span>
                        ) : null}
                      </div>
                      <span
                        className="grid h-10 w-10 translate-x-0 place-items-center rounded-full border border-[#d6b467]/58 bg-[#d6b467]/12 text-xl leading-none text-[#d6b467] opacity-90 shadow-[0_0_22px_rgba(214,180,103,0.12)] transition-all duration-700 after:absolute after:h-10 after:w-10 after:rounded-full after:border after:border-[#d6b467]/24 after:content-[''] after:motion-safe:animate-ping group-hover:translate-x-1.5 group-hover:rotate-6 group-hover:bg-[#d6b467] group-hover:text-black group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(214,180,103,0.34)]"
                        aria-hidden="true"
                      >
                        <span className="transition-transform duration-500 group-hover:translate-x-0.5">-&gt;</span>
                      </span>
                    </div>

                    <div className="mt-10">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d6b467]/28 bg-black/30 text-[#d6b467] transition-colors duration-500 group-hover:border-[#d6b467]/60 group-hover:bg-[#d6b467]/12">
                          <ServiceIconMark icon={service.icon} />
                        </span>
                        <h3 className="min-w-0 origin-left text-xl font-semibold leading-snug text-white transition-transform duration-500 ease-out group-hover:scale-[1.025] sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>
                      <span className="mt-4 block h-px w-12 origin-left scale-x-50 bg-[#d6b467] transition-transform duration-700 ease-out group-hover:scale-x-150" />
                    </div>

                    <ul className="mt-6 grid gap-3.5">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detail}
                          className="flex translate-y-1 gap-3 text-sm leading-7 text-white/62 opacity-80 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:text-white/88 group-hover:opacity-100"
                          style={{ transitionDelay: `${detailIndex * 70}ms` }}
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b467] shadow-[0_0_12px_rgba(214,180,103,0.45)]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
