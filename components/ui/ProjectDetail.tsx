"use client";

import { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Chip } from "./Chip";
import { PhoneMockup } from "./PhoneMockup";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  onClose: () => void;
};

export function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-background/70 backdrop-blur-md"
      />

      <motion.article
        layoutId={`project-${project.slug}`}
        className="fixed inset-4 z-[100] flex flex-col overflow-hidden rounded-3xl border border-border bg-surface md:inset-6"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground/90 backdrop-blur transition-colors hover:border-accent/40 hover:text-accent md:left-8 md:top-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </motion.button>

        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="grid gap-10 p-6 pt-24 md:grid-cols-[1.15fr_1fr] md:gap-16 md:p-16 md:pt-28">
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex flex-wrap items-center gap-3 text-xs text-muted"
              >
                <Chip variant="outline">{project.category}</Chip>
                <span>·</span>
                <span>{project.company}</span>
                <span>·</span>
                <span>{project.year}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="font-serif text-4xl leading-tight text-foreground md:text-6xl"
              >
                {project.name}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="font-serif text-xl italic text-accent md:text-2xl"
              >
                {project.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-base leading-relaxed text-foreground/85 md:text-lg"
              >
                {project.longDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="flex flex-col gap-3"
              >
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Highlights
                </h3>
                <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/85 md:text-base">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col gap-3"
              >
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-background/50 p-5 text-sm md:max-w-md"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-muted">
                    Role
                  </span>
                  <span className="text-foreground/90">{project.role}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-muted">
                    Year
                  </span>
                  <span className="text-foreground/90">{project.year}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {project.links.play && (
                  <LinkPill href={project.links.play}>Play Store</LinkPill>
                )}
                {project.links.app && (
                  <LinkPill href={project.links.app}>App Store</LinkPill>
                )}
                {project.links.github && (
                  <LinkPill href={project.links.github}>
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </LinkPill>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="sticky top-8">
                <PhoneMockup accentClass={project.accent} label={project.name} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </>
  );
}

function LinkPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
      )}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
