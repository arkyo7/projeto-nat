import { Ear, Scissors, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";

const pillars = [
  {
    icon: Ear,
    title: "Escuta",
    text: "Antes da técnica, a conversa: entender a sua rotina, o seu desejo e o seu histórico.",
  },
  {
    icon: Scissors,
    title: "Técnica",
    text: "Colorimetria, corte e cuidado aplicados com critério para preservar a saúde do fio.",
  },
  {
    icon: Sparkles,
    title: "Identidade",
    text: "Um resultado que combina com quem você é — não com uma tendência passageira.",
  },
];

export function Manifesto() {
  const reduced = useReducedMotion();

  return (
    <section id="hair-therapy" className="bg-white/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Hair Therapy</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink sm:text-[2.6rem]">
              Muito além de transformar cabelos.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
              Cada cabelo carrega uma história. A transformação mais bonita acontece quando a imagem
              exterior volta a conversar com quem somos por dentro.
            </p>
          </Reveal>
        </div>

        <motion.ul
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {pillars.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={staggerChild}
              whileHover={reduced ? undefined : { y: -8, scale: 1.015 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group rounded-sm border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-ink/5"
            >
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} aria-hidden />
              <h3 className="mt-6 font-serif text-xl text-ink transition-colors group-hover:text-gold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}