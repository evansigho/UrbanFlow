import { motion } from "motion/react";
import { 
  Shield, 
  MapPin, 
  CreditCard, 
  Home, 
  Eye, 
  EyeOff, 
  Lock,
  UserCheck
} from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Shield,
      content: [
        { 
          label: "Identity Data", 
          desc: "Full name, email, phone number, and profile photo provided during registration.",
          icon: UserCheck
        },
        { 
          label: "Precise Geolocation", 
          desc: "We require continuous GPS access to match you with drivers and track deliveries in real-time.",
          icon: MapPin
        },
        { 
          label: "Payment Info", 
          desc: "Encrypted credit card tokens handled exclusively by PCI-compliant processors like Stripe.",
          icon: CreditCard
        },
        { 
          label: "Home Access", 
          desc: "For UrbanPro services, we collect entry instructions and address details strictly for service completion.",
          icon: Home
        }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Privacy Center</span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Transparency by <br /><span className="text-[#22C55E]">Design.</span></h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium">UrbanFlow is built on trust. We believe you should always know what data we collect and why we need it.</p>
      </motion.section>

      {/* Main Content */}
      <div className="space-y-24">
        {sections.map((section, idx) => (
          <section key={idx} className="space-y-12">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-black text-white rounded-2xl">
                  <section.icon className="w-6 h-6" />
               </div>
               <h2 className="text-3xl font-bold">{section.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.content.map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#F9FAF5] rounded-xl flex items-center justify-center mb-6 text-[#22C55E]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{item.label}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-12 bg-[#171717] text-white p-12 md:p-20 rounded-[56px] overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 italic">How we use it.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-medium">
              <div>
                <h5 className="text-[#BEF264] text-xl font-bold mb-4 italic">Optimization</h5>
                <p className="text-gray-400 text-sm leading-relaxed">We use location data to calculate the most efficient routes, reducing wait times and emissions across the city.</p>
              </div>
              <div>
                <h5 className="text-[#BEF264] text-xl font-bold mb-4 italic">Matching</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Data helps us connect you with the highest-rated driver or pro specifically suited for your current request.</p>
              </div>
              <div>
                <h5 className="text-[#BEF264] text-xl font-bold mb-4 italic">Personalization</h5>
                <p className="text-gray-400 text-sm leading-relaxed">Your order history allows us to recommend local bistros and FreshMART items tailored to your dietary taste.</p>
              </div>
            </div>
          </div>
          <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 border-[40px] border-white/5 rounded-full"></div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Data Sharing & Safety</h2>
            <p className="text-gray-500 leading-relaxed mb-8 font-medium">We never sell your data. We only share essential information with partners during active service windows.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                Phone numbers are masked for all calls
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                Address only revealed after booking confirmed
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                GPS tracking ends 5 minutes after drop-off
              </li>
            </ul>
          </div>
          <div className="bg-[#BEF264] p-12 rounded-[48px] text-black">
            <EyeOff className="w-12 h-12 mb-8" />
            <h3 className="text-2xl font-black italic mb-4">Total Control.</h3>
            <p className="text-sm font-bold leading-relaxed mb-8">You can request total data deletion, opt-out of AI profiling, or export your history at any time through the 'Privacy Hub' in your settings.</p>
            <button className="px-6 py-3 bg-black text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all">Go to Hub</button>
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-10 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">Our Social Contract: Your privacy is not a luxury, it's a right.</p>
      </footer>
    </div>
  );
}
