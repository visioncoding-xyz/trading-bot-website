"use client"

import { CheckCircle, Circle, Clock, Rocket } from "lucide-react"

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation and Launch",
    status: "in-progress",
    items: [
      "Initial DEX Offering (IDO) on Solana blockchain",
      "Community Building through social media and Telegram",
      "100x Boost + Ads marketing campaign",
      "Moontok.io Listing for increased visibility",
      "DexTools and Dex Paid social updates",
      "Initial Telegram Bot Release",
    ],
  },
  {
    phase: "Phase 2",
    title: "Growth and Advanced Features",
    status: "upcoming",
    items: [
      "Jupiter Verification for increased market trust",
      "CoinGecko and CoinMarketCap Listings",
      "DAO Governance Initiated",
      "Advanced Bot Features: custom TP/SL orders",
      "Real-time liquidity analysis",
      "Improved user analytics",
    ],
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Expansion and Global Reach",
    status: "future",
    items: [
      "Centralized Exchange (CEX) Listings",
      "Mobile App Release",
      "Comprehensive DAO Governance Realized",
      "Global Marketing Campaign",
      "Enhanced trading platform",
      "Worldwide community expansion",
    ],
  },
  {
    phase: "Phase 4",
    title: "Innovation and Sustainability",
    status: "future",
    items: [
      "Multi-chain sniping support",
      "AI integration for smarter trading",
      "Strategic DeFi partnerships",
      "Staking rewards for holders",
    ],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-6 h-6 text-green-500" />
    case "in-progress":
      return <Clock className="w-6 h-6 text-orange-500" />
    case "upcoming":
      return <Circle className="w-6 h-6 text-blue-500" />
    case "future":
      return <Rocket className="w-6 h-6 text-purple-500" />
    default:
      return <Circle className="w-6 h-6 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "from-green-500 to-emerald-500"
    case "in-progress":
      return "from-orange-500 to-yellow-500"
    case "upcoming":
      return "from-blue-500 to-cyan-500"
    case "future":
      return "from-purple-500 to-pink-500"
    default:
      return "from-gray-500 to-gray-400"
  }
}

export function RoadmapSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Rocket className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">Roadmap</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Our Journey
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Building the future of automated trading on Solana
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.phase}
                className="relative rounded-2xl p-8 backdrop-blur-sm border bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  {getStatusIcon(item.status)}
                  <div>
                    <div className="text-sm text-white/60 font-medium">{item.phase}</div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(item.status)}`} />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(item.status)} text-white`}
                  >
                    {item.status.replace("-", " ").toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
