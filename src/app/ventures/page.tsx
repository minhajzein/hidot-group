"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";

const portfolio = [
  {
    title: "Azure Bay Resorts",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000",
    link: "https://holidays.hidot.group",
  },
  {
    title: "Vivid Identity Studio",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    link: "https://branding.hidot.group",
  },
  {
    title: "Global Link Logistics",
    category: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    link: "#",
  },
];

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-black text-hidot-navy mb-8 tracking-tighter leading-[0.85]">
              EXPANDING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hidot-navy to-hidot-blue italic">
                FRONTIER.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              HiDot Group&apos;s portfolio spans across sectors, each venture
              united by a commitment to innovation, luxury, and sustainable
              growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-8 shadow-2xl">
                  <NextImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hidot-navy/90 via-hidot-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-hidot-blue text-xs font-bold tracking-[0.2em] uppercase mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="text-hidot-navy h-6 w-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-hidot-blue/10">
        <div className="container text-center">
          <h2 className="text-4xl font-black text-hidot-navy mb-8">
            INVEST WITH THE GROUP.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are always looking for visionary partners and high-potential
            ventures. Join us in building the future of business.
          </p>
          <button className="bg-hidot-navy text-white px-10 py-5 rounded-full font-bold hover:bg-hidot-navy/90 transition-all text-lg">
            Investment Portal
          </button>
        </div>
      </section>
    </main>
  );
}
