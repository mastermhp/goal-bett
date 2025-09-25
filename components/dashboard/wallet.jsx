"use client"
import { useState } from "react"
import { Card3D } from "@/components/ui/3d-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Plus, Minus, CreditCard, Smartphone, Bitcoin } from "lucide-react"

export function Wallet() {
  const [balance] = useState(125679)
  const [depositAmount, setDepositAmount] = useState(1000)
  const [activeTab, setActiveTab] = useState("deposit")

  const quickAmounts = [10, 50, 100, 500, 1000]

  const paymentMethods = [
    { id: "card", name: "Credit Card", icon: CreditCard, color: "from-blue-500 to-blue-600" },
    { id: "mobile", name: "Mobile Pay", icon: Smartphone, color: "from-green-500 to-green-600" },
    { id: "crypto", name: "Cryptocurrency", icon: Bitcoin, color: "from-orange-500 to-orange-600" },
  ]

  const transactions = [
    { type: "deposit", amount: 500, method: "Credit Card", time: "2 hours ago", status: "completed" },
    { type: "win", amount: 1250, method: "Slot Machine", time: "5 hours ago", status: "completed" },
    { type: "withdraw", amount: 800, method: "Bank Transfer", time: "1 day ago", status: "pending" },
    { type: "deposit", amount: 200, method: "Mobile Pay", time: "2 days ago", status: "completed" },
  ]

  const adjustAmount = (change) => {
    const newAmount = depositAmount + change
    if (newAmount >= 10 && newAmount <= 10000) {
      setDepositAmount(newAmount)
    }
  }

  return (
    <div className="pb-20 px-6 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">CASINO ROYAL</h1>
          <p className="text-muted-foreground">Manage your wallet</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
            👨‍💼
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <Card3D className="mb-8">
        <div className="glass p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 text-center">
          <p className="text-muted-foreground mb-2">Your Balance</p>
          <div className="text-4xl font-bold gradient-text mb-4">${balance.toLocaleString()}</div>
          <div className="flex gap-3">
            <AnimatedButton variant="primary" size="sm" className="flex-1">
              Deposit
            </AnimatedButton>
            <AnimatedButton variant="glass" size="sm" className="flex-1">
              Withdraw
            </AnimatedButton>
          </div>
        </div>
      </Card3D>

      {/* Bonus Deal */}
      <Card3D className="mb-8">
        <div className="glass p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 relative overflow-hidden">
          <div className="absolute right-4 top-4 text-6xl opacity-20">💰</div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-2">Bonus Deal!</h3>
            <p className="text-sm text-muted-foreground mb-4">Get 100% bonus on your first deposit today!</p>
            <AnimatedButton variant="gold" size="sm">
              Claim Now
            </AnimatedButton>
          </div>
        </div>
      </Card3D>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["deposit", "withdraw"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "bg-card/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Amount Input */}
      <Card3D className="mb-6">
        <div className="glass p-6 rounded-2xl">
          <h3 className="font-bold mb-4">Enter Amount</h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => adjustAmount(-100)}
              className="w-12 h-12 bg-card/50 rounded-full flex items-center justify-center hover:bg-card transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            <div className="text-3xl font-bold text-primary">Rs. {depositAmount}</div>
            <button
              onClick={() => adjustAmount(100)}
              className="w-12 h-12 bg-card/50 rounded-full flex items-center justify-center hover:bg-card transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-muted-foreground mb-4">Coins you will receive</p>
          <div className="text-center text-2xl font-bold text-green-400 mb-6">{depositAmount * 2}</div>

          {/* Quick Top Ups */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Quick Top Ups</h4>
            <div className="grid grid-cols-5 gap-2">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDepositAmount(amount)}
                  className={`p-3 rounded-lg border-2 font-bold text-sm transition-all ${
                    depositAmount === amount
                      ? "border-primary bg-primary/20 text-primary"
                      : "border-border bg-card/50 hover:border-primary/50"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card3D>

      {/* Payment Methods */}
      <Card3D className="mb-8">
        <div className="glass p-6 rounded-2xl">
          <h3 className="font-bold mb-4">Payment Methods</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className="w-full p-4 rounded-xl glass hover:bg-white/5 transition-colors flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}
                >
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{method.name}</div>
                  <div className="text-sm text-muted-foreground">Instant transfer</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card3D>

      {/* Recent Transactions */}
      <div className="mb-8">
        <h3 className="font-bold mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <Card3D key={index}>
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === "deposit"
                      ? "bg-green-500/20 text-green-400"
                      : transaction.type === "win"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {transaction.type === "deposit" ? "+" : transaction.type === "win" ? "🏆" : "-"}
                </div>
                <div className="flex-1">
                  <div className="font-medium capitalize">{transaction.type}</div>
                  <div className="text-sm text-muted-foreground">{transaction.method}</div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${transaction.type === "withdraw" ? "text-red-400" : "text-green-400"}`}>
                    {transaction.type === "withdraw" ? "-" : "+"}${transaction.amount}
                  </div>
                  <div className="text-xs text-muted-foreground">{transaction.time}</div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  )
}
