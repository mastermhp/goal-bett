"use client"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Wallet, TrendingUp, CreditCard, UserPlus, Receipt, DollarSign, ArrowUpRight } from "lucide-react"
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
      <div className="flex min-h-screen bg-[#0A1A2F] overflow-x-hidden">
        <AgentSidebar />

        <main className="flex-1 md:ml-64 p-6 sm:p-4 md:p-6 w-full min-w-0">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
              <div className="mt-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700]">Agent Dashboard</h1>
                <p className="text-sm sm:text-base text-[#F5F5F5] mt-1 sm:mt-2">
                  Manage your sales network and grow your business
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 bg-transparent text-xs sm:text-sm"
                  size="sm"
                >
                  <Receipt className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Sell Credits
                </Button>
                <Button
                  className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold text-xs sm:text-sm"
                  size="sm"
                >
                  <UserPlus className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Add Sub-Agent
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  title: "Wallet Balance",
                  value: "$12,450",
                  change: "+5.2%",
                  icon: Wallet,
                  color: "bg-[#FFD700]",
                  textColor: "text-[#0A1A2F]",
                },
                {
                  title: "Sub-Agents",
                  value: "8/10",
                  change: "2 slots available",
                  icon: Users,
                  color: "bg-green-500",
                  textColor: "text-white",
                },
                {
                  title: "Today's Sales",
                  value: "$2,100",
                  change: "+12.5%",
                  icon: TrendingUp,
                  color: "bg-blue-500",
                  textColor: "text-white",
                },
                {
                  title: "Commission Earned",
                  value: "$210",
                  change: "10% rate",
                  icon: CreditCard,
                  color: "bg-purple-500",
                  textColor: "text-white",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300"
                >
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-[#F5F5F5] text-xs sm:text-sm font-medium truncate">{stat.title}</p>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">{stat.value}</p>
                        <p className="text-green-400 text-xs sm:text-sm mt-1 truncate">{stat.change}</p>
                      </div>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.color} flex items-center justify-center flex-shrink-0 ml-2`}
                      >
                        <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.textColor}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Credit Distribution System */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                  Digital Credit Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-[#0A1A2F]/50 p-3 sm:p-4 rounded-lg border border-[#FFD700]/30">
                    <p className="text-[#F5F5F5] text-xs sm:text-sm mb-2">Available Credits</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#FFD700]">$50,000</p>
                    <p className="text-xs text-green-400 mt-1">Ready to distribute</p>
                  </div>
                  <div className="bg-[#0A1A2F]/50 p-3 sm:p-4 rounded-lg border border-[#FFD700]/30">
                    <p className="text-[#F5F5F5] text-xs sm:text-sm mb-2">Distributed Today</p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">$2,100</p>
                    <p className="text-xs text-[#F5F5F5] mt-1">15 transactions</p>
                  </div>
                  <div className="bg-[#0A1A2F]/50 p-3 sm:p-4 rounded-lg border border-[#FFD700]/30">
                    <p className="text-[#F5F5F5] text-xs sm:text-sm mb-2">Commission Rate</p>
                    <p className="text-2xl sm:text-3xl font-bold text-green-400">10%</p>
                    <p className="text-xs text-[#F5F5F5] mt-1">On all sales</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-2">
                  <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold text-xs sm:text-sm">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Sell Credits to Customer
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#FFD700] text-[#FFD700] bg-transparent text-xs sm:text-sm"
                  >
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Request More Credits
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sales Performance Chart */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                  Weekly Sales & Commission Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#F5F5F5" style={{ fontSize: "12px" }} />
                    <YAxis stroke="#F5F5F5" style={{ fontSize: "12px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0A1A2F",
                        border: "1px solid #FFD700",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#FFD700"
                      strokeWidth={2}
                      dot={{ fill: "#FFD700", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="commission"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      dot={{ fill: "#06b6d4", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sub-Agents and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Active Sub-Agents */}
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                    Active Sub-Agents Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "John Seller", sales: "$450", status: "online", commission: "$45", customers: 12 },
                      { name: "Mary Agent", sales: "$320", status: "online", commission: "$32", customers: 8 },
                      { name: "Bob Sales", sales: "$280", status: "offline", commission: "$28", customers: 6 },
                      { name: "Lisa Rep", sales: "$190", status: "online", commission: "$19", customers: 4 },
                    ].map((agent, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-[#0A1A2F]/50 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all"
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD700] rounded-full flex items-center justify-center relative flex-shrink-0">
                            <span className="text-xs sm:text-sm font-bold text-[#0A1A2F]">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                            <div
                              className={`absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${agent.status === "online" ? "bg-green-500" : "bg-gray-500"} border-2 border-[#0A1A2F]`}
                            ></div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-white text-xs sm:text-sm truncate">{agent.name}</p>
                            <p className="text-xs text-[#F5F5F5] truncate">
                              Today: {agent.sales} • {agent.customers} customers
                            </p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <Badge
                            variant={agent.status === "online" ? "default" : "secondary"}
                            className={
                              agent.status === "online"
                                ? "bg-green-500 text-white text-xs"
                                : "bg-gray-600 text-gray-300 text-xs"
                            }
                          >
                            {agent.status}
                          </Badge>
                          <p className="text-xs text-[#FFD700] mt-1 font-medium">Comm: {agent.commission}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
                    <Receipt className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                    Quick Actions Hub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: CreditCard, label: "Sell Credits", color: "bg-green-500" },
                      { icon: UserPlus, label: "Add Sub-Agent", color: "bg-blue-500" },
                      { icon: Receipt, label: "View Sales", color: "bg-purple-500" },
                      { icon: Wallet, label: "Withdraw Funds", color: "bg-[#FFD700]" },
                    ].map((action, index) => (
                      <Button
                        key={index}
                        className={`h-16 sm:h-20 flex flex-col items-center justify-center space-y-1 sm:space-y-2 ${action.color} hover:scale-105 transition-all duration-300 text-white font-bold`}
                      >
                        <action.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                        <span className="text-xs sm:text-sm">{action.label}</span>
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
