import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, Play } from "lucide-react"
import Link from "next/link"

export default function SavedMomentsPage() {
  const moments = [
    {
      title: "CRO Shopify Store",
      module: "How to Set Up Your Store",
      campus: "Ecommerce Campus",
      duration: "27:42",
      thumbnail: "/images/7b23c0065c-6f37-4afd-b91a-4c6a992ac560-7d.png",
      type: "ecommerce",
    },
    {
      title: "Picking a Niche",
      module: "Introduction to Agency",
      campus: "Agency Accelerate Campus",
      duration: "22:12",
      thumbnail: "/images/7b23c0065c-6f37-4afd-b91a-4c6a992ac560-7d.png",
      type: "agency",
    },
    {
      title: "CRO Shopify Store",
      module: "How to Set Up Your Store",
      campus: "Ecommerce Campus",
      duration: "04:21",
      thumbnail: "/images/7b23c0065c-6f37-4afd-b91a-4c6a992ac560-7d.png",
      type: "ecommerce",
    },
  ]

  return (
    <div className="flex h-screen bg-linear-to-br from-black via-black to-green-900">
      <Sidebar />
      <div className="overflow-scroll overflow-x-hidden w-full max-w-[1920px] mx-auto">
        <Header
          centerContent={
            <div>
              <h1 className="text-3xl font-normal mb-4">
                <Search className="inline-block h-8 w-8 mr-2" />
                Saved Lecture Moments
              </h1>
              <div className="text-muted-foreground">
                See all your saved moments from lectures all in one place for you to quickly review
              </div>
            </div>
          }
        />
        <main className="overflow-y-auto px-16 py-8">
          {/* Search and Filter */}
          <div className="flex gap-4 mb-8">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search moments" className="pl-10 bg-card border-border" />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <SlidersHorizontal className="h-4 w-4" />
              Filter by
            </Button>
          </div>

          {/* Moments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...moments, ...moments, ...moments].map((moment, i) => (
              <Link href={`/classroom/${moment.title}`} key={i} className="bg-card rounded-xl border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="relative h-48 bg-secondary">
                  <img
                    src={moment.thumbnail || "/placeholder.svg"}
                    alt={moment.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white">
                      <Play className="h-6 w-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-1 rounded text-sm text-white font-medium">
                    {moment.duration}
                  </div>
                  <div className="absolute top-0 left-0 right-0 p-4">
                    <div className="text-4xl font-bold text-white/20">
                      {moment.type === "ecommerce" ? "ECOMMERCE" : "AGENCY"}
                    </div>
                    <div className="text-lg italic text-white/40">
                      {moment.type === "ecommerce" ? "MASTERY" : "ACCELERATOR"}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white text-lg mb-1">{moment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Module: {moment.module}</p>
                  <Badge className="bg-sidebar-accent text-white">
                    <Building2Icon />
                    {moment.campus}
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

function Building2Icon() {
  return (
    <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  )
}
