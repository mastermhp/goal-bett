"use client"
import { Home, Gamepad2, ShoppingBag, Wallet, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function BottomNavigation({ activeTab }) {
  const pathname = usePathname()

  const currentTab =
    activeTab ||
    (() => {
      if (pathname === "/dashboard") return "home"
      if (pathname.includes("/dashboard/games")) return "games"
      if (pathname.includes("/dashboard/shop")) return "shop"
      if (pathname.includes("/dashboard/wallet")) return "wallet"
      if (pathname.includes("/dashboard/menu")) return "menu"
      return "home"
    })()

  const tabs = [
    { id: "home", icon: Home, label: "Home", href: "/dashboard" },
    { id: "games", icon: Gamepad2, label: "Games", href: "/dashboard/games" },
    { id: "shop", icon: ShoppingBag, label: "Shop", href: "/dashboard/shop" },
    { id: "wallet", icon: Wallet, label: "Wallet", href: "/dashboard/wallet" },
    { id: "menu", icon: Menu, label: "Menu", href: "/dashboard/menu" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-yellow-500/20">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${
              currentTab === tab.id
                ? "text-yellow-400 scale-110"
                : "text-gray-400 hover:text-yellow-300 hover:scale-105"
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{tab.label}</span>
            {currentTab === tab.id && <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BottomNavigation
export { BottomNavigation }
