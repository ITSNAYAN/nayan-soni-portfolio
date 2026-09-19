"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ElementType, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  intensity?: "soft" | "strong";
};

export function BlurReveal({
  children,
  className,
  as: Tag = "p",
  intensity = "soft",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.78"],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  const maxBlur = intensity === "strong" ? 18 : 10;
  const startOpacity = intensity === "strong" ? 0.05 : 0.2;

  const opacity = useTransform(smoothed, [0, 1], [startOpacity, 1]);
  const blurAmount = useTransform(smoothed, [0, 1], [maxBlur, 0]);
  const filter = useTransform(blurAmount, (v) => `blur(${v}px)`);
  const y = useTransform(smoothed, [0, 1], [12, 0]);

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref as never}
      style={{ opacity, filter, y }}
      className={cn("will-change-[filter,opacity,transform]", className)}
    >
      {children}
    </MotionTag>
  );
}
