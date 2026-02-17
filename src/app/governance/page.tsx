"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Shield, Users, Scale, FileText } from "lucide-react";

const boardMembers = [
  {
    name: "Julian Thorne",
    role: "Executive Chairman",
    bio: "25+ years in global luxury hospitality and strategic management.",
  },
  {
    name: "Dr. Aris Varma",
    role: "Non-Executive Director",
    bio: "Expert in international trade law and corporate governance.",
  },
  {
    name: "Sarah Jenkins",
    role: "Group CEO",
    bio: "Visionary leader with a track record of building billion-dollar brands.",
  },
];

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-hidot-navy text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              CORPORATE{" "}
              <span className="text-hidot-blue italic">GOVERNANCE.</span>
            </h1>
            <p className="text-xl text-hidot-blue/60 leading-relaxed">
              Integrity, transparency, and accountability are the cornerstones
              of HiDot Group&apos;s leadership model.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-hidot-blue/20 rounded-2xl flex items-center justify-center mx-auto text-hidot-navy">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hidot-navy">
                Accountability
              </h3>
              <p className="text-muted-foreground text-sm">
                We take full responsibility for our impact on partners and the
                world.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-hidot-blue/20 rounded-2xl flex items-center justify-center mx-auto text-hidot-navy">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hidot-navy">Equity</h3>
              <p className="text-muted-foreground text-sm">
                Building a fair ecosystem where every partner can thrive.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-hidot-blue/20 rounded-2xl flex items-center justify-center mx-auto text-hidot-navy">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hidot-navy">Inclusion</h3>
              <p className="text-muted-foreground text-sm">
                Diverse perspectives driving superior strategic outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-hidot-blue/20 rounded-2xl flex items-center justify-center mx-auto text-hidot-navy">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hidot-navy">
                Transparency
              </h3>
              <p className="text-muted-foreground text-sm">
                Clear communication and ethical business practices at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-hidot-blue/5">
        <div className="container">
          <h2 className="text-4xl font-black text-hidot-navy mb-16 text-center">
            OUR LEADERSHIP.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-hidot-navy/5 shadow-xl"
              >
                <h4 className="text-2xl font-bold text-hidot-navy mb-2">
                  {member.name}
                </h4>
                <div className="text-hidot-blue font-bold text-sm mb-6 tracking-widest uppercase">
                  {member.role}
                </div>
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  &quot;{member.bio}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
