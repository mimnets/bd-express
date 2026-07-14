# Tech Stack & Tooling

## Core Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Runtime** | Node.js | 22+ | Server-side JavaScript |
| **Language** | TypeScript | 5.x | Type-safe JavaScript |
| **Package Manager** | pnpm | 9+ | Fast, disk-efficient package management |
| **Monorepo** | Turborepo | 2.x | Build system with caching |
| **Web Framework** | Next.js | 15+ (App Router) | React web framework |
| **Mobile** | React Native (Expo) | SDK 52+ | Cross-platform mobile apps |
| **Database** | PostgreSQL | 15+ | Relational database |
| **ORM** | Prisma | 5+ | Type-safe database access |
| **Auth** | Clerk / NextAuth.js | latest | Authentication & user management |
| **Payments** | SSLCommerz | API v2 | Payment gateway (BD) |
| **CSS** | Tailwind CSS | 3.x | Utility-first CSS |
| **UI Components** | shadcn/ui | latest | Accessible React components |
| **State Management** | TanStack Query | 5.x | Server state & caching |
| **Form Validation** | Zod | 3.x | Schema validation |
| **i18n** | next-intl | 3.x | Internationalization (Bengali + English) |
| **API Client** | tRPC (Phase 2) / fetch (Phase 1) | latest | Type-safe API calls |

## AI & Development Tools

| Tool | Purpose | Cost |
|------|---------|------|
| **Claude Code** | Primary AI coding assistant | ~$20/mo |
| **Cursor** | Alternative AI coding IDE | ~$20/mo |
| **GitHub Copilot** | In-editor code completion | Free for OSS / ~$10/mo |
| **v0.dev** | AI UI component generation | Free tier |
| **Claude** (Anthropic) | General AI assistance, architecture | Via Claude Code |
| **OpenAI** | AI chatbot backend, content generation | Pay-per-use (Phase 2+) |

## Infrastructure & Hosting

| Service | Plan | Cost | What It Hosts |
|---------|------|------|---------------|
| **Vercel** | Pro ($20/mo) | ~2,400 BDT/mo | Web app, API routes, preview deploys |
| **Supabase** | Pro ($25/mo) | ~3,000 BDT/mo | PostgreSQL, auth, file storage |
| **Cloudflare** | Free | $0 | CDN, SSL, DNS, DDoS protection |
| **GitHub** | Free | $0 | Code hosting, CI/CD via Actions |
| **Sentry** | Free tier | $0 | Error tracking |
| **Resend** | Free (500/mo) | $0 | Transactional emails |

## External API Integrations

| API | Purpose | Cost | Integration Status |
|-----|---------|------|-------------------|
| **1688 Open Platform** | Product search, detail, order | **FREE** (basic, QPS limited) | Not started |
| **Taobao Open Platform** | Product data | **FREE** (basic) | Not started |
| **SSLCommerz** | Payment processing | ~2%/transaction | Not started |
| **bKash Merchant** | Direct mobile payment | Free setup | Not started |
| **Logistics APIs** | Shipping tracking | Varies | Not started |
| **Facebook/IG Graph API** | Social auto-posting | Free | Phase 2 |

## DevOps & CI/CD

| Tool | Purpose |
|------|---------|
| **GitHub Actions** | CI/CD pipeline |
| **Husky** | Git hooks (pre-commit linting) |
| **lint-staged** | Run linters on staged files |
| **ESLint** | Code linting (TS + React) |
| **Prettier** | Code formatting |
| **Jest + Testing Library** | Unit & integration tests |
| **Playwright** | E2E testing |
| **Dependabot** | Automated dependency updates |

## Mobile App Specific

| Tool | Purpose |
|------|---------|
| **Expo SDK** | Cross-platform mobile development |
| **EAS Build** | Cloud builds for iOS + Android |
| **EAS Submit** | App store submission automation |
| **Expo Notifications** | Push notifications |
| **Stripe Terminal** | (Future) In-person payments |

## Environment Variables

See `.env.example` in the root for the full list of required environment variables.

## Development Scripts

```bash
pnpm dev           # Start all apps in dev mode
pnpm build         # Build all packages
pnpm lint          # Lint all packages
pnpm test          # Run all tests
pnpm format        # Format all code
pnpm db:migrate    # Run database migrations
pnpm db:seed       # Seed database
pnpm type-check    # TypeScript type checking
```
