"use client";

import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for a more premium feel
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
