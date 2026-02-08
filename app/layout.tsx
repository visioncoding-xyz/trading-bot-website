import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "BagSniper - Lightning Fast Solana Sniper Bot",
  description:
    "Lightning-fast token captures on Solana. Snipe new tokens, execute trades instantly, and profit with our advanced auto-sniping engine.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "BagSniper - Lightning Fast Solana Sniper Bot",
    description:
      "Lightning-fast token captures on Solana. Snipe new tokens, execute trades instantly, and profit with our advanced auto-sniping engine.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BagSniper - Lightning Fast Solana Sniper Bot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BagSniper - Lightning Fast Solana Sniper Bot",
    description:
      "Lightning-fast token captures on Solana. Snipe new tokens, execute trades instantly, and profit with our advanced auto-sniping engine.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="dark font-sans antialiased">{children}</body>
    </html>
  )
}