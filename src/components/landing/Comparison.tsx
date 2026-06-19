import { Check, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./Problem";

export function Comparison() {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader kicker={t.compare.kicker} title={t.compare.title} />

        <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-[var(--gradient-surface)]">
          <div className="grid grid-cols-3 border-b border-border/60 bg-surface/40 px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <div>{t.compare.headers[0]}</div>
            <div className="text-center">{t.compare.headers[1]}</div>
            <div className="text-center text-primary-glow">{t.compare.headers[2]}</div>
          </div>
          {t.compare.rows.map(([feat, trad, ai], i) => (
            <div
              key={feat}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                i % 2 === 0 ? "bg-surface/20" : ""
              }`}
            >
              <div className="font-medium">{feat}</div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <X className="h-4 w-4 text-destructive/80" />
                <span>{trad}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground">
                <Check className="h-4 w-4 text-primary-glow" />
                <span className="font-medium">{ai}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
