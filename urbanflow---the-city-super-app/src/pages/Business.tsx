import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  BarChart3, 
  Code2, 
  Gift, 
  Leaf, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function Business() {
  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-20">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full md:w-1/2"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">UrbanFlow for Enterprise</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Modern cities, <br />
            <span className="text-blue-600">better business.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">Give your employees, clients, and partners the power of UrbanFlow. Streamline operations with our integrated corporate ecosystem.</p>
          <div className="flex gap-4">
             <button className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl">Contact Sales</button>
             <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all">Request Demo</button>
          </div>
        </motion.div>
        
        <div className="w-full md:w-1/2 relative bg-gray-50 rounded-[56px] p-12 overflow-hidden border border-gray-100 flex items-center justify-center">
            <div className="relative z-10 w-full space-y-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white"><Building2 className="w-4 h-4" /></div>
                      <span className="text-xs font-bold text-gray-800">Corp-Dashboard</span>
                   </div>
                   <div className="flex items-end gap-1">
                      <div className="w-1.5 h-4 bg-gray-100 rounded-full"></div>
                      <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                      <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
                   </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                   <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white"><Leaf className="w-4 h-4" /></div>
                   <div className="flex-1">
                      <div className="h-2 bg-gray-100 rounded-full w-full mb-1"></div>
                      <div className="h-2 bg-green-500 rounded-full w-2/3"></div>
                   </div>
                   <span className="text-[10px] font-black text-green-600">-12% CO2</span>
                </div>
                <div className="bg-[#171717] p-8 rounded-[32px] text-white shadow-2xl relative">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Omni API Status</p>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-[#BEF264] rounded-full animate-pulse"></div>
                       <p className="text-sm font-mono tracking-tighter">API V2.0 // Active_Production</p>
                    </div>
                </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-4xl font-bold mb-16 italic text-center">Engineered for Scale.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
           <div className="space-y-6">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0"><Gift className="w-8 h-8" /></div>
              <h4 className="text-2xl font-bold">Employee Perks</h4>
              <p className="text-gray-500 leading-relaxed">Provide stipends for daily commutes and team lunches. Boost employee satisfaction with the world's most versatile city perk.</p>
           </div>
           <div className="space-y-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0"><BarChart3 className="w-8 h-8" /></div>
              <h4 className="text-2xl font-bold">Smart Analytics</h4>
              <p className="text-gray-500 leading-relaxed">Centralized billing and carbon footprint tracking. Gain deep insights into your organization's mobility and consumption patterns.</p>
           </div>
           <div className="space-y-6">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0"><Code2 className="w-8 h-8" /></div>
              <h4 className="text-2xl font-bold">Courier API</h4>
              <p className="text-gray-500 leading-relaxed">Integrate UrbanFlow logistics directly into your checkout flow. Power your local delivery needs with our high-speed courier network.</p>
           </div>
        </div>
      </section>

      {/* API Visual Callout */}
      <section className="max-w-7xl mx-auto mb-20 bg-[#171717] rounded-[48px] p-20 text-white flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
         <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
               <div className="w-2 h-2 bg-[#BEF264] rounded-full"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest">Developer First</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 italic tracking-tighter leading-none">Your logistics, <br /> automated.</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">Connect your e-commerce or local business directly to our fleet. Our REST API allows for instant delivery scheduling, tracking updates, and automated fulfillment.</p>
            <div className="flex gap-4">
               <Link to="/download-hub" className="px-6 py-3 bg-[#BEF264] text-black font-bold rounded-xl flex items-center gap-2 shadow-xl hover:bg-[#a3d64f] transition-all">Documentation <ArrowRight className="w-4 h-4" /></Link>
               <Link to="/download-hub" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 transition-all">Get API Key</Link>
            </div>
         </div>
         
         <div className="w-full lg:w-1/2">
            <div className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-white/10 font-mono text-sm group">
               <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
               </div>
               <div className="space-y-1">
                  <p className="text-blue-400"><span className="text-white">POST</span> https://api.urbanflow.com/v2/logistics/delivery</p>
                  <p className="text-gray-500">{'{'}</p>
                  <p className="pl-4 text-emerald-400">"origin": <span className="text-gray-300">"500 Broadway, NY"</span>,</p>
                  <p className="pl-4 text-emerald-400">"destination": <span className="text-gray-300">"12 Wall St, NY"</span>,</p>
                  <p className="pl-4 text-emerald-400">"item_type": <span className="text-gray-300">"parcel"</span>,</p>
                  <p className="pl-4 text-emerald-400">"priority": <span className="text-gray-300">"high"</span></p>
                  <p className="text-gray-500">{'}'}</p>
               </div>
               <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/5 text-[10px] text-gray-500">
                  <span>Server: London-West-2</span>
                  <span className="text-[#BEF264]">Status: 200 OK</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
