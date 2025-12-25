"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"
import Image from "next/image"

interface LinkPreviewProps {
  url: string
  title?: string
  profileImage?: string
}

interface LinkMetadata {
  title?: string
  description?: string
  image?: string
  siteName?: string
}

export function LinkPreview({ url, title, profileImage }: LinkPreviewProps) {
  const [metadata, setMetadata] = useState<LinkMetadata | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMetadata = async () => {
      if (!url) return

      try {
        setLoading(true)
        setError(false)
        
        // Use a link preview API or fetch metadata
        // For now, we'll extract basic info from the URL
        const urlObj = new URL(url)
        const domain = urlObj.hostname.replace("www.", "")
        
        // Try to fetch Open Graph metadata via a proxy or API
        // For client-side, we'll use a simple approach
        const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
        
        if (response.ok) {
          const data = await response.json()
          setMetadata(data)
        } else {
          // Fallback: use domain and URL as metadata
          setMetadata({
            title: title || domain,
            description: `Visit ${domain} to read the full article`,
            siteName: domain,
          })
        }
      } catch (err) {
        // Fallback on error
        const urlObj = new URL(url)
        const domain = urlObj.hostname.replace("www.", "")
        setMetadata({
          title: title || domain,
          description: `Visit ${domain} to read the full article`,
          siteName: domain,
        })
        setError(false) // Don't show error, just use fallback
      } finally {
        setLoading(false)
      }
    }

    fetchMetadata()
  }, [url, title])

  if (loading) {
    return (
      <Card className="border border-gray-200 hover:border-primary/30 transition-all">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Default professional image - a clean, minimal academic/research themed image
  const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23036445;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23028a5e;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Cpath d='M100 100 L150 80 L200 100 L250 80 L300 100' stroke='white' stroke-width='3' fill='none' opacity='0.3'/%3E%3Ccircle cx='200' cy='100' r='30' fill='white' opacity='0.2'/%3E%3Ctext x='200' y='140' font-family='Arial' font-size='16' fill='white' text-anchor='middle' opacity='0.8'%3EResearch Article%3C/text%3E%3C/svg%3E"

  return (
    <Card className="border border-gray-200 hover:border-primary/30 transition-all overflow-hidden group">
      <CardContent className="p-0">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-48 h-32 md:h-auto flex-shrink-0 bg-gradient-to-br from-primary/10 to-primary/5">
              {metadata?.image ? (
                <Image
                  src={metadata.image}
                  alt={metadata.title || "Link preview"}
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src={defaultImage}
                  alt="Default article preview"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex-1 p-4 space-y-2">
              {metadata?.siteName && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {profileImage ? (
                    <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={profileImage}
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <Globe className="h-3 w-3" />
                  )}
                  <span>{metadata.siteName}</span>
                </div>
              )}
              <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {metadata?.title || title || "View Article"}
              </h4>
              {metadata?.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {metadata.description}
                </p>
              )}
              <div className="flex items-center gap-2 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary-dark hover:bg-primary/5 px-0 font-medium"
                >
                  Read Article
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </a>
      </CardContent>
    </Card>
  )
}

