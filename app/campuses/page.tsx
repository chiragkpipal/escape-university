import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Building2, Search } from "lucide-react"
import Link from "next/link"

export default function CampusesPage() {
  const campuses = [
    {
      title: "Ecommerce Mastery",
      professor: "Wilcocks",
      image: "https://www.figma.com/file/kk4ylJSXf571hGiRen7n7b/image/3d1494c29dbea00939a02e5bd845fb818825cba2",
    },
    {
      title: "Agency Accelerator",
      professor: "Walt",
      image: "https://www.figma.com/file/kk4ylJSXf571hGiRen7n7b/image/b8c7bec03dd06a4e635e628051803aa5017b2f9e",
    },
    {
      title: "BPO Success",
      professor: "Ocean",
      image: "https://www.figma.com/file/kk4ylJSXf571hGiRen7n7b/image/3e2677099e4282d68cc91becb550a083d4d0d771",
    }, 
    {
      title: "Ecommerce Mastery",
      professor: "Wilcocks",
      image: "https://www.figma.com/file/kk4ylJSXf571hGiRen7n7b/image/3d1494c29dbea00939a02e5bd845fb818825cba2",
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
                <Building2 className="inline-block h-8 w-8 mr-2" />
                All Campuses
              </h1>
              <div className="text-muted-foreground">
                Campuses are the courses that you have access to. The campus is the course material, the faculty is the
                mentorship & community
              </div>
            </div>
          }
        />
        <main className="overflow-y-auto px-16 py-8">
          {/* Search */}
          <div className="relative mb-8 max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search Campuses" className="pl-10 bg-card border-border" />
          </div>

          {/* Campus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {campuses.map((campus, i) => (
              <Link href={`/campus/${campus.title}`} key={i} className="bg-card border border-green-900/50 rounded-lg overflow-hidden">
                <div className="w-full object-cover h-64">
                  <img
                    src={campus.image || "/placeholder.svg"}
                    alt={campus.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl text-white mb-2">{campus.title}</h3>
                  <p className="text-sm text-muted-foreground">Professor: {campus.professor}</p>
                </div>
              </Link>
            ))}

           
          </div>
        </main>
      </div>
    </div>
  )
}
