"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

// Letter animation component - flies in from left side of screen
function AnimatedTitle({ text, className, delay = 0, reverse = false }: { text: string; className?: string; delay?: number; reverse?: boolean }) {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
        staggerDirection: reverse ? -1 : 1, // -1 animates from last to first
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      x: "-100vw", // Start from far left off-screen
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

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
        {/* Main Title with Letter Animation */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white font-mono drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              <AnimatedTitle text="SEEKER EATS" delay={0.3} reverse={true} />
            </span>
            <motion.span 
              className="block text-2xl md:text-4xl lg:text-5xl mt-6 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <span className="text-seeker-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                TURN YOUR STABLECOINS INTO FOOD
              </span>
            </motion.span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-lg md:text-2xl text-white max-w-3xl mx-auto mb-12 font-light drop-shadow-md"
        >
          <span className="font-bold text-seeker-gold">Pay for your food pickup & delivery with stablecoins.</span>{" "}
          Fast, secure, and decentralized on Solana.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
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

        {/* Download App CTA - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.7 }}
          className="mt-8"
        >
          <p className="text-white/70 text-sm mb-3 font-mono">Coming Soon</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="px-5 py-3 border-2 border-white/20 text-white/40 font-bold text-xs cursor-not-allowed">
              iOS App Store
            </button>
            <button className="px-5 py-3 border-2 border-white/20 text-white/40 font-bold text-xs cursor-not-allowed">
              Google Play
            </button>
            <button className="px-5 py-3 border-2 border-white/20 text-white/40 font-bold text-xs cursor-not-allowed">
              Solana Mobile Dapp Store
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
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
