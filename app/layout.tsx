import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "MD. Amir Hossen | Economist & Researcher",
  description:
    "Portfolio of MD. Amir Hossen - Prospective Graduate Student, Aspiring Economist & Researcher specializing in development economics, applied microeconomics, and labor economics.",
  keywords: ["Economist", "Researcher", "Economics", "Portfolio", "Graduate Student", "Academic", "Publications"],
  authors: [{ name: "MD. Amir Hossen" }],
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
