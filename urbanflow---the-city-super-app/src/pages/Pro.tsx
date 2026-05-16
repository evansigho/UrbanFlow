import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Droplets, 
  Zap, 
  Wind, 
  Paintbrush, 
  Trash2, 
  Hammer, 
  ShieldCheck, 
  Clock, 
  Camera, 
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

export default function Pro() {
  const categories = [
    { name: "Plumbing", icon: Droplets, color: "bg-blue-50 text-blue-600" },
    { name: "Electrical", icon: Zap, color: "bg-yellow-50 text-yellow-600" },
    { name: "HVAC", icon: Wind, color: "bg-cyan-50 text-cyan-600" },
    { name: "Painting", icon: Paintbrush, color: "bg-purple-50 text-purple-600" },
    { name: "Cleaning", icon: Trash2, color: "bg-emerald-50 text-emerald-600" },
    { name: "Handyman", icon: Hammer, color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full md:w-1/2"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">UrbanPro Services</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The city's finest, <br />
            <span className="text-blue-600 italic">certified & ready.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">UrbanPro connects you with top-tier local professionals for any home need. Vetted, licensed, and UrbanFlow-certified.</p>
          <div className="flex gap-4">
             <Link to="/download-hub" className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl">Book a Pro Now</Link>
             <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all">Business Inquiry</button>
          </div>
        </motion.div>
        
        <div className="w-full md:w-1/2 relative p-4">
           <div className="absolute inset-0 bg-blue-100/50 rounded-[40px] -rotate-2"></div>
           <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 z-10 rotate-1">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-white" />
                 </div>
                 <div>
                    <h5 className="text-xl font-black italic uppercase tracking-tighter">Trust Factor</h5>
                    <p className="text-xs text-gray-400 font-bold">Safe • Vetted • Licensed</p>
                 </div>
              </div>
              <div className="space-y-6">
                 {[
                   "Background-checked Professionals",
                   "Licensed & Insured for all labor",
                   "UrbanFlow Certified training",
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-3 font-bold text-sm text-gray-700">
                      <div className="w-5 h-5 bg-[#BEF264] rounded-full flex items-center justify-center"><CheckCircle className="w-3 h-3 text-black" /></div>
                      {t}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-4xl font-bold mb-12 italic">Common Expertise.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((c, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -5, scale: 1.02 }}
               className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group cursor-pointer transition-all"
            >
               <div className={`p-4 rounded-2xl mb-4 transition-colors ${c.color} group-hover:bg-[#171717] group-hover:text-white`}>
                  <c.icon className="w-6 h-6" />
               </div>
               <p className="font-bold text-sm">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Flow */}
      <section className="max-w-7xl mx-auto mb-32">
         <div className="bg-[#171717] rounded-[48px] p-20 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 italic tracking-tight underline decoration-[#BEF264] decoration-4 underline-offset-8">Problem solved. In 3 steps.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -z-0 hidden md:block"></div>
               {[
                 { step: "01", icon: Camera, title: "Snap a Photo", desc: "Show us the problem through the app. A picture is worth a thousand diagnostic words." },
                 { step: "02", icon: Zap, title: "Get Instant Quote", desc: "No more ballpark guesses. Get a fixed-price quote based on your specific issue." },
                 { step: "03", icon: Clock, title: "Arrival <60 Mins", desc: "Your Pro arrives at your doorstep in under an hour, or at a time that suits you." },
               ].map((s, i) => (
                 <div key={i} className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#BEF264] text-black rounded-full flex items-center justify-center mb-6 font-black text-xl shadow-glow">
                       <s.icon className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-[#BEF264] uppercase tracking-widest mb-4">Step {s.step}</span>
                    <h5 className="text-2xl font-bold mb-4">{s.title}</h5>
                    <p className="text-sm text-gray-400 max-w-xs">{s.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Warranty */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 pb-20">
         <div className="w-full md:w-1/3">
            <div className="relative">
               <div className="w-48 h-48 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center p-4">
                  <div className="w-full h-full border-4 border-white/20 rounded-full rotate-45 flex items-center justify-center">
                     <ShieldCheck className="w-20 h-20 text-white" />
                  </div>
               </div>
               <div className="absolute -bottom-4 -right-10 bg-[#BEF264] text-black px-6 py-3 rounded-2xl rotate-[-10deg] font-black italic shadow-xl">
                  GUARANTEED
               </div>
            </div>
         </div>
         <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold mb-6">The UrbanFlow Labor Guarantee</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">Every UrbanPro job is backed by our comprehensive labor warranty. If the fix doesn't hold, we'll return and make it right at no extra cost to you. Total peace of mind for every spark, splash, and spill.</p>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">4.9/5 Average Rating</span>
               </div>
               <div className="w-px h-6 bg-gray-200"></div>
               <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <span className="font-bold font-mono">INSURED WORK</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
