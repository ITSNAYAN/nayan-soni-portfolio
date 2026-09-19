"use client";

import {
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { ProjectDetail } from "@/components/ui/ProjectDetail";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { cn } from "@/lib/utils";

const CARD_WIDTH = 300;

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const activeProject =
    projects.find((p) => p.slug === activeSlug) ?? null;

  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag / momentum state
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const dragMovedRef = useRef(0);
  const lastMoveRef = useRef({ x: 0, t: 0 });
  const velocityRef = useRef(0);
  const momentumRAF = useRef<number | null>(null);

  const cancelMomentum = () => {
    if (momentumRAF.current !== null) {
      cancelAnimationFrame(momentumRAF.current);
      momentumRAF.current = null;
    }
  };
  const startMomentum = () => {
    const el = scrollRef.current;
    if (!el) return;
    let v = velocityRef.current;
    const tick = () => {
      if (!el || Math.abs(v) < 0.5) {
        momentumRAF.current = null;
        return;
      }
      el.scrollLeft -= v;
      v *= 0.94;
      momentumRAF.current = requestAnimationFrame(tick);
    };
    momentumRAF.current = requestAnimationFrame(tick);
  };

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    cancelMomentum();
    const el = scrollRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    dragMovedRef.current = 0;
    dragStartRef.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    lastMoveRef.current = { x: e.clientX, t: performance.now() };
    velocityRef.current = 0;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };
  const onMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - dragStartRef.current.x;
    el.scrollLeft = dragStartRef.current.scrollLeft - dx * 1.4;
    dragMovedRef.current = Math.abs(dx);
    const now = performance.now();
    const dt = now - lastMoveRef.current.t;
    if (dt > 0) {
      const vx = ((e.clientX - lastMoveRef.current.x) / dt) * 16;
      velocityRef.current = vx * 1.4;
    }
    lastMoveRef.current = { x: e.clientX, t: now };
  };
  const endDrag = () => {
    if (!isDraggingRef.current) return;
    const el = scrollRef.current;
    isDraggingRef.current = false;
    if (el) {
      el.style.cursor = "grab";
      el.style.userSelect = "";
    }
    if (Math.abs(velocityRef.current) > 1) startMomentum();
  };

  useEffect(() => {
    const up = () => endDrag();
    window.addEventListener("mouseup", up);
    window.addEventListener("blur", up);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("blur", up);
      cancelMomentum();
    };
  }, []);

  return (
    <section id="projects" className="relative bg-background py-20 text-foreground md:py-24">
      {/* Title — left-aligned to the page edge, scroll-fill highlight */}
      <div className="mb-12 pl-6 md:mb-16 md:pl-16">
        <ScrollHighlight
          text="Recent projects."
          className="font-serif text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[7rem]"
        />
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          endDrag();
          setHoverKey(null);
        }}
        className="scrollbar-hide flex cursor-grab items-start gap-6 overflow-x-auto overflow-y-hidden pb-12 md:gap-8 md:pb-16"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="w-6 shrink-0 md:w-16" aria-hidden />

        {projects.map((p, i) => {
          const cardKey = p.slug;
          const dimmed = hoverKey !== null && hoverKey !== cardKey;
          return (
            <div
              key={cardKey}
              className="flex-shrink-0"
              onMouseEnter={() => {
                if (!isDraggingRef.current) setHoverKey(cardKey);
              }}
              onMouseLeave={() =>
                setHoverKey((prev) => (prev === cardKey ? null : prev))
              }
            >
              <GalleryCard
                project={p}
                index={i}
                onOpen={() => setActiveSlug(p.slug)}
                hidden={activeSlug === p.slug}
                dimmed={dimmed}
                wasDragging={() => dragMovedRef.current > 4}
              />
            </div>
          );
        })}

        <div className="w-6 shrink-0 md:w-16" aria-hidden />
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between px-6 text-[11px] uppercase tracking-[0.28em] text-muted md:px-16">
        <span>{String(projects.length).padStart(2, "0")} projects</span>
        <span>Drag ↔</span>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            key={activeProject.slug}
            project={activeProject}
            onClose={() => setActiveSlug(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({
  project,
  index,
  onOpen,
  hidden,
  dimmed,
  wasDragging,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
  hidden: boolean;
  dimmed: boolean;
  wasDragging: () => boolean;
}) {
  const onClick = () => {
    if (wasDragging()) return;
    onOpen();
  };

  return (
    <motion.button
      layoutId={`project-${project.slug}`}
      onClick={onClick}
      draggable={false}
      style={{
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        width: `${CARD_WIDTH}px`,
      }}
      className="group relative flex-shrink-0 text-left"
    >
      {/* Index — floats above the phone */}
      <div className="mb-4 flex items-baseline justify-between text-white/70">
        <span className="font-serif text-2xl italic text-accent md:text-3xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-right text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
          <span className="text-foreground/85">{project.company}</span>
          <span className="ml-2 text-muted">· {project.year}</span>
        </span>
      </div>

      {/* Phone mockup */}
      <div
        className={cn(
          "relative aspect-[9/19] w-full",
          "transition-all duration-500 ease-out",
          dimmed && "!opacity-30 !scale-[0.985]"
        )}
      >
        {project.fullMockup && project.imageUrl ? (
          /* Full pre-rendered mockup — just the image, no phone shell */
          <>
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              sizes="320px"
              className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
              draggable={false}
            />
            {/* Open pill on hover */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 flex items-center justify-center",
                "opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              )}
            >
              <span className="rounded-full bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-black shadow-lg">
                Open
              </span>
            </div>
          </>
        ) : (
        <>
        {/* Phone shell — bezel */}
        <div className="absolute inset-0 rounded-[38px] border border-[#1a1918] bg-[#0a0908] p-[3px] shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
          {/* Inner shine — subtle top highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[38px] bg-gradient-to-b from-white/[0.06] via-transparent to-black/40"
          />

          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-black">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                sizes="320px"
                className="scale-[1.08] object-cover object-center"
                draggable={false}
              />
            ) : (
              <>
                <div className={cn("absolute inset-0 bg-gradient-to-br", project.accent)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Placeholder name */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <span className="pointer-events-none font-serif text-2xl font-medium italic tracking-tight text-white/95 md:text-3xl">
                    {project.name}
                  </span>
                </div>
              </>
            )}

            {/* Dynamic island */}
            <div
              aria-hidden
              className="absolute left-1/2 top-2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black"
            />

            {/* Open pill on hover */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 flex items-center justify-center",
                "opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              )}
            >
              <span className="rounded-full bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-black shadow-lg">
                Open
              </span>
            </div>

            {/* Home indicator */}
            <div
              aria-hidden
              className="absolute bottom-[6px] left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/40"
            />
          </div>
        </div>
        </>
        )}
      </div>

      {/* Caption below card */}
      <div
        className={cn(
          "mt-4 flex flex-col gap-1 transition-opacity duration-500 ease-out",
          dimmed && "opacity-40"
        )}
      >
        <div className="text-sm font-medium text-foreground md:text-base">
          {project.name}
        </div>
        <div className="text-xs text-muted md:text-sm">
          {project.category} · {project.company}
        </div>
      </div>
    </motion.button>
  );
}
