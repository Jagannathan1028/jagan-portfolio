import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import StatsCounter from "@/components/StatsCounter";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";
import {
  FaAngular,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCode,
  FaCloud,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDotnet,
  SiTypescript,
  SiMysql,
  SiPostman,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    icon: FaAngular,
    color: "from-red-500 to-red-700",
    items: [
      { name: "Angular", icon: FaAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5 / CSS3", icon: FaHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive UI Design", icon: null },
    ],
  },
  {
    category: "Backend",
    icon: SiSpringboot,
    color: "from-green-500 to-green-700",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: ".NET Core", icon: SiDotnet },
      { name: "REST API Development", icon: null },
    ],
  },
  {
    category: "Database",
    icon: FaDatabase,
    color: "from-blue-500 to-blue-700",
    items: [
      { name: "SQL Server", icon: FaDatabase },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: FaGitAlt,
    color: "from-purple-500 to-purple-700",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: FaCode },
      { name: "Azure", icon: FaCloud },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

const projects = [
  {
    title: "Hospital Management Website",
    description:
      "Healthcare platform for appointments, patient records, doctor schedules, and hospital service management.",
    image: "/projects/hospital_website.png",
    tags: ["Angular", "Spring Boot", "SQL Server", "REST API"],
  },
  {
    title: "Online Grocery Shopping Website",
    description:
      "E-commerce grocery platform with product catalog, cart system, secure checkout, and order tracking.",
    image: "/projects/grocery_website.png",
    tags: [".NET Core", "Angular", "MySQL", "Azure"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern developer portfolio showcasing projects, technical skills, and integrated contact features.",
    image: "/projects/portfolio_website.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <Hero />

      {/* Stats Section */}
      <StatsCounter />

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl md:max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent2/30 rounded-br-2xl" />

              <p className="text-gray-300 leading-8 text-justify text-base md:text-lg">
                I am a Full Stack Developer with hands-on experience in
                designing and building enterprise-grade web applications. My
                expertise spans frontend engineering, backend services, and API
                integrations, enabling me to deliver complete, scalable
                solutions.
              </p>

              <div className="my-6 w-16 h-px bg-gradient-to-r from-accent to-accent2 mx-auto" />

              <p className="text-gray-300 leading-8 text-justify text-base md:text-lg">
                I specialize in Angular for dynamic user interfaces, Java Spring
                Boot for robust backend systems, and .NET APIs for seamless
                service integration. I focus on writing clean, maintainable code
                and building systems that are reliable, efficient, and
                user-friendly.
              </p>

              <div className="my-6 w-16 h-px bg-gradient-to-r from-accent to-accent2 mx-auto" />

              <p className="text-gray-300 leading-8 text-justify text-base md:text-lg">
                I enjoy solving complex business problems through technology and
                continuously improving my skills in modern web architecture and
                emerging tools.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <ScrollReveal
              key={skill.category}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.1}
            >
              <div className="group relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 hover:bg-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                  >
                    <skill.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {skill.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      {item.icon ? (
                        <item.icon className="text-accent/60" size={16} />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                      )}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} direction="up" delay={i * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500 bg-white/5">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-6 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-accent2/10 blur-xl" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <WhatsAppButton />
      <ChatBot />
      <BackToTop />
      <Footer />
    </>
  );
}
