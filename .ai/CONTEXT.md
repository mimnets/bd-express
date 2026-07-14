# BDXpress Platform — AI Agent Context

> This file is the single source of truth for any AI agent working on this project.
> **Read this first** before making any changes.

## Project Overview

A cross-border e-commerce & sourcing platform for Bangladesh. Users can source products from Chinese wholesale platforms (Taobao, 1688, Alibaba), pay in BDT, and get door-to-door delivery via our China warehouse → air/sea shipping → BD customs → last-mile delivery.

**Competitors:** MoveOn.global, Laobaan.com
**Status:** Planning → MVP Development

## Team

| Role | Person | Responsibilities |
|------|--------|----------------|
| Tech & Automation | Monirul Islam (Monir) | Full-stack dev, AI automation, mobile apps, infrastructure |
| China Ops & Sourcing | Mr. Touab | China warehouse, supplier relationships, procurement, shipping |
| Local Ops & CX | Mr. Sabbir | BD operations, customer support, gadgets/market expertise, accounting |

## Core Business Model

1. Customer pastes Taobao/1688 product link OR browses curated catalog
2. System fetches product details (price, specs, images) via API
3. Customer pays in BDT (bKash/Nagad/Rocket/cards) via SSLCommerz
4. Touab's China team purchases from Chinese supplier, receives at China warehouse
5. Quality inspection & photos taken
6. Consolidation & international shipping (air 7-12d / sea 20-40d)
7. BD customs clearance handled
8. Last-mile delivery to customer

**Revenue:** 5-12% service fee + shipping margin + premium services (QC video, express, etc.)

## Tech Stack (Finalized)

| Layer | Technology | Status |
|-------|------------|--------|
| **Monorepo** | Turborepo + pnpm | ✅ |
| **Frontend Web** | Next.js 15+ (App Router) | ✅ |
| **Mobile** | React Native (Expo) | ✅ |
| **Backend API** | Next.js API Routes + tRPC or REST | TBD |
| **Database** | PostgreSQL (Supabase) | ✅ |
| **ORM** | Prisma | ✅ |
| **Auth** | NextAuth.js / Clerk | TBD |
| **Payments** | SSLCommerz | ✅ |
| **File Storage** | Cloudflare R2 / Supabase Storage | TBD |
| **Hosting** | Vercel (web) + Supabase (DB) | ✅ |
| **CI/CD** | GitHub Actions | ✅ |

## Project Structure

```
bdexpress-platform/
├── apps/
│   ├── web/              # Next.js public website + customer portal
│   ├── mobile/           # Expo React Native app (iOS + Android)
│   └── admin/            # Admin dashboard (Next.js, separate app)
├── packages/
│   ├── shared/           # Shared TypeScript types, constants, utils
│   ├── api/              # API service layer, external integrations
│   ├── database/         # Prisma schema, migrations, seed
│   └── ui/               # Shared UI component library
├── services/
│   ├── payment/          # Payment gateway integration
│   ├── china-api/        # 1688/Taobao/Alibaba API integration
│   ├── tracking/         # Shipping tracking aggregation
│   └── ai/               # AI chatbot, automation, social
├── docs/                 # Technical documentation
├── scripts/              # Automation & utility scripts
├── .ai/                  # AI agent context (this folder)
├── .cursor/rules/        # Cursor IDE rules
└── tests/                # Integration & E2E tests
```

## Development Phases

| Phase | Timeline | Key Deliverables |
|-------|----------|-----------------|
| **Phase 1: MVP** | Weeks 1-8 | Website + basic ordering, payment, manual ops |
| **Phase 2: Automation** | Weeks 9-16 | API integration, AI chatbot, F-commerce portal |
| **Phase 3: Scale** | Weeks 17-24 | B2B portal, inventory, analytics |
| **Phase 4: Expansion** | Month 6+ | Partner API, BD warehouse, subscriptions |

## Current Task Status

See `.ai/TASKS.md` for detailed task tracking.
See `.ai/RULES.md` for coding conventions & agent rules.

## Key Links

- Business Plan: `../projects/bdexpress/`
- Design Files: (TBD — Figma)
- API Docs: (TBD)
- Deployment: (TBD — Vercel)

## Important Notes for AI Agents

1. **Language:** Code in TypeScript. Comments in English. UI supports Bengali (bn) + English (en).
2. **Monorepo:** This is a Turborepo. All packages under `packages/`, apps under `apps/`.
3. **Database:** Prisma ORM with PostgreSQL. Schema in `packages/database/`.
4. **Mobile:** Expo managed workflow for React Native.
5. **Payments:** SSLCommerz is primary. bKash/Nagad via SSLCommerz.
6. **External APIs:** 1688/Taobao integration lives in `services/china-api/`.
7. **AI & Automation:** Anything AI (chatbot, content gen, automation) goes in `services/ai/`.
8. **Always check `.ai/MEMORY.md`** for project decisions before implementing.
9. **Always check `.ai/TASKS.md`** before deciding what to work on.
10. **Update documentation** when you add new features or change existing ones.
