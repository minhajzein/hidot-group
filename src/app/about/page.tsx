"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every strategy is data-driven and executed with meticulous attention to detail.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "We don't just see what is; we see what could be for your business.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Pushing boundaries in branding and hospitality to redefine industry standards.",
  },
  {
    icon: Users,
    title: "Synergy",
    description:
      "Building stronger results through meaningful partnerships and collaboration.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* About Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hidot-navy">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              BEYOND{" "}
              <span className="text-hidot-blue italic">PARTNERSHIP.</span>
            </h1>
            <p className="text-xl text-hidot-blue/60 leading-relaxed">
              HiDot Group is a global collective dedicated to elevating brands
              and creating world-class experiences. We believe in the power of
              synergy to drive growth.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hidot-blue/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-hidot-blue/10 blur-3xl rounded-full -translate-x-1/2" />
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-hidot-navy mb-8">
                BUILD YOUR BUSINESS.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At HiDot Group, our philosophy is simple yet profound. We
                  don&apos;t just provide services; we integrate ourselves into
                  your vision. Whether it&apos;s crafting a legacy-grade brand
                  or delivering an island retreat that redefines luxury, we do
                  it with the same core drive: excellence.
                </p>
                <p>
                  Founded on the principles of innovation and strategic growth,
                  we have evolved into a multi-disciplinary powerhouse spanning
                  across branding, hospitality, and beyond.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-hidot-navy"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-hidot-navy to-hidot-blue opacity-20" />
              <div className="flex items-center justify-center h-full">
                <span className="text-hidot-blue text-4xl font-black opacity-20 tracking-[1em]">
                  HIDOT GROUP
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-hidot-blue/10">
        <div className="container text-center">
          <h2 className="text-4xl font-black text-hidot-navy mb-16">
            OUR CORE VALUES.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-hidot-navy/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-hidot-blue/50 rounded-xl flex items-center justify-center mx-auto mb-6 text-hidot-navy">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-hidot-navy mb-4">
                  {v.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
