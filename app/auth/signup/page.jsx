"use client"
import { useState } from "react"
import { User, Mail, Lock, Phone } from "lucide-react"
import { AuthLayout } from "@/components/ui/auth-layout"
import { InputField } from "@/components/ui/input-field"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0A1A2F] to-black/50 text-white relative overflow-hidden">
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

          <div className="text-center space-y-2">
            <div>
              <span className="text-muted-foreground">Already have an account? </span>
              <button
                onClick={() => (window.location.href = "/auth/login")}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Sign In
              </button>
            </div>

            {/* Agent login */}
            <div>
              <button
                onClick={() => (window.location.href = "/auth/login")}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Login as Agent
              </button>
            </div>
          </div>
        </div>
      </AuthLayout>
    </div>
  )
}
