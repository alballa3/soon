import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import MouseFollowEffect from "@/components/page/index/mouse-follow-effect"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StyleHub - Coming Soon",
  description: "Get ready for a revolutionary fashion shopping experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <MouseFollowEffect />
        {children}
      </body>
    </html>
  )
}

