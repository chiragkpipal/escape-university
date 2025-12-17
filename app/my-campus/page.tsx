import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Building2, BookOpen, Plus, Users, User, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"


export default function MyCampusPage() {
  return (
<div className="flex h-screen bg-linear-to-br from-black  via-black  to-green-900">
<Sidebar />
      <div className="overflow-scroll overflow-x-hidden w-full max-w-[1920px] mx-auto">
        <Header
          centerContent={
            <div>
                <h1 className="text-3xl font-normal mb-4">
                <i className="ri-graduation-cap-line"></i> My Campuses
                </h1>
               
              <div className="text-muted-foreground">
              Campuses are the courses that you have access to. The campus is the course material, the faculty is the mentorship & community
               
              </div>
            </div>
          }
        />
        <main className="overflow-y-auto px-16">


          {/* Campus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-green-900/50 rounded-lg">
              <div className="h-50">
                <img
                  src="/images/7b23c0065c-6f37-4afd-b91a-4c6a992ac560-7d.png"
                  alt="Ecommerce"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-white" />
                  <h3 className="font-semibold text-white">Ecommerce Mastery</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Professor: Wilcocks</p>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">62%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[62%]" />
                  </div>
                </div>
                <Card className="bg-secondary border-0 p-3 mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">Resume: Running Ads Succ...</p>
                  </div>
                </Card>
                <div className="flex gap-2">
                <Link href="/classroom/bpo" className="w-1/2">
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Building2 className="h-3 w-3" />
                      Go to Campus
                    </Button>
                  </Link>
                  <Link href="/classroom/bpo" className="w-1/2">
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                    <BookOpen className="h-3 w-3" />
                    Go to Library
                    </Button>
                  </Link>
                 
                </div>
              </div>
            </div>
            <div className="bg-card border border-green-900/50 rounded-lg">
              <div className="h-50">
                <img
                  src="/images/7b23c0065c-6f37-4afd-b91a-4c6a992ac560-7d.png"
                  alt="Ecommerce"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-white" />
                  <h3 className="font-semibold text-white">Ecommerce Mastery</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Professor: Wilcocks</p>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">62%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[62%]" />
                  </div>
                </div>
                <Card className="bg-secondary border-0 p-3 mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">Resume: Running Ads Succ...</p>
                  </div>
                </Card>
                <div className="flex gap-2">
                <Link href="/classroom/bpo" className="w-1/2">
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Building2 className="h-3 w-3" />
                      Go to Campus
                    </Button>
                  </Link>
                  <Link href="/classroom/bpo" className="w-1/2">
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                    <BookOpen className="h-3 w-3" />
                    Go to Library
                    </Button>
                  </Link>
                 
                </div>
              </div>
            </div>

          

            <Card className="bg-card border-2 border-dashed border-border flex items-center justify-center min-h-[400px]">
              <div className="text-center p-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-border mb-4">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Add Campus</h3>
              </div>
            </Card>
          </div>

          {/* My Faculties */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-bold text-white">My Faculties</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Joining the faculty allows you to ask questions about course material, get access to mentors & community
              and extra perks. <span className="text-primary cursor-pointer">Learn More</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ecommerce Faculty */}
            <div className="bg-gradient-to-b from-[#3c5f14] to-[#2a4a0f] rounded-2xl p-6 relative">
              {/* Arrow Icon - Top Right */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4 text-[#3c5f14]" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-1">
                Ecommerce Faculty
              </h3>
              
              {/* Professor */}
              <p className="text-sm text-white mb-6">
                Professor: Wilcocks
              </p>
              
              {/* Metrics */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">50+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">5 Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">Weekly Calls</span>
                </div>
              </div>
            </div>

            {/* Agency Faculty */}
            <div className="bg-gradient-to-b from-[#6b5b95] to-[#5a4a85] rounded-2xl p-6 relative">
              {/* Central Lock Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-[#3c5f14]" />
                </div>
              </div>
              
              {/* Arrow Icon - Top Right */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#8b7ba5] border-2 border-[#8b7ba5] flex items-center justify-center z-20">
                <ArrowUpRight className="h-4 w-4 text-[#6b5b95]" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-400 mb-1 relative z-0">
                Agency Faculty
              </h3>
              
              {/* Professor */}
              <p className="text-sm text-gray-400 mb-6 relative z-0">
                Professor: Wilcocks
              </p>
              
              {/* Metrics */}
              <div className="flex items-center gap-6 relative z-0">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">51 Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">5 Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Weekly Calls</span>
                </div>
              </div>
            </div>

            <Card className="bg-card border-2 border-dashed border-border flex items-center justify-center min-h-[180px]">
              <div className="text-center p-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-border mb-4">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Unlock Faculty</h3>
              </div>
            </Card>
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
