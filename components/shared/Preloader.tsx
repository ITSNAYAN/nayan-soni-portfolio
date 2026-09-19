"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = [
  "Flutter-Driven",
  "Mobile",
  "Developer",
  "Between",
  "Design",
  "&",
  "Code",
];

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________ABCDEFGH0123456789";

function randomChar() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    const glitchId = setInterval(() => setTick((t) => t + 1), 90);
    const exitId = setTimeout(() => setVisible(false), 5000);

    return () => {
      clearInterval(glitchId);
      clearTimeout(exitId);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center bg-background"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F5F1EC 1px, transparent 1px), linear-gradient(to bottom, #F5F1EC 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(244,194,161,0.10), transparent 70%)",
            }}
          />

          <div className="container-x relative flex w-full flex-wrap items-center justify-between gap-y-4 text-lg font-medium tracking-tight text-foreground/95 md:text-2xl lg:text-[1.75rem]">
            {WORDS.map((word, wi) => (
              <PreloaderWord key={wi} word={word} index={wi} tick={tick} />
            ))}

            <PreloaderMark />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PreloaderWord({
  word,
  index,
  tick,
}: {
  word: string;
  index: number;
  tick: number;
}) {
  const seed = (tick + index * 7) % 20;
  const glitchOn = seed < 3;
  const start = glitchOn ? (tick * 3 + index) % Math.max(1, word.length - 1) : -1;
  const len = glitchOn ? 1 + ((tick + index) % 2) : 0;

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.05 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="whitespace-nowrap"
    >
      {word.split("").map((ch, ci) => {
        const isGlitch = ci >= start && ci < start + len;
        return (
          <span
            key={ci}
            className={
              isGlitch
                ? "inline-block bg-accent px-[1px] text-background"
                : "inline-block"
            }
          >
            {isGlitch ? randomChar() : ch}
          </span>
        );
      })}
    </motion.span>
  );
}

function PreloaderMark() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      aria-hidden
      className="ml-2 hidden items-center gap-1 md:flex"
    >
      {[[1, 1], [0, 1], [1, 0], [1, 1], [0, 1], [1, 1]].map(([a, b], i) => (
        <span key={i} className="flex flex-col gap-1">
          <span
            className={
              a
                ? "h-1.5 w-3 rounded-full bg-foreground/80"
                : "h-1.5 w-3 rounded-full bg-foreground/15"
            }
          />
          <span
            className={
              b
                ? "h-1.5 w-3 rounded-full bg-foreground/80"
                : "h-1.5 w-3 rounded-full bg-foreground/15"
            }
          />
        </span>
      ))}
    </motion.div>
  );
}
