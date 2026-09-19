import { experience } from "@/lib/data";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-x flex flex-col gap-16">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve built and shipped."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[9px] top-2 hidden h-full w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:block"
          />

          <div className="flex flex-col gap-16">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="relative grid gap-8 md:grid-cols-[220px_1fr] md:gap-12">
                  <div className="flex flex-col gap-2 md:pl-8">
                    <div
                      aria-hidden
                      className="absolute left-0 top-1.5 hidden h-5 w-5 -translate-x-[7px] items-center justify-center rounded-full border border-accent/50 bg-background md:flex"
                    >
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-accent">
                      {job.period}
                    </div>
                    <div className="font-serif text-2xl leading-tight text-foreground">
                      {job.company}
                    </div>
                    <div className="text-sm text-muted">{job.role}</div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <p className="text-sm italic leading-relaxed text-muted">
                      {job.summary}
                    </p>

                    {job.projects.map((p) => (
                      <div key={p.name} className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-lg font-medium text-foreground">
                            {p.name}
                          </h4>
                          {p.stores?.play && (
                            <a
                              href={p.stores.play}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
                            >
                              Play Store
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )}
                          {p.stores?.app && (
                            <a
                              href={p.stores.app}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
                            >
                              App Store
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
                          {p.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-3">
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
