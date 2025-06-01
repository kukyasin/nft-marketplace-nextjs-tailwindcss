"use client"

import { Button } from "@/components/ui/button"
import { Search, TrendingUp, Users, Zap, BarChart3, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const collections = [
    {
      id: "moonbirds",
      name: "Moonbirds",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "0.66",
      topBid: "0.62",
      change1d: "+21.10%",
      change7d: "+105.57%",
      change15m: "1.28",
      volume1d: "184.64",
      volume7d: "389.02",
      owners: "5802",
      ownerPercentage: "59%",
      supply: "9999",
      isPositive1d: true,
      isPositive7d: true,
    },
    {
      id: "milady",
      name: "Milady",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "2.59",
      topBid: "2.50",
      change1d: "-6.00%",
      change7d: "-11.86%",
      change15m: "-",
      volume1d: "91.64",
      volume7d: "353.30",
      owners: "5401",
      ownerPercentage: "54%",
      supply: "9976",
      isPositive1d: false,
      isPositive7d: false,
    },
    {
      id: "pudgypenguins",
      name: "PudgyPenguins",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "9.38",
      topBid: "9.16",
      change1d: "-0.11%",
      change7d: "-2.10%",
      change15m: "-",
      volume1d: "91.64",
      volume7d: "636.30",
      owners: "5128",
      ownerPercentage: "50%",
      supply: "8888",
      isPositive1d: false,
      isPositive7d: false,
    },
    {
      id: "doodles",
      name: "Doodles",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "1.06",
      topBid: "1.05",
      change1d: "+1.52%",
      change7d: "-7.47%",
      change15m: "1.08",
      volume1d: "75.39",
      volume7d: "416.10",
      owners: "4109",
      ownerPercentage: "41%",
      supply: "9998",
      isPositive1d: true,
      isPositive7d: false,
    },
    {
      id: "boredape",
      name: "BoredApeYachtClub",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "13.41",
      topBid: "12.72",
      change1d: "-0.29%",
      change7d: "+2.76%",
      change15m: "-",
      volume1d: "72.56",
      volume7d: "787.06",
      owners: "5594",
      ownerPercentage: "56%",
      supply: "9998",
      isPositive1d: false,
      isPositive7d: true,
    },
    {
      id: "azuki",
      name: "Azuki",
      avatar: "/placeholder.svg?height=40&width=40",
      floorPrice: "2.19",
      topBid: "2.11",
      change1d: "-2.88%",
      change7d: "-7.59%",
      change15m: "-",
      volume1d: "28.74",
      volume7d: "190.32",
      owners: "4250",
      ownerPercentage: "43%",
      supply: "10000",
      isPositive1d: false,
      isPositive7d: false,
    },
  ]

  const cartItems = [
    { id: "9055", price: "9.75", image: "/placeholder.svg?height=60&width=60" },
    { id: "1242", price: "10.24", image: "/placeholder.svg?height=60&width=60" },
    { id: "6913", price: "10.24", image: "/placeholder.svg?height=60&width=60" },
    { id: "4009", price: "10.25", image: "/placeholder.svg?height=60&width=60" },
  ]

  const liveActivity = [
    { time: "1s", action: "BUY NOW", price: "11.21", buyer: "878a0b" },
    { time: "2s", action: "BUY NOW", price: "14.49", buyer: "878a0b" },
    { time: "2m", action: "BUY FOR", price: "12.21", buyer: "878a0b" },
    { time: "7m", action: "BUY FOR", price: "10.24", buyer: "878a0b" },
    { time: "9m", action: "BUY FOR", price: "25.0", buyer: "marcop" },
  ]

  const testimonials = [
    {
      username: "@DEBUSSY100",
      handle: "Debussy.eth",
      content:
        "Just had a demo of @blur_io with @PacmanBlur ...Holy moly, this platform will put the others to shame. This is the future of NFT trading. I'm very very impressed with it.",
      time: "8:01 PM · Aug 21, 2022",
    },
    {
      username: "@FNCYI",
      handle: "Fancy",
      content: "@blur_io is actually godly to use. Sniping before it even hits NFTnerds and gem",
      time: "12:58 PM · Jul 9, 2022",
    },
  ]

  const totalCartValue = cartItems.reduce((sum, item) => sum + Number.parseFloat(item.price), 0)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                STREAMLINE
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/collections"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  COLLECTIONS
                </Link>
                <Link href="/trending" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  TRENDING
                </Link>
                <Link
                  href="/portfolio"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  PORTFOLIO
                </Link>
                <Link href="/activity" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  ACTIVITY
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="collections, wallets, or ENS"
                  className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
                />
                <span className="text-xs text-gray-500">⌘K</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium">
                <ShoppingCart className="h-4 w-4 mr-2" />
                CONNECT WALLET
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-sm font-medium text-gray-400 tracking-wider">StreamLine Pro</h2>
                  <p className="text-sm text-gray-500">BY STREAMLINE LABS</p>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold text-white leading-none">
                  STREAM
                  <span className="block text-orange-500">LINE</span>
                </h1>

                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-sm text-gray-400">FLOOR PRICE</p>
                    <p className="text-2xl font-bold">$12</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">MONTHLY VOLUME</p>
                    <p className="text-2xl font-bold">1.2K</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700">
                    VIEW FEATURES →
                  </Button>
                  <Link href="/trending">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium">
                      VIEW TRENDING →
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="StreamLine Dashboard"
                  className="relative z-10 rounded-2xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-black rounded-lg border border-gray-800 p-6 text-center">
                <BarChart3 className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-sm text-gray-400">Total Collections</p>
              </div>
              <div className="bg-black rounded-lg border border-gray-800 p-6 text-center">
                <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <p className="text-2xl font-bold">15.2K</p>
                <p className="text-sm text-gray-400">Daily Volume</p>
              </div>
              <div className="bg-black rounded-lg border border-gray-800 p-6 text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <p className="text-2xl font-bold">89.3K</p>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div className="bg-black rounded-lg border border-gray-800 p-6 text-center">
                <Zap className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <p className="text-2xl font-bold">234K</p>
                <p className="text-sm text-gray-400">Total Trades</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-orange-500">streamline</span> your workflow?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of teams that have transformed their productivity with StreamLine's powerful automation
              tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium">Get Started Free</Button>
              <Link href="/trending">
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Explore Trending
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-orange-500">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm font-medium">COLLECTIONS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">TRENDING</span>
                </div>
                {/* <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">FAVORITES</span>
                </div> */}
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">POINTS</span>
                </div>
              </div>
              {/* <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "text-orange-500" : "text-gray-400"}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "text-orange-500" : "text-gray-400"}
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Main Content */}
        {/* <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-6"> */}
        {/* Collections Table */}
        {/* <div className="lg:col-span-3">
                <div className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-gray-800">
                        <tr className="text-left">
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            FLOOR PRICE
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            FLOOR PRICE
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            TOP BID
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            1D CHANGE
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            7D CHANGE
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            15M VOLUME
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            1D VOLUME ↓
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            7D VOLUME
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            OWNERS
                          </th>
                          <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                            SUPPLY
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {collections.map((collection, index) => (
                          <tr key={collection.id} className="hover:bg-gray-900/50 transition-colors">
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                                  <Image
                                    src={collection.avatar || "/placeholder.svg"}
                                    width={32}
                                    height={32}
                                    alt={collection.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="font-medium text-sm">{collection.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{collection.floorPrice}</span>
                                <span className="text-orange-500">Ξ</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{collection.topBid}</span>
                                <span className="text-orange-500">Ξ</span>
                              </div>
                            </td>
                            <td
                              className={`px-4 py-4 font-medium ${collection.isPositive1d ? "text-green-400" : "text-red-400"}`}
                            >
                              {collection.change1d}
                            </td>
                            <td
                              className={`px-4 py-4 font-medium ${collection.isPositive7d ? "text-green-400" : "text-red-400"}`}
                            >
                              {collection.change7d}
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{collection.change15m}</span>
                                {collection.change15m !== "-" && <span className="text-orange-500">Ξ</span>}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{collection.volume1d}</span>
                                <span className="text-orange-500">Ξ</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{collection.volume7d}</span>
                                <span className="text-orange-500">Ξ</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-gray-400">
                              {collection.owners} ({collection.ownerPercentage})
                            </td>
                            <td className="px-4 py-4 text-gray-400">{collection.supply}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}

        {/* Shopping Cart */}
        {/* <div className="lg:col-span-1">
                <div className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                  <h3 className="text-lg font-bold mb-4 text-orange-500">SWEEP ACROSS MULTIPLE MARKETPLACES</h3>

                  <div className="space-y-3 mb-4">
                    {cartItems.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-900 rounded">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <Image
                          src={item.image || "/placeholder.svg"}
                          width={40}
                          height={40}
                          alt={`Item ${item.id}`}
                          className="rounded"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">#{item.id}</p>
                          <p className="text-xs text-gray-400">8893</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{item.price} Ξ</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">SKIP PENDING</span>
                      <Zap className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">1</span>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-medium">
                      BUY 4 ITEMS Ξ{totalCartValue.toFixed(2)}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Live Activity & Testimonials */}
        {/* <section className="py-12 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8"> */}
        {/* Live Activity */}
        {/* <div>
                <h3 className="text-xl font-bold mb-6 text-orange-500">SNIPE REVEALS FASTER THAN ANYWHERE ELSE</h3>

                <div className="bg-black rounded-lg border border-gray-800 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">LIVE ACTIVITY</span>
                  </div>

                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-4 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-800 pb-2">
                      <span>ITEM STATUS</span>
                      <span>PRICE</span>
                      <span>BUYER</span>
                      <span></span>
                    </div>

                    {liveActivity.map((activity, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 text-sm py-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{activity.time}</span>
                          <span className="text-xs bg-green-600 px-2 py-1 rounded">{activity.action}</span>
                        </div>
                        <span className="font-medium">{activity.price} Ξ</span>
                        <span className="text-gray-400">{activity.buyer}</span>
                        <div className="flex gap-1">
                          <Check className="h-4 w-4 text-green-400" />
                          <X className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        32 BIDS
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" />
                        383 PRIORITY 50 / MAX FEE 50
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                      50
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                      100
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                      150
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      +10
                    </Button>
                  </div>
                </div>
              </div> */}

        {/* Testimonials */}
        {/* <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-black rounded-lg border border-orange-500 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                      <div>
                        <p className="font-bold text-orange-500">{testimonial.username}</p>
                        <p className="text-sm text-gray-400">{testimonial.handle}</p>
                      </div>
                      <div className="ml-auto">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white mb-4">{testimonial.content}</p>
                    <p className="text-sm text-gray-400">{testimonial.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-xl font-bold text-orange-500 mb-4 block">
                STREAMLINE
              </Link>
              <p className="text-gray-400 text-sm">The ultimate productivity platform for modern teams.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Activity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
