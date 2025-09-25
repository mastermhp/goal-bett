"use client"
import { useState } from "react"
import { User, Mail, Lock, Phone, UserCheck } from "lucide-react"
import { AuthLayout } from "@/components/ui/auth-layout"
import { InputField } from "@/components/ui/input-field"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ROLES } from "@/components/auth/role-guard"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: ROLES.PLAYER, // Added role selection with default player role
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" })
    }
  }

  const handleSignUp = () => {
    const userData = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      avatar: "/placeholder-user.jpg",
      balance: 1000, // Starting balance
      createdAt: new Date().toISOString(),
    }

    // Store user data in localStorage for demo purposes
    localStorage.setItem("user", JSON.stringify(userData))

    console.log("Sign up attempt:", userData)
    // Redirect to verification
    window.location.href = "/auth/verify"
  }

  const roleOptions = [
    { value: ROLES.PLAYER, label: "Player", description: "Play games and manage wallet" },
    { value: ROLES.AGENT_SELLER, label: "Agent", description: "Sell bets and manage customers" },
  ]

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Goal Betting and start winning!"
      showBack={true}
      onBack={() => (window.location.href = "/")}
    >
      <div className="space-y-6">
        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleInputChange("fullName")}
          error={errors.fullName}
          icon={User}
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange("email")}
          error={errors.email}
          icon={Mail}
        />

        <InputField
          label="Phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange("phone")}
          error={errors.phone}
          icon={Phone}
        />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            Account Type
          </label>
          <div className="space-y-3">
            {roleOptions.map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.role === option.value
                    ? "border-primary bg-primary/10 shadow-lg"
                    : "border-border bg-card/50 hover:border-primary/50"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={option.value}
                  checked={formData.role === option.value}
                  onChange={handleInputChange("role")}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-medium text-foreground">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.role === option.value ? "border-primary bg-primary" : "border-border"
                  }`}
                >
                  {formData.role === option.value && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                </div>
              </label>
            ))}
          </div>
        </div>

        <InputField
          label="Password"
          type="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleInputChange("password")}
          error={errors.password}
          icon={Lock}
        />

        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleInputChange("confirmPassword")}
          error={errors.confirmPassword}
          icon={Lock}
        />

        <div className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1 rounded border-border" />
          <span className="text-sm text-muted-foreground">
            I agree to the{" "}
            <button className="text-primary hover:text-primary/80 transition-colors">Terms of Service</button> and{" "}
            <button className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</button>
          </span>
        </div>

        <AnimatedButton variant="primary" size="lg" className="w-full" onClick={handleSignUp}>
          Sign Up
        </AnimatedButton>

        <div className="text-center">
          <span className="text-muted-foreground">Already have an account? </span>
          <button
            onClick={() => (window.location.href = "/auth/login")}
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}
