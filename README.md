# Fadl Alkindi AI Card Section

This is a Next.js + TypeScript + Tailwind CSS project containing a card-style Spline robot section.

## Run

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Main files

```txt
components/sections/fadl-alkindi-ai-section.tsx
components/ui/cursor-light.tsx
components/ui/splite.tsx
app/page.tsx
app/globals.css
```

## Notes

- This version is **not fullscreen**.
- The section appears as a large centered card, like the reference screenshot.
- The robot is not inside a separate visual card; it is merged into the same background.
- The light follows the cursor over the card.
- Tailwind is pinned to v3 to avoid PostCSS issues.
