import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ExperienceForm } from "@/components/experience-form"

export default async function EditExperience({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params

  if (id === "new") {
    redirect("/admin/experiences/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: experience } = await supabase.from("experiences").select("*").eq("id", id).single()

  if (!experience) {
    redirect("/admin/experiences")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Experience</h1>
        <p className="text-muted-foreground mt-1">Update professional experience</p>
      </div>

      <ExperienceForm experience={experience} />
    </div>
  )
}
