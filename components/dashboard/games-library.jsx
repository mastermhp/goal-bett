"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, Star, Zap, Crown, Gem, Trophy } from "lucide-react"
import Link from "next/link"

export function GamesLibrary() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All Games")

  const categories = [
    { id: "All Games", name: "All Games", icon: null },
    { id: "Slots", name: "Slots", icon: "🎰" },
    { id: "Live Casino", name: "Live Casino", icon: "🎭" },
    { id: "Table Games", name: "Table Games", icon: "🃏" },
    { id: "Jackpots", name: "Jackpots", icon: "💎" },
    { id: "New", name: "New", icon: "⭐" },
  ]

  const featuredGames = [
    {
      title: "Mega Fortune Dreams",
      category: "Jackpots",
      jackpot: "$2,847,392",
      image: "/slot-machine-casino.png",
      url: "/dashboard/casino/slots",
      featured: true,
      hot: true,
    },
    {
      title: "Lightning Roulette",
      category: "Live Casino",
      players: "1,247",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/casino/roulette",
      featured: true,
      live: true,
    },
  ]

  const games = [
    {
      title: "Spin It Rich!",
      category: "Slots",
      players: "2.5K",
      image: "/casino-spin-wheel.jpg",
      url: "/dashboard/casino/spin-it-rich",
      rtp: "96.5%",
    },
    {
      title: "Treasures",
      category: "Slots",
      players: "1.8K",
      image: "/slot-machine-casino.png",
      url: "/dashboard/casino/treasures",
      rtp: "95.8%",
    },
    {
      title: "Vegas Slots",
      category: "Slots",
      players: "3.2K",
      image: "/slot-machine-casino.png",
      url: "/dashboard/casino/slots",
      rtp: "97.1%",
      hot: true,
    },
    {
      title: "European Roulette",
      category: "Table Games",
      players: "950",
      image: "/casino-roulette-table.jpg",
      url: "/dashboard/casino/roulette",
      rtp: "97.3%",
    },
    {
      title: "Spin Wheel",
      category: "Slots",
      players: "1.2K",
      image: "/casino-spin-wheel.jpg",
      url: "/dashboard/casino/spin-wheel",
      rtp: "94.2%",
    },
    {
      title: "Blackjack Pro",
      category: "Table Games",
      players: "2.1K",
      image: "/sports-betting-interface.jpg",
      url: "/dashboard/casino/blackjack",
      rtp: "99.5%",
      new: true,
    },
  ]

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All Games" || game.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-800 to-pink-800 border-b border-purple-600/30 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-yellow-400">Casino</h1>
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white">
                  All Games
                </Button>
                <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white">
                  Live Casino
                </Button>
                <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white">
                  Jackpots
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-300" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-purple-800/50 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-yellow-500"
                />
              </div>
              <Button variant="outline" size="sm" className="border-purple-600/30 text-purple-200 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? "bg-yellow-500 text-black"
                  : "bg-purple-800/50 text-purple-200 hover:bg-purple-700/50"
              }`}
            >
              {category.icon && <span>{category.icon}</span>}
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Games */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
            <Crown className="h-5 w-5" />
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredGames.map((game, index) => (
              <Link key={index} href={game.url}>
                <Card className="bg-gradient-to-br from-purple-800/80 to-pink-800/80 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0 relative">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {game.featured && (
                          <Badge className="bg-yellow-500 text-black font-bold">
                            <Star className="h-3 w-3 mr-1" />
                            FEATURED
                          </Badge>
                        )}
                        {game.hot && (
                          <Badge className="bg-red-500 text-white animate-pulse">
                            <Zap className="h-3 w-3 mr-1" />
                            HOT
                          </Badge>
                        )}
                        {game.live && (
                          <Badge className="bg-green-500 text-white">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1" />
                            LIVE
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-300 text-sm">{game.category}</span>
                          {game.jackpot ? (
                            <div className="text-right">
                              <div className="text-xs text-yellow-400">JACKPOT</div>
                              <div className="text-lg font-bold text-yellow-400">{game.jackpot}</div>
                            </div>
                          ) : (
                            <div className="text-right">
                              <div className="text-xs text-purple-300">Players</div>
                              <div className="text-sm font-bold text-white">{game.players}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* All Games */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
            <Gem className="h-5 w-5" />
            All Games
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredGames.map((game, index) => (
              <Link key={index} href={game.url}>
                <Card className="bg-purple-800/50 border border-purple-600/30 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0 relative">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {game.hot && <Badge className="bg-red-500 text-white text-xs animate-pulse">HOT</Badge>}
                        {game.new && <Badge className="bg-green-500 text-white text-xs">NEW</Badge>}
                      </div>

                      {/* RTP */}
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-blue-500/80 text-white text-xs">RTP {game.rtp}</Badge>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white font-bold text-sm mb-1 truncate">{game.title}</h3>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-purple-300">{game.category}</span>
                          <span className="text-purple-300">{game.players}</span>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-400">Play Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Jackpot Ticker */}
        <div className="fixed bottom-20 left-0 right-0 z-40 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Trophy className="h-4 w-4" />
              <span className="font-bold">MEGA JACKPOT: $2,847,392</span>
            </div>
            <div className="flex items-center space-x-2">
              <Crown className="h-4 w-4" />
              <span className="font-bold">DAILY JACKPOT: $47,293</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gem className="h-4 w-4" />
              <span className="font-bold">HOURLY JACKPOT: $3,847</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
