import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { CertificationForm } from "@/components/certification-form"

export default async function EditCertification({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/admin/certifications/new")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: certification } = await supabase.from("certifications").select("*").eq("id", id).single()

  if (!certification) {
    redirect("/admin/certifications")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Edit Certification</h1>
        <p className="text-muted-foreground mt-1">Update certification information</p>
      </div>

      <CertificationForm certification={certification} />
    </div>
  )
}
