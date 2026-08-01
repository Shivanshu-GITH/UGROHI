import Link from "next/link";
import { Mail } from "lucide-react";
import { LogoMark } from "./Logo";
import { site, buildServices, growServices, industries } from "@/lib/site";
import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/icons/brands";

const socials = [
  { href: site.socials.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.socials.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: site.socials.x, label: "X", icon: XIcon },
  { href: site.socials.youtube, label: "YouTube", icon: YouTubeIcon },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-surface">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoMark className="size-8" />
              <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <Mail className="size-4" /> {site.email}
            </a>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Build"
            links={buildServices.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
          />
          <FooterCol
            title="Grow"
            links={growServices.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
          />
          <FooterCol
            title="Solutions"
            links={industries.map((i) => ({ label: i.title, href: `/solutions/${i.slug}` }))}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Samples", href: "/work" },
              { label: "Packages", href: "/packages" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Websites, ERP &amp; AI automation — plus the
            marketing to fill them.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
