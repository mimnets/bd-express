import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client for Server Components and API routes.
 * Reads auth session from cookies automatically.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setAll(cookiesToSet: any) {
          try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            for (const { name, value, options } of cookiesToSet as any[]) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Can be ignored in Server Components (read-only)
          }
        },
      },
    },
  );
}
