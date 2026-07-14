# Deployment Guide

## Architecture Overview

```
Frontend → Vercel (Next.js)
Database → Supabase (PostgreSQL)
Auth     → Clerk / NextAuth
Storage  → Cloudflare R2
CDN      → Cloudflare
```

## Prerequisites

1. Node.js 22+
2. pnpm 9+
3. Supabase account
4. Vercel account
5. Cloudflare account
6. SSLCommerz merchant account

## Environment Setup

```bash
cp .env.example .env.local
# Fill in all required values
```

## Local Development

```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm db:generate

# Run database migrations
pnpm db:migrate

# Seed sample data
pnpm db:seed

# Start all apps
pnpm dev
```

## Deployment

### Web (Vercel)
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
```

### Database (Supabase)
Migrations are run automatically via Prisma in CI/CD.

### Mobile (Expo EAS)
```bash
cd apps/mobile
eas build --platform all
eas submit --platform ios
eas submit --platform android
```

## CI/CD Pipeline (GitHub Actions)

On push to `main`:
1. Lint all packages
2. Run type checking
3. Run tests
4. Deploy web to Vercel (preview on PR, production on main)
5. Build mobile apps (manual release)

## Monitoring

- Errors: Sentry
- Performance: Vercel Analytics
- Uptime: Better Uptime
- Logs: Supabase Logs
