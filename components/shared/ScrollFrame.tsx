"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type OuterTone = "coral" | "dark" | "cream";

type Props = {
  children: ReactNode;
  outer?: OuterTone;
};

const OUTER_BG: Record<OuterTone, string> = {
  coral: "bg-accent",
  dark: "bg-[#F5F1EC]",
  cream: "bg-[#0D0C0A]",
};

export function ScrollFrame({ children, outer = "dark" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [0.86, 1, 1, 0.86]
  );
  const radius = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [48, 0, 0, 48]
  );

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex min-h-[100svh] w-full items-center justify-center",
        OUTER_BG[outer]
      )}
    >
      <motion.div
        style={{
          scale,
          borderRadius: radius,
        }}
        className="relative flex min-h-[100svh] w-full origin-center flex-col overflow-hidden bg-background will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
