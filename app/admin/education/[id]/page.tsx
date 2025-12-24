import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { EducationForm } from "@/components/education-form"

// In Next.js 15+, params is a Promise that must be awaited
export default async function EditEducation({ params }: { params: Promise<{ id: string }> }) {
  // Await the params object
  const { id } = await params

  if (id === "new") {
    redirect("/admin/education/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: education } = await supabase.from("education").select("*").eq("id", id).single()

  if (!education) {
    redirect("/admin/education")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Education</h1>
        <p className="text-muted-foreground mt-1">Update education record</p>
      </div>

      <EducationForm education={education} />
    </div>
  )
}