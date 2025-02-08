import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    setEmail("")
    alert("Thank you for subscribing!")
  }

  return (
    <section id="newsletter" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Be the First to Know</h2>
          <p className="mb-8 text-xl text-gray-400">
            Join our exclusive waitlist and get early access, special discounts, and updates on our grand opening.
          </p>
          <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full max-w-sm bg-white/5 text-white placeholder-gray-400"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

