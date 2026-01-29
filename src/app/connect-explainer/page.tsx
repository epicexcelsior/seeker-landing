"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Store, Zap, Shield, ArrowRight } from "lucide-react";

// Relay API URL from environment variable (set in Vercel/deployment)
// Fallback to production relay if not set
const RELAY_API_URL =
  process.env.NEXT_PUBLIC_RELAY_API_URL ||
  "https://seekereats-relay-backend-production.up.railway.app";

export default function ConnectExplainerPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConnect() {
    setLoading(true);
    setError(null);

    try {
      // Get current origin for redirect URL
      const successUrl = `${window.location.origin}/connect-success`;

      // Request OAuth URL from relay (production mode only)
      const response = await fetch(
        `${RELAY_API_URL}/api/oauth/start?sandbox=false&redirect_url=${encodeURIComponent(successUrl)}`,
      );

      const data = await response.json();

      if (data.success && data.data.authUrl) {
        // Redirect to Square OAuth
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
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-white hover:text-seeker-gold transition-colors"
        >
          ← Seeker Eats
        </Link>
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connect Your <span className="text-seeker-gold">Restaurant</span>
            </h1>
            <p className="text-xl text-gray-400">
              Join Seeker Eats in 3 simple steps. It takes less than 2 minutes.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            {/* Step 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-seeker-gold/20 flex items-center justify-center flex-shrink-0">
                  <Store className="w-5 h-5 text-seeker-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Step 1: Click Connect
                  </h3>
                  <p className="text-gray-400">
                    Click the button below. You'll be taken to Square's secure
                    login page.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-seeker-gold/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-seeker-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Step 2: Log In & Authorize
                  </h3>
                  <p className="text-gray-400">
                    Sign in to your Square account and click "Allow" to let
                    Seeker Eats access your menu and process orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-seeker-gold/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-seeker-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Step 3: You're Done!
                  </h3>
                  <p className="text-gray-400">
                    That's it! You'll be redirected back here and your
                    restaurant will be live on Seeker Eats.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-seeker-gold/10 rounded-2xl p-6 border border-seeker-gold/20 mb-12"
          >
            <h3 className="text-lg font-semibold mb-4 text-seeker-gold">
              What we access:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                Your menu items and prices
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                Ability to create orders on your behalf
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                Basic business info (name, location)
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              We never access your financial data, customer lists, or employee
              information.
            </p>
          </motion.div>

          {/* Connect Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={handleConnect}
              disabled={loading}
              className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-seeker-gold to-seeker-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  Connect with Square
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </button>

            {error && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                {error}
              </div>
            )}

            <p className="text-sm text-gray-500 mt-6">
              By connecting, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
