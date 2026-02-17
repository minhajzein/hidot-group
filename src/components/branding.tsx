"use client";

import { motion } from "framer-motion";
import { Palette, Target, ArrowRight } from "lucide-react";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting unique visual languages that resonate.",
  },
  {
    icon: Target,
    title: "Strategic Positioning",
    description: "Aligning your brand with market opportunities.",
  },
];

const BrandingGateway = () => {
  return (
    <section className="py-24 bg-background overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-hidot-navy relative group shadow-2xl">
              <NextImage
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
                alt="Branding Design"
                fill
                className="object-cover opacity-60 h-full group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center border-8 border-hidot-blue/10 m-4 rounded-2xl">
                <div className="space-y-4">
                  <div className="text-hidot-blue text-sm font-bold tracking-[0.4em] uppercase">
                    Visual Excellence
                  </div>
                  <div className="text-white text-3xl md:text-5xl font-black italic tracking-tighter">
                    &quot;Branding is the soul of your business.&quot;
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 w-40 h-fit bg-hidot-blue rounded-full -z-10 blur-3xl opacity-50"
            />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-hidot-blue text-hidot-navy text-xs font-bold tracking-widest uppercase">
              HiDot Branding
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-hidot-navy mb-8 leading-tight">
              MORE THAN JUST <br />
              <span className="text-hidot-blue bg-hidot-navy px-3 inline-block">
                DESIGN.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              At HiDot Group, we build legacies. Our branding experts work at
              the intersection of psychology and strategy to forge connections
              that last.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <div className="p-2 bg-hidot-blue/50 rounded-lg">
                      <service.icon className="h-5 w-5 text-hidot-navy" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hidot-navy mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-hidot-navy text-hidot-navy hover:bg-hidot-navy hover:text-white rounded-full group"
              onClick={() =>
                window.open("https://branding.hidot.group", "_blank")
              }
            >
              Visit HiDot Branding
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandingGateway;
