# AI Coding Rules & Conventions

> Rules that all AI agents must follow when working on this project.

## General Rules

1. **Write TypeScript** — No JavaScript files. `any` type only as last resort.
2. **Document as you code** — Update relevant `.md` files when adding features.
3. **Type everything** — Every function needs typed params and return types.
4. **No hardcoded secrets** — Everything through `.env` or `process.env`.
5. **Small commits** — One logical change per commit. Descriptive messages.

## Project Conventions

### Naming
- Files: `kebab-case.ts` (e.g., `create-order.ts`)
- Components: `PascalCase.tsx` (e.g., `OrderCard.tsx`)
- Functions: `camelCase()` (e.g., `createOrder()`)
- Types/Interfaces: `PascalCase` prefixed with `I` for interfaces (e.g., `IOrder`)
- Enums: `PascalCase` (e.g., `OrderStatus`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)
- Database tables: `snake_case` (e.g., `order_items`)
- Database columns: `snake_case` with timestamps (e.g., `created_at`)

### File Organization
- One component per file
- One export per file (default export preferred)
- Tests co-located: `ComponentName.test.tsx` next to `ComponentName.tsx`
- API routes in `app/api/` with clear naming

### React Components
- Use functional components with hooks
- Server components by default (Next.js App Router)
- Client components only when needed (`'use client'`)
- Props defined as TypeScript interface in same file
- Use Tailwind for styling (utility-first)

### API Design
- RESTful by default
- Use tRPC for type-safe client-server communication (when set up)
- All API routes under `/api/v1/`
- Consistent response format:
  ```ts
  { success: boolean; data?: T; error?: string; }
  ```

### Database
- Prisma for schema management and queries
- All migrations committed to `packages/database/prisma/migrations/`
- Use soft deletes (`deleted_at` column) instead of hard deletes
- Always include `created_at`, `updated_at` timestamps

### Error Handling
- Custom error classes extending `AppError`
- Global error boundary in web app
- Sentry for error tracking (when configured)
- Graceful degradation for API failures

## Development Workflow

1. Pick task from `.ai/TASKS.md`
2. Create branch: `feature/description` or `fix/description`
3. Implement changes
4. Update tests
5. Update `.ai/MEMORY.md` with decisions
6. Update `.ai/TASKS.md` mark complete
7. Create PR

## AI Agent Behavior

1. **Before coding:** Read `.ai/CONTEXT.md`, `.ai/MEMORY.md`, `.ai/TASKS.md`
2. **During coding:** Follow rules in this file
3. **After coding:** Update docs, memory, tasks
4. **When stuck:** Ask the user. Don't guess.
5. **When creating new files:** Follow naming conventions above
6. **When fixing bugs:** Add test case first, then fix

## Performance Rules
- Lazy load images and components
- Use Next.js `next/image` for all images
- Optimize bundle size (no `lodash` — use native methods)
- API responses under 100ms for 95th percentile
- Mobile app under 60fps scrolling

## Security Rules
- No SQL injection — always use Prisma parameterized queries
- No XSS — sanitize all user input
- CSRF protection enabled
- Rate limiting on all API routes
- HTTPS enforced everywhere
- JWT tokens with short expiry + refresh tokens
