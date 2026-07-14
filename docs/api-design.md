# API Design

## Base URL

Development: `http://localhost:3000/api/v1`
Production: `https://bdexpress.com/api/v1`

## Authentication

All API calls (except public endpoints) require a Bearer token:
```
Authorization: Bearer <jwt_token>
```

## Response Format

### Success
```json
{
  "success": true,
  "data": { ... }
}
```

### Error
```json
{
  "success": false,
  "error": "Human-readable error message"
}
```

### Paginated
```json
{
  "success": true,
  "data": {
    "items": [...],
    "total": 100,
    "page": 1,
    "pageSize": 20,
    "totalPages": 5
  }
}
```

## Core Endpoints

### Public
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/v1/products | List products |
| GET | /api/v1/products/:id | Product detail |
| GET | /api/v1/categories | List categories |
| POST | /api/v1/quote | Get quote from product link |
| GET | /api/v1/shipping/estimate | Shipping cost calculator |
| POST | /api/v1/auth/register | Register |
| POST | /api/v1/auth/login | Login |

### Authenticated
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/v1/orders | My orders |
| GET | /api/v1/orders/:id | Order detail |
| POST | /api/v1/orders | Create order |
| POST | /api/v1/orders/:id/pay | Initiate payment |
| GET | /api/v1/orders/:id/track | Order tracking |

### Admin
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/v1/admin/orders | All orders |
| PUT | /api/v1/admin/orders/:id | Update order |
| POST | /api/v1/admin/products | Create product |
| GET | /api/v1/admin/analytics | Dashboard stats |
