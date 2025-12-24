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

interface PublicationFormProps {
  publication?: any
}

export function PublicationForm({ publication }: PublicationFormProps) {
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
    const keywords = (formData.get("keywords") as string)
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k)

    const data = {
      title: formData.get("title") as string,
      authors: formData.get("authors") as string,
      journal: formData.get("journal") as string,
      publication_date: formData.get("publication_date") as string,
      status: formData.get("status") as string,
      category: formData.get("category") as string,
      abstract: formData.get("abstract") as string,
      keywords,
      url: formData.get("url") as string,
    }

    try {
      if (publication) {
        const { error: updateError } = await supabase.from("publications").update(data).eq("id", publication.id)
        if (updateError) throw updateError
        toast({
          title: "Success!",
          description: "Publication updated successfully.",
        })
      } else {
        const { error: insertError } = await supabase.from("publications").insert(data)
        if (insertError) throw insertError
        toast({
          title: "Success!",
          description: "Publication created successfully.",
        })
      }

      router.push("/admin/publications")
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!publication || !confirm("Are you sure you want to delete this publication?")) return

    setLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: deleteError } = await supabase.from("publications").delete().eq("id", publication.id)
      if (deleteError) throw deleteError

      toast({
        title: "Success!",
        description: "Publication deleted successfully.",
      })

      router.push("/admin/publications")
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
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={publication?.title} required placeholder="Publication title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="authors">Authors</Label>
            <Input
              id="authors"
              name="authors"
              defaultValue={publication?.authors}
              required
              placeholder="Author 1, Author 2, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="journal">Journal/Conference</Label>
              <Input id="journal" name="journal" defaultValue={publication?.journal} placeholder="Journal name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="publication_date">Publication Date</Label>
              <Input
                id="publication_date"
                name="publication_date"
                defaultValue={publication?.publication_date}
                placeholder="Jun 2025"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                name="status"
                defaultValue={publication?.status || "Published"}
                placeholder="Published, Under Review, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                defaultValue={publication?.category || "Academic Publication"}
                placeholder="Academic Publication, Working Paper, etc."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="abstract">Abstract</Label>
            <Textarea
              id="abstract"
              name="abstract"
              defaultValue={publication?.abstract}
              rows={6}
              placeholder="Publication abstract"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords (comma-separated)</Label>
            <Input
              id="keywords"
              name="keywords"
              defaultValue={publication?.keywords?.join(", ")}
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" name="url" type="url" defaultValue={publication?.url} placeholder="Link to publication" />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : publication ? "Update" : "Create"}
            </Button>

            {publication && (
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
