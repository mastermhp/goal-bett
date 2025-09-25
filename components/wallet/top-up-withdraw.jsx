"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  Smartphone,
  Bitcoin,
  DollarSign,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, fee: "2.5%" },
  { id: "mobile", name: "Mobile Money", icon: Smartphone, fee: "1.5%" },
  { id: "crypto", name: "Cryptocurrency", icon: Bitcoin, fee: "1.0%" },
  { id: "bank", name: "Bank Transfer", icon: DollarSign, fee: "0.5%" },
]

const transactionHistory = [
  { id: 1, type: "deposit", amount: 500, method: "Credit Card", status: "completed", date: "2024-01-15 14:30" },
  { id: 2, type: "withdraw", amount: 200, method: "Mobile Money", status: "pending", date: "2024-01-15 12:15" },
  { id: 3, type: "deposit", amount: 1000, method: "Bank Transfer", status: "completed", date: "2024-01-14 09:45" },
  { id: 4, type: "withdraw", amount: 150, method: "Crypto", status: "failed", date: "2024-01-13 16:20" },
]

export default function TopUpWithdraw() {
  const [amount, setAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [balance, setBalance] = useState(5000)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDeposit = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) return

    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setBalance((prev) => prev + Number.parseFloat(amount))
      setAmount("")
      setIsProcessing(false)

      // Show success notification
      alert(`Successfully deposited $${amount}`)
    }, 2000)
  }

  const handleWithdraw = async () => {
    if (!amount || Number.parseFloat(amount) <= 0 || Number.parseFloat(amount) > balance) return

    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setBalance((prev) => prev - Number.parseFloat(amount))
      setAmount("")
      setIsProcessing(false)

      // Show success notification
      alert(`Withdrawal of $${amount} is being processed`)
    }, 2000)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "failed":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Balance</p>
              <p className="text-3xl font-bold text-primary">${balance.toLocaleString()}</p>
            </div>
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="deposit" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deposit" className="flex items-center space-x-2">
            <ArrowDownLeft className="h-4 w-4" />
            <span>Deposit</span>
          </TabsTrigger>
          <TabsTrigger value="withdraw" className="flex items-center space-x-2">
            <ArrowUpRight className="h-4 w-4" />
            <span>Withdraw</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="deposit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Deposit Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[50, 100, 500, 1000].map((quickAmount) => (
                  <Button
                    key={quickAmount}
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount(quickAmount.toString())}
                  >
                    ${quickAmount}
                  </Button>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div
                        key={method.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5" />
                          <div className="flex-1">
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">Fee: {method.fee}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <Button
                className="w-full h-12"
                onClick={handleDeposit}
                disabled={!amount || Number.parseFloat(amount) <= 0 || isProcessing}
              >
                {isProcessing ? "Processing..." : `Deposit $${amount || "0"}`}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdraw" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-10"
                    max={balance}
                  />
                </div>
                <p className="text-sm text-muted-foreground">Available: ${balance.toLocaleString()}</p>
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[100, 500, 1000, balance].map((quickAmount, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount(quickAmount.toString())}
                    disabled={quickAmount > balance}
                  >
                    {index === 3 ? "All" : `$${quickAmount}`}
                  </Button>
                ))}
              </div>

              {/* Withdrawal Methods */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Withdrawal Method</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div
                        key={method.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5" />
                          <div className="flex-1">
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">Fee: {method.fee}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <Button
                className="w-full h-12"
                onClick={handleWithdraw}
                disabled={
                  !amount || Number.parseFloat(amount) <= 0 || Number.parseFloat(amount) > balance || isProcessing
                }
              >
                {isProcessing ? "Processing..." : `Withdraw $${amount || "0"}`}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactionHistory.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "deposit" ? "bg-green-500/20" : "bg-blue-500/20"
                    }`}
                  >
                    {transaction.type === "deposit" ? (
                      <ArrowDownLeft className="h-5 w-5 text-green-500" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{transaction.type}</p>
                    <p className="text-sm text-muted-foreground">{transaction.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    {transaction.type === "deposit" ? "+" : "-"}${transaction.amount}
                  </p>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(transaction.status)}
                    <Badge className={getStatusColor(transaction.status)}>{transaction.status}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
