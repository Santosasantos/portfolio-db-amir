import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar, Building2 } from "lucide-react"

export default async function VolunteeringPage() {
  const supabase = await createClient()

  const { data: volunteering } = await supabase
    .from("volunteering")
    .select("*")
    .order("display_order", { ascending: true })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="VOLUNTEERING"
        subtitle="Community service and volunteer activities demonstrating commitment to social responsibility and community engagement."
        backgroundType="volunteering"
      />

      <main className="flex-1 py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {volunteering?.map((activity) => (
              <Card key={activity.id} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-light rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{activity.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Building2 className="h-4 w-4" />
                        <span>{activity.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {activity.start_date} - {activity.end_date}
                        </span>
                      </div>
                      {activity.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
