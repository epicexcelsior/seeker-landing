"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "#why", label: "Why Us?" },
  { href: "#for-restaurants", label: "For Restaurants" },
];

export function Navbar() {
  const [, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.95)"]
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212,175,55,0)", "rgba(212,175,55,0.3)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg, borderBottomColor: navBorder }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-seeker-gold/0 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden border-2 border-seeker-gold transition-all duration-300 group-hover:border-seeker-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                <motion.div
                  className="absolute inset-0"
                  initial={{ 
                    y: -5,
                    rotate: -180 
                  }}
                  animate={{ 
                    y: 0,
                    rotate: 0 
                  }}
                  transition={{ 
                    y: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.4,
                      delay: 0.3
                    },
                    rotate: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  whileHover={{
                    rotate: 360,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.4
                    }
                  }}
                >
                  <Image
                    src="/Gemini_Generated_Image_8ni2l88ni2l88ni2.png"
                    alt="Seeker Eats"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-seeker-gold/20 to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black tracking-tighter text-white group-hover:text-seeker-gold transition-colors">
                  SEEKER
                </span>
                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-seeker-gold">
                  EATS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <NavLink key={link.href} href={link.href} index={index}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/connect-explainer"
                className="group relative px-6 py-2.5 bg-seeker-gold text-black font-bold text-sm tracking-wide transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  CONNECT
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-seeker-gold hover:text-seeker-gold transition-colors"
              data-hover="true"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 left-0 right-0 z-40 bg-black/98 border-b border-seeker-gold/30 lg:hidden"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-white hover:text-seeker-gold transition-colors py-2 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/connect-explainer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-seeker-gold text-black font-bold text-center border border-seeker-gold"
            >
              CONNECT RESTAURANT
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function NavLink({ href, children, index }: { href: string; children: React.ReactNode; index: number }) {
  return (
    <Link
      href={href}
      className="group relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors overflow-hidden"
      data-hover="true"
    >
      <span className="relative z-10 flex items-center gap-1">
        <span className="text-seeker-gold/60 font-mono text-xs">0{index + 1}</span>
        {children}
      </span>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-seeker-gold"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
        style={{ originX: 0 }}
      />
    </Link>
  );
}
