"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the beautiful animation,
    // but in a real app, you might sync this with actual resource loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-hidot-navy overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/logo-white.png"
                  alt="HiDot Group Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="w-48 md:w-64 h-px bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-hidot-blue to-transparent"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-6 text-hidot-blue/40 text-xs font-bold tracking-[0.5em] uppercase"
              >
                Build Your Business
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Background Elements */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-hidot-blue rounded-full blur-[100px]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-hidot-blue rounded-full blur-[120px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
