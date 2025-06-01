"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, X, Filter, Grid, List, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Import JSON data
import activityData from "@/data/activity.json"
import collectionsData from "@/data/collections.json"

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

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
                    {collectionsData.map((collection, index) => (
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

      <Footer />
    </div>
  )
}
