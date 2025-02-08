import Navbar from "@/components/page/index/navbar"
import Hero from "@/components/page/index/hero"
import Features from "@/components/page/index/features"
import Newsletter from "@/components/page/index/newsletter"
import Footer from "@/components/page/index/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}

