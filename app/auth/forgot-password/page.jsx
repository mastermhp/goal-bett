"use client"
import { useState } from "react"
import { Mail } from "lucide-react"
import { AuthLayout } from "@/components/ui/auth-layout"
import { InputField } from "@/components/ui/input-field"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleContinue = () => {
    if (!email) {
      setError("Please enter your email address")
      return
    }
    console.log("Password reset for:", email)
    window.location.href = "/auth/verify"
  }

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="We'll send you a link to reset your password"
      showBack={true}
      onBack={() => (window.location.href = "/auth/login")}
    >
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-10 w-10 text-primary" />
          </div>
        </div>

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError("")
          }}
          error={error}
          icon={Mail}
        />

        <AnimatedButton variant="primary" size="lg" className="w-full" onClick={handleContinue}>
          Continue
        </AnimatedButton>

        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/auth/login")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}
