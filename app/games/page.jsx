"use client"
import { useState } from "react"
import { SpinWheel } from "@/components/games/spin-wheel"
import { SlotMachine } from "@/components/games/slot-machine"
import { Roulette } from "@/components/games/roulette"
import { WinScreen } from "@/components/games/win-screen"
import { DailyRewards } from "@/components/games/daily-rewards"

export default function GamesPage() {
  const [currentGame, setCurrentGame] = useState("menu")

  const games = [
    { id: "spin-wheel", name: "Spin Wheel", icon: "🎡", component: SpinWheel },
    { id: "slot-machine", name: "Slot Machine", icon: "🎰", component: SlotMachine },
    { id: "roulette", name: "Roulette", icon: "🎯", component: Roulette },
    { id: "win-screen", name: "Win Screen", icon: "🏆", component: WinScreen },
    { id: "daily-rewards", name: "Daily Rewards", icon: "🎁", component: DailyRewards },
  ]

  if (currentGame !== "menu") {
    const game = games.find((g) => g.id === currentGame)
    if (game) {
      const GameComponent = game.component
      return <GameComponent />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">Casino Games</h1>
          <p className="text-xl text-muted-foreground">Choose your game and start winning!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setCurrentGame(game.id)}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">{game.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{game.name}</h3>
              <p className="text-muted-foreground">Click to play</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
