"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  words: string[];
};

export function ScrollMarquee({ words }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 26,
    mass: 0.8,
  });

  const x = useTransform(smoothed, [0, 1], ["3%", "-12%"]);

  const doubled = [...words, ...words];

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden border-y border-border py-6 md:py-8"
    >
      <motion.div
        style={{ x }}
        className="flex w-max shrink-0 items-center gap-10 whitespace-nowrap md:gap-16"
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-serif text-3xl font-bold uppercase tracking-tight text-foreground md:gap-16 md:text-6xl lg:text-7xl"
          >
            {word}
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
