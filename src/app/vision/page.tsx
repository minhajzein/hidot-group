"use client";

import { motion } from "framer-motion";
import { Lightbulb, Compass, Heart, Zap } from "lucide-react";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-32 bg-white relative overflow-hidden">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mb-10 px-6 py-2 rounded-full bg-hidot-navy text-hidot-blue text-sm font-black tracking-widest uppercase"
          >
            OUR MISSION
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-hidot-navy mb-12 tracking-tighter leading-[0.8]"
          >
            BUILDING <br /> THE{" "}
            <span className="italic text-hidot-blue">FUTURE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We exist to create synergies between visionary branding and
            world-class hospitality, helping our partners build legacies that
            last generations.
          </motion.p>
        </div>

        {/* Large abstract text background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[20vw] font-black text-hidot-blue/5 whitespace-nowrap select-none pointer-events-none">
          LEGACY VISION FUTURE
        </div>
      </section>

      <section className="py-24 bg-hidot-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
              <Lightbulb className="w-12 h-12 text-hidot-blue mb-8" />
              <h3 className="text-2xl font-black mb-4 uppercase">Innovation</h3>
              <p className="text-hidot-blue/60 leading-relaxed">
                Constant evolution through creative strategy and technological
                integration.
              </p>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
              <Compass className="w-12 h-12 text-hidot-blue mb-8" />
              <h3 className="text-2xl font-black mb-4 uppercase">Integrity</h3>
              <p className="text-hidot-blue/60 leading-relaxed">
                Guidance based on transparency and ethical partnership models.
              </p>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
              <Heart className="w-12 h-12 text-hidot-blue mb-8" />
              <h3 className="text-2xl font-black mb-4 uppercase">Excellence</h3>
              <p className="text-hidot-blue/60 leading-relaxed">
                Uncompromising quality in every hospitality and branding
                touchpoint.
              </p>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
              <Zap className="w-12 h-12 text-hidot-blue mb-8" />
              <h3 className="text-2xl font-black mb-4 uppercase">Synergy</h3>
              <p className="text-hidot-blue/60 leading-relaxed">
                Multiplying value by creating meaningful connections between
                sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black text-hidot-navy mb-12">
            SINCE 2024. <br /> STILL BUILDING.
          </h2>
          <div className="w-1 h-24 bg-hidot-blue mx-auto mb-12" />
          <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
            &quot;Our vision is not just to be the best, but to define what the
            best looks like for our partners and their customers.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
