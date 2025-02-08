import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          name
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="#newsletter" className="text-sm text-gray-300 hover:text-white">
            Newsletter
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://instagram.com/name" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://facebook.com/name" target="_blank" rel="noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com/name" target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

