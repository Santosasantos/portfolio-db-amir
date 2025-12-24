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

interface AwardFormProps {
  award?: any
}

export function AwardForm({ award }: AwardFormProps) {
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
      title: formData.get("title") as string,
      issuer: formData.get("issuer") as string,
      date: formData.get("date") as string,
      description: formData.get("description") as string,
      certificate_url: formData.get("certificate_url") as string,
    }

    try {
      if (award) {
        const { error: updateError } = await supabase.from("awards").update(data).eq("id", award.id)
        if (updateError) throw updateError
        toast({
          title: "Success!",
          description: "Award updated successfully.",
        })
      } else {
        const { error: insertError } = await supabase.from("awards").insert(data)
        if (insertError) throw insertError
        toast({
          title: "Success!",
          description: "Award created successfully.",
        })
      }

      router.push("/admin/awards")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!award || !confirm("Are you sure you want to delete this award?")) return

    setLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: deleteError } = await supabase.from("awards").delete().eq("id", award.id)
      if (deleteError) throw deleteError

      toast({
        title: "Success!",
        description: "Award deleted successfully.",
      })

      router.push("/admin/awards")
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
            <Label htmlFor="title">Award Title</Label>
            <Input id="title" name="title" defaultValue={award?.title} required placeholder="e.g., Runners Up" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="issuer">Issuer/Organization</Label>
              <Input id="issuer" name="issuer" defaultValue={award?.issuer} required placeholder="Organization name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" defaultValue={award?.date} required placeholder="2025" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={award?.description}
              rows={4}
              placeholder="Description of the award"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="certificate_url">Certificate URL (Optional)</Label>
            <Input
              id="certificate_url"
              name="certificate_url"
              type="url"
              defaultValue={award?.certificate_url}
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : award ? "Update" : "Create"}
            </Button>

            {award && (
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
