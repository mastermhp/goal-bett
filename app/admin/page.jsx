"use client"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AdminSidebar from "@/components/admin/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const revenueData = [
  { name: "Jan", revenue: 45000, bets: 24000, players: 1200 },
  { name: "Feb", revenue: 52000, bets: 28000, players: 1350 },
  { name: "Mar", revenue: 48000, bets: 26000, players: 1280 },
  { name: "Apr", revenue: 61000, bets: 32000, players: 1450 },
  { name: "May", revenue: 58000, bets: 30000, players: 1380 },
  { name: "Jun", revenue: 67000, bets: 35000, players: 1520 },
]

const gameData = [
  { name: "Slots", value: 45, color: "#f59e0b" },
  { name: "Roulette", value: 25, color: "#ef4444" },
  { name: "Blackjack", value: 20, color: "#10b981" },
  { name: "Poker", value: 10, color: "#8b5cf6" },
]

export default function AdminDashboard() {
  return (
    <RoleGuard requiredRole={ROLES.SUPERADMIN}>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
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

        <AdminSidebar />

        <main className="flex-1 md:ml-64 p-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div className="relative">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-lg rounded-lg"></div>
                <p className="text-gray-300 mt-2">Welcome back, manage your casino empire</p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 bg-transparent"
                >
                  Export Report
                </Button>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-bold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                  Create Agent
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Revenue",
                  value: "$67,000",
                  change: "+12.5%",
                  icon: "💰",
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  title: "Active Players",
                  value: "1,520",
                  change: "+8.2%",
                  icon: "👥",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  title: "Total Bets",
                  value: "35,000",
                  change: "+15.3%",
                  icon: "🎲",
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  title: "Win Rate",
                  value: "94.2%",
                  change: "+2.1%",
                  icon: "🏆",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border-white/10 hover:border-yellow-500/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span className="text-yellow-400">📊</span>
                    Revenue & Bets Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "1px solid #374151",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                      <Bar dataKey="revenue" fill="url(#goldGradient)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="bets" fill="url(#blueGradient)" radius={[4, 4, 0, 0]} />
                      <defs>
                        <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#0891b2" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span className="text-yellow-400">🎮</span>
                    Game Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={gameData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                        labelStyle={{ fill: "#fff", fontSize: "12px" }}
                      >
                        {gameData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "1px solid #374151",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="text-yellow-400">⚡</span>
                  Live Activity Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "John Doe",
                      action: "Won $2,500 on Mega Slots",
                      time: "2 minutes ago",
                      type: "win",
                      amount: "$2,500",
                    },
                    {
                      user: "Agent Smith",
                      action: "Created new sub-agent",
                      time: "5 minutes ago",
                      type: "agent",
                      amount: null,
                    },
                    {
                      user: "Jane Smith",
                      action: "Deposited $1,200",
                      time: "10 minutes ago",
                      type: "deposit",
                      amount: "$1,200",
                    },
                    {
                      user: "Mike Johnson",
                      action: "Hit jackpot on Roulette",
                      time: "15 minutes ago",
                      type: "jackpot",
                      amount: "$5,000",
                    },
                    {
                      user: "Sarah Wilson",
                      action: "Placed high bet on Blackjack",
                      time: "18 minutes ago",
                      type: "bet",
                      amount: "$800",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full animate-pulse ${
                            activity.type === "win" || activity.type === "jackpot"
                              ? "bg-green-500 shadow-lg shadow-green-500/50"
                              : activity.type === "agent"
                                ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                                : activity.type === "deposit"
                                  ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                                  : "bg-purple-500 shadow-lg shadow-purple-500/50"
                          }`}
                        />
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-black font-bold">
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-medium text-white">{activity.user}</p>
                          <p className="text-sm text-gray-300">{activity.action}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {activity.amount && <p className="font-bold text-yellow-400 text-lg">{activity.amount}</p>}
                        <span className="text-sm text-gray-400">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </RoleGuard>
  )
}
