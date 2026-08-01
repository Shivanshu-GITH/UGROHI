import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { samples } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section className="relative section">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Sample builds"
            title="Products we've built to show what we ship."
            className="max-w-xl"
          />
          <Reveal>
            <Button href="/work" variant="outline" withArrow>
              See all samples
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.04}>
          <p className="mt-6 max-w-2xl text-muted">
            We&apos;re a new studio, so instead of borrowed logos we show our own work — four full
            products, built end to end and live right now. Open any of them and click around.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {samples.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article className="card group flex h-full flex-col overflow-hidden p-7 transition-colors hover:border-line-strong">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {s.domain}
                  </span>
                  {s.demoUrl && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-grow/30 bg-grow/10 px-3 py-1 text-xs font-medium text-grow">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-grow opacity-70" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-grow" />
                      </span>
                      {s.tagline}
                    </span>
                  )}
                  <div className="ml-auto flex gap-1.5">
                    {s.engines.map((e) => (
                      <span
                        key={e}
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider",
                          e === "build" ? "bg-build/12 text-build" : "bg-grow/12 text-grow",
                        )}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-semibold">{s.name}</h3>
                {s.demoBrand && <div className="mt-1 text-xs text-faint">{s.demoBrand}</div>}
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-build" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                  {s.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line px-2 py-0.5 text-[0.7rem] text-faint"
                    >
                      {t}
                    </span>
                  ))}
                  {s.demoUrl && (
                    <a
                      href={s.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-grow"
                    >
                      Open demo
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
