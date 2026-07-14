import { createBrowserClient } from "@supabase/ssr";

let supabaseUrl: string | undefined;
let supabaseAnonKey: string | undefined;

function getEnv() {
  if (!supabaseUrl) supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseAnonKey) supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return { url: supabaseUrl, key: supabaseAnonKey };
}

/**
 * Supabase client for Client Components.
 * Lazily initializes — safe to call during SSR/build.
 */
export function createClient() {
  const { url, key } = getEnv();

  if (!url || !key || key === "[YOUR_ANON_KEY]") {
    throw new Error(
      "Supabase environment variables not set. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env file.",
    );
  }

  return createBrowserClient(url, key);
}
