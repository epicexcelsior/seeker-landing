"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, ArrowRight } from "lucide-react";

const metrics = [
  { label: "TAM", value: "$200B+", subtext: "Global Food Delivery" },
  { label: "Growth", value: "12%", subtext: "CAGR 2024-2030" },
  { label: "Blockchain", value: "Solana", subtext: "Fastest L1" },
  { label: "Advantage", value: "50%", subtext: "Lower Fees" },
];

const thesis = [
  {
    icon: Zap,
    title: "First-Mover in DeFi Food",
    description: "No major competitor is using blockchain for food delivery payments. We're creating a new category.",
  },
  {
    icon: Shield,
    title: "Network Effects",
    description: "As more restaurants and drivers join, the platform becomes more valuable for everyone. Token incentives accelerate adoption.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Crypto payments work everywhere. No banking partnerships needed. Instant international scaling.",
  },
];

export function InvestSection() {
  return (
    <section id="invest" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-seeker-red/5 via-transparent to-seeker-blue/5" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-seeker-red font-mono text-sm tracking-widest mb-4 block">{"// FOR INVESTORS"}</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Invest in the
              <br />
              <span className="text-seeker-red">future of delivery.</span>
            </h2>
            <p className="text-xl text-gray-400">
              Early-stage opportunity in a $200B+ market. Blockchain-native infrastructure with defensible moats.
            </p>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 bg-zinc-950/50 text-center group hover:border-seeker-red/50 transition-all duration-300"
            >
              <div className="text-xs text-gray-500 font-mono tracking-wider uppercase mb-2">{metric.label}</div>
              <div className="text-3xl md:text-4xl font-black text-white font-mono mb-1 group-hover:text-seeker-red transition-colors">
                {metric.value}
              </div>
              <div className="text-xs text-gray-600">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>

        {/* Investment Thesis */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {thesis.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border-l-4 border-seeker-red bg-zinc-950/30"
            >
              <div className="w-12 h-12 bg-seeker-red/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-seeker-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-seeker-red text-white font-bold text-lg border-2 border-seeker-red transition-all duration-300 hover:bg-transparent"
            data-hover="true"
          >
            GET INVESTMENT DECK
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
          <p className="text-gray-500 text-sm mt-4 font-mono">Limited early allocation available</p>
        </motion.div>
      </div>
    </section>
  );
}
