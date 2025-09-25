"use client"
import { useState } from "react"
import { Lock } from "lucide-react"
import { AuthLayout } from "@/components/ui/auth-layout"
import { InputField } from "@/components/ui/input-field"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
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

  const handleUpdatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords don't match" })
      return
    }
    console.log("Password updated")
    window.location.href = "/auth/select-avatar"
  }

  return (
    <AuthLayout
      title="Set new password"
      subtitle="Create a strong password for your account"
      showBack={true}
      onBack={() => (window.location.href = "/auth/verify")}
    >
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-10 w-10 text-primary" />
          </div>
        </div>

        <InputField
          label="Password"
          type="password"
          placeholder="Enter new password"
          value={formData.password}
          onChange={handleInputChange("password")}
          error={errors.password}
          icon={Lock}
        />

        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={handleInputChange("confirmPassword")}
          error={errors.confirmPassword}
          icon={Lock}
        />

        <div className="space-y-2">
          <p className="text-sm font-medium">Password requirements:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• At least 8 characters long</li>
            <li>• Contains uppercase and lowercase letters</li>
            <li>• Contains at least one number</li>
            <li>• Contains at least one special character</li>
          </ul>
        </div>

        <AnimatedButton variant="primary" size="lg" className="w-full" onClick={handleUpdatePassword}>
          Update Password
        </AnimatedButton>
      </div>
    </AuthLayout>
  )
}
