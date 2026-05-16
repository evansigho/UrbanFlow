import { motion } from "motion/react";
import { 
  FileText, 
  Scale, 
  AlertCircle, 
  Wallet, 
  ShieldAlert,
  Gavel,
  Clock,
  ArrowRight
} from "lucide-react";

export default function Terms() {
  const policies = [
    {
      title: "The Platform Role",
      desc: "UrbanFlow is a technology platform connecting users with third-party providers (Drivers, Restaurants, and Technicians). We facilitate the connection but are not the service provider ourselves.",
      icon: FileText
    },
    {
      title: "User Obligations",
      desc: "Users must be 18+ and provide accurate info. We maintain a zero-tolerance policy for harassment or discrimination against our partners.",
      icon: ShieldAlert
    },
    {
       title: "Payment & Cancellation",
       desc: "Automatic billing via Omni-Wallet. No-show fees apply to rides; UrbanPro labor requires 2-hour notice for free cancellation.",
       icon: Clock
    },
    {
       title: "Dispute Resolution",
       desc: "We favor mediation. All unresolved disputes are handled through binding arbitration to ensure fair and fast outcomes for all parties.",
       icon: Gavel
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-32 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Legal Framework</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Terms of <br /><span className="text-gray-400 italic underline decoration-[#BEF264] decoration-8 underline-offset-8">Service.</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">The social contract between UrbanFlow, our users, and the professionals who move the city.</p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {policies.map((p, i) => (
          <div key={i} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-[#F9FAF5] text-black rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#BEF264] transition-colors">
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">{p.desc}</p>
          </div>
        ))}
      </div>

      <section className="bg-[#171717] rounded-[56px] p-12 md:p-20 text-white relative overflow-hidden">
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
               <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl inline-block mb-6">
                  <AlertCircle className="w-8 h-8" />
               </div>
               <h2 className="text-4xl font-bold mb-8 italic">Limitation of Liability.</h2>
               <p className="text-gray-400 leading-relaxed font-medium mb-8">While we vet every partner, UrbanFlow is not liable for the specific quality of a third-party service—such as the seasoning of a meal or the specific parts used in a plumbing repair. We act as your advocate in ensuring professional resolution to any issue.</p>
               <button className="flex items-center gap-2 text-[#BEF264] font-bold group">
                  Full Legal Document <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            <div className="hidden md:block">
               <div className="relative">
                  <div className="w-64 h-64 border-2 border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                     <FileText className="w-12 h-12 text-white/20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Scale className="w-20 h-20 text-[#BEF264]" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div className="mt-32 text-center italic text-gray-400 font-medium pb-10">
         Updated May 2026. Version 4.2.0
      </div>
    </div>
  );
}
