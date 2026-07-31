import { images } from "@/config/site";
import { EditorialImage, Eyebrow, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Hair Therapy em Bruxelas</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-[2.1rem] leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Seu cabelo responde quando você se escolhe.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
              Cor, corte e cuidado personalizado para transformar o seu cabelo sem apagar a sua
              essência.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <a
                href="#hair-therapy"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-gold/45 bg-coffee px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-chestnut hover:shadow-lg hover:shadow-coffee/40 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                Conhecer a Hair Therapy
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-10 border-t border-gold/40 pt-5 text-[0.7rem] uppercase tracking-[0.2em] text-chestnut">
              Atendimento personalizado <span className="text-gold">·</span> Bruxelas{" "}
              <span className="text-gold">·</span> Autoestima e identidade
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="group">
          {/* IMAGEM DO HERO: definir images.hero.src em src/config/site.ts */}
          <EditorialImage
            image={images.hero}
            className="w-full bg-gradient-to-br from-espresso to-coffee"
          />
        </Reveal>
      </div>
    </section>
  );
}