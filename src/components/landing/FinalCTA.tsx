import { ArrowRight } from "lucide-react";
import { useLang, REFERRAL_URL } from "@/lib/i18n";

export function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-[var(--gradient-surface)] px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden
          />
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />

          <div className="relative">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {t.finalCta.text}
            </p>

            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-cta)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition animate-gradient"
            >
              {t.finalCta.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mt-6 text-xs text-muted-foreground/80">{t.finalCta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
