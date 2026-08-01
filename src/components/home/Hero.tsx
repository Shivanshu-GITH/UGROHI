import { Hammer, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" aria-hidden />
      <div className="glow -top-20 -left-32 size-[34rem] bg-build/30" aria-hidden />
      <div className="glow top-40 -right-32 size-[34rem] bg-grow/25" aria-hidden />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow rounded-full border border-line-strong bg-surface/60 px-4 py-1.5 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-grow opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-grow" />
              </span>
              Tech studio + Marketing studio, under one roof
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              We <span className="text-gradient-build">build</span> it.
              <br className="hidden sm:block" /> We <span className="text-gradient-grow">grow</span> it.
              <br /> One partner for both.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              Websites, ERP &amp; management systems, and AI automation — plus the
              marketing to fill them with customers. Whatever you need, start on the
              right track.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/build" variant="build" size="lg">
                <Hammer className="size-4.5" /> I need to build something
              </Button>
              <Button href="/grow" variant="grow" size="lg">
                <TrendingUp className="size-4.5" /> I need to grow something
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Trust strip */}
        <Reveal delay={0.26}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {site.trustPoints.map((point) => (
              <div key={point.label} className="bg-surface px-4 py-6 text-center">
                <div className="font-display text-2xl font-semibold text-ink">{point.value}</div>
                <div className="mt-1.5 text-xs leading-snug text-faint">{point.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
