import { motion } from "motion/react";
import { 
  Globe, 
  Target, 
  Users, 
  Smartphone,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-32 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Our Vision</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The city, <br />
            <span className="text-gray-400 italic">orchestrated.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">UrbanFlow was born from a simple question: Why is city life so fragmented? We set out to build a single, unified operating system for urban living.</p>
        </motion.div>
      </section>

      {/* Origin Story / Stats */}
      <section className="max-w-7xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         <div className="order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200" alt="Modern City" className="rounded-[40px] shadow-2xl" referrerPolicy="no-referrer" />
         </div>
         <div className="flex flex-col gap-10 order-1 md:order-2">
            <div>
               <h3 className="text-3xl font-bold mb-4">A unified future.</h3>
               <p className="text-gray-500 leading-relaxed">By 2030, 60% of the world's population will live in cities. Our mission is to ensure those cities work for everyone—efficiently, safely, and sustainably.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                  <p className="text-4xl font-black italic tracking-tighter">50+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Cities</p>
               </div>
               <div className="space-y-2">
                  <p className="text-4xl font-black italic tracking-tighter">4M+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Users</p>
               </div>
               <div className="space-y-2">
                  <p className="text-4xl font-black italic tracking-tighter">200K+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Partners</p>
               </div>
               <div className="space-y-2">
                  <p className="text-4xl font-black italic tracking-tighter">1B+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trips & Orders</p>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto mb-32 bg-white rounded-[56px] border border-gray-100 p-12 md:p-20 shadow-sm">
         <h2 className="text-4xl font-bold mb-16 italic text-center">Core Principles.</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
               <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8" />
               </div>
               <h4 className="text-2xl font-bold">Inclusivity</h4>
               <p className="text-gray-500 leading-relaxed text-sm font-medium">Urban services should be accessible to everyone, regardless of neighborhood, age, or ability. We design for the edge cases.</p>
            </div>
            <div className="space-y-6">
               <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8" />
               </div>
               <h4 className="text-2xl font-bold">Precision</h4>
               <p className="text-gray-500 leading-relaxed text-sm font-medium">In a city, seconds count. We prioritize high-accuracy logistics and real-time responsiveness in everything we build.</p>
            </div>
            <div className="space-y-6">
               <div className="w-14 h-14 bg-[#BEF264]/20 text-[#064E3B] rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8" />
               </div>
               <h4 className="text-2xl font-bold">Reliability</h4>
               <p className="text-gray-500 leading-relaxed text-sm font-medium">You should be able to rely on your city's super-app as surely as your own pulse. We build for 99.99% uptime.</p>
            </div>
         </div>
      </section>

      {/* Leadership / Visionary Callout */}
      <section className="max-w-4xl mx-auto text-center pb-20">
         <h3 className="text-3xl font-bold mb-8 italic italic">Moving as One.</h3>
         <p className="text-gray-500 text-lg mb-12">UrbanFlow is more than technology; it's a social contract between citizens, service providers, and the city itself. Join us as we build the first true digital commons for the modern metropolitan era.</p>
         <button className="px-10 py-5 bg-black text-white font-bold rounded-2xl flex items-center gap-3 mx-auto hover:bg-[#171717] transition-all group">
            See Careers <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
         </button>
      </section>
    </div>
  );
}
