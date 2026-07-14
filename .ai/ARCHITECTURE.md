# System Architecture

## High-Level Architecture

```
Client Layer                  API Layer                  Service Layer              External
┌─────────────────┐          ┌─────────────────┐        ┌──────────────────┐       ┌────────────┐
│ Next.js Web App │          │ Next.js API      │        │ Payment Service  │──────▶│ SSLCommerz │
│ (Vercel)        │◄────────▶│ Routes / tRPC    │        └──────────────────┘       └────────────┘
├─────────────────┤          │                  │        ┌──────────────────┐       ┌────────────┐
│ React Native    │          │ Authentication   │        │ China API Svc    │──────▶│ 1688/Taobao│
│ (Expo)          │◄────────▶│ (NextAuth/Clerk) │        └──────────────────┘       └────────────┘
├─────────────────┤          └─────────────────┘        ┌──────────────────┐       ┌────────────┐
│ Admin Dashboard │                                     │ Tracking Service │──────▶│ Logistics  │
│ (Next.js)       │                                     └──────────────────┘       │ APIs       │
└─────────────────┘                                     ┌──────────────────┐       └────────────┘
                                                         │ AI Service        │
                             Data Layer                  │ (Chatbot/Auto)   │
                             ┌─────────────────┐        └──────────────────┘
                             │ PostgreSQL       │
                             │ (Supabase)       │
                             ├─────────────────┤
                             │ Redis (Upstash)  │
                             ├─────────────────┤
                             │ Object Storage   │
                             │ (R2 / Supabase)  │
                             └─────────────────┘
```

## Data Flow: Order Placement

```
1. User submits Taobao/1688 link → web/mobile form
2. API receives link → `services/china-api` fetches product data
3. Data stored in `products` table (cached)
4. Quote generated → stored in `orders` with status="quoted"
5. User reviews → confirms → payment initialized
6. SSLCommerz handles payment → webhook updates order status
7. Order status = "paid" → notification to China team
8. China team purchases, receives, QCs → updates status via admin
9. Shipping arranged → tracking number stored
10. Customs clearance → status updates
11. Last-mile delivery → "delivered"
12. Post-delivery feedback request
```

## Key Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Monorepo** | Turborepo + pnpm | Shared types, one build system, faster CI |
| **API Layer** | Next.js API Routes | Co-located with web app, no separate server needed initially |
| **Type Safety** | tRPC (Phase 2) or REST (Phase 1) | REST is simpler for MVP; tRPC adds type safety later |
| **State Management** | React Query / TanStack Query | Server state management, caching, optimistic updates |
| **Form Validation** | Zod | Runtime validation shared between client and server |
| **Internationalization** | next-intl | Bengali + English, good Next.js App Router support |
| **Component Library** | shadcn/ui + Tailwind | Accessible, customizable, AI-friendly code patterns |

## Database Schema (Core Entities)

See `packages/database/prisma/schema.prisma` for the full schema.

Core tables:
- `users` — Customers, admins, sellers
- `products` — Curated products + cached Taobao/1688 products
- `categories` — Product categories
- `orders` — Customer orders
- `order_items` — Individual line items within an order
- `payments` — Payment transactions
- `shipments` — Shipping tracking
- `addresses` — User addresses
- `quotes` — Price quotes generated from links
- `reviews` — Product/customer reviews

## Security Architecture

- HTTPS enforced at Cloudflare level
- JWT auth with short expiry + refresh tokens
- API rate limiting (Vercel WAF + custom middleware)
- SQL injection prevented by Prisma parameterized queries
- Payment data never touches our servers (SSLCommerz handles PCI DSS)
- Row Level Security (RLS) on Supabase tables
- Proper CORS configuration
- Input validation via Zod on all API endpoints

## Scaling Strategy

### Phase 1 (MVP): 100-500 orders/month
- Single Vercel Pro instance
- Supabase Pro (8GB DB, enough for 10K+ products)
- No caching needed

### Phase 2: 500-2000 orders/month
- Add Redis for caching
- CDN optimization (Cloudflare)
- Database indexing optimization

### Phase 3: 2000+ orders/month
- Horizontal scaling
- Read replicas for DB
- Background job queue (BullMQ)
- Micro-frontends for admin dashboard

## Monitoring & Observability

- **Errors:** Sentry
- **Performance:** Vercel Analytics + Speed Insights
- **Uptime:** Better Uptime / Checkly
- **Logs:** Supabase logs + custom logging
- **Business Metrics:** Custom analytics dashboard
