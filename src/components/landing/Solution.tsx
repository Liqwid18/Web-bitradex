import { Brain, Check, Activity, Cpu } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Solution() {
  const { t } = useLang();
  return (
    <section id="solucion" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow">
              {t.solution.kicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {t.solution.title}
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">{t.solution.text}</p>

            <ul className="mt-8 space-y-3">
              {t.solution.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary-glow">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-2xl"
              style={{ background: "var(--gradient-cta)" }}
              aria-hidden
            />
            <div className="glass rounded-2xl p-6 shadow-[var(--shadow-elevated)]">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-cta)]">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">{t.solution.panelTitle}</p>
                    <p className="text-xs text-muted-foreground">v3.2 · AI engine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {t.solution.panelStatus}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {t.solution.panelMetrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border/60 bg-surface/60 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</p>
                    <p className="mt-1.5 font-display text-2xl font-semibold">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-border/60 bg-surface/60 p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Activity className="h-3.5 w-3.5" /> Signal feed</span>
                  <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5" /> Model</span>
                </div>
                <Sparkline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkline() {
  const points = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38, 36, 46, 42, 54, 50, 60];
  const w = 320, h = 80;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const path = points
    .map((v, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((v - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-20 w-full">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 290)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.58 0.22 277)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path d={path} fill="none" stroke="oklch(0.72 0.18 290)" strokeWidth="1.5" />
    </svg>
  );
}
