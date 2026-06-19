import { Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./Problem";

const gradients = [
  "linear-gradient(135deg, oklch(0.58 0.22 277), oklch(0.65 0.18 320))",
  "linear-gradient(135deg, oklch(0.6 0.2 200), oklch(0.55 0.22 270))",
  "linear-gradient(135deg, oklch(0.62 0.18 30), oklch(0.55 0.22 295))",
];

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t.testimonials.kicker} title={t.testimonials.title} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => {
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <figure
                key={item.name}
                className="flex h-full flex-col rounded-2xl border border-border/60 bg-[var(--gradient-surface)] p-7"
              >
                <div className="flex items-center gap-1 text-primary-glow">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{item.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-full font-display text-sm font-semibold text-primary-foreground"
                    style={{ background: gradients[i] }}
                    aria-hidden
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/80">{t.testimonials.disclaimer}</p>
      </div>
    </section>
  );
}
