import {
  Globe,
  Database,
  Bot,
  Target,
  Share2,
  Rocket,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Factory,
  type LucideIcon,
} from "lucide-react";

/** Single source of truth for brand-level content. Change the name in one place. */
export const site = {
  name: "UGROHI",
  shortName: "UGROHI",
  domain: "ugrohi.com",
  tagline: "We build it. We grow it. One partner for both.",
  description:
    "Ugrohi is a two-in-one studio: a tech engine that builds websites, ERP and AI systems, and a growth engine that runs performance marketing and social media — under one roof.",
  email: "yougrowhigh@gmail.com",
  phone: "+91 88821 83479",
  whatsapp: "https://wa.me/918882183479",
  socials: {
    instagram: "https://instagram.com/ugrohi",
    linkedin: "https://www.linkedin.com/in/ugrohi-solutions-797762419",
    x: "https://x.com/",
    youtube: "https://youtube.com/",
  },
  /** How we work — no client counts, no invented numbers. */
  trustPoints: [
    { value: "2-in-1", label: "Build + Grow, one team" },
    { value: "Free", label: "First call & audit" },
    { value: "Fixed", label: "Quotes, not hourly surprises" },
    { value: "One", label: "Point of contact, start to finish" },
  ],
} as const;

export type Engine = "build" | "grow";

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  icon: LucideIcon;
  engine: Engine;
}

export const buildServices: ServiceItem[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Sites that turn visitors into enquiries.",
    blurb:
      "Fast, modern, mobile-first websites for any business — from a clean one-pager to a full e-commerce store.",
    icon: Globe,
    engine: "build",
  },
  {
    slug: "erp-management-systems",
    title: "ERP & Management Systems",
    short: "Run your whole operation from one dashboard.",
    blurb:
      "Custom ERP and management software built around your domain — schools, clinics, retail, manufacturing and more.",
    icon: Database,
    engine: "build",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Put repetitive work on autopilot, 24/7.",
    blurb:
      "WhatsApp bots, AI chat & calling agents, and automated workflows that save hours every day.",
    icon: Bot,
    engine: "build",
  },
];

export const growServices: ServiceItem[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Ads that bring customers, not just clicks.",
    blurb:
      "Google and Meta campaigns managed for ROI — we track every rupee from ad to enquiry to sale.",
    icon: Target,
    engine: "grow",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short: "A brand people remember, posted consistently.",
    blurb:
      "Content, design and community management that keep you visible and build trust, handled end-to-end.",
    icon: Share2,
    engine: "grow",
  },
  {
    slug: "growth-plans",
    title: "Growth Plans",
    short: "A monthly engine of marketing, handled.",
    blurb:
      "Performance marketing, social and creative bundled into one retainer with clear monthly reporting.",
    icon: Rocket,
    engine: "grow",
  },
];

export const allServices = [...buildServices, ...growServices];

export interface Industry {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    slug: "school-management-system",
    title: "School ERP",
    short: "Admissions, fees, attendance & parent comms.",
    icon: GraduationCap,
  },
  {
    slug: "clinic-management-system",
    title: "Clinic Management",
    short: "Appointments, records, billing & reminders.",
    icon: Stethoscope,
  },
  {
    slug: "retail-inventory-system",
    title: "Retail & Inventory",
    short: "POS, stock, GST billing & reports.",
    icon: ShoppingBag,
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing",
    short: "Production, inventory & order tracking.",
    icon: Factory,
  },
];

export interface PackagePlan {
  slug: string;
  name: string;
  best: string;
  includes: string[];
  featured?: boolean;
}

export const packages: PackagePlan[] = [
  {
    slug: "launch",
    name: "Launch",
    best: "Going live fast.",
    includes: ["Business website", "Basic automation", "Analytics setup", "1 month support"],
  },
  {
    slug: "launch-grow",
    name: "Launch + Grow",
    best: "New businesses that need customers now.",
    includes: [
      "Everything in Launch",
      "Performance marketing",
      "Social media management",
      "Monthly reporting",
    ],
    featured: true,
  },
  {
    slug: "operate",
    name: "Operate",
    best: "Streamlining operations.",
    includes: [
      "Custom ERP / management system",
      "AI & workflow automation",
      "Team onboarding",
      "Priority support",
    ],
  },
  {
    slug: "full-stack",
    name: "Full-Stack",
    best: "One team for everything.",
    includes: ["Build + run + grow", "Dedicated account lead", "Quarterly roadmap", "SLA support"],
  },
];

/* ---------------- Navigation ---------------- */
export interface NavLink {
  label: string;
  href: string;
  desc?: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  label: string;
  href: string;
  engine?: Engine;
  children: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Build",
    href: "/build",
    engine: "build",
    children: buildServices.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      desc: s.short,
      icon: s.icon,
    })),
  },
  {
    label: "Grow",
    href: "/grow",
    engine: "grow",
    children: growServices.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      desc: s.short,
      icon: s.icon,
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: industries.map((i) => ({
      label: i.title,
      href: `/solutions/${i.slug}`,
      desc: i.short,
      icon: i.icon,
    })),
  },
];

export const navLinks: NavLink[] = [
  { label: "Packages", href: "/packages" },
  { label: "Samples", href: "/work" },
  { label: "About", href: "/about" },
];
