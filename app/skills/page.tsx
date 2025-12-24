import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Laptop, Languages, Award } from "lucide-react"

const categoryIcons = {
  Interpersonal: Users,
  Technical: Laptop,
  Languages: Languages,
}

export default async function SkillsPage() {
  const supabase = await createClient()

  const { data: skills } = await supabase.from("skills").select("*").order("display_order", { ascending: true })

  const { data: certifications } = await supabase
    .from("certifications")
    .select("*")
    .order("display_order", { ascending: true })

  const groupedSkills = skills?.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="SKILLS & COURSES"
        subtitle="Technical expertise, interpersonal abilities, and continuous learning through professional development and certification programs."
        backgroundType="skills"
      />

      <main className="flex-1 py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {/* Skills Categories */}
            {Object.entries(groupedSkills || {}).map(([category, categorySkills]) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons] || Users
              return (
                <section key={category}>
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                    <Icon className="h-6 w-6" />
                    {category}
                  </h2>
                  <div className="grid md:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => (
                      <Card
                        key={skill.id}
                        className="border-l-4 border-primary hover:shadow-lg transition-all hover:-translate-y-1"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center gap-2">
                            <Icon className="h-8 w-8 text-primary" />
                            <h3 className="font-bold text-foreground">{skill.name}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )
            })}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Certifications & Courses
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <Card key={cert.id} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {cert.issuer} • {cert.issue_date}
                            </p>
                          </div>
                          {cert.credential_url && (
                            <a
                              href={cert.credential_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark text-sm font-medium"
                            >
                              View Credential →
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
