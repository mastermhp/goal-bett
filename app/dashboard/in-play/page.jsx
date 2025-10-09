"use client"
import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"
import { AnimatedButton } from "@/components/ui/animated-button"
import { MonitorDot, Search, Trophy, MenuIcon, X, Receipt, LandPlot, UserCircle, Wallet } from "lucide-react"
import Link from "next/link"
import BottomNavigation from "@/components/ui/bottom-navigation"
import { BetSlip } from "@/components/dashboard/bet-slip"

export default function DashboardInPlayPage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [betSlipOpen, setBetSlipOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const liveMatches = [
    {
      id: 1,
      team1: "Platense",
      team2: "San Martin SJ",
      score1: 1,
      score2: 1,
      odds: ["2.25", "2.30", "5.50"],
      time: "42:02",
      league: "Argentina Primera",
    },
    {
      id: 2,
      team1: "Banfield",
      team2: "Union Santa Fe",
      score1: 0,
      score2: 0,
      odds: ["2.87", "2.60", "3.00"],
      time: "43:11",
      league: "Argentina Primera",
    },
    {
      id: 3,
      team1: "Colo Colo",
      team2: "Deportes Iquique",
      score1: 1,
      score2: 0,
      odds: ["1.12", "7.50", "21.00"],
      time: "40:20",
      league: "Chile Primera",
    },
    {
      id: 4,
      team1: "Manchester City",
      team2: "Liverpool",
      score1: 2,
      score2: 2,
      odds: ["1.85", "3.40", "4.20"],
      time: "67:45",
      league: "Premier League",
    },
    {
      id: 5,
      team1: "Real Madrid",
      team2: "Barcelona",
      score1: 1,
      score2: 0,
      odds: ["2.10", "3.20", "3.50"],
      time: "55:30",
      league: "La Liga",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#0D1F35] to-[#0A1A2F] text-[#F5F5F5] relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-sm border-b border-[#2A3F55]">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b border-[#2A3F55]">
            <div className="flex items-center space-x-2 md:space-x-6">
              <Logo size="large" />
              <nav className="hidden lg:flex items-center space-x-6 text-sm">
                <Link
                  href="/dashboard"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors"
                >
                  Sports
                </Link>
                <Link
                  href="/dashboard/in-play"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors"
                >
                  In-Play
                </Link>
                <Link
                  href="/dashboard/casino"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors"
                >
                  Casino
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              
              <Link href="/dashboard/wallet" className="sm:inline">
                <Wallet className="w-7 h-7 text-[#FFD700] hover:text-[#FFD700]/70" />
              </Link>

              <span className="hidden md:inline text-[#B8C5D6] text-sm">
                Responsible Gambling
              </span>
              <span className="hidden sm:inline text-[#B8C5D6] text-sm">
                Help
              </span>

              <Link href="/auth/login" className="hidden sm:inline">
                <UserCircle className="w-7 h-7 text-[#FFD700] hover:text-[#FFD700]/70" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#B8C5D6] hover:text-[#FFD700]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-b border-[#2A3F55]">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/dashboard"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sports
                </Link>
                <Link
                  href="/dashboard/in-play"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  In-Play
                </Link>
                <Link
                  href="/dashboard/casino"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Casino
                </Link>
                <div className="flex flex-col space-y-2 pt-2 sm:hidden">
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <AnimatedButton
                      variant="glass"
                      className="text-[#F5F5F5] border-[#2A3F55] flex items-center justify-center hover:border-[#FFD700] w-full"
                      size="sm"
                    >
                      <UserCircle className="w-7 h-7 text-[#FFD700] hover:text-[#FFD700]/70" />
                    </AnimatedButton>
                  </Link>
                </div>
              </nav>
            </div>
          )}

          {/* Main Navigation */}
          <div className="py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8"></div>
              <div className="flex items-center space-x-4 flex-1 justify-end">
                <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#B8C5D6]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-full bg-[#1A2F45] border border-[#2A3F55] rounded-lg text-[#F5F5F5] placeholder-[#B8C5D6] focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mt-10 mx-auto px-2 md:px-4 py-6 pt-32 md:pt-40 pb-24">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2 flex items-center gap-2">
            <MonitorDot className="w-6 h-6 md:w-8 md:h-8" />
            Live In-Play Betting
          </h1>
          <p className="text-[#B8C5D6] text-sm md:text-base">Bet on live matches as they happen</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {liveMatches.map((match) => (
            <div
              key={match.id}
              className="bg-[#0D1F35]/80 backdrop-blur-sm border border-[#2A3F55] rounded-xl shadow-xl p-3 md:p-4 hover:border-[#FFD700]/50 transition-colors"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#B8C5D6]">{match.league}</span>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-[#B8C5D6]">{match.time}</div>
                    <div className="text-xs text-[#FFD700] flex justify-center">
                      <MonitorDot className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                  <div className="col-span-7 md:col-span-5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-[#FFD700]" />
                          <span className="text-[#F5F5F5] text-sm md:text-base truncate">{match.team1}</span>
                        </div>
                        <span className="text-[#F5F5F5] font-bold text-lg ml-2">{match.score1}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <LandPlot className="w-4 h-4 text-[#B8C5D6]" />
                          <span className="text-[#F5F5F5] text-sm md:text-base truncate">{match.team2}</span>
                        </div>
                        <span className="text-[#F5F5F5] font-bold text-lg ml-2">{match.score2}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 md:col-span-7">
                    <div className="grid grid-cols-3 gap-1 md:gap-2">
                      {match.odds.map((odd, index) => (
                        <button
                          key={index}
                          className="bg-[#1A2F45] border border-[#2A3F55] hover:bg-[#FFD700] hover:text-[#0A1A2F] text-[#F5F5F5] p-2 md:p-3 rounded text-sm md:text-base font-bold transition-colors"
                        >
                          {odd}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation onBetSlipClick={() => setBetSlipOpen(true)} betSlipCount={2} />
      <BetSlip isOpen={betSlipOpen} onClose={() => setBetSlipOpen(false)} />
    </div>
  )
}
