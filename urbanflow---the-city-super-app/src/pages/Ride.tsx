import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Car, 
  Users, 
  Sparkles, 
  Leaf, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Shield,
  Clock
} from "lucide-react";

export default function Ride() {
  const tiers = [
    {
      name: "Eco",
      tagline: "Budget-friendly travel",
      desc: "Shared urban mobility. Perfect for solo commuters looking for high value.",
      icon: Leaf,
      price: "$",
      color: "bg-green-50"
    },
    {
      name: "Standard",
      tagline: "Reliable every day",
      desc: "Private rides in comfortable sedans. The gold standard for city travel.",
      icon: Car,
      price: "$$",
      color: "bg-[#BEF264]/20"
    },
    {
      name: "Premium",
      tagline: "Luxury and comfort",
      desc: "High-end vehicles with executive chauffeurs. Arrive in style.",
      icon: Sparkles,
      price: "$$$",
      color: "bg-black text-white"
    },
    {
      name: "Urban XL",
      tagline: "Spacious group travel",
      desc: "SUVs and vans for up to 6 passengers. Room for friends and luggage.",
      icon: Users,
      price: "$$",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full md:w-1/2"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">UrbanRide Mobility</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Cheaper than a second car, <br />
            <span className="text-[#22C55E]">faster than the bus.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">UrbanRide is your private chauffeur on demand. Skip the parking hunt and the transit wait.</p>
          <div className="flex gap-4">
             <Link to="/download-hub" className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl">Get a Ride</Link>
             <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all">View Pricing</button>
          </div>
        </motion.div>
        
        <div className="w-full md:w-1/2 relative">
           <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200" 
            alt="City Driving" 
            className="rounded-[48px] shadow-2xl grayscale transition-all hover:grayscale-0"
            referrerPolicy="no-referrer"
           />
           <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#BEF264] rounded-2xl flex items-center justify-center">
                 <Shield className="w-6 h-6 text-black" />
              </div>
              <div>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pin Verified</p>
                 <p className="text-lg font-bold">Safety 1st Guarantee</p>
              </div>
           </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">Choose your lane.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[32px] ${tier.color} border border-gray-100 flex flex-col items-center text-center transition-all`}
            >
              <div className={`p-4 rounded-2xl mb-6 ${tier.name === 'Premium' ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                 <tier.icon className={`w-8 h-8 ${tier.name === 'Premium' ? 'text-white' : 'text-black'}`} />
              </div>
              <h4 className="text-2xl font-bold mb-1">{tier.name}</h4>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${tier.name === 'Premium' ? 'text-white/60' : 'text-gray-400'}`}>{tier.tagline}</p>
              <p className={`text-sm mb-8 flex-1 leading-relaxed ${tier.name === 'Premium' ? 'text-white/80' : 'text-gray-500'}`}>{tier.desc}</p>
              <div className={`text-xl font-black ${tier.name === 'Premium' ? 'text-[#BEF264]' : 'text-black'}`}>{tier.price}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="max-w-7xl mx-auto mb-32 bg-[#171717] rounded-[48px] p-20 text-white flex flex-col md:flex-row items-center gap-20 overflow-hidden relative">
        <div className="w-full md:w-1/2 relative z-10">
           <h3 className="text-4xl font-bold mb-8 italic">Better Journeys by Design.</h3>
           <div className="space-y-12">
              <div className="flex gap-6">
                 <div className="p-3 bg-white/10 rounded-2xl"><MapPin className="w-6 h-6 text-[#BEF264]" /></div>
                 <div>
                    <h5 className="text-xl font-bold mb-2">Multi-stop Journeys</h5>
                    <p className="text-gray-400 text-sm">Add up to 5 stops effortlessly. Pick up friends, drop off dry cleaning, and get home all in one booking.</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <div className="p-3 bg-white/10 rounded-2xl"><Calendar className="w-6 h-6 text-[#BEF264]" /></div>
                 <div>
                    <h5 className="text-xl font-bold mb-2">Scheduled Rides</h5>
                    <p className="text-gray-400 text-sm">Plan ahead. Book a ride up to 30 days in advance for airport trips or important meetings.</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <div className="p-3 bg-white/10 rounded-2xl"><ShieldCheck className="w-6 h-6 text-orange-500" /></div>
                 <div>
                    <h5 className="text-xl font-bold mb-2">Safety PIN Verification</h5>
                    <p className="text-gray-400 text-sm">Wrong car? Never again. Every ride requires a 4-digit PIN exchange before the trip starts.</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
           <div className="w-[320px] h-[320px] bg-gradient-to-br from-[#BEF264] to-[#22C55E] rounded-full flex items-center justify-center p-8 group relative">
              <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0"
              >
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
              </motion.div>
              <Car className="w-24 h-24 text-black group-hover:scale-110 transition-transform" />
              <div className="absolute -top-10 right-0 bg-white text-black p-4 rounded-2xl shadow-xl font-bold text-xs rotate-6">New: Quiet Mode 🤫</div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center py-20">
         <h2 className="text-4xl font-bold mb-8">Ride the future of the city.</h2>
         <Link to="/download-hub" className="px-12 py-5 bg-[#BEF264] text-black font-bold text-xl rounded-2xl flex items-center gap-3 mx-auto shadow-xl hover:bg-[#a3d64f] transition-all">
            Get your first ride <ArrowRight className="w-6 h-6" />
         </Link>
      </section>
    </div>
  );
}
