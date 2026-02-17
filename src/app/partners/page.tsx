"use client";

import { motion } from "framer-motion";
import { Handshake, Globe2, BarChart3, Rocket } from "lucide-react";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 bg-hidot-blue/30 overflow-hidden relative">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-black text-hidot-navy mb-8 tracking-tighter">
              STRATEGIC <br />{" "}
              <span className="text-hidot-navy/50 italic">SYNERGY.</span>
            </h1>
            <p className="text-xl text-hidot-navy/80 leading-relaxed">
              We collaborate with world-leading brands and visionary founders to
              create long-term value and mutual excellence.
            </p>
          </motion.div>
        </div>

        {/* Abstract background graphics */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "white", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#E2EEFF", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-hidot-navy mb-10 leading-tight">
                WHY COLLABORATE WITH <br /> HI-DOT GROUP?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-hidot-blue/20 rounded-2xl flex items-center justify-center shrink-0 text-hidot-navy">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Global Network Access
                    </h4>
                    <p className="text-muted-foreground">
                      Tap into our extensive network across hospitality,
                      branding, and logistics sectors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-hidot-blue/20 rounded-2xl flex items-center justify-center shrink-0 text-hidot-navy">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Strategic Capital
                    </h4>
                    <p className="text-muted-foreground">
                      Beyond just funding, we provide the strategic guidance
                      needed to scale complex operations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-hidot-blue/20 rounded-2xl flex items-center justify-center shrink-0 text-hidot-navy">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Rapid Market Entry
                    </h4>
                    <p className="text-muted-foreground">
                      Leverage our branding and marketing expertise to dominate
                      your sector from day one.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-hidot-navy p-16 rounded-[4rem] text-center text-white relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(5,23,47,0.3)]"
            >
              <Handshake className="w-20 h-20 text-hidot-blue mx-auto mb-8 transition-transform group-hover:scale-110 duration-500" />
              <h3 className="text-3xl font-black mb-6">READY TO PARTNER?</h3>
              <p className="text-hidot-blue/60 mb-10 leading-relaxed">
                We are actively seeking new partnerships for the 2024-25 fiscal
                year. Let&apos;s build something extraordinary together.
              </p>
              <button className="bg-hidot-blue text-hidot-navy font-black px-12 py-5 rounded-full hover:bg-white transition-all text-lg">
                Start a Conversation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-hidot-blue/5">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-hidot-navy mb-16 uppercase tracking-widest opacity-20">
            Our Strategic Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Simple logo placeholders with names */}
            <div className="text-2xl font-black">NEXA CORP</div>
            <div className="text-2xl font-black">HORIZON V.</div>
            <div className="text-2xl font-black">LUXE TRAVELS</div>
            <div className="text-2xl font-black">VANTAGE G.</div>
            <div className="text-2xl font-black">SOLARIS B.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
