# GitHub Copilot Instructions for BDXpress

## Project Context
BDXpress is a cross-border e-commerce platform for Bangladesh. 
Users source products from Chinese platforms (Taobao, 1688, Alibaba) and get door-to-door delivery.

## Tech Stack
- Next.js 15 (App Router) — Web
- React Native (Expo) — Mobile
- Supabase (PostgreSQL) — Database
- Prisma — ORM
- Tailwind CSS + shadcn/ui — Styling
- SSLCommerz — Payments
- Turborepo + pnpm — Monorepo

## Coding Standards
- TypeScript throughout. Define proper interfaces.
- Server components by default (App Router)
- Client components only for interactivity (`'use client'`)
- Tailwind for styling (no CSS modules)
- Zod for input validation
- React Query for server state
- Prisma for DB queries (no raw SQL)
- i18n with next-intl (Bengali + English)

## Allowed patterns
- `import { ... } from "@bdexpress/database"` for shared types
- `import { ... } from "@/components"` for app-specific components
- `import { ... from "@bdexpress/ui" }` for shared UI

## Response format
Always provide two files:
1. The implementation
2. Test file if applicable

## Environment variables
Must come from `process.env.NEXT_PUBLIC_*` for client,
`process.env.*` for server-only.
