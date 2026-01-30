"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Store, ArrowRight, DollarSign, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Keep More Revenue",
    description: "With only 5-7.5% platform fees vs 15-30% elsewhere, you pocket an extra $15,000-$50,000+ annually depending on volume.",
  },
  {
    icon: Clock,
    title: "Instant Cash Flow",
    description: "No more waiting 2 weeks for payouts. Every order settles in your crypto wallet in under 1 second.",
  },
  {
    icon: Shield,
    title: "Chargeback Protection",
    description: "Blockchain payments are final. No fraudulent chargebacks eating into your margins.",
  },
];

export function ForRestaurantsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id="for-restaurants"
      ref={containerRef}
      className="relative py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-seeker-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-seeker-red/10 blur-[120px]" />
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// FOR RESTAURANTS"}</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Take back your
              <br />
              <span className="text-seeker-gold">profit margins.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stop letting delivery apps eat your lunch. Join the platform that puts restaurants first.
            </p>
            <a
              href="/connect-explainer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-seeker-gold text-black font-bold text-lg border-2 border-seeker-gold transition-all duration-300 hover:bg-transparent hover:text-seeker-gold"
              data-hover="true"
            >
              CONNECT YOUR RESTAURANT
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          {/* Calculator Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-seeker-gold/30 bg-black/50 backdrop-blur-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-seeker-gold/20 border border-seeker-gold flex items-center justify-center">
                <Store className="w-5 h-5 text-seeker-gold" />
              </div>
              <span className="text-white font-bold">Revenue Calculator</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Monthly Orders</span>
                <span className="text-white font-mono">1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Avg Order Value</span>
                <span className="text-white font-mono">$35</span>
              </div>
              <div className="flex justify-between items-center border-b border-seeker-red/30 pb-3">
                <span className="text-gray-400">UberEats Fees (30%)</span>
                <span className="text-seeker-red font-mono">-$10,500/mo</span>
              </div>
              <div className="flex justify-between items-center border-b border-seeker-gold/30 pb-3">
                <span className="text-gray-400">Seeker Fees (7.5%)</span>
                <span className="text-seeker-gold font-mono">-$2,625/mo</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-bold">You Save</span>
                <span className="text-seeker-gold text-2xl font-black font-mono">$7,875/mo</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 border border-white/10 bg-black/30 hover:border-seeker-gold/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-seeker-gold/10 border border-seeker-gold/30 flex items-center justify-center mb-4 group-hover:bg-seeker-gold/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-seeker-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
