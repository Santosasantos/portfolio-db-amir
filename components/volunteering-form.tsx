"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

interface VolunteeringFormProps {
  volunteering?: any
}

export function VolunteeringForm({ volunteering }: VolunteeringFormProps) {
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
      role: formData.get("role") as string,
      organization: formData.get("organization") as string,
      start_date: formData.get("start_date") as string,
      end_date: formData.get("end_date") as string,
      description: formData.get("description") as string,
    }

    try {
      if (volunteering) {
        const { error: updateError } = await supabase.from("volunteering").update(data).eq("id", volunteering.id)
        if (updateError) throw updateError
        toast({
          title: "Success!",
          description: "Volunteering activity updated successfully.",
        })
      } else {
        const { error: insertError } = await supabase.from("volunteering").insert(data)
        if (insertError) throw insertError
        toast({
          title: "Success!",
          description: "Volunteering activity created successfully.",
        })
      }

      router.push("/admin/volunteering")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!volunteering || !confirm("Are you sure you want to delete this volunteering activity?")) return

    setLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: deleteError } = await supabase.from("volunteering").delete().eq("id", volunteering.id)
      if (deleteError) throw deleteError

      toast({
        title: "Success!",
        description: "Volunteering activity deleted successfully.",
      })

      router.push("/admin/volunteering")
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" defaultValue={volunteering?.role} required placeholder="e.g., Volunteer" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                name="organization"
                defaultValue={volunteering?.organization}
                required
                placeholder="Organization name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start_date">Start Date</Label>
              <Input
                id="start_date"
                name="start_date"
                defaultValue={volunteering?.start_date}
                required
                placeholder="Jan 2023"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="end_date">End Date</Label>
              <Input
                id="end_date"
                name="end_date"
                defaultValue={volunteering?.end_date}
                placeholder="Dec 2023 or Present"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={volunteering?.description}
              rows={4}
              placeholder="Describe your volunteering activities"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : volunteering ? "Update" : "Create"}
            </Button>

            {volunteering && (
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
