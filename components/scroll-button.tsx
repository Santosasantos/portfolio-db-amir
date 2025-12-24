"use client"

import type React from "react"

interface ScrollButtonProps {
  targetId: string
  children: React.ReactNode
}

export function ScrollButton({ targetId, children }: ScrollButtonProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a href={`#${targetId}`} onClick={handleScroll}>
      {children}
    </a>
  )
}
