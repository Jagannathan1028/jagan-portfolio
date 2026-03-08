
export default function Section({id,title,children}){
 return(
 <section id={id} className="py-24 px-6 bg-[#0b1220]">
  <div className="max-w-6xl mx-auto">
   <h2 className="text-3xl font-bold mb-12 text-accent">{title}</h2>
   {children}
  </div>
 </section>
 )
}
