import { Quote } from "lucide-react";
import { motion } from "motion/react";

import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";

/**
 * FEEDBACKS: placeholders honestos. Substituir os três itens abaixo pelos
 * depoimentos reais (texto + primeiro nome) quando forem enviados.
 */
const testimonials = [
  { id: 1, label: "Depoimento 1 — aguardando texto da cliente" },
  { id: 2, label: "Depoimento 2 — aguardando texto da cliente" },
  { id: 3, label: "Depoimento 3 — aguardando texto da cliente" },
];

export function Testimonials() {
  return (
    <section className="bg-taupe/55 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Feedbacks</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-[2.4rem]">
            Quando o resultado vai além do espelho.
          </h2>
        </Reveal>

        <motion.ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {testimonials.map((item) => (
            <motion.li
              key={item.id}
              variants={staggerChild}
              className="group rounded-sm border border-dashed border-gold/35 bg-coffee p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl hover:shadow-coffee/35"
            >
              <Quote className="h-5 w-5 text-gold-light" strokeWidth={1.25} aria-hidden />
              <p className="mt-6 text-sm leading-relaxed text-cream/75">{item.label}</p>
              <p className="mt-6 border-t border-gold/20 pt-4 text-[0.65rem] uppercase tracking-[0.2em] text-taupe/80">
                Espaço reservado para depoimento real
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}