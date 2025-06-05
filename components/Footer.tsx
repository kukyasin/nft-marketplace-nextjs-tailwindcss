import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/30 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-blur-orange tracking-tighter mb-4 block">
              NFTLIFY
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
                <Link href="/collections" className="hover:text-blur-orange transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/trending" className="hover:text-blur-orange transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/drops" className="hover:text-blur-orange transition-colors">
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
          <p>&copy; {new Date().getFullYear()} NFTLIFY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
