"use client";

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ElementType, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
};

export function ScrollHighlight({ text, className, as: Tag = "h2" }: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.15"],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });

  const words = text.split(" ").filter(Boolean);
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag ref={ref as never} className={cn(className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 0.85) / words.length;
        return (
          <PixelHighlightWord
            key={i}
            word={word}
            progress={smoothed}
            range={[start, end]}
          />
        );
      })}
    </MotionTag>
  );
}

// Pre-computed jitter pattern for a jagged, pixel-glitch edge
const EDGE_JITTER = [0, 3, -2, 4, -1, 3, -3, 4, -2, 2, -1, 3, 0, -3, 2, -1, 4, -2, 3, 0];

const Y_START = -20;
const Y_END = 120;

function buildPixelClip(progress: number): string {
  if (progress <= 0)
    return `polygon(0% ${Y_START}%, 0% ${Y_START}%, 0% ${Y_END}%, 0% ${Y_END}%)`;
  if (progress >= 100)
    return `polygon(0% ${Y_START}%, 100% ${Y_START}%, 100% ${Y_END}%, 0% ${Y_END}%)`;

  const rows = EDGE_JITTER.length - 1;
  const parts: string[] = [`0% ${Y_START}%`];
  for (let i = 0; i <= rows; i++) {
    const y = Y_START + (i / rows) * (Y_END - Y_START);
    const x = Math.max(0, Math.min(100, progress + EDGE_JITTER[i]));
    parts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  parts.push(`0% ${Y_END}%`);
  return `polygon(${parts.join(", ")})`;
}

function PixelHighlightWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const percent = useTransform(progress, range, [0, 100]);
  const clipPath = useTransform(percent, (p) => buildPixelClip(p));

  return (
    <>
      <span className="relative inline-block">
        {/* Base muted layer */}
        <span className="text-[#5A544E]">{word}</span>

        {/* Accent layer with pixelated jagged reveal */}
        <motion.span
          aria-hidden
          style={{ clipPath, WebkitClipPath: clipPath as unknown as string }}
          className="pointer-events-none absolute inset-0 text-accent"
        >
          {word}
        </motion.span>
      </span>
      <span className="inline-block">&nbsp;</span>
    </>
  );
}
