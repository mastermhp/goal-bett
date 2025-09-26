"use client"
import { useState } from "react"
import { Card3D } from "@/components/ui/3d-card"
import { LightningParticles } from "@/components/ui/lightning-particles"
import { BottomNavigation } from "@/components/ui/bottom-navigation"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Search, Filter, ArrowLeft, Star, Users, Zap, Crown, Dice1, Spade } from "lucide-react"

export default function CasinoPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "All", name: "All", icon: Crown, color: "text-yellow-400" },
    { id: "Live", name: "Live", icon: Zap, color: "text-red-400" },
    { id: "Slots", name: "Slots", icon: Star, color: "text-blue-400" },
    { id: "Table", name: "Table", icon: Dice1, color: "text-green-400" },
    { id: "Card", name: "Card", icon: Spade, color: "text-purple-400" },
    { id: "Crash", name: "Crash", icon: Zap, color: "text-orange-400" },
  ]

  const games = [
    {
      title: "Lightning Roulette",
      category: "Live",
      players: "3.2K",
      jackpot: "$125,000",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/games/roulette",
      isHot: true,
      multiplier: "500x",
    },
    {
      title: "Mega Fortune Slots",
      category: "Slots",
      players: "5.8K",
      jackpot: "$2.1M",
      image: "/slot-machine-casino.png",
      url: "/dashboard/games/slots",
      isHot: true,
      multiplier: "1000x",
    },
    {
      title: "Blackjack VIP",
      category: "Card",
      players: "2.1K",
      jackpot: "$50,000",
      image: "/sports-betting-interface.jpg",
      url: "/dashboard/games/blackjack",
      isHot: false,
      multiplier: "21x",
    },
    {
      title: "Crash Royale",
      category: "Crash",
      players: "4.5K",
      jackpot: "$75,000",
      image: "/casino-spin-wheel.jpg",
      url: "/dashboard/games/crash",
      isHot: true,
      multiplier: "∞x",
    },
    {
      title: "Baccarat Elite",
      category: "Table",
      players: "1.8K",
      jackpot: "$80,000",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/games/baccarat",
      isHot: false,
      multiplier: "8x",
    },
    {
      title: "Poker Championship",
      category: "Card",
      players: "3.7K",
      jackpot: "$150,000",
      image: "/sports-betting-interface.jpg",
      url: "/dashboard/games/poker",
      isHot: true,
      multiplier: "100x",
    },
    {
      title: "Dragon Tiger",
      category: "Live",
      players: "2.9K",
      jackpot: "$45,000",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/games/dragon-tiger",
      isHot: false,
      multiplier: "50x",
    },
    {
      title: "Book of Ra",
      category: "Slots",
      players: "6.2K",
      jackpot: "$890K",
      image: "/slot-machine-casino.png",
      url: "/dashboard/games/book-of-ra",
      isHot: true,
      multiplier: "5000x",
    },
  ]

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || game.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-slate-900 to-red-950 relative overflow-hidden">
      <FloatingElements />
      <LightningParticles intensity={20} className="opacity-40" />

      <div className="relative z-10 pb-20">
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-sm border-b border-orange-500/20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-orange-400" />
            </button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                CASINO ROYAL
              </h1>
              <p className="text-orange-300/80 text-sm">Premium Gaming Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-all duration-300">
              <Filter className="w-5 h-5 text-orange-400" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-sm font-bold animate-pulse">
              👑
            </div>
          </div>
        </div>

        <div className="px-6 pt-6">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
            <input
              type="text"
              placeholder="Search casino games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl text-white placeholder:text-orange-300/60 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="flex justify-between items-center gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-b from-orange-500/30 to-red-500/30 border-2 border-orange-500/50 shadow-lg shadow-orange-500/20"
                      : "bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-orange-500/30"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center ${
                      activeCategory === category.id ? "animate-pulse" : ""
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      activeCategory === category.id ? "text-orange-400" : "text-slate-400"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="px-6">
          <div className="grid grid-cols-2 gap-4">
            {filteredGames.map((game, index) => (
              <Card3D key={index} className="group">
                <button onClick={() => (window.location.href = game.url)} className="w-full text-left relative">
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 backdrop-blur-sm">
                    <LightningParticles intensity={12} className="opacity-30 rounded-2xl" />

                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {game.isHot && (
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                          🔥 HOT
                        </div>
                      )}

                      <div className="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {game.multiplier}
                      </div>
                    </div>

                    <div className="p-4 relative z-10">
                      <h3 className="text-white font-bold text-sm mb-2 group-hover:text-orange-400 transition-colors duration-300">
                        {game.title}
                      </h3>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Users className="w-3 h-3" />
                          <span>{game.players}</span>
                        </div>
                        <div className="text-yellow-400 font-bold">{game.jackpot}</div>
                      </div>

                      <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </Card3D>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation activeTab="games" />
    </div>
  )
}
