import { motion } from "motion/react";
import { 
  Zap, 
  Map, 
  ShieldCheck, 
  Smartphone, 
  Heart, 
  Coffee, 
  Globe, 
  Briefcase,
  ArrowRight,
  Plus
} from "lucide-react";

export default function Careers() {
  const departments = [
    {
      name: "Engineering & AI",
      desc: "Architect the routing engines, neural networks, and the Omni-Wallet that powers the city.",
      icon: Zap,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      name: "Operations",
      desc: "City Managers and logistic experts who launch and scale UrbanFlow in new territories.",
      icon: Map,
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "Trust & Safety",
      desc: "Design the vetting processes and biometric protocols for our Pros and Drivers.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      name: "Product & Design",
      desc: "Perfecting the one-tap user experience and making complexity feel simple.",
      icon: Smartphone,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-32 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-[#BEF264]/20 text-[#064E3B] text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Join the Movement</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          Don't just build <span className="text-gray-400 italic">an app.</span><br />
          <span className="text-[#22C55E]">Orchestrate a city.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          UrbanFlow is the nervous system of the modern metropolis. We're looking for thinkers, builders, and dreamers to redefine how cities breathe.
        </p>
      </motion.section>

      {/* Culture / Values */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { t: "Radical Simplicity", d: "We solve complex problems so our users don't have to." },
          { t: "Human-Centric Safety", d: "Security isn't a checkbox; it's our first principle." },
          { t: "Urban Efficiency", d: "We build for speed, sustainability, and reliability." },
        ].map((v, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-2xl font-bold italic">{v.t}</h3>
            <p className="text-gray-500 font-medium leading-relaxed">{v.d}</p>
          </div>
        ))}
      </section>

      {/* Perks */}
      <section className="bg-white rounded-[56px] p-12 md:p-20 border border-gray-100 mb-32 relative overflow-hidden text-center md:text-left">
        <h2 className="text-4xl font-bold mb-16 italic">Life at UrbanFlow.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Globe className="w-8 h-8 text-blue-500" />
            <h5 className="font-bold">Work Anywhere</h5>
            <p className="text-gray-500 text-xs font-medium">Remote-first culture for all tech teams.</p>
          </div>
          <div className="space-y-4">
            <Heart className="w-8 h-8 text-red-500" />
            <h5 className="font-bold">Wellness Stipend</h5>
            <p className="text-gray-500 text-xs font-medium">Monthly credits for gym and therapy.</p>
          </div>
          <div className="space-y-4">
            <Coffee className="w-8 h-8 text-orange-500" />
            <h5 className="font-bold">Learning Budget</h5>
            <p className="text-gray-500 text-xs font-medium">Unlimited books and course access.</p>
          </div>
          <div className="space-y-4">
            <Zap className="w-8 h-8 text-[#22C55E]" />
            <h5 className="font-bold">Flow Credits</h5>
            <p className="text-gray-500 text-xs font-medium">Free UrbanRide & Eats for all staff.</p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="mb-32">
        <h2 className="text-4xl font-bold mb-16">Open Departments.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, i) => (
            <motion.div 
               key={i}
               whileHover={{ x: 10 }}
               className="p-10 bg-white rounded-[40px] border border-gray-50 shadow-sm flex flex-col md:flex-row gap-8 items-start group cursor-pointer transition-all hover:bg-gray-50"
            >
               <div className={`w-16 h-16 rounded-3xl shrink-0 flex items-center justify-center ${dept.color}`}>
                  <dept.icon className="w-8 h-8" />
               </div>
               <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3">{dept.name}</h4>
                  <p className="text-gray-500 font-medium mb-6 leading-relaxed">{dept.desc}</p>
                  <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:text-black transition-colors">
                    View roles <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CV Submission */}
      <section className="bg-[#171717] rounded-[56px] p-20 text-white text-center">
         <div className="w-16 h-16 bg-[#BEF264] rounded-full flex items-center justify-center mx-auto mb-10 text-black">
            <Plus className="w-8 h-8" />
         </div>
         <h2 className="text-4xl font-bold mb-6 italic">Don't see a role?</h2>
         <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">We're always looking for talent that doesn't fit in a box. Send us your CV and tell us why you're a perfect fit.</p>
         <button className="px-10 py-5 bg-[#BEF264] text-black font-bold rounded-2xl flex items-center gap-3 mx-auto shadow-glow hover:scale-105 transition-all">
            Join the Talent Pool <ArrowRight className="w-6 h-6" />
         </button>
      </section>
    </div>
  );
}
