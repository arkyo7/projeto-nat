import { site } from "@/config/site";
import { Eyebrow, Reveal, WhatsAppLink } from "./primitives";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <span aria-hidden className="pointer-events-none absolute inset-6 border border-gold/15" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <Eyebrow className="justify-center">Contato</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-cream sm:text-[2.7rem]">
            Pronta para se enxergar com mais carinho?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-cream/70">
            Conte a sua história, compartilhe o que deseja mudar e agende uma avaliação
            personalizada em Bruxelas.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <WhatsAppLink href={site.whatsapp} className="mt-10 w-full px-8 py-4 sm:w-auto">
            Falar com Natathya no WhatsApp
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}