"use client";

import { profile } from "@/lib/data";
import { Reveal } from "@/components/shared/Reveal";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { Copy, Check, Phone, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(244,194,161,0.15), transparent 70%)",
        }}
      />

      <div className="container-x flex flex-col items-center gap-12 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Currently open to work
          </div>
        </Reveal>

        <BlurReveal
          as="h2"
          intensity="strong"
          className="max-w-4xl font-serif text-5xl leading-[1.05] text-foreground text-balance md:text-8xl"
        >
          Let’s build something together.
        </BlurReveal>

        <BlurReveal
          intensity="soft"
          className="max-w-xl text-lg leading-relaxed text-muted"
        >
          Freelance projects, full-time roles, or a quick chat about Flutter — my inbox is open.
        </BlurReveal>

        <Reveal delay={0.3}>
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-6 py-4 text-base font-medium text-accent transition-all hover:bg-accent/20 md:text-xl"
          >
            <Mail className="h-5 w-5" />
            {profile.email}
            <span className="ml-1 inline-flex h-5 w-5 items-center justify-center">
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
              )}
            </span>
          </button>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
