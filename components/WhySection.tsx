"use client";

import { motion } from "framer-motion";
import { Wallet, Truck, ShieldCheck, Zap, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Fairer Prices",
    description: "Lower fees for restaurants mean lower prices for you. No hidden markups.",
    color: "text-seeker-gold",
    bg: "bg-seeker-gold/10",
    border: "border-seeker-gold/20",
  },
  {
    icon: Truck,
    title: "Driver Ownership",
    description: "Drivers earn more and have a stake in the network. Happy drivers, faster delivery.",
    color: "text-seeker-blue",
    bg: "bg-seeker-blue/10",
    border: "border-seeker-blue/20",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Secure",
    description: "Powered by Solana blockchain for instant payments and complete transparency.",
    color: "text-seeker-red",
    bg: "bg-seeker-red/10",
    border: "border-seeker-red/20",
  },
];

export function WhySection() {
  return (
    <section id="why" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Why <span className="text-seeker-gold">Seeker Eats?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We&apos;re rebuilding food delivery from the ground up to be fair, fast, and transparent.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border ${feature.border} hover:bg-zinc-900 transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
