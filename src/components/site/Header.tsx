import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { WhatsAppLink } from "./primitives";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Hair Therapy", href: "#hair-therapy" },
  { label: "Serviços", href: "#servicos" },
  { label: "Transformações", href: "#transformacoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gold/20 bg-espresso"
          : "border-b border-gold/10 bg-espresso/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        {/* LOGO: substituir por <img> do monograma NK quando o arquivo existir */}
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-gold/50 font-serif text-sm tracking-[0.1em] text-gold-light">
            NK
          </span>
          <span className="truncate font-serif text-base tracking-[0.16em] text-cream">
            Hair Therapy
          </span>
        </a>

        <nav aria-label="Navegação principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nk-underline text-[0.72rem] uppercase tracking-[0.16em] text-cream/80 transition-colors hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <WhatsAppLink
          href={site.whatsapp}
          className="ml-auto hidden px-5 py-2.5 lg:ml-6 lg:inline-flex"
        >
          Falar com a Nat
        </WhatsAppLink>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menu"
            className="ml-auto grid h-11 w-11 place-items-center rounded-sm border border-gold/35 text-cream lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </SheetTrigger>
          <SheetContent side="right" className="border-gold/20 bg-espresso text-cream">
            <SheetTitle className="font-serif text-lg tracking-[0.16em] text-cream">
              NK Hair Therapy
            </SheetTitle>
            <nav aria-label="Navegação mobile" className="mt-8">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 items-center border-b border-gold/15 text-sm uppercase tracking-[0.16em] text-cream/80 hover:text-gold-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <WhatsAppLink href={site.whatsapp} className="mt-8 w-full">
              Falar com a Nat
            </WhatsAppLink>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}