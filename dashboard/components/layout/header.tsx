"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw, Download, Calendar } from "lucide-react"
import { RealTimeStatus } from "./real-time-status"

interface HeaderProps {
  title: string
  subtitle?: string
  onRefresh?: () => void
  onExport?: () => void
  showDatePicker?: boolean
}

export function Header({ title, subtitle, onRefresh, onExport, showDatePicker }: HeaderProps) {
  return (
    <div className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex-1 min-w-0 ml-0 md:ml-0">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">{title}</h1>
        {subtitle && <p className="text-xs md:text-sm text-gray-600 truncate">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <div className="hidden md:block">
          <RealTimeStatus />
        </div>
        {showDatePicker && (
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="hidden lg:inline">Last 30 days</span>
          </Button>
        )}
        {onRefresh && (
          <Button variant="outline" size="sm" onClick={onRefresh}>
            <RefreshCw className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Refresh</span>
          </Button>
        )}
        {onExport && (
          <Button variant="outline" size="sm" onClick={onExport}>
            <Download className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Export</span>
          </Button>
        )}
      </div>
    </div>
  )
}
