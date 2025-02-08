import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-10 text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          name is
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>
        <p className="mx-auto max-w-[600px] text-xl text-gray-400 sm:text-2xl">
          Get ready for a revolutionary shopping experience. Bringing you the latest fashion trends and personalized
          style recommendations.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href="#newsletter">
            Join Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#features">Learn More</a>
        </Button>
      </div>
    </section>
  )
}

