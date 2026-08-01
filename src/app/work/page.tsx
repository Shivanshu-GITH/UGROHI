import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { samples } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sample Builds",
  description:
    "Full products we've built end to end — a clinic management platform, a school website and CMS, a restaurant site and a salon portal. All four are live: click through them.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className="glow -top-24 left-1/3 size-[32rem] bg-grow/20" aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
              Sample builds
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Don&apos;t take our word for it. <span className="text-gradient">Click through it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              {site.name} is a new studio, so we&apos;d rather show you real software than a wall of
              logos. Every product below is built by us end to end and deployed — open any of them
              and use the real thing. The features listed are shipped, not slideware.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-6">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2">
            {samples.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <article className="card flex h-full flex-col p-7 transition-colors hover:border-line-strong">
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

                  <h2 className="mt-7 text-xl font-semibold sm:text-2xl">{s.name}</h2>
                  {s.demoBrand && <div className="mt-1 text-xs text-faint">{s.demoBrand}</div>}
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>

                  <div className="mt-7 text-xs font-semibold uppercase tracking-wider text-faint">
                    What&apos;s inside
                  </div>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-build" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 border-t border-line pt-5">
                    <div className="flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line px-2 py-0.5 text-[0.7rem] text-faint"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {s.demoUrl && (
                      <a
                        href={s.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-grow"
                      >
                        Open the live demo
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

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className="glow -top-10 left-1/3 size-72 bg-build/25" aria-hidden />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold sm:text-4xl">
                Want one of these in your name?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Every sample here is white-label — we re-skin it around your brand, or build
                something new from scratch. The first call is free.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Start your project
                </Button>
                <Button href={site.whatsapp} external variant="outline" size="lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
