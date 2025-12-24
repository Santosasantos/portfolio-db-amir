import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AwardForm } from "@/components/award-form"

export default async function EditAward({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/awards/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: award } = await supabase.from("awards").select("*").eq("id", id).single()

  if (!award) {
    redirect("/admin/awards")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Award</h1>
        <p className="text-muted-foreground mt-1">Update award information</p>
      </div>

      <AwardForm award={award} />
    </div>
  )
}
