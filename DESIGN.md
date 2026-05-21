# 📐 DESIGN SYSTEM: Anthropic (Claude) + xAI (Grok) Synthesis

This document registers the design tokens, layout grids, visual language, and custom utilities for the **Anthropic + xAI Synthesis** running on `Portfolio-v2`.

---

## 🎨 Color Tokens (The Solar Shift)

The system utilizes high-contrast cosmic dark foundations punctured by organic warm dawn/dusk solar transitions:

| Token | Hex Value | Application | Brand Context |
|---|---|---|---|
| **Cosmic Black** | `#060608` | Canvas Background Floor | xAI (Engineered Void) |
| **Console Dark** | `#0b0e14` | Inner panel backgrounds | xAI (Hardware Interface) |
| **Claude Coral** | `#cc785c` | Text accents, primary highlights | Anthropic (Humanist Editorial) |
| **Sunset Amber** | `#e8a55a` | Call-to-action fills, telemetry warning | xAI (Solar Flare Dusk) |
| **Cosmic Purple** | `#9a528e` | Subtle ambient light drifts, hover borders | xAI / Nebula transition |
| **Muted Slate** | `#8e9aa8` | Secondary body text | Neutral Humanist |
| **Hairline White**| `rgba(255, 255, 255, 0.1)` | Strict 1px pill & card borders | xAI (Minimalist Outlines) |

---

## ✍️ Typographic Scales

The typographic system contrasts highly structural engineering blocks with premium editorial narratives:

1. **The Display Sans (Outfit):**
   - *Utility:* Headlines, core callouts, titles, buttons.
   - *Vibe:* Bold, playful, geometric, extremely clean and high-fidelity when combined with tight `tracking-tighter`.
2. **The Editorial Serif (Cormorant Garamond):**
   - *Utility:* Asymmetric quote snippets, deep-dive summaries, subheadings.
   - *Vibe:* Warm, classical, humanist, thoughtful. Standard in Anthropic publications.
3. **The Data Monospace (Share Tech Mono):**
   - *Utility:* Active logs, system telemetry, status captions, metrics charts.
   - *Vibe:* Uppercase tracked, crisp terminal expression.

---

## 📐 Layout & Spatial Rules

- **The Asymmetric Bento Grid:** Layout grids use asymmetric columns (e.g., `7:5` ratio) and uneven grid spacing to draw the eye through hierarchy.
- **The Hairline Outline:** Elements are bounded by a strict `1px` border of `rgba(255,255,255,0.06)` or `rgba(255,255,255,0.1)`. Radius is kept tight (`rounded-lg` / `rounded-full` for pills).
- **The Interesting Line:** Custom SVG mathematical cubic bezier spline curves that flow behind text layouts to provide structural alignment and custom editorial energy.

---

## ⚡ Interaction States & Animations

- **Hover States:** Instead of standard opacity drops, hover triggers a sunset gradient glow shift (`from-[#cc785c] to-[#e8a55a]`) or expanding hairline glows.
- **Background Physics:** Smooth HTML5 Canvas mouse-tracking drawing ambient radial glows and crisp cosmic grids in high performance.
