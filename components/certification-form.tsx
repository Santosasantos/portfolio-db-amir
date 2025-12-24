"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

interface CertificationFormProps {
  certification?: any
}

export function CertificationForm({ certification }: CertificationFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget

    const supabase = createClient()

    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      issuer: formData.get("issuer") as string,
      issue_date: formData.get("issue_date") as string,
      credential_url: formData.get("credential_url") as string,
    }

    try {
      if (certification) {
        const { error: updateError } = await supabase.from("certifications").update(data).eq("id", certification.id)
        if (updateError) throw updateError
        toast({
          title: "Success!",
          description: "Certification updated successfully.",
        })
      } else {
        const { error: insertError } = await supabase.from("certifications").insert(data)
        if (insertError) throw insertError
        toast({
          title: "Success!",
          description: "Certification created successfully.",
        })
      }

      router.push("/admin/certifications")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!certification || !confirm("Are you sure you want to delete this certification?")) return

    setLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: deleteError } = await supabase.from("certifications").delete().eq("id", certification.id)
      if (deleteError) throw deleteError

      toast({
        title: "Success!",
        description: "Certification deleted successfully.",
      })

      router.push("/admin/certifications")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Certification Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={certification?.name}
              required
              placeholder="e.g., Data Science Specialization"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="issuer">Issuing Organization</Label>
              <Input
                id="issuer"
                name="issuer"
                defaultValue={certification?.issuer}
                required
                placeholder="e.g., Coursera"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issue_date">Issue Date</Label>
              <Input
                id="issue_date"
                name="issue_date"
                defaultValue={certification?.issue_date}
                required
                placeholder="Jan 2024"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="credential_url">Credential URL (Optional)</Label>
            <Input
              id="credential_url"
              name="credential_url"
              type="url"
              defaultValue={certification?.credential_url}
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : certification ? "Update" : "Create"}
            </Button>

            {certification && (
              <Button type="button" variant="destructive" onClick={handleDelete} disabled={loading}>
                Delete
              </Button>
            )}

            <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
