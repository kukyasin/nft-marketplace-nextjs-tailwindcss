"use client"

import { Button } from "@/components/ui/button"
import { Search, ChevronDown, X, Filter, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export default function ActivityPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Sale"])
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["Status"])

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter))
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const toggleExpandFilter = (filter: string) => {
    if (expandedFilters.includes(filter)) {
      setExpandedFilters(expandedFilters.filter((f) => f !== filter))
    } else {
      setExpandedFilters([...expandedFilters, filter])
    }
  }

  const clearFilters = () => {
    setSelectedFilters([])
  }

  const activityData = [
    {
      id: 1,
      event: "Sale",
      item: {
        name: "Synapse Op Quest",
        collection: "Optimism Quests",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.002",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "6d3971",
      to: "e722bb",
      time: "3s ago",
    },
    {
      id: 2,
      event: "Sale",
      item: {
        name: "FRO-9",
        collection: "FARWORLD // Creatures",
        image: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      price: "0.0053",
      currency: "ETH",
      rarity: "#13,089",
      qty: 1,
      from: "e5db5f",
      to: "d2650f",
      time: "3s ago",
    },
    {
      id: 3,
      event: "Sale",
      item: {
        name: "Neon City Nights",
        collection: "Pixel ART",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.0001",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "Thijs226",
      to: "702af3",
      time: "3s ago",
    },
    {
      id: 4,
      event: "Sale",
      item: {
        name: "usagi",
        collection: "usagi",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.0023",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "0xYANGZAI",
      to: "570039",
      time: "3s ago",
    },
    {
      id: 5,
      event: "Sale",
      item: {
        name: "usagi",
        collection: "usagi",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.0023",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "0xYANGZAI",
      to: "163168",
      time: "3s ago",
    },
    {
      id: 6,
      event: "Sale",
      item: {
        name: "Foxeyes",
        collection: "Foxeyes",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.0028",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "borsch737",
      to: "b74641",
      time: "5s ago",
    },
    {
      id: 7,
      event: "Sale",
      item: {
        name: "Doll Fantasy RPG",
        collection: "Doll Fantasy RPG",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "11.50",
      currency: "WRON",
      rarity: "-",
      qty: 1,
      from: "29e5c5",
      to: "17fe98",
      time: "8s ago",
    },
    {
      id: 8,
      event: "Sale",
      item: {
        name: "Doll Fantasy RPG",
        collection: "Doll Fantasy RPG",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "11.50",
      currency: "WRON",
      rarity: "-",
      qty: 1,
      from: "29e5c5",
      to: "17fe98",
      time: "8s ago",
    },
    {
      id: 9,
      event: "Sale",
      item: {
        name: "Doll Fantasy RPG",
        collection: "Doll Fantasy RPG",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "11.50",
      currency: "WRON",
      rarity: "-",
      qty: 1,
      from: "29e5c5",
      to: "17fe98",
      time: "8s ago",
    },
    {
      id: 10,
      event: "Sale",
      item: {
        name: "Glitch Skulls #68",
        collection: "Glitch Skulls by Oxsh",
        image: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      price: "0.0028",
      currency: "ETH",
      rarity: "#276",
      qty: 1,
      from: "b6af29",
      to: "40faf5",
      time: "9s ago",
    },
    {
      id: 11,
      event: "Sale",
      item: {
        name: "Great community",
        collection: "Great community",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.0026",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "5cb54a",
      to: "thinkwai",
      time: "9s ago",
    },
    {
      id: 12,
      event: "Sale",
      item: {
        name: "Chonk #48608",
        collection: "Chonks",
        image: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      price: "0.006",
      currency: "ETH",
      rarity: "#71,782",
      qty: 1,
      from: "5940e0",
      to: "12ea86",
      time: "9s ago",
    },
    {
      id: 13,
      event: "Sale",
      item: {
        name: "Flying Friends",
        collection: "Stippled OP",
        image: "/placeholder.svg?height=40&width=40",
      },
      price: "0.0001",
      currency: "ETH",
      rarity: "-",
      qty: 1,
      from: "POLNFT",
      to: "87f03b",
      time: "9s ago",
    },
    {
      id: 14,
      event: "Sale",
      item: {
        name: "#8975 Four-Prong Spear",
        collection: "OCH GACHA WEAPON",
        image: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      price: "0.0089",
      currency: "ETH",
      rarity: "#8,012",
      qty: 1,
      from: "4ac5c3",
      to: "4f786d",
      time: "11s ago",
    },
    {
      id: 15,
      event: "Sale",
      item: {
        name: "#25866559939266695265558860024...",
        collection: "Courtyard.io",
        image: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      price: "7.26",
      currency: "USDC",
      rarity: "-",
      qty: 1,
      from: "e4ff1f",
      to: "66dbff",
      time: "15s ago",
    },
  ]

  const collections = [
    { name: "CryptoPunks", verified: true },
    { name: "Courtyard.io", verified: true },
    { name: "Moonbirds", verified: true },
    { name: "Bored Ape Yacht Club", verified: true },
    { name: "OCH GACHA WEAPON", verified: true },
    { name: "Pudgy Penguins", verified: true },
    { name: "Milady Maker", verified: true },
    { name: "Good Vibes Club", verified: true },
    { name: "Doodles", verified: true },
    { name: "Kaiju Genesis", verified: true },
    { name: "Mutant Ape Yacht Club", verified: true },
    { name: "Genesis Hero", verified: true },
    { name: "Otherdeed Koda", verified: true },
    { name: "Lil Pudgys", verified: true },
    { name: "Azuki", verified: true },
    { name: "Doll Fantasy RPG", verified: false },
    { name: "Otherhood Expanded", verified: true },
    { name: "HI GEMS", verified: false },
    { name: "Final Boss", verified: true },
  ]

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
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider flex items-center gap-1"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3 6C3 4.34315 4.34315 3 6 3H8C9.65685 3 11 4.34315 11 6V8C11 9.65685 9.65685 11 8 11H6C4.34315 11 3 9.65685 3 8V6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M13 6C13 4.34315 14.3431 3 16 3H18C19.6569 3 21 4.34315 21 6V8C21 9.65685 19.6569 11 18 11H16C14.3431 11 13 9.65685 13 8V6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 16C3 14.3431 4.34315 13 6 13H8C9.65685 13 11 14.3431 11 16V18C11 19.6569 9.65685 21 8 21H6C4.34315 21 3 19.6569 3 18V16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M13 16C13 14.3431 14.3431 13 16 13H18C19.6569 13 21 14.3431 21 16V18C21 19.6569 19.6569 21 18 21H16C14.3431 21 13 19.6569 13 18V16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  COLLECTIONS
                </Link>
                <Link
                  href="/trending"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider flex items-center gap-1"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7 13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19V13Z"
                      fill="currentColor"
                    />
                  </svg>
                  TRENDING
                </Link>
                <Link
                  href="/drops"
                  className="text-sm font-normal text-gray-300 hover:text-blur-orange transition-colors tracking-wider flex items-center gap-1"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3C12.5523 3 13 3.44772 13 4V10.5858L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L12.7071 13.7071C12.3166 14.0976 11.6834 14.0976 11.2929 13.7071L7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289L11 10.5858V4C11 3.44772 11.4477 3 12 3ZM5 16C5 15.4477 5.44772 15 6 15H18C18.5523 15 19 15.4477 19 16V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V16Z"
                      fill="currentColor"
                    />
                  </svg>
                  DROPS
                </Link>
                <Link
                  href="/activity"
                  className="text-sm font-normal text-blur-orange border-b border-blur-orange pb-4 tracking-wider flex items-center gap-1"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 10C8.55228 10 9 10.4477 9 11V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V11C7 10.4477 7.44772 10 8 10Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 7C12.5523 7 13 7.44772 13 8V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V8C11 7.44772 11.4477 7 12 7Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 13C16.5523 13 17 13.4477 17 14V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V14C15 13.4477 15.4477 13 16 13Z"
                      fill="currentColor"
                    />
                  </svg>
                  ACTIVITY
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

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 space-y-4">
            {/* Status Filter */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpandFilter("Status")}
              >
                <h3 className="font-medium text-white">Status</h3>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedFilters.includes("Status") ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {expandedFilters.includes("Status") && (
                <div className="p-4 pt-0 border-t border-gray-800/30 space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="all"
                      checked={selectedFilters.includes("All")}
                      onCheckedChange={() => toggleFilter("All")}
                    />
                    <label htmlFor="all" className="text-sm text-gray-300 cursor-pointer">
                      All
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="sale"
                      checked={selectedFilters.includes("Sale")}
                      onCheckedChange={() => toggleFilter("Sale")}
                    />
                    <label htmlFor="sale" className="text-sm text-gray-300 cursor-pointer">
                      Sale
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="mint"
                      checked={selectedFilters.includes("Mint")}
                      onCheckedChange={() => toggleFilter("Mint")}
                    />
                    <label htmlFor="mint" className="text-sm text-gray-300 cursor-pointer">
                      Mint
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="transfer"
                      checked={selectedFilters.includes("Transfer")}
                      onCheckedChange={() => toggleFilter("Transfer")}
                    />
                    <label htmlFor="transfer" className="text-sm text-gray-300 cursor-pointer">
                      Transfer
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Listing Type Filter */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpandFilter("ListingType")}
              >
                <h3 className="font-medium text-white">Listing Type</h3>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedFilters.includes("ListingType") ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {expandedFilters.includes("ListingType") && (
                <div className="p-4 pt-0 border-t border-gray-800/30 space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="listing"
                      checked={selectedFilters.includes("Listing")}
                      onCheckedChange={() => toggleFilter("Listing")}
                    />
                    <label htmlFor="listing" className="text-sm text-gray-300 cursor-pointer">
                      Listing
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="item-offer"
                      checked={selectedFilters.includes("Item Offer")}
                      onCheckedChange={() => toggleFilter("Item Offer")}
                    />
                    <label htmlFor="item-offer" className="text-sm text-gray-300 cursor-pointer">
                      Item Offer
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="collection-offer"
                      checked={selectedFilters.includes("Collection Offer")}
                      onCheckedChange={() => toggleFilter("Collection Offer")}
                    />
                    <label htmlFor="collection-offer" className="text-sm text-gray-300 cursor-pointer">
                      Collection Offer
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="trait-offer"
                      checked={selectedFilters.includes("Trait Offer")}
                      onCheckedChange={() => toggleFilter("Trait Offer")}
                    />
                    <label htmlFor="trait-offer" className="text-sm text-gray-300 cursor-pointer">
                      Trait Offer
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpandFilter("Price")}
              >
                <h3 className="font-medium text-white">Price</h3>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedFilters.includes("Price") ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Marketplaces Filter */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpandFilter("Marketplaces")}
              >
                <h3 className="font-medium text-white">Marketplaces</h3>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedFilters.includes("Marketplaces") ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Chains Filter */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpandFilter("Chains")}
              >
                <h3 className="font-medium text-white">Chains</h3>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedFilters.includes("Chains") ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Collections Filter */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpandFilter("Collections")}
              >
                <h3 className="font-medium text-white">Collections</h3>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    expandedFilters.includes("Collections") ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {expandedFilters.includes("Collections") && (
                <div className="p-4 pt-0 border-t border-gray-800/30">
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for collections"
                      className="w-full bg-gray-900/50 border border-gray-800/30 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 outline-none"
                    />
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                    {collections.map((collection, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Checkbox
                          id={`collection-${index}`}
                          checked={selectedFilters.includes(collection.name)}
                          onCheckedChange={() => toggleFilter(collection.name)}
                        />
                        <label
                          htmlFor={`collection-${index}`}
                          className="text-sm text-gray-300 cursor-pointer flex items-center gap-1"
                        >
                          {collection.name}
                          {collection.verified && (
                            <div className="w-3 h-3 bg-blur-orange rounded-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Activity Content */}
          <div className="flex-1">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {selectedFilters.length > 0 && (
                  <>
                    <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-800/30 rounded-lg px-3 py-1.5">
                      <span className="text-sm text-gray-300">{selectedFilters[0]}</span>
                      <X
                        className="h-3 w-3 text-gray-400 cursor-pointer"
                        onClick={() => toggleFilter(selectedFilters[0])}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white text-xs"
                      onClick={clearFilters}
                    >
                      Clear
                    </Button>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-800/30 text-gray-300 hover:text-white rounded-lg"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <div className="flex border border-gray-800/30 rounded-lg overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-none ${
                      viewMode === "list" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-none ${
                      viewMode === "grid" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Activity Table */}
            <div className="border border-gray-800/30 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/30 border-b border-gray-800/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Item
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Rarity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Qty
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        From
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/30">
                    {activityData.map((activity) => (
                      <tr key={activity.id} className="hover:bg-gray-900/20 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-6 w-6 bg-gray-800/50 rounded flex items-center justify-center">
                              <svg
                                className="h-3 w-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-gray-300">{activity.event}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-800/50 rounded-lg overflow-hidden">
                              <Image
                                src={activity.item.image || "/placeholder.svg"}
                                width={40}
                                height={40}
                                alt={activity.item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">{activity.item.name}</p>
                              <div className="flex items-center gap-1">
                                <p className="text-xs text-gray-400">{activity.item.collection}</p>
                                {activity.item.verified && (
                                  <div className="w-3 h-3 bg-blur-orange rounded-full flex items-center justify-center">
                                    <svg className="w-1.5 h-1.5 text-black" fill="currentColor" viewBox="0 0 20 20">
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
                            <span className="text-sm font-medium text-white">{activity.price}</span>
                            <span className="text-xs text-gray-400">{activity.currency}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{activity.rarity}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{activity.qty}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{activity.from}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{activity.to}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{activity.time}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-800/30 text-gray-300 hover:text-white rounded-lg"
                >
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="border-gray-800/30 bg-gray-800 text-white rounded-lg">
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-800/30 text-gray-300 hover:text-white rounded-lg"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-800/30 text-gray-300 hover:text-white rounded-lg"
                >
                  3
                </Button>
                <span className="text-gray-400">...</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-800/30 text-gray-300 hover:text-white rounded-lg"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 bg-black py-8 mt-12">
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
                Activity
              </Link>
              <Link href="#" className="text-sm text-blur-gray hover:text-blur-orange transition-colors">
                Stats
              </Link>
            </div>
            <div className="text-sm text-blur-gray">&copy; {new Date().getFullYear()} STREAMLINE</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
