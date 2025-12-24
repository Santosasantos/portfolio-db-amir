import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tdhzokzwxtxuzsanobva.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaHpva3p3eHR4dXpzYW5vYnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3OTMwNTksImV4cCI6MjA1MDM2OTA1OX0.c-TJBvg3oNO7sKqBjnSjCGBHICLVxiNGOC4eZlPwTr0"

let clientInstance: ReturnType<typeof createBrowserClient> | null = null

export function createClient() {
  // Return existing instance if available (singleton pattern)
  if (clientInstance) {
    return clientInstance
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  // Create client with proper authentication
  clientInstance = createBrowserClient(supabaseUrl, supabaseAnonKey)

  return clientInstance
}
