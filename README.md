# فضل الكندى - AI Card Section

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel settings

- Framework Preset: Next.js
- Root Directory: ./
- Build Command: npm run build
- Install Command: npm install
- Output Directory: leave empty

Do not set Output Directory to `dist` or `public`.

## Fixes included

- `tsconfig.json` target changed from `es5` to `ES2017`.
- TypeScript pinned to `5.9.3` instead of `latest`.
- Next.js updated from `15.3.5` to `16.2.4`.
- `global.d.ts` added for CSS imports.
