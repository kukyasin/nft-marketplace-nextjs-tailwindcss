"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import WalletModal from "./WalletModal"

export default function Header() {
  const pathname = usePathname()
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <>
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
                  className={`text-sm font-normal transition-colors tracking-wider flex items-center gap-1 ${
                    isActive("/collections")
                      ? "text-blur-orange border-b border-blur-orange pb-4"
                      : "text-gray-300 hover:text-blur-orange"
                  }`}
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
                  className={`text-sm font-normal transition-colors tracking-wider flex items-center gap-1 ${
                    isActive("/trending")
                      ? "text-blur-orange border-b border-blur-orange pb-4"
                      : "text-gray-300 hover:text-blur-orange"
                  }`}
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
                  className={`text-sm font-normal transition-colors tracking-wider flex items-center gap-1 ${
                    isActive("/drops")
                      ? "text-blur-orange border-b border-blur-orange pb-4"
                      : "text-gray-300 hover:text-blur-orange"
                  }`}
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
                  className={`text-sm font-normal transition-colors tracking-wider flex items-center gap-1 ${
                    isActive("/activity")
                      ? "text-blur-orange border-b border-blur-orange pb-4"
                      : "text-gray-300 hover:text-blur-orange"
                  }`}
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
              <Button
                onClick={() => setIsWalletModalOpen(true)}
                className="bg-blur-orange hover:bg-blur-orange/90 text-black font-normal rounded-lg transition-colors tracking-wider"
              >
                CONNECT WALLET
              </Button>
            </div>
          </div>
        </div>
      </header>

      <WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
    </>
  )
}
