# BetterColor

**Real-time WCAG color contrast checker.** Pick text + background colors, see live preview, get instant compliance result, copy CSS codes.

![BetterColor Preview](https://hridoyhazard.github.io/BetterColor)

---

## Features

- **Live preview** — text renders on background in real time as you pick colors
- **WCAG 2.0 compliance** — checks AA, AAA, large text, and UI component thresholds
- **Contrast gauge** — visual ratio bar with AA/AAA markers (max 21:1)
- **Format switcher** — export colors as HEX, RGB, or HSL
- **Copy to clipboard** — individual values or full CSS snippet
- **Swap colors** — flip text/background in one click
- **RGB breakdown** — R/G/B channel values shown per color
- **Responsive** — works on mobile, tablet, desktop
- **Mobile nav** — animated hamburger menu

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Syne · DM Sans · JetBrains Mono (Google Fonts) |
| Contrast math | `color-contrast` npm package |
| Icons | `react-icons` |
| Language | JavaScript (JSX) |

---

## Getting Started

```bash
# Clone
git clone https://github.com/HridoyHazard/BetterColor.git
cd BetterColor

# Install
npm install

# Dev server → http://localhost:3000
npm run dev

# Production build
npm run build
npm start
```

Node.js 18+ required.

---

## Project Structure

```
├── app/
│   ├── globals.css       # Design tokens, animations, glass styles
│   ├── layout.js         # Root layout + metadata
│   └── page.js           # Home page (App Router)
├── components/
│   ├── Navbar.jsx         # Sticky scroll-aware nav, mobile hamburger
│   ├── Hero.jsx           # Landing section with animated headline
│   ├── ColorTool.jsx      # Main tool — pickers, preview, gauge, WCAG table, export
│   └── Footer.jsx         # Links, brand, social icons
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## WCAG Reference

| Level | Normal Text | Large Text | UI Components |
|---|---|---|---|
| AA | 4.5:1 | 3:1 | 3:1 |
| AAA | 7:1 | 4.5:1 | — |

Large text = 18pt+ regular or 14pt+ bold.

---

## Original Project

This is a Next.js rewrite of the original CRA-based [BetterColor](https://github.com/HridoyHazard/BetterColor) by [@HridoyHazard](https://github.com/HridoyHazard). Original issues fixed:

- Color picker state was isolated — live preview never updated. State lifted to shared parent.
- Replaced styled-components with Tailwind CSS design system
- Added mobile responsiveness throughout
- Added WCAG breakdown table, contrast gauge, RGB display, format switcher, export strip
- Converted to Next.js App Router with proper metadata and layout

---

## License

MIT
