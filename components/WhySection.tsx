"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Wallet, Smartphone, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Pay with Stablecoins",
    description: "Use USDC and other stablecoins for fast, secure payments. No volatility, no hassle. Just instant transactions on Solana.",
    color: "text-seeker-gold",
    border: "border-seeker-gold",
    bg: "bg-seeker-gold/5",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Download the Seeker app on iOS or Android. Order food with crypto as easily as you would with a credit card.",
    color: "text-seeker-blue",
    border: "border-seeker-blue",
    bg: "bg-seeker-blue/5",
  },
  {
    icon: ShieldCheck,
    title: "Instant & Secure",
    description: "Blockchain payments are final and fraud-proof. No chargebacks, no stolen card info. Just pure peer-to-peer transactions.",
    color: "text-seeker-red",
    border: "border-seeker-red",
    bg: "bg-seeker-red/5",
  },
];

export function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="why" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// WHY SEEKER?"}</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6">
              Crypto payments
              <br />
              <span className="text-seeker-gold">made simple.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl"
          >
            We built Seeker to make spending crypto as easy as ordering a pizza. 
            No complicated wallets. No gas fees. Just tap and pay.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`group relative p-8 border-2 ${feature.border} ${feature.bg} backdrop-blur-sm transition-all duration-300 hover:bg-opacity-10`}
    >
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${feature.border}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${feature.border}`} />

      {/* Icon */}
      <div className={`w-14 h-14 border-2 ${feature.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className={`w-7 h-7 ${feature.color}`} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-white/70 leading-relaxed">
        {feature.description}
      </p>

      {/* Index number */}
      <div className={`absolute top-4 right-4 text-6xl font-black ${feature.color} opacity-10 font-mono`}>
        0{index + 1}
      </div>
    </motion.div>
  );
}
