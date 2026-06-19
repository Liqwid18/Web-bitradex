import { Brain, Clock, Zap, Sparkles, Cpu, LineChart } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./Problem";

const icons = [Brain, Clock, Zap, Sparkles, Cpu, LineChart];

export function TradingModels () {
  const { t } = useLang();
  return (
    <section id="beneficios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t.benefits.kicker} title={t.benefits.title} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.benefits.items.map((b, i) => {
            const Icon = icons[i];
            return (
              <div
                key={b.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-[var(--gradient-surface)] p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
              >
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-cta)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

