"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Contact Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-hidot-blue text-hidot-navy text-xs font-bold tracking-widest uppercase">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-hidot-navy mb-6 tracking-tighter">
              LET&apos;S BUILD <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hidot-navy to-hidot-blue">
                TOGETHER.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to take your business to the next level? Our strategic
              partners are standing by.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-hidot-navy/5"
            >
              <h3 className="text-2xl font-black text-hidot-navy mb-8 flex items-center gap-3">
                <MessageSquare className="text-hidot-blue" />
                SEND A MESSAGE
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-hidot-navy uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-hidot-blue/5 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-hidot-blue outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-hidot-navy uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-hidot-blue/5 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-hidot-blue outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-hidot-navy uppercase tracking-wider">
                    Subject
                  </label>
                  <select className="w-full bg-hidot-blue/5 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-hidot-blue outline-none transition-all appearance-none">
                    <option>Business Partnership</option>
                    <option>Branding Inquiry</option>
                    <option>Holiday Booking</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-hidot-navy uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-hidot-blue/5 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-hidot-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <Button className="w-full h-14 text-lg bg-hidot-navy text-white hover:bg-hidot-navy/90 rounded-xl group transition-all">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-black text-hidot-navy mb-8">
                  GLOBAL HEADQUARTERS
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-hidot-navy text-white rounded-2xl shadow-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-hidot-navy mb-2">
                        Singapore Office
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Marina Bay Financial Centre, <br />
                        Tower 3, Level 17 <br />
                        Singapore 018982
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-hidot-navy text-white rounded-2xl shadow-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-hidot-navy mb-2">
                        Email Us
                      </h4>
                      <p className="text-muted-foreground">
                        partners@hidot.group
                      </p>
                      <p className="text-muted-foreground">
                        contact@hidot.group
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-hidot-navy text-white rounded-2xl shadow-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-hidot-navy mb-2">
                        Call Us
                      </h4>
                      <p className="text-muted-foreground">+65 6789 0123</p>
                      <p className="text-muted-foreground">+1 800 HIDOT-GP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Synergy Quote */}
              <div className="p-8 rounded-3xl bg-hidot-blue/30 border border-hidot-navy/5 relative overflow-hidden">
                <p className="text-xl font-bold text-hidot-navy italic leading-relaxed relative z-10">
                  &quot;Great things in business are never done by one person.
                  They&apos;re done by a team of people.&quot;
                </p>
                <div className="mt-4 text-sm font-black text-hidot-navy/40 tracking-[0.2em] relative z-10">
                  SYNERGY MATTERS
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white blur-3xl rounded-full opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
