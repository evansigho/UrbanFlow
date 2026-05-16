import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Fingerprint, 
  PhoneCall, 
  Lock, 
  Users, 
  AlertTriangle,
  ChevronRight,
  Heart
} from "lucide-react";

export default function Safety() {
  const policies = [
    {
      title: "Biometric Verification",
      desc: "Every driver and service pro must pass daily biometric identity checks to ensure the person arriving is exactly who you expect.",
      icon: Fingerprint,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "24/7 Support & SOS",
      desc: "Our dedicated safety team is available every second. Use the emergency 'SOS' button in-app for instant assistance and location sharing.",
      icon: PhoneCall,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Military-Grade Encryption",
      desc: "Your location history and payment data are encrypted with the highest industry standards. We value your privacy as much as your safety.",
      icon: Lock,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Zero-Tolerance Policy",
      desc: "UrbanFlow maintains a strict zero-tolerance code for harassment and discrimination. Every member of our community deserves respect.",
      icon: Users,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <section className="max-w-7xl mx-auto mb-32 flex flex-col items-center text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl"
         >
           <div className="w-16 h-16 bg-[#BEF264] rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-sm">
             <ShieldCheck className="w-10 h-10 text-black" />
           </div>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 italic">Trust is our <br /> <span className="text-gray-400">core frequency.</span></h1>
           <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">Safety isn't a feature; it's the foundation. We've built the most comprehensive trust ecosystem in the urban mobility space.</p>
         </motion.div>
      </section>

      {/* Policy Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        {policies.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 group"
          >
            <div className={`w-16 h-16 rounded-3xl shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 ${p.color}`}>
               <p.icon className="w-8 h-8" />
            </div>
            <div>
               <h4 className="text-2xl font-bold mb-3">{p.title}</h4>
               <p className="text-gray-500 leading-relaxed max-w-lg">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* SOS Visual Callout */}
      <section className="max-w-7xl mx-auto mb-32 bg-red-600 rounded-[48px] p-20 text-white relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
               <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">In-App Protection</span>
               <h2 className="text-5xl font-black italic mb-8 tracking-tight leading-none">The SOS Center.</h2>
               <p className="text-white/80 text-lg mb-10 leading-relaxed">During every trip or service visit, our SOS button is always visible. Tapping it instantly routes your location and audio to our 24/7 Response Center and your emergency contacts.</p>
               <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl flex items-center gap-2 shadow-xl hover:scale-[1.02] transition-all">
                  Safety Guidelines <ChevronRight className="w-4 h-4" />
               </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.4)] animate-pulse">
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                     <AlertTriangle className="w-12 h-12 text-red-600" />
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute right-[-10%] top-[-10%] w-96 h-96 border-[60px] border-white/5 rounded-full"></div>
      </section>

      {/* Community */}
      <section className="max-w-4xl mx-auto text-center pb-20">
         <h3 className="text-3xl font-bold mb-8">A Community of Care</h3>
         <p className="text-gray-500 text-lg mb-12">We believe safety is a shared responsibility. From rating every experience to following our inclusive community guidelines, every UrbanFlow member plays a role in keeping the city moving safely.</p>
         <div className="flex justify-center gap-8 items-center text-[#22C55E]">
            <div className="flex flex-col items-center">
               <Heart className="w-8 h-8 fill-current" />
               <p className="text-xs font-black uppercase mt-2 tracking-widest">Support Each Other</p>
            </div>
         </div>
      </section>
    </div>
  );
}
