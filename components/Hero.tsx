"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsVideoLoaded] = useState(false);
  const [glitchText, setGlitchText] = useState("SEEKER EATS");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Glitch effect
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let timeout: NodeJS.Timeout;

    const triggerGlitch = () => {
      let current = 0;

      const interval = setInterval(() => {
        setGlitchText(
          "SEEKER EATS"
            .split("")
            .map((char, index) => {
              if (index < current) return "SEEKER EATS"[index];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("")
        );
        current += 1 / 3;

        if (current >= 11) {
          clearInterval(interval);
          setGlitchText("SEEKER EATS");
        }
      }, 30);

      timeout = setTimeout(triggerGlitch, 3000 + Math.random() * 4000);
    };

    timeout = setTimeout(triggerGlitch, 2000);
    return () => clearTimeout(timeout);
  }, []);

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
          onLoadedData={() => setIsVideoLoaded(true)}
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

      {/* Binary decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-4 md:left-8 font-mono text-xs text-seeker-gold/20 leading-relaxed">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>{Array.from({ length: 8 }).map(() => Math.round(Math.random())).join("")}</div>
          ))}
        </div>
        <div className="absolute top-20 right-4 md:right-8 font-mono text-xs text-seeker-red/20 leading-relaxed text-right">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>{Array.from({ length: 8 }).map(() => Math.round(Math.random())).join("")}</div>
          ))}
        </div>
      </div>

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
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-seeker-gold/50 bg-black/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-seeker-red animate-pulse" />
          <span className="text-seeker-gold text-xs font-mono tracking-widest uppercase">
            Launching on Solana
          </span>
        </motion.div>

        {/* Main Title with Glitch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white font-mono" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
              {glitchText}
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-seeker-gold via-yellow-200 to-seeker-gold">
                DECENTRALIZED
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light"
        >
          <span className="text-white font-medium">Restaurant ownership.</span>{" "}
          <span className="text-seeker-gold">Driver equity.</span>{" "}
          <span className="text-seeker-blue">Customer savings.</span>
          <br />
          <span className="text-sm md:text-base text-gray-500 font-mono mt-2 block">
            Powered by Solana blockchain // USDC payments // Instant settlement
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#for-restaurants"
            className="group relative px-8 py-4 bg-seeker-gold text-black font-bold text-lg tracking-wide overflow-hidden border-2 border-seeker-gold transition-all duration-300 hover:bg-transparent hover:text-seeker-gold"
            data-hover="true"
          >
            <span className="relative z-10 flex items-center gap-3">
              FOR RESTAURANTS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </a>
          
          <a
            href="#invest"
            className="group relative px-8 py-4 bg-transparent border-2 border-seeker-red text-white font-bold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:bg-seeker-red"
            data-hover="true"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-5 h-5 text-seeker-gold" />
              INVEST NOW
            </span>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "50%", label: "Lower Fees" },
            { value: "0.4s", label: "Settlement" },
            { value: "$0.00025", label: "Tx Cost" },
          ].map((stat, i) => (
            <div key={i} className="text-center border-t-2 border-white/10 pt-4">
              <div className="text-2xl md:text-3xl font-black text-white font-mono">{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
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
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-4 w-16 h-16 border-l-2 border-t-2 border-seeker-gold/30 z-20" />
      <div className="absolute top-24 right-4 w-16 h-16 border-r-2 border-t-2 border-seeker-gold/30 z-20" />
    </section>
  );
}
