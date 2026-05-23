/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Ride from "./pages/Ride";
import Eats from "./pages/Eats";
import Pro from "./pages/Pro";
import Partners from "./pages/Partners";
import Safety from "./pages/Safety";
import Business from "./pages/Business";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import DriveAndEarn from "./pages/DriveAndEarn";
import UrbanProPartner from "./pages/UrbanProPartner";
import Insurance from "./pages/Insurance";
import DownloadHub from "./pages/DownloadHub";
import Impact from "./pages/Impact";
import Help from "./pages/Help";
import ConsumerApp from "./pages/ConsumerApp";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isConsumerApp = pathname === "/consumer-app";

  return (
    <div id="urban-flow" className={isConsumerApp ? "min-h-screen bg-[#FAFAFA] overflow-x-hidden" : "min-h-screen bg-[#F9FAF5] font-sans text-[#171717] overflow-x-hidden"}>
      {!isConsumerApp && <Navbar />}
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/eats" element={<Eats />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/drive" element={<DriveAndEarn />} />
          <Route path="/urban-pro-partner" element={<UrbanProPartner />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/download-hub" element={<DownloadHub />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/consumer-app" element={<ConsumerApp />} />
        </Routes>
      </main>
      {!isConsumerApp && <Footer />}
    </div>
  );
}
