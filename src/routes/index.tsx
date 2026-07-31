import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "Nat Kozan Hair Therapy | Cabeleireira Brasileira em Bruxelas";
const description =
  "Hair Therapy, loiros, balayage, colorimetria, visagismo e cortes personalizados em Bruxelas. Conheça Natathya Kozan e agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      // TODO (imagens): adicionar og:image e twitter:image com a URL absoluta
      // da futura foto do hero após o upload dos arquivos.
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Nat Kozan Hair Therapy",
          description,
          areaServed: "Bruxelas, Bélgica",
          address: { "@type": "PostalAddress", addressLocality: "Bruxelas", addressCountry: "BE" },
          sameAs: ["https://www.instagram.com/natkozanhair/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Gallery />
        <About />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
