"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, Users, Clock, ExternalLink, RefreshCw } from "lucide-react"
import Link from "next/link"

interface RevshareData {
  totalSolDistributed: number
  totalDistributions: number
  minimumRequired: number
  lastUpdated: string
  dataSource: string
}

interface ApiResponse {
  success: boolean
  data: RevshareData
  warning?: string
}

export default function RewardsPage() {
  const [data, setData] = useState<RevshareData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("/api/revshare", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse = await response.json()

      if (result.success && result.data) {
        setData(result.data)
        setLastRefresh(new Date())
      } else {
        throw new Error("Invalid response format")
      }
    } catch (err) {
      console.error("Failed to fetch revshare data:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4,
    }).format(num)
  }

  const formatTokens = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex items-center space-x-2">
              <RefreshCw className="h-6 w-6 animate-spin" />
              <span className="text-lg">Loading reward data...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <div className="text-red-400 text-lg">Error loading reward data</div>
            <div className="text-gray-400">{error}</div>
            <Button onClick={fetchData} variant="outline" className="mt-4 bg-transparent">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Reward Distribution
              </h1>
              <p className="text-gray-400 mt-2">Track real-time reward distributions for Velocity Sniper Bot holders</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-500/20 text-green-400">
                Live Data
              </Badge>
              <Button onClick={fetchData} variant="outline" size="sm" disabled={loading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total SOL Distributed</CardTitle>
              <Coins className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">
                {data ? formatNumber(data.totalSolDistributed) : "0"} SOL
              </div>
              <p className="text-xs text-gray-500 mt-1">Lifetime rewards distributed</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Distributions</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {data ? formatNumber(data.totalDistributions) : "0"}
              </div>
              <p className="text-xs text-gray-500 mt-1">Distribution events completed</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Minimum Required</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">{data ? formatTokens(data.minimumRequired) : "0"}</div>
              <p className="text-xs text-gray-500 mt-1">Tokens needed for rewards</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* How It Works */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">How Rewards Work</CardTitle>
              <CardDescription className="text-gray-400">
                Understanding the Velocity Sniper Bot reward system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white">Hold Minimum Tokens</h4>
                  <p className="text-sm text-gray-400">
                    Hold at least {data ? formatTokens(data.minimumRequired) : "1,000,000"} VELOCITY tokens to be
                    eligible for rewards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white">Automatic Distribution</h4>
                  <p className="text-sm text-gray-400">
                    Rewards are automatically distributed to eligible holders based on their token holdings
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white">SOL Rewards</h4>
                  <p className="text-sm text-gray-400">
                    Receive SOL rewards directly to your wallet from bot trading profits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Information */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">Data Information</CardTitle>
              <CardDescription className="text-gray-400">Real-time tracking and transparency</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Last Updated</span>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-white text-sm">{lastRefresh.toLocaleTimeString()}</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Data Source</span>
                <Badge variant="outline" className="border-blue-500/20 text-blue-400">
                  {data?.dataSource || "API"}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400">Update Frequency</span>
                <span className="text-white text-sm">Real-time</span>
              </div>

              <div className="pt-4">
                <Link
                  href="https://revshare.dev/token/AGo2mZNfN6P6PhXVUMNB4GUwJZpPrv2jGhbwgsLucTAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View on RevShare.dev</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="border-gray-700 hover:border-gray-600 bg-transparent">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
