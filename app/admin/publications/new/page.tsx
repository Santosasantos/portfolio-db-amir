import { PublicationForm } from "@/components/publication-form"

export default function NewPublication() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Publication</h1>
        <p className="text-muted-foreground mt-1">Add a new publication record</p>
      </div>

      <PublicationForm />
    </div>
  )
}
