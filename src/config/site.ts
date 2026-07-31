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

export const images: Record<string, SiteImage> = {
  hero: {
    src: null, // TODO: conectar imagem principal do hero
    alt: "Natathya Kozan finalizando um trabalho de coloração em seu estúdio em Bruxelas",
    label: "Imagem principal",
    ratio: "4 / 5",
    priority: true,
  },
  about: {
    src: null, // TODO: conectar retrato de Natathya
    alt: "Retrato de Natathya Kozan, profissional de cabelo e Hair Therapy em Bruxelas",
    label: "Foto de Natathya",
    ratio: "3 / 4",
  },
};