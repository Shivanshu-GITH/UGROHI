import type { Metadata } from "next";
import { Target, MessagesSquare, ShieldCheck, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ugrohi is one team with two specialties — a tech studio and a marketing studio — so you get build and growth without the hand-offs.",
};

const values = [
  { title: "Outcomes over output", body: "We measure success by enquiries, sales and time saved — not hours billed.", icon: Target },
  { title: "Plain language", body: "No jargon, no smoke. We explain things clearly and tell you the truth.", icon: MessagesSquare },
  { title: "Built to last", body: "Clean code and solid systems you can grow on — not throwaway work.", icon: ShieldCheck },
  { title: "We answer the phone", body: "Real people, real support. You're never left waiting after launch.", icon: PhoneCall },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
        <div className="glow -top-24 left-1/4 size-[30rem] bg-build/20" aria-hidden />
        <div className="glow top-10 right-1/4 size-[30rem] bg-grow/20" aria-hidden />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
              About {site.name}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              One team. Two specialties. <span className="text-gradient">Zero hand-offs.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Most businesses are forced to hire two agencies — one to build their tech, another to do
              their marketing — and then watch them blame each other when things go wrong. We fixed that
              by putting both under one roof.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Why we built a two-in-one studio"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4 text-muted">
              <p>
                We kept seeing the same problem: a business pays one company to build a beautiful website
                or system, and another to bring in customers. The two never talk. The website isn&apos;t
                built to convert, the ads point at pages no one optimised, and the owner is stuck in the
                middle.
              </p>
              <p>
                So we built {site.name} as two studios under one roof — a <span className="text-build">Build</span> engine
                for websites, ERP and automation, and a <span className="text-grow">Grow</span> engine for performance
                marketing and social. Same team, same roadmap, one point of contact.
              </p>
              <p>
                The result is simple: we build the system <em>and</em> drive the demand that fills it — and
                nothing falls through the cracks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Where we are right now */}
      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface px-6 py-10 sm:px-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
                <div>
                  <span className="eyebrow">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-build to-grow" />
                    Where we are right now
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    A new studio, with the work to prove it.
                  </h2>
                  <p className="mt-4 text-muted">
                    We won&apos;t quote client counts we haven&apos;t earned. Instead we built full
                    products of our own — a clinic platform, a school website and CMS, a restaurant
                    site and a salon portal — so you can judge the work directly. All four are
                    live, and you can click through every screen.
                  </p>
                  <div className="mt-7">
                    <Button href="/work" variant="outline" withArrow>
                      See the sample builds
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                  {site.trustPoints.map((point) => (
                    <div key={point.label} className="bg-surface px-5 py-7 text-center">
                      <div className="font-display text-2xl font-semibold text-ink">
                        {point.value}
                      </div>
                      <div className="mt-1.5 text-xs leading-snug text-faint">{point.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section border-t border-line bg-surface/40">
        <div className="container-page">
          <SectionHeading eyebrow="What we value" title="How we work with you" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.06}>
                  <div className="card h-full p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-build/15 to-grow/15 text-ink">
                      <Icon className="size-5.5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface px-6 py-14 text-center sm:px-12">
              <div className="glow -top-10 left-1/3 size-72 bg-grow/25" aria-hidden />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold sm:text-4xl">
                Let&apos;s build and grow something together.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Tell us what you need — we&apos;ll tell you exactly how we&apos;d approach it.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Book a Free Strategy Call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
