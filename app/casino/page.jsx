"use client"
import { GamesLibrary } from "@/components/dashboard/games-library"
import { BottomNavigation } from "@/components/ui/bottom-navigation"
import { FloatingElements } from "@/components/ui/floating-elements"

export default function CasinoPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <FloatingElements />
      <div className="relative z-10">
        <GamesLibrary />
      </div>
      <BottomNavigation activeTab="casino" />
    </div>
  )
}
