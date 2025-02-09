import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    const respond = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const json = await respond.json();
    toast(json.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Be the First to Know</h2>
          <p className="mb-8 text-xl text-gray-400">
            Join our exclusive waitlist and get early access, special discounts,
            and updates on our grand opening.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center space-x-2"
          >
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </div>
    </section>
  );
}
