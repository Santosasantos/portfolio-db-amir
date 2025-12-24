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
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src={`/generic-placeholder-graphic.png?height=200&width=300&text=Award+Certificate`}
                        alt={award.title}
                        width={300}
                        height={200}
                        className="object-cover rounded"
                      />
                    </div>

                    <Award className="h-8 w-8 text-primary mb-3" />

                    <h3 className="text-lg font-bold text-foreground mb-2 text-balance">{award.title}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{award.issuer}</p>

                    {award.description && (
                      <p className="text-sm text-muted-foreground mb-4 text-pretty">{award.description}</p>
                    )}
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
