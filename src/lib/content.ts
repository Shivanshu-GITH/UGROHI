import { Handshake, Gauge, FileText, type LucideIcon } from "lucide-react";
import { type Engine } from "./site";

/** Reasons to choose a build + grow studio in one. */
export const whyBoth: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "No handoffs",
    body: "Your website, data and ads live with one team — no blaming the “other agency” when something breaks.",
    icon: Handshake,
  },
  {
    title: "Built to convert, grown to scale",
    body: "We design the system and drive the traffic that fills it. The two are planned together, not in silos.",
    icon: Gauge,
  },
  {
    title: "One invoice, one roadmap",
    body: "Tech and marketing under a single plan, a single point of contact, and a single monthly report.",
    icon: FileText,
  },
];

export const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Free call & audit",
    body: "We listen to what you need and audit your current setup — no jargon, no obligation.",
  },
  {
    step: "02",
    title: "Plan & quote",
    body: "You get a clear scope, timeline and fixed quote. You know exactly what you’re paying for.",
  },
  {
    step: "03",
    title: "Build / launch",
    body: "We design, build and ship — keeping you in the loop at every milestone.",
  },
  {
    step: "04",
    title: "Grow & support",
    body: "We run the marketing, watch the numbers, and keep improving month after month.",
  },
];

/**
 * Sample builds — products we've built end to end to show what we ship.
 * Each one is deployed and clickable; some carry a demo brand of our own.
 */
export interface SampleProject {
  slug: string;
  name: string;
  domain: string;
  tagline: string;
  summary: string;
  /** Concrete, shipped capabilities. The first four show on the homepage cards. */
  features: string[];
  stack: string[];
  engines: Engine[];
  /** Public demo, when there is one to show. */
  demoUrl?: string;
  demoBrand?: string;
}

export const samples: SampleProject[] = [
  {
    slug: "clinic-platform",
    name: "Clinic Website + Management System",
    domain: "Healthcare",
    tagline: "Live demo",
    demoUrl: "https://clinicwebsite.duckdns.org",
    demoBrand: "Sanjeevani Homeopathy (demo brand)",
    summary:
      "One platform, three surfaces: a public clinic website, a patient portal, and the admin system the clinic actually runs on. White-label — branding, services and modules are config, not code.",
    features: [
      "Online booking that lands straight in the clinic calendar",
      "Patient records & EMR — encounters, clinical notes, history, follow-ups",
      "Prescriptions with remedy master, repertory rubrics and potency selection",
      "Billing — itemised invoices, GST, part-payments, receipts and dues",
      "Pharmacy & inventory: stock batches with expiry, suppliers, purchase orders",
      "Patient portal — appointments, invoices, records and profile, self-service",
      "Website editable from the admin: services, doctors, blog, FAQs, photos",
      "Leads inbox from the contact form, plus revenue and appointment reports",
      "Role-based staff accounts, self-hosted auth, full audit log",
    ],
    stack: ["Next.js 15", "React 19", "Prisma", "PostgreSQL", "Tailwind CSS"],
    engines: ["build"],
  },
  {
    slug: "school-platform",
    name: "School Website + Admin CMS",
    domain: "Education",
    tagline: "Live demo",
    demoUrl: "https://school-website-iota-livid.vercel.app",
    summary:
      "A CBSE/ICSE school site where the office edits every detail itself — branding, pages, media — plus the admissions and fee surfaces that actually bring in enquiries.",
    features: [
      "Admin CMS with 30 sections — every page, font and image editable, no code",
      "Online admissions: application intake, document upload, applicant tracking",
      "Online fee payment via Razorpay with automatic receipts",
      "Enquiry CRM and TC verification for parents",
      "Multi-tenant mode — many schools, one deployment, a database each",
      "Full white-label: branding and content configured per school",
    ],
    stack: ["React", "Node.js", "MongoDB", "Razorpay"],
    engines: ["build"],
  },
  {
    slug: "restaurant-site",
    name: "Restaurant Website",
    domain: "Hospitality",
    tagline: "Live demo",
    demoUrl: "https://restaurant-nu-liart.vercel.app",
    demoBrand: "Dastaan (demo brand)",
    summary:
      "An editorial, motion-led site for modern Indian dining — built to be re-skinned per restaurant and handed over as a finished product.",
    features: [
      "Menu with veg / non-veg / egg marks, spice levels, Jain flags and ₹ pricing",
      "Commission-free in-site booking, plus EazyDiner and Zomato routes",
      "Optional CMS so the restaurant updates menu, hours, gallery and journal",
      "GSAP scroll motion and smooth-scroll throughout",
      "Schema.org, sitemap and OpenGraph SEO out of the box",
      "Security headers, DPDP/GDPR cookie consent and consent-gated analytics",
    ],
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "GSAP", "Sanity"],
    engines: ["build", "grow"],
  },
  {
    slug: "salon-site",
    name: "Salon Website + Owner Portal",
    domain: "Local services",
    tagline: "Live demo",
    demoUrl: "https://archimakeovers.duckdns.org",
    summary:
      "A premium site for a unisex salon and academy, with an admin portal built so the owner can change every word and photo herself — no developer needed.",
    features: [
      "Service menu grouped by category, plus signature packages",
      "Photo albums with filters and a fullscreen lightbox",
      "Call / WhatsApp / Instagram cards, opening hours and map",
      "Owner's portal at /admin — edit every page on the site",
      "Testimonials, team and academy sections, all self-managed",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    engines: ["build", "grow"],
  },
];

export const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "n8n",
  "OpenAI",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Vercel",
  "Meta Ads",
  "Google Ads",
  "WhatsApp API",
  "Tailwind CSS",
  "Stripe",
  "Razorpay",
];
