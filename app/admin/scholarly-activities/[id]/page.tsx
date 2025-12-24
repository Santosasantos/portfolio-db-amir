import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ScholarlyActivityForm } from "@/components/scholarly-activity-form"

export default async function EditScholarlyActivity({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/scholarly-activities/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: activity } = await supabase.from("scholarly_activities").select("*").eq("id", id).single()

  if (!activity) {
    redirect("/admin/scholarly-activities")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Scholarly Activity</h1>
        <p className="text-muted-foreground mt-1">Update scholarly activity</p>
      </div>

      <ScholarlyActivityForm activity={activity} />
    </div>
  )
}
