"use client";

import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Plus } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Chip } from "./Chip";
import { PhoneMockup } from "./PhoneMockup";
import { GithubIcon } from "./BrandIcons";

type Props = {
  project: Project;
  index: number;
  onOpen: () => void;
  hidden?: boolean;
};

export function ProjectCard({ project, index, onOpen, hidden = false }: Props) {
  const reversed = index % 2 === 1;
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 30, mass: 0.4 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 30, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <motion.article
      layoutId={`project-${project.slug}`}
      ref={cardRef}
      onClick={onOpen}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? "none" : "auto" }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur-sm transition-colors hover:border-accent/40"
    >
      <div
        className={cn(
          "grid gap-8 p-6 md:grid-cols-[1.1fr_1fr] md:gap-10 md:p-10",
          reversed && "md:grid-cols-[1fr_1.1fr]"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-between gap-6",
            reversed && "md:order-2"
          )}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs text-muted">
              <Chip variant="outline">{project.category}</Chip>
              <span>·</span>
              <span>{project.company}</span>
            </div>

            <h3 className="font-serif text-2xl leading-tight text-foreground md:text-4xl">
              {project.name}
            </h3>

            <p className="text-lg italic text-accent/90">{project.tagline}</p>

            <p className="text-base leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2" onClick={stop}>
            {project.links.play && (
              <a
                href={project.links.play}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
              >
                Play Store
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
            {project.links.app && (
              <a
                href={project.links.app}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
              >
                App Store
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>

        <div className={cn("relative", reversed && "md:order-1")}>
          <PhoneMockup accentClass={project.accent} label={project.name} />
        </div>
      </div>

      {/* Cursor follower */}
      <motion.div
        aria-hidden
        style={{
          x: smoothX,
          y: smoothY,
          opacity: hovering ? 1 : 0,
          scale: hovering ? 1 : 0.6,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.25 } }}
        className="pointer-events-none absolute left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-widest text-background shadow-[0_10px_30px_-8px_rgba(244,194,161,0.55)]"
      >
        <span className="inline-flex items-center gap-1.5">
          View more
          <Plus className="h-3.5 w-3.5" />
        </span>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
