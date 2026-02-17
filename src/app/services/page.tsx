"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Plane,
  Briefcase,
  Globe,
  ArrowRight,
  Zap,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Strategic Branding",
    description:
      "Developing comprehensive brand identities that command attention and drive loyalty.",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Plane,
    title: "Luxury Hospitality",
    description:
      "Curating elite travel experiences and managing premium resort portfolios.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Briefcase,
    title: "Business Partnerships",
    description:
      "Strategic collaboration models designed for long-term growth and market dominance.",
    gradient: "from-hidot-navy/20 to-hidot-blue/20",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description:
      "Seamless supply chain and management solutions for international operations.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Zap,
    title: "Tech Solutions",
    description:
      "Cutting-edge digital transformation services to future-proof your business.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: BarChart,
    title: "Venture Investments",
    description:
      "Identifying and nurturing high-growth opportunities in diverse sectors.",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-hidot-blue text-hidot-navy text-xs font-bold tracking-widest uppercase">
              Capabilities
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-hidot-navy mb-8 tracking-tighter leading-[0.85]">
              SOLUTIONS BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hidot-navy to-hidot-blue">
                FOR SCALE.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              HiDot Group provides a multi-disciplinary ecosystem of services
              designed to help you build, grow, and sustain your business in a
              global market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-10 rounded-3xl bg-white border border-hidot-navy/5 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative`}
              >
                {/* Gradient background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.gradient} blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700`}
                />

                <div className="w-14 h-14 bg-hidot-blue/30 rounded-2xl flex items-center justify-center mb-8 text-hidot-navy group-hover:bg-hidot-navy group-hover:text-white transition-colors duration-500">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-hidot-navy mb-4">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {s.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 text-hidot-navy font-bold group-hover:gap-3 transition-all h-auto"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Synergy */}
      <section className="py-24 bg-hidot-navy text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              THE POWER OF <br />{" "}
              <span className="text-hidot-blue italic">
                INTEGRATED SUCCESS.
              </span>
            </h2>
            <p className="text-xl text-hidot-blue/60 mb-12">
              We don&apos;t just provide individual services; we create
              synergies between branding, hospitality, and operations that
              multiply your business value.
            </p>
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-hidot-blue text-hidot-navy hover:bg-white rounded-full transition-all"
            >
              Initialize Partnership
            </Button>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-hidot-blue/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>
    </main>
  );
}
