import { SkillForm } from "@/components/skill-form"

export default function NewSkill() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Skill</h1>
        <p className="text-muted-foreground mt-1">Add a new skill</p>
      </div>

      <SkillForm />
    </div>
  )
}
