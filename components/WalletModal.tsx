"use client"

import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [email, setEmail] = useState("")

  if (!isOpen) return null

  const walletOptions = [
    {
      name: "Brave Güzdan",
      icon: "/placeholder.svg?height=32&width=32",
      installed: true,
      color: "bg-orange-500",
    },
    {
      name: "Brave Wallet",
      icon: "/placeholder.svg?height=32&width=32",
      installed: true,
      color: "bg-orange-500",
    },
    {
      name: "MetaMask",
      icon: "/placeholder.svg?height=32&width=32",
      installed: false,
      color: "bg-orange-500",
    },
    {
      name: "Coinbase Wallet",
      icon: "/placeholder.svg?height=32&width=32",
      installed: false,
      color: "bg-blue-500",
    },
    {
      name: "Abstract",
      icon: "/placeholder.svg?height=32&width=32",
      installed: false,
      color: "bg-green-500",
    },
    {
      name: "WalletConnect",
      icon: "/placeholder.svg?height=32&width=32",
      installed: false,
      color: "bg-blue-400",
    },
  ]

  const handleWalletConnect = (walletName: string) => {
    console.log(`Connecting to ${walletName}...`)
    // Add wallet connection logic here
    onClose()
  }

  const handleEmailContinue = () => {
    if (email) {
      console.log(`Continuing with email: ${email}`)
      // Add email authentication logic here
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800/50 rounded-2xl w-full max-w-md relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Connect Wallet</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white p-2">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Wallet Options */}
        <div className="p-6 space-y-3">
          {walletOptions.map((wallet, index) => (
            <button
              key={index}
              onClick={() => handleWalletConnect(wallet.name)}
              className="w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${wallet.color} rounded-lg flex items-center justify-center`}>
                  <Image
                    src={wallet.icon || "/placeholder.svg"}
                    width={20}
                    height={20}
                    alt={wallet.name}
                    className="rounded"
                  />
                </div>
                <span className="text-white font-medium">{wallet.name}</span>
              </div>
              {wallet.installed && (
                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Installed</span>
              )}
            </button>
          ))}

          {/* More Wallet Options */}
          <button className="w-full flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-white font-medium">More Wallet Options</span>
          </button>
        </div>

        {/* Email Section */}
        <div className="px-6 pb-6">
          <div className="text-center mb-4">
            <span className="text-gray-400 text-sm">or continue with email</span>
          </div>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Continue with email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blur-orange transition-colors"
            />
            <Button
              onClick={handleEmailContinue}
              disabled={!email}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Terms */}
        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-gray-400">
            By connecting your wallet, you agree to our{" "}
            <button className="text-blue-400 hover:text-blue-300 underline">Terms of Service</button> &{" "}
            <button className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</button>.
          </p>
        </div>
      </div>
    </div>
  )
}
