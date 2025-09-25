"use client"
import TopUpWithdraw from "@/components/wallet/top-up-withdraw"

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Wallet Management</h1>
          <p className="text-muted-foreground">Manage your deposits, withdrawals, and transaction history</p>
        </div>

        <TopUpWithdraw />
      </div>
    </div>
  )
}
