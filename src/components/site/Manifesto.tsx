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
    <section id="hair-therapy" className="bg-espresso py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Hair Therapy</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-cream sm:text-[2.6rem]">
              Muito além de transformar cabelos.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-cream/70">
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
              {...(reduced ? {} : { whileHover: { y: -8, scale: 1.015 } })}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group rounded-sm border border-chestnut/40 bg-coffee p-8 shadow-sm transition-all duration-300 hover:border-gold/60 hover:bg-chestnut/35 hover:shadow-xl hover:shadow-ink/40"
            >
              <Icon className="h-6 w-6 text-gold-light" strokeWidth={1.25} aria-hidden />
              <h3 className="mt-6 font-serif text-xl text-cream transition-colors group-hover:text-gold-light">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}