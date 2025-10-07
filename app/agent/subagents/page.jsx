"use client"
import { useState } from "react"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { UserPlus, Users, DollarSign, TrendingUp, Edit, Trash2, Eye } from "lucide-react"

export default function SubAgentsPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    commissionRate: "5",
  })

  const subAgents = [
    {
      id: "SA-001",
      name: "John Seller",
      email: "john@example.com",
      phone: "+1234567890",
      location: "Nairobi",
      status: "active",
      totalSales: "$450",
      commission: "$45",
      customers: 12,
      joinedDate: "2024-12-15",
      commissionRate: "10%",
    },
    {
      id: "SA-002",
      name: "Mary Agent",
      email: "mary@example.com",
      phone: "+0987654321",
      location: "Mombasa",
      status: "active",
      totalSales: "$320",
      commission: "$32",
      customers: 8,
      joinedDate: "2024-12-20",
      commissionRate: "10%",
    },
    {
      id: "SA-003",
      name: "Bob Sales",
      email: "bob@example.com",
      phone: "+1122334455",
      location: "Kisumu",
      status: "inactive",
      totalSales: "$280",
      commission: "$28",
      customers: 6,
      joinedDate: "2024-12-10",
      commissionRate: "10%",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Sub-agent ${formData.name} created successfully!`)
    setIsAddDialogOpen(false)
    setFormData({ name: "", email: "", phone: "", location: "", commissionRate: "5" })
  }

  return (
    <RoleGuard requiredRole={ROLES.AGENT_OWNER}>
      <div className="flex min-h-screen bg-[#0A1A2F] overflow-x-hidden">
        <AgentSidebar />

        <main className="flex-1 md:ml-64 p-6 sm:p-4 md:p-6 w-full min-w-0">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
              <div className="mt-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700]">Sub-Agents Management</h1>
                <p className="text-sm sm:text-base text-[#F5F5F5] mt-1 sm:mt-2">
                  Manage your sub-agents network and track their performance
                </p>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold text-xs sm:text-sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Sub-Agent
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#0A1A2F] border-[#FFD700]/20 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-[#FFD700]">Create New Sub-Agent</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-[#F5F5F5]">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-[#FFD700]/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#F5F5F5]">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-[#FFD700]/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#F5F5F5]">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-[#FFD700]/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-[#F5F5F5]">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-white/5 border-[#FFD700]/30 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="commission" className="text-[#F5F5F5]">
                        Commission Rate (%)
                      </Label>
                      <Input
                        id="commission"
                        type="number"
                        min="1"
                        max="20"
                        value={formData.commissionRate}
                        onChange={(e) => setFormData({ ...formData, commissionRate: e.target.value })}
                        className="bg-white/5 border-[#FFD700]/30 text-white"
                        required
                      />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsAddDialogOpen(false)}
                        className="flex-1 border-[#FFD700]/30 text-[#F5F5F5]"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold"
                      >
                        Create Sub-Agent
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { title: "Total Sub-Agents", value: "8", icon: Users, color: "bg-blue-500" },
                { title: "Active Today", value: "6", icon: TrendingUp, color: "bg-green-500" },
                { title: "Total Sales", value: "$1,050", icon: DollarSign, color: "bg-[#FFD700]" },
                { title: "Total Commission", value: "$105", icon: DollarSign, color: "bg-purple-500" },
              ].map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-[#F5F5F5] text-xs sm:text-sm font-medium truncate">{stat.title}</p>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">{stat.value}</p>
                      </div>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.color} flex items-center justify-center flex-shrink-0 ml-2`}
                      >
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sub-Agents List */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#FFD700]" />
                  Sub-Agents Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subAgents.map((agent) => (
                    <div
                      key={agent.id}
                      className="p-4 bg-[#0A1A2F]/50 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center relative flex-shrink-0">
                            <span className="text-sm font-bold text-[#0A1A2F]">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                            <div
                              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${agent.status === "active" ? "bg-green-500" : "bg-gray-500"} border-2 border-[#0A1A2F]`}
                            ></div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-white truncate">{agent.name}</h3>
                              <Badge
                                variant={agent.status === "active" ? "default" : "secondary"}
                                className={
                                  agent.status === "active"
                                    ? "bg-green-500 text-white text-xs"
                                    : "bg-gray-600 text-gray-300 text-xs"
                                }
                              >
                                {agent.status}
                              </Badge>
                            </div>
                            <p className="text-xs text-[#F5F5F5]/70">{agent.id}</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 text-xs">
                              <div>
                                <p className="text-[#F5F5F5]/50">Email</p>
                                <p className="text-white truncate">{agent.email}</p>
                              </div>
                              <div>
                                <p className="text-[#F5F5F5]/50">Location</p>
                                <p className="text-white">{agent.location}</p>
                              </div>
                              <div>
                                <p className="text-[#F5F5F5]/50">Sales</p>
                                <p className="text-[#FFD700] font-semibold">{agent.totalSales}</p>
                              </div>
                              <div>
                                <p className="text-[#F5F5F5]/50">Commission</p>
                                <p className="text-green-400 font-semibold">{agent.commission}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#FFD700] text-[#FFD700] bg-transparent"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-500 text-blue-500 bg-transparent">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                        </div>
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
