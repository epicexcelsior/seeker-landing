"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export function Waitlist() {
  return (
    <section id="waitlist" className="py-32 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-seeker-blue/20 to-black pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seeker-gold/10 text-seeker-gold text-sm font-bold mb-8 border border-seeker-gold/20">
            <Sparkles className="w-4 h-4" />
            <span>Limited Spots Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Join the Revolution
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Be the first to know when we launch in your city. Early adopters get exclusive perks and lower fees.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
                <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-8 py-5 bg-black/50 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-seeker-gold focus:ring-2 focus:ring-seeker-gold/20 transition-all text-lg"
                />
            </div>
            <button
              type="submit"
              className="px-10 py-5 bg-gradient-to-r from-seeker-gold to-seeker-gold-light text-seeker-blue font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg whitespace-nowrap"
            >
              Join Waitlist <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600">
            We respect your privacy. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
