export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0a1f0e]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2a3a2f] border-t-[#a3e635]" />
        <p className="text-sm text-gray-400">Loading classroom...</p>
      </div>
    </div>
  )
}
