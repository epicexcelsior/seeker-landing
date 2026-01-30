"use client";

import Link from "next/link";
import { Twitter, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t-2 border-seeker-gold/30">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black tracking-tighter text-white">SEEKER</span>
              <span className="text-xs font-mono tracking-widest text-seeker-gold">EATS</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Decentralized food delivery platform powered by Solana. Lower fees, instant settlements, driver ownership.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="#why" className="text-gray-500 hover:text-seeker-gold transition-colors text-sm">Why Us?</Link></li>
                <li><Link href="#for-restaurants" className="text-gray-500 hover:text-seeker-gold transition-colors text-sm">For Restaurants</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/connect-explainer" className="text-gray-500 hover:text-seeker-gold transition-colors text-sm">Connect Restaurant</Link></li>
                <li><Link href="https://github.com/obamna1/seekereats-relay" target="_blank" className="text-gray-500 hover:text-seeker-gold transition-colors text-sm">GitHub</Link></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              <Link
                href="https://x.com/SeekerEats"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-seeker-gold hover:bg-seeker-gold/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/obamna1/seekereats-relay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-seeker-gold hover:bg-seeker-gold/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:contact@seekereats.app"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-seeker-gold hover:bg-seeker-gold/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 font-mono">
            © {new Date().getFullYear()} SEEKER EATS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-gray-600 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
