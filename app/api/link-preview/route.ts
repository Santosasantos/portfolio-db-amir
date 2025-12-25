import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 })
  }

  try {
    // Fetch the URL to extract metadata
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch URL")
    }

    const html = await response.text()

    // Extract Open Graph and meta tags
    const titleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i) ||
                      html.match(/<title>([^<]+)<\/title>/i)
    const descriptionMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i) ||
                            html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)
    const imageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)
    const siteNameMatch = html.match(/<meta\s+property=["']og:site_name["']\s+content=["']([^"']+)["']/i)

    const urlObj = new URL(url)
    const domain = urlObj.hostname.replace("www.", "")

    return NextResponse.json({
      title: titleMatch ? titleMatch[1].trim() : domain,
      description: descriptionMatch ? descriptionMatch[1].trim() : `Visit ${domain} to read the full article`,
      image: imageMatch ? imageMatch[1].trim() : undefined,
      siteName: siteNameMatch ? siteNameMatch[1].trim() : domain,
    })
  } catch (error) {
    // Fallback on error
    const urlObj = new URL(url)
    const domain = urlObj.hostname.replace("www.", "")
    
    return NextResponse.json({
      title: domain,
      description: `Visit ${domain} to read the full article`,
      siteName: domain,
    })
  }
}

