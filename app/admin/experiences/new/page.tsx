import { ExperienceForm } from "@/components/experience-form"

export default function NewExperience() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Experience</h1>
        <p className="text-muted-foreground mt-1">Add a new professional experience</p>
      </div>

      <ExperienceForm />
    </div>
  )
}
