
# Landing Page AiBot — BitradeX

Construir una landing page de captación de alta conversión, bilingüe (ES/EN), con estética fintech sofisticada (Midnight Indigo), apuntando todos los CTAs al enlace de referido:

`https://www.bitradex.ai/es/account/register?inviteCode=ZSOEZG`

## Dirección visual

- **Paleta**: Midnight Indigo — fondo `#0a0a1a`, superficies `#141432`, acento `#1e1e5a`, primario `#4f46e5` (indigo eléctrico). Glows sutiles indigo/violeta, gradientes radiales en hero, líneas tipo grid tecnológico.
- **Tipografía**: Space Grotesk (titulares) + Inter (cuerpo) — tono tech moderno y legible.
- **Estilo**: Premium, profesional, "fintech-AI". Cards con glassmorphism leve, bordes con `color-mix` indigo, sombras suaves, halos animados en CTAs.
- **Iconografía**: Lucide icons con tinte indigo (Bot, Brain, Clock, ShieldCheck, BarChart3, Zap, Lock, LineChart).
- **Microanimaciones**: fade/slide-up al hacer scroll, hover-lift en cards, gradiente animado en el botón principal, contador/typing en el badge "AI activo 24/7".

## Estructura (single page, route `/`)

1. **Nav sticky** — Logo "AiBot · BitradeX", links ancla (Solución, Beneficios, Cómo funciona, FAQ), switch de idioma ES/EN, botón "Crear cuenta".
2. **Hero** — Badge "Powered by AI", H1 "La Inteligencia Artificial Aplicada al Trading de Criptomonedas", subtítulo, CTA primario + CTA secundario "Ver cómo funciona", visual decorativo (orb/grid animado, no imagen pesada).
3. **Logos/Trust strip** — Etiquetas conceptuales: Blockchain · IA · Algoritmos · 24/7.
4. **Problema** — 4 tarjetas con los puntos de dolor (tiempo, experiencia, emociones, seguimiento).
5. **Solución (AiBot)** — Bloque split: izquierda copy, derecha mock visual de panel/UI con métricas decorativas.
6. **Beneficios** — Grid de 6 tarjetas (IA Avanzada, Operación Continua, Automatización, Simplicidad, Tecnología Fintech, Monitorización Permanente).
7. **Cómo funciona** — 4 pasos numerados con línea conectora.
8. **Comparativa** — Tabla Trading Tradicional vs AiBot (6 filas).
9. **Testimonios** — 3 tarjetas con avatares generados (iniciales sobre gradiente), nombre ficticio, rol, estrellas y experiencia cualitativa (sin cifras ni promesas).
10. **FAQ** — Accordion con 6 preguntas del brief (experiencia, manual, supervisión, tecnología, riesgo, coste/activación).
11. **CTA final** — Banner full-width con gradiente indigo, "Empieza Hoy" + botón.
12. **Footer** — Disclaimer de riesgo (toda inversión implica riesgos, sin beneficios garantizados), enlaces ancla, mención de afiliado.

## Internacionalización (ES/EN)

- Diccionario simple en `src/lib/i18n.ts` con objetos `es` y `en`.
- Contexto React `LanguageProvider` con estado + `localStorage`; default `es`.
- Switch ES/EN en navbar. Sin librería externa.
- `<html lang>` actualizado dinámicamente.

## SEO

- `head()` de la ruta `/` con title "AiBot de BitradeX — Trading con Inteligencia Artificial", meta description con keywords (AiBot, BitradeX, trading con IA, trading automatizado, cripto, bot de trading), Open Graph + Twitter, canonical relativo `/`.
- H1 único, semántica HTML correcta (`<section>`, `<nav>`, `<footer>`), alt text en avatares.
- JSON-LD `Organization` + `FAQPage` con las preguntas de la sección FAQ.
- `robots` por defecto indexable.

## CTAs

Todos los botones "Crear Cuenta" / "Empieza Hoy" → `<a href="https://www.bitradex.ai/es/account/register?inviteCode=ZSOEZG" target="_blank" rel="noopener">`. CTA secundario "Ver Cómo Funciona" → scroll al ancla `#como-funciona`.

## Cumplimiento / tono

- Sin promesas de rentabilidad, sin cifras de ganancias, sin lenguaje de "dinero fácil".
- Disclaimer de riesgo visible en footer y bajo el CTA final.
- Tono: tecnológico, profesional, transparente.

## Detalles técnicos

- Tokens de color en `src/styles.css` (oklch para Midnight Indigo + gradientes y sombras semánticas: `--gradient-hero`, `--gradient-cta`, `--shadow-glow`, `--shadow-card`).
- Fuentes vía `@fontsource/space-grotesk` y `@fontsource/inter` instaladas con `bun add` e importadas en el entrypoint.
- Componentes nuevos en `src/components/landing/` (Nav, Hero, Problem, Solution, Benefits, HowItWorks, Comparison, Testimonials, FAQ, FinalCTA, Footer).
- Hook `useLanguage` + provider en `src/lib/i18n.tsx`.
- `src/routes/index.tsx` reemplaza el placeholder, monta `<LanguageProvider>` y renderiza las secciones.
- Reutilizar `Accordion`, `Button`, `Card` de shadcn ya disponibles.
- Sin backend, sin Lovable Cloud — es puramente marketing estático.

## Fuera de alcance

- Login / cuenta de usuario propia (el registro vive en BitradeX).
- Dashboards reales o integración con API de BitradeX.
- Blog, multi-página, panel admin.
