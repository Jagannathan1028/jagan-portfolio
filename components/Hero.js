"use client";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
   <section
  className="min-h-screen flex items-center relative"
  style={{
    backgroundImage: "url('/hero-desktop.png')",
    backgroundSize: "contain",      // show full image
    backgroundPosition: "center top", // keep image below navbar
    backgroundRepeat: "no-repeat",
    paddingTop: "96px"              // navbar height space (adjust if needed)
  }}
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Empty left column for desktop spacing */}
        <div></div>

        {/* Right Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-300 mb-2"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Jagannathan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-300 mb-4"
          >
            Full Stack Developer building scalable enterprise web applications
          </motion.h2>

          <p className="text-gray-400 mb-10 leading-7">
            Specialized in Angular, Java Spring Boot, and .NET APIs.  
            Focused on performance, clean architecture, and modern user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 rounded bg-accent2 text-white font-semibold hover:scale-110 transition"
            >
              Hire Me
            </button>

            <button className="px-8 py-3 rounded border border-white/40 hover:bg-white/10 transition">
              View Work
            </button>
          </div>

          <ContactModal open={open} setOpen={setOpen} />
        </div>
      </div>
    </section>
  );
}