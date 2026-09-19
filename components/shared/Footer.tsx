import { profile } from "@/lib/data";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg italic text-accent">
            {profile.initials}
          </span>
          <span>
            © {new Date().getFullYear()} {profile.name}. Crafted with Next.js
            &amp; Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
