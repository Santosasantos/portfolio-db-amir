import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tdhzokzwxtxuzsanobva.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaHpva3p3eHR4dXpzYW5vYnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3OTMwNTksImV4cCI6MjA1MDM2OTA1OX0.c-TJBvg3oNO7sKqBjnSjCGBHICLVxiNGOC4eZlPwTr0"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({
          request,
        })
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
      },
    },
  })

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    // Handle refresh token errors gracefully (invalid/expired tokens)
    // These are expected when users aren't logged in or sessions expired
    const isRefreshTokenError =
      error && ((error as any).code === "refresh_token_not_found" || error.message?.includes("Refresh Token"))

    // Protect admin routes only if user check was successful and not a refresh token error
    if (!isRefreshTokenError && request.nextUrl.pathname.startsWith("/admin") && !user) {
      const url = request.nextUrl.clone()
      url.pathname = "/auth/login"
      return NextResponse.redirect(url)
    }
  } catch (error: unknown) {
    // Silently handle refresh token errors - they're expected for unauthenticated users
    const isRefreshTokenError =
      error &&
      typeof error === "object" &&
      ((error as any).code === "refresh_token_not_found" ||
        (error as Error)?.message?.includes("Refresh Token") ||
        (error as any).__isAuthError)

    // Only log unexpected errors
    if (!isRefreshTokenError) {
      console.error("Unexpected auth error:", error)
    }
  }

  return supabaseResponse
}
