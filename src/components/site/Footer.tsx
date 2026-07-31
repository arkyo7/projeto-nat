import { Instagram, MessageCircle } from "lucide-react";

import { site } from "@/config/site";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Hair Therapy", href: "#hair-therapy" },
  { label: "Serviços", href: "#servicos" },
  { label: "Transformações", href: "#transformacoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-espresso py-14 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          {/* LOGO: substituir pelo monograma NK quando o arquivo existir */}
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center border border-gold/50 font-serif text-sm text-gold-light">
              NK
            </span>
            <span className="font-serif text-base tracking-[0.16em] text-cream">Hair Therapy</span>
          </div>
          <p className="mt-4 text-sm text-taupe/85">{site.location}</p>
          <p className="mt-1 text-sm text-taupe/85">Atendimento mediante agendamento.</p>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="text-[0.68rem] uppercase tracking-[0.22em] text-gold-light">Links rápidos</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center text-sm text-cream/80 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.68rem] uppercase tracking-[0.22em] text-gold-light">Contato</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-light"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.4} aria-hidden /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-light"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} aria-hidden /> @natkozanhair
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-gold/15 px-4 pt-6 text-[0.7rem] uppercase tracking-[0.18em] text-taupe/80 sm:px-6">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}