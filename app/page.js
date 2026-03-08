
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
  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="bg-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300">
      <div className="overflow-hidden">
        <img
          src="/projects/hospital_website.png"
          alt="Hospital Website"
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Hospital Management Website</h3>
        <p className="text-gray-400 text-sm leading-6">
          A healthcare web platform for managing appointments, patient records,
          doctor schedules, and hospital services with a responsive interface.
        </p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300">
      <div className="overflow-hidden">
        <img
          src="/projects/grocery_website.png"
          alt="Grocery Shopping Website"
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Online Grocery Shopping Website</h3>
        <p className="text-gray-400 text-sm leading-6">
          An e-commerce grocery platform with product catalog, cart system,
          secure checkout, and order tracking for seamless online shopping.
        </p>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300">
      <div className="overflow-hidden">
        <img
          src="/projects/portfolio_website.png"
          alt="Portfolio Website"
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Personal Portfolio Website</h3>
        <p className="text-gray-400 text-sm leading-6">
          A modern developer portfolio showcasing projects, technical skills,
          and contact features with responsive design and smooth animations.
        </p>
      </div>
    </div>

  </div>
</Section>
      <WhatsAppButton />
  <Footer/>
 </>
 )
}
