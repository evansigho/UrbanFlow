import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Car, 
  Home, 
  User, 
  AlertCircle,
  CheckCircle,
  FileText,
  ArrowRight
} from "lucide-react";

export default function Insurance() {
  const coverages = [
    {
      title: "For Drivers",
      subtitle: "Mobility Protection",
      desc: "Every trip is insured. From the moment you go online to the moment you drop off your passenger, you are covered by our secondary liability policy.",
      perks: [
        "$1M Primary Liability Policy",
        "Uninsured/Underinsured Motorist Coverage",
        "Occupational Accident Insurance",
        "Vehicle Damage Support (Comprehensive/Collision)"
      ],
      icon: Car,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "For Service Pros",
      subtitle: "General Liability",
      desc: "UrbanFlow provides comprehensive General Liability insurance for every Pro job booked through the app. Focus on your craft; we handle the risk.",
      perks: [
        "Professional Errors & Omissions",
        "Third-Party Property Damage",
        "Personal Injury Liability",
        "Job-Specific Coverage Windows"
      ],
      icon: Home,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "For Citizens",
      subtitle: "Property Protection",
      desc: "We stand behind our network. Every home service booking comes with our satisfaction and property protection guarantee.",
      perks: [
        "$5k Property Protection Guarantee",
        "Verified Professional Vetting",
        "Secure Biometric Identification",
        "24/7 Rapid Incident Response"
      ],
      icon: User,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-32 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-black rounded-full mb-6 uppercase tracking-widest">Safety Infrastructure</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          Fully <span className="text-gray-300 italic">Covered.</span><br />
          <span className="text-black">Fully Protected.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Insurance isn't an afterthought at UrbanFlow. It's the invisible foundation that allows the city to move and build with confidence.
        </p>
      </motion.section>

      <div className="space-y-32">
        {coverages.map((item, i) => (
          <section key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20`}>
             <div className="w-full md:w-1/2">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 ${item.color}`}>
                   <item.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-2 italic">{item.title}</h2>
                <h4 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest text-xs font-mono">{item.subtitle}</h4>
                <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">{item.desc}</p>
                <div className="space-y-4">
                   {item.perks.map((perk, idx) => (
                     <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                        <span className="font-bold text-gray-700">{perk}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] bg-gray-50 rounded-[64px] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10 transition-opacity group-hover:opacity-0"></div>
                   <ShieldCheck className="w-48 h-48 text-gray-100 transition-all duration-700 group-hover:scale-125 group-hover:text-[#BEF264]" />
                   <div className="absolute bottom-12 right-12 z-20 md:translate-x-12 translate-y-12">
                      <div className="p-8 bg-white rounded-3xl shadow-2xl border border-gray-100">
                         <AlertCircle className="w-8 h-8 text-[#22C55E] mb-4" />
                         <p className="text-xs font-black uppercase tracking-widest text-gray-400">Coverage Status</p>
                         <p className="text-xl font-black italic">Active 100%</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        ))}
      </div>

      <section className="mt-40 bg-[#171717] rounded-[56px] p-12 md:p-20 text-white relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
               <h2 className="text-4xl font-bold mb-6 italic">Need to file a claim?</h2>
               <p className="text-gray-400 font-medium leading-relaxed">Our claims department is available 24/7 to assist with incidents. We use AI-powered image analysis to expedite payouts, often resolving minor claims in under 2 hours.</p>
            </div>
            <div className="space-y-4 w-full md:w-auto">
               <button className="w-full md:w-auto px-10 py-5 bg-[#BEF264] text-black font-bold rounded-2xl flex items-center justify-center gap-3 shadow-glow group">
                  File a Claim <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3">
                  <FileText className="w-5 h-5" /> View Policy Detail
               </button>
            </div>
         </div>
      </section>

      <footer className="mt-32 pt-10 border-t border-gray-100 text-center">
         <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.3em]">Trust is our primary currency. Safety is our only priority.</p>
      </footer>
    </div>
  );
}
