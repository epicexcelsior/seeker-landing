"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Smartphone } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity: videoOpacity }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Video overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        
        {/* Scanlines effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            backgroundSize: "100% 4px",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="container relative z-20 px-6 mx-auto text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-seeker-gold bg-black/70 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-seeker-red animate-pulse" />
          <span className="text-seeker-gold text-xs font-bold font-mono tracking-widest uppercase">
            Now Available on Solana
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white font-mono drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              SEEKER EATS
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-4">
              <span className="text-seeker-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                PAY WITH STABLECOINS
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-2xl text-white max-w-3xl mx-auto mb-12 font-light drop-shadow-md"
        >
          <span className="font-bold text-seeker-gold">USDC payments made easy.</span>{" "}
          Fast, secure, and decentralized food delivery on Solana.
          <br />
          <span className="text-sm md:text-base text-white/90 font-mono mt-3 block">
            <Smartphone className="inline w-4 h-4 mr-2" />
            Download the Seeker app to order with crypto
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/connect-explainer"
            className="group relative px-8 py-4 bg-seeker-gold text-black font-bold text-lg tracking-wide overflow-hidden border-2 border-seeker-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              CONNECT YOUR RESTAURANT
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </Link>
        </motion.div>

        {/* Download App CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8"
        >
          <p className="text-white/70 text-sm mb-3 font-mono">Available on iOS & Android</p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 border-2 border-white/30 text-white font-bold text-sm hover:border-seeker-gold hover:text-seeker-gold transition-all">
              App Store
            </button>
            <button className="px-6 py-3 border-2 border-white/30 text-white font-bold text-sm hover:border-seeker-gold hover:text-seeker-gold transition-all">
              Play Store
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs font-mono tracking-widest font-bold">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-4 w-16 h-16 border-l-2 border-t-2 border-seeker-gold/50 z-20" />
      <div className="absolute top-24 right-4 w-16 h-16 border-r-2 border-t-2 border-seeker-gold/50 z-20" />
    </section>
  );
}
