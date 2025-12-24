import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Briefcase, Award, Lightbulb, Heart, FileText } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Get counts for each section
  const [
    { count: educationCount },
    { count: experiencesCount },
    { count: publicationsCount },
    { count: skillsCount },
    { count: awardsCount },
    { count: volunteeringCount },
    { count: certificationsCount },
  ] = await Promise.all([
    supabase.from("education").select("*", { count: "exact", head: true }),
    supabase.from("experiences").select("*", { count: "exact", head: true }),
    supabase.from("publications").select("*", { count: "exact", head: true }),
    supabase.from("skills").select("*", { count: "exact", head: true }),
    supabase.from("awards").select("*", { count: "exact", head: true }),
    supabase.from("volunteering").select("*", { count: "exact", head: true }),
    supabase.from("certifications").select("*", { count: "exact", head: true }),
  ])

  const sections = [
    {
      name: "Education",
      count: educationCount || 0,
      icon: GraduationCap,
      href: "/admin/education",
      color: "bg-blue-500",
    },
    {
      name: "Experiences",
      count: experiencesCount || 0,
      icon: Briefcase,
      href: "/admin/experiences",
      color: "bg-purple-500",
    },
    {
      name: "Publications",
      count: publicationsCount || 0,
      icon: BookOpen,
      href: "/admin/publications",
      color: "bg-green-500",
    },
    { name: "Skills", count: skillsCount || 0, icon: Lightbulb, href: "/admin/skills", color: "bg-yellow-500" },
    { name: "Awards", count: awardsCount || 0, icon: Award, href: "/admin/awards", color: "bg-red-500" },
    {
      name: "Volunteering",
      count: volunteeringCount || 0,
      icon: Heart,
      href: "/admin/volunteering",
      color: "bg-pink-500",
    },
    {
      name: "Certifications",
      count: certificationsCount || 0,
      icon: FileText,
      href: "/admin/certifications",
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-primary">Portfolio Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage all sections of your portfolio from one place</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Link key={section.name} href={section.href}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-primary">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{section.name}</CardTitle>
                  <div className={`p-2 rounded-lg ${section.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{section.count}</div>
                  <p className="text-xs text-muted-foreground mt-1">Total {section.name.toLowerCase()}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
