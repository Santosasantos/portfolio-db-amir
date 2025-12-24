import { AwardForm } from "@/components/award-form"

export default function NewAward() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Award</h1>
        <p className="text-muted-foreground mt-1">Add a new award or honor</p>
      </div>

      <AwardForm />
    </div>
  )
}
