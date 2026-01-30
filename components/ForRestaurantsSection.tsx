"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Store, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ForRestaurantsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id="for-restaurants"
      ref={containerRef}
      className="relative py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-seeker-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-seeker-red/10 blur-[120px]" />
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// FOR RESTAURANTS"}</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Connect in minutes.
              <br />
              <span className="text-seeker-gold">No changes needed.</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Already using Square? You&apos;re ready to go. Just connect your account and start receiving crypto orders instantly.
            </p>
            <Link
              href="/connect-explainer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-seeker-gold text-black font-bold text-lg border-2 border-seeker-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <Store className="w-5 h-5" />
              CONNECT YOUR RESTAURANT
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
