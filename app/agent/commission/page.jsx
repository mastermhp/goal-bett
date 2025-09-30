"use client"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, Calendar } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function CommissionTracking() {
  const weeklyData = [
    { day: "Mon", commission: 45, sales: 450 },
    { day: "Tue", commission: 52, sales: 520 },
    { day: "Wed", commission: 38, sales: 380 },
    { day: "Thu", commission: 48, sales: 480 },
    { day: "Fri", commission: 65, sales: 650 },
    { day: "Sat", commission: 78, sales: 780 },
    { day: "Sun", commission: 58, sales: 580 },
  ]

  const sourceData = [
    { name: "Direct Sales", value: 45, color: "#FFD700" },
    { name: "Sub-Agents", value: 35, color: "#06b6d4" },
    { name: "Bonuses", value: 20, color: "#10b981" },
  ]

  return (
    <RoleGuard requiredRole={ROLES.AGENT_OWNER}>
      <div className="flex min-h-screen bg-[#0A1A2F]">
        <AgentSidebar />

        <main className="flex-1 md:ml-64 p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Commission Tracking</h1>
              <p className="text-[#F5F5F5] mt-2">Real-time dashboard showing sales, balances, and commissions</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Total Commission",
                  value: "$1,245",
                  change: "+15.3%",
                  icon: DollarSign,
                  color: "bg-[#FFD700]",
                },
                { title: "This Week", value: "$384", change: "+8.2%", icon: Calendar, color: "bg-green-500" },
                { title: "Commission Rate", value: "10%", change: "Standard", icon: TrendingUp, color: "bg-blue-500" },
                { title: "Active Sources", value: "12", change: "8 sub-agents", icon: Users, color: "bg-purple-500" },
              ].map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#F5F5F5] text-sm mb-2">{stat.title}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-green-400 text-xs mt-1">{stat.change}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Commission Chart */}
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Commission Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="day" stroke="#F5F5F5" />
                      <YAxis stroke="#F5F5F5" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0A1A2F",
                          border: "1px solid #FFD700",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="commission" fill="#FFD700" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Commission Sources */}
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardHeader>
                  <CardTitle className="text-white">Commission Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Commission Details */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Commission Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { source: "Direct Credit Sale", amount: "$45", customer: "+254712345678", time: "2 hours ago" },
                    {
                      source: "Sub-Agent: John Seller",
                      amount: "$32",
                      customer: "Commission share",
                      time: "5 hours ago",
                    },
                    { source: "Direct Credit Sale", amount: "$28", customer: "+254798765432", time: "1 day ago" },
                    { source: "Sub-Agent: Mary Agent", amount: "$19", customer: "Commission share", time: "1 day ago" },
                    { source: "Weekly Bonus", amount: "$50", customer: "Performance bonus", time: "2 days ago" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-[#0A1A2F]/50 rounded-lg border border-[#FFD700]/20"
                    >
                      <div>
                        <p className="text-white font-medium">{item.source}</p>
                        <p className="text-sm text-[#F5F5F5]">{item.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">{item.amount}</p>
                        <p className="text-xs text-[#F5F5F5]">{item.time}</p>
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
