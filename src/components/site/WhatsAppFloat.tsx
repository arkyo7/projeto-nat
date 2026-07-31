import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { site } from "@/config/site";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Nat no WhatsApp"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-espresso text-gold-light shadow-lg transition-colors duration-300 hover:bg-gold hover:text-gold-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}