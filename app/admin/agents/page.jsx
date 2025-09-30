"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Clock, Search, Eye, UserCheck, UserX, Download, Filter } from "lucide-react"
import AdminSidebar from "@/components/admin/admin-sidebar"

export default function AgentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAgent, setSelectedAgent] = useState(null)

  const pendingAgents = [
    {
      id: "AG-001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      location: "Nairobi, Kenya",
      appliedDate: "2025-01-05",
      status: "pending",
      idNumber: "12345678",
      bankAccount: "1234567890",
      bankName: "KCB Bank",
    },
    {
      id: "AG-002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+0987654321",
      location: "Mombasa, Kenya",
      appliedDate: "2025-01-04",
      status: "pending",
      idNumber: "87654321",
      bankAccount: "0987654321",
      bankName: "Equity Bank",
    },
  ]

  const approvedAgents = [
    {
      id: "AG-100",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1122334455",
      location: "Kisumu, Kenya",
      approvedDate: "2024-12-20",
      status: "approved",
      totalSales: "$12,450",
      commission: "$1,245",
      subAgents: 3,
    },
    {
      id: "AG-101",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+5544332211",
      location: "Eldoret, Kenya",
      approvedDate: "2024-12-15",
      status: "approved",
      totalSales: "$8,320",
      commission: "$832",
      subAgents: 2,
    },
  ]

  const rejectedAgents = [
    {
      id: "AG-200",
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "+9988776655",
      location: "Nakuru, Kenya",
      rejectedDate: "2025-01-03",
      status: "rejected",
      reason: "Incomplete documentation",
    },
  ]

  const handleApprove = (agentId) => {
    alert(`Agent ${agentId} approved successfully!`)
  }

  const handleReject = (agentId) => {
    const reason = prompt("Enter rejection reason:")
    if (reason) {
      alert(`Agent ${agentId} rejected. Reason: ${reason}`)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#0A1A2F] overflow-x-hidden">
      <AdminSidebar />

      <main className="flex-1 md:ml-64 p-3 sm:p-4 md:p-6 w-full min-w-0">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700]">Agent Management</h1>
              <p className="text-sm sm:text-base text-[#F5F5F5] mt-1 sm:mt-2">Review and manage agent applications</p>
            </div>
            <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold text-xs sm:text-sm w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: "Pending", value: pendingAgents.length, icon: Clock, color: "bg-yellow-500" },
              { title: "Approved", value: approvedAgents.length, icon: CheckCircle, color: "bg-green-500" },
              { title: "Rejected", value: rejectedAgents.length, icon: XCircle, color: "bg-red-500" },
              { title: "Total Sales", value: "$20,770", icon: UserCheck, color: "bg-blue-500" },
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-[#F5F5F5] text-xs sm:text-sm truncate">{stat.title}</p>
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

          <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name, email, or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/5 border-[#FFD700]/30 text-white text-sm"
                  />
                </div>
                <Button variant="outline" className="border-[#FFD700] text-[#FFD700] bg-transparent text-xs sm:text-sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="pending" className="space-y-4">
            <div className="overflow-x-auto">
              <TabsList className="bg-white/10 border border-[#FFD700]/20 inline-flex w-full sm:w-auto">
                <TabsTrigger
                  value="pending"
                  className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#0A1A2F] text-xs sm:text-sm whitespace-nowrap"
                >
                  Pending ({pendingAgents.length})
                </TabsTrigger>
                <TabsTrigger
                  value="approved"
                  className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#0A1A2F] text-xs sm:text-sm whitespace-nowrap"
                >
                  Approved ({approvedAgents.length})
                </TabsTrigger>
                <TabsTrigger
                  value="rejected"
                  className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#0A1A2F] text-xs sm:text-sm whitespace-nowrap"
                >
                  Rejected ({rejectedAgents.length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="pending" className="space-y-3 sm:space-y-4">
              {pendingAgents.map((agent) => (
                <Card key={agent.id} className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm sm:text-lg font-bold text-[#0A1A2F]">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white truncate">{agent.name}</h3>
                            <p className="text-xs sm:text-sm text-[#F5F5F5]">{agent.id}</p>
                          </div>
                          <Badge className="bg-yellow-500 text-black text-xs flex-shrink-0">
                            <Clock className="w-3 h-3 mr-1" />
                            Pending
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm">
                          <div className="min-w-0">
                            <p className="text-gray-400">Email</p>
                            <p className="text-white truncate">{agent.email}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="text-gray-400">Phone</p>
                            <p className="text-white truncate">{agent.phone}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="text-gray-400">Location</p>
                            <p className="text-white truncate">{agent.location}</p>
                          </div>
                          <div className="min-w-0">
                            <p className="text-gray-400">Applied Date</p>
                            <p className="text-white">{agent.appliedDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row lg:flex-col gap-2 lg:ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#FFD700] text-[#FFD700] bg-transparent flex-1 lg:flex-none text-xs"
                          onClick={() => setSelectedAgent(agent)}
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-white flex-1 lg:flex-none text-xs"
                          onClick={() => handleApprove(agent.id)}
                        >
                          <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReject(agent.id)}
                          className="flex-1 lg:flex-none text-xs"
                        >
                          <UserX className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              {approvedAgents.map((agent) => (
                <Card key={agent.id} className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-[#0A1A2F]">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                            <p className="text-sm text-[#F5F5F5]">{agent.id}</p>
                          </div>
                          <Badge className="bg-green-500 text-white">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Active
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Email</p>
                            <p className="text-white">{agent.email}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Location</p>
                            <p className="text-white">{agent.location}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Total Sales</p>
                            <p className="text-[#FFD700] font-bold">{agent.totalSales}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Commission</p>
                            <p className="text-green-400 font-bold">{agent.commission}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Sub-Agents</p>
                            <p className="text-white">{agent.subAgents}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#FFD700] text-[#FFD700] ml-4 bg-transparent"
                        onClick={() => setSelectedAgent(agent)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              {rejectedAgents.map((agent) => (
                <Card key={agent.id} className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                            <p className="text-sm text-[#F5F5F5]">{agent.id}</p>
                          </div>
                          <Badge className="bg-red-500 text-white">
                            <XCircle className="w-3 h-3 mr-1" />
                            Rejected
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Email</p>
                            <p className="text-white">{agent.email}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Location</p>
                            <p className="text-white">{agent.location}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Rejected Date</p>
                            <p className="text-white">{agent.rejectedDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Reason</p>
                            <p className="text-red-400">{agent.reason}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
