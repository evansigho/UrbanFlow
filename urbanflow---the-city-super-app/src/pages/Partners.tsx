import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Car, 
  Wrench, 
  Utensils, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Briefcase, 
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";

type PartnerType = 'drive' | 'provide' | 'merchant';

export default function Partners() {
  const [activeTab, setActiveTab] = useState<PartnerType>('drive');

  const content = {
    drive: {
      title: "Earn on every mile.",
      desc: "Turn your car into a high-performance earning machine. Be your own boss, set your own schedule, and earn competitive payouts on every trip.",
      reqs: ["4-door vehicle (2014 or newer)", "Valid Driver's License", "Proof of Insurance", "At least 21 years old"],
      stats: [
        { label: "Weekly Payouts", value: "Instant", icon: DollarSign },
        { label: "Active Cities", value: "50+", icon: MapPin },
        { label: "Flexibility", value: "100%", icon: Clock },
      ],
      icon: Car,
      color: "bg-black",
      accent: "text-[#BEF264]"
    },
    provide: {
      title: "Your skills, our ecosystem.",
      desc: "For local experts like plumbers, electricians, and handymen. Focus on the work you love—we'll handle the lead generation and payment.",
      reqs: ["Valid Trade License", "Professional Liability Insurance", "At least 3 years of experience", "Pass background check"],
      stats: [
        { label: "Marketing Cost", value: "$0", icon: TrendingUp },
        { label: "Lead Quality", value: "High", icon: Briefcase },
        { label: "Growth Rate", value: "2x", icon: StarIcon },
      ],
      icon: Wrench,
      color: "bg-blue-600",
      accent: "text-white"
    },
    merchant: {
      title: "Expand your digital kitchen.",
      desc: "Take your restaurant or store to the next level. Reach thousands of local customers through UrbanFlow's high-speed delivery network.",
      reqs: ["Business Registration", "Food Safety Certificate", "Bank Account Details", "Digital Menu Availability"],
      stats: [
        { label: "Target Reach", value: "1M+", icon: UsersIcon },
        { label: "Delivery Speed", value: "<20m", icon: Clock },
        { label: "Support", value: "24/7", icon: ShieldCheck },
      ],
      icon: Utensils,
      color: "bg-[#22C55E]",
      accent: "text-white"
    }
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <section className="text-center mb-20">
         <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Built for city <br />
            <span className="text-gray-400 italic">shapers like you.</span>
         </h1>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">Whether you have a car, a skillset, or a storefront, UrbanFlow is the engine that drives your business forward.</p>
         
         {/* Toggle */}
         <div className="flex bg-gray-100 p-2 rounded-3xl max-w-md mx-auto mb-20">
            {(['drive', 'provide', 'merchant'] as PartnerType[]).map(type => (
               <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`flex-1 py-4 rounded-2xl text-sm font-bold capitalize transition-all ${activeTab === type ? 'bg-white shadow-lg text-black' : 'text-gray-400'}`}
               >
                  {type}
               </button>
            ))}
         </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
         <AnimatePresence mode="wait">
            <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               className="space-y-12"
            >
               <div>
                  <h2 className="text-5xl font-bold mb-6 italic tracking-tight leading-tight">{content[activeTab].title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">{content[activeTab].desc}</p>
               </div>

               <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">Requirements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {content[activeTab].reqs.map((req, i) => (
                        <div key={i} className="flex gap-3 items-center font-bold text-sm">
                           <CheckCircle className={`w-5 h-5 ${activeTab === 'drive' ? 'text-[#BEF264]' : activeTab === 'provide' ? 'text-blue-500' : 'text-[#22C55E]'}`} />
                           {req}
                        </div>
                     ))}
                  </div>
               </div>

               <button className={`px-10 py-5 ${content[activeTab].color} ${activeTab === 'drive' ? 'text-white' : 'text-white'} font-bold rounded-2xl text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all`}>
                  Start Your Application <ArrowRight className="w-6 h-6" />
               </button>
            </motion.div>
         </AnimatePresence>

         <div className="relative">
            <AnimatePresence mode="wait">
               <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className={`p-12 rounded-[56px] ${content[activeTab].color} text-white shadow-2xl relative overflow-hidden`}
               >
                  <div className="relative z-10">
                     <div className={`w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-12 shadow-inner border border-white/10`}>
                        {(() => {
                           const Icon = content[activeTab].icon;
                           return <Icon className={`w-10 h-10 ${content[activeTab].accent}`} />;
                        })()}
                     </div>
                     
                     <div className="grid grid-cols-1 gap-10">
                        {content[activeTab].stats.map((stat, i) => (
                           <div key={i} className="flex items-center gap-6 group">
                              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                 <stat.icon className={`w-6 h-6 ${content[activeTab].accent}`} />
                              </div>
                              <div>
                                 <p className="text-3xl font-black italic tracking-tighter leading-none">{stat.value}</p>
                                 <p className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  {/* Decorative background circle */}
                  <div className="absolute right-[-20%] bottom-[-20%] w-64 h-64 border-[40px] border-white/5 rounded-full pointer-events-none"></div>
               </motion.div>
            </AnimatePresence>
            
            {/* Visual labels */}
            <div className={`absolute -top-6 -right-6 px-6 py-3 bg-[#BEF264] text-black font-black italic rounded-2xl rotate-12 shadow-xl uppercase text-sm`}>
               Apply Today
            </div>
         </div>
      </section>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
