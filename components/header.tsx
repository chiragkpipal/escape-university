import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ReactNode } from "react"

interface HeaderProps {
  centerContent?: ReactNode
  leftContent?: ReactNode
}

export function Header({ centerContent, leftContent }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4 px-16 pt-12 pb-8">
      {leftContent ? (
        <div>{leftContent}</div>
      ) : centerContent ? (
        <div className="flex-1 flex justify-center">{centerContent}</div>
      ) : (
        <div />
      )}
      {centerContent && !leftContent && <div className="flex-1" />}
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="font-medium text-white">Student Name</p>
          <p className="text-sm text-primary">Profile</p>
        </div>
      </div>
    </header>
  )
}
