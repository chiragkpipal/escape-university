import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, GraduationCap, Video, Target, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CampusLandingPage({ params }: { params: { campusId: string } }) {
  const { campusId } = params

  // Campus data (this would typically come from a database)
  const campusData: Record<string, any> = {
    bpo: {
      title: "BPO",
      subtitle: "SUCCESS",
      color: "red",
      professor: "Chris Ocean",
      modules: 9,
      tagline: "Learn BPO from Scratch",
      heroImage: "/images/7b0928cef1-fa8a-4b57-8197-2c19b2173cbc-7d.png",
      videoThumb: "/images/7b357ae21e-b36e-419b-8062-7f9d5df51b1d-7d.png",
      overview: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, felis at faucibus cursus, tortor metus ullamcorper orci, nec bibendum erat lorem at velit. Nulla facilisi. Suspendisse non diam ac magna efficitur aliquet.",
        "Vestibulum fringilla arcu sit amet tellus cursus, eget rhoncus risus sagittis. Sed blandit, libero sit amet tempor rhoncus, justo lacus suscipit mi, nec ultricies purus sapien id est. Ut vitae porttitor odio. Proin nec faucibus enim. Pellentesque at cursus nisi, in pulvinar felis.",
      ],
    },
    ecommerce: {
      title: "ECOMMERCE",
      subtitle: "MASTERY",
      color: "lime",
      professor: "Wilcocks",
      modules: 12,
      tagline: "Master Ecommerce from Zero to Hero",
      heroImage: "/placeholder.svg?height=300&width=1200",
      videoThumb: "/placeholder.svg?height=400&width=600",
      overview: [
        "Learn everything you need to know to build and scale a successful ecommerce business from scratch.",
        "From product research to marketing strategies, you'll master all aspects of online selling.",
      ],
    },
    agency: {
      title: "AGENCY",
      subtitle: "ACCELERATOR",
      color: "purple",
      professor: "Walt",
      modules: 8,
      tagline: "Build Your Agency Empire",
      heroImage: "/placeholder.svg?height=300&width=1200",
      videoThumb: "/placeholder.svg?height=400&width=600",
      overview: [
        "Transform your skills into a thriving agency business with proven strategies and systems.",
        "Learn client acquisition, service delivery, and scaling your agency to six figures and beyond.",
      ],
    },
  }

  const campus = campusData[campusId] || campusData.bpo

  const tabs = ["Why BPO Success", "What You Will Learn", "How it Works", "Faculty", "Student Wins"]

  return (
    <div className="flex h-screen bg-linear-to-br from-black via-black to-green-900">
      <Sidebar />
      {/* Main Content */}
      <div className="overflow-scroll overflow-x-hidden w-full max-w-[1920px] mx-auto">
      
        <main className="overflow-y-auto p-16 pt-10">
        {/* Back Button */}
        <Link href="/campuses" className="inline-block mb-6">
          <ChevronLeft className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>

        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 h-[240px]">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900/50" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${campus.heroImage})` }}
          />
          <div className="relative h-full flex items-center justify-between px-12">
            {/* Left Content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-6xl font-bold text-white">{campus.title}</h1>
                <div className="flex gap-1 mt-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-red-500 transform rotate-45"
                      style={{ marginLeft: i === 0 ? 0 : "-4px" }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-4xl italic text-white font-light">{campus.subtitle}</p>

              <div className="flex items-center gap-6 mt-4 text-white/90">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Professor: {campus.professor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span>{campus.modules} Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>{campus.tagline}</span>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6">
              JOIN NOW
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mb-12 border-b border-border pb-4">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`text-sm font-medium transition-colors ${
                i === 0 ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
          <Button variant="outline" className="ml-auto bg-background border-border text-foreground hover:bg-card">
            Enroll
          </Button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Overview Text */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">BPO Success Overview</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {campus.overview.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <Button className="mt-8 bg-white text-black hover:bg-white/90 font-semibold">Enroll Today</Button>
          </div>

          {/* Right: Video Preview */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-card">
            <Image src={campus.videoThumb || "/placeholder.svg"} alt="Course preview" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors border-4 border-white/40">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional sections would go here (What You'll Learn, etc.) */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-4">
                {/* Placeholder for feature icons */}
              </div>
            </div>
          ))}
        </div>
      </main>
      </div>
    </div>
  )
}
