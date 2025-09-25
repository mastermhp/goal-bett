"use client"
import { useState } from "react"
import { Card3D } from "@/components/ui/3d-card"
import { LightningParticles } from "@/components/ui/lightning-particles"
import { Search, Filter } from "lucide-react"

export function GamesLibrary() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All Games")

  const categories = ["All Games", "Trending", "Slots", "Card Games"]

  const games = [
    {
      title: "Spin It Rich!",
      category: "Slots",
      players: "2.5K",
      image: "/casino-spin-wheel.jpg",
      url: "/dashboard/games/spin-it-rich", // Updated to dashboard route structure
    },
    {
      title: "Treasures",
      category: "Slots",
      players: "1.8K",
      image: "/slot-machine-casino.png",
      url: "/dashboard/games/treasures", // Updated to dashboard route structure
    },
    {
      title: "Vegas Slots",
      category: "Slots",
      players: "3.2K",
      image: "/slot-machine-casino.png",
      url: "/dashboard/games/slots", // Updated to dashboard route structure
    },
    {
      title: "Roulette Pro",
      category: "Table Games",
      players: "950",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/games/roulette", // Updated to dashboard route structure
    },
    {
      title: "Spin Wheel",
      category: "Casual",
      players: "1.2K",
      image: "/casino-spin-wheel.jpg",
      url: "/dashboard/games/spin-wheel", // Updated to dashboard route structure
    },
    {
      title: "Blackjack Pro",
      category: "Card Games",
      players: "2.1K",
      image: "/sports-betting-interface.jpg",
      url: "/dashboard/games/blackjack", // Updated to dashboard route structure
    },
    {
      title: "Poker Master",
      category: "Card Games",
      players: "1.5K",
      image: "/sports-betting-interface.jpg",
      url: "/dashboard/games/poker", // Updated to dashboard route structure
    },
    {
      title: "Baccarat Elite",
      category: "Table Games",
      players: "800",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/games/baccarat", // Updated to dashboard route structure
    },
  ]

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All Games" || game.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pb-20 px-6 pt-6 relative">
      <LightningParticles intensity={15} className="opacity-30" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <h1 className="text-2xl font-bold">CASINO ROYAL</h1>
          <p className="text-muted-foreground">Choose your game</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <Filter className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
            👨‍💼
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 z-10">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-card/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 glass"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 z-10 relative">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-card/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        {filteredGames.map((game, index) => (
          <Card3D key={index} className="group">
            <button onClick={() => (window.location.href = game.url)} className="w-full text-left">
              <div className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300 relative">
                <LightningParticles intensity={8} className="opacity-20 rounded-2xl" />

                <div className="relative h-32 overflow-hidden z-10">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300" />

                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white font-bold text-sm mb-1">{game.title}</div>
                    <div className="text-white/80 text-xs">{game.players} playing</div>
                  </div>
                </div>
              </div>
            </button>
          </Card3D>
        ))}
      </div>
    </div>
  )
}
