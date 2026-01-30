"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Wallet, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "50% Lower Fees",
    description: "Traditional delivery apps take 15-30%. We take 5-7.5%. That means more profit for you on every single order.",
    stat: "5-7.5%",
    statLabel: "Platform Fee",
    color: "text-seeker-gold",
    border: "border-seeker-gold",
    bg: "bg-seeker-gold/5",
  },
  {
    icon: Truck,
    title: "Driver Ownership",
    description: "Drivers earn SEEK tokens with every delivery. They become stakeholders, not just contractors.",
    stat: "SEEK",
    statLabel: "Driver Token",
    color: "text-seeker-blue",
    border: "border-seeker-blue",
    bg: "bg-seeker-blue/5",
  },
  {
    icon: ShieldCheck,
    title: "Instant Settlement",
    description: "No more waiting 2 weeks for payouts. USDC payments settle in your wallet in 400 milliseconds.",
    stat: "0.4s",
    statLabel: "Settlement",
    color: "text-seeker-red",
    border: "border-seeker-red",
    bg: "bg-seeker-red/5",
  },
];

export function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Scroll progress tracking is set up for future parallax effects
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
            <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// THE PROBLEM"}</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6">
              Food delivery
              <br />
              <span className="text-seeker-red">is broken.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Restaurants get squeezed. Drivers get exploited. Customers overpay. 
            The middlemen take everything. We&apos;re here to fix that.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 border border-white/10 bg-zinc-950/50 backdrop-blur-sm"
        >
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
              Platform Fee Comparison
            </h3>

            <div className="space-y-4">
              {[
                { name: "Uber Eats", fee: "15-30%", color: "bg-gray-600" },
                { name: "DoorDash", fee: "15-30%", color: "bg-red-600" },
                { name: "Grubhub", fee: "15-30%", color: "bg-orange-600" },
                { name: "Seeker Eats", fee: "5-7.5%", color: "bg-seeker-gold", highlight: true },
              ].map((platform, i) => (
                <div 
                  key={platform.name}
                  className={`flex items-center gap-4 p-4 ${platform.highlight ? 'bg-seeker-gold/10 border-l-4 border-seeker-gold' : 'border-l-4 border-white/10'}`}
                >
                  <div className="w-32 md:w-40 font-bold text-white">{platform.name}</div>
                  <div className="flex-1 h-8 bg-zinc-900 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: platform.highlight ? "25%" : "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className={`h-full ${platform.color}`}
                    />
                  </div>
                  <div className={`w-24 text-right font-mono ${platform.highlight ? 'text-seeker-gold font-bold' : 'text-gray-400'}`}>
                    {platform.fee}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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
      className={`group relative p-8 border ${feature.border} ${feature.bg} backdrop-blur-sm transition-all duration-300 hover:bg-opacity-10`}
    >
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${feature.border}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${feature.border}`} />

      {/* Icon */}
      <div className={`w-14 h-14 border ${feature.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className={`w-7 h-7 ${feature.color}`} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6">
        {feature.description}
      </p>

      {/* Stat */}
      <div className="border-t border-white/10 pt-4">
        <div className={`text-3xl font-black font-mono ${feature.color}`}>
          {feature.stat}
        </div>
        <div className="text-xs text-gray-500 font-mono tracking-wider uppercase mt-1">
          {feature.statLabel}
        </div>
      </div>

      {/* Index number */}
      <div className={`absolute top-4 right-4 text-6xl font-black ${feature.color} opacity-10 font-mono`}>
        0{index + 1}
      </div>
    </motion.div>
  );
}
