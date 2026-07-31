import { motion } from "motion/react";

import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";

const steps = [
  { title: "Conte a sua história", text: "Você compartilha o histórico do cabelo e o que deseja mudar." },
  { title: "Avaliação e escuta", text: "Observamos fio, cor, forma, rotina e estilo com calma." },
  { title: "Planejamento personalizado", text: "Definimos juntas o caminho técnico mais seguro para o resultado." },
  { title: "Sua transformação", text: "O atendimento acontece com cuidado, presença e acabamento." },
];

export function HowItWorks() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Como funciona</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-[2.4rem]">
            Um processo tranquilo, do primeiro contato ao espelho.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* linha dourada: horizontal no desktop, vertical no mobile */}
          <span
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent md:left-0 md:right-0 md:top-[15px] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
          />
          <motion.ol
            className="relative grid gap-10 md:grid-cols-4 md:gap-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            {steps.map((step, i) => (
              <motion.li key={step.title} variants={staggerChild} className="relative pl-12 md:pl-0">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-gold/50 bg-espresso font-serif text-sm text-gold-light md:static md:mb-6">
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl text-ink md:mt-0">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-chestnut">{step.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}