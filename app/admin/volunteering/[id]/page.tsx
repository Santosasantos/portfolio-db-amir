import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { VolunteeringForm } from "@/components/volunteering-form"

export default async function EditVolunteering({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/volunteering/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: volunteering } = await supabase.from("volunteering").select("*").eq("id", id).single()

  if (!volunteering) {
    redirect("/admin/volunteering")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Volunteering Activity</h1>
        <p className="text-muted-foreground mt-1">Update volunteering experience</p>
      </div>

      <VolunteeringForm volunteering={volunteering} />
    </div>
  )
}
