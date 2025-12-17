export default function Page() {
    return (
      <div className="min-h-screen w-full bg-linear-to-br from-[#071a0b] via-[#020804] to-black text-white flex">
        
        {/* SIDEBAR */}
        <aside className="w-[260px] bg-gradient-to-b from-[#0b2a12] to-[#061509] px-6 py-6 flex flex-col gap-8">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center font-bold">
              E
            </div>
            Escape University
          </div>
  
          <nav className="flex flex-col gap-3 text-sm">
            <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-md">
              Dashboard
            </div>
            <div className="text-gray-300 px-4 py-2 rounded-md hover:bg-white/5">
              My Campus
            </div>
            <div className="text-gray-300 px-4 py-2 rounded-md hover:bg-white/5">
              Campuses
            </div>
            <div className="text-gray-300 px-4 py-2 rounded-md hover:bg-white/5">
              The Quad
            </div>
            <div className="text-gray-300 px-4 py-2 rounded-md hover:bg-white/5">
              Saved Moments
            </div>
            <div className="text-gray-300 px-4 py-2 rounded-md hover:bg-white/5">
              Notes
            </div>
          </nav>
        </aside>
  
        {/* MAIN */}
        <main className="flex-1 px-10 py-8 overflow-y-auto">
          
          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-semibold">
                Hello, <span className="text-white">Username</span>
              </h1>
              <div className="flex gap-3 mt-3">
                <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
                  Ecommerce Campus
                </span>
                <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
                  Agency Accelerate Campus
                </span>
                <span className="px-4 py-1 rounded-full bg-white/10 text-xs">
                  🔥 3 Week Streak
                </span>
              </div>
            </div>
  
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="text-sm">
                <div className="font-medium">Student Name</div>
                <div className="text-green-400 text-xs">Profile</div>
              </div>
            </div>
          </div>
  
          {/* GRID */}
          <div className="grid grid-cols-3 gap-8">
            
            {/* LEFT: COURSE */}
            <div className="col-span-2 bg-linear-to-br from-[#1b2a1c] to-[#0f1a11] rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Ecommerce Mastery</h2>
                <span className="text-green-400 text-sm cursor-pointer">
                  Switch Campus
                </span>
              </div>
  
              {/* PROGRESS */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute left-0 top-0 h-1 w-[65%] bg-green-500 rounded-full" />
                </div>
                <span className="text-xs text-gray-400">65%</span>
              </div>
  
              {/* MODULES */}
              <div className="space-y-4">
                {[
                  ["Intro to Ecommerce", "Complete"],
                  ["Setting up your Store", "Complete"],
                  ["Running Ads Successfully", "In Progress"],
                  ["Things to Remember", "Not Started"],
                ].map(([title, status], i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-400" />
                      <div>
                        <div className="font-medium">{title}</div>
                        <div className="text-xs text-gray-400">Videos</div>
                      </div>
                    </div>
  
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                        {status}
                      </span>
                      <button className="px-4 py-1.5 rounded-md bg-white text-black text-sm">
                        {status === "Not Started" ? "Start" : "Resume"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              
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
  
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Agency Faculty
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Access agency mentors and advanced support.
                </p>
                <button className="ml-auto block w-10 h-10 rounded-full bg-purple-400 text-black font-bold">
                  ↗
                </button>
              </div>
  
              {/* ACHIEVEMENTS */}
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Achievements</h3>
  
                {[
                  "Watch 2 Videos",
                  "Send Mentor Shopify Store",
                  "Complete Module 3",
                ].map((a, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center mb-3 last:mb-0"
                  >
                    <div className="text-sm">{a}</div>
                    <span className="text-xs text-green-400">Complete</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  