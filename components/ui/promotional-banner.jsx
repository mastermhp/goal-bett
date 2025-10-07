"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function PromotionalBanner() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const banners = [
    {
      id: 1,
      title: "Welcome Bonus 100%",
      description: "Get 100% bonus on your first deposit up to $500",
      image: "/casino-welcome-bonus.png",
      cta: "Claim Now",
      link: "/auth/signup",
    },
    {
      id: 2,
      title: "Jackpot Madness",
      description: "Win up to $1,000,000 in our progressive jackpot slots",
      image: "/jackpot-slots-casino.jpg",
      cta: "Play Now",
      link: "/dashboard/casino/jackpots",
    },
    {
      id: 3,
      title: "Live Casino Bonus",
      description: "20% cashback on all live casino games this weekend",
      image: "/live-casino-roulette.jpg",
      cta: "Join Now",
      link: "/dashboard/casino/live-casino",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  if (!isVisible) return null

  const banner = banners[currentBanner]

  return (
    <div className="relative bg-gradient-to-r from-[#0D1F35] to-[#1A2F45] border border-[#FFD700]/30 rounded-2xl overflow-hidden shadow-2xl mb-6">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="relative h-48 md:h-64">
        <Image src={banner.image || "/placeholder.svg"} alt={banner.title} fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-transparent to-[#0A1A2F]/80" />

        <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12">
          <button
            onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-center max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-[#FFD700] mb-2">{banner.title}</h2>
            <p className="text-sm md:text-lg text-[#F5F5F5] mb-4">{banner.description}</p>
            <a
              href={banner.link}
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0A1A2F] font-bold rounded-xl hover:scale-105 transition-transform"
            >
              {banner.cta}
            </a>
          </div>

          <button
            onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentBanner ? "bg-[#FFD700] w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
