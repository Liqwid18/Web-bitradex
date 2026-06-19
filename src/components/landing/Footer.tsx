import { Bot } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-border/60 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-cta)]">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-base font-semibold">{t.footer.tag}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.description}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t.footer.links}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#solucion" className="text-muted-foreground hover:text-foreground">{t.nav.solution}</a></li>
            <li><a href="#beneficios" className="text-muted-foreground hover:text-foreground">{t.nav.benefits}</a></li>
            <li><a href="#como-funciona" className="text-muted-foreground hover:text-foreground">{t.nav.how}</a></li>
            <li><a href="#faq" className="text-muted-foreground hover:text-foreground">{t.nav.faq}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{t.footer.legal}</p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.footer.disclaimer}</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BitradeX. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
