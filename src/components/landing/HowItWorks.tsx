import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./Problem";

export function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="como-funciona" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t.how.kicker} title={t.how.title} />

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.58 0.22 277 / 0.5), transparent)",
            }}
            aria-hidden
          />
          {t.how.steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border/60 bg-surface/40 p-6">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background font-display text-lg font-semibold text-primary-glow shadow-[var(--shadow-glow)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
