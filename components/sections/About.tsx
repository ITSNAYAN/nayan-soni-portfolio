import Image from "next/image";
import { about, profile } from "@/lib/data";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlurReveal } from "@/components/ui/BlurReveal";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-[1.05fr_1fr] md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface md:aspect-[3/4]">
            <Image
              src="/nayan-portrait.jpeg"
              alt={`${profile.name} — ${profile.role}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-8">
          <SectionHeading
            eyebrow="About"
            title="Building apps people actually use."
          />
          <div className="flex flex-col gap-5 text-[15px] leading-[1.65] text-foreground/85 md:text-base">
            {about.map((p, i) => (
              <BlurReveal key={i} intensity="soft">
                {p.replace(/\n/g, " ")}
              </BlurReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
