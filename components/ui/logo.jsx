"use client"
import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-auto",
    default: "h-12 w-auto",
    large: "h-20 w-auto",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link href="/">
        <Image
          src="/images/goal-betting-logo.png"
          alt="Goal Betting"
          width={size === "large" ? 80 : size === "small" ? 32 : 48}
          height={size === "large" ? 80 : size === "small" ? 32 : 48}
          className={`${sizeClasses[size]} animate-pulse-glow`}
        />
      </Link>
      <span className={`font-bold gradient-text ${size === "large" ? "text-2xl" : "text-xl"}`}>Goal Betting</span>
    </div>
  )
}
