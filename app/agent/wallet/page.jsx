"use client"
import { useState } from "react"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet, ArrowUpRight, ArrowDownLeft, DollarSign, CreditCard } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AgentWallet() {
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [depositAmount, setDepositAmount] = useState("")

  const transactions = [
    {
      id: "1",
      type: "credit",
      amount: "$210",
      description: "Commission - Week 1",
      date: "2025-01-05",
      status: "completed",
    },
    {
      id: "2",
      type: "debit",
      amount: "$500",
      description: "Withdrawal to Bank",
      date: "2025-01-04",
      status: "completed",
    },
    { id: "3", type: "credit", amount: "$5000", description: "Credit Top-up", date: "2025-01-03", status: "completed" },
    {
      id: "4",
      type: "credit",
      amount: "$180",
      description: "Commission - Sales",
      date: "2025-01-02",
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
              <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Wallet Management</h1>
              <p className="text-[#F5F5F5] mt-2">Manage your funds directly via mobile - Anywhere, Anytime</p>
            </div>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#0A1A2F] text-sm font-medium mb-2">Total Balance</p>
                      <p className="text-4xl font-bold text-[#0A1A2F]">$12,450</p>
                    </div>
                    <Wallet className="w-12 h-12 text-[#0A1A2F]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#F5F5F5] text-sm mb-2">Available Credits</p>
                      <p className="text-3xl font-bold text-white">$50,000</p>
                    </div>
                    <CreditCard className="w-10 h-10 text-[#FFD700]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#F5F5F5] text-sm mb-2">Pending Commission</p>
                      <p className="text-3xl font-bold text-green-400">$85</p>
                    </div>
                    <DollarSign className="w-10 h-10 text-green-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Deposit/Withdraw Tabs */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Manage Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="withdraw" className="space-y-4">
                  <TabsList className="bg-[#0A1A2F] border border-[#FFD700]/20">
                    <TabsTrigger
                      value="withdraw"
                      className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#0A1A2F]"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Withdraw
                    </TabsTrigger>
                    <TabsTrigger
                      value="deposit"
                      className="data-[state=active]:bg-[#FFD700] data-[state=active]:text-[#0A1A2F]"
                    >
                      <ArrowDownLeft className="w-4 h-4 mr-2" />
                      Request Credits
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="withdraw" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="withdrawAmount" className="text-white">
                          Withdrawal Amount
                        </Label>
                        <Input
                          id="withdrawAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          className="bg-white/5 border-[#FFD700]/30 text-white"
                        />
                      </div>

                      <div className="bg-[#FFD700]/10 border border-[#FFD700] rounded-lg p-4">
                        <p className="text-sm text-[#F5F5F5] mb-2">Withdrawal Information:</p>
                        <ul className="text-xs text-[#F5F5F5] space-y-1">
                          <li>• Minimum withdrawal: $50</li>
                          <li>• Processing time: 1-2 business days</li>
                          <li>• Funds will be sent to your registered bank account</li>
                        </ul>
                      </div>

                      <Button
                        className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold"
                        disabled={!withdrawAmount || Number.parseFloat(withdrawAmount) < 50}
                      >
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Withdraw ${withdrawAmount || "0"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="deposit" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="depositAmount" className="text-white">
                          Credit Amount
                        </Label>
                        <Input
                          id="depositAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="bg-white/5 border-[#FFD700]/30 text-white"
                        />
                      </div>

                      <div className="bg-[#FFD700]/10 border border-[#FFD700] rounded-lg p-4">
                        <p className="text-sm text-[#F5F5F5] mb-2">Credit Request Information:</p>
                        <ul className="text-xs text-[#F5F5F5] space-y-1">
                          <li>• Request will be sent to admin for approval</li>
                          <li>• Credits will be available once approved</li>
                          <li>• You can distribute credits digitally to customers</li>
                        </ul>
                      </div>

                      <Button
                        className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold"
                        disabled={!depositAmount}
                      >
                        <ArrowDownLeft className="mr-2 h-4 w-4" />
                        Request ${depositAmount || "0"} Credits
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white">Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((txn) => (
                    <div
                      key={txn.id}
                      className="flex items-center justify-between p-4 bg-[#0A1A2F]/50 rounded-lg border border-[#FFD700]/20"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            txn.type === "credit" ? "bg-green-500/20" : "bg-red-500/20"
                          }`}
                        >
                          {txn.type === "credit" ? (
                            <ArrowDownLeft className="w-5 h-5 text-green-400" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium">{txn.description}</p>
                          <p className="text-sm text-[#F5F5F5]">{txn.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${txn.type === "credit" ? "text-green-400" : "text-red-400"}`}>
                          {txn.type === "credit" ? "+" : "-"}
                          {txn.amount}
                        </p>
                        <p className="text-xs text-[#F5F5F5]">{txn.status}</p>
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
