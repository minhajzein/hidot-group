"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import NextImage from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, NexaCorp",
    content:
      "HiDot Group transformed our brand identity into a global powerhouse. Their strategic approach to business partnership is unparalleled.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Michael Chen",
    role: "Founder, Horizon Ventures",
    content:
      "The synergy between their branding expertise and hospitality vision is what makes them the perfect partner for any growing business.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Aisha Rahman",
    role: "Director, Luxe Travels",
    content:
      "Beyond just aesthetics, HiDot Group understands the soul of a business. Their 'Build your business' philosophy truly resonates.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background overflow-x-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-hidot-blue text-hidot-navy text-xs font-bold tracking-widest uppercase">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-hidot-navy mb-6">
            WHAT OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hidot-navy to-hidot-navy/60 text-stroke">
              PARTNERS
            </span>{" "}
            SAY.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from the businesses and individuals we&apos;ve helped
            elevate through strategic partnership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-white border border-hidot-navy/5 shadow-xl hover:shadow-2xl transition-all duration-500 relative group"
            >
              <Quote className="h-10 w-10 text-hidot-blue/30 absolute top-6 right-6 group-hover:text-hidot-blue/50 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-hidot-blue">
                  <NextImage
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-hidot-navy">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-hidot-navy/80 leading-relaxed italic">
                &quot;{t.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
