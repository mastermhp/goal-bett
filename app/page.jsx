"use client"
import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FloatingElements } from "@/components/ui/floating-elements"
import { HeroSection } from "@/components/ui/hero-section"
import { FeaturesSection } from "@/components/ui/features-section"
import { GamesPreview } from "@/components/ui/games-preview"
import { TestimonialsSection } from "@/components/ui/testimonials-section"
import { Menu, X } from "lucide-react"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="default" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#games" className="text-foreground hover:text-primary transition-colors">
                Games
              </a>
              <a href="#sports" className="text-foreground hover:text-primary transition-colors">
                Sports
              </a>
              <a href="#tournaments" className="text-foreground hover:text-primary transition-colors">
                Tournaments
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <AnimatedButton variant="glass" size="sm" onClick={() => (window.location.href = "/auth/login")}>
                Log In
              </AnimatedButton>
              <AnimatedButton variant="primary" size="sm" onClick={() => (window.location.href = "/auth/signup")}>
                Sign Up
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-up">
              <a href="#games" className="block text-foreground hover:text-primary transition-colors">
                Games
              </a>
              <a href="#sports" className="block text-foreground hover:text-primary transition-colors">
                Sports
              </a>
              <a href="#tournaments" className="block text-foreground hover:text-primary transition-colors">
                Tournaments
              </a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="flex space-x-4 pt-4">
                <AnimatedButton variant="glass" size="sm" onClick={() => (window.location.href = "/auth/login")}>
                  Log In
                </AnimatedButton>
                <AnimatedButton variant="primary" size="sm" onClick={() => (window.location.href = "/auth/signup")}>
                  Sign Up
                </AnimatedButton>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <GamesPreview />
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
              <h2 className="text-5xl font-bold gradient-text">Ready to Start Winning?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of players who have already discovered the future of online gaming
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <AnimatedButton variant="primary" size="lg" onClick={() => (window.location.href = "/auth/signup")}>
                  Create Account
                </AnimatedButton>
                <AnimatedButton variant="glass" size="lg" onClick={() => (window.location.href = "/auth/login")}>
                  Sign In
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo size="default" className="mb-4" />
              <p className="text-muted-foreground">The ultimate destination for sports betting and casino gaming.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Games</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Slots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Roulette
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Sports Betting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Responsible Gaming
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Goal Betting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
