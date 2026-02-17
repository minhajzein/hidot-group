"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8,
      });

      // Parallax effect on scroll
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0 z-0 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-hidot-blue/30 via-background to-background" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-hidot-navy/10 bg-hidot-blue/50 backdrop-blur-sm text-sm font-semibold text-hidot-navy tracking-wide uppercase"
        >
          BUILD YOUR BUSINESS
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-black text-hidot-navy tracking-tight mb-8 leading-[0.9]"
        >
          YOUR STRATEGIC <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hidot-navy to-hidot-navy/60">
            BUSINESS PARTNER
          </span>
        </h1>

        <p
          ref={descRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12"
        >
          At HiDot Group, we combine visionary branding with world-class
          hospitality to create synergies that drive growth and redefine
          success.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-hidot-navy text-white hover:bg-hidot-navy/90 rounded-full transition-all hover:scale-105 active:scale-95 group"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-hidot-navy text-hidot-navy hover:bg-hidot-navy hover:text-white rounded-full transition-all active:scale-95"
            >
              Explore the Group
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-hidot-navy/20" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-hidot-navy/40">
            Premium Hospitality
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-hidot-navy/40">
        <div className="text-xs font-bold tracking-widest uppercase">
          Scroll to explore
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-px bg-hidot-navy/40"
        />
      </div>
    </section>
  );
};

export default Hero;
