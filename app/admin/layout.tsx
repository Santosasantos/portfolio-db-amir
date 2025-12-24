import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-muted">
      <AdminSidebar />
      <main className="flex-1 pt-20 md:pt-8 md:ml-64 p-4 sm:p-6 lg:p-8 w-full overflow-y-auto">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
