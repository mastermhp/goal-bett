"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import BottomNavigation from "@/components/ui/bottom-navigation"
import { Bell, User, Plus, Zap, Trophy, Gift, Star, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!user) return null

  const carouselItems = [
    {
      title: "MEGA JACKPOT",
      subtitle: "Win up to $50,000!",
      amount: "$12,847",
      progress: 75,
      bg: "from-orange-600 via-red-600 to-orange-700",
      action: () => router.push("/dashboard/games/slots"),
    },
    {
      title: "LUCKY WHEEL",
      subtitle: "Spin for instant prizes!",
      amount: "$8,234",
      progress: 60,
      bg: "from-blue-600 via-purple-600 to-blue-700",
      action: () => router.push("/dashboard/games/spin-wheel"),
    },
    {
      title: "ROULETTE RUSH",
      subtitle: "Double your money!",
      amount: "$15,678",
      progress: 85,
      bg: "from-green-600 via-emerald-600 to-green-700",
      action: () => router.push("/dashboard/games/roulette"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse" />
          </div>
        ))}

        {/* Golden lightning effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 pb-20">
        <div className="flex items-center justify-between p-4 bg-black/40 backdrop-blur-md border-b border-orange-500/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center border-2 border-yellow-400 animate-pulse">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-bounce" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-white font-bold text-xl tracking-wider">LIVE CASINO</h1>
            <div className="flex items-center justify-center gap-1 mt-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-orange-200 text-xs">LIVE NOW</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative w-10 h-10 bg-orange-600/60 rounded-full flex items-center justify-center border border-orange-400 hover:scale-110 transition-transform">
              <Bell className="w-5 h-5 text-orange-200" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            </button>
            <button
              onClick={() => router.push("/wallet")}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm border border-green-400 hover:scale-105 transition-transform flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              DEPOSIT
            </button>
          </div>
        </div>

        <div className="mx-4 mt-6">
          <div className="relative h-48 rounded-3xl overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentCarouselIndex
                    ? "translate-x-0"
                    : index < currentCarouselIndex
                      ? "-translate-x-full"
                      : "translate-x-full"
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${item.bg} h-full rounded-3xl p-6 relative overflow-hidden border-2 border-yellow-500/30`}
                >
                  {/* Enhanced glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl animate-spin-slow" />
                  <div
                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-spin-slow"
                    style={{ animationDirection: "reverse" }}
                  />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{item.title}</h2>
                        <p className="text-yellow-200">{item.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 text-xl font-bold">{item.amount}</div>
                        <div className="text-orange-200 text-xs">Prize Pool</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-black/30 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full animate-pulse transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-yellow-200 text-xs font-bold">{item.progress}%</span>
                      </div>

                      <button
                        onClick={item.action}
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400 flex items-center justify-center gap-2"
                      >
                        <Zap className="w-5 h-5" />
                        PLAY NOW!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentCarouselIndex ? "bg-yellow-400 w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-4 mt-6">
          <div className="grid grid-cols-4 gap-3">
            <button
              onClick={() => router.push("/dashboard/games/slots")}
              className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 border border-red-400/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <span className="text-2xl animate-bounce">🎰</span>
              </div>
              <div className="text-white font-bold text-xs relative z-10">SLOTS</div>
            </button>

            <button
              onClick={() => router.push("/dashboard/games/roulette")}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 border border-blue-400/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <span className="text-2xl animate-spin-slow">🎯</span>
              </div>
              <div className="text-white font-bold text-xs relative z-10">ROULETTE</div>
            </button>

            <button
              onClick={() => router.push("/dashboard/games/spin-wheel")}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 border border-green-400/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <span className="text-2xl animate-spin">🎡</span>
              </div>
              <div className="text-white font-bold text-xs relative z-10">WHEEL</div>
            </button>

            <button
              onClick={() => router.push("/dashboard/games")}
              className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 border border-purple-400/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <span className="text-2xl animate-pulse">🎮</span>
              </div>
              <div className="text-white font-bold text-xs relative z-10">MORE</div>
            </button>
          </div>
        </div>

        <div className="mx-4 mt-6 space-y-4">
          {/* Special Offers Section */}
          <div className="bg-gradient-to-r from-orange-800/60 to-red-800/60 rounded-2xl p-4 border border-orange-500/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-orange-400/5 animate-pulse" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Gift className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Special Offers</h3>
                  <p className="text-orange-200 text-sm">Limited time bonuses</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform border border-yellow-400">
                VIEW ALL
              </button>
            </div>
          </div>

          {/* Live Winners Ticker */}
          <div className="bg-gradient-to-r from-green-800/60 to-emerald-800/60 rounded-2xl p-4 border border-green-500/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-emerald-400/5 animate-pulse" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-5 h-5 text-yellow-400 animate-bounce" />
                <h3 className="text-white font-bold">Live Winners</h3>
                <div className="flex-1 flex justify-end">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                    <span className="text-green-200 text-xs">LIVE</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { player: "Player***", amount: "$1,247", game: "Slots" },
                  { player: "Player***", amount: "$856", game: "Roulette" },
                  { player: "Player***", amount: "$2,134", game: "Wheel" },
                ].map((win, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-200 text-sm">{win.player}</span>
                      <span className="text-green-300 text-xs">won in {win.game}</span>
                    </div>
                    <span className="text-yellow-400 font-bold">{win.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VIP Progress */}
          <div className="bg-gradient-to-r from-purple-800/60 to-pink-800/60 rounded-2xl p-4 border border-purple-500/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-pink-400/5 animate-pulse" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold flex items-center gap-2">
                    VIP Level 3
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-black/30 rounded-full h-1.5 w-24">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-full w-3/4 rounded-full animate-pulse" />
                    </div>
                    <span className="text-purple-200 text-xs">2,340 XP</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-yellow-400 font-bold text-lg">15%</div>
                <div className="text-purple-200 text-xs">Bonus Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
