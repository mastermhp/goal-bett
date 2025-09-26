"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, Users, Play, Volume2, VolumeX, Maximize, Settings } from "lucide-react"

export default function LiveCasinoPage() {
  const [selectedGame, setSelectedGame] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [isMuted, setIsMuted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = [
    { id: "All", name: "All Games" },
    { id: "Roulette", name: "Roulette" },
    { id: "Blackjack", name: "Blackjack" },
    { id: "Baccarat", name: "Baccarat" },
    { id: "Game Shows", name: "Game Shows" },
    { id: "Poker", name: "Poker" },
  ]

  const liveGames = [
    {
      id: 1,
      title: "Lightning Roulette",
      dealer: "Emma",
      category: "Roulette",
      players: 1247,
      minBet: "$1",
      maxBet: "$5000",
      image: "/casino-roulette-table.jpg",
      status: "live",
      featured: true,
      language: "EN",
    },
    {
      id: 2,
      title: "Blackjack VIP",
      dealer: "Michael",
      category: "Blackjack",
      players: 892,
      minBet: "$25",
      maxBet: "$10000",
      image: "/sports-betting-interface.jpg",
      status: "live",
      featured: false,
      language: "EN",
    },
    {
      id: 3,
      title: "Speed Baccarat",
      dealer: "Sofia",
      category: "Baccarat",
      players: 654,
      minBet: "$5",
      maxBet: "$2500",
      image: "/casino-roulette-table.jpg",
      status: "live",
      featured: true,
      language: "EN",
    },
    {
      id: 4,
      title: "Crazy Time",
      dealer: "James",
      category: "Game Shows",
      players: 2341,
      minBet: "$0.10",
      maxBet: "$1000",
      image: "/casino-spin-wheel.jpg",
      status: "live",
      featured: true,
      language: "EN",
    },
    {
      id: 5,
      title: "Dream Catcher",
      dealer: "Anna",
      category: "Game Shows",
      players: 1876,
      minBet: "$1",
      maxBet: "$2500",
      image: "/casino-spin-wheel.jpg",
      status: "live",
      featured: false,
      language: "EN",
    },
    {
      id: 6,
      title: "Auto Roulette",
      dealer: "Auto",
      category: "Roulette",
      players: 543,
      minBet: "$0.50",
      maxBet: "$1000",
      image: "/casino-roulette-table.jpg",
      status: "live",
      featured: false,
      language: "EN",
    },
  ]

  const filteredGames = liveGames.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || game.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-950 to-red-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-orange-800 border-b border-red-600/30 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                Live Casino
              </h1>
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-red-200 hover:text-white">
                  All Tables
                </Button>
                <Button variant="ghost" size="sm" className="text-red-200 hover:text-white">
                  VIP Tables
                </Button>
                <Button variant="ghost" size="sm" className="text-red-200 hover:text-white">
                  Game Shows
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-300" />
                <input
                  type="text"
                  placeholder="Search live games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-red-800/50 border border-red-600/30 rounded-lg text-white placeholder-red-300 focus:outline-none focus:border-yellow-500"
                />
              </div>
              <Button variant="outline" size="sm" className="border-red-600/30 text-red-200 bg-transparent">
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
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? "bg-yellow-500 text-black"
                  : "bg-red-800/50 text-red-200 hover:bg-red-700/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Games */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Featured Live Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames
              .filter((game) => game.featured)
              .map((game) => (
                <Card
                  key={game.id}
                  className="bg-gradient-to-br from-red-800/80 to-orange-800/80 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedGame(game)}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Live indicator */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-500 text-white animate-pulse">
                          <div className="w-2 h-2 bg-white rounded-full mr-1" />
                          LIVE
                        </Badge>
                      </div>

                      {/* Language */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-blue-500/80 text-white">{game.language}</Badge>
                      </div>

                      {/* Players count */}
                      <div className="absolute top-12 right-3">
                        <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                          <Users className="h-3 w-3 text-white" />
                          <span className="text-white text-xs">{game.players}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-red-300 text-sm">Dealer: {game.dealer}</span>
                          <span className="text-red-300 text-sm">{game.category}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-red-200">
                          <span>Min: {game.minBet}</span>
                          <span>Max: {game.maxBet}</span>
                        </div>
                      </div>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-400">
                          <Play className="h-4 w-4 mr-2" />
                          Join Table
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Live Games */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            All Live Tables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-red-800/50 border border-red-600/30 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedGame(game)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Live indicator */}
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white text-xs animate-pulse">LIVE</Badge>
                    </div>

                    {/* Players */}
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 bg-black/50 rounded px-1 py-0.5">
                        <Users className="h-3 w-3 text-white" />
                        <span className="text-white text-xs">{game.players}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-bold text-sm mb-1 truncate">{game.title}</h3>
                      <div className="flex items-center justify-between text-xs text-red-200 mb-1">
                        <span>Dealer: {game.dealer}</span>
                        <span>{game.language}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-red-300">
                        <span>
                          {game.minBet} - {game.maxBet}
                        </span>
                        <span>{game.category}</span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-yellow-500 text-black font-bold hover:bg-yellow-400">
                        Join
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-red-600/30">
              <div className="flex items-center gap-4">
                <Badge className="bg-red-500 text-white animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full mr-1" />
                  LIVE
                </Badge>
                <h3 className="text-xl font-bold text-white">{selectedGame.title}</h3>
                <span className="text-red-300">Dealer: {selectedGame.dealer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-red-200 hover:text-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="sm" className="text-red-200 hover:text-white">
                  <Maximize className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-200 hover:text-white">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedGame(null)}
                  className="text-red-200 hover:text-white"
                >
                  ✕
                </Button>
              </div>
            </div>

            {/* Game Area */}
            <div className="aspect-video bg-black relative">
              <img
                src={selectedGame.image || "/placeholder.svg"}
                alt={selectedGame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-400 text-lg px-8 py-4">
                  <Play className="h-6 w-6 mr-2" />
                  Start Playing
                </Button>
              </div>

              {/* Game stats */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{selectedGame.players} players</span>
                  </div>
                  <span>Min: {selectedGame.minBet}</span>
                  <span>Max: {selectedGame.maxBet}</span>
                </div>
                <Badge className="bg-blue-500/80 text-white">{selectedGame.language}</Badge>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
