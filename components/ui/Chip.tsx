import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
};

export function Chip({ children, variant = "default", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variant === "default" &&
          "border border-border bg-surface text-foreground/80",
        variant === "accent" &&
          "border border-accent/40 bg-accent/10 text-accent",
        variant === "outline" && "border border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
