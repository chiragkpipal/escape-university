"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, ChevronDown, SlidersHorizontal, FileText } from "lucide-react"
import { useState } from "react"

export default function NotesPage() {
  const [pinnedOpen, setPinnedOpen] = useState(true)
  const [allNotesOpen, setAllNotesOpen] = useState(true)

  const notes = [
    {
      id: 1,
      title: "5 Best Niches",
      preview: "Wellness is a good niche becau...",
      date: "2025/05/24",
      campus: "Ecommerce Mastery",
      campusColor: "text-lime-400",
      lecture: "How to Pick a Niche",
    },
    {
      id: 2,
      title: "5 Best Niches",
      preview: "Wellness is a good niche becau...",
      date: "2025/05/24",
      campus: "Ecommerce Mastery",
      campusColor: "text-lime-400",
      lecture: "How to Pick a Niche",
    },
    {
      id: 3,
      title: "5 Best Niches",
      preview: "Wellness is a good niche becau...",
      date: "2025/05/24",
      campus: "Agency Accelerator",
      campusColor: "text-purple-400",
      lecture: "How to Pick a Niche",
    },
  ]

  const allNotes = [
    ...notes,
    {
      id: 4,
      title: "5 Best Niches",
      preview: "Wellness is a good niche becau...",
      date: "2025/03/24",
      campus: "Ecommerce Mastery",
      campusColor: "text-lime-400",
      lecture: "How to Pick a Niche",
    },
    {
      id: 5,
      title: "5 Best Niches",
      preview: "Wellness is a good niche becau...",
      date: "2025/03/24",
      campus: "Ecommerce Mastery",
      campusColor: "text-lime-400",
      lecture: "How to Pick a Niche",
    },
    {
      id: 6,
      title: "5 Best Niches",
      preview: "Wellness is a good niche becau...",
      date: "2025/05/24",
      campus: "Agency Accelerator",
      campusColor: "text-purple-400",
      lecture: "How to Pick a Niche",
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
                <FileText className="inline-block h-8 w-8 mr-2" />
                Your Notes
              </h1>
              <div className="text-muted-foreground">
                Add a note or see saved notes from lectures
              </div>
            </div>
          }
        />
        <main className="overflow-y-auto px-16 py-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Notes List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search Notes"
                  className="pl-10 bg-card border-border text-white placeholder:text-muted-foreground"
                />
              </div>

              {/* Pinned Notes Section */}
              <div className="space-y-3">
                <button
                  onClick={() => setPinnedOpen(!pinnedOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h2 className="text-lg font-semibold text-white">Pinned Notes</h2>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${pinnedOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {pinnedOpen && (
                  <div className="space-y-2">
                    {notes.map((note) => (
                      <div
                        key={note.id}
                        className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-semibold">{note.title}</h3>
                          <span className="text-sm text-muted-foreground">{note.date}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{note.preview}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={note.campusColor}>{note.campus}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-primary">{note.lecture}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* All Notes Section */}
              <div className="space-y-3">
                <button
                  onClick={() => setAllNotesOpen(!allNotesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h2 className="text-lg font-semibold text-white">All Notes</h2>
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform ${allNotesOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {allNotesOpen && (
                  <div className="space-y-2">
                    {allNotes.map((note) => (
                      <div
                        key={note.id}
                        className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-semibold">{note.title}</h3>
                          <span className="text-sm text-muted-foreground">{note.date}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{note.preview}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={note.campusColor}>{note.campus}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-primary">{note.lecture}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Quick Note */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg sticky top-6">
                <h2 className="text-xl font-semibold text-white mb-4 p-6 pb-0">Quick Note</h2>
                <Textarea
                  placeholder="Start typing here..."
                  className="min-h-[400px] px-6 bg-transparent border-none text-white placeholder:text-muted-foreground resize-none"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
