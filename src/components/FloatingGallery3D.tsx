
"use client";

import Image from "next/image";
import { MotionValue, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

type Photo = { file: string; alt: string; x: number; y: number; z: number; rx: number; ry: number; rz: number; enterX: number; enterY: number; depth: number; size: number };

const photos: Photo[] = [
  { file: "couple-1.jpg", alt: "Wedding couple in warm cinematic light", x: -112, y: -124, z: 150, rx: 1, ry: -4, rz: 1, enterX: 0, enterY: 90, depth: 1.35, size: 224 },
  { file: "wedding-1.jpg", alt: "Bride and groom wedding portrait", x: -224, y: -156, z: 74, rx: 3, ry: -9, rz: -5, enterX: -110, enterY: 20, depth: 1.08, size: 178 },
  { file: "portrait-1.jpg", alt: "Bride portrait with soft editorial lighting", x: 38, y: -154, z: 52, rx: -3, ry: 8, rz: 5, enterX: 110, enterY: -20, depth: 0.88, size: 168 },
  { file: "outdoor-1.jpg", alt: "Outdoor couple photography session", x: 86, y: -38, z: 4, rx: 4, ry: -10, rz: -7, enterX: 120, enterY: 80, depth: 0.76, size: 146 },
  { file: "event-1.jpg", alt: "Reception event photography", x: -230, y: -40, z: -8, rx: -4, ry: 10, rz: 7, enterX: -120, enterY: 80, depth: 0.72, size: 136 },
  { file: "wedding-2.jpg", alt: "Cinematic venue wedding frame", x: -91, y: -194, z: -42, rx: 5, ry: 4, rz: 8, enterX: -20, enterY: -120, depth: 0.58, size: 130 },
  { file: "portrait-2.jpg", alt: "Groom portrait in moody light", x: 118, y: -78, z: -54, rx: -5, ry: -12, rz: 9, enterX: 120, enterY: 0, depth: 0.52, size: 128 },
  { file: "detail-1.jpg", alt: "Wedding detail close up", x: -247, y: -70, z: -62, rx: 5, ry: 12, rz: -9, enterX: -120, enterY: 0, depth: 0.5, size: 122 },
];

function PhotoCard({ photo, index, pointerX, pointerY, reduced }: { photo: Photo; index: number; pointerX: MotionValue<number>; pointerY: MotionValue<number>; reduced: boolean }) {
  const px = useTransform(pointerX, [-1, 1], [-16 * photo.depth, 16 * photo.depth]);
  const py = useTransform(pointerY, [-1, 1], [-9 * photo.depth, 9 * photo.depth]);
  const x = useTransform(px, (value) => photo.x + value);
  const y = useTransform(py, (value) => photo.y + value);
  const hideOnMobile = index > 3;

  return (
    <motion.figure
      role="img"
      aria-label={photo.alt}
      initial={{ opacity: 0, scale: 0.82, rotateZ: photo.rz * 1.4 }}
      animate={reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, rotateZ: [photo.rz, photo.rz + 1.2, photo.rz] }}
      transition={{ duration: reduced ? 0.01 : 6.8 + index * 0.28, delay: 0.12 + index * 0.13, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
      className={hideOnMobile ? "absolute left-1/2 top-1/2 hidden aspect-[4/5] overflow-hidden rounded-[18px] border border-[#d6b467]/30 bg-white shadow-[0_26px_60px_rgba(0,0,0,.30),0_0_22px_rgba(214,180,103,.16)] sm:block" : "absolute left-1/2 top-1/2 aspect-[4/5] overflow-hidden rounded-[18px] border border-[#d6b467]/30 bg-white shadow-[0_26px_60px_rgba(0,0,0,.30),0_0_22px_rgba(214,180,103,.16)]"}
      style={{ x, y, z: photo.z, rotateX: photo.rx, rotateY: photo.ry, rotateZ: photo.rz, width: photo.size, transformStyle: "preserve-3d" }}
    >
      <Image src={`/images/${photo.file}`} alt={photo.alt} fill sizes="(max-width: 640px) 42vw, 224px" className="object-cover" priority={index < 3} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(0,0,0,.14)),radial-gradient(circle_at_30%_18%,rgba(255,255,255,.18),transparent_25%)]" />
      <div className="absolute inset-[7px] rounded-[13px] border border-white/24" />
    </motion.figure>
  );
}

export default function FloatingGallery3D() {
  const reduced = Boolean(useReducedMotion());
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 26, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 26, mass: 0.5 });
  const rotateY = useTransform(smoothX, [-1, 1], [7, -7]);
  const rotateX = useTransform(smoothY, [-1, 1], [-4, 4]);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="relative min-h-[280px] overflow-hidden border border-[#d6b467]/16 bg-[#130d08]/45 shadow-2xl shadow-black/40 sm:min-h-[500px]"
      aria-label="Floating cinematic photography gallery"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(242,220,155,.22),transparent_46%),linear-gradient(180deg,rgba(255,255,255,.03),rgba(0,0,0,.20))]" />
      <div className="noise-layer absolute inset-0 opacity-16" />
      <motion.div
        className="relative z-10 mx-auto h-[280px] w-full max-w-[620px] sm:h-[500px]"
        style={{ perspective: "1200px", rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {photos.map((photo, index) => (
          <PhotoCard key={photo.file} photo={photo} index={index} pointerX={smoothX} pointerY={smoothY} reduced={reduced} />
        ))}
      </motion.div>
    </motion.div>
  );
}







