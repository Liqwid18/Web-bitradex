import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      solution: "Solución",
      benefits: "Beneficios",
      how: "Cómo funciona",
      models: "Modelos",
      faq: "FAQ",
      cta: "Activar AiBot",
    },
    hero: {
      badge: "Powered by AI · Operación 24/7",
      title: "Genera dinero mediante IA desde casa",
      subtitle:
        "Descubre cómo AiBot utiliza tecnología avanzada para analizar mercados y automatizar procesos de inversión en activos digitales.",
      cta: "Activar AiBot",
      ctaSecondary: "Ver cómo funciona",
      trust: ["Blockchain", "Inteligencia Artificial", "Algoritmos cuantitativos", "Mercados 24/7"],
    },
    problem: {
      kicker: "El problema",
      title: "El trading manual es exigente",
      subtitle:
        "La mayoría de personas no tienen tiempo, experiencia ni la frialdad necesaria para operar en el mercado cripto.",
      items: [
        { title: "Requiere tiempo", text: "Analizar gráficos y noticias consume horas todos los días." },
        { title: "Requiere experiencia", text: "Entender el mercado cripto tiene una curva de aprendizaje empinada." },
        { title: "Afectado por emociones", text: "El miedo y la euforia llevan a comprar y vender en momentos incorrectos." },
        { title: "Seguimiento constante", text: "El mercado nunca cierra, las oportunidades aparecen a cualquier hora." },
      ],
    },
    solution: {
      kicker: "La solución",
      title: "AiBot trabaja mientras tú te ocupas de otras cosas",
      text: "AiBot es el sistema de inteligencia artificial de BitradeX. Analiza grandes volúmenes de datos de mercado, detecta tendencias y ejecuta estrategias automatizadas las 24 horas del día.",
      bullets: [
        "IA aplicada al análisis de mercado",
        "Operación continua sin descanso",
        "Decisiones basadas en datos, no en emociones",
        "Activación sencilla desde tu cuenta",
      ],
      panelTitle: "Panel AiBot",
      panelStatus: "Activo",
      panelMetrics: [
        { label: "Estrategias activas", value: "12" },
        { label: "Pares monitorizados", value: "84" },
        { label: "Latencia media", value: "38ms" },
        { label: "Disponibilidad", value: "24/7" },
      ],
    },
    benefits: {
      kicker: "Beneficios",
      title: "Tecnología avanzada al alcance de cualquiera",
      items: [
        { title: "IA Avanzada", text: "Modelos de inteligencia artificial entrenados con datos de mercado." },
        { title: "Operación Continua", text: "El mercado cripto no duerme, AiBot tampoco." },
        { title: "Automatización", text: "Sin necesidad de operar manualmente cada movimiento." },
        { title: "Simplicidad", text: "Diseñado para usuarios principiantes y avanzados." },
        { title: "Tecnología Fintech", text: "Infraestructura moderna sobre blockchain y análisis cuantitativo." },
        { title: "Monitorización Permanente", text: "Consulta la actividad de tu cuenta desde tu panel en cualquier momento." },
      ],
    },
    how: {
      kicker: "Cómo funciona",
      title: "Empezar con AiBot toma minutos",
      steps: [
        { title: "Crea tu cuenta", text: "Regístrate gratis en BitradeX con tu correo." },
        { title: "Accede a la plataforma", text: "Inicia sesión y explora las herramientas disponibles." },
        { title: "Activa AiBot", text: "Selecciona la configuración que se adapte a ti." },
        { title: "Supervisa tu actividad", text: "Consulta el rendimiento desde tu panel cuando quieras." },
      ],
    },
    models: {
      kicker: "MODELOS DE TRADING",
      title: "Nuestros Planes de Custodia",
      forecast: "Pronóstico de Rendimiento",
      annualized: "Retorno Anualizado",
      daily: "R. Diario",
      monthly: "R. Mensual",
      ann: "R. Anual",
      custodyNow: "Custodia Ahora",
      principalProtection: "Protección del Principal",
      recommendation: "Recomendación"
    },
    compare: {
      kicker: "Comparativa",
      title: "Trading tradicional vs AiBot",
      headers: ["Característica", "Trading tradicional", "AiBot"],
      rows: [
        ["Tiempo requerido", "Horas al día", "Mínimo"],
        ["Automatización", "Manual", "Total"],
        ["Disponibilidad", "Limitada", "24/7"],
        ["Complejidad", "Alta", "Simplificada"],
        ["Análisis de datos", "Subjetivo", "Algorítmico"],
        ["Velocidad de ejecución", "Humana", "Milisegundos"],
      ],
    },
    testimonials: {
      kicker: "Testimonios",
      title: "Lo que dicen quienes ya lo usan",
      disclaimer: "Experiencias cualitativas de usuarios. No representan promesas de rentabilidad.",
      items: [
        {
          name: "Lucía M.",
          role: "Diseñadora freelance",
          text: "Llevaba tiempo queriendo entrar al mundo cripto pero me parecía abrumador. AiBot me permitió empezar sin tener que aprender a leer gráficos.",
        },
        {
          name: "Marco R.",
          role: "Ingeniero de software",
          text: "Me interesa la IA aplicada a finanzas. Lo que me gustó es que el panel es transparente: puedo ver lo que está pasando en todo momento.",
        },
        {
          name: "Adriana T.",
          role: "Profesional independiente",
          text: "No tengo tiempo para seguir el mercado. Esto se ajusta a mi estilo de vida: configuro y reviso cuando quiero.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito experiencia previa en trading?",
          a: "No. La plataforma está diseñada para simplificar el proceso, tanto para usuarios principiantes como avanzados.",
        },
        {
          q: "¿Tengo que operar manualmente?",
          a: "No necesariamente. La automatización mediante AiBot es una de las características principales del servicio.",
        },
        {
          q: "¿Puedo supervisar mi actividad?",
          a: "Sí. Desde tu panel personal puedes consultar la información de tu cuenta en cualquier momento.",
        },
        {
          q: "¿Qué tecnología utiliza AiBot?",
          a: "Inteligencia artificial, algoritmos cuantitativos de análisis de mercado y automatización sobre infraestructura blockchain.",
        },
        {
          q: "¿Existe riesgo?",
          a: "Sí. Toda inversión en activos digitales implica riesgos. No existen beneficios garantizados y los resultados pueden variar.",
        },
        {
          q: "¿Cuánto cuesta activar AiBot?",
          a: "El registro en BitradeX es gratuito. Los detalles de las funcionalidades y costes están disponibles dentro de la plataforma.",
        },
      ],
    },
    finalCta: {
      title: "Empieza Hoy",
      text: "Explora cómo la inteligencia artificial puede ayudarte a participar en el ecosistema de activos digitales.",
      cta: "Activar AiBot",
      note: "Toda inversión conlleva riesgos. Resultados no garantizados.",
    },
    footer: {
      tag: "AiBot · BitradeX",
      description: "Inteligencia artificial aplicada al trading de criptomonedas.",
      links: "Enlaces",
      legal: "Aviso",
      disclaimer:
        "Esta es una página informativa con enlace de referido a BitradeX. El trading de activos digitales conlleva riesgo de pérdida. Ningún contenido aquí debe interpretarse como asesoramiento financiero.",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      solution: "Solution",
      benefits: "Benefits",
      how: "How it works",
      models: "Models",
      faq: "FAQ",
      cta: "Activate AiBot",
    },
    hero: {
      badge: "Powered by AI · Running 24/7",
      title: "Generate money using AI from home",
      subtitle:
        "Discover how AiBot uses advanced technology to analyze markets and automate digital asset investment workflows.",
      cta: "Activate AiBot",
      ctaSecondary: "See how it works",
      trust: ["Blockchain", "Artificial Intelligence", "Quantitative algorithms", "24/7 markets"],
    },
    problem: {
      kicker: "The problem",
      title: "Manual trading is demanding",
      subtitle:
        "Most people lack the time, expertise, or emotional discipline required to trade the crypto market.",
      items: [
        { title: "Time-consuming", text: "Charts and news take hours to follow every single day." },
        { title: "Requires expertise", text: "Understanding the crypto market has a steep learning curve." },
        { title: "Driven by emotion", text: "Fear and euphoria push buying and selling at the wrong moment." },
        { title: "Always-on market", text: "Markets never close — opportunities show up at any hour." },
      ],
    },
    solution: {
      kicker: "The solution",
      title: "AiBot works while you focus on other things",
      text: "AiBot is BitradeX's AI system. It analyzes large volumes of market data, detects trends and executes automated strategies around the clock.",
      bullets: [
        "AI applied to market analysis",
        "Continuous, non-stop operation",
        "Data-driven decisions, not emotional ones",
        "Simple activation from your account",
      ],
      panelTitle: "AiBot Panel",
      panelStatus: "Active",
      panelMetrics: [
        { label: "Active strategies", value: "12" },
        { label: "Monitored pairs", value: "84" },
        { label: "Avg. latency", value: "38ms" },
        { label: "Uptime", value: "24/7" },
      ],
    },
    benefits: {
      kicker: "Benefits",
      title: "Advanced technology within everyone's reach",
      items: [
        { title: "Advanced AI", text: "Machine learning models trained on market data." },
        { title: "Always On", text: "Crypto markets never sleep — neither does AiBot." },
        { title: "Automation", text: "No need to manually execute every single move." },
        { title: "Simplicity", text: "Built for both beginners and advanced users." },
        { title: "Fintech Stack", text: "Modern infrastructure on blockchain and quantitative analysis." },
        { title: "Live Monitoring", text: "Check your account activity from your panel any time." },
      ],
    },
    how: {
      kicker: "How it works",
      title: "Getting started with AiBot takes minutes",
      steps: [
        { title: "Create your account", text: "Sign up for free on BitradeX with your email." },
        { title: "Access the platform", text: "Log in and explore the available tools." },
        { title: "Activate AiBot", text: "Pick the configuration that matches your style." },
        { title: "Monitor activity", text: "Track performance from your dashboard whenever you want." },
      ],
    },
    models: {
      kicker: "TRADING MODELS",
      title: "Our Custody Plans",
      forecast: "Performance Forecast",
      annualized: "Annualized Return",
      daily: "Daily R.",
      monthly: "Monthly R.",
      ann: "Annual R.",
      custodyNow: "Custody Now",
      principalProtection: "Principal Protection",
      recommendation: "Recommendation"
    },
    compare: {
      kicker: "Comparison",
      title: "Traditional trading vs AiBot",
      headers: ["Feature", "Traditional trading", "AiBot"],
      rows: [
        ["Time required", "Hours per day", "Minimal"],
        ["Automation", "Manual", "Full"],
        ["Availability", "Limited", "24/7"],
        ["Complexity", "High", "Simplified"],
        ["Data analysis", "Subjective", "Algorithmic"],
        ["Execution speed", "Human", "Milliseconds"],
      ],
    },
    testimonials: {
      kicker: "Testimonials",
      title: "What current users are saying",
      disclaimer: "Qualitative user experiences. They do not represent guaranteed returns.",
      items: [
        {
          name: "Lucia M.",
          role: "Freelance designer",
          text: "I wanted to get into crypto but it felt overwhelming. AiBot let me start without having to learn how to read charts.",
        },
        {
          name: "Marco R.",
          role: "Software engineer",
          text: "I'm into applied AI for finance. What I like is that the panel is transparent — I can see what's happening at any time.",
        },
        {
          name: "Adriana T.",
          role: "Independent professional",
          text: "I don't have time to follow the market. This fits my lifestyle: I set it up and check whenever I want.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need previous trading experience?",
          a: "No. The platform is designed to simplify the process for both beginners and advanced users.",
        },
        {
          q: "Do I have to trade manually?",
          a: "Not necessarily. Automation through AiBot is one of the core features of the service.",
        },
        {
          q: "Can I monitor my activity?",
          a: "Yes. From your personal panel you can check your account information at any time.",
        },
        {
          q: "What technology does AiBot use?",
          a: "Artificial intelligence, quantitative market-analysis algorithms and automation on top of blockchain infrastructure.",
        },
        {
          q: "Is there any risk?",
          a: "Yes. Every digital-asset investment carries risk. There are no guaranteed returns and results may vary.",
        },
        {
          q: "How much does activating AiBot cost?",
          a: "Signing up to BitradeX is free. Feature and pricing details are available inside the platform.",
        },
      ],
    },
    finalCta: {
      title: "Start Today",
      text: "Explore how artificial intelligence can help you take part in the digital-asset ecosystem.",
      cta: "Create account",
      note: "All investments carry risk. Results are not guaranteed.",
    },
    footer: {
      tag: "AiBot · BitradeX",
      description: "Artificial intelligence applied to crypto trading.",
      links: "Links",
      legal: "Notice",
      disclaimer:
        "This is an informational page with a referral link to BitradeX. Trading digital assets carries the risk of loss. Nothing on this page constitutes financial advice.",
      rights: "All rights reserved.",
    },
  },
};

export type Dict = (typeof dictionaries)["es"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("aibot-lang") as Lang | null;
      if (stored === "es" || stored === "en") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("aibot-lang", l); } catch {}
  };

  return (
    <LangCtx.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang outside provider");
  return ctx;
}

export const REFERRAL_URL =
  "https://www.bitradex.ai/es/account/register?inviteCode=ZSOEZG";