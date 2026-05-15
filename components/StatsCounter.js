"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function AnimatedNumber({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 5, suffix: "+" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent2/5" />
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-orbitron">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              {stat.label}
            </p>
            <div className="mt-3 mx-auto w-12 h-0.5 bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
