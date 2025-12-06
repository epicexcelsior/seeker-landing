"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/50 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-black/50"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-seeker-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300">
             <Image 
                src="/Gemini_Generated_Image_8ni2l88ni2l88ni2.png" 
                alt="Seeker Eats Logo" 
                fill
                className="object-cover"
             />
        </div>
        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-seeker-gold transition-colors duration-300">Seeker Eats</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#why" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-seeker-gold after:transition-all hover:after:w-full">
          Why Seeker Eats?
        </Link>
        <Link href="#waitlist" className="px-6 py-2.5 text-sm font-bold text-seeker-blue bg-gradient-to-r from-seeker-gold to-seeker-gold-light rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 transform">
          Connect
        </Link>
      </div>

      {/* Mobile Menu Button (Placeholder for now) */}
      <div className="md:hidden">
         <Link href="#waitlist" className="px-4 py-2 text-xs font-bold text-seeker-blue bg-seeker-gold rounded-full">
          Connect
        </Link>
      </div>
    </motion.nav>
  );
}
