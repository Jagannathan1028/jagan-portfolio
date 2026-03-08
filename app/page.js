
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Section from "../components/Section"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home(){
 return(
 <>
  <Navbar/>
  <Hero/>
  

  <Section id="about" title="About Me">
  <div className="max-w-3xl mx-auto px-6">
    <p className="text-gray-300 leading-8 text-justify">
      I am a Full Stack Developer with hands-on experience in designing and building enterprise-grade web applications. My expertise spans frontend engineering, backend services, and API integrations, enabling me to deliver complete, scalable solutions.

      <br /><br />

      I specialize in Angular for dynamic user interfaces, Java Spring Boot for robust backend systems, and .NET APIs for seamless service integration. I focus on writing clean, maintainable code and building systems that are reliable, efficient, and user-friendly.

      <br /><br />

      I enjoy solving complex business problems through technology and continuously improving my skills in modern web architecture and emerging tools.
    </p>
  </div>
</Section>

  <Section id="skills" title="Technical Skills">
  <div className="grid md:grid-cols-2 gap-10">

    {/* Frontend */}
    <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-4 text-accent">Frontend</h3>
      <ul className="space-y-2 text-gray-300">
        <li>Angular</li>
        <li>TypeScript</li>
        <li>HTML5 / CSS3</li>
        <li>Responsive UI Design</li>
      </ul>
    </div>

    {/* Backend */}
    <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-4 text-accent">Backend</h3>
      <ul className="space-y-2 text-gray-300">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>.NET Core</li>
        <li>REST API Development</li>
      </ul>
    </div>

    {/* Database */}
    <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-4 text-accent">Database</h3>
      <ul className="space-y-2 text-gray-300">
        <li>SQL Server</li>
        <li>MySQL</li>
      </ul>
    </div>

    {/* Tools & Platforms */}
    <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-4 text-accent">Tools & Platforms</h3>
      <ul className="space-y-2 text-gray-300">
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>VS Code</li>
        <li>Azure</li>
        <li>Vercel Deployment</li>
      </ul>
    </div>

  </div>
</Section>

  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-3 gap-6">
      {["LTA Approval System","Muster Roll Reporting","Enterprise HR Portal"].map(p=>(
        <div key={p} className="p-6 bg-white/5 rounded-xl">{p}</div>
      ))}
    </div>
  </Section>
      <WhatsAppButton />
  <Footer/>
 </>
 )
}
