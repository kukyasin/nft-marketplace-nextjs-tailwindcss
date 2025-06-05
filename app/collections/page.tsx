"use client"

import { Button } from "@/components/ui/button"
import { Search, Filter, Grid, List, TrendingUp, Star } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NFTThumbnail from "@/components/NFTThumbnail"

// Import JSON data
import featuredCollectionsData from "@/data/featured-collections.json"
import trendingCollectionsData from "@/data/trending-collections.json"

export default function CollectionsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("volume")
  const [filterCategory, setFilterCategory] = useState("all")

  // Combine and format collections data
  const allCollections = [
    ...featuredCollectionsData.map((collection) => ({
      ...collection,
      rank: 0,
      volume24h: collection.volume,
      owners: "2,345",
      ownerPercentage: "45%",
    })),
    ...trendingCollectionsData.slice(0, 12),
  ]

  const categories = ["all", "art", "gaming", "metaverse", "pfp", "utility"]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Collections</h1>
                <p className="text-blur-gray mt-1 text-sm tracking-wide">Discover and explore NFT collections</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-800/30 rounded-lg px-3 py-2 w-64">
                  <Search className="h-4 w-4 text-blur-gray" />
                  <input
                    type="text"
                    placeholder="Search collections..."
                    className="bg-transparent text-sm text-white placeholder-blur-gray outline-none flex-1"
                  />
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-800/30 rounded-lg overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-none ${
                      viewMode === "grid" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-none ${
                      viewMode === "list" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
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

            {/* Category Filters */}
            <div className="flex gap-2 mb-8 overflow-x-auto">
              {categories.map((category) => (
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

        {/* Collections Grid/List */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allCollections.map((collection, index) => (
                  <div
                    key={collection.id}
                    className="bg-gray-900/30 border border-gray-800/30 rounded-xl overflow-hidden hover:border-blur-orange/30 transition-colors group cursor-pointer"
                  >
                    <div className="relative">
                      <NFTThumbnail
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        width={300}
                        height={200}
                        className="w-full h-48"
                      />
                      <div className="absolute top-3 right-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                      {collection.rank > 0 && (
                        <div className="absolute top-3 left-3 bg-blur-orange text-black px-2 py-1 rounded-lg text-xs font-bold">
                          #{collection.rank}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-white">{collection.name}</h3>
                        {collection.verified && (
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
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-blur-gray">Floor</p>
                          <p className="font-medium text-white">{collection.floorPrice} ETH</p>
                        </div>
                        <div>
                          <p className="text-blur-gray">Volume</p>
                          <p className="font-medium text-white">{collection.volume24h || collection.volume1d} ETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-black border border-gray-800/30 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-800/30">
                      <tr className="text-left">
                        <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">Collection</th>
                        <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">Floor Price</th>
                        <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">24h Volume</th>
                        <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">24h Change</th>
                        <th className="px-6 py-4 text-xs text-blur-gray uppercase tracking-wider">Owners</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/10">
                      {allCollections.map((collection, index) => (
                        <tr key={collection.id} className="hover:bg-gray-900/20 transition-colors cursor-pointer">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                              {collection.rank > 0 && (
                                <span className="text-blur-gray text-sm w-4">{collection.rank}</span>
                              )}
                              <div className="w-12 h-12 bg-gray-900 border border-gray-800/30 rounded-lg overflow-hidden">
                                <NFTThumbnail
                                  src={collection.avatar || collection.image || "/placeholder.svg"}
                                  alt={collection.name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full rounded-lg"
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-white font-medium">{collection.name}</span>
                                  {collection.verified && (
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
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1">
                              <span className="text-white font-medium">{collection.floorPrice}</span>
                              <span className="text-blur-orange">Ξ</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1">
                              <span className="text-white font-medium">
                                {collection.volume24h || collection.volume1d}
                              </span>
                              <span className="text-blur-orange">Ξ</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1 text-blur-green">
                              <TrendingUp className="h-3 w-3" />
                              {collection.change1d || collection.change || "+5.2%"}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-blur-gray">
                            {collection.owners} ({collection.ownerPercentage})
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black hover:border-blur-orange rounded-lg"
              >
                Load More Collections
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
