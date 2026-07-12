"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";

const particles = [
  ["12%", "20%", 0.1],
  ["84%", "25%", 0.7],
  ["76%", "76%", 1.2],
  ["20%", "72%", 1.8],
  ["51%", "13%", 2.1],
  ["91%", "58%", 0.4],
] as const;

export default function CameraScene() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.45 });
  const rotateY = useTransform(smoothX, [-1, 1], [7, -7]);
  const rotateX = useTransform(smoothY, [-1, 1], [-5, 5]);
  const glowX = useTransform(smoothX, [-1, 1], [32, 68]);
  const glowY = useTransform(smoothY, [-1, 1], [32, 68]);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(242,220,155,.28), transparent 34%)`;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.28, ease: "easeOut" }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="camera-stage relative min-h-[360px] overflow-hidden border border-[#d6b467]/22 bg-[#0b0907]/80 p-5 shadow-2xl shadow-black/50 sm:min-h-[460px]"
      aria-label="Stylized 3D camera placeholder for future model"
    >
      <motion.div aria-hidden className="absolute inset-0" style={{ background: glow }} />
      <div className="absolute inset-5 border border-white/8" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2dc9b]/70 to-transparent" />
      <motion.div
        aria-hidden
        className="absolute -right-1/3 top-12 h-36 w-[150%] rotate-[-18deg] bg-gradient-to-r from-transparent via-[#f2dc9b]/12 to-transparent blur-xl"
        animate={reduceMotion ? undefined : { x: ["-10%", "8%", "-10%"], opacity: [0.16, 0.34, 0.16] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map(([left, top, delay]) => (
        <motion.span
          key={`${left}-${top}`}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full bg-[#f2dc9b]/70 shadow-[0_0_18px_rgba(242,220,155,.65)]"
          style={{ left, top }}
          animate={reduceMotion ? undefined : { y: [0, -18, 0], opacity: [0.22, 0.9, 0.22], scale: [0.85, 1.2, 0.85] }}
          transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 flex h-full min-h-[320px] items-center justify-center sm:min-h-[420px]" style={{ perspective: "1000px" }}>
        <motion.div
          className="relative h-[210px] w-[300px] max-w-[82vw] sm:h-[250px] sm:w-[380px]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={reduceMotion ? undefined : { y: [0, -14, 0], rotateZ: [-0.7, 0.7, -0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-[14%] top-[18%] h-[64%] w-[72%] rounded-[18px] border border-[#d6b467]/28 bg-[linear-gradient(135deg,#25211c,#0d0b09_48%,#030303)] shadow-[0_24px_70px_rgba(0,0,0,.7),inset_0_1px_0_rgba(255,255,255,.16)]" />
          <div className="absolute left-[23%] top-[9%] h-[24%] w-[34%] rounded-t-[16px] border border-[#d6b467]/20 bg-[linear-gradient(180deg,#2a251e,#080706)]" />
          <div className="absolute right-[21%] top-[7%] h-[12%] w-[18%] rounded-t-[12px] border border-white/10 bg-[linear-gradient(180deg,#27221b,#090807)]" />
          <div className="absolute left-[19%] top-[13%] h-4 w-12 rounded-full bg-[#d6b467]/18 shadow-[0_0_20px_rgba(214,180,103,.2)]" />
          <div className="absolute right-[25%] top-[12%] h-4 w-4 rounded-full border border-[#f2dc9b]/35 bg-black shadow-[0_0_16px_rgba(242,220,155,.25)]" />
          <div className="absolute left-[18%] top-[31%] h-[24%] w-[12%] rounded-lg bg-black/50" />
          <div className="absolute inset-x-[18%] top-[22%] h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[154px] w-[154px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6b467]/40 bg-[radial-gradient(circle_at_35%_28%,#46515b,#11161c_28%,#030304_64%,#000)] shadow-[0_0_0_12px_rgba(10,10,10,.96),0_0_0_24px_rgba(214,180,103,.12),0_28px_70px_rgba(0,0,0,.75),0_0_80px_rgba(214,180,103,.14)] sm:h-[184px] sm:w-[184px]"
            animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-[#d6b467]/24" />
            <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.46),rgba(70,86,104,.18)_22%,rgba(0,0,0,.86)_62%)]" />
            <div className="absolute left-[26%] top-[18%] h-10 w-16 -rotate-35 rounded-full bg-white/20 blur-sm" />
            <div className="absolute bottom-[21%] right-[24%] h-4 w-8 -rotate-12 rounded-full bg-[#f2dc9b]/18 blur-[2px]" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between text-xs uppercase tracking-[0.24em] text-white/42">
        <span>CSS camera scene</span>
        <span>GLB-ready space</span>
      </div>
    </motion.div>
  );
}
