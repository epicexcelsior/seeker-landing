"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Check, Github, Twitter } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RELAY_API_URL || "http://localhost:3000"}/waitlist/join`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        const data = await res.json();
        if (res.status === 200 && data.message === "Already on waitlist") {
          setSubmitted(true);
        } else {
          setError(data.message || "Something went wrong");
        }
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-seeker-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-seeker-gold/50 bg-black/80 backdrop-blur-sm p-8 md:p-16 relative"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-seeker-gold" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-seeker-gold" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-seeker-gold" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-seeker-gold" />

            <div className="text-center mb-12">
              <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// JOIN THE MOVEMENT"}</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                Be part of the
                <br />
                <span className="text-seeker-gold">revolution.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Get early access, investor updates, and exclusive opportunities.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/5 border-2 border-r-0 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-seeker-gold/50 font-mono"
                  />
                  <button
                    disabled={loading}
                    type="submit"
                    className="px-6 py-4 bg-seeker-gold text-black font-bold border-2 border-seeker-gold hover:bg-seeker-gold/90 disabled:opacity-50 transition-colors"
                    data-hover="true"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-seeker-red mt-3 text-sm font-mono">{error}</p>
                )}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto border-2 border-seeker-gold/30 bg-seeker-gold/10 p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-seeker-gold/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-seeker-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">You&apos;re on the list.</h3>
                  <p className="text-gray-400 text-sm">We&apos;ll be in touch soon.</p>
                </div>
              </motion.div>
            )}

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
              <SocialLink
                href="https://x.com/SeekerEats"
                icon={Twitter}
                label="Follow on X"
              />
              <SocialLink
                href="https://github.com/obamna1/seekereats-relay"
                icon={Github}
                label="View Code"
              />
              <SocialLink
                href="https://devpost.com/software/seekereats"
                icon={Sparkles}
                label="MBC Hackathon"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 p-6 border border-white/10 bg-white/5 hover:border-seeker-gold/50 hover:bg-seeker-gold/5 transition-all duration-300"
      data-hover="true"
    >
      <div className="w-10 h-10 bg-white/5 group-hover:bg-seeker-gold/20 flex items-center justify-center transition-colors">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-seeker-gold" />
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white">{label}</span>
    </a>
  );
}
