import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { paths } = body

    // Revalidate the specified paths
    if (Array.isArray(paths)) {
      paths.forEach((path: string) => {
        revalidatePath(path, "page")
      })
    } else if (typeof paths === "string") {
      revalidatePath(paths, "page")
    } else {
      // Default: revalidate common pages that show publications
      revalidatePath("/", "page")
      revalidatePath("/publications", "page")
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: paths || ["/", "/publications"]
    })
  } catch (err) {
    console.error("Revalidation error:", err)
    return NextResponse.json({ 
      error: "Error revalidating",
      details: err instanceof Error ? err.message : "Unknown error"
    }, { status: 500 })
  }
}

