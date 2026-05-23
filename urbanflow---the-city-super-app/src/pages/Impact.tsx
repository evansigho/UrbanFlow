import { motion } from "motion/react";
import { 
  Leaf, 
  Store, 
  Eye, 
  Heart, 
  ArrowRight,
  Globe,
  Zap
} from "lucide-react";

export default function Impact() {
  const pillars = [
    {
      title: "Sustainability",
      desc: "We're on a mission to zero. 100% EV commitment by 2030 and carbon neutral deliveries starting today.",
      icon: Leaf,
      color: "bg-green-50 text-green-600",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Local Economy",
      desc: "Empowering small businesses. Over 60% of our merchant partners are local, independent shops that grow with us.",
      icon: Store,
      color: "bg-blue-50 text-blue-600",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Accessibility",
      desc: "A city for everyone. Features for blind and low-vision users, and dedicated community rides for our seniors.",
      icon: Eye,
      color: "bg-orange-50 text-orange-600",
      image: "https://images.unsplash.com/photo-1573497620053-ea5310f94a17?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-32 text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">Our Responsibility</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Building a Better <br />
            <span className="text-gray-300 italic">City, Together.</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">UrbanFlow isn't just about moving people and things. It's about moving the needle on the issues that matter most to our urban environments.</p>
        </motion.div>
      </section>

      {/* Pillars Grid */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[40px] aspect-[4/5] flex flex-col justify-end p-10 text-white"
          >
            <div className="absolute inset-0 z-0">
               <img 
                 src={pillar.image} 
                 alt={pillar.title} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
               <div className={`w-12 h-12 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-bold mb-4">{pillar.title}</h3>
               <p className="text-white/70 font-medium leading-relaxed">{pillar.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Stats */}
      <section className="mb-32 bg-[#171717] rounded-[56px] p-12 md:p-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Zap className="w-6 h-6 text-[#BEF264]" />
              </div>
              <p className="text-5xl font-black mb-2 italic">100%</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">EV Target</p>
           </div>
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Heart className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-5xl font-black mb-2 italic">250K+</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Community Rides</p>
           </div>
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Store className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-5xl font-black mb-2 italic">$12M</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Merchant Support</p>
           </div>
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Globe className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-5xl font-black mb-2 italic">0</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Net Carbon</p>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
         <h2 className="text-4xl font-bold mb-8">Ready to make an impact?</h2>
         <p className="text-gray-500 mb-12 max-w-xl mx-auto font-medium">Join us in shaping the future of cities. Every ride and order contributes to a more sustainable and inclusive urban ecosystem.</p>
         <button className="px-10 py-5 bg-[#BEF264] text-black font-bold rounded-2xl text-xl shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2">
           Read Our 2026 Report <ArrowRight className="w-5 h-5" />
         </button>
      </section>
    </div>
  );
}
