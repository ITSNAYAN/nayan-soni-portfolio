import { cn } from "@/lib/utils";

type Props = {
  accentClass: string;
  label: string;
};

export function PhoneMockup({ accentClass, label }: Props) {
  return (
    <div className="relative mx-auto flex h-[380px] w-full items-center justify-center md:h-[440px]">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-background via-surface to-background" />

      <div
        className={cn(
          "absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br opacity-70 blur-3xl",
          accentClass
        )}
      />

      <div className="relative h-[340px] w-[170px] rounded-[36px] border border-border bg-[#0e0d0c] p-2 shadow-2xl md:h-[400px] md:w-[200px]">
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#0a0908]">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br",
              accentClass
            )}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
            <div className="mt-6 flex w-full items-center justify-between px-1 text-[9px] font-medium tracking-wider text-foreground/70">
              <span>9:41</span>
              <span>●●●</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="h-10 w-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur" />
              <div className="font-serif text-sm text-foreground/95">
                {label}
              </div>
              <div className="h-1 w-8 rounded-full bg-foreground/20" />
            </div>

            <div className="mb-2 flex w-full flex-col gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
