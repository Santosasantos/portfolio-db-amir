import { ScholarlyActivityForm } from "@/components/scholarly-activity-form"

export default function NewScholarlyActivity() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Scholarly Activity</h1>
        <p className="text-muted-foreground mt-1">Add a new scholarly activity</p>
      </div>

      <ScholarlyActivityForm />
    </div>
  )
}
