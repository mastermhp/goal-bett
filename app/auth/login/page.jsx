"use client";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { AuthLayout } from "@/components/ui/auth-layout";
import { InputField } from "@/components/ui/input-field";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ROLES } from "@/components/auth/role-guard";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleLogin = () => {
    const demoUsers = {
      "player@demo.com": {
        role: ROLES.PLAYER,
        fullName: "John Player",
        balance: 2500,
        avatar: "/placeholder-user.jpg",
      },
      "agent@demo.com": {
        role: ROLES.AGENT_OWNER,
        fullName: "Agent Smith",
        balance: 15000,
        avatar: "/placeholder-user.jpg",
      },
      "admin@demo.com": {
        role: ROLES.SUPERADMIN,
        fullName: "Super Admin",
        balance: 100000,
        avatar: "/placeholder-user.jpg",
      },
    };

    const user = demoUsers[formData.email];
    if (user && formData.password === "demo123") {
      const userData = {
        id: Date.now(),
        email: formData.email,
        ...user,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(userData));

      // Role-based routing
      switch (user.role) {
        case ROLES.SUPERADMIN:
        case ROLES.TENANT_ADMIN:
          window.location.href = "/admin";
          break;
        case ROLES.AGENT_OWNER:
        case ROLES.AGENT_SELLER:
          window.location.href = "/agent";
          break;
        default:
          window.location.href = "/dashboard";
      }
    } else {
      setErrors({
        email:
          "Invalid credentials. Try: player@demo.com, agent@demo.com, or admin@demo.com with password: demo123",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0A1A2F] to-black/50  text-white relative overflow-hidden">
      <AuthLayout
        title="Login"
        subtitle="Welcome back! Sign in to your account"
        showBack={true}
        onBack={() => (window.location.href = "/")}
      >
        <div className="space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm">
            <p className="font-medium text-primary mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-gray-300">
              <p>Player: player@demo.com</p>
              <p>Agent: agent@demo.com</p>
              <p>Admin: admin@demo.com</p>
              <p>Password: demo123</p>
            </div>
          </div>

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
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange("password")}
            error={errors.password}
            icon={Lock}
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <button
              onClick={() => (window.location.href = "/auth/forgot-password")}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <AnimatedButton
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleLogin}
          >
            Log In
          </AnimatedButton>

          <div className="text-center">
            <span className="text-muted-foreground">
              Don't have an account?{" "}
            </span>
            <button
              onClick={() => (window.location.href = "/auth/signup")}
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}
