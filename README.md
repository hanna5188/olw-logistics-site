# OLW Global

English-only enterprise marketing site for a cross-border logistics, warehousing, and fulfillment company. Built with **Next.js 15** and **Tailwind CSS**.

All copy is defined in `lib/copy.ts`. There is no i18n configuration, language switcher, or locale state.

## Brand

- **Name:** OLW Global
- **Positioning:** Cross-Border Logistics, Warehousing & Fulfillment

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/services` | Supply chain solutions |
| `/quote` | Quote request |
| `/about` | Company overview |
| `/contact` | Contact & quote |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you see `Cannot find module './XXX.js'` or 500 errors after large changes, stop the dev server and run:

```bash
npm run dev:clean
```

This clears the `.next` cache and starts a fresh dev build.

## Verify

```bash
npm run build
```
