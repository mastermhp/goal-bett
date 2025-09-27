"use client"
import { GamesLibrary } from "@/components/dashboard/games-library"
import { BottomNavigation } from "@/components/ui/bottom-navigation"
import { FloatingElements } from "@/components/ui/floating-elements"

export default function DashboardCasinoPage() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* <FloatingElements /> */}
      <div className="relative z-10">
        <GamesLibrary />
      </div>
      <BottomNavigation activeTab="casino" />
    </div>
  )
}


//bg-gradient-to-br from-background via-slate-900 to-slate-800