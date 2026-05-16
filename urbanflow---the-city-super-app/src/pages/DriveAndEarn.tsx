import { motion } from "motion/react";
import { 
  Car, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Clock,
  MapPin,
  HeartPulse
} from "lucide-react";

export default function DriveAndEarn() {
  const valueProps = [
    {
      title: "Instant Payouts",
      desc: "Cash out your earnings daily—no more waiting for payday. Your money, when you need it.",
      icon: DollarSign,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Surge Map AI",
      desc: "Our heatmap shows you exactly where the highest demand is, so you never drive empty.",
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Driver Rewards",
      desc: "Fuel discounts, vehicle maintenance perks, and health insurance subsidies for top partners.",
      icon: HeartPulse,
      color: "bg-red-50 text-red-600"
    }
  ];

  const requirements = [
    "Minimum age: 21 years old",
    "4-door vehicle in good condition (2015 or newer)",
    "Valid Driver’s License and local work permit",
    "Clean driving record and background check clearance"
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full md:w-1/2"
        >
          <span className="inline-block px-4 py-1.5 bg-[#BEF264]/20 text-[#064E3B] text-xs font-bold rounded-full mb-6 uppercase tracking-widest font-mono">Partner Mobility</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Your Car, <br />
            Your Schedule, <br />
            <span className="text-[#22C55E] italic">Your Business.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">Turn your miles into money. Drive with the city's most advanced mobility network and earn on your own terms.</p>
          <button className="px-10 py-5 bg-black text-white font-bold rounded-2xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
            Apply to Drive <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
        
        <div className="w-full md:w-1/2 relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#BEF264]/20 to-transparent rounded-[56px] -rotate-3"></div>
           <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
            alt="Uber driver lifestyle" 
            className="relative z-10 rounded-[56px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
           />
           <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                 <Clock className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Status</p>
                 <p className="text-lg font-bold italic">Flexible 24/7</p>
              </div>
           </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        {valueProps.map((prop, i) => (
          <div key={i} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${prop.color}`}>
              <prop.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic">{prop.title}</h3>
            <p className="text-gray-500 leading-relaxed font-sm font-medium">{prop.desc}</p>
          </div>
        ))}
      </section>

      {/* Requirements */}
      <section className="mb-32 bg-[#171717] rounded-[56px] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-20 items-center">
         <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic tracking-tight">What you need <br /><span className="text-[#BEF264]">to get rolling.</span></h2>
            <div className="space-y-6">
               {requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className="w-6 h-6 rounded-full border-2 border-[#BEF264] flex items-center justify-center group-hover:bg-[#BEF264] transition-colors">
                        <CheckCircle className="w-4 h-4 text-transparent group-hover:text-black" />
                     </div>
                     <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{req}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 text-center">
               <MapPin className="w-8 h-8 text-[#BEF264] mx-auto mb-4" />
               <p className="text-3xl font-black italic">50+</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Cities Available</p>
            </div>
            <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 text-center">
               <ShieldCheck className="w-8 h-8 text-[#BEF264] mx-auto mb-4" />
               <p className="text-3xl font-black italic">$1M</p>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Trip Insurance</p>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
         <h2 className="text-4xl font-bold mb-8 italic italic">Ready to take the wheel?</h2>
         <p className="text-gray-500 mb-12 max-w-xl mx-auto font-medium">Join thousands of partners who have found their flow with UrbanFlow. Your application takes less than 5 minutes.</p>
         <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-[#BEF264] text-black font-bold rounded-2xl text-xl shadow-xl hover:scale-105 transition-all">Start Application</button>
            <button className="px-10 py-5 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl text-xl hover:bg-gray-50 transition-all">View Payouts</button>
         </div>
      </section>
    </div>
  );
}
