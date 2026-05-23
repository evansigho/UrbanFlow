import { motion } from "motion/react";
import { 
  Search, 
  Car, 
  ShoppingBag, 
  CreditCard, 
  User, 
  ShieldAlert, 
  ChevronRight,
  MessageSquare,
  Phone,
  ArrowRight
} from "lucide-react";

export default function Help() {
  const categories = [
    { title: "Ride Assistance", icon: Car, color: "bg-blue-50 text-blue-600" },
    { title: "Eats & Delivery", icon: ShoppingBag, color: "bg-green-50 text-green-600" },
    { title: "Payment & Wallet", icon: CreditCard, color: "bg-orange-50 text-orange-600" },
    { title: "Account & Profile", icon: User, color: "bg-purple-50 text-purple-600" },
    { title: "Safety & Security", icon: ShieldAlert, color: "bg-red-50 text-red-600" },
    { title: "Partner Support", icon: MessageSquare, color: "bg-gray-50 text-gray-600" },
  ];

  const popularArticles = [
    "How to schedule a ride in advance",
    "Understanding your digital wallet and balance",
    "Reporting a missing item from your delivery",
    "Updating your payment method",
    "UrbanFlow's commitment to safety",
    "Becoming a mobility partner"
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      {/* Hero / Search */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">How can we <br /><span className="text-[#22C55E]">help you?</span></h1>
          <div className="relative group max-w-2xl mx-auto">
             <div className="absolute inset-x-0 inset-y-0 -m-1 bg-gradient-to-r from-[#BEF264] to-[#22C55E] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="relative flex items-center bg-white border border-gray-100 rounded-full px-8 py-5 shadow-2xl">
                <Search className="w-6 h-6 text-gray-400 mr-4" />
                <input 
                  type="text" 
                  placeholder="Search articles, issues, or keywords..." 
                  className="w-full bg-transparent outline-none text-lg font-medium placeholder:text-gray-300"
                />
             </div>
          </div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {categories.map((cat, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer flex items-center gap-6"
             >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${cat.color}`}>
                   <cat.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                   <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
                   <p className="text-sm text-gray-400 font-medium">View 20+ articles</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-200" />
             </motion.div>
           ))}
        </div>
      </section>

      {/* Popular Articles & Support */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
         <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold mb-8">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {popularArticles.map((article, i) => (
                 <div key={i} className="group p-5 bg-white rounded-2xl border border-gray-100 flex items-center justify-between hover:border-[#BEF264] transition-colors cursor-pointer">
                    <p className="font-bold text-gray-700 group-hover:text-black transition-colors">{article}</p>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#22C55E] group-hover:translate-x-1 transition-all" />
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 italic">Still stuck?</h2>
            <div className="p-8 bg-[#171717] rounded-[40px] text-white space-y-8 relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Contact Support</h4>
                  <p className="text-sm text-gray-400 mb-8">Our expert team is available 24/7 to resolve any issue you might have.</p>
                  
                  <div className="space-y-4">
                     <button className="w-full py-4 bg-[#BEF264] text-black font-bold rounded-xl flex items-center justify-center gap-3 hover:scale-105 transition-all">
                        <MessageSquare className="w-5 h-5" /> Live Chat
                     </button>
                     <button className="w-full py-4 bg-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all border border-white/5">
                        <Phone className="w-5 h-5" /> Request a Call
                     </button>
                  </div>
               </div>
               <div className="absolute right-[-20%] top-[-10%] w-48 h-48 bg-[#BEF264]/10 rounded-full blur-[60px]"></div>
            </div>
         </div>
      </section>

      {/* Trust Badge */}
      <section className="max-w-4xl mx-auto text-center py-20 bg-gray-50 rounded-[56px] border border-gray-100">
         <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8">
            <ShieldAlert className="w-10 h-10 text-[#22C55E]" />
         </div>
         <h2 className="text-3xl font-bold mb-4 italic">Safety Center</h2>
         <p className="text-gray-500 max-w-sm mx-auto font-medium mb-8">Resources and tools to ensure every UrbanRide and UrbanPro experience is secure and respectful.</p>
         <button className="font-bold text-[#22C55E] hover:underline decoration-2 underline-offset-4 flex items-center gap-2 mx-auto">
            Visit Safety Center <ArrowRight className="w-4 h-4" />
         </button>
      </section>
    </div>
  );
}
