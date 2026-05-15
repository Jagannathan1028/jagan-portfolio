"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] bg-[#0b1220] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-20 h-20 border-2 border-accent/30 rounded-full animate-spin-slow" />
            <div className="absolute inset-0 w-20 h-20 border-t-2 border-accent rounded-full animate-spin" />
            <div className="absolute inset-2 w-16 h-16 border-b-2 border-accent2 rounded-full animate-spin-reverse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-accent font-orbitron text-sm tracking-[0.3em] uppercase"
          >
            Loading
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mt-4 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
