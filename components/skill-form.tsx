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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface SkillFormProps {
  skill?: any
}

export function SkillForm({ skill }: SkillFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [category, setCategory] = useState(skill?.category || "Interpersonal")
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
      category,
      proficiency: formData.get("proficiency") as string,
      icon: formData.get("icon") as string,
    }

    try {
      if (skill) {
        const { error: updateError } = await supabase.from("skills").update(data).eq("id", skill.id)
        if (updateError) throw updateError
        toast({
          title: "Success!",
          description: "Skill updated successfully.",
        })
      } else {
        const { error: insertError } = await supabase.from("skills").insert(data)
        if (insertError) throw insertError
        toast({
          title: "Success!",
          description: "Skill created successfully.",
        })
      }

      router.push("/admin/skills")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!skill || !confirm("Are you sure you want to delete this skill?")) return

    setLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: deleteError } = await supabase.from("skills").delete().eq("id", skill.id)
      if (deleteError) throw deleteError

      toast({
        title: "Success!",
        description: "Skill deleted successfully.",
      })

      router.push("/admin/skills")
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
            <Label htmlFor="name">Skill Name</Label>
            <Input id="name" name="name" defaultValue={skill?.name} required placeholder="e.g., Work Ethics" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Interpersonal">Interpersonal</SelectItem>
                <SelectItem value="Technical">Technical</SelectItem>
                <SelectItem value="Languages">Languages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="proficiency">Proficiency</Label>
            <Input
              id="proficiency"
              name="proficiency"
              defaultValue={skill?.proficiency || "Advanced"}
              placeholder="e.g., Advanced, Intermediate, Native"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon">Icon (Optional)</Label>
            <Input id="icon" name="icon" defaultValue={skill?.icon} placeholder="Icon name or emoji" />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : skill ? "Update" : "Create"}
            </Button>

            {skill && (
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
