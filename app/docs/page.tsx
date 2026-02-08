"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Menu, X } from "lucide-react"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const sections = [
    { id: "overview", title: "Overview", icon: "📋" },
    { id: "features", title: "Key Features", icon: "⚡" },
    { id: "tokenomics", title: "Tokenomics", icon: "💰" },
    { id: "roadmap", title: "Roadmap", icon: "🗺️" },
    { id: "getting-started", title: "Getting Started", icon: "🚀" },
    { id: "security", title: "Security", icon: "🔒" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setSidebarOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Header */}
      <header className="sticky top-4 z-[9999] mx-auto w-full max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <img src="/spartan-money-bag-logo.png" alt="Logo" className="rounded-full size-8 w-8" />
            <span className="font-bold text-foreground text-lg hidden sm:block">BagSniper</span>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside
            className={`${sidebarOpen ? "block" : "hidden"} lg:block fixed lg:sticky top-24 left-4 right-4 lg:left-0 lg:right-auto w-auto lg:w-64 h-fit bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 z-50`}
          >
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 text-white border border-[#14F195]/30"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.title}</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-0">
            <div className="text-center mb-12 mt-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                BagSniper
                <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent ml-3">
                  Docs
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete guide to using the lightning-fast Solana sniper bot
              </p>
            </div>

            <div className="space-y-16">
              {/* Overview Section */}
              <section
                id="overview"
                className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  Overview
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    BagSniper is a utility token and the cornerstone of the BagSniper Bot, a tool engineered for
                    lightning-fast trading on the Solana blockchain. Our mission is to empower traders by enabling them
                    to capture tokens before the crowd.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">🎯 Mission</h3>
                      <p className="text-muted-foreground">
                        Empower traders with unparalleled speed, security, and uptime for optimal trading execution on
                        Solana.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">⚡ Advantage</h3>
                      <p className="text-muted-foreground">
                        Real-time scanning of fresh liquidity pools with automatic risk filtering for maximum profit
                        potential.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section
                id="features"
                className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🎯 One-Shot Mint Sniping</h3>
                    <p className="text-muted-foreground mb-4">
                      Snipe tokens the very nanosecond they are launched. The bot automatically buys the first eligible
                      liquidity pool, giving you the earliest possible entry point.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Instant token detection</li>
                      <li>• Nanosecond execution</li>
                      <li>• First liquidity pool targeting</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🤖 Adaptive Auto Sniper Engine</h3>
                    <p className="text-muted-foreground mb-4">
                      Continuously scans new pools and automatically executes trades based on user-defined safety
                      filters.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Protocol allowlists</li>
                      <li>• Liquidity bands</li>
                      <li>• Max age seconds</li>
                      <li>• Freeze/mintability checks</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">⚡ Instant Manual Trading</h3>
                    <p className="text-muted-foreground mb-4">
                      Fast manual buy and sell options with real-time pool discovery and sub-second pricing.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time pool discovery</li>
                      <li>• Sub-second pricing</li>
                      <li>• Slippage control</li>
                      <li>• Priority/Jito fee toggles</li>
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🔒 Safe, Secure & Always On</h3>
                    <p className="text-muted-foreground mb-4">
                      Security-first approach with encrypted wallets, smart risk guards, and 24/7 monitoring.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Encrypted in-bot wallets</li>
                      <li>• Smart risk guards</li>
                      <li>• 24/7 monitoring</li>
                      <li>• Instant Telegram alerts</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Tokenomics Section */}
              <section
                id="tokenomics"
                className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  Tokenomics
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Token Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-muted-foreground">Token Name:</span>
                        <span className="text-white font-medium">BagSniper Bot</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-muted-foreground">Ticker:</span>
                        <span className="text-white font-medium">$BAG</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-muted-foreground">Blockchain:</span>
                        <span className="text-white font-medium">Solana</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Total Supply:</span>
                        <span className="text-white font-medium">1 Billion (Fixed)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Tax Distribution (10%)</h3>
                    <div className="space-y-4">
                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">Staking Rewards</span>
                          <span className="text-green-400 font-bold">5%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Distributed in $SOL</p>
                      </div>

                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">Development</span>
                          <span className="text-blue-400 font-bold">4%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Platform improvements & maintenance</p>
                      </div>

                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">Burn</span>
                          <span className="text-red-400 font-bold">1%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Permanently burned (deflationary)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Roadmap Section */}
              <section
                id="roadmap"
                className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🗺️</span>
                  Roadmap
                </h2>
                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 rounded-full p-2 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">Phase 1: Foundation and Launch</h3>
                        <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          IN PROGRESS
                        </span>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Initial DEX Offering (IDO) on Solana</li>
                          <li>• Community Building via social media and Telegram</li>
                          <li>• 100x Boost + Ads marketing campaign</li>
                          <li>• Moontok.io Listing</li>
                          <li>• Initial Telegram Bot Release</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500 rounded-full p-2 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">Phase 2: Growth and Advanced Features</h3>
                        <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          UPCOMING
                        </span>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Jupiter Verification</li>
                          <li>• CoinGecko and CoinMarketCap Listings</li>
                          <li>• DAO Governance Initiated</li>
                          <li>• Advanced Bot Features (TP/SL orders, liquidity analysis)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 rounded-full p-2 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">Phase 3: Ecosystem Expansion</h3>
                        <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          FUTURE
                        </span>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Centralized Exchange (CEX) Listings</li>
                          <li>• Mobile App Release</li>
                          <li>• Comprehensive DAO Governance</li>
                          <li>• Global Marketing Campaign</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 rounded-full p-2 mt-1">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Phase 4: Innovation and Sustainability
                        </h3>
                        <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          FUTURE
                        </span>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Multi-chain sniping support</li>
                          <li>• AI integration for smarter trading</li>
                          <li>• Strategic DeFi partnerships</li>
                          <li>• Staking rewards for holders</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Getting Started Section */}
              <section
                id="getting-started"
                className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Getting Started
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background/50 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">1️⃣</div>
                    <h3 className="text-lg font-semibold text-white mb-3">Visit Telegram</h3>
                    <p className="text-muted-foreground mb-4">Access the BagSniper Bot through Telegram.</p>
                    <a
                      href="https://t.me/BagSniperBot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </a>
                  </div>

                  <div className="bg-background/50 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">2️⃣</div>
                    <h3 className="text-lg font-semibold text-white mb-3">Configure Settings</h3>
                    <p className="text-muted-foreground mb-4">
                      Set up your trading preferences, safety filters, and wallet connections.
                    </p>
                    <div className="text-sm text-muted-foreground">Follow in-bot instructions</div>
                  </div>

                  <div className="bg-background/50 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-4">3️⃣</div>
                    <h3 className="text-lg font-semibold text-white mb-3">Start Trading</h3>
                    <p className="text-muted-foreground mb-4">
                      Begin sniping tokens with lightning-fast execution and automated safety checks.
                    </p>
                    <div className="text-sm text-muted-foreground">Monitor via Telegram alerts</div>
                  </div>
                </div>
              </section>

              {/* Security Section */}
              <section
                id="security"
                className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  Security
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Security Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <div>
                          <span className="text-white font-medium">Encrypted Wallets</span>
                          <p className="text-sm text-muted-foreground">
                            All wallet data is encrypted and stored securely
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <div>
                          <span className="text-white font-medium">Smart Risk Guards</span>
                          <p className="text-sm text-muted-foreground">
                            Automated protection against malicious contracts
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <div>
                          <span className="text-white font-medium">24/7 Monitoring</span>
                          <p className="text-sm text-muted-foreground">Continuous system monitoring and alerts</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Safety Filters</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">⚡</span>
                        <div>
                          <span className="text-white font-medium">Protocol Allowlists</span>
                          <p className="text-sm text-muted-foreground">Only trade on verified protocols</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">⚡</span>
                        <div>
                          <span className="text-white font-medium">Liquidity Checks</span>
                          <p className="text-sm text-muted-foreground">Ensure adequate liquidity before trading</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">⚡</span>
                        <div>
                          <span className="text-white font-medium">Freeze Protection</span>
                          <p className="text-sm text-muted-foreground">Avoid tokens with freeze authority</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Sniping?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of traders using BagSniper for lightning-fast token captures on Solana.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://t.me/BagSniperBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-3 text-lg"
                  >
                    Start Trading Now
                  </a>
                  <Link
                    href="/whitepaper"
                    className="inline-block rounded-lg font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 bg-background/50 border border-border/50 text-white px-8 py-3 text-lg"
                  >
                    Read Whitepaper
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
