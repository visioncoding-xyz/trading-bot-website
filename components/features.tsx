"use client"

import Earth from "./ui/globe"
import { FollowerPointerCard } from "./ui/following-pointer"
import { Suspense, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)

  const [baseColor] = useState<[number, number, number]>([0.906, 0.541, 0.325])
  const [glowColor] = useState<[number, number, number]>([0.906, 0.541, 0.325])

  const dark = 1

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className,
          )}
        >
          Features
        </h2>
        <FollowerPointerCard>
          <div className="cursor-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out hover:scale-[1.02] hover:border-[rgba(231,138,83,0.6)] hover:shadow-[0_0_30px_rgba(231,138,83,0.2)]"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Lightning-Fast Mint Sniping</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Snipe an unreleased token mint; the bot auto‑buys the first eligible liquidity pool within
                      nanoseconds of launch.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 border-2 border-orange-400 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 border border-orange-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 rounded px-3 py-1 text-green-400 text-sm font-mono">
                      ⚡ Nanosecond Execution
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out hover:scale-[1.02] hover:border-[rgba(231,138,83,0.6)] hover:shadow-[0_0_30px_rgba(231,138,83,0.2)]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Adaptive Auto Sniper Engine</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Continuously scans new pools and auto-executes based on user safety filters (protocol allowlist,
                      liquidity bands, max age seconds, freeze/mintability checks, etc).
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-start justify-center select-none">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-[300px] h-[300px] relative">
                      <Suspense
                        fallback={
                          <div className="bg-secondary/20 h-[300px] w-[300px] animate-pulse rounded-full"></div>
                        }
                      >
                        <Earth baseColor={baseColor} markerColor={[0, 1, 0]} glowColor={glowColor} dark={dark} />
                      </Suspense>
                      <div className="absolute inset-0 border-2 border-green-400 rounded-full opacity-50" />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/70 rounded px-2 py-1 text-xs text-green-400">
                        🔍 Scanning Pools
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out hover:scale-[1.02] hover:border-[rgba(231,138,83,0.5)] hover:shadow-[0_0_30px_rgba(231,138,83,0.2)]"
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Instant Manual Trading</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Fast manual buy & sell with real-time pool discovery, fresh sub‑second pricing, slippage control,
                      priority/Jito fee toggles, and immediate execution feedback.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-lg">
                    <div className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm">
                      <div className="p-4 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-sm">SOL/USDC</span>
                          <span className="text-green-400 text-sm font-mono">$142.35</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="bg-green-500/20 border border-green-500/30 text-green-400 py-3 rounded-lg font-medium hover:scale-105 hover:bg-green-500/30 transition-all">
                            BUY
                          </button>
                          <button className="bg-red-500/20 border border-red-500/30 text-red-400 py-3 rounded-lg font-medium hover:scale-105 hover:bg-red-500/30 transition-all">
                            SELL
                          </button>
                        </div>
                        <div className="text-center text-xs text-white/50">⚡ Sub-second execution</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out hover:shadow-[0_20px_40px_rgba(231,138,83,0.3)] hover:border-[rgba(231,138,83,0.6)]"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Safe, Secure & Always On</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Encrypted in‑bot wallets, smart risk guards, 24/7 monitoring, and instant Telegram alerts keep you
                      ahead while your funds stay under your control.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-sm">
                    <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-white/70">Wallet Security</span>
                          <span className="text-green-400">🔒 Encrypted</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/70">Monitoring</span>
                          <span className="text-green-400">🟢 24/7 Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/70">Alerts</span>
                          <span className="text-blue-400">📱 Telegram</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </section>
  )
}
