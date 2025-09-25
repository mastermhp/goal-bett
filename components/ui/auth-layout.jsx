"use client"
import { ArrowLeft } from "lucide-react"
import { Logo } from "./logo"
import { FloatingElements } from "./floating-elements"

export function AuthLayout({ children, title, subtitle, showBack = false, onBack }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          {showBack ? (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}
          <Logo size="small" />
          <div className="w-16" />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-md space-y-8 animate-slide-up">
            {/* Title Section */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold gradient-text">{title}</h1>
              {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
            </div>

            {/* Form Content */}
            <div className="glass p-8 rounded-2xl space-y-6 animate-scale-in">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
