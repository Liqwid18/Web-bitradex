
"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./Problem";
import { Calculator, X } from "lucide-react";

type TradingPlan = {
  title: string;
  duration: string;
  forecast: string;
  annualized: string;
  daily: string;
  monthly: string;
  ann: string;
  principalProtection: boolean;
  isRecommendation?: boolean;
};

const fixedPlans: TradingPlan[] = [
  {
    title: "AI 30D",
    duration: "30 días",
    forecast: "9.00%",
    annualized: "109.50%",
    daily: "0.30%",
    monthly: "9.00%",
    ann: "109.50%",
    principalProtection: true,
  },
  {
    title: "AI 90D",
    duration: "90 días",
    forecast: "10.50%",
    annualized: "127.75%",
    daily: "0.35%",
    monthly: "10.50%",
    ann: "127.75%",
    principalProtection: true,
  },
  {
    title: "AI 180D",
    duration: "180 días",
    forecast: "12.00%",
    annualized: "146.00%",
    daily: "0.40%",
    monthly: "12.00%",
    ann: "146.00%",
    principalProtection: true,
  },
  {
    title: "AI 360D",
    duration: "1 año",
    forecast: "15.00%",
    annualized: "182.50%",
    daily: "0.50%",
    monthly: "15.00%",
    ann: "182.50%",
    principalProtection: true,
    isRecommendation: true,
  },
];

const flexiblePlan: TradingPlan = {
  title: "AI Daily",
  duration: "Flexible",
  forecast: "7.50%",
  annualized: "91.25%",
  daily: "0.25%",
  monthly: "7.50%",
  ann: "91.25%",
  principalProtection: true,
};

export function Benefits() {
  const { t } = useLang();
  
  // Estado que guarda a qué tarjeta se le ha hecho clic
  const [selectedPlan, setSelectedPlan] = useState<TradingPlan | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<string>("1000");

  const calculateProfit = (percentageStr: string, amountStr: string) => {
    const amount = parseFloat(amountStr) || 0;
    const percentage = parseFloat(percentageStr.replace("%", "")) || 0;
    return (amount * (percentage / 100)).toFixed(2);
  };

  const renderCard = (plan: TradingPlan) => (
    <div
      key={plan.title}
      className={`relative rounded-2xl border border-border/60 bg-surface/40 p-6 flex flex-col ${
        plan.isRecommendation ? "border-primary/60" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold">{plan.title}</h3>
        {plan.principalProtection && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
            {t.models.principalProtection}
          </span>
        )}
        {plan.isRecommendation && (
          <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
            {t.models.recommendation}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        AI Trading Model | BTC/USDT | {plan.duration}
      </p>

      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-end justify-between">
          <p className="text-xs text-muted-foreground">{t.models.forecast}</p>
          <p className="text-xs text-muted-foreground">{t.models.annualized}</p>
        </div>
        <div className="flex items-end justify-between">
          <p className="font-display text-4xl font-semibold text-primary-glow">
            {plan.forecast}
          </p>
          <p className="font-display text-3xl font-semibold text-primary-glow">
            {plan.annualized}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border/60 pt-6 text-center">
        <div>
          <p className="text-xs text-muted-foreground">{t.models.daily}</p>
          <p className="mt-1 font-semibold">{plan.daily}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{t.models.monthly}</p>
          <p className="mt-1 font-semibold">{plan.monthly}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{t.models.ann}</p>
          <p className="mt-1 font-semibold">{plan.ann}</p>
        </div>
      </div>

      {/* ESTE BOTÓN ES EL QUE ABRE EL POP-UP PARA LA TARJETA ESPECÍFICA */}
      <button 
        onClick={() => setSelectedPlan(plan)}
        className="mt-8 w-full group inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold text-primary-glow transition hover:bg-primary/20"
      >
        Calcular beneficios
        <Calculator className="h-4 w-4 transition group-hover:scale-110" />
      </button>
    </div>
  );

  return (
    <>
      <section id="modelos" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader kicker={t.models.kicker} title={t.models.title} />

          {/* Bloque 1: Modelos a Plazo Fijo */}
          <div className="mt-16 mb-10 text-center">
            <h3 className="font-display text-3xl font-semibold">AI 30-360</h3>
            <p className="mt-2 text-muted-foreground">
              Bloquea para mayores retornos
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Aquí se generan las 4 tarjetas y sus 4 botones */}
            {fixedPlans.map((plan) => renderCard(plan))}
          </div>

          {/* Bloque 2: Modelo Flexible */}
          <div className="mt-24 mb-10 text-center">
            <h3 className="font-display text-3xl font-semibold">AI Daily</h3>
            <p className="mt-2 text-muted-foreground">
              Deposita y retira en cualquier momento
            </p>
          </div>

          <div className="mx-auto max-w-md">
            {/* Aquí se genera la tarjeta flexible y su botón */}
            {renderCard(flexiblePlan)}
          </div>
        </div>
      </section>

      {/* MODAL CALCULADORA (Aparece solo cuando selectedPlan tiene datos) */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-border/60 bg-surface p-6 shadow-2xl overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-full bg-primary/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-semibold">
                Calculadora <span className="text-primary-glow">{selectedPlan.title}</span>
              </h3>
              <button 
                onClick={() => setSelectedPlan(null)}
                className="rounded-full p-2 hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 relative">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Cantidad a invertir (USDT)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="w-full rounded-xl border border-border/60 bg-background/50 py-3 pl-8 pr-4 text-foreground outline-none transition-colors focus:border-primary focus:bg-background"
                    placeholder="1000"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-4">
                <div className="flex justify-between items-center border-b border-border/60 pb-3">
                  <span className="text-sm text-muted-foreground">Beneficio Diario ({selectedPlan.daily})</span>
                  <span className="font-semibold text-green-400">
                    +${calculateProfit(selectedPlan.daily, investmentAmount)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center border-b border-border/60 pb-3">
                  <span className="text-sm text-muted-foreground">Beneficio Mensual ({selectedPlan.monthly})</span>
                  <span className="font-semibold text-green-400">
                    +${calculateProfit(selectedPlan.monthly, investmentAmount)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Beneficio Anual ({selectedPlan.ann})</span>
                  <span className="font-display text-lg font-semibold text-primary-glow">
                    +${calculateProfit(selectedPlan.ann, investmentAmount)}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedPlan(null)}
                className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Cerrar calculadora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
