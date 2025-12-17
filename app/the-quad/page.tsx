import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, Pin } from "lucide-react"

export default function TheQuadPage() {
  return (
    <div className="flex h-screen bg-linear-to-br from-black via-black to-green-900">
      <Sidebar />
      <div className="overflow-scroll overflow-x-hidden w-full max-w-[1920px] mx-auto">
        <Header
          centerContent={
            <div>
              <h1 className="text-3xl font-normal mb-4">
                <MessageSquare className="inline-block h-8 w-8 mr-2" />
                The Quad
              </h1>
              <div className="text-muted-foreground">
                Share your wins across the all campuses, all students in the University will see!
              </div>
            </div>
          }
        />
        <main className="overflow-y-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">

              {/* Tabs */}
              <div className="flex gap-4 border-b border-border">
                <button className="pb-3 px-1 text-primary border-b-2 border-primary font-medium">Community Chat</button>
                <button className="pb-3 px-1 text-muted-foreground hover:text-white">My Wins</button>
                <button className="pb-3 px-1 text-muted-foreground hover:text-white">Leaderboard</button>
              </div>

              {/* Post Input */}
              <Card className="bg-card border-border p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 bg-primary">
                    <AvatarFallback className="bg-primary text-black">U</AvatarFallback>
                  </Avatar>
                  <input
                    placeholder="Celebrate your win with Escape Students"
                    className="border-none w-full h-10 px-2"
                  />
                </div>
              </Card>

              {/* Filters */}
              <div className="flex gap-2">
                <Button className="bg-primary text-black hover:bg-primary/90">All Campuses</Button>
                <Button variant="outline" className="bg-transparent">Ecommerce</Button>
                <Button variant="outline" className="bg-transparent">Agency</Button>
                <Button variant="outline" className="bg-transparent">BPO</Button>
                <Button variant="outline" className="bg-transparent">Freelancing</Button>
              </div>

              {/* Pinned Section */}
              <div className="overflow-scroll overflow-x-hidden h-[60vh]">
                <>
                <div className="bg-linear-to-l from-[#052010] to-[#476e0f] px-4 flex items-center justify-between rounded-t-xl">
                  <div className="flex items-center gap-2 ">
                    <Pin className="h-4 w-4" />
                    <span className="font-semibold">Pinned</span>
                  </div>
                  <Button variant="link" >
                    Hide
                  </Button>
                </div>
                <Card className="bg-white/10 border-border p-4 mb-3 rounded-t-none">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="h-10 w-10 bg-primary">
                        <AvatarFallback className="bg-primary text-black">JM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-white">James Morgan #14</span>
                          <span className="text-sm text-muted-foreground">1 week ago</span>
                        </div>
                        <Badge className="bg-sidebar-accent text-white text-xs">
                          <Building2Icon />
                          Ecommerce Campus
                        </Badge>
                      </div>
                    </div>
                    <p className="text-white mb-3">
                      I just had my first R21031 day. I joined the ecommerce campus 2 months ago
                    </p>
                    <div className="flex gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-white">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">12</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-white">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">12</span>
                      </button>
                    </div>
                  </Card>
                  </>
                {/* Pinned Posts */}
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-white/10 border-border p-4 mb-3">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="h-10 w-10 bg-primary">
                        <AvatarFallback className="bg-primary text-black">JM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-white">James Morgan #14</span>
                          <span className="text-sm text-muted-foreground">1 week ago</span>
                        </div>
                        <Badge className="bg-sidebar-accent text-white text-xs">
                          <Building2Icon />
                          Ecommerce Campus
                        </Badge>
                      </div>
                    </div>
                    <p className="text-white mb-3">
                      I just had my first R21031 day. I joined the ecommerce campus 2 months ago
                    </p>
                    <div className="flex gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-white">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">12</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-white">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">12</span>
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-card border-border p-6">
                <h3 className="font-semibold text-white mb-4">Your Ranking</h3>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-2xl font-bold text-white">$52313</p>
                    <p className="text-sm text-primary">earnings</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">#2</span>
                    <span className="text-white">in BPO Campus</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">#74</span>
                    <span className="text-white">in Escape Uni</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <h3 className="font-semibold text-white mb-4">Leaderboard</h3>
                <div className="space-y-3">
                  {[
                    { rank: "🥇", name: "James Morgan", amount: "$102313" },
                    { rank: "🥈", name: "Charlie Monger", amount: "$82135" },
                    { rank: "🥉", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                    { rank: "4", name: "Declan Swarter", amount: "$78135" },
                  ].map((entry, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="w-6 text-center">{entry.rank}</span>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {entry.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="flex-1 text-white">{entry.name}</span>
                      <span className="text-primary">{entry.amount}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
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
