"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import BottomNavigation from "@/components/ui/bottom-navigation"

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm">
          <div>
            <h1 className="text-2xl font-bold text-white">CASINO ROYAL</h1>
            <p className="text-gray-400">Welcome back, {user.name}!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">{user.balance || 4056}</div>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{user.name?.[0] || "U"}</span>
            </div>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="mx-4 mt-4 p-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2">Claim up to $1000</h2>
            <p className="text-yellow-100 mb-4">as a bonus on your first slot!</p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-yellow-100 transition-colors">
              Play Now
            </button>
          </div>
          <img src="/casino-character-with-coins.jpg" alt="Casino Character" className="absolute right-4 top-4 w-20 h-20" />
        </div>

        {/* Recent Wins */}
        <div className="mx-4 mt-6">
          <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-yellow-400">🏆</span>
            Recent Wins
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[
              { game: "Lucky Spin", amount: "$85.50", time: "2m ago" },
              { game: "Slot Machine", amount: "$124.75", time: "5m ago" },
              { game: "Roulette", amount: "$67.25", time: "8m ago" },
              { game: "Blackjack", amount: "$156.00", time: "12m ago" },
              { game: "Poker", amount: "$89.50", time: "15m ago" },
              { game: "Baccarat", amount: "$234.25", time: "18m ago" },
            ].map((win, index) => (
              <div
                key={index}
                className="min-w-[140px] bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
              >
                <div className="text-yellow-400 font-bold text-sm">{win.amount}</div>
                <div className="text-white text-xs">{win.game}</div>
                <div className="text-gray-400 text-xs">{win.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Play & Earn Section */}
        <div className="mx-4 mt-6">
          <h3 className="text-white text-lg font-bold mb-4">Play & Earn</h3>
          <div className="grid grid-cols-3 gap-3">
            <div
              onClick={() => router.push("/games/spin-wheel")}
              className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-4 text-center cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  🎯
                </div>
                <div className="text-white font-bold text-sm">Lucky Spin</div>
                <div className="text-yellow-200 text-xs">02 spins</div>
              </div>
            </div>

            <div
              onClick={() => router.push("/dashboard/wallet")}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-center cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  🎁
                </div>
                <div className="text-white font-bold text-sm">Daily Bonus</div>
                <div className="text-yellow-200 text-xs">Reward</div>
              </div>
            </div>

            <div
              onClick={() => router.push("/games/slots")}
              className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-4 text-center cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  🎰
                </div>
                <div className="text-white font-bold text-sm">Slot Machine</div>
                <div className="text-yellow-200 text-xs">03 spins</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Games */}
        <div className="mx-4 mt-6">
          <div className="grid grid-cols-2 gap-3">
            <div
              onClick={() => router.push("/games/roulette")}
              className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-white font-bold mb-1">Roulette</div>
                <div className="text-yellow-200 text-sm">European Style</div>
              </div>
            </div>

            <div
              onClick={() => router.push("/games/dice-roll")}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-white font-bold mb-1">Dice Roll</div>
                <div className="text-yellow-200 text-sm">Quick Game</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
