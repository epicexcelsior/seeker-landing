"use client";

import { motion } from "framer-motion";

export function VideoDemo() {
  return (
    <section id="demo" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seeker-gold/5 blur-[150px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-seeker-gold font-mono text-sm tracking-widest mb-4 block">{"// TECH DEMO"}</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            See it in <span className="text-seeker-gold">action</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Watch our tech demo showcasing stablecoin payments on Solana
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative border-2 border-seeker-gold/50 bg-black">
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-seeker-gold" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-seeker-gold" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-seeker-gold" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-seeker-gold" />
            
            {/* Video embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/iED8u1aI5sY"
                title="Seeker Eats Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
