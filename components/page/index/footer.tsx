import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">[name]</h2>
            <p className="text-sm text-gray-400">Redefining online fashion shopping.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="https://instagram.com/name" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://facebook.com/name" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com/name" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} name, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

