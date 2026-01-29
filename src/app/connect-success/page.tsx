"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  PartyPopper,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const merchantId = searchParams.get("merchant_id");
  const error = searchParams.get("oauth_error");

  if (error) {
    return (
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-500/20 flex items-center justify-center">
              <span className="text-4xl">❌</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connection Failed
            </h1>
            <p className="text-xl text-gray-400 mb-8">{error}</p>
            <Link
              href="/connect-explainer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-seeker-gold to-seeker-gold-light rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              Try Again
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <PartyPopper className="w-12 h-12 text-seeker-gold" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            You're <span className="text-seeker-gold">Connected!</span>
          </h1>

          <p className="text-xl text-gray-400 mb-4">
            Your restaurant is now integrated with Seeker Eats.
          </p>

          {merchantId && (
            <p className="text-sm text-gray-500 mb-8">
              Merchant ID:{" "}
              <code className="bg-white/10 px-2 py-1 rounded">
                {merchantId}
              </code>
            </p>
          )}
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-left mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            What happens next?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-seeker-gold/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Menu Sync</h3>
                <p className="text-gray-400 text-sm">
                  Your Square menu items are now visible to Seeker Eats users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-seeker-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-seeker-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Order Notifications</h3>
                <p className="text-gray-400 text-sm">
                  When customers order, you'll receive a call with order details
                  to confirm.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-seeker-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-seeker-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">We'll Be In Touch</h3>
                <p className="text-gray-400 text-sm">
                  Our team will reach out within 24-48 hours to finalize your
                  onboarding.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-seeker-gold to-seeker-gold-light rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
          >
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ConnectSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 md:px-12 md:py-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <span className="text-2xl md:text-3xl font-bold text-white">
          Seeker Eats
        </span>
      </header>

      <Suspense
        fallback={
          <div className="pt-32 pb-20 px-6 md:px-12 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-seeker-gold border-t-transparent rounded-full mx-auto" />
          </div>
        }
      >
        <SuccessContent />
      </Suspense>
    </main>
  );
}
