import { motion } from "motion/react";
import { 
  Newspaper, 
  Download, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  Target,
  Image as ImageIcon
} from "lucide-react";

export default function Press() {
  const news = [
    {
      title: "UrbanFlow Expands to its 60th City",
      date: "May 12, 2026",
      tag: "Expansion"
    },
    {
      title: "UrbanFlow Announces Partnership with Local Artisan Markets",
      date: "May 08, 2026",
      tag: "Partnership"
    },
    {
      title: "UrbanFlow's Green Fleet now 80% Carbon-Neutral",
      date: "April 29, 2026",
      tag: "Sustainability"
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-32 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Media Center</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          The city <span className="text-gray-400 italic">has a voice.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          The latest headlines, brand assets, and urban stories from the heart of UrbanFlow.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
             <Newspaper className="w-8 h-8 italic text-[#22C55E]" /> Latest Headlines
          </h2>
          <div className="space-y-6">
            {news.map((n, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group cursor-pointer"
              >
                <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E] mb-2 inline-block">{n.tag}</span>
                   <h4 className="text-xl font-bold leading-tight group-hover:text-[#22C55E] transition-colors">{n.title}</h4>
                   <p className="text-xs text-gray-400 mt-2 font-medium italic">{n.date}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                   <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-[40px] p-12 mt-20">
             <h3 className="text-2xl font-bold mb-6 italic">The Boilerplate</h3>
             <p className="text-gray-500 leading-relaxed font-medium text-lg">
                UrbanFlow is the world's leading urban mobility super-app, connecting millions of users to local services through a unified digital operating system. From high-speed rides (UrbanRide) to curated dining (UrbanEats) and professional home services (UrbanPro), UrbanFlow is orchestrating the future of modern metropolitan living.
             </p>
          </div>
        </div>

        <div className="space-y-12">
           <div className="bg-[#171717] rounded-[40px] p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 italic">Brand Assets</h3>
              <div className="space-y-6">
                 {[
                   { label: "UrbanFlow Logos", size: "2.4 MB", type: "ZIP" },
                   { label: "App Screenshots", size: "45 MB", type: "PNG" },
                   { label: "B-Roll Footage", size: "1.2 GB", type: "MP4" },
                 ].map((asset, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><ImageIcon className="w-4 h-4" /></div>
                         <div>
                            <p className="text-[10px] font-bold">{asset.label}</p>
                            <p className="text-[8px] text-gray-500 font-bold uppercase">{asset.type} • {asset.size}</p>
                         </div>
                      </div>
                      <Download className="w-4 h-4 text-[#BEF264] group-hover:translate-y-1 transition-transform" />
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white border border-gray-100 rounded-[40px] p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 italic">PR Contact</h3>
              <p className="text-gray-500 text-sm mb-8 font-medium italic leading-relaxed">For media inquiries, interview requests, and brand partnerships, please reach out to our global PR team.</p>
              <a href="mailto:press@urbanflow.com" className="flex items-center gap-3 text-[#22C55E] font-black text-sm uppercase tracking-tighter italic hover:gap-5 transition-all">
                press@urbanflow.com <Mail className="w-5 h-5" />
              </a>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                 <p className="text-2xl font-black italic">60</p>
                 <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Active Cities</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                 <p className="text-2xl font-black italic">1M+</p>
                 <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Partners</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
