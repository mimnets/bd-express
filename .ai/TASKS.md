# BDXpress Tasks & Roadmap

> **Legend:** 🔴 Not started | 🟡 In progress | ✅ Complete | ⏸️ Blocked

---

## Phase 0: Foundation Setup

- [x] **0.1** Create project repository structure
- [x] **0.2** Set up AI context files (CONTEXT, RULES, MEMORY, TASKS)
- [ ] **0.3** Initialize Turborepo + pnpm workspace
- [ ] **0.4** Configure TypeScript (root + packages)
- [ ] **0.5** Set up ESLint + Prettier configuration
- [ ] **0.6** Create `.env.example` with all required variables
- [ ] **0.7** Set up Prisma schema (`packages/database`)
- [ ] **0.8** Configure GitHub repository (branches, actions, templates)

## Phase 1: MVP Development (Weeks 1-8)

### Week 1-2: Foundation
- [ ] **1.1** Initialize `apps/web` with Next.js 15+ App Router
- [ ] **1.2** Set up shared UI components (`packages/ui`)
- [ ] **1.3** Implement auth system (Clerk or NextAuth)
- [ ] **1.4** Set up Supabase connection + Prisma migrations
- [ ] **1.5** Create API base structure (`packages/api`)
- [ ] **1.6** SSLCommerz integration setup (`services/payment`)

### Week 3-4: Core Features
- [ ] **1.7** Home page + "How It Works" landing page
- [ ] **1.8** Product link submission form (paste Taobao/1688 URL)
- [ ] **1.9** Curated product catalog (30-50 products seeded)
- [ ] **1.10** Quote generation (manual — admin generates, customer sees)
- [ ] **1.11** Order management (create, view, status tracking)
- [ ] **1.12** Admin dashboard — order management, payment verification

### Week 5-6: Frontend & Payment
- [ ] **1.13** Checkout flow (address, shipping method, payment)
- [ ] **1.14** Payment integration (SSLCommerz + bKash buttons)
- [ ] **1.15** Init React Native app (`apps/mobile`)
- [ ] **1.16** Mobile app — home, product, order screens
- [ ] **1.17** Bengali + English language toggle (i18n)
- [ ] **1.18** Shipping cost calculator
- [ ] **1.19** Order tracking page with timeline

### Week 7-8: MVP Launch
- [ ] **1.20** End-to-end testing flow
- [ ] **1.21** Bug fixes & polish
- [ ] **1.22** Deploy to Vercel
- [ ] **1.23** Mobile app build + test flight
- [ ] **1.24** Soft launch 🚀

## Phase 2: Automation & Scale (Weeks 9-16)

- [ ] **2.1** 1688/Taobao API integration (`services/china-api`)
- [ ] **2.2** Auto-quote generation from product links
- [ ] **2.3** Real-time shipping cost calculation
- [ ] **2.4** AI customer support chatbot
- [ ] **2.5** Push notifications for mobile
- [ ] **2.6** F-commerce seller portal
- [ ] **2.7** Bulk order system for B2B
- [ ] **2.8** Social media auto-posting
- [ ] **2.9** Analytics dashboard

## Phase 3: Growth (Weeks 17-24)

- [ ] **3.1** B2B wholesale portal
- [ ] **3.2** Inventory management system
- [ ] **3.3** Affiliate/referral program
- [ ] **3.4** Marketing automation (email, SMS)
- [ ] **3.5** Supplier rating system
- [ ] **3.6** Telegram/Facebook bot ordering

## Phase 4: Expansion (Month 6+)

- [ ] **4.1** BD warehouse for fast-moving items
- [ ] **4.2** Partner API for third-party platforms
- [ ] **4.3** Subscription plans for frequent buyers
- [ ] **4.4** Multi-country sourcing (UAE, USA)
- [ ] **4.5** Private labeling service

---

## Current Sprint Focus

> Set by active work — update as priorities change.

**Current:** Phase 0 — Foundation Setup
**Focus:** Initializing monorepo and core packages
**Blockers:** None
