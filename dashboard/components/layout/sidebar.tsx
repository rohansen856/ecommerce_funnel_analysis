"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { BarChart3, Users, TrendingUp, MessageSquare, Settings, Home, Filter, Menu } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Funnel Analysis",
    href: "/dashboard/funnel",
    icon: Filter,
  },
  {
    name: "User Behavior",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Sentiment Analysis",
    href: "/dashboard/sentiment",
    icon: MessageSquare,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
]

function SidebarContent() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">Funnel Analytics</span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-3", isActive && "bg-blue-100 text-blue-700 hover:bg-blue-100")}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
      <div className="border-t p-3">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}

export function Sidebar() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="flex h-full w-64 flex-col bg-gray-50 border-r">
      <SidebarContent />
    </div>
  )
}
