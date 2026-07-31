import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";

type Category = "Loiros" | "Cores" | "Cortes" | "Visagismo";

/**
 * GALERIA: oito slots preparados. Ao enviar as imagens para o GitHub,
 * preencha `src` com o caminho do arquivo (ex.: "/images/transformacao-1.webp").
 */
type Slot = { id: number; category: Category; src: string | null; alt: string; wide?: boolean };

const slots: Slot[] = [
  { id: 1, category: "Loiros", src: null, alt: "Transformação 1 — trabalho de loiro personalizado", wide: true },
  { id: 2, category: "Cores", src: null, alt: "Transformação 2 — coloração personalizada" },
  { id: 3, category: "Cortes", src: null, alt: "Transformação 3 — corte personalizado" },
  { id: 4, category: "Visagismo", src: null, alt: "Transformação 4 — visagismo aplicado" },
  { id: 5, category: "Loiros", src: null, alt: "Transformação 5 — iluminação de fios" },
  { id: 6, category: "Cores", src: null, alt: "Transformação 6 — correção de cor", wide: true },
  { id: 7, category: "Cortes", src: null, alt: "Transformação 7 — corte com movimento" },
  { id: 8, category: "Visagismo", src: null, alt: "Transformação 8 — leitura de formas e tons" },
];

const filters = ["Todos", "Loiros", "Cores", "Cortes", "Visagismo"] as const;

export function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const reduced = useReducedMotion();

  const visible = slots.filter((s) => active === "Todos" || s.category === active);

  // LIGHTBOX: preparado para o futuro — ativar quando houver imagens reais.
  const lightboxEnabled = slots.some((s) => s.src);

  return (
    <section id="transformacoes" className="bg-white/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Transformações</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-[2.4rem]">
            Transformações que respeitam quem você é.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div role="tablist" aria-label="Filtrar transformações" className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={cn(
                  "min-h-11 rounded-sm border px-5 text-[0.7rem] uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  active === filter
                    ? "border-gold bg-gold text-gold-foreground"
                    : "border-ink/15 text-foreground/70 hover:-translate-y-0.5 hover:border-gold hover:text-gold",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul
          key={active}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {visible.map((slot) => (
            <motion.li
              key={slot.id}
              variants={staggerChild}
              {...(reduced ? {} : { whileHover: { y: -6, scale: 1.015 } })}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-ink/5",
                slot.wide && "sm:col-span-2",
              )}
            >
              <div style={{ aspectRatio: slot.wide ? "16 / 11" : "3 / 4" }} className="overflow-hidden">
                {slot.src ? (
                  <img
                    src={slot.src}
                    alt={slot.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.045]"
                    onClick={lightboxEnabled ? undefined : undefined}
                  />
                ) : (
                  <div className="nk-placeholder flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                    <span className="border border-gold/40 px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em] text-foreground/60">
                      Transformação {slot.id}
                    </span>
                  </div>
                )}
              </div>
              <p className="absolute bottom-3 left-3 rounded-sm bg-cream/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-foreground/70">
                {slot.category}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}