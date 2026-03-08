
export default function Navbar(){
 return(
 <nav className="fixed w-full z-50 glass">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
   <h1 className="text-2xl font-bold tracking-wider text-accent">PORTFOLIO</h1>
   <div className="space-x-8 text-sm">
    <a href="#about" className="hover:text-accent">About</a>
    <a href="#skills" className="hover:text-accent">Skills</a>
    <a href="#projects" className="hover:text-accent">Projects</a>
   </div>
  </div>
 </nav>
 )
}
