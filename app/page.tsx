"use client"

import { Button } from "@/components/ui/button"
import { Search, TrendingUp, TrendingDown, Star, Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [selectedCollection, setSelectedCollection] = useState("bayc")

  const featuredCollections = [
    {
      id: "bayc",
      name: "Bored Ape Yacht Club",
      verified: true,
      floorPrice: "12.5",
      items: "10,000",
      volume: "8,500",
      change: "+2.5%",
      isPositive: true,
      image: "/placeholder.svg?height=400&width=600",
      avatars: [
        "/placeholder.svg?height=60&width=60",
        "/placeholder.svg?height=60&width=60",
        "/placeholder.svg?height=60&width=60",
      ],
    },
    {
      id: "cryptopunks",
      name: "CryptoPunks",
      verified: true,
      floorPrice: "45.2",
      items: "10,000",
      volume: "15,200",
      change: "+5.8%",
      isPositive: true,
      image: "/placeholder.svg?height=400&width=600",
      avatars: [
        "/placeholder.svg?height=60&width=60",
        "/placeholder.svg?height=60&width=60",
        "/placeholder.svg?height=60&width=60",
      ],
    },
    {
      id: "azuki",
      name: "Azuki",
      verified: true,
      floorPrice: "8.9",
      items: "10,000",
      volume: "3,400",
      change: "-1.2%",
      isPositive: false,
      image: "/placeholder.svg?height=400&width=600",
      avatars: [
        "/placeholder.svg?height=60&width=60",
        "/placeholder.svg?height=60&width=60",
        "/placeholder.svg?height=60&width=60",
      ],
    },
  ]

  const trendingCurrencies = [
    {
      name: "Hasuki",
      symbol: "HSK",
      price: "0.0012",
      change: "+12.5%",
      isPositive: true,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "OKX",
      symbol: "OKX",
      price: "45.67",
      change: "+8.3%",
      isPositive: true,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Binance",
      symbol: "BNB",
      price: "312.45",
      change: "-2.1%",
      isPositive: false,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Tory Inu",
      symbol: "TORY",
      price: "0.00034",
      change: "+156.7%",
      isPositive: true,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "LEMON STACK",
      symbol: "LEMON",
      price: "1.23",
      change: "+45.2%",
      isPositive: true,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "98.76",
      change: "+12.8%",
      isPositive: true,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      price: "0.87",
      change: "-5.4%",
      isPositive: false,
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      price: "23.45",
      change: "+7.9%",
      isPositive: true,
      icon: "/placeholder.svg?height=32&width=32",
    },
  ]

  const featuredDrops = [
    { name: "Doodle Punks", price: "0.08", image: "/placeholder.svg?height=200&width=200", status: "Live" },
    { name: "Pixel Legends", price: "0.12", image: "/placeholder.svg?height=200&width=200", status: "Coming Soon" },
    { name: "Cyber Cats", price: "0.05", image: "/placeholder.svg?height=200&width=200", status: "Live" },
    { name: "Space Warriors", price: "0.15", image: "/placeholder.svg?height=200&width=200", status: "Sold Out" },
  ]

  const topMovers = [
    { name: "Otaku Origins", volume: "234.5", change: "+89.2%", image: "/placeholder.svg?height=150&width=150" },
    { name: "Anime Legends", volume: "156.8", change: "+67.4%", image: "/placeholder.svg?height=150&width=150" },
    { name: "Pixel Art Club", volume: "98.3", change: "+45.1%", image: "/placeholder.svg?height=150&width=150" },
    { name: "Crypto Samurai", volume: "87.6", change: "+38.9%", image: "/placeholder.svg?height=150&width=150" },
  ]

  const trendingCollections = [
    { name: "Boki The Ape", floor: "2.34", change: "+12.5%", image: "/placeholder.svg?height=40&width=40" },
    { name: "Doodles", floor: "1.89", change: "+8.7%", image: "/placeholder.svg?height=40&width=40" },
    { name: "Pudgy Penguins", floor: "9.45", change: "+15.2%", image: "/placeholder.svg?height=40&width=40" },
    { name: "Moonbirds", floor: "3.67", change: "+6.8%", image: "/placeholder.svg?height=40&width=40" },
    { name: "CloneX", floor: "5.23", change: "+9.4%", image: "/placeholder.svg?height=40&width=40" },
    { name: "Mutant Ape", floor: "8.91", change: "+11.3%", image: "/placeholder.svg?height=40&width=40" },
  ]

  const weeklyHighlights = [
    { name: "PudgyPenguins", price: "9.45", image: "/placeholder.svg?height=120&width=120", bgColor: "bg-green-500" },
    { name: "Doodles", price: "1.89", image: "/placeholder.svg?height=120&width=120", bgColor: "bg-purple-500" },
    { name: "Moonbirds", price: "3.67", image: "/placeholder.svg?height=120&width=120", bgColor: "bg-red-500" },
    { name: "CloneX", price: "5.23", image: "/placeholder.svg?height=120&width=120", bgColor: "bg-blue-500" },
  ]

  const currentCollection = featuredCollections.find((c) => c.id === selectedCollection) || featuredCollections[0]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800/30 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
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
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider"
                >
                  TRENDING
                </Link>
                <Link
                  href="/drops"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider"
                >
                  DROPS
                </Link>
                <Link
                  href="/stats"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider"
                >
                  STATS
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-900/50 border border-gray-800/30 rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-blur-gray" />
                <input
                  type="text"
                  placeholder="Search collections, items..."
                  className="bg-transparent text-sm text-white placeholder-blur-gray outline-none flex-1"
                />
              </div>
              <Button className="bg-blur-orange hover:bg-blur-orange/90 text-black font-normal rounded-lg transition-colors tracking-wider">
                CONNECT WALLET
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-12">
        {/* Hero Section - Featured Collection */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Featured Collection */}
              <div className="lg:col-span-2">
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800/30 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <Image
                    src={currentCollection.image || "/placeholder.svg"}
                    width={800}
                    height={400}
                    alt={currentCollection.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <h1 className="text-3xl font-bold text-white">{currentCollection.name}</h1>
                      {currentCollection.verified && (
                        <div className="w-6 h-6 bg-blur-orange rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-6">
                      <div>
                        <p className="text-blur-gray text-sm">FLOOR PRICE</p>
                        <p className="text-xl font-bold">{currentCollection.floorPrice} ETH</p>
                      </div>
                      <div>
                        <p className="text-blur-gray text-sm">ITEMS</p>
                        <p className="text-xl font-bold">{currentCollection.items}</p>
                      </div>
                      <div>
                        <p className="text-blur-gray text-sm">VOLUME</p>
                        <p className="text-xl font-bold">{currentCollection.volume} ETH</p>
                      </div>
                      <div>
                        <p className="text-blur-gray text-sm">24H CHANGE</p>
                        <p
                          className={`text-xl font-bold ${currentCollection.isPositive ? "text-blur-green" : "text-blur-red"}`}
                        >
                          {currentCollection.change}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button className="bg-blur-orange hover:bg-blur-orange/90 text-black font-medium rounded-lg">
                        VIEW COLLECTION
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 rounded-lg">
                        <Play className="h-4 w-4 mr-2" />
                        WATCH TRAILER
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collection Selector & Preview */}
              <div className="space-y-6">
                <div className="space-y-3">
                  {featuredCollections.map((collection) => (
                    <div
                      key={collection.id}
                      onClick={() => setSelectedCollection(collection.id)}
                      className={`p-4 border rounded-xl cursor-pointer transition-all ${
                        selectedCollection === collection.id
                          ? "border-blur-orange bg-blur-orange/10"
                          : "border-gray-800/30 hover:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={collection.avatars[0] || "/placeholder.svg"}
                          width={40}
                          height={40}
                          alt={collection.name}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{collection.name}</h3>
                          <p className="text-sm text-blur-gray">{collection.floorPrice} ETH</p>
                        </div>
                        <div
                          className={`text-sm font-medium ${collection.isPositive ? "text-blur-green" : "text-blur-red"}`}
                        >
                          {collection.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Items Preview */}
                <div className="grid grid-cols-3 gap-3">
                  {currentCollection.avatars.map((avatar, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={avatar || "/placeholder.svg"}
                        width={80}
                        height={80}
                        alt={`${currentCollection.name} #${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg border border-gray-800/30"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Featured Collections</h2>
                <p className="text-blur-gray">Hand-picked collections trending right now</p>
              </div>
              <Button
                variant="outline"
                className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black rounded-lg"
              >
                VIEW ALL
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredCollections.map((collection) => (
                <div
                  key={collection.id}
                  className="bg-gray-900/30 border border-gray-800/30 rounded-xl overflow-hidden hover:border-blur-orange/30 transition-colors group"
                >
                  <div className="relative">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      width={400}
                      height={200}
                      alt={collection.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                      >
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
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
                        <p className="text-blur-gray">Floor Price</p>
                        <p className="font-medium text-white">{collection.floorPrice} ETH</p>
                      </div>
                      <div>
                        <p className="text-blur-gray">24h Volume</p>
                        <p className="font-medium text-white">{collection.volume} ETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Currencies */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Trending Currencies</h2>
                <p className="text-blur-gray">Top performing tokens in the last 24h</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {trendingCurrencies.map((currency, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800/30 rounded-xl p-4 hover:border-blur-orange/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={currency.icon || "/placeholder.svg"}
                      width={32}
                      height={32}
                      alt={currency.name}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-white">{currency.name}</h3>
                      <p className="text-sm text-blur-gray">{currency.symbol}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-white">${currency.price}</p>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${currency.isPositive ? "text-blur-green" : "text-blur-red"}`}
                    >
                      {currency.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {currency.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Drops */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Featured Drops</h2>
                <p className="text-blur-gray">Upcoming and live NFT drops you shouldn't miss</p>
              </div>
              <Button
                variant="outline"
                className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black rounded-lg"
              >
                VIEW ALL DROPS
              </Button>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {featuredDrops.map((drop, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800/30 rounded-xl overflow-hidden hover:border-blur-orange/30 transition-colors"
                >
                  <div className="relative">
                    <Image
                      src={drop.image || "/placeholder.svg"}
                      width={200}
                      height={200}
                      alt={drop.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          drop.status === "Live"
                            ? "bg-blur-green text-black"
                            : drop.status === "Coming Soon"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-500 text-white"
                        }`}
                      >
                        {drop.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-2">{drop.name}</h3>
                    <p className="text-blur-gray text-sm mb-3">Mint Price: {drop.price} ETH</p>
                    <Button className="w-full bg-blur-orange hover:bg-blur-orange/90 text-black font-medium rounded-lg">
                      {drop.status === "Live" ? "MINT NOW" : drop.status === "Coming Soon" ? "NOTIFY ME" : "SOLD OUT"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Movers Today */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Top Movers Today</h2>
                <p className="text-blur-gray">Collections with the highest volume increase</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {topMovers.map((mover, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800/30 rounded-xl p-6 hover:border-blur-orange/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={mover.image || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt={mover.name}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="font-bold text-white">{mover.name}</h3>
                      <p className="text-blur-gray text-sm">Volume: {mover.volume} ETH</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blur-green" />
                    <span className="text-blur-green font-medium">{mover.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Collections */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Trending Collections</h2>
                <p className="text-blur-gray">Most popular collections right now</p>
              </div>
              <Link href="/trending">
                <Button
                  variant="outline"
                  className="border-gray-800/30 text-blur-gray hover:bg-blur-orange hover:text-black rounded-lg"
                >
                  VIEW ALL
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {trendingCollections.map((collection, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-900/30 border border-gray-800/30 rounded-xl p-4 hover:border-blur-orange/30 transition-colors"
                >
                  <span className="text-blur-gray font-medium w-6">{index + 1}</span>
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    width={40}
                    height={40}
                    alt={collection.name}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{collection.name}</h3>
                    <p className="text-sm text-blur-gray">Floor: {collection.floor} ETH</p>
                  </div>
                  <div className="text-blur-green text-sm font-medium">{collection.change}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highest Weekly Sales */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Highest Weekly Sales</h2>
                <p className="text-blur-gray">Top performing collections this week</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {weeklyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`${highlight.bgColor} rounded-2xl p-6 relative overflow-hidden group hover:scale-105 transition-transform`}
                >
                  <div className="relative z-10">
                    <h3 className="font-bold text-white mb-2">{highlight.name}</h3>
                    <p className="text-white/80 text-sm mb-4">Floor: {highlight.price} ETH</p>
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-lg">
                      VIEW COLLECTION
                    </Button>
                  </div>
                  <div className="absolute bottom-0 right-0 opacity-20">
                    <Image
                      src={highlight.image || "/placeholder.svg"}
                      width={120}
                      height={120}
                      alt={highlight.name}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blur-orange/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blur-gray mb-8 max-w-2xl mx-auto">
              Get the latest drops, trending collections, and market insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/50 border border-gray-800/30 rounded-lg px-4 py-3 text-white placeholder-blur-gray outline-none focus:border-blur-orange"
              />
              <Button className="bg-blur-orange hover:bg-blur-orange/90 text-black font-medium rounded-lg px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-xl font-bold text-blur-orange tracking-tighter mb-4 block">
                STREAMLINE
              </Link>
              <p className="text-blur-gray text-sm mb-4">The ultimate NFT marketplace for creators and collectors.</p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="text-blur-gray hover:text-blur-orange p-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Button>
                <Button size="sm" variant="ghost" className="text-blur-gray hover:text-blur-orange p-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-blur-gray">
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    All Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Trending
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    New Drops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Top Sellers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-blur-gray">
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Creator Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blur-gray">
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blur-orange transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/30 mt-8 pt-8 text-center text-sm text-blur-gray">
            <p>&copy; {new Date().getFullYear()} STREAMLINE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
