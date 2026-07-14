# BDXpress Platform 🇧🇩🛒

> Bangladesh's next-generation cross-border e-commerce platform — source products from China (Taobao, 1688, Alibaba) with door-to-door delivery, local payment (bKash/Nagad), and AI-powered automation.

**Status:** 🛠️ MVP Development  
**Competing with:** MoveOn.global, Laobaan.com  
**Phase:** 0 — Foundation Setup

---

## Quick Start

```bash
# Clone & install
pnpm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# Initialize database
pnpm db:migrate
pnpm db:seed

# Start development
pnpm dev
```

## Project Structure

```
bdexpress-platform/
├── apps/
│   ├── web/              # Next.js 15 public website + customer portal
│   ├── mobile/           # Expo React Native (iOS + Android)
│   └── admin/            # Internal admin dashboard
├── packages/
│   ├── shared/           # Shared TypeScript types, constants, utils
│   ├── api/              # API layer & external service clients
│   ├── database/         # Prisma schema, migrations, seed
│   └── ui/               # Shared UI components (shadcn/ui)
├── services/
│   ├── payment/          # SSLCommerz + bKash integration
│   ├── china-api/        # 1688/Taobao/Alibaba API integration
│   ├── tracking/         # Shipping & logistics tracking
│   └── ai/               # AI chatbot, automation, social media
├── docs/                 # Documentation
├── scripts/              # Automation scripts
├── .ai/                  # AI agent context (read by Claude/Cursor/Copilot)
│   ├── CONTEXT.md        # Project overview
│   ├── ARCHITECTURE.md   # System architecture
│   ├── TECH_STACK.md     # Tech stack & tools
│   ├── RULES.md          # Coding conventions
│   ├── TASKS.md          # Task tracking
│   └── MEMORY.md         # Decision log
└── tests/                # Integration & E2E tests
```

## Business Plan

The complete business plan (competitor analysis, SWOT, financials, etc.) is at:
[`../projects/bdexpress/`](../projects/bdexpress/INDEX.md)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15 (App Router) — Web |
| **Mobile** | React Native (Expo) — iOS + Android |
| **Database** | PostgreSQL (Supabase) + Prisma ORM |
| **Auth** | Clerk / NextAuth.js |
| **Payments** | SSLCommerz (bKash, Nagad, cards) |
| **Styling** | Tailwind CSS + shadcn/ui |
| **State** | TanStack Query |
| **Validation** | Zod |
| **i18n** | next-intl (Bengali + English) |
| **CI/CD** | GitHub Actions |
| **Hosting** | Vercel + Supabase |

## Key Features (MVP)

- [ ] Product link submission (paste Taobao/1688 URL → auto-fetch product details)
- [ ] Curated product catalog with Bengali/English
- [ ] Quote generation & transparent pricing
- [ ] Payment via bKash, Nagad, Rocket, cards (SSLCommerz)
- [ ] Order tracking (end-to-end from China → BD doorstep)
- [ ] Admin dashboard for order management
- [ ] Mobile app (iOS + Android)
- [ ] Bengali + English language toggle
- [ ] AI customer support chatbot

## Team

- **Monirul Islam** — Tech & Automation (AI coding, full-stack, mobile apps)
- **Mr. Touab** — China Operations (warehouse, suppliers, shipping, customs)
- **Mr. Sabbir** — Local Operations (CX, gadgets, accounting, marketing)

## Contributing

See `.ai/RULES.md` for coding conventions and `.ai/TASKS.md` for current tasks.

## License

Private — All rights reserved.
