"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Independent",
    description:
      "Building enterprise-grade web applications with Angular, Spring Boot, and .NET. Delivering end-to-end solutions for diverse clients.",
    tech: ["Angular", "Spring Boot", ".NET", "SQL Server"],
  },
  {
    year: "2023 - 2024",
    role: "Software Developer",
    company: "Project-Based Work",
    description:
      "Developed healthcare and e-commerce platforms. Focused on scalable backend APIs and responsive frontend interfaces.",
    tech: ["Java", "REST APIs", "MySQL", "TypeScript"],
  },
  {
    year: "2022 - 2023",
    role: "Junior Developer",
    company: "Early Career",
    description:
      "Started professional journey building web applications. Gained hands-on experience with modern frameworks and agile methodologies.",
    tech: ["HTML/CSS", "JavaScript", "Git", "Azure"],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`relative flex items-center mb-16 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-col md:flex-row`}
        >
          <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 hover:bg-white/10 group">
              <span className="text-accent text-sm font-orbitron font-semibold">
                {exp.year}
              </span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-accent transition-colors">
                {exp.role}
              </h3>
              <p className="text-accent2 text-sm mt-1">{exp.company}</p>
              <p className="text-gray-400 text-sm mt-3 leading-6">
                {exp.description}
              </p>
              <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-[#0b1220] z-10 hidden md:block" />
        </motion.div>
      ))}
    </div>
  );
}
