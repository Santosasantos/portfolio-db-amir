import { EducationForm } from "@/components/education-form"

export default function NewEducation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Education</h1>
        <p className="text-muted-foreground mt-1">Add a new education record</p>
      </div>

      <EducationForm />
    </div>
  )
}
