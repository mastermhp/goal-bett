"use client"
import { Card3D } from "@/components/ui/3d-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Trophy, Users, Settings, HelpCircle, LogOut, ChevronRight, Volume2 } from "lucide-react"
import { useState } from "react"

export function UserMenu() {
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [user] = useState({
    name: "CasinoKing92",
    level: "Level 3 Player",
    vipProgress: 60,
    balance: 125679,
  })

  const menuItems = [
    { icon: Trophy, label: "Missions", hasChevron: true },
    { icon: Volume2, label: "Audio & Music", hasToggle: true, enabled: audioEnabled },
    { icon: Users, label: "Leaderboard", hasChevron: true },
    { icon: Users, label: "Friends", hasChevron: true },
    { icon: Settings, label: "Settings", hasChevron: true },
    { icon: HelpCircle, label: "Help & Support", hasChevron: true },
  ]

  return (
    <div className="pb-20 px-6 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">Menu</h1>
        <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* User Profile Card */}
      <Card3D className="mb-8">
        <div className="glass p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl">👨‍💼</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-muted-foreground">{user.level}</p>
            </div>
          </div>

          {/* VIP Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">VIP Progress</span>
              <span className="text-sm text-primary font-bold">{user.vipProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${user.vipProgress}%` }}
              />
            </div>
          </div>

          {/* Balance */}
          <div className="text-center">
            <p className="text-muted-foreground mb-1">Balance</p>
            <div className="text-2xl font-bold gradient-text mb-4">${user.balance.toLocaleString()}</div>
            <AnimatedButton variant="primary" size="sm" className="w-full">
              Top Up
            </AnimatedButton>
          </div>
        </div>
      </Card3D>

      {/* More Tools Section */}
      <div className="mb-8">
        <h3 className="font-bold mb-4">More Tools</h3>
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <Card3D key={index}>
              <button className="w-full glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="flex-1 text-left font-medium">{item.label}</span>
                {item.hasChevron && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
                {item.hasToggle && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (item.label === "Audio & Music") {
                        setAudioEnabled(!audioEnabled)
                      }
                    }}
                    className={`w-12 h-6 rounded-full transition-colors ${item.enabled ? "bg-primary" : "bg-gray-600"}`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        item.enabled ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                )}
              </button>
            </Card3D>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <Card3D>
        <button
          onClick={() => (window.location.href = "/")}
          className="w-full glass p-4 rounded-xl flex items-center gap-4 hover:bg-red-500/10 transition-colors text-red-400"
        >
          <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="flex-1 text-left font-medium">Logout</span>
        </button>
      </Card3D>
    </div>
  )
}
