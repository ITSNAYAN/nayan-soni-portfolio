import { cn } from "@/lib/utils";
import { BlurReveal } from "./BlurReveal";
import { ScrollHighlight } from "./ScrollHighlight";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" />
        {eyebrow}
      </div>
      <ScrollHighlight
        text={title}
        className="max-w-3xl font-serif text-3xl leading-[1.05] text-balance md:text-5xl"
      />
      {description && (
        <BlurReveal
          intensity="soft"
          className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {description}
        </BlurReveal>
      )}
    </div>
  );
}
