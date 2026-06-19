import { ArrowRight, Sparkles } from "lucide-react";
import { useLang, REFERRAL_URL } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full opacity-50 blur-3xl animate-float-glow"
        style={{ background: "radial-gradient(circle, oklch(0.58 0.22 277), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
          <Sparkles className="h-3.5 w-3.5" />
          {t.hero.badge}
        </span>

        <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          {t.hero.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {/* BOTÓN CTA PRINCIPAL - MORADO ULTRA LLAMATIVO */}
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all duration-200 tracking-wide"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
          {t.hero.trust.map((label) => (
            <span key={label} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}