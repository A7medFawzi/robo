# Fadl Al-Kindi AI Card Section - Next.js Security Fixed

This version patches the Vercel warning: **Vulnerable version of Next.js detected**.

## Fixes included

- Updated `next` from `15.3.5` to `15.5.18`
- Updated `react` and `react-dom` to `19.1.1`
- Removed deprecated `baseUrl` from `tsconfig.json`
- Kept `app/globals.css` in the correct location
- Kept the WhatsApp button and card-style robot section

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## Vercel settings

- Framework Preset: Next.js
- Root Directory: ./
- Build Command: npm run build
- Install Command: npm install
- Output Directory: empty

If Vercel still says it cannot find an output directory named `public`, clear the Output Directory field in Project Settings.
