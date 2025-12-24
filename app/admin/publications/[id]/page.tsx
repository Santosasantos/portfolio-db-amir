import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { PublicationForm } from "@/components/publication-form"

export default async function EditPublication({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/publications/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: publication } = await supabase.from("publications").select("*").eq("id", id).single()

  if (!publication) {
    redirect("/admin/publications")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Publication</h1>
        <p className="text-muted-foreground mt-1">Update publication record</p>
      </div>

      <PublicationForm publication={publication} />
    </div>
  )
}
