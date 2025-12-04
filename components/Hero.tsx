"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Gemini_Generated_Image_vauuu2vauuu2vauu.png"
          alt="Background Banner"
          fill
          className="object-cover opacity-60 scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-seeker-blue/30 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-seeker-red/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-seeker-gold/30 bg-seeker-gold/10 backdrop-blur-md">
            <span className="text-seeker-gold text-xs md:text-sm font-bold tracking-wider uppercase">
              🚀 Launching Soon on Solana
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
            The Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-seeker-gold via-yellow-200 to-seeker-gold animate-gradient-x">
              Food Delivery
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Experience decentralized delivery. <span className="text-white font-medium">Fairer prices</span> for you, <span className="text-white font-medium">better pay</span> for drivers. 
          Powered by the speed of Solana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#waitlist"
            className="group relative px-8 py-4 bg-gradient-to-r from-seeker-red to-red-600 text-white font-bold rounded-full overflow-hidden shadow-[0_0_30px_rgba(198,40,40,0.4)] hover:shadow-[0_0_50px_rgba(198,40,40,0.6)] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Get Early Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#why"
            className="px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-lg"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
