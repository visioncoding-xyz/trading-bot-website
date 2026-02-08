"use client"
import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WhitepaperPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

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
      <header className="sticky top-4 z-[9999] mx-auto w-full max-w-5xl px-4 py-2">
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
            <span className="font-bold text-foreground text-lg hidden sm:block">BagSniper Bot</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            BagSniper
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent ml-3">
              Whitepaper
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical documentation and tokenomics for the lightning-fast Solana sniper bot
          </p>
        </div>

        {/* PDF Embed Container */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-border/50 bg-background/30">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">BagSniper Whitepaper</h2>
              <a
                href="https://mg7thekiuu8v6dop.public.blob.vercel-storage.com/BagSniper-Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Open in new tab
              </a>
            </div>
          </div>

          <div className="relative w-full" style={{ height: "80vh" }}>
            <iframe
              src="https://mg7thekiuu8v6dop.public.blob.vercel-storage.com/BagSniper-Whitepaper.pdf"
              className="w-full h-full border-0"
              title="BagSniper Whitepaper"
              loading="lazy"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Sniping?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of traders using BagSniper for lightning-fast token captures on Solana.
            </p>
            <a
              href="https://t.me/BagSniperBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-3 text-lg"
            >
              Start Trading Now
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
