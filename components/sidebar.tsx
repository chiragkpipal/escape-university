"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, GraduationCap, Building2, Users, Bookmark, FileText, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  {
    name: "My Campus",
    href: "/my-campus",
    icon: GraduationCap,
    submenu: [
      { name: "Courses", href: "/my-campus#courses" },
      { name: "Library", href: "/my-campus#library" },
      { name: "Faculty", href: "/my-campus#faculty" },
    ],
  },
  { name: "Campuses", href: "/campuses", icon: Building2 },
  { name: "The Quad", href: "/the-quad", icon: Users },
  { name: "Saved Moments", href: "/saved-moments", icon: Bookmark },
  { name: "Notes", href: "/notes", icon: FileText },
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["My Campus"])

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  return (
    <div className="flex min-h-screen w-60 flex-col bg-sidebar border-r border-border">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6 border-b border-green-800/50">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
          <span className="text-lg font-bold text-green-900">E</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white">Escape</span>
          <span className="text-sm font-bold text-white">University</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.submenu ? (
              <>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between text-white hover:bg-sidebar-accent hover:text-white",
                    pathname.startsWith(item.href) && "bg-sidebar-accent",
                  )}
                  onClick={() => toggleExpand(item.name)}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </span>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", expandedItems.includes(item.name) && "rotate-180")}
                  />
                </Button>
                {expandedItems.includes(item.name) && (
                  <div className="ml-6 mt-1 space-y-1 border-l border-green-800/50 pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-1.5 text-sm text-white hover:text-primary"
                      >
                        • {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2 text-white hover:bg-sidebar-accent hover:text-white",
                    pathname === item.href && "bg-sidebar-accent",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
