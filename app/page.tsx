import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
<div className="flex h-screen bg-linear-to-br from-black  via-black  to-green-900">
<Sidebar />
      <div className="overflow-scroll overflow-x-hidden max-w-[1920px] mx-auto">
        <Header
          leftContent={
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-normal text-muted-foreground">
                  Hello, <span className="text-white">Username</span>
                </h1>
                <div className="bg-white text-black gap-1 px-2 py-1 text-sm rounded-full font-medium">
                  🔥 3 Week Streak
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-sidebar-accent text-white gap-1.5 px-3 py-1">
                  <GraduationCapIcon />
                  Ecommerce Campus
                </Badge>
                <Badge className="bg-sidebar-accent text-white gap-1.5 px-3 py-1">
                  <GraduationCapIcon />
                  Agency Accelerate Campus
                </Badge>
              </div>
            </div>
          }
        />
        <main className="flex-1 overflow-y-auto px-16">

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - My Campus */}
            <div className="lg:col-span-2 space-y-6">
            <h2 className="text-sm text-green-50/50 mt-4 mb-4">My Campus(s)</h2>

              <Card className="bg-card border-border ">
                <div className="flex items-center justify-between border-b p-6 pt-0 mb-6">
                  <h2 className="text-2xl text-white">Ecommerce Mastery</h2>
                  <Button variant="link" className="text-primary hover:text-primary/80 flex items-center gap-2">
                    Switch Campus
                  </Button>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="mb-8 px-6">
                  {/* Progress Line with Markers */}
                  <div className="flex items-center gap-2 mb-4">
                    {/* Step 1: Intro to Ecommerce - Complete */}
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary border-2 border-primary shrink-0">
                        <CheckIcon className="h-4 w-4 text-green-900" />
                      </div>
                      <div className="flex-1 h-1 bg-primary"></div>
                    </div>
                    
                    {/* Step 2: Setting up your Store - Complete */}
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-1 bg-primary"></div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary border-2 border-primary shrink-0">
                        <CheckIcon className="h-4 w-4 text-green-900" />
                      </div>
                      <div className="flex-1 h-1 bg-border"></div>
                    </div>
                    
                    {/* Step 3: Running Ads Successfully - Incomplete */}
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-1 bg-border"></div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-white shrink-0"></div>
                    </div>
                  </div>
                  
                  {/* Step Labels */}
                  <div className="flex items-start gap-2">
                    <div className="flex-1 flex flex-col items-start">
                      <span className="text-white text-sm">Intro to Ecommerce</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <span className="text-white text-sm">Setting up your Store</span>
                    </div>
                    <div className="flex-1 flex flex-col items-end">
                      <span className="text-white text-sm">Running Ads Successfully</span>
                    </div>
                  </div>
                </div>

                {/* Course Modules - Card Layout */}
                <div className="space-y-4 px-6">
                  {[
                    {
                      title: "Intro to Ecommerce",
                      videos: "8 Videos",
                      status: "Complete",
                      hasResume: true,
                      hasWolfLogo: true,
                      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
                    },
                    {
                      title: "Setting up your Store",
                      videos: "61 Videos",
                      status: "Complete",
                      hasResume: true,
                      hasWolfLogo: false,
                      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
                    },
                    {
                      title: "Running Ads Successfully",
                      videos: "41 Videos",
                      status: "In Progress",
                      hasResume: true,
                      hasWolfLogo: false,
                      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
                    },
                    {
                      title: "Things to Remember",
                      videos: "2 Videos",
                      status: "Not Started",
                      hasResume: false,
                      hasWolfLogo: false,
                      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop",
                    },
                    {
                      title: "Things to Remember",
                      videos: "2 Videos",
                      status: "Not Started",
                      hasResume: false,
                      hasWolfLogo: false,
                      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop",
                    },
                  ].map((module, i) => (
                    <Card key={i} className="bg-[#2f3a2f] border border-[#3b463b] px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-4">
                      
                      {/* Thumbnail */}
                      <img
                        src={module.imageUrl}
                        alt={module.title}
                        className="h-24 w-24 rounded-md object-cover shrink-0"
                      />
                  
                      {/* Content */}
                      <div className="flex-1">
                        
                        {/* Title + Status */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-white">
                            {module.title}
                          </h3>
                  
                          <span className="px-2 py-0.5 text-[11px] rounded-full bg-lime-600/30 text-lime-300">
                            Complete
                          </span>
                        </div>
                  
                        {/* Subtitle */}
                        <p className="text-xs text-gray-300 mt-0.5">
                          {module.videos}
                        </p>
                  
                        {/* Actions */}
                        <div className="flex gap-2 mt-3">
                      
                <Link href="/classroom/bpo">

                          <Button
                            size="sm"
                            className="h-7 px-3 text-xs bg-white text-black hover:bg-emerald-100"
                          >
                            Resume
                          </Button>
                  </Link>
                  <Link href="/classroom/bpo">

                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 px-3 bg-transparent text-xs border-gray-400 text-white hover:bg-white"
                          >
                            Go to Module
                          </Button>
                          </Link>
                        </div>
                  
                      </div>
                    </div>
                  </Card>
                  
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Faculty & Achievements */}
            <div className="space-y-6">
                <h2 className="text-sm text-green-50/50 mt-4 mb-4">My Faculty(s)</h2>
                <div className="space-y-3">
                            {/* FACULTY */}
              <div className="bg-linear-to-br from-[#3c5f14] to-[#1a2a0a] rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Ecommerce Faculty
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  Join the faculty to ask questions, get mentors and perks.
                </p>
                <button className="ml-auto block w-10 h-10 rounded-full bg-white text-black font-bold">
                  ↗
                </button>
              </div>
  

                  <Card className="bg-muted/30 border-border p-4 relative">
                    <div className="absolute inset-0 bg-muted/0 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
                      <Lock className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Agency Faculty</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      Joining the faculty allows you to ask questions about course material, get access to mentors &
                      community and extra perks. <span className="text-primary">Learn More</span>
                    </p>
                    <Button size="sm" className="w-full" disabled>
                      Unlock Faculty
                    </Button>
                  </Card>
                </div>
                <section>
                  <h2 className="text-sm text-green-50/50 mt-4 mb-4">Achievements</h2>

              <Card className="bg-card border-border p-6">
              <div className="space-y-3">
                  {[
                    {
                      icon: "🏆",
                      title: "Daily Goal",
                      subtitle: "Watch 2 Videos",
                      status: "Complete",
                    },
                    {
                      icon: "📝",
                      title: "Homework",
                      subtitle: "Send Mentor Shopify Store",
                      status: "Complete",
                    },
                    {
                      icon: "🎯",
                      title: "Monthly Goal",
                      subtitle: "Complete Module 3",
                      status: "In Progress",
                    },
                  ].map((achievement, i) => (
                    <div key={i} className="bg-secondary border-border p-4 flex items-center justify-between rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-white">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.subtitle}</p>
                        </div>
                      </div>
                      <Badge
                        className={
                          achievement.status === "Complete" ? "bg-primary text-black" : "bg-yellow-600 text-white"
                        }
                      >
                        {achievement.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
              </section>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function GraduationCapIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WolfIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.5 2 5.73 4.11 5.18 7.5c-.11.68-.18 1.37-.18 2.08 0 2.19 1.12 4.12 2.81 5.25L7 18v2c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1v-1.17c1.69-1.13 2.81-3.06 2.81-5.25 0-.71-.07-1.4-.18-2.08C18.27 4.11 15.5 2 12 2zm-1.5 7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9 11.83 9 11s.67-1.5 1.5-1.5zm3 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S12 11.83 12 11s.67-1.5 1.5-1.5z" />
    </svg>
  )
}
