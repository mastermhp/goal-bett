"use client"
import { useState } from "react"
import { Card3D } from "@/components/ui/3d-card"
import AdminSidebar from "./admin-sidebar"

export function BetManagement() {
  const [filterStatus, setFilterStatus] = useState("all")

  const bets = [
    {
      id: "BET001",
      user: "John Doe",
      match: "Brentford vs Man Utd",
      selection: "Man Utd to Win",
      amount: "$100",
      odds: "2.5",
      potentialWin: "$250",
      status: "Won",
      date: "Jan 25, 2025",
    },
    {
      id: "BET002",
      user: "Jane Smith",
      match: "Chelsea vs Brighton",
      selection: "Over 2.5 Goals",
      amount: "$50",
      odds: "1.8",
      potentialWin: "$90",
      status: "Pending",
      date: "Jan 25, 2025",
    },
    {
      id: "BET003",
      user: "Mike Johnson",
      match: "Arsenal vs Liverpool",
      selection: "Draw",
      amount: "$200",
      odds: "3.2",
      potentialWin: "$640",
      status: "Lost",
      date: "Jan 24, 2025",
    },
  ]

  const filteredBets = filterStatus === "all" ? bets : bets.filter((bet) => bet.status.toLowerCase() === filterStatus)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#0D1F35] to-[#0A1A2F] text-[#F5F5F5] p-6">
        <AdminSidebar />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bet Management</h1>
          <p className="text-muted-foreground">Monitor and manage all betting activity</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex gap-2">
            {["all", "won", "lost", "pending"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  filterStatus === status
                    ? "bg-[#FFD700] text-[#0A1A2F]"
                    : "bg-[#1A2F45] text-[#B8C5D6] hover:bg-[#2A3F55]"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <Card3D>
          <div className="glass p-6 rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2A3F55]">
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Bet ID</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">User</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Match</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Selection</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Odds</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Potential Win</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBets.map((bet) => (
                    <tr key={bet.id} className="border-b border-[#2A3F55]/50 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">{bet.id}</td>
                      <td className="py-4 px-4">{bet.user}</td>
                      <td className="py-4 px-4">{bet.match}</td>
                      <td className="py-4 px-4 text-sm">{bet.selection}</td>
                      <td className="py-4 px-4 font-bold">{bet.amount}</td>
                      <td className="py-4 px-4 text-[#FFD700]">{bet.odds}</td>
                      <td className="py-4 px-4 font-bold text-green-400">{bet.potentialWin}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            bet.status === "Won"
                              ? "bg-green-500/20 text-green-400"
                              : bet.status === "Lost"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {bet.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{bet.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card3D>
      </div>
    </div>
  )
}
