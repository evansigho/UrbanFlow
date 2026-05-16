import { useState } from "react";
import { motion } from "motion/react";
import { 
  Cookie, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  Target,
  Check,
  X
} from "lucide-react";

export default function Cookies() {
  const [prefs, setPrefs] = useState({
    necessary: true, // Always true
    performance: true,
    functional: true,
    marketing: false
  });

  const toggle = (key: keyof typeof prefs) => {
    if (key === 'necessary') return;
    setPrefs(p => ({ ...p, [key]: !p[key] }));
  };

  const types = [
    {
      id: "necessary",
      title: "Strictly Necessary",
      desc: "Essential for logins, security, and the Omni Wallet. The app won't function without these.",
      icon: ShieldCheck,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "performance",
      title: "Performance Cookies",
      desc: "Helps us see which services are trending so we can optimize the interface for speed.",
      icon: BarChart3,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      id: "functional",
      title: "Functional Cookies",
      desc: "Remembers your 'Home' and 'Office' settings and dietary preferences for a faster experience.",
      icon: Settings,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      desc: "Used to show relevant local promos—like a plumber discount if you searched for home fixes.",
      icon: Target,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="w-16 h-16 bg-[#BEF264] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
          <Cookie className="w-10 h-10 text-black" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6">Cookie Preferences.</h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium">We use cookies to improve your urban experience. Control exactly how we track your flow across our services.</p>
      </motion.section>

      <div className="space-y-6">
        {types.map((type) => (
          <div 
            key={type.id} 
            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-8 group hover:border-[#BEF264] transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center ${type.color}`}>
              <type.icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-xl font-bold mb-2">{type.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{type.desc}</p>
            </div>

            <button 
              onClick={() => toggle(type.id as keyof typeof prefs)}
              className={`w-16 h-8 rounded-full relative transition-all ${prefs[type.id as keyof typeof prefs] ? 'bg-[#BEF264]' : 'bg-gray-100'} ${type.id === 'necessary' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <motion.div 
                animate={{ x: prefs[type.id as keyof typeof prefs] ? 32 : 4 }}
                className="absolute top-1 left-0 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
              >
                {prefs[type.id as keyof typeof prefs] ? <Check className="w-3 h-3 text-black" /> : <X className="w-3 h-3 text-gray-300" />}
              </motion.div>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between p-8 bg-[#171717] rounded-[32px] text-white">
         <p className="text-sm text-gray-400 font-medium">Your settings will be applied instantly across all devices.</p>
         <button className="px-8 py-3 bg-[#BEF264] text-black font-bold rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all">Save My Flow</button>
      </div>

      <footer className="mt-20 text-center text-xs text-gray-400 font-bold uppercase tracking-widest border-t border-gray-100 pt-10 pb-10 px-6">
        Transparency is our default setting.
      </footer>
    </div>
  );
}
