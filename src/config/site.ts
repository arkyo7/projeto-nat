/**
 * Configuração central do site.
 * IMAGENS: após enviar os arquivos para o GitHub (ex.: /public/images/...),
 * basta preencher os campos `src` abaixo. Nenhum outro arquivo precisa mudar —
 * os componentes trocam o placeholder pela imagem automaticamente.
 */

export const site = {
  name: "Nat Kozan Hair Therapy",
  professional: "Natathya Kozan",
  location: "Bruxelas, Bélgica",
  whatsapp: "https://wa.me/message/YIKKDWU7ERBSI1",
  instagram: "https://www.instagram.com/natkozanhair/",
} as const;

export type SiteImage = {
  /** Caminho da imagem (ex.: "/images/hero.webp"). Deixe null enquanto não houver arquivo. */
  src: string | null;
  /** Texto alternativo descritivo em português. */
  alt: string;
  /** Rótulo discreto exibido no placeholder. */
  label: string;
  /** aspect-ratio fixo para evitar layout shift. */
  ratio: string;
  /** true apenas para a imagem do hero (carregamento prioritário). */
  priority?: boolean;
};

export const images = {
  hero: {
    src: "/images/599463830_17914575561247391_280103034505541156_n.jpg",
    alt: "Cliente com cabelo loiro longo, iluminado e finalizado pela Nat Kozan Hair Therapy",
    label: "Imagem principal",
    ratio: "4 / 5",
    priority: true,
  },
  about: {
    src: "/images/748287057_17945123457247391_6090716563705405403_n.jpg",
    alt: "Natathya Kozan, profissional de cabelo e criadora da NK Hair Therapy em Bruxelas",
    label: "Foto de Natathya",
    ratio: "3 / 4",
  },
} satisfies Record<string, SiteImage>;
