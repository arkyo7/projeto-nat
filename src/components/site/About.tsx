import { images, site } from "@/config/site";
import { EditorialImage, Eyebrow, Reveal, WhatsAppLink } from "./primitives";

const badges = ["Bruxelas", "Hair Therapy", "Colorimetria", "Visagismo"];

export function About() {
  return (
    <section id="sobre" className="bg-gradient-to-b from-espresso to-ink py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <Reveal className="group">
          {/* RETRATO: definir images.about.src em src/config/site.ts */}
          <EditorialImage image={images.about} className="w-full bg-chestnut/35" />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Sobre</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-3xl text-cream sm:text-[2.4rem]">Natathya Kozan</h2>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-gold-light">
              Hair, Therapy &amp; Transformation
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-cream/75">
              Sou Natathya Kozan, profissional de cabelo e criadora de uma experiência que une
              técnica, escuta e autocuidado. Em cada atendimento, observo cor, forma, textura, rotina
              e estilo para construir um resultado que respeite a sua identidade e valorize a sua
              beleza real.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-sm border border-gold/35 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-gold-light"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <WhatsAppLink href={site.whatsapp} className="mt-9 w-full sm:w-auto">
              Falar com a Nat
            </WhatsAppLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}