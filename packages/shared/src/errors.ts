// Custom error classes for BDXpress
// Extends the standard Error with HTTP status codes and contextual metadata

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;
  public readonly context?: Record<string, unknown>;

  constructor(
    message: string,
    statusCode = 500,
    code = "INTERNAL_ERROR",
    context?: Record<string, unknown>,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    this.context = context;

    // Maintain proper stack trace in V8 (Node.js / Chrome)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ErrorCtor = Error as any;
    if (typeof ErrorCtor.captureStackTrace === "function") {
      ErrorCtor.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      success: false,
      error: this.message,
      code: this.code,
      ...(process.env.NODE_ENV === "development" && { stack: this.stack }),
    };
  }
}

// ─── HTTP Error Subclasses ──────────────────────────────────

export class BadRequestError extends AppError {
  constructor(message = "Invalid request", code = "BAD_REQUEST", context?: Record<string, unknown>) {
    super(message, 400, code, context);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication required", code = "UNAUTHORIZED") {
    super(message, 401, code);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Access denied", code = "FORBIDDEN") {
    super(message, 403, code);
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Resource", code = "NOT_FOUND") {
    super(`${resource} not found`, 404, code);
  }
}

export class ConflictError extends AppError {
  constructor(message = "Resource already exists", code = "CONFLICT") {
    super(message, 409, code);
  }
}

export class ValidationError extends AppError {
  public readonly fieldErrors: Array<{ field: string; message: string }>;

  constructor(
    fieldErrors: Array<{ field: string; message: string }>,
    message = "Validation failed",
  ) {
    super(message, 422, "VALIDATION_ERROR", { fieldErrors });
    this.fieldErrors = fieldErrors;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      fieldErrors: this.fieldErrors,
    };
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message = "Too many requests, please try again later") {
    super(message, 429, "RATE_LIMIT_EXCEEDED");
  }
}

// ─── Business Logic Errors ──────────────────────────────────

export class PaymentError extends AppError {
  constructor(message = "Payment processing failed", code = "PAYMENT_ERROR", context?: Record<string, unknown>) {
    super(message, 402, code, context);
  }
}

export class OrderStatusError extends AppError {
  constructor(message = "Invalid order status transition", currentStatus?: string, targetStatus?: string) {
    super(message, 400, "ORDER_STATUS_ERROR", { currentStatus, targetStatus });
  }
}

export class ProductUnavailableError extends AppError {
  constructor(productId: string) {
    super("Product is not available", 400, "PRODUCT_UNAVAILABLE", { productId });
  }
}

export class QuoteExpiredError extends AppError {
  constructor(quoteId: string) {
    super("Quote has expired", 400, "QUOTE_EXPIRED", { quoteId });
  }
}

// ─── API Response Helper ────────────────────────────────────

export interface ApiErrorResponse {
  success: false;
  error: string;
  code: string;
  fieldErrors?: Array<{ field: string; message: string }>;
  stack?: string;
}

export function formatApiError(error: unknown): ApiErrorResponse {
  if (error instanceof ValidationError) {
    return error.toJSON() as ApiErrorResponse;
  }

  if (error instanceof AppError) {
    return error.toJSON() as ApiErrorResponse;
  }

  if (error instanceof Error) {
    return {
      success: false,
      error: process.env.NODE_ENV === "production" ? "Internal server error" : error.message,
      code: "INTERNAL_ERROR",
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    };
  }

  return {
    success: false,
    error: "An unexpected error occurred",
    code: "UNKNOWN_ERROR",
  };
}
