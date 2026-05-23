import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Car, 
  ShoppingBag, 
  Truck, 
  Wrench, 
  Plus, 
  ArrowRight, 
  ShieldCheck, 
  Wallet, 
  Key,
  Smartphone
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "UrbanRide",
      desc: "Instant mobility for every occasion. From eco-friendly shared rides to luxury town cars.",
      icon: Car,
      color: "bg-[#171717]",
      textColor: "text-white",
      path: "/ride",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "UrbanEats",
      desc: "The city's best cuisine and grocery essentials delivered to your door in minutes.",
      icon: ShoppingBag,
      color: "bg-[#BEF264]",
      textColor: "text-black",
      path: "/eats",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "UrbanPro",
      desc: "Vetted professionals for your home. Plumbing, electrical, cleaning and more.",
      icon: Wrench,
      color: "bg-[#22C55E]",
      textColor: "text-white",
      path: "/pro",
      image: "https://images.unsplash.com/photo-1581578731522-5b17b8827ead?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "UrbanDash",
      desc: "On-demand local logistics. Send documents or large items across town instantly.",
      icon: Truck,
      color: "bg-blue-500",
      textColor: "text-white",
      path: "/services",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-6 tracking-wide uppercase">
            Product Ecosystem
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            The Power of the City <br />
            <span className="text-gray-400 font-normal italic">in Your Pocket.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            UrbanFlow is more than an app. It's a unified operating system for urban life, bringing disparate services together into one seamless experience.
          </p>
        </motion.div>
      </section>

      {/* Service Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${s.color} ${s.textColor} rounded-[40px] p-10 h-[400px] flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
               <img 
                 src={s.image} 
                 alt={s.title} 
                 className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className={`absolute inset-0 ${s.color === 'bg-[#BEF264]' ? 'bg-gradient-to-t from-[#BEF264] via-[#BEF264]/80 to-transparent' : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'}`}></div>
            </div>

            <div className="relative z-10">
               <div className={`w-14 h-14 rounded-2xl ${s.color === 'bg-[#BEF264]' ? 'bg-black text-white' : 'bg-white/10 text-white'} flex items-center justify-center mb-8`}>
                  <s.icon className="w-8 h-8" />
               </div>
               <h3 className="text-4xl font-bold mb-4">{s.title}</h3>
               <p className="opacity-80 max-w-sm text-lg leading-relaxed">{s.desc}</p>
            </div>
            <div className="relative z-10 border-t border-white/10 pt-6 flex justify-between items-center px-2">
               <Link to="/download-hub" className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                  Get Started <ArrowRight className="w-5 h-5" />
               </Link>
               <span className="text-6xl opacity-10 font-black italic">0{i+1}</span>
            </div>
            
            {/* Background shape */}
            <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:scale-125 transition-transform"></div>
          </motion.div>
        ))}
      </section>

      {/* The Omni Advantage */}
      <section className="max-w-5xl mx-auto bg-white rounded-[48px] border border-gray-100 p-12 md:p-20 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-16 relative z-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The 'Omni' Advantage</h2>
            <p className="text-gray-500 text-lg mb-8">Experience true urban efficiency with our unified platform infrastructure. No more switching between dozens of apps.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-blue-900 leading-none">Unified Wallet</h4>
                  <p className="text-sm text-gray-400">One balance for your ride, your lunch, and your repairs. Seamless transactions across all services.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#BEF264]/20 text-[#064E3B] rounded-xl flex items-center justify-center shrink-0">
                  <Key className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-[#064E3B] leading-none">Single Sign-On (SSO)</h4>
                  <p className="text-sm text-gray-400">One account, one verification level. Your data stays secure and ready whenever you need any service.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full aspect-square bg-[#F9FAF5] rounded-[40px] flex items-center justify-center border-4 border-dashed border-gray-200 group">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-48 h-48 border-2 border-[#22C55E]/30 rounded-full flex items-center justify-center p-4 relative"
               >
                  <div className="absolute top-0 -translate-y-1/2 w-8 h-8 bg-black rounded-lg text-white flex items-center justify-center"><Car className="w-4 h-4" /></div>
                  <div className="absolute right-0 translate-x-1/2 w-8 h-8 bg-[#BEF264] rounded-lg text-black flex items-center justify-center"><ShoppingBag className="w-4 h-4" /></div>
                  <div className="absolute bottom-0 translate-y-1/2 w-8 h-8 bg-[#22C55E] rounded-lg text-white flex items-center justify-center"><Wrench className="w-4 h-4" /></div>
                  <div className="absolute left-0 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-lg text-white flex items-center justify-center"><Truck className="w-4 h-4" /></div>
                  
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="w-10 h-10 text-gray-800" />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background text */}
        <div className="absolute bottom-[-10%] right-[-5%] text-[120px] font-black italic opacity-[0.02] select-none pointer-events-none">OMNI FLOW</div>
      </section>
    </div>
  );
}
