"use client"
import { Coins, TrendingUp, Copy, Check } from "lucide-react"
import { useState } from "react"

const tokenomicsData = [
  {
    title: "Total Supply",
    value: "1B",
    description: "Fixed supply with no additional minting",
    icon: Coins,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tax Rate",
    value: "10%",
    description: "Applied on all transactions",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
  },
]

export function TokenomicsSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "AGo2mZNfN6P6PhXVUMNB4GUwJZpPrv2jGhbwgsLucTAX"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Coins className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">Tokenomics</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Tokenomics
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Designed for sustainability and growth with rewards for our community
          </p>
        </div>

        {/* Contract Address */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 backdrop-blur-sm border bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Contract Address</h3>
            <div className="flex items-center justify-between bg-black/20 rounded-xl p-4 border border-white/10">
              <div className="flex-1 min-w-0">
                <code className="text-white/80 font-mono text-sm break-all">{contractAddress}</code>
              </div>
              <button
                onClick={copyToClipboard}
                className="ml-4 p-2 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-white font-medium shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tokenomicsData.map((item, index) => (
            <div
              key={item.title}
              className="relative rounded-2xl p-8 backdrop-blur-sm border bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tax Breakdown */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 backdrop-blur-sm border bg-white/5 border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Tax Distribution Breakdown</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  5%
                </div>
                <div className="text-white font-medium">Buy Back & Burns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  4%
                </div>
                <div className="text-white font-medium">Development & Marketing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  1%
                </div>
                <div className="text-white font-medium">Holder Rewards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
