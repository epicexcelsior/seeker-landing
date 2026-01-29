"use client";

import { useState } from 'react';

import { motion } from "framer-motion";
import { Send, Sparkles, Check } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_RELAY_API_URL || 'http://localhost:3000'}/waitlist/join`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        if (res.ok) {
            setSubmitted(true);
            setEmail('');
        } else {
            const data = await res.json();
            // If already on list, treat as success but show different message or same
             if (res.status === 200 && data.message === 'Already on waitlist') {
                 setSubmitted(true);
             } else {
                 setError(data.message || 'Something went wrong');
             }
        }
    } catch (e) {
        setError('Network error. Please try again.');
    } finally {
        setLoading(false);
    }
  };

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
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Get early access and exclusive updates.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16 relative">
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-6 pr-14 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-seeker-gold/50 focus:ring-1 focus:ring-seeker-gold/50 transition-all font-medium"
            />
            <button 
                disabled={loading}
                type="submit"
                className="absolute right-2 top-2 p-2 rounded-full bg-seeker-gold text-black hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
                {loading ? <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full" /> : <Send className="w-5 h-5" />}
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            </form>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-16 max-w-md mx-auto flex items-center gap-4">
                <div className="bg-emerald-500/20 p-2 rounded-full text-emerald-500">
                    <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-left">
                    <h3 className="text-white font-bold">You're on the list!</h3>
                    <p className="text-emerald-200/70 text-sm">We'll be in touch soon.</p>
                </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* X (Twitter) */}
            <a
              href="https://x.com/SeekerEats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-seeker-blue/10 hover:border-seeker-blue/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-seeker-blue/20 transition-colors">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-seeker-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">Follow on X</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/obamna1/seekereats-relay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">View Code</span>
            </a>

            {/* Devpost */}
            <a
              href="https://devpost.com/software/seekereats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-seeker-gold/10 hover:border-seeker-gold/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-seeker-gold/20 transition-colors">
                <Sparkles className="w-6 h-6 text-gray-300 group-hover:text-seeker-gold" />
              </div>
              <span className="text-lg font-semibold text-white">MBC Hackathon</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
