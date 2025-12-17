import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ArrowLeft, Bookmark, Eye, Download } from "lucide-react"
import Link from "next/link"
import { Check } from "lucide-react"

export default function ClassroomPage({
  params,
}: {
  params: { courseId: string }
}) {
  const modules = [
    { title: "This is a video", completed: true },
    { title: "This is a video", completed: false },
    { title: "This is a video", completed: false },
    { title: "This is a video", completed: false },
  ]

  const resources = [
    {
      title: "This is a PDF with homework",
      date: "2025/11/08",
    },
    {
      title: "This is a PDF with homework",
      date: "2025/11/08",
    },
  ]

  return (
    <div className="flex h-screen bg-linear-to-br from-black via-black to-green-900">
      <Sidebar />
      {/* Main Content */}
      <div className="overflow-scroll overflow-x-hidden w-full max-w-[1920px] mx-auto">
        <Header
          leftContent={
            <div className="flex items-center gap-3">
              <Link href="/my-campus">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a3a1f]">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">BPO Classroom</h1>
            </div>
          }
        />
        <main className="overflow-y-auto p-16 pt-0">
          <div className="grid grid-cols-12 gap-6 max-w-[1800px] mx-auto">
            {/* Lesson Index - col-4 */}
            <div className="col-span-3 border-r border-[#1a3a1f] pr-6">
              <div className="p-6 rounded-lg">
                <h2 className="text-lg font-semibold text-white mb-2">Intro to Ecommerce</h2>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-2 flex-1 bg-[#2a3a2f] rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-[#a3e635]" />
                  </div>
                  <span className="text-sm text-gray-400">60%</span>
                </div>

                <div className="space-y-1">
                  {modules.map((module, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-left hover:bg-[#162a1a] transition-colors ${
                        index === 0 ? "bg-[#162a1a]" : ""
                      }`}
                    >
                      <span className="text-sm text-gray-300">{module.title}</span>
                      {module.completed && (
                        <div className="w-5 h-5 rounded-full bg-[#a3e635] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#0d2817]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Video and Content - col-8 */}
            <div className="col-span-9 space-y-8">
              {/* Video Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">Video Title</h2>

                {/* Video Player */}
                <div className="relative aspect-video bg-[#0d2817] rounded-xl overflow-hidden border border-[#1a3a1f]">
                <img
                  src="https://www.figma.com/file/kk4ylJSXf571hGiRen7n7b/image/3d1494c29dbea00939a02e5bd845fb818825cba2"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors border-2 border-white/50">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#a3e635] border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </button>
                </div>

                {/* Professor Info & Save Button */}
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-500" />
                  <div>
                    <div className="text-[#a3e635] font-medium">Chris Ocean</div>
                    <div className="text-sm text-gray-400">Professor</div>
                  </div>
                </div>
                <Button variant="ghost" className="text-[#a3e635] hover:text-[#a3e635] hover:bg-[#1a3a1f]">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save moment
                </Button>
                </div>
              </div>

              {/* Resources Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <Link href="#" className="text-sm text-[#a3e635] hover:underline">
                  View All Resources
                </Link>
                </div>

                <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-[#1a2a1f] border border-[#2a3a2f]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gray-500 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">{resource.title}</div>
                        <div className="text-sm text-gray-400">{resource.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#a3e635] hover:text-[#a3e635] hover:bg-[#2a3a2f]"
                      >
                        <Eye className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#a3e635] hover:text-[#a3e635] hover:bg-[#2a3a2f]"
                      >
                        <Download className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                ))}
                </div>
              </div>

              {/* Notice Board */}
              <div className="space-y-4 pb-8">
                <h3 className="text-lg font-semibold text-white">Notice Board</h3>
                <div className="p-6 rounded-lg bg-[#1a2a1f] border border-[#2a3a2f] min-h-[120px]">
                  <p className="text-gray-400 text-sm">Important announcements and updates will appear here.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
