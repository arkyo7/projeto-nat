import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { site } from "@/config/site";
import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";

const services = [
  {
    title: "Loiros e iluminação",
    text: "Tons personalizados para iluminar o rosto com harmonia, brilho e saúde.",
  },
  {
    title: "Colorimetria e correção de cor",
    text: "Planejamento de acordo com o histórico do cabelo, o tom de pele e o resultado desejado.",
  },
  {
    title: "Cortes personalizados",
    text: "Cortes que respeitam textura, formato do rosto, rotina e personalidade.",
  },
  {
    title: "Visagismo e cores",
    text: "Uma leitura individual para escolher formas e tons que valorizem a imagem.",
  },
  {
    title: "Tratamentos capilares",
    text: "Cuidado direcionado às necessidades do fio, com foco em brilho, resistência e movimento.",
  },
];

export function Services() {
  const reduced = useReducedMotion();

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Serviços</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-[2.4rem]">
            Cuidado técnico, desenhado para o seu cabelo.
          </h2>
        </Reveal>

        <motion.ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={staggerChild}
              {...(reduced ? {} : { whileHover: { y: -8, scale: 1.015 } })}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-sm border border-chestnut/25 bg-taupe/45 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-xl hover:shadow-coffee/25"
            >
              {/* Área visual abstrata — futura imagem do serviço entra aqui */}
              <div className="overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <div className="nk-placeholder-warm h-full w-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-chestnut">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                  {service.text}
                </p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-chestnut transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}