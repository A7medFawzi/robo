# فضل الكندى - حلول الذكاء الاصطناعى

## Vercel deploy notes

Make sure these files are committed to GitHub:

- `app/globals.css`
- `global.d.ts`
- `app/layout.tsx`
- `app/page.tsx`
- `package.json`

Vercel settings:

- Framework Preset: Next.js
- Root Directory: `./` if `package.json` is in the repository root
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty

Do not upload `node_modules` or `.next`.
