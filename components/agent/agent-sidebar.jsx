"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Wallet, BarChart3, CreditCard, TrendingUp, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const agentMenuItems = [
  {
    title: "Dashboard",
    href: "/agent",
    icon: LayoutDashboard,
  },
  {
    title: "Sub-Agents",
    href: "/agent/subagents",
    icon: Users,
  },
  {
    title: "Sell Credits",
    href: "/agent/credits",
    icon: CreditCard,
  },
  {
    title: "Wallet",
    href: "/agent/wallet",
    icon: Wallet,
  },
  {
    title: "Sales Reports",
    href: "/agent/sales",
    icon: BarChart3,
  },
  {
    title: "Commission",
    href: "/agent/commission",
    icon: TrendingUp,
  },
]

export default function AgentSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden text-[#FFD700]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-[#0A1A2F] border-r border-[#FFD700]/20 transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-[#FFD700]/20">
            <h1 className="text-xl font-bold text-[#FFD700]">Agent Panel</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {agentMenuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-[#FFD700] text-[#0A1A2F]"
                      : "text-[#F5F5F5] hover:bg-[#FFD700]/10 hover:text-[#FFD700]",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Agent info */}
          <div className="p-4 border-t border-[#FFD700]/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-[#0A1A2F]">A</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Agent Smith</p>
                <p className="text-xs text-[#F5F5F5]">Agent Owner</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-[#FFD700]/10 rounded-lg border border-[#FFD700]/30">
              <p className="text-xs text-[#F5F5F5]">Wallet Balance</p>
              <p className="text-lg font-bold text-[#FFD700]">$12,450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
