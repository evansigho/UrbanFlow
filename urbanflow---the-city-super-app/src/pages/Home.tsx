import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Plus,
  Car, 
  ShoppingBag, 
  Truck, 
  MapPin, 
  ArrowRight, 
  Star, 
  Clock, 
  ShieldCheck, 
  Smartphone,
  ChevronRight,
  Menu
} from "lucide-react";

export default function Home() {
  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 px-4 py-0 flex items-center flex-col md:flex-row relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 bg-[#BEF264]/20 text-[#064E3B] text-xs font-bold rounded-full mb-6 tracking-wide uppercase">
            The Ultimate City Super App
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            Your City, <br />
            <span className="text-[#22C55E]">Delivered</span> & <span className="italic">Connected.</span>
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto md:mx-0">
            Ride, eat, and get things done with just one tap. UrbanFlow connects you to the best your city has to offer, instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/download-hub" className="relative group overflow-hidden bg-[#22C55E] p-[2px] rounded-2xl w-full sm:w-auto">
               <button className="relative w-full bg-[#22C55E] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all">
                Get Started Now
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all active:scale-95 text-center">
              Explore Services
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                    alt="User" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-black font-bold">4.2M+</span> active users in 50+ cities
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/2 relative h-[500px] md:h-[700px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/20 to-transparent rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
              <img 
                id="hero-visual"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200" 
                alt="City Flow"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#BEF264] rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Fast Delivery</p>
                  <p className="text-sm font-bold">Arriving in 12m</p>
                </div>
              </motion.div>

              <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 p-4 bg-black text-white rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Ride nearby</p>
                  <p className="text-sm font-bold">Premium Ride found</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Services Grid */}
      <section id="services" className="max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-bold tracking-tight mb-4">One app for everything.</h3>
            <p className="text-gray-500 text-lg">Seamlessly switch between essential services designed to make your daily urban life smoother and more efficient.</p>
          </div>
          <Link to="/services" className="flex items-center gap-2 group text-[#22C55E] font-bold">
            View all services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 bg-[#171717] rounded-[32px] p-8 text-white relative overflow-hidden group"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200" 
                alt="UrbanRide Background" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <span className="w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center mb-6 shadow-glow">
                <Car className="w-6 h-6 text-white" />
              </span>
              <h4 className="text-3xl font-bold mb-4">Ride with UrbanRide</h4>
              <p className="text-gray-400 mb-8 max-w-sm">Door-to-door mobility that's safer, faster, and more affordable than ever.</p>
              <div className="mt-auto">
                 <Link to="/ride" className="px-6 py-3 bg-[#BEF264] text-black font-bold rounded-xl hover:bg-[#a3d64f] transition-all inline-flex items-center gap-2">
                  Book a Ride <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="absolute right-[-10%] bottom-0 w-3/4 opacity-40 group-hover:opacity-60 transition-opacity">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" 
                alt="Premium Car" 
                className="w-full object-contain rotate-[-10deg]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 bg-[#BEF264] rounded-[32px] p-8 relative overflow-hidden group"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200" 
                alt="UrbanEats Background" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#BEF264] via-[#BEF264]/80 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <span className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag className="w-5 h-5 text-white" />
              </span>
              <h4 className="text-2xl font-bold mb-2 text-black">UrbanEats</h4>
              <p className="text-black/60 mb-4 text-sm font-medium">Craving something good? We bring your favorites to your seat in record time.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold text-black border border-black/5">3000+ Restaurants</span>
                <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold text-black border border-black/5">0.9 Mi Delivery</span>
              </div>
            </div>
            <div className="absolute right-4 bottom-[-20%] w-1/3 group-hover:bottom-[-10%] transition-all rotate-12">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400" 
                alt="Gourmet Burger" 
                className="rounded-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="bg-white border border-gray-200 rounded-[32px] p-6 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                alt="Swift Move Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <span className="w-10 h-10 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                <Truck className="w-5 h-5" />
              </span>
              <h4 className="text-xl font-bold mb-2">Swift Move</h4>
              <p className="text-gray-500 text-xs">Courier and moving services you can trust.</p>
            </div>
            <Link to="/services" className="mt-4 flex items-center text-blue-600 font-bold text-sm">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="bg-white border border-gray-200 rounded-[32px] p-6 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581578731522-5b17b8827ead?auto=format&fit=crop&q=80&w=800" 
                alt="UrbanPro Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <span className="w-10 h-10 bg-orange-500/10 text-orange-600 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <ShoppingBag className="w-5 h-5" />
              </span>
              <h4 className="text-xl font-bold mb-2">UrbanPro</h4>
              <p className="text-gray-500 text-xs">Professional home services at your doorstep.</p>
            </div>
            <Link to="/pro" className="mt-4 flex items-center text-orange-600 font-bold text-sm">
              View Pros <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="bg-white py-32 -mx-6 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              Modern Experience <br />
              <span className="text-gray-400">for Modern Citizens.</span>
            </h2>
            <div className="space-y-10">
              {[
                { icon: ShieldCheck, title: "Safety First", desc: "Every companion and provider is strictly vetted and verified for your absolute security." },
                { icon: Clock, title: "Real-time Precision", desc: "Live tracking with AI-enhanced ETAs that are accurate down to the single second." },
                { icon: Star, title: "Loyalty Unified", desc: "One wallet, one reward system across all services. Earn every time you move or eat." },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="p-3 bg-[#F9FAF5] rounded-2xl">
                    <feature.icon className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="w-[300px] h-[600px] bg-[#171717] rounded-[50px] border-[8px] border-gray-800 shadow-[0_50px_100px_-20px_rgba(34,197,94,0.3)] relative overflow-hidden p-3 pt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl"></div>
              <div className="w-full h-full bg-[#F9FAF5] rounded-[34px] overflow-hidden p-4 space-y-4">
                 <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                     <div className="text-[10px] font-bold">Hi, Urban!</div>
                  </div>
                  <Menu className="w-4 h-4 text-gray-400" />
                 </div>

                 <div className="h-28 bg-[#BEF264] rounded-2xl flex items-center p-4 relative overflow-hidden">
                    <div className="relative z-10 w-2/3">
                      <p className="text-[8px] font-bold uppercase tracking-widest bg-black text-white inline-block px-1.5 py-0.5 rounded mb-1">Promo</p>
                      <p className="text-xs font-bold leading-tight">50% Off your first <br /> city ride today!</p>
                    </div>
                    <Car className="absolute right-[-10px] bottom-[-5px] w-20 h-20 text-black/10 rotate-[-15deg]" />
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                    {[
                      {n: "Rides", i: Car, c: "bg-black"},
                      {n: "Food", i: ShoppingBag, c: "bg-[#22C55E]"},
                      {n: "Delivery", i: Truck, c: "bg-blue-500"},
                      {n: "Pay", i: Smartphone, c: "bg-orange-500"},
                    ].map((s, i) => (
                      <div key={i} className="bg-white p-3 rounded-2xl border border-gray-100 flex flex-col items-center gap-2">
                         <div className={`w-8 h-8 rounded-lg ${s.c} flex items-center justify-center`}>
                            <s.i className="w-4 h-4 text-white" />
                         </div>
                         <p className="text-[9px] font-bold uppercase tracking-wider">{s.n}</p>
                      </div>
                    ))}
                 </div>

                 <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-3">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Nearby Stores</p>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                        <div className="flex-1 h-3 bg-gray-100 rounded"></div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                        <div className="flex-1 h-3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="absolute -z-10 w-80 h-80 bg-[#BEF264]/40 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Mobile Interface Showcase */}
      <section className="py-32 overflow-hidden bg-[#F1F3EA]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Crafted for Your Thumb.</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium lowercase italic text-lg">"The best interface is the one that feels like an extension of your city."</p>
        </div>

        <div className="relative flex justify-center items-center py-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03]">
            <span className="text-[300px] font-black tracking-tighter leading-none italic">URBAN FLOW</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center relative z-10">
            <motion.div 
               whileInView={{ y: [20, -20, 20] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="w-[280px] h-[580px] bg-[#171717] rounded-[50px] border-[8px] border-white shadow-2xl overflow-hidden relative group"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white rounded-b-2xl z-20"></div>
               <div className="w-full h-full bg-white p-4 pt-10">
                  <div className="flex justify-between items-center mb-6">
                    <h5 className="text-xl font-bold">FreshMART</h5>
                    <ShoppingBag className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`p-3 rounded-2xl ${i % 2 === 0 ? 'bg-[#BEF264]/20' : 'bg-[#F9FAF5]'} h-32 flex flex-col justify-between border border-black/5`}>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Plus className="w-3 h-3" />
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 opacity-50"></div>
                        <p className="text-[10px] font-bold text-center">Category {i}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>

            <motion.div 
               whileInView={{ y: [-30, 30, -30] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
               className="w-[300px] h-[620px] bg-[#171717] rounded-[55px] border-[10px] border-white shadow-[0_50px_100px_-20px_rgba(34,197,94,0.4)] overflow-hidden relative z-20"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-white rounded-b-2xl z-20"></div>
               <div className="w-full h-full bg-gray-100 relative">
                  <div className="absolute inset-0 bg-[#E5E7EB] opacity-50">
                     <div className="absolute top-1/4 left-1/3 w-20 h-1 bg-[#22C55E]/40 rounded-full rotate-45"></div>
                     <div className="absolute top-1/2 right-1/4 w-32 h-1 bg-[#22C55E]/40 rounded-full -rotate-12"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg ring-4 ring-blue-500/20"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-3xl p-5 shadow-xl border border-gray-100">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#BEF264] rounded-2xl flex items-center justify-center">
                          <Car className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Standard City</p>
                          <p className="text-[10px] text-gray-400">Pickup in 4 mins • $12.50</p>
                        </div>
                     </div>
                     <button className="w-full py-3 bg-black text-white rounded-2xl font-bold text-xs uppercase tracking-widest">
                        Confirm Pickup
                     </button>
                  </div>
               </div>
            </motion.div>

            <motion.div 
               whileInView={{ y: [15, -15, 15] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="w-[280px] h-[580px] bg-[#171717] rounded-[50px] border-[8px] border-white shadow-2xl overflow-hidden relative"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white rounded-b-2xl z-20"></div>
               <div className="w-full h-full bg-white p-6 pt-10">
                  <h5 className="text-xl font-bold mb-8 italic">Omni Wallet</h5>
                  <div className="p-5 bg-gradient-to-r from-[#171717] to-gray-800 rounded-3xl text-white mb-8 relative overflow-hidden">
                     <p className="text-[10px] opacity-50 font-bold mb-1 tracking-widest uppercase">Available Balance</p>
                     <p className="text-2xl font-bold tracking-tight">$4,850.50</p>
                     <div className="absolute right-[-20%] bottom-[-20%] w-32 h-32 border-4 border-white/5 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Activity</p>
                     {[
                       {n: "Starbucks Delivery", p: "-$12.00", i: ShoppingBag},
                       {n: "Downtown Ride", p: "-$18.50", i: Car},
                       {n: "Grocery Top-up", p: "+$50.00", i: MapPin},
                     ].map((t, idx) => (
                       <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                <t.i className="w-4 h-4 text-gray-500" />
                             </div>
                             <p className="text-[10px] font-bold">{t.n}</p>
                          </div>
                          <p className={`text-[10px] font-black ${t.p.startsWith('+') ? 'text-[#22C55E]' : 'text-black'}`}>{t.p}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto py-32 text-center">
        <div className="bg-[#22C55E] rounded-[48px] p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to find your flow?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto">
              Join our community of millions and experience the city like never before. 
              Everything you need is just a download away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/download-hub" className="px-10 py-5 bg-white text-black font-bold text-lg rounded-2xl hover:scale-[1.05] transition-all flex items-center gap-3">
                <Smartphone className="w-6 h-6" /> App Store
              </Link>
              <Link to="/download-hub" className="px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl hover:scale-[1.05] transition-all flex items-center gap-3 border border-white/10">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-[10px]">▶</span>
                </div> Play Store
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 border-[30px] border-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
