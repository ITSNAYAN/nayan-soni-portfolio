import { stack } from "@/lib/data";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { ScrollMarquee } from "@/components/ui/ScrollMarquee";

const MARQUEE_WORDS = [
  "Flutter",
  "Dart",
  "BLoC",
  "Cubit",
  "GetX",
  "UI/UX",
  "Clean Architecture",
  "REST APIs",
  "WebSockets",
  "Firebase",
  "Stripe",
  "EaseBuzz",
  "Android",
  "iOS",
  "React.js",
  "Figma",
];

export function Stack() {
  return (
    <section id="stack" className="relative flex flex-1 flex-col py-24 md:py-32">
      <div className="container-x flex flex-1 flex-col gap-16">
        <SectionHeading
          eyebrow="Toolkit"
          title="The stack behind the ship it."
          description="A pragmatic mix of Flutter, native tooling, and web fundamentals — chosen for velocity and reliability."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/30">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-foreground">
                    {group.group}
                  </h3>
                  <span className="text-xs font-mono text-muted">
                    0{i + 1}
                  </span>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <ScrollMarquee words={MARQUEE_WORDS} />
      </div>
    </section>
  );
}
