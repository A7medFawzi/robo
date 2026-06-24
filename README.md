# Fadl Al-Kindi AI Card Section - Vercel Fixed

This version fixes the Vercel/TypeScript build error related to deprecated `baseUrl`.

## Fixes included

- Removed `baseUrl` from `tsconfig.json`
- Kept alias paths: `@/*` -> `./*`
- Pinned TypeScript to `5.8.3` instead of `latest`
- Ensured `app/globals.css` exists

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
- Output Directory: empty
