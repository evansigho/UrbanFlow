import { motion } from "motion/react";
import { 
  Briefcase, 
  Wrench, 
  Zap, 
  CheckCircle2, 
  ClipboardCheck, 
  PlayCircle, 
  TrendingUp,
  Upload,
  ArrowRight
} from "lucide-react";

export default function UrbanProPartner() {
  const workflow = [
    { 
      step: "01",
      title: "Apply", 
      desc: "Fill out the quick talent form and tell us about your expertise and service city.",
      icon: Briefcase 
    },
    { 
      step: "02",
      title: "Verify", 
      desc: "Our Trust & Safety team verifies your certifications, licenses, and background.",
      icon: ClipboardCheck 
    },
    { 
      step: "03",
      title: "Onboard", 
      desc: "Get trained on the UrbanPro App and learn how to manage leads and payouts.",
      icon: PlayCircle 
    },
    { 
      step: "04",
      title: "Earn", 
      desc: "Start receiving professional jobs in your local area and grow your business.",
      icon: TrendingUp 
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">Service Professional Portal</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            Grow Your <span className="text-gray-400 italic">Business</span><br />
            <span className="text-[#22C55E]">with UrbanFlow.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            The city's highest-earning technicians use UrbanFlow to fill their schedules. From plumbing to HVAC, we connect you with the customers who need your craft.
          </p>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-14 rounded-[56px] border border-gray-100 shadow-2xl relative"
        >
          <div className="absolute top-10 right-10 bg-[#BEF264] text-black w-12 h-12 rounded-2xl flex items-center justify-center font-black rotate-12">
            Pro
          </div>
          <h2 className="text-3xl font-bold mb-10 italic">Talent Pool Application</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name / Business Name</label>
                  <input type="text" placeholder="John Doe Logistics" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#BEF264] outline-none transition-all placeholder:text-gray-300 font-medium" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Primary Skill</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#BEF264] outline-none transition-all font-medium appearance-none">
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Painting</option>
                    <option>Cleaning</option>
                    <option>HVAC</option>
                    <option>General Handyman</option>
                  </select>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Years of Experience</label>
                  <input type="number" placeholder="5" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#BEF264] outline-none transition-all placeholder:text-gray-300 font-medium" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Service City</label>
                  <input type="text" placeholder="London, UK" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#BEF264] outline-none transition-all placeholder:text-gray-300 font-medium" />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Upload Certification/License</label>
               <div className="w-full p-8 border-2 border-dashed border-gray-100 rounded-[32px] bg-gray-50/50 text-center group hover:border-[#BEF264] transition-all cursor-pointer">
                  <Upload className="w-6 h-6 mx-auto mb-4 text-gray-300 group-hover:text-[#22C55E] transition-colors" />
                  <p className="text-sm font-bold text-gray-400">Drag & drop files or <span className="text-[#22C55E]">Browse</span></p>
                  <p className="text-[10px] text-gray-300 mt-2 font-medium">PDF, PNG or JPG (Max 10MB)</p>
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Why do you want to join the Flow?</label>
               <textarea rows={4} placeholder="Tell us about your business goals..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#BEF264] outline-none transition-all placeholder:text-gray-300 font-medium resize-none"></textarea>
            </div>

            <button className="w-full py-5 bg-black text-white font-black rounded-2xl text-lg hover:bg-black/90 transition-all flex items-center justify-center gap-3 shadow-glow">
              Submit Application <ArrowRight className="w-6 h-6" />
            </button>
          </form>
        </motion.div>

        {/* Workflow */}
        <div className="space-y-12 py-10">
           <h2 className="text-4xl font-black italic mb-16 tracking-tight leading-none uppercase">The <br />Professional <br />Workflow.</h2>
           {workflow.map((item, i) => (
             <div key={i} className="flex gap-8 group">
                <div className="text-4xl font-black text-gray-100 group-hover:text-[#BEF264] transition-colors font-mono">{item.step}</div>
                <div className="bg-white p-8 rounded-[40px] border border-gray-50 shadow-sm flex-1 group-hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-50 rounded-2xl text-[#22C55E]">
                         <item.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-black italic">{item.title}</h4>
                   </div>
                   <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Footer Values */}
      <footer className="pt-20 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
         <div className="flex items-center gap-4">
            <CheckCircle2 className="w-10 h-10 text-[#22C55E]" />
            <div>
               <h5 className="font-bold">Fully Insured</h5>
               <p className="text-xs text-gray-400 font-medium italic">Occupational coverage for every job.</p>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <Zap className="w-10 h-10 text-[#BEF264]" />
            <div>
               <h5 className="font-bold">Instant Payouts</h5>
               <p className="text-xs text-gray-400 font-medium italic">Access your labor earnings in 24h.</p>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <Wrench className="w-10 h-10 text-blue-500" />
            <div>
               <h5 className="font-bold">Elite Tools</h5>
               <p className="text-xs text-gray-400 font-medium italic">Proprietary job management software.</p>
            </div>
         </div>
      </footer>
    </div>
  );
}
