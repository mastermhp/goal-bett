"use client"
import { useState } from "react"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Send, CheckCircle, History } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SellCredits() {
  const [customerPhone, setCustomerPhone] = useState("")
  const [amount, setAmount] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSellCredits = (e) => {
    e.preventDefault()
    // Process credit sale
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setCustomerPhone("")
      setAmount("")
    }, 3000)
  }

  const recentTransactions = [
    { id: "TXN001", phone: "+254712345678", amount: "$50", commission: "$5", time: "2 mins ago", status: "completed" },
    {
      id: "TXN002",
      phone: "+254798765432",
      amount: "$100",
      commission: "$10",
      time: "15 mins ago",
      status: "completed",
    },
    {
      id: "TXN003",
      phone: "+254723456789",
      amount: "$25",
      commission: "$2.5",
      time: "1 hour ago",
      status: "completed",
    },
    {
      id: "TXN004",
      phone: "+254756789012",
      amount: "$75",
      commission: "$7.5",
      time: "2 hours ago",
      status: "completed",
    },
  ]

  return (
    <RoleGuard requiredRole={ROLES.AGENT_OWNER}>
      <div className="flex min-h-screen bg-[#0A1A2F]">
        <AgentSidebar />

        <main className="flex-1 md:ml-64 p-4 md:p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Sell Credits</h1>
              <p className="text-[#F5F5F5] mt-2">Distribute credits digitally to customers - No tickets required</p>
            </div>

            {/* Available Credits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardContent className="p-6">
                  <p className="text-[#F5F5F5] text-sm mb-2">Available Credits</p>
                  <p className="text-3xl font-bold text-[#FFD700]">$50,000</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardContent className="p-6">
                  <p className="text-[#F5F5F5] text-sm mb-2">Today's Sales</p>
                  <p className="text-3xl font-bold text-white">$2,100</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardContent className="p-6">
                  <p className="text-[#F5F5F5] text-sm mb-2">Commission Earned</p>
                  <p className="text-3xl font-bold text-green-400">$210</p>
                </CardContent>
              </Card>
            </div>

            {/* Sell Credits Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-[#FFD700]" />
                  Digital Credit Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Credits Sent Successfully!</h3>
                    <p className="text-[#F5F5F5]">
                      ${amount} has been credited to {customerPhone}
                    </p>
                    <p className="text-green-400 mt-2">
                      Your commission: ${(Number.parseFloat(amount) * 0.1).toFixed(2)}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSellCredits} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Customer Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254712345678"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        required
                        className="bg-white/5 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-white">
                        Amount (USD)
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        min="1"
                        className="bg-white/5 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                      />
                    </div>

                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-4 gap-2">
                      {[10, 25, 50, 100].map((value) => (
                        <Button
                          key={value}
                          type="button"
                          variant="outline"
                          onClick={() => setAmount(value.toString())}
                          className="border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10"
                        >
                          ${value}
                        </Button>
                      ))}
                    </div>

                    {/* Commission Preview */}
                    {amount && (
                      <div className="bg-[#FFD700]/10 border border-[#FFD700] rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[#F5F5F5]">Customer receives:</span>
                          <span className="text-white font-bold">${amount}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-[#F5F5F5]">Your commission (10%):</span>
                          <span className="text-green-400 font-bold">
                            ${(Number.parseFloat(amount) * 0.1).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold"
                      disabled={!customerPhone || !amount}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Credits
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <History className="w-6 h-6 text-[#FFD700]" />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((txn) => (
                    <div
                      key={txn.id}
                      className="flex items-center justify-between p-4 bg-[#0A1A2F]/50 rounded-lg border border-[#FFD700]/20"
                    >
                      <div>
                        <p className="text-white font-medium">{txn.phone}</p>
                        <p className="text-sm text-[#F5F5F5]">
                          {txn.id} • {txn.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{txn.amount}</p>
                        <p className="text-sm text-green-400">+{txn.commission} commission</p>
                      </div>
                      <Badge className="bg-green-500 text-white">{txn.status}</Badge>
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
