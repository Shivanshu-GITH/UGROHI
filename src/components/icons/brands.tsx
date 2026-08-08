import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={cn("size-4", className)} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.2 9h3.6v12H3.2zM9 9h3.45v1.64h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.33 2.4 4.33 5.53V21h-3.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-3.5", className)} aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.78l-5.3-6.93L4.34 22H1.08l8.02-9.17L1.5 2h6.95l4.79 6.34zM17.1 20.07h1.8L7.02 3.83H5.1z" />
    </svg>
  );
}

export function ThreadsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)} aria-hidden>
      <path d="M16.94 10.98c-.1-.05-.2-.1-.3-.14-.18-2.85-1.72-4.49-4.3-4.5-1.4-.01-2.63.51-3.4 1.7l1.36.93c.53-.8 1.28-1.03 2.03-1.03 1.44.01 2.15.75 2.32 2.24-.6-.1-1.26-.13-1.96-.1-1.97.09-3.24 1.24-3.15 2.9.08 1.44 1.4 2.5 3.28 2.4 1.34-.07 2.29-.65 2.9-1.6.4.5.6 1.14.6 1.94 0 2.4-2.05 3.5-4.4 3.51-2.6.02-4.9-1.75-4.94-5.53l-.01-.7c.04-3.78 2.34-5.55 4.94-5.53.87.01 1.63.19 2.28.51l.9-1.55c-.9-.46-1.98-.72-3.2-.73C6.68 5.71 3.4 8.4 3.35 12.7l.01.6C3.4 17.6 6.68 20.29 12 20.31c3.5-.02 6.2-1.9 6.2-5.36 0-1.36-.44-2.44-1.26-3.24-.35-.35-.75-.6-.6-.73zM12.02 14.9c-1.02.05-1.62-.4-1.66-1.05-.05-.72.55-1.24 1.5-1.28.34-.02.68 0 1.05.06.15.02.3.06.44.1-.16 1.55-.86 2.1-1.33 2.17z" />
    </svg>
  );
}
