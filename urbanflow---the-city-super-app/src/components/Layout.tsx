import { Link } from "react-router-dom";
import { 
  Smartphone,
  ArrowRight,
  Menu
} from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-sm">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#BEF264] rounded-lg flex items-center justify-center rotate-12 transition-transform group-hover:rotate-0">
              <Smartphone className="w-5 h-5 text-black -rotate-12 group-hover:rotate-0 transition-transform" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">UrbanFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/services" className="hover:text-black transition-colors">Services</Link>
            <Link to="/ride" className="hover:text-black transition-colors">Ride</Link>
            <Link to="/eats" className="hover:text-black transition-colors">Eats</Link>
            <Link to="/pro" className="hover:text-black transition-colors">UrbanPro</Link>
            <Link to="/partners" className="hover:text-black transition-colors">Partners</Link>
          </div>
        </div>
        <Link to="/download-hub" className="flex items-center gap-2 px-6 py-2 bg-[#171717] text-white text-sm font-semibold rounded-full hover:bg-black/90 transition-all shadow-md">
           Download <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20 text-sm">
          <div className="col-span-2 space-y-6">
             <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-[#BEF264] rounded-lg flex items-center justify-center rotate-12">
                <Smartphone className="w-5 h-5 text-black -rotate-12" />
              </div>
              UrbanFlow
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Empowering urban communities with the most reliable, fast, and integrated super-app experience.
            </p>
            <div className="flex gap-4">
              {['tw', 'ig', 'fb', 'li'].map(i => (
                <div key={i} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#BEF264] hover:text-black transition-colors cursor-pointer capitalize font-bold text-[10px]">
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-black uppercase tracking-widest text-[10px]">Product</h6>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><Link to="/ride" className="hover:text-black">UrbanRide</Link></li>
              <li><Link to="/eats" className="hover:text-black">UrbanEats</Link></li>
              <li><Link to="/pro" className="hover:text-black">UrbanPro</Link></li>
              <li><Link to="/business" className="hover:text-black">Business</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-black uppercase tracking-widest text-[10px]">Company</h6>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><Link to="/about" className="hover:text-black">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-black">Careers</Link></li>
              <li><Link to="/press" className="hover:text-black">Press</Link></li>
              <li><Link to="/safety" className="hover:text-black">Safety</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-black uppercase tracking-widest text-[10px]">Partners</h6>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><Link to="/drive" className="hover:text-black">Drive & Earn</Link></li>
              <li><Link to="/urban-pro-partner" className="hover:text-black">Join as a Pro</Link></li>
              <li><Link to="/insurance" className="hover:text-black">Insurance</Link></li>
              <li><Link to="/partners" className="hover:text-black">Partner Ecosystem</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-black uppercase tracking-widest text-[10px]">Download</h6>
            <Link to="/download-hub" className="space-y-2 block">
               <div className="bg-black p-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-black/80 transition-colors">
                  <Smartphone className="w-4 h-4 text-white" />
                  <span className="text-[8px] text-white font-bold whitespace-nowrap uppercase tracking-tighter">iOS Store</span>
               </div>
               <div className="bg-black p-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-black/80 transition-colors">
                  <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center text-[7px] text-white">▶</div>
                  <span className="text-[8px] text-white font-bold whitespace-nowrap uppercase tracking-tighter">Play Store</span>
               </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
          <p className="text-gray-400 text-xs font-medium">
            © 2026 UrbanFlow Inc. All rights reserved. Built with precision for the modern city.
          </p>
          <div className="flex gap-8 text-xs text-gray-500 font-medium">
            <Link to="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-black">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
