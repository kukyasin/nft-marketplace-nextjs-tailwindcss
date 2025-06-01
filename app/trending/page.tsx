"use client"

import { Button } from "@/components/ui/button"
import {
  Search,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  BarChart3,
  Filter,
  ArrowUpDown,
  Star,
  Grid,
  List,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState("1d")
  const [sortBy, setSortBy] = useState("volume")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every second for the terminal-style clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const trendingCollections = [
    {
      rank: 1,
      id: "moonbirds",
      name: "Moonbirds",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.66",
      topBid: "0.62",
      change1d: "+21.10%",
      change7d: "+105.57%",
      change30d: "+89.23%",
      volume1d: "184.64",
      volume7d: "389.02",
      volume30d: "1,234.56",
      owners: "5802",
      ownerPercentage: "59%",
      supply: "9999",
      marketCap: "6,599.34",
      isPositive1d: true,
      isPositive7d: true,
      isPositive30d: true,
      verified: true,
    },
    {
      rank: 2,
      id: "doodles",
      name: "Doodles",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "1.06",
      topBid: "1.05",
      change1d: "+1.52%",
      change7d: "-7.47%",
      change30d: "+12.34%",
      volume1d: "74.31",
      volume7d: "415.02",
      volume30d: "892.45",
      owners: "4109",
      ownerPercentage: "41%",
      supply: "9998",
      marketCap: "10,597.88",
      isPositive1d: true,
      isPositive7d: false,
      isPositive30d: true,
      verified: true,
    },
    {
      rank: 3,
      id: "otherdeed",
      name: "Otherdeed",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.20",
      topBid: "0.19",
      change1d: "+13.00%",
      change7d: "+8.11%",
      change30d: "+45.67%",
      volume1d: "13.99",
      volume7d: "26.87",
      volume30d: "156.78",
      owners: "14524",
      ownerPercentage: "33%",
      supply: "44502",
      marketCap: "8,900.40",
      isPositive1d: true,
      isPositive7d: true,
      isPositive30d: true,
      verified: true,
    },
    {
      rank: 4,
      id: "rektguy",
      name: "rektguy",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.36",
      topBid: "0.34",
      change1d: "-4.26%",
      change7d: "+3.16%",
      change30d: "-8.92%",
      volume1d: "2.17",
      volume7d: "54.63",
      volume30d: "234.12",
      owners: "3361",
      ownerPercentage: "38%",
      supply: "8814",
      marketCap: "3,173.04",
      isPositive1d: false,
      isPositive7d: true,
      isPositive30d: false,
      verified: false,
    },
    {
      rank: 5,
      id: "murakami",
      name: "Murakami.Flowers",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.20",
      topBid: "0.19",
      change1d: "-11.00%",
      change7d: "+0.47%",
      change30d: "-15.23%",
      volume1d: "6.57",
      volume7d: "15.89",
      volume30d: "89.45",
      owners: "5172",
      ownerPercentage: "51%",
      supply: "10175",
      marketCap: "2,035.00",
      isPositive1d: false,
      isPositive7d: true,
      isPositive30d: false,
      verified: true,
    },
    {
      rank: 6,
      id: "turbotoad",
      name: "Turbo Toad Collection",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.01",
      topBid: "0.009",
      change1d: "-9.38%",
      change7d: "+12.45%",
      change30d: "+234.56%",
      volume1d: "9.59",
      volume7d: "204.83",
      volume30d: "567.89",
      owners: "1290",
      ownerPercentage: "13%",
      supply: "10000",
      marketCap: "100.00",
      isPositive1d: false,
      isPositive7d: true,
      isPositive30d: true,
      verified: false,
    },
    {
      rank: 7,
      id: "imaginary",
      name: "Imaginary Ones",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.15",
      topBid: "0.14",
      change1d: "+0.00%",
      change7d: "-1.95%",
      change30d: "+5.67%",
      volume1d: "0.13",
      volume7d: "2.19",
      volume30d: "45.67",
      owners: "965",
      ownerPercentage: "11%",
      supply: "8888",
      marketCap: "1,333.20",
      isPositive1d: true,
      isPositive7d: false,
      isPositive30d: true,
      verified: true,
    },
    {
      rank: 8,
      id: "genesis",
      name: "Genesis",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.03",
      topBid: "0.029",
      change1d: "+0.09%",
      change7d: "+53.05%",
      change30d: "+123.45%",
      volume1d: "7.88",
      volume7d: "44.63",
      volume30d: "234.56",
      owners: "50947",
      ownerPercentage: "54%",
      supply: "94754",
      marketCap: "2,842.62",
      isPositive1d: true,
      isPositive7d: true,
      isPositive30d: true,
      verified: true,
    },
  ]

  const timeFilters = [
    { label: "1D", value: "1d" },
    { label: "7D", value: "7d" },
    { label: "30D", value: "30d" },
    { label: "ALL", value: "all" },
  ]

  const getChangeValue = (collection: any, period: string) => {
    switch (period) {
      case "1d":
        return { value: collection.change1d, isPositive: collection.isPositive1d }
      case "7d":
        return { value: collection.change7d, isPositive: collection.isPositive7d }
      case "30d":
        return { value: collection.change30d, isPositive: collection.isPositive30d }
      default:
        return { value: collection.change1d, isPositive: collection.isPositive1d }
    }
  }

  const getVolumeValue = (collection: any, period: string) => {
    switch (period) {
      case "1d":
        return collection.volume1d
      case "7d":
        return collection.volume7d
      case "30d":
        return collection.volume30d
      default:
        return collection.volume1d
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800/30 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-blur-orange tracking-tighter">
                STREAMLINE
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/collections"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider"
                >
                  COLLECTIONS
                </Link>
                <Link
                  href="/trending"
                  className="text-sm font-normal text-blur-orange border-b border-blur-orange pb-4 tracking-wider"
                >
                  TRENDING
                </Link>
                <Link
                  href="/portfolio"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider"
                >
                  PORTFOLIO
                </Link>
                <Link
                  href="/activity"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider"
                >
                  ACTIVITY
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-black border border-gray-800/30 rounded-none px-3 py-2 w-64">
                <Search className="h-4 w-4 text-blur-gray" />
                <input
                  type="text"
                  placeholder="collections, wallets, or ENS"
                  className="bg-transparent text-sm text-white placeholder-blur-gray outline-none flex-1"
                />
                <span className="text-xs text-blur-gray">⌘K</span>
              </div>
              <Button className="bg-blur-orange hover:bg-blur-orange/90 text-black font-normal rounded-none transition-colors tracking-wider">
                CONNECT WALLET
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Page Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-blur-orange">Trending</h1>
                  <p className="text-blur-gray mt-1 text-sm tracking-wide">Most active collections by volume</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Time Filter */}
                <div className="flex items-center gap-1 bg-black border border-gray-800/30 p-1">
                  {timeFilters.map((filter) => (
                    <Button
                      key={filter.value}
                      size="sm"
                      variant={timeFilter === filter.value ? "default" : "ghost"}
                      onClick={() => setTimeFilter(filter.value)}
                      className={
                        timeFilter === filter.value
                          ? "bg-blur-orange text-black hover:bg-blur-orange/90 rounded-none"
                          : "text-blur-gray hover:text-white rounded-none"
                      }
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>

                {/* View Mode */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "text-blur-orange rounded-none" : "text-blur-gray rounded-none"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "text-blur-orange rounded-none" : "text-blur-gray rounded-none"}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                </div>

                {/* Filters */}
                <Button
                  variant="outline"
                  className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black hover:border-blur-orange rounded-none tracking-wider"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Table */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="bg-black border border-gray-800/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-800/30">
                    <tr className="text-left">
                      <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          COLLECTION
                          <ArrowUpDown className="h-3 w-3 text-blur-orange/50" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          FLOOR
                          <ArrowUpDown className="h-3 w-3 text-blur-orange/50" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          {timeFilter.toUpperCase()} CHANGE
                          <ArrowUpDown className="h-3 w-3 text-blur-orange/50" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          {timeFilter.toUpperCase()} VOLUME
                          <ArrowUpDown className="h-3 w-3 text-blur-orange/50" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          OWNERS
                          <ArrowUpDown className="h-3 w-3 text-blur-orange/50" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/10">
                    {trendingCollections.map((collection, index) => {
                      const change = getChangeValue(collection, timeFilter)
                      const volume = getVolumeValue(collection, timeFilter)

                      return (
                        <tr key={collection.id} className="hover:bg-gray-900/20 transition-colors group cursor-pointer">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <span className="text-blur-gray text-sm w-4">{collection.rank}</span>
                              <div className="relative">
                                <div className="w-12 h-12 bg-gray-900 border border-gray-800/30 flex items-center justify-center overflow-hidden">
                                  <Image
                                    src={collection.avatar || "/placeholder.svg"}
                                    width={48}
                                    height={48}
                                    alt={collection.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                {collection.verified && (
                                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blur-orange flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-white font-medium tracking-tight">{collection.name}</span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="opacity-0 group-hover:opacity-100 p-1 transition-opacity"
                                  >
                                    <Star className="h-3 w-3 text-blur-orange" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-1">
                              <span className="text-white font-medium">{collection.floorPrice}</span>
                              <span className="text-blur-orange">Ξ</span>
                            </div>
                          </td>
                          <td
                            className={`px-6 py-5 font-medium ${change.isPositive ? "text-blur-green" : "text-blur-red"}`}
                          >
                            <div className="flex items-center gap-1">
                              {change.isPositive ? (
                                <TrendingUp className="h-3 w-3" />
                              ) : (
                                <TrendingDown className="h-3 w-3" />
                              )}
                              {change.value}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-1">
                              <span className="text-white font-medium">{volume}</span>
                              <span className="text-blur-orange">Ξ</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-blur-gray">
                            <div className="flex items-center gap-2">
                              <Users className="h-3 w-3 text-blur-orange/50" />
                              <span>
                                {collection.owners} ({collection.ownerPercentage})
                              </span>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black hover:border-blur-orange tracking-wider rounded-none"
              >
                Load More
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Summary */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-black border border-gray-800/30 p-6 hover:border-blur-orange/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="h-5 w-5 text-blur-orange" />
                  <span className="text-sm text-blur-gray tracking-wider">TOTAL VOLUME</span>
                </div>
                <p className="text-2xl font-bold tracking-tight">
                  2,847.32 <span className="text-blur-orange">Ξ</span>
                </p>
                <p className="text-sm text-blur-green mt-1">+12.5% from yesterday</p>
              </div>

              <div className="bg-black border border-gray-800/30 p-6 hover:border-blur-orange/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-blur-orange" />
                  <span className="text-sm text-blur-gray tracking-wider">AVG FLOOR PRICE</span>
                </div>
                <p className="text-2xl font-bold tracking-tight">
                  0.89 <span className="text-blur-orange">Ξ</span>
                </p>
                <p className="text-sm text-blur-red mt-1">-3.2% from yesterday</p>
              </div>

              <div className="bg-black border border-gray-800/30 p-6 hover:border-blur-orange/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-blur-orange" />
                  <span className="text-sm text-blur-gray tracking-wider">ACTIVE TRADERS</span>
                </div>
                <p className="text-2xl font-bold tracking-tight">1,234</p>
                <p className="text-sm text-blur-green mt-1">+8.7% from yesterday</p>
              </div>

              <div className="bg-black border border-gray-800/30 p-6 hover:border-blur-orange/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-blur-orange" />
                  <span className="text-sm text-blur-gray tracking-wider">TOTAL SALES</span>
                </div>
                <p className="text-2xl font-bold tracking-tight">5,678</p>
                <p className="text-sm text-blur-green mt-1">+15.3% from yesterday</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <Link href="/" className="text-xl font-bold text-blur-orange tracking-tighter">
                STREAMLINE
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-blur-gray hover:text-blur-orange transition-colors">
                Collections
              </Link>
              <Link href="#" className="text-sm text-blur-gray hover:text-blur-orange transition-colors">
                Trending
              </Link>
              <Link href="#" className="text-sm text-blur-gray hover:text-blur-orange transition-colors">
                Portfolio
              </Link>
              <Link href="#" className="text-sm text-blur-gray hover:text-blur-orange transition-colors">
                Activity
              </Link>
            </div>
            <div className="text-sm text-blur-gray">&copy; {new Date().getFullYear()} STREAMLINE</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
