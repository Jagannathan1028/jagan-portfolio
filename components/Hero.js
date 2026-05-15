"use client";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0b1220]">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-desktop.png')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/80 via-[#0b1220]/60 to-[#0b1220]" />

      {/* Particle Network */}
      <ParticleBackground />

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent2/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center pt-24">
        <div className="hidden md:block" />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm mb-6"
          >
            Available for Hire
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-2"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-orbitron"
          >
            <span className="bg-gradient-to-r from-white via-accent to-accent2 bg-clip-text text-transparent">
              Jagannathan
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
          >
            <TypewriterText
              texts={[
                "Full Stack Developer",
                "Angular Specialist",
                "Spring Boot Expert",
                ".NET API Architect",
                "Cloud & Azure Enthusiast",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 mb-10 leading-7 max-w-lg"
          >
            Building scalable enterprise web applications with clean
            architecture, modern frameworks, and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setOpen(true)}
              className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent2 text-black font-semibold hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Hire Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full border border-white/20 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 text-center"
            >
              View Work
            </a>
          </motion.div>

          <ContactModal open={open} setOpen={setOpen} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-gray-500/50 flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
