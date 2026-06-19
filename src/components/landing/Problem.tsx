import { Clock, GraduationCap, Heart, Activity } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [Clock, GraduationCap, Heart, Activity];

export function Problem() {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t.problem.kicker} title={t.problem.title} subtitle={t.problem.subtitle} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.problem.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border/60 bg-[var(--gradient-surface)] p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-surface-elevated text-primary-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  center = true,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow">{kicker}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
