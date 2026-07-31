import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { SiteImage } from "@/config/site";

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "header";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-gold/60" />
      {children}
    </p>
  );
}

/**
 * Placeholder editorial que se transforma automaticamente em <img>
 * quando `image.src` for preenchido em src/config/site.ts.
 */
export function EditorialImage({
  image,
  className,
  innerClassName,
}: {
  image: SiteImage;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-sm bg-secondary", className)}
      style={{ aspectRatio: image.ratio }}
    >
      {image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          loading={image.priority ? "eager" : "lazy"}
          fetchPriority={image.priority ? "high" : "auto"}
          decoding="async"
          className={cn(
            "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.045]",
            innerClassName,
          )}
        />
      ) : (
        <div
          className={cn(
            "nk-placeholder flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]",
            innerClassName,
          )}
        >
          <span className="border border-gold/45 px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-cream/75">
            {image.label}
          </span>
        </div>
      )}
      <span aria-hidden className="pointer-events-none absolute inset-3 border border-gold/20" />
    </div>
  );
}

export function WhatsAppLink({
  children,
  className,
  variant = "gold",
  href,
}: {
  children: ReactNode;
  className?: string;
  variant?: "gold" | "outline" | "ink" | "dark";
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-sm px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "gold" &&
          "bg-gold text-gold-foreground shadow-sm hover:bg-gold-light hover:shadow-lg hover:shadow-coffee/40",
        variant === "ink" && "bg-ink text-cream hover:shadow-lg",
        variant === "dark" &&
          "border border-gold/45 bg-coffee text-cream shadow-sm hover:border-gold hover:bg-chestnut hover:shadow-lg hover:shadow-coffee/40",
        variant === "outline" &&
          "border border-current text-current hover:border-gold hover:text-gold",
        className,
      )}
    >
      {children}
    </a>
  );
}