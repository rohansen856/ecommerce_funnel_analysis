import type React from "react"
import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  )
}
