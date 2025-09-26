// "use client"
// import { useState, useEffect } from "react"
// import { Logo } from "@/components/ui/logo"
// import { AnimatedButton } from "@/components/ui/animated-button"
// import { FloatingElements } from "@/components/ui/floating-elements"
// import { Search, Bell, TrendingUp, Crown, Star, ChevronRight, Play, Users, Trophy, Flame } from "lucide-react"

// export default function HomePage() {
//   const [mounted, setMounted] = useState(false)
//   const [activeTab, setActiveTab] = useState("casino")
//   const [selectedBets, setSelectedBets] = useState([])

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   const trendingGames = [
//     { name: "Lightning Slots", players: "2.4k", multiplier: "x125", hot: true },
//     { name: "Golden Roulette", players: "1.8k", multiplier: "x89", hot: true },
//     { name: "Mega Jackpot", players: "3.2k", multiplier: "x200", hot: false },
//     { name: "Dragon's Fortune", players: "1.5k", multiplier: "x67", hot: true },
//     { name: "Crystal Crash", players: "2.1k", multiplier: "x156", hot: false },
//     { name: "Royal Blackjack", players: "1.9k", multiplier: "x45", hot: false },
//   ]

//   const featuredMatches = [
//     {
//       team1: "Lightning Slots",
//       team2: "Mega Jackpot",
//       odds1: "2.10",
//       oddsX: "3.80",
//       odds2: "3.20",
//       time: "Live",
//       bets: "890",
//     },
//     {
//       team1: "Golden Roulette",
//       team2: "Dragon's Fortune",
//       odds1: "1.85",
//       oddsX: "3.40",
//       odds2: "4.50",
//       time: "20:30",
//       bets: "239",
//     },
//     {
//       team1: "Crystal Crash",
//       team2: "Royal Blackjack",
//       odds1: "1.48",
//       oddsX: "4.33",
//       odds2: "6.50",
//       time: "21:00",
//       bets: "480",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-950 via-red-950 to-orange-900 text-white relative overflow-hidden">
//       <FloatingElements />

//       <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-800 to-red-800 border-b border-orange-600/30 shadow-2xl backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           {/* Top Bar */}
//           <div className="flex items-center justify-between py-2 border-b border-orange-600/20">
//             <div className="flex items-center space-x-6">
//               <Logo size="sm" />
//               <div className="hidden md:flex items-center space-x-4 text-sm">
//                 <span className="text-orange-200">Welcome Bonus:</span>
//                 <span className="text-yellow-400 font-bold">$1000 + 100 Free Spins</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-orange-700/50 rounded-lg transition-colors">
//                 <Bell className="h-4 w-4" />
//               </button>
//               <AnimatedButton variant="primary" size="sm" onClick={() => (window.location.href = "/auth/login")}>
//                 Log In
//               </AnimatedButton>
//               <AnimatedButton variant="glass" size="sm" onClick={() => (window.location.href = "/auth/signup")}>
//                 Join Now
//               </AnimatedButton>
//             </div>
//           </div>

//           {/* Main Navigation */}
//           <nav className="py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-8">
//                 <button
//                   onClick={() => setActiveTab("casino")}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     activeTab === "casino"
//                       ? "bg-yellow-500 text-black shadow-lg"
//                       : "text-orange-200 hover:text-white hover:bg-orange-700/50"
//                   }`}
//                 >
//                   Casino
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("live")}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     activeTab === "live"
//                       ? "bg-yellow-500 text-black shadow-lg"
//                       : "text-orange-200 hover:text-white hover:bg-orange-700/50"
//                   }`}
//                 >
//                   Live Casino
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("sports")}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     activeTab === "sports"
//                       ? "bg-yellow-500 text-black shadow-lg"
//                       : "text-orange-200 hover:text-white hover:bg-orange-700/50"
//                   }`}
//                 >
//                   Sports
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("promotions")}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     activeTab === "promotions"
//                       ? "bg-yellow-500 text-black shadow-lg"
//                       : "text-orange-200 hover:text-white hover:bg-orange-700/50"
//                   }`}
//                 >
//                   Promotions
//                 </button>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-300" />
//                   <input
//                     type="text"
//                     placeholder="Search games..."
//                     className="pl-10 pr-4 py-2 bg-orange-800/50 border border-orange-600/30 rounded-lg text-white placeholder-orange-300 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-6 pt-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Left Sidebar - Categories */}
//           <div className="lg:col-span-1">
//             <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl">
//               <h3 className="text-lg font-bold mb-4 text-yellow-400">TRENDING</h3>
//               <div className="space-y-2">
//                 {[
//                   { name: "Hot Slots", icon: Flame, color: "text-red-400" },
//                   { name: "Live Roulette", icon: Play, color: "text-green-400" },
//                   { name: "Jackpot Games", icon: Crown, color: "text-yellow-400" },
//                   { name: "New Games", icon: Star, color: "text-blue-400" },
//                   { name: "Table Games", icon: Trophy, color: "text-purple-400" },
//                   { name: "Crash Games", icon: TrendingUp, color: "text-orange-400" },
//                 ].map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-800/50 transition-all group"
//                   >
//                     <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
//                     <span className="text-orange-100 group-hover:text-white">{item.name}</span>
//                     <ChevronRight className="h-4 w-4 text-orange-400 ml-auto group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 ))}
//               </div>

//               {/* A-Z Games */}
//               <div className="mt-6 pt-6 border-t border-orange-600/30">
//                 <h4 className="text-sm font-semibold text-orange-300 mb-3">A-Z GAMES</h4>
//                 <div className="grid grid-cols-3 gap-2">
//                   {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((letter) => (
//                     <button
//                       key={letter}
//                       className="p-2 text-center text-sm bg-orange-800/30 hover:bg-orange-700/50 rounded transition-colors"
//                     >
//                       {letter}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Featured Banner */}
//             <div className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 rounded-xl p-6 mb-6 relative overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-black/20"></div>
//               <div className="relative z-10">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <Crown className="h-6 w-6 text-yellow-300" />
//                   <span className="text-yellow-300 font-bold">MEGA JACKPOT</span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-white mb-2">$2,847,392</h2>
//                 <p className="text-yellow-100 mb-4">Someone will win this tonight!</p>
//                 <AnimatedButton variant="primary" size="lg">
//                   Play Now
//                 </AnimatedButton>
//               </div>
//               <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
//               <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-red-400/20 rounded-full blur-xl"></div>
//             </div>

//             {/* Featured Matches */}
//             <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 mb-6 shadow-2xl">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-bold text-yellow-400">Featured Games</h3>
//                 <button className="text-orange-300 hover:text-white text-sm flex items-center space-x-1">
//                   <span>View All</span>
//                   <ChevronRight className="h-4 w-4" />
//                 </button>
//               </div>

//               <div className="space-y-3">
//                 {featuredMatches.map((match, index) => (
//                   <div key={index} className="bg-orange-800/30 rounded-lg p-4 hover:bg-orange-800/50 transition-all">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">{match.bets} playing</span>
//                         <span className="text-orange-300 text-sm">{match.time}</span>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-5 gap-2 items-center">
//                       <div className="col-span-2">
//                         <div className="text-white font-medium">{match.team1}</div>
//                         <div className="text-orange-300 text-sm">vs</div>
//                         <div className="text-white font-medium">{match.team2}</div>
//                       </div>

//                       <div className="col-span-3 grid grid-cols-3 gap-2">
//                         <button className="bg-green-600 hover:bg-green-500 text-white p-2 rounded text-center font-bold transition-colors">
//                           {match.odds1}
//                         </button>
//                         <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded text-center font-bold transition-colors">
//                           {match.oddsX}
//                         </button>
//                         <button className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded text-center font-bold transition-colors">
//                           {match.odds2}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Hot Games Grid */}
//             <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl">
//               <h3 className="text-lg font-bold text-yellow-400 mb-4">Hot Games</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {trendingGames.map((game, index) => (
//                   <div
//                     key={index}
//                     className="bg-orange-800/30 rounded-lg p-4 hover:bg-orange-800/50 transition-all group cursor-pointer"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
//                         {game.name}
//                       </h4>
//                       {game.hot && <Flame className="h-4 w-4 text-red-400" />}
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex items-center space-x-1">
//                         <Users className="h-3 w-3 text-orange-300" />
//                         <span className="text-orange-300">{game.players}</span>
//                       </div>
//                       <div className="text-green-400 font-bold">{game.multiplier}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar - Bet Slip */}
//           <div className="lg:col-span-1">
//             <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl sticky top-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-bold text-yellow-400">Bet Slip</h3>
//                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{selectedBets.length}</span>
//               </div>

//               {selectedBets.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="w-16 h-16 bg-orange-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Trophy className="h-8 w-8 text-orange-400" />
//                   </div>
//                   <p className="text-orange-300 text-sm">Select games to start building your winning combination</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">{/* Bet slip content would go here */}</div>
//               )}

//               <div className="mt-6 pt-4 border-t border-orange-600/30">
//                 <div className="flex justify-between text-sm mb-2">
//                   <span className="text-orange-300">Total Stake</span>
//                   <span className="text-white font-bold">$0.00</span>
//                 </div>
//                 <div className="flex justify-between text-sm mb-4">
//                   <span className="text-orange-300">Potential Return</span>
//                   <span className="text-green-400 font-bold">$0.00</span>
//                 </div>
//                 <AnimatedButton variant="primary" className="w-full" disabled={selectedBets.length === 0}>
//                   Place Bet
//                 </AnimatedButton>
//               </div>
//             </div>

//             {/* Live Winners */}
//             <div className="bg-gradient-to-b from-green-900/80 to-emerald-900/80 backdrop-blur-sm border border-green-600/30 rounded-xl p-4 mt-6 shadow-2xl">
//               <h3 className="text-lg font-bold text-green-400 mb-4">🎉 Live Winners</h3>
//               <div className="space-y-3">
//                 {[
//                   { name: "Player***23", game: "Lightning Slots", amount: "$12,450" },
//                   { name: "Winner***89", game: "Golden Roulette", amount: "$8,920" },
//                   { name: "Lucky***45", game: "Mega Jackpot", amount: "$25,680" },
//                 ].map((winner, index) => (
//                   <div key={index} className="flex items-center justify-between p-2 bg-green-800/20 rounded">
//                     <div>
//                       <div className="text-white text-sm font-medium">{winner.name}</div>
//                       <div className="text-green-300 text-xs">{winner.game}</div>
//                     </div>
//                     <div className="text-green-400 font-bold">{winner.amount}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="bg-gradient-to-r from-orange-950 to-red-950 border-t border-orange-600/30 py-8 mt-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <Logo size="sm" className="mb-4" />
//               <p className="text-orange-300 text-sm">The ultimate destination for casino gaming and sports betting.</p>
//             </div>
//             <div>
//               <h4 className="font-bold text-yellow-400 mb-3">Games</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a href="#" className="text-orange-300 hover:text-white transition-colors">
//                     Slots
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-orange-300 hover:text-white transition-colors">
//                     Live Casino
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-orange-300 hover:text-white transition-colors">
//                     Table Games
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-yellow-400 mb-3">Support</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a href="#" className="text-orange-300 hover:text-white transition-colors">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-orange-300 hover:text-white transition-colors">
//                     Live Chat
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-orange-300 hover:text-white transition-colors">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-yellow-400 mb-3">Responsible Gaming</h4>
//               <p className="text-orange-300 text-xs">Gambling involves risks. Play responsibly. 18+</p>
//             </div>
//           </div>
//           <div className="border-t border-orange-600/30 mt-6 pt-6 text-center">
//             <p className="text-orange-400 text-sm">&copy; 2025 Goal Betting Casino. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


"use client"
import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Search } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [selectedSport, setSelectedSport] = useState("soccer")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const featuredMatches = [
    {
      id: 1,
      teams: "BRENTFORD V MAN UTD",
      league: "Premier League",
      betBoost: "BET BOOST",
      placed: "673 placed",
      markets: [
        { type: "Both Teams to Receive 2+ Cards", odds: null },
        { type: "Both Teams to Score", odds: null },
        { type: "Over 1 Corners in the 1st Half for Brentford", odds: null },
      ],
      mainOdds: { was: "15.00", now: "17.00", returns: "$10 stake returns $170" },
      time: "Sat 27 Sep",
    },
    {
      id: 2,
      teams: "BRENTFORD V MAN UTD",
      league: "Premier League",
      betBoost: "BET BOOST",
      placed: "314 placed",
      markets: [
        { type: "Igor Thiago: 1+ Shots on Target", odds: null },
        { type: "Kevin Schade: 1+ Shots on Target", odds: null },
        { type: "Bryan Mbeumo: 1+ Shots on Target", odds: null },
      ],
      mainOdds: { was: "7.50", now: "8.50", returns: "$10 stake returns $85" },
      time: "Sat 27 Sep",
    },
    {
      id: 3,
      teams: "BRENTFORD V MAN UTD",
      league: "Premier League",
      betBoost: "BET BOOST",
      placed: "321 placed",
      markets: [
        { type: "Over 1.5 Shots on Target in the 1st Half for Man Utd", odds: null },
        { type: "Over 1.5 Shots on Target in the 2nd Half for Man Utd", odds: null },
        { type: "Over 1.5 Shots on Target in the 1st Half for Brentford", odds: null },
      ],
      mainOdds: { was: "17.00", now: "19.00", returns: "$10 stake returns $190" },
      time: "Sat 27 Sep",
    },
    {
      id: 4,
      teams: "CHELSEA V BRIGHTON",
      league: "Premier League",
      betBoost: "BET BOOST",
      placed: "1 placed",
      markets: [
        { type: "Joao Pedro: 2+ Shots on Target", odds: null },
        { type: "Pedro Neto: 2+ Shots on Target", odds: null },
        { type: "FT Result: Chelsea", odds: null },
        { type: "Over 2 Goals", odds: null },
      ],
      mainOdds: { was: "12.00", now: "13.00", returns: "$10 stake returns $130" },
      time: "Sat 27 Sep",
    },
  ]

  const liveMatches = [
    {
      id: 1,
      team1: "Platense",
      team2: "San Martin SJ",
      score1: 1,
      score2: 1,
      odds: ["2.25", "2.30", "5.50"],
      time: "42:02",
    },
    {
      id: 2,
      team1: "Banfield",
      team2: "Union Santa Fe",
      score1: 0,
      score2: 0,
      odds: ["2.87", "2.60", "3.00"],
      time: "43:11",
    },
    {
      id: 3,
      team1: "Colo Colo",
      team2: "Deportes Iquique",
      score1: 1,
      score2: 0,
      odds: ["1.12", "7.50", "21.00"],
      time: "40:20",
    },
    {
      id: 4,
      team1: "Once Caldas",
      team2: "",
      score1: null,
      score2: null,
      odds: [],
      time: "",
    },
  ]

  const sportsCategories = [
    { id: "american-football", name: "American Football", icon: "🏈" },
    { id: "australian-rules", name: "Australian Rules", icon: "🏉" },
    { id: "badminton", name: "Badminton", icon: "🏸" },
    { id: "baseball", name: "Baseball", icon: "⚾" },
    { id: "basketball", name: "Basketball", icon: "🏀" },
    { id: "beach-volleyball", name: "Beach Volleyball", icon: "🏐" },
    { id: "boxing", name: "Boxing", icon: "🥊" },
    { id: "casino", name: "Casino", icon: "🎰" },
    { id: "cricket", name: "Cricket", icon: "🏏" },
    { id: "cycling", name: "Cycling", icon: "🚴" },
    { id: "darts", name: "Darts", icon: "🎯" },
    { id: "esports", name: "Esports", icon: "🎮" },
    { id: "floorball", name: "Floorball", icon: "🏑" },
    { id: "formula-1", name: "Formula 1", icon: "🏎️" },
    { id: "futsal", name: "Futsal", icon: "⚽" },
    { id: "gaelic-sports", name: "Gaelic Sports", icon: "🥍" },
    { id: "golf", name: "Golf", icon: "⛳" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-600 to-blue-800   rounded-xl p-6 mb-6 relative overflow-hidden shadow-2xl text-white">
      
      <div className="absolute top-0 left-0 right-0 h-full bg-black/70 w-full"></div>
      
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

      <div className="container mx-auto px-4 py-6 pt-40">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Offers Section */}
            <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">$</span>
                </div>
                <h3 className="text-white font-semibold">Offers</h3>
              </div>
            </div>

            {/* Most Used Section */}
            <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl mb-4">
              <h3 className="text-green-400 font-semibold mb-3">MOST USED</h3>
              <div className="space-y-1">
                <div className="text-orange-300 font-semibold mb-2">A-Z</div>
                {sportsCategories.map((sport) => (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`w-full flex items-center space-x-2 p-2 rounded text-left transition-colors ${
                      selectedSport === sport.id
                        ? "bg-orange-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <span className="text-sm">{sport.icon}</span>
                    <span className="text-sm">{sport.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sports Category Icons */}
            <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl mb-6">
              <div className="flex items-center justify-center space-x-8 overflow-x-auto">
                {[
                  { name: "Cricket", icon: "🏏" },
                  { name: "Soccer", icon: "⚽" },
                  { name: "French Open", icon: "🎾" },
                  { name: "Casino", icon: "🎰" },
                  { name: "Basketball", icon: "🏀" },
                  { name: "Horses", icon: "🏇" },
                  { name: "Esports", icon: "🎮" },
                  { name: "Table Tennis", icon: "🏓" },
                  { name: "Virtual", icon: "���" },
                  { name: "Fight Night", icon: "🥊" },
                  { name: "Boxing", icon: "🥊" },
                  { name: "Golf", icon: "⛳" },
                  { name: "Formula 1", icon: "🏎️" },
                  { name: "Futsal", icon: "⚽" },
                  { name: "Union", icon: "🏉" },
                  { name: "Badminton", icon: "🏸" },
                ].map((sport, index) => (
                  <div key={index} className="flex flex-col items-center space-y-1 min-w-0">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-xl hover:bg-orange-600 transition-colors cursor-pointer">
                      {sport.icon}
                    </div>
                    <span className="text-xs text-gray-300 text-center">{sport.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soccer Navigation Tabs */}
            <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl mb-6">
              <div className="flex items-center space-x-6 border-b border-gray-700 pb-3">
                <button className="text-white font-semibold border-b-2 border-green-400 pb-2">Soccer</button>
                <button className="text-gray-400 hover:text-white transition-colors">ATP</button>
                <button className="text-gray-400 hover:text-white transition-colors">WTA Beijing</button>
                <button className="text-gray-400 hover:text-white transition-colors">WTA Beijing</button>
                <button className="text-gray-400 hover:text-white transition-colors">Esoccer</button>
                <button className="text-gray-400 hover:text-white transition-colors">Upcoming Races - Horses</button>
                <button className="text-gray-400 hover:text-white transition-colors">In-Play</button>
              </div>
            </div>

            {/* Featured Matches */}
            <div className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                  <span>⚽</span>
                  <span>FEATURED MATCHES</span>
                </h2>
                <button className="text-gray-400 hover:text-white text-sm">View All</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredMatches.map((match) => (
                  <div key={match.id} className="backdrop-blur-sm border border-orange-600/30 rounded-lg p-4 hover:bg-black/20 cursor-pointer transition-colors">
                    {/* Bet Boost Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                          {match.betBoost}
                        </span>
                        <span className="text-yellow-400 text-xs">🔥 {match.placed}</span>
                      </div>
                    </div>

                    {/* Team Names */}
                    <div className="mb-3">
                      <h3 className="text-white font-semibold text-sm mb-1">{match.teams}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">👕</span>
                        <span className="text-xs text-gray-400">👕</span>
                      </div>
                    </div>

                    {/* Markets */}
                    <div className="space-y-1 mb-4">
                      {match.markets.map((market, index) => (
                        <div key={index} className="text-xs text-gray-300">
                          • {market.type}
                        </div>
                      ))}
                      <button className="text-green-400 text-xs hover:text-green-300">
                        View {match.markets.length > 3 ? "3" : match.markets.length} more legs
                      </button>
                    </div>

                    {/* Odds */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <span className="text-gray-400 text-sm line-through">{match.mainOdds.was}</span>
                        <span className="text-white text-xl font-bold">▶ {match.mainOdds.now}</span>
                      </div>
                      <div className="text-xs text-gray-400 mb-3">{match.mainOdds.returns}</div>
                      <div className="text-xs text-gray-400">{match.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Matches */}
            <div className="space-y-4">
              {liveMatches.map((match) => (
                <div key={match.id} className="bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4 shadow-2xl p-4">
                  {match.team2 ? (
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Match Info */}
                      <div className="col-span-1 text-center">
                        <div className="text-xs text-gray-400">{match.time}</div>
                        <div className="text-xs text-green-400">📺</div>
                      </div>

                      {/* Teams */}
                      <div className="col-span-4">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs">🏆</span>
                              <span className="text-white text-sm">{match.team1}</span>
                            </div>
                            <span className="text-white font-bold">{match.score1}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs">🔴</span>
                              <span className="text-white text-sm">{match.team2}</span>
                            </div>
                            <span className="text-white font-bold">{match.score2}</span>
                          </div>
                        </div>
                      </div>

                      {/* Betting Odds */}
                      <div className="col-span-7">
                        <div className="grid grid-cols-3 gap-2">
                          {match.odds.map((odd, index) => (
                            <button
                              key={index}
                              className="bg-green-600 hover:bg-green-500 text-white p-2 rounded font-bold transition-colors"
                            >
                              {odd}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <span className="text-white">{match.team1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
