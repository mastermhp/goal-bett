import { AnimatedButton } from "@/components/ui/animated-button";
import { Logo } from "@/components/ui/logo";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

// Next.js (app router) page component in JSX using Tailwind CSS
// Drop this file into `app/page.jsx` (or any page component) of a Next.js + Tailwind project.

export default function Bet365Clone() {
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
    odds: [
      (Math.random() * 9 + 1).toFixed(2),
      (Math.random() * 4 + 1).toFixed(2),
      (Math.random() * 20 + 1).toFixed(2),
    ],
  }));

  return (
    <div className="min-h-screen bg-[#100706] text-gray-100 antialiased">
      {/* Top bar */}
      {/* <header className="sticky top-0 z-40 bg-gradient-to-r from-[#2c0600] via-[#5d1f0b] to-[#3a0a00] shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-28 text-2xl font-extrabold tracking-tight">
              <span className="text-yellow-400">bet</span>
              <span className="text-white ml-1">365</span>
            </div>

            <nav className="hidden md:flex gap-4 items-center text-sm opacity-90">
              <a className="px-3 py-2 rounded-md hover:bg-black/20 transition">Sports</a>
              <a className="px-3 py-2 rounded-md hover:bg-black/20 transition">Fantasy</a>
              <a className="px-3 py-2 rounded-md hover:bg-black/20 transition">Casino</a>
              <a className="px-3 py-2 rounded-md hover:bg-black/20 transition">In-Play</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-[#ff8a4d] hover:bg-[#ff7a2a] transition font-medium shadow">Join</button>
            <button className="px-4 py-2 rounded-md bg-black/30 hover:bg-black/40 transition">Log In</button>
          </div>
        </div>
      </header> */}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b border-gray-700">
            <div className="flex items-center space-x-6">
              <Logo size="sm" />
              <nav className="hidden md:flex items-center space-x-6 text-sm">
                <a href="/sports" className="text-gray-300 hover:text-white transition-colors">
                  Sports
                </a>
                <a href="/fantasy" className="text-gray-300 hover:text-white transition-colors">
                  Fantasy
                </a>
                <a href="/casino" className="text-gray-300 hover:text-white transition-colors">
                  Casino
                </a>
                <a href="/extra" className="text-gray-300 hover:text-white transition-colors">
                  Extra
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Responsible Gambling</span>
              <span className="text-gray-300 text-sm">Help</span>
              <Link href="/auth/signup">
              <AnimatedButton variant="primary" size="sm">
                Join
              </AnimatedButton></Link>
              
              <Link href="/auth/login">
              <AnimatedButton  variant="glass" size="sm">
                Log In
              </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <a href="/sports" className="text-white font-semibold border-b-2 border-green-400 pb-1">
                  All Sports
                </a>
                <a href="/in-play" className="text-gray-300 hover:text-white transition-colors">
                  In-Play
                </a>
                <a href="/casino" className="text-gray-300 hover:text-white transition-colors">
                  Casino
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-80 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Main content */}
      <main className="relative container mx-auto px-4 py-36 grid grid-cols-12 gap-6">
        {/* Left column - Matches list */}
        <section className="col-span-8 space-y-4">
          <div className="rounded-md overflow-hidden border border-black/30 bg-gradient-to-b from-black/40 to-black/30 shadow-lg">
            <div className="px-4 py-3 flex items-center justify-between border-b border-black/20">
              <h2 className="text-lg font-semibold">Soccer</h2>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span>Fulltime Result</span>
                <button className="px-2 py-1 rounded bg-black/20">Filter</button>
              </div>
            </div>

            <div className="divide-y divide-black/20">
              {matches.map((m) => (
                <div key={m.id} className="px-4 py-3 hover:bg-black/20 transition flex items-start gap-4">
                  <div className="w-12 text-xs text-gray-400">{m.minute}</div>

                  <div className="flex-1">
                    <div className="text-sm text-gray-300 font-medium">{m.league}</div>
                    <div className="mt-2 grid grid-cols-12 items-center gap-4">
                      <div className="col-span-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5a1b08] to-[#c3542a] flex items-center justify-center text-xs font-bold">T</div>
                            <div>
                              <div className="text-sm font-semibold">{m.teamA}</div>
                              <div className="text-xs text-gray-400">Home</div>
                            </div>
                          </div>

                          <div className="text-sm font-bold">{m.scoreA}</div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-xs font-bold">U</div>
                            <div>
                              <div className="text-sm font-semibold">{m.teamB}</div>
                              <div className="text-xs text-gray-400">Away</div>
                            </div>
                          </div>

                          <div className="text-sm font-bold">{m.scoreB}</div>
                        </div>
                      </div>

                      <div className="col-span-6 flex items-center justify-end gap-4">
                        {/* Odds */}
                        <div className="flex gap-2">
                          {m.odds.map((o, idx) => (
                            <div key={idx} className="px-3 py-2 rounded shadow-inner bg-black/40 border border-black/30 text-sm font-semibold hover:scale-105 transform transition">
                              {o}
                            </div>
                          ))}
                        </div>

                        <div className="w-8 h-8 rounded-md bg-black/30 flex items-center justify-center text-sm">▶</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination / More lists */}
          <div className="flex justify-center">
            <button className="px-4 py-2 rounded-md bg-[#2b0f08] hover:bg-[#3a1308] transition">Load more</button>
          </div>
        </section>

         {/* Right column exact clone */}
      <aside className="fixed right-20 top-32 max-w-3xl mx-auto py-6 px-4 space-y-6">
        {/* Score header */}
        <div className=" rounded-md border border-orange-400/90 shadow-lg p-4">
          <div className="flex items-center justify-between border-b border-black/40 pb-3">
            <div className="flex-1 text-center font-semibold">Banfield</div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl font-bold">0</span>
              <span className="text-gray-200 text-xl">-</span>
              <span className="text-yellow-400 text-2xl font-bold">0</span>
            </div>
            <div className="flex-1 text-center font-semibold">Union Santa Fe</div>
          </div>

          {/* Video placeholder */}
          <div className="mt-4 bg-black/80 h-52 flex items-center justify-center">
            <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded">
              Log in to watch
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 text-sm mt-4 border-b border-black/40">
            {['Stats','Player Stats','Timeline','Lineups','Table'].map((t,idx)=>(
              <button key={idx} className={`py-2 ${idx===0?'border-b-2 border-white font-semibold':'text-gray-400'}`}>{t}</button>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-4 space-y-6">
            {/* xG */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-sm text-green-400">
                <span className="font-bold">0.53</span> xG
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <span className="font-bold">0.77</span> xG
              </div>
            </div>

            {/* Attacks / Dangerous / Possession */}
            <div className="grid grid-cols-3 text-center gap-4">
              <div>
                <div className="text-xs text-gray-400">Attacks</div>
                <div className="flex items-center justify-center gap-2 font-semibold">
                  <span className="text-green-400">115</span> : <span>64</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Dangerous Attacks</div>
                <div className="flex items-center justify-center gap-2 font-semibold">
                  <span className="text-green-400">37</span> : <span>22</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Possession %</div>
                <div className="flex items-center justify-center gap-2 font-semibold">
                  <span className="text-green-400">51</span> : <span className="text-blue-400">49</span>
                </div>
              </div>
            </div>

            {/* Cards & Shots */}
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="text-red-500">■</span>6
                <span className="text-yellow-400">■</span>0
                <span className="text-gray-300">■</span>0
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs text-gray-400">Shots / On Target</div>
                <div className="flex justify-center gap-6 font-semibold mt-1">
                  <span>12/3</span>
                  <span className="text-blue-400">9/1</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">■</span>3
                <span className="text-gray-300">■</span>0
                <span className="text-red-500">■</span>1
              </div>
            </div>

            {/* Action Areas */}
            <div>
              <div className="text-xs text-gray-400 mb-2">Action Areas</div>
              <div className="grid grid-cols-3 text-center text-sm bg-[#0f0f0f] rounded overflow-hidden">
                <div className="py-4 border-r border-black/40">19.9%</div>
                <div className="py-4 border-r border-black/40 bg-black/40">57.2%</div>
                <div className="py-4">22.9%</div>
              </div>
            </div>

            {/* Key Passes */}
            <div>
              <div className="text-xs text-gray-400 mb-2">Key Passes</div>
              <div className="flex items-center gap-3">
                <span className="font-semibold">8</span>
                <div className="flex-1 h-2 bg-[#0d0d0d] rounded overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-400 to-blue-400 w-[60%]"></div>
                </div>
                <span className="font-semibold">6</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      </main>

      {/* Footer small */}
      <footer className="max-w-[1400px] mx-auto px-4 pb-8 text-center text-gray-500 text-xs">
        <div className="mt-4">Animated demo UI — colors tuned to a dark reddish-orange theme. Built with Tailwind.</div>
      </footer>
    </div>
  );
}
