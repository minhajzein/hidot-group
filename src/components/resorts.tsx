"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HolidaysGateway = () => {
  return (
    <section className="py-24 bg-hidot-blue/10 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-fit"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-hidot-navy text-hidot-blue text-xs font-bold tracking-widest uppercase">
              HiDot Holidays
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-hidot-navy mb-8 leading-tight">
              WORLD-CLASS <br />
              <span className="text-hidot-blue bg-hidot-navy px-3 inline-block">
                HOSPITALITY.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Experience the pinnacle of luxury travel. From private island
              retreats to alpine sanctuaries, we curate the world&apos;s most
              extraordinary escapes.
            </p>
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-hidot-navy text-white hover:bg-hidot-navy/90 rounded-full group"
              onClick={() =>
                window.open("https://holidays.hidot.group", "_blank")
              }
            >
              Visit HiDot Holidays
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-fit"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden h-[450px] w-full bg-hidot-navy relative group shadow-2xl">
              <NextImage
                src="/resorts/resort-gateway.jpeg"
                alt="Luxury Resort"
                fill
                className="object-cover object-right opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hidot-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 p-4">
                <div className="text-white/60 text-sm font-bold tracking-widest uppercase mb-2">
                  Featured Destination
                </div>
                <div className="text-white text-3xl font-black">
                  HiDot Luxury Resorts
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-hidot-blue rounded-full -z-10 blur-2xl opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HolidaysGateway;
