"use client"

import { Button } from "@/components/ui/button"
import {
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
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Import JSON data
import trendingCollectionsData from "@/data/trending-collections.json"

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
      <Header />

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
                    {trendingCollectionsData.map((collection, index) => {
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

      <Footer />
    </div>
  )
}
