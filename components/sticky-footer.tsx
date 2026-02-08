"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function StickyFooter() {
  const router = useRouter()

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF] to-[#14F195] opacity-20" />

      <footer className="relative w-full py-16 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
            {/* Logo Section */}
            <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/spartan-money-bag-logo.png"
                alt="BagSniper Logo"
                width={180}
                height={180}
                className="select-none"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-row gap-12 sm:gap-16 md:gap-24 text-sm sm:text-lg">
              <ul className="space-y-3 text-center md:text-left">
                <li
                  className="hover:underline cursor-pointer transition-all duration-200 text-foreground/80 hover:text-foreground hover:translate-x-1"
                  onClick={() => {
                    const heroSection = document.getElementById("hero")
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Home
                </li>
                <li
                  className="hover:underline cursor-pointer transition-all duration-200 text-foreground/80 hover:text-foreground hover:translate-x-1"
                  onClick={() => router.push("/whitepaper")}
                >
                  Whitepaper
                </li>
                <li
                  className="hover:underline cursor-pointer transition-all duration-200 text-foreground/80 hover:text-foreground hover:translate-x-1"
                  onClick={() => router.push("/docs")}
                >
                  Docs
                </li>
              </ul>
              <ul className="space-y-3 text-center md:text-left">
                <li
                  className="hover:underline cursor-pointer transition-all duration-200 text-foreground/80 hover:text-foreground hover:translate-x-1"
                  onClick={() => window.open("https://x.com/BagSniperSOL", "_blank")}
                >
                  Twitter
                </li>
                <li
                  className="hover:underline cursor-pointer transition-all duration-200 text-foreground/80 hover:text-foreground hover:translate-x-1"
                  onClick={() => window.open("https://t.me/bagsniper_app", "_blank")}
                >
                  Telegram
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} BagSniper. All rights reserved.
            </p>
            <span className="text-muted-foreground text-sm hidden sm:inline">|</span>
            <a
              href="https://visioncoding.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
            >
              Built by
              <Image
                src="/vision-coding-logo.png"
                alt="Vision Coding Logo"
                width={18}
                height={18}
                className="inline-block"
              />
              <span className="underline">Vision Coding</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
