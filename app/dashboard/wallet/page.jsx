"use client"
import { Wallet } from "@/components/dashboard/wallet"
import { BottomNavigation } from "@/components/ui/bottom-navigation"
import { FloatingElements } from "@/components/ui/floating-elements"

export default function DashboardWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-800 relative overflow-hidden">
      <FloatingElements />
      <div className="relative z-10">
        <Wallet />
      </div>
      <BottomNavigation activeTab="wallet" />
    </div>
  )
}
