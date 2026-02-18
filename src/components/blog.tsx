"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "The Future of Strategic Branding in 2024",
    excerpt:
      "Discover how AI and human-centric design are converging to create the next generation of brand identities.",
    date: "Feb 15, 2024",
    author: "Elena Rodriguez",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Branding",
  },
  {
    title: "Redefining Luxury: The Shift to Experiential Travel",
    excerpt:
      "Why modern travelers are choosing deep cultural immersion over traditional luxury amenities.",
    date: "Feb 10, 2024",
    author: "James Wilson",
    image:
      "/resorts/chemparathi.png",
    category: "Holidays",
  },
  {
    title: "Building a Legacy: Why Business Partnerships Matter",
    excerpt:
      "Explore the core principles of successful long-term collaboration in a rapidly changing market.",
    date: "Feb 5, 2024",
    author: "Marcello Vitti",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "Business",
  },
];

const Blog = () => {
  return (
    <section className="py-24 bg-hidot-blue/5 overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-hidot-navy text-hidot-blue text-xs font-bold tracking-widest uppercase">
              Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-hidot-navy">
              LATEST FROM{" "}
              <span className="underline decoration-hidot-blue">
                THE GROUP.
              </span>
            </h2>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            className="border-hidot-navy text-hidot-navy hover:bg-hidot-navy hover:text-white rounded-full group"
          >
            View All Blogs
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg">
                <NextImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-hidot-navy text-xs font-bold uppercase">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
              </div>
              <h3 className="text-2xl font-black text-hidot-navy mb-4 group-hover:text-hidot-blue transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-hidot-navy font-bold group-hover:gap-3 transition-all">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
