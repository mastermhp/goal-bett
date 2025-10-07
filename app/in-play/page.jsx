"use client"
import { BrandedButton } from "@/components/ui/branded-button"
import { Logo } from "@/components/ui/logo"
import { LandPlot, MonitorDot, Search, Trophy, MenuIcon, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function inplay() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const matches = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    league: [
      "Argentina Liga Profesional",
      "Brazil Campeonato",
      "Chile Liga de Primera",
      "Colombia Primera A",
      "Mexico Liga TDP",
    ][i % 5],
    teamA: `Team A ${i + 1}`,
    teamB: `Team B ${i + 1}`,
    scoreA: Math.floor(Math.random() * 4),
    scoreB: Math.floor(Math.random() * 4),
    minute: `${24 + i * 6}'`,
    odds: [(Math.random() * 9 + 1).toFixed(2), (Math.random() * 4 + 1).toFixed(2), (Math.random() * 20 + 1).toFixed(2)],
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#0A1A2F]/95 to-[#0A1A2F]/90 text-white relative overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-sm border-b border-[#2A3F55]">
        <div className="w-full mx-auto px-3 sm:px-4 lg:px-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b border-[#2A3F55]">
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <Logo size="large" />
              <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm">
                <Link href="/" className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors">
                  Sports
                </Link>
                <Link href="/in-play" className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors">
                  In-Play
                </Link>
                <Link href="/casino" className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors">
                  Casino
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <span className="hidden md:inline text-[#B8C5D6] text-xs lg:text-sm">Responsible Gambling</span>
              <span className="hidden sm:inline text-[#B8C5D6] text-xs lg:text-sm">Help</span>
              <Link href="/auth/signup" className="hidden sm:inline">
                <BrandedButton variant="primary" size="sm">
                  Join Now
                </BrandedButton>
              </Link>
              <Link href="/auth/login" className="hidden sm:inline">
                <BrandedButton variant="secondary" size="sm">
                  Log In
                </BrandedButton>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#B8C5D6] hover:text-[#FFD700]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-b border-[#2A3F55]">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sports
                </Link>
                <Link
                  href="/in-play"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  In-Play
                </Link>
                <Link
                  href="/casino"
                  className="text-[#B8C5D6] hover:text-[#FFD700] transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Casino
                </Link>
                <div className="flex flex-col space-y-2 pt-2 sm:hidden">
                  <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                    <BrandedButton variant="primary" size="sm" className="w-full">
                      Join Now
                    </BrandedButton>
                  </Link>
                  <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                    <BrandedButton variant="secondary" size="sm" className="w-full">
                      Log In
                    </BrandedButton>
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
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#B8C5D6]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-full bg-[#1A2F45] border border-[#2A3F55] rounded-lg text-[#F5F5F5] text-sm placeholder-[#B8C5D6] focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto px-3 sm:px-4 lg:px-6 pt-36 mt-10 sm:pt-36 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Left column - Matches list */}
        <section className="lg:col-span-8 space-y-4">
          <div className="rounded-lg overflow-hidden border border-[#FFD700]/20 bg-[#0A1A2F]/80 backdrop-blur-sm shadow-xl">
            <div className="px-3 sm:px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#FFD700]/20 gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-[#FFD700]">Soccer - Live Matches</h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F5F5]/70">
                <span>Fulltime Result</span>
                <button className="px-2 py-1 rounded bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] transition-colors">
                  Filter
                </button>
              </div>
            </div>

            <div className="divide-y divide-[#FFD700]/10">
              {matches.map((m) => (
                <div key={m.id} className="px-3 sm:px-4 py-3 sm:py-4 hover:bg-[#FFD700]/5 transition-colors">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="w-full sm:w-12 text-xs text-[#FFD700] font-semibold">{m.minute}</div>

                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-[#F5F5F5]/70 font-medium mb-2">{m.league}</div>

                      {/* Teams and Scores */}
                      <div className="space-y-2 sm:space-y-3">
                        {/* Team A */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFD700]/60 flex items-center justify-center text-xs font-bold text-[#0A1A2F]">
                              T
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm sm:text-base font-semibold text-white truncate">{m.teamA}</div>
                              <div className="text-xs text-[#F5F5F5]/50">Home</div>
                            </div>
                          </div>
                          <div className="text-base sm:text-lg font-bold text-[#FFD700] ml-2">{m.scoreA}</div>
                        </div>

                        {/* Team B */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#F5F5F5] to-[#F5F5F5]/60 flex items-center justify-center text-xs font-bold text-[#0A1A2F]">
                              U
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm sm:text-base font-semibold text-white truncate">{m.teamB}</div>
                              <div className="text-xs text-[#F5F5F5]/50">Away</div>
                            </div>
                          </div>
                          <div className="text-base sm:text-lg font-bold text-[#FFD700] ml-2">{m.scoreB}</div>
                        </div>
                      </div>

                      {/* Odds */}
                      <div className="flex items-center justify-between mt-3 gap-2">
                        <div className="flex gap-1 sm:gap-2 flex-1">
                          {m.odds.map((o, idx) => (
                            <div
                              key={idx}
                              className="flex-1 px-2 sm:px-3 py-2 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30 text-xs sm:text-sm font-semibold text-[#FFD700] hover:bg-[#FFD700]/20 hover:scale-105 transform transition-all cursor-pointer text-center"
                            >
                              {o}
                            </div>
                          ))}
                        </div>
                        <button className="w-8 h-8 rounded-lg bg-[#FFD700]/10 hover:bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] transition-colors">
                          ▶
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <button className="px-6 py-2 rounded-lg bg-[#FFD700] text-[#0A1A2F] font-semibold hover:bg-[#FFD700]/90 transition-colors">
              Load more
            </button>
          </div>
        </section>

        <aside className="hidden lg:block lg:col-span-4 space-y-4">
          {/* Match Details Card */}
          <div className="rounded-lg border border-[#FFD700]/30 bg-[#0A1A2F]/80 backdrop-blur-sm shadow-xl p-4 sticky top-36">
            <div className="flex items-center justify-between border-b border-[#FFD700]/20 pb-3 mb-4">
              <div className="flex-1 text-center font-semibold text-white">Banfield</div>
              <div className="flex items-center gap-2 px-4">
                <span className="text-[#FFD700] text-2xl font-bold">0</span>
                <span className="text-[#F5F5F5]/50 text-xl">-</span>
                <span className="text-[#FFD700] text-2xl font-bold">0</span>
              </div>
              <div className="flex-1 text-center font-semibold text-white">Union Santa Fe</div>
            </div>

            {/* Video placeholder */}
            <div className="bg-[#0A1A2F] border border-[#FFD700]/20 rounded-lg h-48 flex items-center justify-center mb-4">
              <button className="px-6 py-3 bg-[#FFD700] text-[#0A1A2F] font-semibold rounded-lg hover:bg-[#FFD700]/90 transition-colors">
                Log in to watch
              </button>
            </div>

            {/* Stats Section */}
            <div className="space-y-4">
              {/* xG */}
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-[#FFD700]">
                  <span className="font-bold">0.53</span> xG
                </div>
                <div className="flex items-center gap-2 text-[#F5F5F5]">
                  <span className="font-bold">0.77</span> xG
                </div>
              </div>

              {/* Attacks / Dangerous / Possession */}
              <div className="grid grid-cols-3 text-center gap-3 text-xs">
                <div>
                  <div className="text-[#F5F5F5]/50 mb-1">Attacks</div>
                  <div className="font-semibold text-white">
                    <span className="text-[#FFD700]">115</span> : 64
                  </div>
                </div>
                <div>
                  <div className="text-[#F5F5F5]/50 mb-1">Dangerous</div>
                  <div className="font-semibold text-white">
                    <span className="text-[#FFD700]">37</span> : 22
                  </div>
                </div>
                <div>
                  <div className="text-[#F5F5F5]/50 mb-1">Possession</div>
                  <div className="font-semibold text-white">
                    <span className="text-[#FFD700]">51</span> : 49
                  </div>
                </div>
              </div>

              {/* Shots */}
              <div className="text-center">
                <div className="text-xs text-[#F5F5F5]/50 mb-1">Shots / On Target</div>
                <div className="flex justify-center gap-6 font-semibold">
                  <span className="text-[#FFD700]">12/3</span>
                  <span className="text-white">9/1</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 pb-8 text-center text-[#F5F5F5]/50 text-xs">
        <div className="mt-4 border-t border-[#FFD700]/10 pt-4">
          Live In-Play Betting Platform - Built with Next.js & Tailwind CSS
        </div>
      </footer>
    </div>
  )
}
