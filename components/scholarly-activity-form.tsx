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

interface ScholarlyActivityFormProps {
  activity?: any
}

export function ScholarlyActivityForm({ activity }: ScholarlyActivityFormProps) {
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
      type: formData.get("type") as string,
      organization: formData.get("organization") as string,
      date: formData.get("date") as string,
      description: formData.get("description") as string,
    }

    try {
      if (activity) {
        const { error: updateError } = await supabase.from("scholarly_activities").update(data).eq("id", activity.id)
        if (updateError) throw updateError
        toast({
          title: "Success!",
          description: "Scholarly activity updated successfully.",
        })
      } else {
        const { error: insertError } = await supabase.from("scholarly_activities").insert(data)
        if (insertError) throw insertError
        toast({
          title: "Success!",
          description: "Scholarly activity created successfully.",
        })
      }

      router.push("/admin/scholarly-activities")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!activity || !confirm("Are you sure you want to delete this scholarly activity?")) return

    setLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: deleteError } = await supabase.from("scholarly_activities").delete().eq("id", activity.id)
      if (deleteError) throw deleteError

      toast({
        title: "Success!",
        description: "Scholarly activity deleted successfully.",
      })

      router.push("/admin/scholarly-activities")
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
            <Label htmlFor="title">Activity Title</Label>
            <Input
              id="title"
              name="title"
              defaultValue={activity?.title}
              required
              placeholder="e.g., Conference Presentation"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                name="type"
                defaultValue={activity?.type}
                required
                placeholder="e.g., Conference, Workshop, Seminar"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" defaultValue={activity?.date} required placeholder="Jan 2025" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization (Optional)</Label>
            <Input
              id="organization"
              name="organization"
              defaultValue={activity?.organization}
              placeholder="Organization name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={activity?.description}
              rows={4}
              placeholder="Describe the activity"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : activity ? "Update" : "Create"}
            </Button>

            {activity && (
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
