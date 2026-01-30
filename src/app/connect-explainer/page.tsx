"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Store,
  Shield,
  ArrowRight,
} from "lucide-react";

// Relay API URL - Hardcoded to feature branch for testing as requested
// Default: seekereats-relay-festsquare.up.railway.app
const RELAY_API_URL =
  process.env.NEXT_PUBLIC_RELAY_API_URL ||
  "https://seekereats-relay-festsquare.up.railway.app";

export default function ConnectExplainerPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConnect() {
    setLoading(true);
    setError(null);

    try {
      const successUrl = `${window.location.origin}/connect-success`;
      const response = await fetch(
        `${RELAY_API_URL}/api/oauth/start?sandbox=false&redirect_url=${encodeURIComponent(successUrl)}`,
      );

      const data = await response.json();

      if (data.success && data.data.authUrl) {
        window.location.href = data.data.authUrl;
      } else {
        throw new Error(data.error || "Failed to start connection");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Connection failed. Please try again.",
      );
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-seeker-gold selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/80 backdrop-blur-xl border-b-2 border-seeker-gold/30">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden border-2 border-seeker-gold"
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <Image
              src="/Gemini_Generated_Image_8ni2l88ni2l88ni2.png"
              alt="Seeker Eats"
              fill
              className="object-cover"
            />
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-seeker-gold transition-colors">
            SEEKER EATS
          </span>
        </Link>
      </header>

      <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// RESTAURANT CONNECT"}</span>
                <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tighter">
                  Connect Your <br />
                  <span className="text-seeker-gold">Restaurant</span>
                </h1>
                <p className="text-xl text-white/80">
                  Link your Square account and start receiving orders in minutes.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-seeker-gold/20 border-2 border-seeker-gold flex items-center justify-center font-bold text-xl text-seeker-gold group-hover:bg-seeker-gold group-hover:text-black transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Click Connect</h3>
                    <p className="text-white/70 text-sm">
                      Login directly with Square (we can&apos;t access your Square account)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-seeker-gold/20 border-2 border-seeker-gold flex items-center justify-center font-bold text-xl text-seeker-gold group-hover:bg-seeker-gold group-hover:text-black transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Approve Access</h3>
                    <p className="text-white/70 text-sm">
                      Grant menu & order permissions. Revoke anytime.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-seeker-gold/20 border-2 border-seeker-gold flex items-center justify-center font-bold text-xl text-seeker-gold group-hover:bg-seeker-gold group-hover:text-black transition-colors">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Start Receiving Orders</h3>
                    <p className="text-white/70 text-sm">
                      Get instant USDC payments for every order
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Access Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* What we access */}
                <div className="bg-seeker-gold/10 border-2 border-seeker-gold/30 p-6">
                  <h3 className="text-seeker-gold font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> What we access
                  </h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-seeker-gold mt-2" />
                      Menu items & prices
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-seeker-gold mt-2" />
                      Create and pay for orders
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-seeker-gold mt-2" />
                      Business info only
                    </li>
                  </ul>
                </div>

                {/* What we DONT access */}
                <div className="bg-white/5 border-2 border-white/10 p-6">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-seeker-red" /> What we DON&apos;T access
                  </h3>
                  <ul className="space-y-3 text-sm text-white/70">
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-seeker-red mt-2" />
                      Bank accounts
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-seeker-red mt-2" />
                      Customer data
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-seeker-red mt-2" />
                      Employee info
                    </li>
                  </ul>
                </div>
              </div>

              {/* Big CTA */}
              <div className="pt-4">
                <button
                  onClick={handleConnect}
                  disabled={loading}
                  className="w-full md:w-auto px-10 py-5 text-xl font-bold text-black bg-seeker-gold border-2 border-seeker-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-black border-t-transparent animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Store className="w-6 h-6" />
                      Connect with Square
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
                {error && (
                  <p className="mt-4 text-seeker-red bg-seeker-red/10 border border-seeker-red/30 p-3 text-sm inline-block">
                    {error}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Right Column: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              {/* Abstract decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-seeker-gold/5 blur-3xl" />
              <div className="relative bg-black/50 backdrop-blur-xl border-2 border-seeker-gold/30 p-12 max-w-md w-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-seeker-gold border-2 border-seeker-gold flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <Store className="w-12 h-12 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      Zero Setup Cost
                    </h3>
                    <p className="text-white/70">
                      Use your existing Square POS. No new hardware required.
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-white/60">Setup Time</span>
                    <span className="text-seeker-gold font-bold font-mono">
                      ~2 Minutes
                    </span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-white/60">Cost</span>
                    <span className="text-seeker-gold font-bold font-mono">FREE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
