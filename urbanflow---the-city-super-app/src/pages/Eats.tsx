import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  Utensils, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Star, 
  Search,
  Timer,
  CheckCircle,
  Truck
} from "lucide-react";

export default function Eats() {
  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-32 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-[#BEF264]/20 text-[#064E3B] text-xs font-bold rounded-full mb-6 uppercase tracking-widest">UrbanEats & FreshMART</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The city's kitchen, <br />
            <span className="text-[#22C55E]">always open.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            From your favorite local bistro to daily grocery essentials, we deliver anything you crave to your doorstep—fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/download-hub" className="px-10 py-5 bg-black text-white font-bold rounded-2xl flex items-center gap-3 justify-center shadow-2xl hover:scale-105 transition-all">
                <Utensils className="w-6 h-6" /> Browse Nearby Menus
             </Link>
             <Link to="/download-hub" className="px-10 py-5 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl flex items-center gap-3 justify-center hover:bg-gray-50 transition-all">
                <ShoppingBag className="w-6 h-6" /> Shop FreshMART
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Two Pillars: Restaurants vs FreshMART */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Restaurants</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">From local gems to global icons. Every neighborhood treasure is just one tap away.</p>
              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" /> Verified Menu Pricing
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" /> Exclusive UrbanFlow Deals
                 </div>
              </div>
              <Link to="/download-hub" className="flex items-center gap-2 font-bold text-[#22C55E]">Explore Restaurants <ArrowRight className="w-4 h-4" /></Link>
           </div>
           <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all opacity-40 group-hover:opacity-100">
              <img src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=600" alt="Food" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
           </div>
        </div>

        <div className="bg-[#171717] rounded-[40px] p-12 text-white shadow-xl relative overflow-hidden group">
           <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#BEF264] text-black text-[10px] font-black rounded-full mb-4 uppercase tracking-tighter italic">20 Min Delivery</span>
              <h2 className="text-3xl font-bold mb-4">FreshMART</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">Grocery staples delivered in under 20 minutes. Fresh produce, milk, eggs, and more.</p>
              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-300">
                    <Timer className="w-4 h-4 text-[#BEF264]" /> Hyper-local Micro-hubs
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-300">
                    <Timer className="w-4 h-4 text-[#BEF264]" /> Quality Freshness Guarantee
                 </div>
              </div>
              <Link to="/download-hub" className="flex items-center gap-2 font-bold text-[#BEF264]">Shop Groceries <ArrowRight className="w-4 h-4" /></Link>
           </div>
           <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all opacity-40 group-hover:opacity-100">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" alt="Groceries" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
           </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2">
           <h3 className="text-4xl font-bold mb-8">Follow every bite.</h3>
           <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">Experience true peace of mind with our military-grade logistics tracking. From the moment the ticket is printed to the knock on your door.</p>
           
           <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-[#F9FAF5] rounded-3xl border border-gray-100">
                 <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Clock className="w-5 h-5 text-[#22C55E]" />
                 </div>
                 <h5 className="font-bold mb-1">Live Prep Status</h5>
                 <p className="text-xs text-gray-400">See exactly when your meal enters the kitchen.</p>
              </div>
              <div className="p-6 bg-[#F9FAF5] rounded-3xl border border-gray-100">
                 <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#22C55E]" />
                 </div>
                 <h5 className="font-bold mb-1">Precise Location</h5>
                 <p className="text-xs text-gray-400">Real-time GPS tracking of your delivery partner.</p>
              </div>
           </div>
        </div>

        <div className="w-full md:w-1/2">
           <div className="bg-white p-8 rounded-[40px] shadow-[0_50px_100px_-30px_rgba(34,197,94,0.1)] border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                 <div>
                    <h6 className="font-bold text-xl uppercase tracking-tighter leading-none italic">Delivery Tracking</h6>
                    <p className="text-xs text-gray-400 mt-1 font-medium italic">Order #UF-89302</p>
                 </div>
                 <div className="w-12 h-12 bg-[#F9FAF5] rounded-2xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-[#22C55E]" />
                 </div>
              </div>
              
              <div className="space-y-6">
                 {[
                    {t: "Order Confirmed", d: "12:30 PM", a: true},
                    {t: "Preparing your food", d: "12:35 PM", a: true},
                    {t: "Out for delivery", d: "12:45 PM", a: true},
                    {t: "Arriving soon", d: "Estimated 12:55 PM", a: false},
                 ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start relative pb-6 last:pb-0">
                       {!step.a && <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-gray-100 border-dashed border-l-2"></div>}
                       {step.a && idx !== 3 && <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-[#22C55E]"></div>}
                       <div className={`w-5 h-5 rounded-full z-10 flex items-center justify-center border-2 border-white ${step.a ? 'bg-[#22C55E]' : 'bg-gray-100'}`}>
                          {step.a && <CheckCircle className="w-3 h-3 text-white" />}
                       </div>
                       <div className="flex-1">
                          <p className={`text-sm font-bold ${step.a ? 'text-black' : 'text-gray-300'}`}>{step.t}</p>
                          <p className={`text-[10px] font-medium ${step.a ? 'text-gray-400' : 'text-gray-300'}`}>{step.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
