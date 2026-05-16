import { motion } from "motion/react";
import { 
  User, 
  Car, 
  Wrench, 
  Box, 
  BarChart3, 
  Code2, 
  Smartphone, 
  Monitor, 
  FileText,
  Apple,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DownloadHub() {
  const interfaces = [
    {
      title: "Consumer App",
      desc: "Move, Eat, and Book Services. The ultimate tool for citizens to navigate and thrive in the city.",
      icon: User,
      action: "Download App",
      platforms: ["iOS", "Android"],
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-500",
      type: "mobile"
    },
    {
      title: "Partner Driver App",
      desc: "For Ride-hailing and Delivery partners. Manage your routes, track earnings, and optimize your schedule.",
      icon: Car,
      action: "Download App",
      platforms: ["iOS", "Android"],
      color: "from-emerald-500/10 to-emerald-500/5",
      iconColor: "text-emerald-500",
      type: "mobile",
      reqLink: "/requirements"
    },
    {
      title: "UrbanPro App",
      desc: "For Plumbers, Electricians, and Technicians. Manage your leads, job details, and professional growth.",
      icon: Wrench,
      action: "Download App",
      platforms: ["iOS", "Android"],
      color: "from-orange-500/10 to-orange-500/5",
      iconColor: "text-orange-500",
      type: "mobile",
      reqLink: "/partners"
    },
    {
      title: "Logistics Integrator",
      desc: "For fleet owners and warehouse managers to sync their logistics and routing with our global API.",
      icon: Box,
      action: "Get Started",
      platforms: ["Web", "API"],
      color: "from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-500",
      type: "web"
    },
    {
      title: "Admin Dashboard",
      desc: "For Business owners and Restaurant managers to track real-time analytics, inventory, and orders.",
      icon: BarChart3,
      action: "Login to Web Portal",
      platforms: ["Web Only"],
      color: "from-yellow-500/10 to-yellow-500/5",
      iconColor: "text-yellow-500",
      type: "web"
    },
    {
      title: "Developer API",
      desc: "Integrate UrbanFlow’s mobility and delivery engine into your own software and marketplaces.",
      icon: Code2,
      action: "View Documentation",
      platforms: ["Docs", "SDK"],
      color: "from-gray-500/10 to-gray-500/5",
      iconColor: "text-gray-500",
      type: "web"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-[#BEF264]/20 text-[#064E3B] text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em] font-mono">Gateway Central</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
          Welcome to the <br />
          <span className="text-[#22C55E] italic">UrbanFlow Ecosystem.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Choose your interface. Whether you're navigating the city, building a business, or coding the future—your journey starts here.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interfaces.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className={`p-10 rounded-[48px] border border-gray-100 bg-gradient-to-br ${item.color} flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group`}
          >
            <div>
               <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 bg-white rounded-2xl shadow-sm ${item.iconColor}`}>
                     <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex gap-2">
                     {item.platforms.map((p, idx) => (
                        <span key={idx} className="text-[8px] font-black uppercase tracking-[0.1em] px-2 py-1 bg-white/50 rounded-lg text-gray-500 border border-white/50">{p}</span>
                     ))}
                  </div>
               </div>
               <h3 className="text-2xl font-bold mb-4 italic leading-tight">{item.title}</h3>
               <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10">{item.desc}</p>
            </div>

            <div className="space-y-6">
               <button className={`w-full py-4 ${item.type === 'mobile' ? 'bg-black text-white' : 'bg-white border-2 border-gray-100 text-black'} font-black rounded-2xl flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-all`}>
                  {item.action} 
                  {item.type === 'mobile' ? <Apple className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
               </button>
               
               {item.reqLink && (
                  <Link to={item.reqLink} className="flex items-center justify-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#22C55E] hover:underline">
                    View Requirements <ChevronRight className="w-3 h-3" />
                  </Link>
               )}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-24 p-12 bg-gray-50 rounded-[56px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 font-medium">
         <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm">
               <Monitor className="w-8 h-8 text-gray-400" />
            </div>
            <div>
               <h4 className="text-lg font-bold">Already have a partner account?</h4>
               <p className="text-sm text-gray-500 italic leading-relaxed">Access the full web suite for advanced management.</p>
            </div>
         </div>
         <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-4 bg-white border border-gray-200 text-black font-bold rounded-2xl hover:bg-white/80 transition-all">Merchant Login</button>
            <button className="flex-1 md:flex-none px-8 py-4 bg-white border border-gray-200 text-black font-bold rounded-2xl hover:bg-white/80 transition-all">Driver Portal</button>
         </div>
      </section>

      <footer className="mt-32 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 pb-10">
         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] italic">System Status: All services operational</p>
         <div className="flex gap-12 text-[10px] text-gray-500 font-black uppercase tracking-[0.1em]">
            <Link to="/insurance" className="hover:text-black transition-colors">Insurance</Link>
            <Link to="/safety" className="hover:text-black transition-colors">Safety Center</Link>
            <Link to="/terms" className="hover:text-black transition-colors">Legal</Link>
         </div>
      </footer>
    </div>
  );
}
