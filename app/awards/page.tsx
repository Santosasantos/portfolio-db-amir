import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"

export default async function AwardsPage() {
  const supabase = await createClient()

  const { data: awards } = await supabase.from("awards").select("*").order("display_order", { ascending: true })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="HONORS & AWARDS"
        subtitle="Recognition and achievements throughout my academic and professional journey, celebrating excellence in research and scholarship."
        backgroundType="awards"
      />

      <main className="flex-1 py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {awards?.map((award, index) => (
              <Card
                key={award.id}
                className="border-t-4 border-primary hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  {/* Award Image */}
                  <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100">
                    {award.image ? (
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Award className="h-20 w-20 text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Award Details */}
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-lg font-bold text-foreground mb-2 text-balance">{award.title}</h3>
                      <p className="text-sm font-medium text-primary mb-2">{award.issuer}</p>
                      {award.date && (
                        <p className="text-xs text-muted-foreground mb-3">{award.date}</p>
                      )}
                      {award.description && (
                        <p className="text-sm text-muted-foreground mb-4 text-pretty">{award.description}</p>
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
