"use client";

import { useState } from "react";
import { Hammer, TrendingUp, Sparkles, Send, Check } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Interest = "build" | "grow" | "both";
type Status = "idle" | "sending" | "sent" | "error";

const interests: { value: Interest; label: string; icon: typeof Hammer }[] = [
  { value: "build", label: "Build", icon: Hammer },
  { value: "grow", label: "Grow", icon: TrendingUp },
  { value: "both", label: "Both", icon: Sparkles },
];

const budgets = ["Not sure yet", "Under ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+"];

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-build/60 focus:ring-2 focus:ring-build/20";

export function ContactForm() {
  const [interest, setInterest] = useState<Interest>("both");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never see or fill this. If it's set, treat as a bot.
    if ((data.get("bot-field") as string)?.length) {
      setStatus("sent");
      return;
    }

    // Build a URL-encoded body from every named field (incl. form-name & interest).
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, value.toString()));

    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      setStatus("sent");
      form.reset();
      setInterest("both");
    } catch {
      setStatus("error");
    }
  }

  const mailto = `mailto:${site.email}`;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card p-6 sm:p-8"
    >
      {/* Netlify Forms plumbing */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      {/* Interest segmented control */}
      <fieldset>
        <legend className="text-sm font-medium text-ink">I&apos;m interested in…</legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {interests.map((opt) => {
            const Icon = opt.icon;
            const active = interest === opt.value;
            const activeClass =
              opt.value === "build"
                ? "border-build/60 bg-build/12 text-build"
                : opt.value === "grow"
                  ? "border-grow/60 bg-grow/12 text-grow"
                  : "border-ink/30 bg-surface-3 text-ink";
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setInterest(opt.value)}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all",
                  active ? activeClass : "border-line text-muted hover:text-ink",
                )}
                aria-pressed={active}
              >
                <Icon className="size-4" />
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Your name" required>
          <input name="name" required placeholder="Jane Sharma" className={inputClass} />
        </Field>
        <Field label="Business name">
          <input name="business" placeholder="Acme Pvt Ltd" className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp">
          <input name="phone" placeholder="+91 …" className={inputClass} />
        </Field>
        <Field label="Industry / domain">
          <input name="domain" placeholder="School, clinic, retail…" className={inputClass} />
        </Field>
        <Field label="Budget">
          <select name="budget" className={cn(inputClass, "appearance-none")} defaultValue={budgets[0]}>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-surface">
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="What do you need?" required>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us a bit about your project or goal…"
            className={cn(inputClass, "resize-none")}
          />
        </Field>
      </div>

      <input type="hidden" name="interest" value={interest} />

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink font-medium text-bg transition-colors hover:bg-white disabled:opacity-70"
      >
        {status === "sending" ? (
          "Sending…"
        ) : status === "sent" ? (
          <>
            <Check className="size-4" /> Enquiry sent
          </>
        ) : (
          <>
            Send enquiry <Send className="size-4" />
          </>
        )}
      </button>

      {status === "sent" && (
        <p className="mt-3 text-center text-xs text-faint">
          Thanks — we&apos;ve got your enquiry and will get back to you shortly. Prefer email?{" "}
          <a href={mailto} className="text-ink underline">
            {site.email}
          </a>
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-xs text-faint">
          Something went wrong sending your enquiry. Please email us directly at{" "}
          <a href={mailto} className="text-ink underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">
        {label} {required && <span className="text-grow">*</span>}
      </span>
      {children}
    </label>
  );
}
