"use client";

import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,194,161,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 100%, rgba(244,194,161,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F1EC 1px, transparent 1px), linear-gradient(to bottom, #F5F1EC 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
        }}
      />

      <div className="container-x">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to opportunities · India
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground text-balance sm:text-7xl md:text-[8.5rem]"
            >
              {profile.name}.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-2xl font-semibold leading-snug text-foreground/95 text-balance md:text-3xl lg:text-4xl"
            >
              <span className="text-foreground">I Build Apps That Ship,</span>{" "}
              <span className="italic text-accent">Not Just Demos.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
            >
              {profile.subHeadline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(244,194,161,0.6)]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Download className="h-4 w-4" />
              View Resume
            </a>
            <div className="hidden items-center gap-2 text-sm text-muted sm:inline-flex">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div className="font-serif text-3xl text-accent md:text-4xl">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted md:flex">
        <span>Scroll</span>
        <div className="h-8 w-px animate-pulse-soft bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
