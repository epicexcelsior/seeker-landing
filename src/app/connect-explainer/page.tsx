"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Store,
  Zap,
  Shield,
  ArrowRight,
  XCircle,
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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-white hover:text-seeker-gold transition-colors"
        >
          ← Seeker Eats
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
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  Connect Your <br />
                  <span className="text-seeker-gold">Restaurant</span>
                </h1>
                <p className="text-xl text-gray-400">
                  Join the crypto-native food delivery revolution.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xl text-seeker-gold group-hover:bg-seeker-gold group-hover:text-black transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Click Connect</h3>
                    <p className="text-gray-400 text-sm">
                      Login directly with Square (we can't access your Square
                      account)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xl text-seeker-gold group-hover:bg-seeker-gold group-hover:text-black transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Approve Access</h3>
                    <p className="text-gray-400 text-sm">
                      Grant menu & order permissions. You can revoke this at any
                      time.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xl text-seeker-gold group-hover:bg-seeker-gold group-hover:text-black transition-colors">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Go Live!</h3>
                    <p className="text-gray-400 text-sm">
                      Start receiving crypto orders
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Access Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* What we access */}
                <div className="bg-green-500/5 rounded-2xl p-6 border border-green-500/20">
                  <h3 className="text-green-500 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> What we access
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                      Menu items & prices
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                      Create and pay for orders
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                      Common business info
                    </li>
                  </ul>
                </div>

                {/* What we DONT access */}
                <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-red-500 font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" /> What we DON'T access
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      Bank accounts
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      Customer lists
                    </li>
                    <li className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      Employee data
                    </li>
                  </ul>
                </div>
              </div>

              {/* Big CTA */}
              <div className="pt-4">
                <button
                  onClick={handleConnect}
                  disabled={loading}
                  className="w-full md:w-auto px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-seeker-gold to-seeker-gold-light rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>Connecting...</>
                  ) : (
                    <>
                      Connect with Square <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
                {error && (
                  <p className="mt-4 text-red-500 bg-red-500/10 p-3 rounded-lg text-sm inline-block">
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-seeker-gold/5 rounded-full blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl max-w-md w-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-seeker-gold rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <Store className="w-12 h-12 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Partner with Seeker
                    </h3>
                    <p className="text-gray-400">
                      Integration allows us to send orders directly to your POS
                      system without extra hardware.
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-gray-500">Setup Time</span>
                    <span className="text-seeker-gold font-bold">
                      ~2 Minutes
                    </span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-gray-500">Cost</span>
                    <span className="text-seeker-gold font-bold">$0.00</span>
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
