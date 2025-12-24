import { VolunteeringForm } from "@/components/volunteering-form"

export default function NewVolunteering() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Volunteering Activity</h1>
        <p className="text-muted-foreground mt-1">Add a new volunteering experience</p>
      </div>

      <VolunteeringForm />
    </div>
  )
}
