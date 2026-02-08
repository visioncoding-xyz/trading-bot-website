"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { NewReleasePromo } from "@/components/new-release-promo"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { StickyFooter } from "@/components/sticky-footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120 // Account for sticky header height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )

  const TelegramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <div className="relative w-full flex items-center">
          {/* Left: Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-80 ${
                isScrolled ? "ml-4" : ""
              }`}
            >
              <img src="/spartan-money-bag-logo.png" alt="BagSniper Logo" className="rounded-full size-8 w-8" />
              {!isScrolled && <span className="font-bold text-foreground text-lg">BagSniper</span>}
            </Link>
          </div>

          {/* Center: Navigation - Moved further left to avoid overlap with social icons */}
          <div
            className={`absolute transform -translate-x-1/2 flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-all duration-300 ${
              isScrolled ? "left-[38%]" : "left-[52%]"
            }`}
          >
            <Link
              href="#features"
              className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="relative z-20">Features</span>
            </Link>
            <Link
              href="#tokenomics"
              className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="relative z-20">Tokenomics</span>
            </Link>
            <Link
              href="#roadmap"
              className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="relative z-20">Roadmap</span>
            </Link>
            <div className="relative">
              <button
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onBlur={(e) => {
                  // Close dropdown when clicking outside
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setTimeout(() => setIsResourcesOpen(false), 150)
                  }
                }}
              >
                <span className="relative z-20">Resources</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/whitepaper"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background/50 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Whitepaper
                  </Link>
                  <Link
                    href="/docs"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background/50 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Documentation
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right: Social Icons + Start Trading Button - Reordered X first, then Telegram */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="https://x.com/BagSniperSOL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200 hover:scale-105"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </Link>
            <Link
              href="https://t.me/bagsniper_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200 hover:scale-105"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </Link>
            <Link
              href="https://t.me/BagSniperBot"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
            >
              Start Trading
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link href="/" className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/spartan-money-bag-logo.png" alt="BagSniper Logo" className="rounded-full size-7 w-7" />
          {!isScrolled && <span className="font-bold text-foreground text-lg">BagSniper</span>}
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="https://x.com/BagSniperSOL"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
            aria-label="X (Twitter)"
          >
            <XIcon />
          </Link>
          <Link
            href="https://t.me/bagsniper_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-200"
            aria-label="Telegram"
          >
            <TelegramIcon />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
              <span
                className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Features
              </button>
              <button
                onClick={() => handleMobileNavClick("tokenomics")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Tokenomics
              </button>
              <button
                onClick={() => handleMobileNavClick("roadmap")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Roadmap
              </button>
              <div className="border-t border-border/50 pt-4">
                <p className="px-4 py-2 text-sm font-semibold text-muted-foreground">Resources</p>
                <Link
                  href="/whitepaper"
                  className="block px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Whitepaper
                </Link>
                <Link
                  href="/docs"
                  className="block px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Tokenomics Section */}
      <div id="tokenomics">
        <TokenomicsSection />
      </div>

      {/* Roadmap Section */}
      <div id="roadmap">
        <RoadmapSection />
      </div>

      <NewReleasePromo />

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
