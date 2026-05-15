"use client";
import { motion } from "framer-motion";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 bg-[#0b1220] relative overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent inline-block">
            {title}
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
