import MouseFollowEffect from "@/components/page/index/mouse-follow-effect"
import "../styles/globals.css"
import { Inter } from "next/font/google"

import React from "react" // Added import for React
import { AppProps } from "next/app"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StyleHub - Coming Soon",
  description: "Get ready for a revolutionary fashion shopping experience.",
}
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${inter.className} bg-black text-white antialiased`}>
      <MouseFollowEffect />
      <Component {...pageProps} />
    </div>
  )
}
export default App