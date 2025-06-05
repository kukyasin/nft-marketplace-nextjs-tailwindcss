"use client"

import { Button } from "@/components/ui/button"
import { Search, Filter, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Import JSON data
import dropsData from "@/data/drops.json"

export default function DropsPage() {
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")

  const statusFilters = ["all", "live", "coming-soon", "ended"]
  const categoryFilters = ["all", "art", "gaming", "metaverse", "nature"]

  const filteredDrops = dropsData.filter((drop) => {
    const statusMatch =
      filterStatus === "all" ||
      (filterStatus === "live" && drop.status === "Live") ||
      (filterStatus === "coming-soon" && drop.status === "Coming Soon") ||
      (filterStatus === "ended" && drop.status === "Sold Out")

    const categoryMatch = filterCategory === "all" || drop.category.toLowerCase() === filterCategory

    return statusMatch && categoryMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-blur-green text-black"
      case "Coming Soon":
        return "bg-blue-500 text-white"
      case "Sold Out":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = end.getTime() - now.getTime()

    if (diff <= 0) return "Ended"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    if (days > 0) return `${days}d ${hours}h`
    return `${hours}h`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Drops</h1>
                <p className="text-blur-gray mt-1 text-sm tracking-wide">Discover upcoming and live NFT drops</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-800/30 rounded-lg px-3 py-2 w-64">
                  <Search className="h-4 w-4 text-blur-gray" />
                  <input
                    type="text"
                    placeholder="Search drops..."
                    className="bg-transparent text-sm text-white placeholder-blur-gray outline-none flex-1"
                  />
                </div>

                {/* Filters */}
                <Button
                  variant="outline"
                  className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black hover:border-blur-orange rounded-lg"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Status Filters */}
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {statusFilters.map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus(status)}
                  className={
                    filterStatus === status
                      ? "bg-blur-orange text-black hover:bg-blur-orange/90 rounded-lg whitespace-nowrap"
                      : "border-gray-800/30 text-gray-300 hover:text-white rounded-lg whitespace-nowrap"
                  }
                >
                  {status === "coming-soon" ? "Coming Soon" : status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 mb-8 overflow-x-auto">
              {categoryFilters.map((category) => (
                <Button
                  key={category}
                  variant={filterCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory(category)}
                  className={
                    filterCategory === category
                      ? "bg-blur-orange text-black hover:bg-blur-orange/90 rounded-lg whitespace-nowrap"
                      : "border-gray-800/30 text-gray-300 hover:text-white rounded-lg whitespace-nowrap"
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Drops Grid */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrops.map((drop) => (
                <div
                  key={drop.id}
                  className="bg-gray-900/30 border border-gray-800/30 rounded-xl overflow-hidden hover:border-blur-orange/30 transition-colors group cursor-pointer"
                >
                  {/* Banner Image */}
                  <div className="relative">
                    <Image
                      src={drop.banner || "/placeholder.svg"}
                      width={600}
                      height={200}
                      alt={drop.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(drop.status)}`}>
                        {drop.status}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-800/50 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={drop.image || "/placeholder.svg"}
                          width={64}
                          height={64}
                          alt={drop.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-white">{drop.name}</h3>
                          {drop.verified && (
                            <div className="w-4 h-4 bg-blur-orange rounded-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-blur-gray">by {drop.creator}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">{drop.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-blur-gray">Mint Price</p>
                        <p className="font-medium text-white">
                          {drop.price} {drop.currency}
                        </p>
                      </div>
                      <div>
                        <p className="text-blur-gray">Supply</p>
                        <p className="font-medium text-white">{drop.supply}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {drop.status !== "Coming Soon" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-blur-gray mb-1">
                          <span>Minted</span>
                          <span>
                            {drop.minted} / {drop.supply}
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-blur-orange h-2 rounded-full transition-all"
                            style={{
                              width: `${(Number.parseInt(drop.minted.replace(/,/g, "")) / Number.parseInt(drop.supply.replace(/,/g, ""))) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Time and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-blur-gray">
                        <Clock className="h-4 w-4" />
                        <span>
                          {drop.status === "Coming Soon"
                            ? `Starts in ${getTimeRemaining(drop.startDate)}`
                            : drop.status === "Live"
                              ? `Ends in ${getTimeRemaining(drop.endDate)}`
                              : "Ended"}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className={
                          drop.status === "Live"
                            ? "bg-blur-orange hover:bg-blur-orange/90 text-black"
                            : drop.status === "Coming Soon"
                              ? "bg-blue-500 hover:bg-blue-600 text-white"
                              : "bg-gray-500 text-white cursor-not-allowed"
                        }
                        disabled={drop.status === "Sold Out"}
                      >
                        {drop.status === "Live" ? "Mint Now" : drop.status === "Coming Soon" ? "Notify Me" : "Sold Out"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black hover:border-blur-orange rounded-lg"
              >
                Load More Drops
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-black border border-gray-800/30 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blur-orange mb-2">24</div>
                <div className="text-sm text-blur-gray">Live Drops</div>
              </div>
              <div className="bg-black border border-gray-800/30 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blur-orange mb-2">156</div>
                <div className="text-sm text-blur-gray">Coming Soon</div>
              </div>
              <div className="bg-black border border-gray-800/30 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blur-orange mb-2">2.4K</div>
                <div className="text-sm text-blur-gray">Total Volume</div>
              </div>
              <div className="bg-black border border-gray-800/30 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blur-orange mb-2">89K</div>
                <div className="text-sm text-blur-gray">Total Mints</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
