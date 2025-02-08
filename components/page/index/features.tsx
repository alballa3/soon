import { ShoppingBag, Zap, Heart, Sparkles } from "lucide-react"

const features = [
  {
    name: "Curated Collections",
    description: "Handpicked items from top designers and emerging brands.",
    icon: ShoppingBag,
  },
  {
    name: "Fast Shipping",
    description: "Get your favorite styles delivered to your doorstep in no time.",
    icon: Zap,
  },
  {
    name: "Personalized Recommendations",
    description: "Discover new styles tailored to your unique taste and preferences.",
    icon: Heart,
  },
  {
    name: "Exclusive Deals",
    description: "Enjoy special discounts and early access to new collections.",
    icon: Sparkles,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold">What to Expect</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <feature.icon className="mb-4 h-10 w-10 text-blue-500" />
              <h3 className="mb-2 text-xl font-semibold">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

