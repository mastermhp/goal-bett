"use client"
import { BottomNavigation } from "@/components/ui/bottom-navigation"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Gift, Star, Zap } from "lucide-react"

const shopItems = [
  {
    id: 1,
    name: "Lucky Charm Pack",
    description: "Increase your luck for 24 hours",
    price: 299,
    icon: Gift,
    color: "text-yellow-500",
    popular: true,
  },
  {
    id: 2,
    name: "Double XP Boost",
    description: "Earn 2x experience points",
    price: 199,
    icon: Star,
    color: "text-blue-500",
  },
  {
    id: 3,
    name: "Spin Multiplier",
    description: "2x multiplier on next 10 spins",
    price: 499,
    icon: Zap,
    color: "text-purple-500",
  },
]

export default function DashboardShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-800 relative overflow-hidden">
      <FloatingElements />
      <div className="relative z-10 p-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Power-Up Shop
            </h1>
            <p className="text-muted-foreground">Enhance your gaming experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopItems.map((item) => (
              <Card
                key={item.id}
                className="relative bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                {item.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-4">
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-yellow-400">${item.price}</div>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Purchase
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation activeTab="shop" />
    </div>
  )
}
