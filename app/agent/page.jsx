"use client"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Wallet, TrendingUp, CreditCard, UserPlus, Receipt } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const salesData = [
  { name: "Mon", sales: 1200, commission: 120, customers: 45 },
  { name: "Tue", sales: 1900, commission: 190, customers: 52 },
  { name: "Wed", sales: 800, commission: 80, customers: 38 },
  { name: "Thu", sales: 1600, commission: 160, customers: 48 },
  { name: "Fri", sales: 2200, commission: 220, customers: 65 },
  { name: "Sat", sales: 2800, commission: 280, customers: 78 },
  { name: "Sun", sales: 2100, commission: 210, customers: 58 },
]

export default function AgentDashboard() {
  return (
    <RoleGuard requiredRole={ROLES.AGENT_OWNER}>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
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

        <AgentSidebar />

        <main className="flex-1 md:ml-64 p-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div className="relative">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Agent Dashboard
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-lg rounded-lg"></div>
                <p className="text-gray-300 mt-2">Manage your sales network and grow your business</p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 bg-transparent"
                >
                  <Receipt className="mr-2 h-4 w-4" />
                  Send Digital Slip
                </Button>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-bold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Sub-Agent
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Wallet Balance",
                  value: "$12,450",
                  change: "+5.2%",
                  icon: Wallet,
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  title: "Sub-Agents",
                  value: "8/10",
                  change: "2 slots available",
                  icon: Users,
                  color: "from-green-500 to-emerald-600",
                },
                {
                  title: "Today's Sales",
                  value: "$2,100",
                  change: "+12.5%",
                  icon: TrendingUp,
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  title: "Commission Earned",
                  value: "$210",
                  change: "10% rate",
                  icon: CreditCard,
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
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="text-yellow-400">📈</span>
                  Weekly Sales & Commission Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
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
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={{ fill: "#f59e0b", strokeWidth: 2, r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="commission"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      dot={{ fill: "#06b6d4", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span className="text-yellow-400">👥</span>
                    Active Sub-Agents Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "John Seller", sales: "$450", status: "online", commission: "$45", customers: 12 },
                      { name: "Mary Agent", sales: "$320", status: "online", commission: "$32", customers: 8 },
                      { name: "Bob Sales", sales: "$280", status: "offline", commission: "$28", customers: 6 },
                      { name: "Lisa Rep", sales: "$190", status: "online", commission: "$19", customers: 4 },
                    ].map((agent, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center relative">
                            <span className="text-sm font-bold text-black">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                            <div
                              className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${agent.status === "online" ? "bg-green-500" : "bg-gray-500"} border-2 border-black`}
                            ></div>
                          </div>
                          <div>
                            <p className="font-medium text-white">{agent.name}</p>
                            <p className="text-sm text-gray-300">
                              Today: {agent.sales} • {agent.customers} customers
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={agent.status === "online" ? "default" : "secondary"}
                            className={
                              agent.status === "online" ? "bg-green-500 text-white" : "bg-gray-600 text-gray-300"
                            }
                          >
                            {agent.status}
                          </Badge>
                          <p className="text-sm text-yellow-400 mt-1 font-medium">Comm: {agent.commission}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span className="text-yellow-400">⚡</span>
                    Quick Actions Hub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: CreditCard, label: "Top-up Customer", color: "from-green-500 to-emerald-600" },
                      { icon: UserPlus, label: "Add Sub-Agent", color: "from-blue-500 to-cyan-600" },
                      { icon: Receipt, label: "Digital Slip", color: "from-purple-500 to-pink-600" },
                      { icon: Wallet, label: "Withdraw Funds", color: "from-yellow-500 to-orange-600" },
                    ].map((action, index) => (
                      <Button
                        key={index}
                        className={`h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-300 text-white font-bold shadow-lg`}
                      >
                        <action.icon className="h-6 w-6" />
                        <span className="text-sm">{action.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </RoleGuard>
  )
}
