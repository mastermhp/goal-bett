"use client"
import { useState } from "react"
import RoleGuard, { ROLES } from "@/components/auth/role-guard"
import AgentSidebar from "@/components/agent/agent-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Building2, Smartphone, CheckCircle2, Upload, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function RequestCreditsPage() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("bank")
  const [paymentProof, setPaymentProof] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setAmount("")
      setPaymentProof(null)
    }, 3000)
  }

  const pendingRequests = [
    {
      id: "REQ-001",
      amount: "$5,000",
      method: "Bank Transfer",
      status: "pending",
      date: "2025-01-07",
      time: "2 hours ago",
    },
    {
      id: "REQ-002",
      amount: "$3,000",
      method: "M-Pesa",
      status: "approved",
      date: "2025-01-06",
      time: "1 day ago",
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
              <h1 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Request Credits</h1>
              <p className="text-[#F5F5F5] mt-2">Make payment to admin and request credits for your wallet</p>
            </div>

            {/* Current Balance */}
            <Card className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 backdrop-blur-sm border-[#FFD700]/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#F5F5F5] text-sm mb-2">Current Wallet Balance</p>
                    <p className="text-4xl font-bold text-[#FFD700]">$12,450</p>
                  </div>
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#0A1A2F]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Request Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-[#FFD700]" />
                  Request New Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                    <p className="text-[#F5F5F5]">
                      Your credit request for ${amount} has been submitted to admin for approval.
                    </p>
                    <p className="text-[#FFD700] mt-2">You'll be notified once approved.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-white">
                        Credit Amount (USD)
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        min="100"
                        className="bg-white/5 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                      />
                      <p className="text-xs text-[#F5F5F5]/70">Minimum request: $100</p>
                    </div>

                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-4 gap-2">
                      {[1000, 2500, 5000, 10000].map((value) => (
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

                    {/* Payment Method */}
                    <div className="space-y-3">
                      <Label className="text-white">Select Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {/* Bank Transfer */}
                          <div
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              paymentMethod === "bank"
                                ? "border-[#FFD700] bg-[#FFD700]/10"
                                : "border-[#FFD700]/20 bg-white/5"
                            }`}
                            onClick={() => setPaymentMethod("bank")}
                          >
                            <RadioGroupItem value="bank" id="bank" />
                            <Label htmlFor="bank" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Building2 className="w-6 h-6 text-[#FFD700]" />
                              <div>
                                <p className="text-white font-medium">Bank Transfer</p>
                                <p className="text-xs text-[#F5F5F5]/70">Direct bank deposit</p>
                              </div>
                            </Label>
                          </div>

                          {/* M-Pesa */}
                          <div
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              paymentMethod === "mpesa"
                                ? "border-[#FFD700] bg-[#FFD700]/10"
                                : "border-[#FFD700]/20 bg-white/5"
                            }`}
                            onClick={() => setPaymentMethod("mpesa")}
                          >
                            <RadioGroupItem value="mpesa" id="mpesa" />
                            <Label htmlFor="mpesa" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Smartphone className="w-6 h-6 text-green-500" />
                              <div>
                                <p className="text-white font-medium">M-Pesa Pay</p>
                                <p className="text-xs text-[#F5F5F5]/70">Mobile money</p>
                              </div>
                            </Label>
                          </div>

                          {/* Orange Pay */}
                          <div
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              paymentMethod === "orange"
                                ? "border-[#FFD700] bg-[#FFD700]/10"
                                : "border-[#FFD700]/20 bg-white/5"
                            }`}
                            onClick={() => setPaymentMethod("orange")}
                          >
                            <RadioGroupItem value="orange" id="orange" />
                            <Label htmlFor="orange" className="flex items-center gap-3 cursor-pointer flex-1">
                              <Smartphone className="w-6 h-6 text-orange-500" />
                              <div>
                                <p className="text-white font-medium">Orange Pay</p>
                                <p className="text-xs text-[#F5F5F5]/70">Mobile money</p>
                              </div>
                            </Label>
                          </div>

                          {/* Card Payment */}
                          <div
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              paymentMethod === "card"
                                ? "border-[#FFD700] bg-[#FFD700]/10"
                                : "border-[#FFD700]/20 bg-white/5"
                            }`}
                            onClick={() => setPaymentMethod("card")}
                          >
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                              <CreditCard className="w-6 h-6 text-blue-500" />
                              <div>
                                <p className="text-white font-medium">Card Payment</p>
                                <p className="text-xs text-[#F5F5F5]/70">Debit/Credit card</p>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Payment Details */}
                    <div className="bg-[#FFD700]/10 border border-[#FFD700] rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Payment Instructions</h4>
                      {paymentMethod === "bank" && (
                        <div className="space-y-2 text-sm text-[#F5F5F5]">
                          <p>
                            <strong>Bank Name:</strong> KCB Bank
                          </p>
                          <p>
                            <strong>Account Number:</strong> 1234567890
                          </p>
                          <p>
                            <strong>Account Name:</strong> Goal Betting Ltd
                          </p>
                          <p>
                            <strong>Branch:</strong> Nairobi Main
                          </p>
                        </div>
                      )}
                      {paymentMethod === "mpesa" && (
                        <div className="space-y-2 text-sm text-[#F5F5F5]">
                          <p>
                            <strong>Paybill Number:</strong> 123456
                          </p>
                          <p>
                            <strong>Account Number:</strong> Your Agent ID
                          </p>
                          <p className="text-xs text-[#FFD700]">Send payment and upload confirmation below</p>
                        </div>
                      )}
                      {paymentMethod === "orange" && (
                        <div className="space-y-2 text-sm text-[#F5F5F5]">
                          <p>
                            <strong>Orange Money Number:</strong> +254 700 123 456
                          </p>
                          <p>
                            <strong>Account Name:</strong> Goal Betting
                          </p>
                          <p className="text-xs text-[#FFD700]">Send payment and upload confirmation below</p>
                        </div>
                      )}
                      {paymentMethod === "card" && (
                        <div className="space-y-2 text-sm text-[#F5F5F5]">
                          <p>Contact admin for card payment link</p>
                          <p className="text-xs text-[#FFD700]">You'll receive a secure payment link via email</p>
                        </div>
                      )}
                    </div>

                    {/* Upload Payment Proof */}
                    <div className="space-y-2">
                      <Label htmlFor="proof" className="text-white">
                        Upload Payment Proof
                      </Label>
                      <div className="border-2 border-dashed border-[#FFD700]/30 rounded-lg p-6 text-center hover:border-[#FFD700] transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                        <p className="text-[#F5F5F5] text-sm">Click to upload or drag and drop</p>
                        <p className="text-[#F5F5F5]/50 text-xs mt-1">PNG, JPG or PDF (max. 5MB)</p>
                        <Input
                          id="proof"
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => setPaymentProof(e.target.files[0])}
                          className="hidden"
                          required
                        />
                      </div>
                      {paymentProof && (
                        <p className="text-green-400 text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          {paymentProof.name} uploaded
                        </p>
                      )}
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-white">
                        Additional Notes (Optional)
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Add any additional information..."
                        className="bg-white/5 border-[#FFD700]/30 text-white placeholder:text-gray-400"
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1A2F] font-bold"
                      disabled={!amount || !paymentProof}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Submit Credit Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Pending Requests */}
            <Card className="bg-white/10 backdrop-blur-sm border-[#FFD700]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#FFD700]" />
                  Recent Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingRequests.map((req) => (
                    <div
                      key={req.id}
                      className="flex items-center justify-between p-4 bg-[#0A1A2F]/50 rounded-lg border border-[#FFD700]/20"
                    >
                      <div>
                        <p className="text-white font-medium">{req.amount}</p>
                        <p className="text-sm text-[#F5F5F5]">
                          {req.id} • {req.method}
                        </p>
                        <p className="text-xs text-[#F5F5F5]/70">{req.time}</p>
                      </div>
                      <Badge
                        className={req.status === "approved" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}
                      >
                        {req.status}
                      </Badge>
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
