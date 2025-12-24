import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { SkillForm } from "@/components/skill-form"

export default async function EditSkill({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/skills/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: skill } = await supabase.from("skills").select("*").eq("id", id).single()

  if (!skill) {
    redirect("/admin/skills")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Skill</h1>
        <p className="text-muted-foreground mt-1">Update skill</p>
      </div>

      <SkillForm skill={skill} />
    </div>
  )
}
