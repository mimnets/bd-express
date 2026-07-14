# Project Memory & Decisions Log

> Every significant decision made during development is logged here.
> AI agents: READ THIS before implementing anything new.

---

## 2026-07-07 — Project Foundation

### Decision: Monorepo with Turborepo + pnpm
- **Rationale:** Monorepo keeps all apps (web, mobile, admin) and packages (shared, api, database, ui) together. Turborepo for build caching. pnpm for workspace management.
- **Alternatives considered:** Nx (heavier), npm workspaces (no caching), single app (won't scale)
- **Status:** ✅ Selected

### Decision: Next.js 15+ App Router for Web
- **Rationale:** Best DX for AI-assisted development, excellent SEO, PWA support, server components, Vercel-native
- **Status:** ✅ Selected

### Decision: React Native (Expo) for Mobile
- **Rationale:** One codebase for iOS + Android, fast development, OTA updates, web-sharing potential
- **Status:** ✅ Selected

### Decision: Supabase for Database + Auth + Storage
- **Rationale:** Managed PostgreSQL, built-in auth, file storage, edge functions, generous free tier, works well with Next.js
- **Status:** ✅ Selected

### Decision: Prisma for ORM
- **Rationale:** Type-safe, great DX with autocomplete, easy migrations, works with Supabase
- **Status:** ✅ Selected

### Decision: SSLCommerz as Primary Payment Gateway
- **Rationale:** Largest BD payment aggregator, supports bKash/Nagad/Rocket/cards, PSO licensed, well-documented API
- **Note:** bKash direct merchant account also needed for manual payment verification
- **Status:** ✅ Selected

### Decision: Vercel + Supabase for Hosting
- **Rationale:** Vercel for Next.js (zero-config deployment, preview deploys), Supabase for DB (managed, scales)
- **Fallback:** Monir's Oracle Cloud VM can host backend for free as alternative
- **Status:** ✅ Selected (default)

### Decision: Tailwind CSS for Styling
- **Rationale:** Utility-first, fast to build, great with Next.js, AI-friendly (predictable class names)
- **Status:** ✅ Selected

### Decision: TypeScript Throughout
- **Rationale:** Type safety is critical for a platform handling payments and orders. AI agents produce better TS code.
- **Status:** ✅ Selected

---

## Decisions Pending (Need Team Input)

These are flagged in `projects/bdexpress/10-Questions-for-Team.md`:
1. Brand name & logo
2. Auth provider (Clerk vs NextAuth) — Monir's preference
3. API approach (tRPC vs REST vs GraphQL)
4. 1688 API integration approach (official API vs third-party vs scraping)
5. Design system / UI component library choice

## Things to Remember

- China operations handled by Touab's team — platform tracks but doesn't execute China-side ops
- Bangladesh customs requires specific documentation — handled by Touab's team
- Currency: prices in CNY → converted to BDT at checkout
- Language: Bengali primary, English secondary with toggle
