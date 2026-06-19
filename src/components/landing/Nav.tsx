import { useEffect, useState } from "react";
// Se mantiene "Bot" para el icono del logo si decides dejarlo, o puedes cambiarlo por tu SVG personalizado
import { Bot, Menu, X } from "lucide-react";
import { useLang, REFERRAL_URL } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#modelos", label: t.nav.models },
    { href: "#solucion", label: t.nav.solution },
    { href: "#beneficios", label: t.nav.benefits },
    { href: "#como-funciona", label: t.nav.how },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-cta)] shadow-[var(--shadow-glow)]">
            <Bot className="h-5 w-5 text-primary-foreground" />
            <span className="absolute inset-0 rounded-lg animate-pulse-ring border border-primary/60" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            BitradeX <span className="text-muted-foreground font-normal">· AiBot </span>
          </span>
        </a>

        {/* Navegación central de escritorio con el botón "Activar AiBot" del medio incluido */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-border/60 bg-surface/50 p-0.5 text-xs">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2.5 py-1 rounded-full font-medium uppercase transition-colors",
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Botón "Activar AiBot" de la derecha (Escritorio) */}
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all duration-200 tracking-wide"
          >
            {t.nav.cta}
          </a>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            
            <div className="mt-4 flex flex-col gap-3 border-t border-border/40 pt-3">
              {/* Selector de idioma móvil */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium uppercase">Idioma</span>
                <div className="flex items-center rounded-full border border-border/60 bg-surface/50 p-0.5 text-xs">
                  {(["es", "en"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        "px-3 py-1 rounded-full font-medium uppercase",
                        lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botón "Activar AiBot" (Móvil) */}
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 active:scale-95 transition-all text-center w-full"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}