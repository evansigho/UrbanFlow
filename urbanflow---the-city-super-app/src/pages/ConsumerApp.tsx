import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  ArrowRight, 
  Check, 
  MapPin, 
  Lock, 
  CheckCircle2, 
  Sliders, 
  LogOut, 
  Navigation, 
  ChevronRight, 
  Search, 
  Bell, 
  Heart, 
  Minus, 
  Plus, 
  X, 
  Sparkles, 
  Bike, 
  Compass, 
  CheckCircle, 
  HelpCircle, 
  RefreshCw, 
  Wrench, 
  ArrowLeft,
  Star,
  Car,
  User,
  CreditCard,
  MessageSquare,
  Phone,
  Send,
  Camera,
  ShieldCheck,
  AlertTriangle,
  Settings,
  ShieldAlert,
  Clock,
  Eye,
  LogOut as LeaveIcon
} from "lucide-react";
import { Link } from "react-router-dom";

// Types corresponding to simulated endpoints
type ActiveTab = "home" | "ride" | "eat" | "book" | "profile";
type RideStep = "input" | "searching" | "matched" | "progress" | "completed";
type EatStep = "restaurants" | "meals" | "ordering" | "timeline";
type ProStep = "ai_chat" | "diagnosing" | "options" | "bidding" | "paired_chat" | "finished";

interface RideOption {
  id: string;
  name: string;
  price: number;
  eta: number;
  type: string;
  desc: string;
  icon: any;
}

interface Restaurant {
  name: string;
  logo: string;
  cuisine: string;
  rating: number;
  time: string;
  meals: Array<{
    name: string;
    price: number;
    desc: string;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  }>;
}

export default function ConsumerApp() {
  // Brand Launch & Registration states
  const [isSplashActive, setIsSplashActive] = useState<boolean>(true);
  const [authScreen, setAuthScreen] = useState<"welcome" | "login" | "register" | "verify" | "authorized">("welcome");
  const [isProfileConfigured, setIsProfileConfigured] = useState<boolean>(false);

  // Authentication inputs
  const [regName, setRegName] = useState<string>("");
  const [regEmail, setRegEmail] = useState<string>("");
  const [regPhone, setRegPhone] = useState<string>("");
  const [regPassword, setRegPassword] = useState<string>("");
  const [regLoading, setRegLoading] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string>("");

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  // Multi-step signup page-by-page selections
  const [signUpPage, setSignUpPage] = useState<number>(1);
  const [signUpPref, setSignUpPref] = useState<string>("");
  const [signUpLocation, setSignUpLocation] = useState<string>("");
  const [signUpHearAbout, setSignUpHearAbout] = useState<string>("");

  // Deep KYC profile & secure billing setup configurations
  const [kycIdType, setKycIdType] = useState<"passport" | "license" | "idcard">("passport");
  const [kycDocSerial, setKycDocSerial] = useState<string>("");
  const [kycBiometrics, setKycBiometrics] = useState<boolean>(true);
  const [billingPlan, setBillingPlan] = useState<"payg" | "escrow" | "invoice">("escrow");
  const [creditCardNum, setCreditCardNum] = useState<string>("");
  const [creditCardExpiry, setCreditCardExpiry] = useState<string>("");
  const [creditCardCvc, setCreditCardCvc] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  const [billingZip, setBillingZip] = useState<string>("");

  // Onboarding Hub states
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [onboardingStep, setOnboardingStep] = useState<number>(1);
  const [userName, setUserName] = useState<string>("Brooks Jennings");
  const [tempUserName, setTempUserName] = useState<string>("Brooks Jennings");
  const [startingFunds, setStartingFunds] = useState<number>(250);

  // Auto-dismiss splash screen after exactly 3 seconds
  useEffect(() => {
    if (!isSplashActive) return;
    const timer = setTimeout(() => {
      setIsSplashActive(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSplashActive]);

  // Mobile app navigation state
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  
  // Wallet state
  const [walletBalance, setWalletBalance] = useState<number>(248.50);
  const [isAddingFunds, setIsAddingFunds] = useState<boolean>(false);
  const [addAmount, setAddAmount] = useState<string>("50");
  const [transactions, setTransactions] = useState([
    { id: 1, title: "In-N-Out Triple Steak", category: "Food Delivery", amount: -18.25, date: "Today" },
    { id: 2, title: "Downtown Eco Ride", category: "Ride Booking", amount: -12.50, date: "Yesterday" },
    { id: 3, title: "Wallet Auto-Refill Credit", category: "Deposit", amount: 100.00, date: "May 20, 2026" },
  ]);

  // Global Notification Banner
  const [notification, setNotification] = useState<string | null>(null);
  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 4000);
  };

  // --- 1. RIDES BOOKING STATE ENGINE ---
  const [rideStep, setRideStep] = useState<RideStep>("input");
  const [pickup, setPickup] = useState<string>("Soma Grand Central, 10th St");
  const [destination, setDestination] = useState<string>("Salesforce Tower, Mission St");
  const [selectedRideId, setSelectedRideId] = useState<string>("uberx");
  const [matchedDriver, setMatchedDriver] = useState<any>(null);
  const [driverProgress, setDriverProgress] = useState<number>(0);
  const [rideRating, setRideRating] = useState<number>(5);
  const [hasRatedRide, setHasRatedRide] = useState<boolean>(false);

  // Dynamic state machine attributes according to Uber Journey Knowledge
  const [rideDispatchLogs, setRideDispatchLogs] = useState<string>("Broadcasting request...");
  const [driverArrivalStatus, setDriverArrivalStatus] = useState<"approaching" | "arrived" | "started" | "completed">("approaching");
  const [tripProgressPercentage, setTripProgressPercentage] = useState<number>(0);
  const [tripState, setTripState] = useState<"Requested" | "Accepted" | "Arrived" | "Started" | "Completed">("Requested");

  const rideOptions: RideOption[] = [
    { id: "uberx", name: "UberX", price: 8.50, eta: 3, type: "Electric Sedan", desc: "Everyday direct runs", icon: Car },
    { id: "comfort", name: "Comfort", price: 14.00, eta: 4, type: "Premium SUV", desc: "Spacious cabin & quiet preference", icon: ShieldCheck },
    { id: "xl", name: "Uber XL", price: 21.50, eta: 6, type: "Large Van", desc: "Room for teams up to 6 riders", icon: Bike },
    { id: "black", name: "Uber Black", price: 32.00, eta: 5, type: "Elite Luxury Sedan", desc: "Professional drivers & top-tier models", icon: Sparkles },
  ];

  const handleRequestRide = () => {
    setRideStep("searching");
    setTripState("Requested");
    setRideDispatchLogs("Initializing Geolocation Engine...");
    
    setTimeout(() => {
      setRideDispatchLogs("Pricing Engine: Base, distance, dynamic surge estimation active...");
    }, 1000);

    setTimeout(() => {
      setRideDispatchLogs("Driver Matching System: checking near-range driver rating and response index...");
    }, 2200);

    setTimeout(() => {
      setMatchedDriver({
        name: "Marcus Vance",
        rating: 4.96,
        totalRides: 1420,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        vehicle: "White Tesla Model Y",
        plate: "7XYZ99",
        lat: 10,
        lng: 15
      });
      setTripState("Accepted");
      setDriverArrivalStatus("approaching");
      setRideStep("matched");
      showToast("Driver Marcus Vance accepted your ride request!");
    }, 4000);
  };

  useEffect(() => {
    let interval: any;
    if (rideStep === "matched") {
      setDriverProgress(0);
      interval = setInterval(() => {
        setDriverProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDriverArrivalStatus("arrived");
            setTripState("Arrived");
            showToast("🔔 Driver has arrived at your pickup coordinates!");
            return 100;
          }
          return prev + 10;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [rideStep]);

  // Start trip en-route progress bar
  useEffect(() => {
    let interval: any;
    if (rideStep === "progress") {
      setTripProgressPercentage(0);
      setTripState("Started");
      interval = setInterval(() => {
        setTripProgressPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setRideStep("completed");
            setTripState("Completed");
            const price = rideOptions.find((o) => o.id === selectedRideId)?.price || 8.50;
            setWalletBalance((b) => b - price);
            setTransactions((prevTx) => [
              { id: Date.now(), title: `Uber Completed: ${selectedRideId.toUpperCase()}`, category: "Ride Booking", amount: -price, date: "Just Now" },
              ...prevTx
            ]);
            setHasRatedRide(false);
            showToast("🎉 Destination reached! Wallet processed automatically.");
            return 100;
          }
          return prev + 10;
        });
      }, 800);
    }
    return () => clearInterval(interval);
  }, [rideStep, selectedRideId]);

  // --- 2. EATS (FOOD CATALOG + POPULAR OUTLETS + MEAL DEETS + TRACKING) ---
  const [eatStep, setEatStep] = useState<EatStep>("restaurants");
  const [selectedCategory, setSelectedCategory] = useState<string>("Fast Food");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("In-N-Out");
  const [selectedMeal, setSelectedMeal] = useState<any>(null);
  const [foodTimelineProgress, setFoodTimelineProgress] = useState<number>(1);
  const [foodRating, setFoodRating] = useState<number>(5);
  const [hasRatedFood, setHasRatedFood] = useState<boolean>(false);

  const restaurantsData: Record<string, Restaurant[]> = {
    "Fast Food": [
      {
        name: "In-N-Out Burger",
        logo: "🍔",
        cuisine: "Famous West Coast Burgers & Animal Fries",
        rating: 4.8,
        time: "15-25 min",
        meals: [
          { name: "Double-Double Combo Meal", price: 9.90, desc: "Two 100% American beef patties, fresh onions, lettuce, tomato and signature spread.", calories: 670, protein: "37g", carbs: "39g", fat: "41g" },
          { name: "Animal Style Cheeseburger", price: 5.40, desc: "Beef patty mustard-cooked, extra spread, pickles and grilled caramelized onions.", calories: 480, protein: "22g", carbs: "28g", fat: "27g" },
          { name: "Animal Style Hand-Cut Fries", price: 4.50, desc: "Freshly cut russet potatoes smothered in melted cheese, layout spread, and grilled onions.", calories: 390, protein: "8g", carbs: "52g", fat: "19g" }
        ]
      },
      {
        name: "McDonald's",
        logo: "🍟",
        cuisine: "Iconic USA Crispy Fries & Hot Sandwiches",
        rating: 4.4,
        time: "10-20 min",
        meals: [
          { name: "Big Mac Meal Deal", price: 8.85, desc: "Two golden beef patties, special sauce, crisp lettuce, cheese, pickles, onions on sesame bun.", calories: 550, protein: "25g", carbs: "46g", fat: "30g" },
          { name: "Crispy Chicken Deluxe", price: 7.90, desc: "Crispy breaded chicken breast fillet with shredded lettuce, Roma tomatoes and savory mayo.", calories: 530, protein: "27g", carbs: "45g", fat: "26g" },
          { name: "10-Piece Chicken McNuggets", price: 6.25, desc: "Tender, juicy breast meat nuggets in crispy tempura coating served with signature sauces.", calories: 440, protein: "22g", carbs: "26g", fat: "24g" }
        ]
      },
      {
        name: "Shake Shack",
        logo: "🥤",
        cuisine: "All-Natural Angus Beef & Thick Custards",
        rating: 4.7,
        time: "20-30 min",
        meals: [
          { name: "ShackBurger Double", price: 10.95, desc: "Double cheeseburger topped with crisp lettuce, tomato, and proprietary ShackSauce.", calories: 810, protein: "51g", carbs: "26g", fat: "56g" },
          { name: "Hot Honey Crispy Chicken", price: 8.50, desc: "Spiced crispy breast glazed with sweet wildflower honey, custom slaw and sweet pickles.", calories: 620, protein: "32g", carbs: "51g", fat: "28g" }
        ]
      },
      {
        name: "Chick-fil-A",
        logo: "🍗",
        cuisine: "Pressure Cooked Chicken & Waffle Fries",
        rating: 4.9,
        time: "15-25 min",
        meals: [
          { name: "Spicy Deluxe Chicken Sandwich", price: 6.85, desc: "Boneless breast seasoned with hot pepper, pressure cooked, pickles, lettuce, pepper jack.", calories: 540, protein: "33g", carbs: "41g", fat: "25g" },
          { name: "Waffle Potato Fries Large", price: 3.60, desc: "Waffle-cut potatoes cooked in peanut oil until tender-crisp inside and golden outside.", calories: 460, protein: "6g", carbs: "52g", fat: "24g" }
        ]
      }
    ],
    "Healthy Eats": [
      {
        name: "Sweetgreen",
        logo: "🥗",
        cuisine: "Organic Grain Bowls & Fresh Local Greens",
        rating: 4.8,
        time: "20-30 min",
        meals: [
          { name: "Harvest Bowl (Warm)", price: 14.50, desc: "Warm wild rice, shredded kale, apples, sweet potatoes, roasted chicken, local goat cheese.", calories: 705, protein: "36g", carbs: "54g", fat: "40g" },
          { name: "Guacamole Greens Salad", price: 13.90, desc: "Organic romaine, spring mix, roasted chicken, local tomatoes, red onions, tortilla chips, avocado.", calories: 510, protein: "29g", carbs: "22g", fat: "35g" },
        ]
      }
    ],
    "Bakeries & Cafes": [
      {
        name: "Starbucks Coffee",
        logo: "☕",
        cuisine: "Handcrafted Espressos & Warm Danishes",
        rating: 4.6,
        time: "10-15 min",
        meals: [
          { name: "Iced Brown Sugar Oat Shaken Espresso", price: 5.95, desc: "Blonde espresso shaken with brown sugar, cinnamon, topped with rich oat milk.", calories: 120, protein: "2g", carbs: "20g", fat: "3g" },
          { name: "Double Smoked Bacon & Egg Sandwich", price: 6.25, desc: "Smoked bacon, fried egg, cheddar on custom butter croissant bun.", calories: 510, protein: "21g", carbs: "42g", fat: "28g" },
        ]
      }
    ],
    "Desserts": [
      {
        name: "Crumbl Cookies",
        logo: "🍪",
        cuisine: "Fresh Baked Giant Weekly Rotating Cookies",
        rating: 4.9,
        time: "15-20 min",
        meals: [
          { name: "Classic Milk Chocolate Chip", price: 4.75, desc: "Incredibly thick, soft cookie loaded with premium semi-sweet chocolate chunks.", calories: 640, protein: "8g", carbs: "82g", fat: "30g" }
        ]
      }
    ]
  };

  const handlePlaceOrder = (meal: any) => {
    setSelectedMeal(meal);
    setEatStep("ordering");
    setTimeout(() => {
      setEatStep("timeline");
      setFoodTimelineProgress(1);
      // Calculate total with service fee ($1.50) + delivery fee ($2.00)
      const totalCost = meal.price + 3.50; 
      setWalletBalance((b) => b - totalCost);
      setTransactions((prev) => [
        { id: Date.now(), title: `${selectedSubCategory} - ${meal.name} (Taxes & Fees Incl.)`, category: "Food Delivery", amount: -totalCost, date: "Just Now" },
        ...prev
      ]);
    }, 2000);
  };

  useEffect(() => {
    let timer: any;
    if (eatStep === "timeline") {
      timer = setInterval(() => {
        setFoodTimelineProgress((prev) => {
          if (prev >= 6) {
            clearInterval(timer);
            showToast(`🎉 Delivered! Order from ${selectedSubCategory} is at your door. Photo proof uploaded!`);
            setHasRatedFood(false);
            return 6;
          }
          const next = prev + 1;
          if (next === 2) showToast("🍳 Kitchen Accepted: Chefs are validating items and custom modifiers.");
          if (next === 3) showToast("🚴 Match Engine Confirmed: Courier Leo (Electric Cargo-Bike) assigned.");
          if (next === 4) showToast("🏪 Courier Arrived: Leo is waiting at restaurant counter for packaging completion.");
          if (next === 5) showToast("⚡ Out for Delivery: Leo is on route! Custom routing AI bypasses traffic.");
          return next;
        });
      }, 4000); // Elegant 4-second paced simulation steps
    }
    return () => clearInterval(timer);
  }, [eatStep]);

  // --- 3. PRO SERVICES (CHAT-BOT AI DIAGNOSING & SECURE ESCROW BIDDING) ---
  const [proStep, setProStep] = useState<ProStep>("ai_chat");
  const [issueDescription, setIssueDescription] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "ai" | "fixer"; text: string; time: string; block?: boolean }>>([
    { sender: "ai", text: "Hello! Welcome to UrbanPro certified home & workspace maintenance. Describe what you need fixed (e.g. leaking sink, short circuit, door lock jams) or select a quick issue preset to diagnose right away!", time: "11:40 AM" }
  ]);
  const [detectedIssue, setDetectedIssue] = useState<any>(null);
  const [selectedFixOption, setSelectedFixOption] = useState<any>(null);
  const [proRating, setProRating] = useState<number>(5);
  const [hasRatedPro, setHasRatedPro] = useState<boolean>(false);

  const issuePresets = [
    { 
      title: "🚰 Leaking Sink Pipe", 
      desc: "Water drips constantly from the lower bracket connector in the kitchen cabinet.",
      diagnosis: {
        problem: "Main washer seal degradation & joint erosion",
        complexity: "Medium",
        options: [
          { name: "Eco Temporary Tape Fix", price: 45.00, time: "30 min", warranty: "3 months guarantee" },
          { name: "Standard Brass Joint Replace", price: 110.00, time: "45 min", warranty: "2 year parts guarantee" },
          { name: "Heavy Duty High-Pressure Re-piping", price: 230.00, time: "90 min", warranty: "Lifetime premium guarantee" }
        ]
      }
    },
    { 
      title: "⚡ Flickering Fuse Box", 
      desc: "Loud humming noises and frequent blackouts in the living room breaker panel.",
      diagnosis: {
        problem: "Corroded overload switch bypass breaker terminal",
        complexity: "High (Potential Fire Hazard!)",
        options: [
          { name: "Fuse Switch Safety Isolation", price: 85.00, time: "40 min", warranty: "6 months safety guarantee" },
          { name: "Full Industrial Smart Breaker Swap", price: 180.00, time: "70 min", warranty: "5 year premium guarantee" }
        ]
      }
    },
    { 
      title: "🎨 Cracking Drywall", 
      desc: "Moisture build-up leading to paint peeling off on the parlor hallway wall.",
      diagnosis: {
        problem: "Subsurface wet drywall rot and chemical wall oxidation",
        complexity: "Low-Medium",
        options: [
          { name: "Cosmetic Sanding & Patching", price: 75.00, time: "60 min", warranty: "1 year color match warranty" },
          { name: "Premium Drywall Replacing", price: 140.00, time: "120 min", warranty: "3 year premium warranty" }
        ]
      }
    },
    { 
      title: "🔑 Jammed Front Lock", 
      desc: "Heavy biometric cylinder tension preventing the physical key from turning easily.",
      diagnosis: {
        problem: "Cylinder deadbolt misaligned locking pin",
        complexity: "Low",
        options: [
          { name: "Precision Pin Realignment & Lube", price: 60.00, time: "25 min", warranty: "6 months guarantee" },
          { name: "Premium Security Cylinder Swap", price: 125.00, time: "40 min", warranty: "3 year master lock safety rating" }
        ]
      }
    }
  ];

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;
    
    // Privacy / Contact Exchange Scanner
    const contactRegex = /(\d{5,15})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(@\w+)/gi;
    const containsContact = contactRegex.test(textToSend);

    const newUserMsg = { sender: "user" as const, text: textToSend, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatMessages((prev) => [...prev, newUserMsg]);

    if (containsContact && proStep === "paired_chat") {
      setTimeout(() => {
        setChatMessages((prev) => [...prev, {
          sender: "ai",
          text: "🔒 SECURITY SAFEGUARD DETECTED: To prevent phishing and fraud, UrbanPro system architecture restricts direct contact exchanges of phone numbers/emails until the service professional physically arrives. Please continue communicating through our local encrypted secure chat application.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          block: true
        }]);
        showToast("Encrypted privacy filter blocked contact exchange!");
      }, 800);
      return;
    }

    if (proStep === "ai_chat") {
      setIssueDescription(textToSend);
      setProStep("diagnosing");
      setTimeout(() => {
        const matched = issuePresets.find(p => textToSend.toLowerCase().includes(p.title.split(" ").slice(1).join(" ").toLowerCase())) || issuePresets[0];
        setDetectedIssue(matched.diagnosis);
        setProStep("options");
        showToast("AI diagnostics scanning sequence complete!");
      }, 3000);
    } else if (proStep === "paired_chat") {
      setTimeout(() => {
        setChatMessages((prev) => [...prev, {
          sender: "fixer",
          text: "Thanks for the message! I am currently packing my tools and heading directly towards your coordinates. I see the diagnosis report and will have this resolved in no time.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 3000);
    }
  };

  const handleSelectOption = (option: any) => {
    setSelectedFixOption(option);
    setProStep("bidding");
    setTimeout(() => {
      setProStep("paired_chat");
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `🎉 BID CONFIRMED: Certified master fixer Dave Miller (Plumbing & HVAC Specialist, 4.95 ★ Rating, Over 1,240 verified local tasks) has accepted your bid of $${option.price.toFixed(2)} under the "${option.name}" tier.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          sender: "fixer",
          text: "Hello! My name is Dave. I lead local repairs in your suburb. I've accepted your bid. Feel free to give details or specify preferred parking space here.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      showToast("Matched with locksmith and plumbing specialist Dave Miller!");
    }, 4500);
  };

  const handleCompleteProFix = () => {
    setWalletBalance((b) => b - selectedFixOption.price);
    setTransactions((prev) => [
      { id: Date.now(), title: `Certified Repair: ${selectedFixOption.name}`, category: "Pro Services", amount: -selectedFixOption.price, date: "Just Now" },
      ...prev
    ]);
    setProStep("finished");
    setHasRatedPro(false);
  };

  // --- 4. PROFILE SECURITY & CONTROLS ---
  const [enableBiometrics, setEnableBiometrics] = useState<boolean>(true);
  const [twoFactorToken, setTwoFactorToken] = useState<boolean>(false);
  const [privateBrowsing, setPrivateBrowsing] = useState<boolean>(false);

  return (
    <div id="consumer-isolated-container" className="min-h-screen bg-slate-50 flex justify-center items-center py-0 sm:py-8 font-sans antialiased text-neutral-800 selection:bg-[#22C55E]/30 overflow-hidden">
      
      {/* Dynamic Toast System in Light Palette */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-4 z-50 max-w-sm w-[90%] bg-white border border-neutral-200 text-neutral-800 shadow-xl rounded-2xl p-4 flex items-start gap-3 backdrop-blur-md"
          >
            <div className="bg-[#22C55E]/10 p-2 rounded-xl text-[#22C55E]">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-neutral-900">System Notification</p>
              <p className="text-[11px] text-neutral-600 mt-0.5 leading-relaxed">{notification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Ratio Container matching iPhone display, white mode styled */}
      <div 
        id="phone-view-canvas" 
        className="w-full max-w-md min-h-screen sm:min-h-[850px] sm:max-h-[850px] sm:rounded-[40px] bg-white flex flex-col justify-between overflow-hidden shadow-2xl border border-neutral-200 relative text-neutral-800"
      >
        
        {/* iOS-like White Theme Mobile Status Bar */}
        <div className="bg-neutral-50/90 text-neutral-800 px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold select-none border-b border-neutral-100">
          <div className="flex items-center gap-1">
            <span className="font-bold tracking-wide font-mono text-[11px] text-neutral-800">09:41 AM</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-400 font-mono text-[10px]">
            <span>SECURE TERMINAL</span>
          </div>
        </div>

        {/* Dynamic App Area (Onboarding / Selected View) */}
        <div className="flex-1 overflow-y-auto px-4 py-4 bg-[#FAFAFA]">
          <AnimatePresence mode="wait">
            {isSplashActive ? (
              <motion.div
                key="splash_screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col justify-center items-center text-center px-6 relative min-h-[500px]"
              >
                {/* Visual central logo with circular pulse beneath */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center p-8 bg-white border border-neutral-100 rounded-[32px] shadow-sm mb-6">
                    <Smartphone className="w-16 h-16 text-[#22C55E] stroke-[1.8]" />
                  </div>
                  
                  <h2 className="text-3.5xl font-black uppercase tracking-widest text-[#171717] font-sans">
                    URBAN<span className="text-[#22C55E]">FLOW</span>
                  </h2>
                  <p className="text-[10px] text-neutral-450 font-mono font-bold uppercase tracking-widest mt-2 bg-neutral-105 border border-neutral-200/50 px-2.5 py-1 rounded-md">
                    Secure Sandbox Workspace
                  </p>
                </div>

                {/* Pulsing halo directly beneath the logo */}
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#22C55E]/5 animate-pulse z-0 pointer-events-none" />
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-[#22C55E]/15 animate-ping opacity-30 z-0 pointer-events-none" />
              </motion.div>
            ) : authScreen !== "authorized" ? (
              <motion.div
                key="auth_flow"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-between py-2 min-h-[500px]"
                id="auth-flow"
              >
                {/* Auth Screen selector */}
                {authScreen === "welcome" && (
                  <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div className="text-center space-y-2">
                      <div className="inline-flex p-3 bg-[#22C55E]/10 text-[#22C55E] rounded-2xl mb-2 border border-[#22C55E]/20">
                        <Lock className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight font-sans">Verification Gateway</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto font-medium font-sans">
                        Verify your credentials to access the terminal. Manage pre-authorized funds, request zero-emission transit, or order food.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <button 
                        onClick={() => setAuthScreen("login")}
                        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                      >
                        <User className="w-4.5 h-4.5" /> Sign In with Existing ID
                      </button>

                      <button 
                        onClick={() => {
                          setSignUpPage(1);
                          setAuthScreen("register");
                        }}
                        className="w-full bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 font-extrabold py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xs transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                      >
                        <Sparkles className="w-4.5 h-4.5 text-[#22C55E]" /> Register Profile Account
                      </button>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider font-sans">
                        🛡️ Encrypted by Safety Shield
                      </p>
                    </div>
                  </div>
                )}

                {authScreen === "login" && (
                  <div className="space-y-4 flex-1 flex flex-col justify-center text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <button onClick={() => setAuthScreen("welcome")} className="bg-white border border-neutral-200 p-2 rounded-xl text-neutral-400 hover:text-neutral-850 shadow-xs cursor-pointer">
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div>
                        <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider font-sans">Sign In to Profile</h3>
                        <p className="text-[10px] text-neutral-500 font-sans">Access authorized dashboard services.</p>
                      </div>
                    </div>

                    <div className="bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm space-y-3.5">
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 block font-sans">Authentication Email / ID</label>
                        <input 
                          type="email"
                          placeholder="your.email@example.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-850 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-widest text-[#22C55E] block font-sans">Access Key Password</label>
                        <input 
                          type="password"
                          placeholder="••••••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-850 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                        />
                      </div>

                      {/* Demo credential filler */}
                      <button 
                        type="button" 
                        onClick={() => {
                          setLoginEmail("brooks@urbanflow.io");
                          setLoginPassword("password");
                          showToast("Demo credentials loaded! Click Sign In to link Brooks Jennings.");
                        }}
                        className="text-[10px] text-[#22C55E] hover:underline font-extrabold block text-left cursor-pointer font-sans"
                      >
                        💡 Autofill sandbox demo credentials?
                      </button>

                      <button 
                        onClick={() => {
                          if (!loginEmail.trim() || !loginPassword.trim()) {
                            showToast("Please provide both email/username and password!");
                            return;
                          }
                          setLoginLoading(true);
                          setTimeout(() => {
                            setLoginLoading(false);
                            const name = loginEmail.includes("brooks") ? "Brooks Jennings" : loginEmail.split("@")[0];
                            setUserName(name);
                            setTempUserName(name);
                            setAuthScreen("authorized");
                            setIsProfileConfigured(false); // Go directly to detailed verification & billing configuration!
                            showToast(`Authorized successfully! Complete secure configuration.`);
                          }, 1200);
                        }}
                        disabled={loginLoading}
                        className="w-full bg-[#22C55E] hover:bg-[#1eb051] text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-md border-b-2 border-b-emerald-600 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                      >
                        {loginLoading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" /> Fetching Account Vault...
                          </>
                        ) : (
                          <>
                            Confirm Credentials <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {authScreen === "register" && (
                  <div className="space-y-4 flex-1 flex flex-col justify-center text-left font-sans animate-fade">
                    {/* Multi-step registration header */}
                    <div className="flex items-center justify-between mb-1 font-sans">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => {
                            if (signUpPage > 1) {
                              setSignUpPage(signUpPage - 1);
                            } else {
                              setAuthScreen("welcome");
                            }
                          }} 
                          className="bg-white border border-neutral-200 p-2 rounded-xl text-neutral-405 hover:text-neutral-800 shadow-xs cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                          <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider">Create Profile</h3>
                          <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest font-mono">STEP {signUpPage} OF 5</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 bg-emerald-50 text-[#22C55E] border border-emerald-100 rounded-full font-black uppercase font-mono">Signup</span>
                    </div>

                    {/* Step 1: Core Credentials Input */}
                    {signUpPage === 1 && (
                      <div className="bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm space-y-3.5 font-sans">
                        <div>
                          <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-1">Personal Credentials</h4>
                          <p className="text-[10px] text-neutral-500 leading-relaxed mb-3">Provide your fundamental access username and security authentication keys.</p>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-black tracking-widest text-[#22C55E] block">Full Name</label>
                          <input 
                            type="text"
                            placeholder="e.g. Brooks Jennings"
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-850 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all font-sans"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 block">Email Address</label>
                          <input 
                            type="email"
                            placeholder="username@urbanflow.io"
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-850 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-black tracking-widest text-neutral-405 block">Contact Phone</label>
                          <input 
                            type="tel"
                            placeholder="+1 (555) 019-2834"
                            value={regPhone}
                            onChange={(e) => setRegPhone(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-850 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 block">Create Password</label>
                          <input 
                            type="password"
                            placeholder="At least 6 characters"
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-850 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white transition-all"
                          />
                        </div>

                        <button 
                          onClick={() => {
                            if (!regName.trim() || !regEmail.trim() || !regPhone.trim() || !regPassword.trim()) {
                              showToast("Please complete all profile details to continue!");
                              return;
                            }
                            setSignUpPage(2);
                            showToast("Step 1 done! Now choose your account preferences.");
                          }}
                          className="w-full bg-[#22C55E] hover:bg-[#1eb051] text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer font-sans"
                        >
                          Continue to Preferences <ChevronRight className="w-4 h-4 stroke-[3px]" />
                        </button>
                      </div>
                    )}

                    {/* Step 2: Choose Primary Use preference */}
                    {signUpPage === 2 && (
                      <div className="bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm space-y-3.5 font-sans animate-fade">
                        <div>
                          <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-1">Primary App Preference</h4>
                          <p className="text-[10px] text-neutral-500 leading-relaxed mb-1">Select what you will primarily use the platform for. Tap an option to confirm.</p>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Zero-Emission Electric Rides",
                            "Fast Delivery & Smart Eats",
                            "Smart Diagnostics & Home Repair",
                            "Premium Corporate & Business Travel",
                            "All-In-One Unified Ecosystem"
                          ].map((pref) => (
                            <button
                              key={pref}
                              onClick={() => {
                                setSignUpPref(pref);
                                setSignUpPage(3);
                                showToast(`Selected preference: ${pref}`);
                              }}
                              className={`w-full py-3.5 px-4 rounded-2xl text-xs text-left font-extrabold border transition-all cursor-pointer ${signUpPref === pref ? "bg-emerald-50 border-[#22C55E] text-emerald-950 font-black shadow-xs" : "bg-neutral-50 text-neutral-750 border-neutral-200 hover:bg-neutral-100"}`}
                            >
                              <div className="flex justify-between items-center w-full">
                                <span>{pref}</span>
                                {signUpPref === pref ? <Check className="w-4 h-4 text-[#22C55E] stroke-[3px]" /> : <ChevronRight className="w-4 h-4 text-neutral-300" />}
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <button 
                            onClick={() => setSignUpPage(1)}
                            className="flex-1 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-600 font-extrabold py-3 rounded-2xl text-xs uppercase cursor-pointer"
                          >
                            Back
                          </button>
                          <button 
                            disabled={!signUpPref}
                            onClick={() => setSignUpPage(3)}
                            className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-black py-3 rounded-2xl text-xs uppercase cursor-pointer disabled:opacity-50"
                          >
                            Next Step
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Choose Primary Location Coverage area */}
                    {signUpPage === 3 && (
                      <div className="bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm space-y-3.5 font-sans animate-fade">
                        <div>
                          <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-1">Operating Coverage Location</h4>
                          <p className="text-[10px] text-neutral-500 leading-relaxed mb-1">Choose your primary regional zone. Tap an option to progress.</p>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Downtown Metro Core",
                            "North Uptown Suburbs",
                            "West Bay & Silicon Valley",
                            "East Valley Tech Corridor",
                            "Universal Global Commuter Mode"
                          ].map((loc) => (
                            <button
                              key={loc}
                              onClick={() => {
                                setSignUpLocation(loc);
                                setSignUpPage(4);
                                showToast(`Selected location: ${loc}`);
                              }}
                              className={`w-full py-3.5 px-4 rounded-2xl text-xs text-left font-extrabold border transition-all cursor-pointer ${signUpLocation === loc ? "bg-emerald-50 border-[#22C55E] text-emerald-950 font-black shadow-xs" : "bg-neutral-50 text-neutral-750 border-neutral-200 hover:bg-neutral-100"}`}
                            >
                              <div className="flex justify-between items-center w-full">
                                <span>{loc}</span>
                                {signUpLocation === loc ? <Check className="w-4 h-4 text-[#22C55E] stroke-[3px]" /> : <ChevronRight className="w-4 h-4 text-neutral-300" />}
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <button 
                            onClick={() => setSignUpPage(2)}
                            className="flex-1 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-600 font-extrabold py-3 rounded-2xl text-xs uppercase cursor-pointer"
                          >
                            Back
                          </button>
                          <button 
                            disabled={!signUpLocation}
                            onClick={() => setSignUpPage(4)}
                            className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-black py-3 rounded-2xl text-xs uppercase cursor-pointer disabled:opacity-50"
                          >
                            Next Step
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Referral Info (Where did they see us) */}
                    {signUpPage === 4 && (
                      <div className="bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm space-y-3.5 font-sans animate-fade">
                        <div>
                          <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider mb-1">How Did You Hear About Us?</h4>
                          <p className="text-[10px] text-neutral-500 leading-relaxed mb-1">We appreciate knowing where you discovered our application.</p>
                        </div>

                        <div className="space-y-1.5">
                          {[
                            "Apple App Store / Google Play",
                            "Google or Bing Search Engines",
                            "Friend or Family Recommendation",
                            "Social Media (Instagram/TikTok/X)",
                            "Digital News or Technology Blog"
                          ].map((source) => (
                            <button
                              key={source}
                              onClick={() => {
                                setSignUpHearAbout(source);
                                showToast(`Selected source: ${source}`);
                              }}
                              className={`w-full py-3 px-3.5 rounded-2xl text-xs text-left font-extrabold border transition-all cursor-pointer ${signUpHearAbout === source ? "bg-emerald-50 border-[#22C55E] text-emerald-950 font-black shadow-xs" : "bg-neutral-50 text-neutral-750 border-neutral-200 hover:bg-neutral-100"}`}
                            >
                              <div className="flex justify-between items-center w-full">
                                <span>{source}</span>
                                {signUpHearAbout === source && <Check className="w-4 h-4 text-[#22C55E] stroke-[3px]" />}
                              </div>
                            </button>
                          ))}
                        </div>

                        <button
                          disabled={!signUpHearAbout}
                          onClick={() => {
                            setRegLoading(true);
                            setTimeout(() => {
                              setRegLoading(false);
                              setSignUpPage(5);
                              showToast("Verification key dispatched simulated SMS code.");
                            }, 800);
                          }}
                          className="w-full bg-[#22C55E] text-white hover:bg-[#1eb051] font-black py-3.5 rounded-2xl text-xs uppercase tracking-widest shadow-md border-b-2 border-b-emerald-600 disabled:opacity-40 cursor-pointer"
                        >
                          Request Verification Code
                        </button>
                      </div>
                    )}

                    {/* Step 5: Verification Code Check */}
                    {signUpPage === 5 && (
                      <div className="bg-white border border-neutral-200 p-5 rounded-3xl shadow-sm space-y-4 text-center font-sans">
                        <div className="inline-flex p-2.5 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shadow-xs mb-1">
                          <Lock className="w-6 h-6 animate-pulse" />
                        </div>
                        
                        <div className="space-y-1 font-sans">
                          <p className="text-xs font-bold text-neutral-850">Verification Token Required</p>
                          <p className="text-[10px] text-neutral-500 max-w-[280px] mx-auto leading-relaxed font-semibold">
                            Enter the simulated profile activation code dispatched to <span className="font-extrabold text-neutral-850">{regEmail || "your email"}</span>.
                          </p>
                        </div>

                        <div className="max-w-xs mx-auto">
                          <input 
                            type="text"
                            maxLength={6}
                            placeholder="Activation Key"
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-center text-md font-extrabold font-mono tracking-widest focus:outline-none focus:border-[#22C55E] transition-all placeholder-neutral-300"
                          />
                        </div>

                        {/* Autofill Helper */}
                        <button 
                          type="button"
                          onClick={() => {
                            setOtpCode("4920");
                            showToast("Verification code loaded! Click Activate Account to proceed.");
                          }}
                          className="text-[10px] text-[#22C55E] hover:underline font-extrabold inline-block cursor-pointer font-sans"
                        >
                          💡 Autofill activation code: 4920
                        </button>

                        <button 
                          onClick={() => {
                            if (otpCode !== "4920") {
                              showToast("Invalid code key! Please utilize the activation code: 4920");
                              return;
                            }
                            setUserName(regName || "Brooks Jennings");
                            setTempUserName(regName || "Brooks Jennings");
                            
                            setRegLoading(true);
                            setTimeout(() => {
                              setRegLoading(false);
                              setAuthScreen("authorized");
                              setIsProfileConfigured(false); // This triggers the KYC & SECURE BILLING page!
                              showToast(`Authorization granted to ${regName || "Brooks Jennings"}.`);
                            }, 1200);
                          }}
                          disabled={regLoading}
                          className="w-full bg-neutral-900 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-md hover:bg-neutral-800 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                        >
                          {regLoading ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" /> Activating Profile...
                            </>
                          ) : (
                            <>
                              Confirm and Authorize <Check className="w-4 h-4 stroke-[3px]" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ) : !isOnboarded ? (
              <motion.div
                key="onboarding_flow"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="h-full flex flex-col justify-between py-2 min-h-[500px]"
                id="onboarding-flow"
              >
                {/* Header skip step indicator */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black font-mono text-neutral-400 uppercase tracking-widest bg-neutral-100 px-2 py-1 rounded-md border border-neutral-200/50">
                    STEP {onboardingStep} OF 3
                  </span>
                  <button 
                    onClick={() => {
                      setIsOnboarded(true);
                      showToast("Almost done! Please configure your security profile parameters.");
                    }} 
                    className="text-xs font-extrabold text-[#22C55E] hover:text-emerald-600 uppercase tracking-wider transition-colors"
                  >
                    Skip Tour
                  </button>
                </div>

                {/* ONBOARDING SCREEN SLIDES */}
                <div className="flex-1 flex flex-col justify-center my-auto px-2">
                  {onboardingStep === 1 && (
                    <motion.div 
                      key="slide-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 text-center"
                    >
                      <div className="relative inline-flex items-center justify-center p-8 bg-blue-50 rounded-full mx-auto shadow-xs">
                        <div className="absolute inset-0 w-full h-full rounded-full border border-blue-200 animate-ping opacity-30"></div>
                        <Car className="w-12 h-12 text-blue-600 stroke-[2]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight">Eco-Verified Mobility</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto font-medium">
                          Book instantaneous zero-emission rides via clean electric fleets. Pay securely with smart escrow locks and view live driver progress directly on real-time radar grids.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {onboardingStep === 2 && (
                    <motion.div 
                      key="slide-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 text-center"
                    >
                      <div className="relative inline-flex items-center justify-center p-8 bg-green-50 rounded-full mx-auto shadow-xs">
                        <div className="absolute inset-0 w-full h-full rounded-full border border-green-200 animate-pulse opacity-40"></div>
                        <Sparkles className="w-12 h-12 text-[#22C55E] stroke-[2]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight">Eateries & Subcategories</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto font-medium">
                          Explore organized sub-categories profiling popular USA burgers, fresh greens, and warm cafés, with secure checkout tracking through detailed preparational timelines.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {onboardingStep === 3 && (
                    <motion.div 
                      key="slide-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 text-center"
                    >
                      <div className="relative inline-flex items-center justify-center p-8 bg-amber-50 rounded-full mx-auto shadow-xs">
                        <div className="absolute inset-0 w-full h-full rounded-full border border-amber-200 animate-pulse opacity-45"></div>
                        <Wrench className="w-12 h-12 text-amber-500 stroke-[2]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight">Smart AI Fixer Matching</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto font-medium">
                          Consult with our local smart AI diagnostician for appliance or repair scans. Gather instant local contract bids, and sync in complete secure masked chats.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* STEPS INDICATORS & BUTTON */}
                <div className="flex justify-between items-center pt-6 border-t border-neutral-200/50 mt-4">
                  <div className="flex gap-2">
                    {[1, 2, 3].map((dotIndex) => (
                      <div 
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${onboardingStep === dotIndex ? "bg-[#22C55E] w-5" : "bg-neutral-200"}`}
                      />
                    ))}
                  </div>
                  
                  {onboardingStep < 3 ? (
                    <button 
                      onClick={() => setOnboardingStep((s) => s + 1)}
                      className="bg-neutral-900 text-white p-3.5 rounded-full shadow-md hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        setIsOnboarded(true);
                        showToast("Almost done! Please configure your secure profile parameters.");
                      }}
                      className="bg-[#22C55E] text-white hover:bg-[#1fbf5b] font-black px-5 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-md transform active:scale-98 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      Complete Walkthrough <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </button>
                  )}
                </div>
              </motion.div>
            ) : !isProfileConfigured ? (
              <motion.div
                key="kyc_config_panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col justify-between py-2 min-h-[500px]"
                id="kyc-config-panel"
              >
                <div className="space-y-4 text-left bg-white border border-neutral-200/95 p-5 rounded-[28px] shadow-sm border-t-4 border-t-[#22C55E]">
                  <div className="text-center pb-2.5 border-b border-neutral-100">
                    <div className="inline-flex items-center justify-center p-3 bg-[#22C55E]/10 rounded-2xl text-[#22C55E] mb-2 border border-[#22C55E]/20">
                      <User className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider font-sans">Verification & Billing</h3>
                    <p className="text-[10px] text-neutral-500 font-semibold leading-relaxed max-w-[280px] mx-auto">Configure your secure identity profile and pre-authorized ledger settlement account parameters.</p>
                  </div>

                  {/* PART 1: IDENTITY DETAILS (EXPANDED KYC) */}
                  <div className="space-y-3 font-sans">
                    <p className="text-[10px] text-[#22C55E] font-black uppercase tracking-widest">Part 1: Identity & Security KYC</p>
                    
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-black tracking-widest text-neutral-450 block">Identity Document Type</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          type="button"
                          onClick={() => setKycIdType("passport")}
                          className={`py-2 px-1 rounded-xl text-[10px] font-black border transition-all cursor-pointer ${kycIdType === "passport" ? "bg-neutral-900 text-white border-transparent" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`}
                        >
                          Passport 📘
                        </button>
                        <button
                          type="button"
                          onClick={() => setKycIdType("license")}
                          className={`py-2 px-1 rounded-xl text-[10px] font-black border transition-all cursor-pointer ${kycIdType === "license" ? "bg-neutral-900 text-white border-transparent" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`}
                        >
                          License 💳
                        </button>
                        <button
                          type="button"
                          onClick={() => setKycIdType("idcard")}
                          className={`py-2 px-1 rounded-xl text-[10px] font-black border transition-all cursor-pointer ${kycIdType === "idcard" ? "bg-neutral-900 text-white border-transparent" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-105"}`}
                        >
                          National ID 🛡️
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 block">Verification Name</label>
                      <input 
                        type="text"
                        value={tempUserName}
                        onChange={(e) => setTempUserName(e.target.value)}
                        placeholder="Legal First and Last Name"
                        className="w-full bg-neutral-105 border border-neutral-250 rounded-xl px-3.5 py-2 text-xs text-neutral-800 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 block">Document ID Serial Number</label>
                      <input 
                        type="text"
                        value={kycDocSerial}
                        onChange={(e) => setKycDocSerial(e.target.value)}
                        placeholder="e.g. US-9812A-2026"
                        className="w-full bg-neutral-105 border border-neutral-250 rounded-xl px-3.5 py-2 text-xs text-neutral-800 font-bold focus:outline-none focus:border-[#22C55E] focus:bg-white font-mono uppercase"
                      />
                    </div>
                  </div>

                  {/* PART 2: BILLING CONFIGURATION & ESCROW SETUP */}
                  <div className="space-y-3 pt-3 border-t border-neutral-150 font-sans">
                    <p className="text-[10px] text-[#22C55E] font-black uppercase tracking-widest">Part 2: Pre-Authorized Billing & Escrow Plan</p>

                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 block">Settlement Strategy</label>
                      <div className="grid grid-cols-3 gap-1.5 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setBillingPlan("payg");
                            showToast("Pay-As-You-Go uses card charge on trip/delivery completion.");
                          }}
                          className={`py-2.5 px-1 rounded-xl text-[9px] font-black border leading-none transition-all cursor-pointer ${billingPlan === "payg" ? "bg-neutral-900 text-white border-transparent shadow-xs" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`}
                        >
                          Pay-As-You-Go <br/><span className="text-[7px] text-neutral-450 uppercase font-bold">Direct card</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setBillingPlan("escrow");
                            showToast("Pre-Funded Escrow holds balance with dispatch prioritization.");
                          }}
                          className={`py-2.5 px-1 rounded-xl text-[9px] font-black border leading-none transition-all cursor-pointer ${billingPlan === "escrow" ? "bg-neutral-900 text-white border-transparent shadow-xs" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`}
                        >
                          Pre-Fund Escrow <br/><span className="text-[7px] text-neutral-450 uppercase font-bold">Fast-dispatch</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setBillingPlan("invoice");
                            showToast("Monthly Invoice delivers single invoice at months end.");
                          }}
                          className={`py-2.5 px-1 rounded-xl text-[9px] font-black border leading-none transition-all cursor-pointer ${billingPlan === "invoice" ? "bg-neutral-900 text-white border-transparent shadow-xs" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`}
                        >
                          Monthly Invoice <br/><span className="text-[7px] text-neutral-450 uppercase font-bold">Post-pay bill</span>
                        </button>
                      </div>
                    </div>

                    {billingPlan === "escrow" && (
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black tracking-widest text-[#22C55E] block">Choose Starting Pre-Funding Amount</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[100, 250, 500].map((val) => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setStartingFunds(val)}
                              className={`py-2 px-1 rounded-xl text-xs font-black border transition-all cursor-pointer ${startingFunds === val ? "bg-emerald-600 text-white border-transparent shadow-xs" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`}
                            >
                              ${val}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pre-Authorized Payment Card Connection */}
                    <div className="space-y-2 p-3 bg-neutral-50 border border-neutral-200 rounded-2xl">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] uppercase font-black tracking-widest text-neutral-400">Backup Visa/Mastercard Payment Connection</span>
                        <span className="text-[8px] uppercase tracking-widest font-bold font-mono text-emerald-600 flex items-center gap-0.5">🔒 SECURE SSL</span>
                      </div>

                      <div className="space-y-2">
                        <div className="space-y-0.5">
                          <label className="text-[8px] uppercase font-black text-neutral-450 block">Debit / Credit Card Number</label>
                          <input 
                            type="text"
                            placeholder="4000 1234 5678 9010"
                            maxLength={19}
                            value={creditCardNum}
                            onChange={(e) => setCreditCardNum(e.target.value)}
                            className="w-full bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 text-xs text-neutral-850 font-bold"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-0.5">
                            <label className="text-[8px] uppercase font-black text-neutral-450 block">Expiry (MM/YY)</label>
                            <input 
                              type="text"
                              placeholder="08/29"
                              maxLength={5}
                              value={creditCardExpiry}
                              onChange={(e) => setCreditCardExpiry(e.target.value)}
                              className="w-full bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 text-xs text-neutral-850 font-bold text-center"
                            />
                          </div>
                          <div className="space-y-0.5">
                            <label className="text-[8px] uppercase font-black text-neutral-450 block">Secure CVC</label>
                            <input 
                              type="password"
                              placeholder="•••"
                              maxLength={3}
                              value={creditCardCvc}
                              onChange={(e) => setCreditCardCvc(e.target.value)}
                              className="w-full bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 text-xs text-neutral-850 font-bold text-center"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="col-span-2 space-y-0.5">
                            <label className="text-[8px] uppercase font-black text-neutral-450 block">Card billing Address</label>
                            <input 
                              type="text"
                              placeholder="100 Mission St, San Francisco"
                              value={billingAddress}
                              onChange={(e) => setBillingAddress(e.target.value)}
                              className="w-full bg-white border border-neutral-200 rounded-lg px-2 py-1.5 text-[10px] text-neutral-850 font-bold"
                            />
                          </div>
                          <div className="space-y-0.5">
                            <label className="text-[8px] uppercase font-black text-neutral-450 block">Zip Code</label>
                            <input 
                              type="text"
                              placeholder="94103"
                              maxLength={5}
                              value={billingZip}
                              onChange={(e) => setBillingZip(e.target.value)}
                              className="w-full bg-white border border-neutral-200 rounded-lg px-2 py-1.5 text-xs text-neutral-850 font-bold text-center font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1 text-neutral-500 text-[10px] font-semibold leading-normal">
                      <button 
                        type="button" 
                        onClick={() => {
                          setKycDocSerial("US-8924A-2026");
                          setCreditCardNum("4000 1234 5678 9010");
                          setCreditCardExpiry("08/29");
                          setCreditCardCvc("249");
                          setBillingAddress("100 Mission St, San Francisco, CA");
                          setBillingZip("94103");
                          showToast("Secure sandbox card & serial pre-loaded!");
                        }}
                        className="text-[10px] text-[#22C55E] hover:underline font-bold cursor-pointer"
                      >
                        💡 Pre-fill secure account mock setup?
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-1">
                  <button 
                    onClick={() => {
                      if (!tempUserName.trim()) {
                        showToast("Please input a valid Name for credentials verification!");
                        return;
                      }
                      setUserName(tempUserName);
                      if (billingPlan === "escrow") {
                        setWalletBalance(startingFunds);
                      } else {
                        setWalletBalance(0); // If PAYG or Invoice, starts at 0 or empty for demo
                      }
                      
                      setRegLoading(true);
                      setTimeout(() => {
                        setRegLoading(false);
                        setIsProfileConfigured(true);
                        showToast(`Profile & payment pre-authorized. User Account: ${tempUserName}.`);
                      }, 1000);
                    }}
                    disabled={regLoading}
                    className="w-full bg-[#22C55E] text-white hover:bg-emerald-600 font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-md border-b-2 border-b-emerald-600 active:scale-[0.99] active:translate-y-0.5 transition-all flex justify-center items-center gap-2 cursor-pointer"
                  >
                    {regLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> Binding Ledger...
                      </>
                    ) : (
                      <>
                        Save Configuration & Launch Hub
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                {/* TAB 1: HOME PANEL (WHITE BRANDED CONTRAST THEMED) */}
                {activeTab === "home" && (
                  <motion.div
                    key="home_panel"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-5"
                    id="tab-home"
                  >
                    {/* Header and User profile details */}
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900">
                          {userName}
                        </h3>
                      </div>
                    </div>

                    {/* PREMIUM DIGITAL WALLET CARD (DEEP FOREST EMERALD INTEGRATION) */}
                    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-neutral-850 border border-neutral-800 rounded-3xl p-5 relative overflow-hidden shadow-lg text-white">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex justify-between items-start">
                        <div className="text-left">
                          <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Available Escrow Credit</p>
                          <h4 className="text-3xl font-black text-white mt-1 font-mono tracking-tight flex items-baseline gap-0.5">
                            <span className="text-sm font-semibold text-zinc-500">$</span>
                            {walletBalance.toFixed(2)}
                          </h4>
                        </div>
                        <div className="bg-[#22C55E]/25 text-[#22C55E] border border-[#22C55E]/30 p-2.5 rounded-2xl font-bold">
                          <CreditCard className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => setIsAddingFunds(true)}
                          className="bg-[#22C55E] hover:bg-[#1eb051] text-white font-black text-xs py-3 rounded-2xl flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform shadow-md"
                        >
                          <Plus className="w-4 h-4 stroke-[3px]" /> Add Funds
                        </button>
                        <button 
                          onClick={() => showToast("Scan Citizen Terminal or merchant code to unlock payment instantly.")}
                          className="bg-neutral-800 hover:bg-neutral-750 text-white font-black text-xs py-3 rounded-2xl flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform border border-neutral-700/60"
                        >
                          <Compass className="w-4 h-4" /> Scan QR Pay
                        </button>
                      </div>
                    </div>

                    {/* QUICK FUND ACCORDION PANEL */}
                    {isAddingFunds && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white border border-neutral-200 rounded-3xl p-4 space-y-3 shadow-sm text-left"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-black tracking-wider uppercase text-neutral-500">Fast Credit Refill</span>
                          <button onClick={() => setIsAddingFunds(false)} className="text-neutral-400 hover:text-neutral-800">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex gap-2">
                          {["$20", "$50", "$100"].map((amt) => (
                            <button 
                              key={amt} 
                              onClick={() => setAddAmount(amt.replace("$", ""))}
                              className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all border ${addAmount === amt.replace("$", "") ? "bg-neutral-900 text-white border-transparent" : "bg-neutral-50 text-neutral-700 border-neutral-200/80 hover:bg-neutral-100"}`}
                            >
                              {amt}
                            </button>
                          ))}
                        </div>
                        <button 
                          onClick={() => {
                            setWalletBalance(b => b + parseFloat(addAmount));
                            setTransactions(prev => [
                              { id: Date.now(), title: "Manual Credit Refill", category: "Deposit", amount: parseFloat(addAmount), date: "Just Now" },
                              ...prev
                            ]);
                            setIsAddingFunds(false);
                            showToast(`Successfully deposited $${addAmount} to your wallet!`);
                          }}
                          className="w-full bg-[#22C55E] text-white font-black text-xs py-3 rounded-xl block text-center shadow-md justify-center"
                        >
                          Submit Escrow Transfer
                        </button>
                      </motion.div>
                    )}

                    {/* THE CORE URBAN SERVICES SHORTCUTS Grid in Light Theme */}
                    <div className="space-y-2.5">
                      <h4 className="text-left text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Simulated Civic Services</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <button 
                          onClick={() => setActiveTab("ride")}
                          className="bg-white hover:bg-neutral-50 border border-neutral-200/80 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center active:scale-[0.97] transition-all shadow-xs"
                        >
                          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl shadow-xs">
                            <Car className="w-4.5 h-4.5 stroke-[2.2]" />
                          </div>
                          <span className="text-[11px] font-extrabold text-neutral-800 leading-none">Book Ride</span>
                        </button>

                        <button 
                          onClick={() => setActiveTab("eat")}
                          className="bg-white hover:bg-neutral-50 border border-neutral-200/80 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center active:scale-[0.97] transition-all shadow-xs"
                        >
                          <div className="p-2.5 bg-green-50 text-green-600 rounded-2xl shadow-xs">
                            <Sparkles className="w-4.5 h-4.5 stroke-[2.2]" />
                          </div>
                          <span className="text-[11px] font-extrabold text-neutral-800 leading-none">Order Eats</span>
                        </button>

                        <button 
                          onClick={() => setActiveTab("book")}
                          className="bg-white hover:bg-neutral-50 border border-neutral-200/80 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center active:scale-[0.97] transition-all shadow-xs"
                        >
                          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-2xl shadow-xs">
                            <Wrench className="w-4.5 h-4.5 stroke-[2.2]" />
                          </div>
                          <span className="text-[11px] font-extrabold text-neutral-800 leading-none">Pro Fixer</span>
                        </button>
                      </div>
                    </div>

                    {/* RECENT WALLET TRANSACTION TRACKS in White card list */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pr-1">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Escrow Ledger Logs</h4>
                        <span className="text-[10px] text-neutral-500 font-extrabold hover:underline cursor-pointer">View All</span>
                      </div>
                      
                      <div className="space-y-2">
                        {transactions.map((t) => (
                          <div key={t.id} className="bg-white border border-neutral-200/60 rounded-2xl p-3 flex justify-between items-center shadow-xs">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl text-xs font-bold ${t.amount < 0 ? "bg-neutral-105 text-neutral-500" : "bg-[#22C55E]/10 text-[#22C55E]"}`}>
                                {t.amount < 0 ? "💸" : "💰"}
                              </div>
                              <div className="text-left">
                                <p className="text-[11px] font-bold text-neutral-800">{t.title}</p>
                                <p className="text-[9px] text-neutral-500 font-medium">{t.date} • {t.category}</p>
                              </div>
                            </div>
                            <span className={`text-xs font-black font-semi text-right font-mono ${t.amount < 0 ? "text-neutral-700" : "text-[#22C55E]"}`}>
                              {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DELEGATE ASSISTANCE SUPPORT CARD */}
                    <div className="bg-white border border-neutral-200/70 p-4 rounded-3xl flex gap-3.5 items-center shadow-xs text-left">
                      <div className="bg-neutral-50 p-2.5 rounded-2xl text-neutral-500 border border-neutral-100">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-extrabold text-neutral-800">Metropolis Support Escort</h5>
                        <p className="text-[10px] text-neutral-500 max-w-[245px] leading-relaxed">Touch the customer care SOS button inside your Settings Profile page for instant assistance dispatch.</p>
                      </div>
                    </div>

                    {/* REDIRECT TO APP LAUNCHPAD HUB */}
                    <div className="pt-2 text-center">
                      <Link 
                        to="/download-hub" 
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-neutral-400 hover:text-neutral-800 transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Close App Simulation
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: RIDES BOOKING ENGINE */}
                {activeTab === "ride" && (
                  <motion.div
                    key="ride_panel"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                    id="tab-ride"
                  >
                    <div className="flex items-center gap-2">
                      <button onClick={() => setActiveTab("home")} className="bg-white border border-neutral-200/80 p-2 rounded-xl text-neutral-400 hover:text-neutral-800 shadow-xs">
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900">Rider Fleet Booking</h3>
                    </div>

                    {/* STEP 1: ROUTE CHANCE INPUT */}
                    {rideStep === "input" && (
                      <div className="space-y-3.5 bg-white border border-neutral-200/85 rounded-3xl p-4 shadow-sm text-left">
                        <div className="space-y-2">
                          <div className="relative">
                            <span className="absolute left-3 top-3.5 text-neutral-500 text-xs">🟢</span>
                            <input 
                              type="text" 
                              placeholder="Pickup Location" 
                              value={pickup} 
                              onChange={(e) => setPickup(e.target.value)}
                              className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl pl-9 pr-4 py-3 text-xs font-semibold text-neutral-800 focus:outline-none focus:border-blue-500 focus:bg-white placeholder-neutral-400"
                            />
                          </div>

                          <div className="relative">
                            <span className="absolute left-3 top-3.5 text-red-500 text-xs">🔴</span>
                            <input 
                              type="text" 
                              placeholder="Where to?" 
                              value={destination} 
                              onChange={(e) => setDestination(e.target.value)}
                              className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl pl-9 pr-4 py-3 text-xs font-semibold text-neutral-800 focus:outline-none focus:border-blue-500 focus:bg-white placeholder-neutral-400"
                            />
                          </div>
                        </div>

                        {/* MOCK MAP IN ENHANCED LIGHT THEME */}
                        <div className="h-40 bg-[#F1F3F4] border border-neutral-200/60 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
                          <svg className="absolute inset-0 w-full h-full stroke-neutral-200 opacity-60" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="light_grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" strokeWidth="0.75" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#light_grid)" />
                            <path d="M 10,50 L 350,50 M 150,10 L 150,150 T 300,100" stroke="#CBD5E1" strokeWidth="6" fill="none" strokeLinecap="round" />
                            <path d="M 50,50 L 150,120 L 300,100" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                          </svg>
                          <div className="absolute left-[50px] top-[45px] bg-[#22C55E] text-white text-[9px] px-2 py-0.5 rounded-full font-black shadow-md">
                            Pickup
                          </div>
                          <div className="absolute right-[110px] bottom-[35px] bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-black shadow-md animate-bounce">
                            Dest
                          </div>
                        </div>

                        {/* RIDE OPTIONS COMPONENT */}
                        <div className="space-y-2">
                          <p className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wide">Available Civic Fleet Tiers</p>
                          <div className="space-y-2">
                            {rideOptions.map((opt) => {
                              const IconComp = opt.icon;
                              return (
                                <div 
                                  key={opt.id}
                                  onClick={() => setSelectedRideId(opt.id)}
                                  className={`p-3 rounded-2xl flex justify-between items-center cursor-pointer transition-all border ${selectedRideId === opt.id ? "bg-neutral-900 border-transparent text-white shadow-sm" : "bg-neutral-50/50 border-neutral-200/70 text-neutral-800 hover:bg-neutral-100"}`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-xl ${selectedRideId === opt.id ? "bg-black text-[#22C55E]" : "bg-neutral-200/60 text-neutral-500"}`}>
                                      <IconComp className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="text-left">
                                      <p className="text-[11px] font-black">{opt.name}</p>
                                      <p className={`text-[9px] font-medium ${selectedRideId === opt.id ? "text-zinc-400" : "text-neutral-500"}`}>{opt.desc} • {opt.eta} min away</p>
                                    </div>
                                  </div>
                                  <span className="text-xs font-black font-mono">
                                    ${opt.price.toFixed(2)}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <button 
                          onClick={handleRequestRide}
                          className="w-full bg-[#22C55E] hover:bg-[#1eb051] text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest active:scale-[0.99] transition-transform shadow-md"
                        >
                          Confirm Booking • ${(rideOptions.find(o => o.id === selectedRideId)?.price || 8.50).toFixed(2)}
                        </button>
                      </div>
                    )}

                    {/* STEP 2: RADAR RADIALS SEARCH */}
                    {rideStep === "searching" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-6 text-center space-y-6 shadow-sm">
                        <div className="relative py-8 flex justify-center items-center">
                          <div className="absolute w-28 h-28 border border-neutral-200 rounded-full animate-ping opacity-55"></div>
                          <div className="absolute w-20 h-20 border border-[#22C55E] rounded-full animate-pulse opacity-40"></div>
                          <div className="bg-neutral-100 border border-neutral-200 p-6 rounded-full shadow-inner z-10 text-[#22C55E]">
                            <Compass className="w-8 h-8 animate-spin" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#22C55E] animate-pulse">FINDING YOUR DRIVER...</h4>
                          <span className="inline-block bg-neutral-100 border border-neutral-200 text-neutral-600 text-[9px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider font-mono">
                            State: {tripState}
                          </span>
                          <p className="text-[11px] text-neutral-500 max-w-xs mx-auto leading-relaxed mt-2">
                            {rideDispatchLogs}
                          </p>
                        </div>
                        <div className="bg-neutral-50 border border-neutral-200 p-3 rounded-2xl flex gap-3 text-left">
                          <div className="p-2 bg-blue-50 text-blue-500 rounded-xl mt-0.5">
                            <Navigation className="w-4 h-4" />
                          </div>
                          <div className="text-xs font-semibold">
                            <span className="text-neutral-400 block uppercase font-black text-[9px]">Calculated Route</span>
                            <span className="text-neutral-700 font-bold">{destination}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => setRideStep("input")}
                          className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-extrabold py-3.5 rounded-2xl text-xs transition-colors border border-neutral-200/70 cursor-pointer"
                        >
                          Cancel Reservation Request
                        </button>
                      </div>
                    )}

                    {/* STEP 3: DRIVER MATCHED APPROACH */}
                    {rideStep === "matched" && matchedDriver && (
                      <div className="space-y-4">
                        <div className="bg-white border border-neutral-200 rounded-3xl p-4 space-y-3 shadow-xs">
                          <div className="flex justify-between items-center border-b border-neutral-150 pb-2">
                            <div className="flex items-center gap-1.5 text-xs text-[#22C55E] font-black">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping"></span>
                              <span>
                                {driverArrivalStatus === "arrived" ? "DRIVER HAS ARRIVED" : "DRIVER APPROACHING"}
                              </span>
                            </div>
                            <span className="text-[10px] text-neutral-500 font-black font-mono">
                              {driverArrivalStatus === "arrived" ? "Waiting at Pickup" : `Arriving in ${Math.max(1, Math.ceil((100 - driverProgress) / 40))} min`}
                            </span>
                          </div>

                          <div className="h-44 bg-[#F1F3F4] border border-neutral-200/50 rounded-2xl relative overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full opacity-65 stroke-neutral-200" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="url(#light_grid)" />
                              <path d="M 10,50 L 350,50 M 150,10 L 150,150 T 300,100" stroke="#CBD5E1" strokeWidth="6" fill="none" />
                              <path d="M 80,50 L 150,120 M 150,120 L 260,100" stroke="#22C55E" strokeWidth="3" fill="none" strokeDasharray="4,4" />
                            </svg>

                            <div 
                              className="absolute bg-[#22C55E] text-white p-1.5 rounded-full shadow-lg z-20 transition-all duration-1000"
                              style={{
                                left: `${80 + (driverProgress * 1.5)}px`,
                                top: `${50 + (driverProgress * 0.5)}px`
                              }}
                            >
                              <Car className="w-4 h-4 text-white" />
                            </div>

                            <div className="absolute right-[110px] top-[90px] bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-md border border-white">
                              📍 You
                            </div>
                          </div>
                        </div>

                        {/* DRIVER STATS BLOCK CARD */}
                        <div className="bg-white border border-neutral-200 rounded-3xl p-5 space-y-4 shadow-sm text-left">
                          <div className="flex justify-between items-start gap-3">
                            <div className="flex items-center gap-3">
                              <img 
                                src={matchedDriver.avatar} 
                                alt={matchedDriver.name} 
                                className="w-12 h-12 rounded-2xl object-cover border-2 border-[#22C55E] shadow-xs"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <h4 className="text-xs font-black text-neutral-900">{matchedDriver.name}</h4>
                                <p className="text-[10px] text-zinc-500 font-bold flex items-center gap-0.5 mt-0.5">
                                  {matchedDriver.vehicle} • ★ 4.96
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] font-black text-white bg-neutral-900 px-2.5 py-1 rounded-md uppercase tracking-wider">
                                {matchedDriver.plate}
                              </span>
                            </div>
                          </div>

                          <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-150 text-xs flex flex-col gap-2">
                            <div className="flex justify-between font-bold text-neutral-500 text-[10px] uppercase tracking-wider">
                              <span>Trip State Machine</span>
                              <span className="text-[#22C55E]">{tripState}</span>
                            </div>
                            <p className="text-[11px] text-neutral-700 font-medium">
                              {driverArrivalStatus === "arrived" 
                                ? "Driver has tapped 'Arrived' and is waiting for you in front." 
                                : "Marcus is currently driving on the dynamic GPS route to you."}
                            </p>
                          </div>

                          {driverArrivalStatus === "arrived" ? (
                            <button 
                              onClick={() => setRideStep("progress")}
                              className="w-full bg-[#22C55E] hover:bg-emerald-600 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest active:scale-[0.99] transition-all shadow-md animate-bounce cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Car className="w-4 h-4" /> Board Car & Start Trip
                            </button>
                          ) : (
                            <div className="flex gap-2">
                              <button 
                                onClick={() => showToast("Calling matched driver... Secure connection active.")}
                                className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-850 font-black py-3 rounded-2xl text-xs uppercase tracking-wider border border-neutral-150 transition-all flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <Phone className="w-4 h-4" /> Call
                              </button>
                              <button 
                                onClick={() => showToast(`Message sent to Marcus: 'I'm coming now.'`)}
                                className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-black py-3 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <MessageSquare className="w-4 h-4" /> Message
                              </button>
                            </div>
                          )}

                          <button 
                            onClick={() => {
                              setRideStep("input");
                              showToast("Trip safely cancelled. Balance refunded.");
                            }}
                            className="w-full text-neutral-400 hover:text-red-500 font-extrabold py-1 text-center text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Cancel Reservation
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: TRIP EN ROUTE TRANSPORT */}
                    {rideStep === "progress" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-5 text-center space-y-5 shadow-xs text-left">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="text-[10px] text-blue-500 font-black uppercase tracking-wider">Trip State: Started</span>
                          <span className="text-[10px] text-neutral-400 font-mono">GPS Sockets: Active (3s)</span>
                        </div>

                        {/* Animated route visual */}
                        <div className="h-36 bg-[#F1F3F4] border border-neutral-200/50 rounded-2xl relative overflow-hidden flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full opacity-65 stroke-neutral-200" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="url(#light_grid)" />
                            <path d="M 50,75 L 350,75" stroke="#CBD5E1" strokeWidth="6" fill="none" />
                            <path d="M 50,75 L 350,75" stroke="#3b82f6" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                          </svg>
                          <div 
                            className="absolute bg-blue-500 text-white p-2 rounded-full shadow-lg z-20 transition-all duration-300"
                            style={{ left: `${15 + (tripProgressPercentage * 3.2)}px` }}
                          >
                            <Car className="w-4.5 h-4.5 text-white animate-pulse" />
                          </div>
                          <div className="absolute right-4 text-[9px] bg-red-500 text-white px-2 py-0.5 rounded-md font-bold">
                            Salesforce Tower
                          </div>
                        </div>

                        {/* Metrics Panel */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-150">
                            <span className="text-[8px] text-neutral-400 uppercase font-black block">Estimated Driving Fare</span>
                            <span className="text-xs font-black text-neutral-800 font-mono">${(rideOptions.find(o => o.id === selectedRideId)?.price || 8.50).toFixed(2)}</span>
                          </div>
                          <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-150">
                            <span className="text-[8px] text-neutral-400 uppercase font-black block">Safety Telemetry</span>
                            <span className="text-xs font-black text-emerald-600">45mph (Normal)</span>
                          </div>
                        </div>

                        <div className="space-y-2 text-center">
                          <div className="w-full bg-neutral-100 rounded-full h-1 border border-neutral-200/50">
                            <div className="bg-blue-500 h-1 rounded-full transition-all duration-300" style={{ width: `${tripProgressPercentage}%` }}></div>
                          </div>
                          <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                            Route progress: {tripProgressPercentage}% Complete
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STEP 5: TRIP ENDED RATE DRIVER */}
                    {rideStep === "completed" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-5 text-center space-y-5 shadow-xs text-left">
                        <div className="text-center space-y-1">
                          <div className="p-3 bg-[#22C55E]/10 text-[#22C55E] rounded-full inline-block">
                            <CheckCircle2 className="w-8 h-8 animate-bounce" />
                          </div>
                          <h4 className="text-lg font-black text-neutral-900 leading-tight">Arrived Safely!</h4>
                          <p className="text-[10px] text-neutral-500 font-semibold tracking-wider">Dynamic billing calculation finalized.</p>
                        </div>

                        {/* Dynamic Billing Statement */}
                        <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-150 space-y-2 font-mono text-xs">
                          <p className="text-[9px] font-sans font-black text-neutral-400 uppercase tracking-widest border-b pb-1">
                            Official Payment Receipt Statement
                          </p>
                          <div className="flex justify-between text-neutral-600">
                            <span>Base Booking Fee</span>
                            <span>$2.50</span>
                          </div>
                          <div className="flex justify-between text-neutral-600">
                            <span>Distance Cost ({selectedRideId === "uberx" ? "3.2mi" : "4.5mi"})</span>
                            <span>${(selectedRideId === "uberx" ? 4.00 : 7.50).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-neutral-600">
                            <span>Time & Surcharge Multiplier</span>
                            <span>1.0x</span>
                          </div>
                          <div className="flex justify-between text-neutral-600">
                            <span>Tolls & Admin Fees</span>
                            <span>$2.00</span>
                          </div>
                          <div className="flex justify-between font-black text-neutral-900 border-t pt-1.5 mt-1 text-sm">
                            <span>Total Charged</span>
                            <span>${(rideOptions.find(o => o.id === selectedRideId)?.price || 8.50).toFixed(2)}</span>
                          </div>
                        </div>

                        {!hasRatedRide ? (
                          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-150 text-center space-y-3">
                            <span className="text-[9px] text-neutral-400 font-black uppercase tracking-widest block">
                              Rate Marcus Vance
                            </span>
                            <div className="flex justify-center gap-3">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button 
                                  key={star} 
                                  onClick={() => setRideRating(star)}
                                  className="focus:outline-none cursor-pointer"
                                >
                                  <Star className={`w-7 h-7 transition-colors ${star <= rideRating ? "text-amber-500 fill-amber-500" : "text-neutral-300"}`} />
                                </button>
                              ))}
                            </div>
                            <button 
                              onClick={() => {
                                setHasRatedRide(true);
                                showToast(`Thank you! Rated ${rideRating} stars for Marcus Vance.`);
                              }}
                              className="w-full bg-neutral-900 text-white font-black py-2.5 rounded-xl text-xs uppercase cursor-pointer"
                            >
                              Submit Rating
                            </button>
                          </div>
                        ) : (
                          <div className="text-center py-2 bg-emerald-50 rounded-2xl border border-emerald-150">
                            <p className="text-[#22C55E] text-xs font-bold">★ Driver Rating Submitted! Thank you.</p>
                          </div>
                        )}

                        <button 
                          onClick={() => setRideStep("input")}
                          className="w-full bg-[#22C55E] text-white font-black py-3.5 rounded-2xl text-xs uppercase active:scale-[0.98] shadow-sm cursor-pointer text-center"
                        >
                          Book Another Ride
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* TAB 3: EATS SECTION */}
                {activeTab === "eat" && (
                  <motion.div
                    key="eat_panel"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4 text-left"
                    id="tab-eat"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => setActiveTab("home")} className="bg-white border border-neutral-200/80 p-2 rounded-xl text-neutral-400 hover:text-neutral-800 shadow-xs">
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900">UrbanEats Food</h3>
                      </div>
                      {eatStep !== "restaurants" && (
                        <button 
                          onClick={() => setEatStep("restaurants")}
                          className="text-xs text-[#22C55E] font-bold uppercase tracking-wider hover:underline"
                        >
                          Back to Shops
                        </button>
                      )}
                    </div>

                    {/* STEP 1: CATEGORIES & BRAND SELECTOR */}
                    {eatStep === "restaurants" && (
                      <div className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                          <input 
                            type="text" 
                            placeholder="Search recipes, chicken, salads..."
                            className="w-full bg-white border border-neutral-200 rounded-2xl pl-10 pr-4 py-3 text-xs font-semibold text-neutral-850 focus:outline-none focus:border-[#22C55E] placeholder-neutral-400 shadow-xs"
                          />
                        </div>

                        {/* CATEGORY BULLETS HORIZONTAL */}
                        <div className="space-y-2">
                          <span className="text-[10px] text-neutral-400 font-black uppercase tracking-widest block">Select Food Category</span>
                          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                            {Object.keys(restaurantsData).map((catName) => (
                              <button
                                key={catName}
                                onClick={() => {
                                  setSelectedCategory(catName);
                                  setSelectedSubCategory(restaurantsData[catName][0]?.name || "");
                                }}
                                className={`px-4 py-2.5 rounded-full text-xs font-black transition-all whitespace-nowrap ${selectedCategory === catName ? "bg-neutral-900 text-white" : "bg-white text-neutral-600 border border-neutral-200/80 hover:bg-neutral-100"}`}
                              >
                                {catName}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* SUB-CATEGORY BRANDS DROPDOWN LIST */}
                        <div className="bg-white border border-neutral-200 rounded-3xl p-4 space-y-3 shadow-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">Available US Vendors</span>
                            <span className="bg-[#22C55E]/10 text-[#22C55E] text-[9px] px-2.5 py-0.5 rounded-full uppercase font-black">
                              {selectedCategory}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {restaurantsData[selectedCategory]?.map((rest) => (
                              <div 
                                key={rest.name}
                                onClick={() => {
                                  setSelectedSubCategory(rest.name);
                                  setEatStep("meals");
                                }}
                                className={`p-3 rounded-2xl border cursor-pointer transition-all text-left ${selectedSubCategory === rest.name ? "bg-neutral-900 border-transparent text-white shadow-sm" : "bg-neutral-50 border-neutral-200 text-neutral-800 hover:bg-neutral-100"}`}
                              >
                                <span className="text-xl block mb-1">{rest.logo}</span>
                                <h4 className="text-xs font-black">{rest.name}</h4>
                                <p className="text-[9px] text-neutral-500 mt-0.5 truncate font-medium">{rest.cuisine}</p>
                                <div className="flex items-center gap-1 mt-1 text-[9px] font-black">
                                  <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                                  <span className={selectedSubCategory === rest.name ? "text-zinc-300" : "text-neutral-700"}>{rest.rating}</span>
                                  <span className="text-neutral-400 ml-1">• {rest.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* PROMO CARD BANNER */}
                        <div className="bg-green-50 border border-green-200 p-4 rounded-3xl relative overflow-hidden">
                          <div className="absolute right-0 bottom-0 w-24 h-24 bg-green-200/20 rounded-full blur-xl pointer-events-none" />
                          <span className="bg-[#22C55E] text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                            Promo: FREE_RIDE_12
                          </span>
                          <h4 className="text-xs font-black text-neutral-900 mt-1.5 leading-snug">Free local food delivery on your first category order this week.</h4>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: RESTAURANT SPECIAL OFFER MENU */}
                    {eatStep === "meals" && (
                      <div className="space-y-3">
                        <div className="bg-white border border-neutral-200 p-4 rounded-3xl shadow-xs">
                          <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider block mb-0.5">Cravings Master Menu</span>
                          <h4 className="text-lg font-black text-neutral-900">{selectedSubCategory}</h4>
                        </div>

                        <div className="space-y-2">
                          {restaurantsData[selectedCategory]
                            ?.find(r => r.name === selectedSubCategory)
                            ?.meals.map((meal) => (
                              <div 
                                key={meal.name}
                                onClick={() => setSelectedMeal(meal)}
                                className={`p-4 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all cursor-pointer flex flex-col gap-2 relative shadow-xs ${selectedMeal?.name === meal.name ? "ring-2 ring-[#22C55E] border-transparent" : ""}`}
                              >
                                <div className="flex justify-between items-start gap-3">
                                  <div className="text-left">
                                    <h5 className="text-xs font-black text-neutral-900">{meal.name}</h5>
                                    <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed font-semibold">{meal.desc}</p>
                                  </div>
                                  <span className="text-xs font-black font-mono text-neutral-800">
                                    ${meal.price.toFixed(2)}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center bg-neutral-50 p-2 rounded-xl border border-neutral-150 text-[9px] font-mono text-neutral-500 font-bold">
                                  <span>🔥 {meal.calories} kcal</span>
                                  <span>• P: {meal.protein}</span>
                                  <span>• C: {meal.carbs}</span>
                                  <span>• F: {meal.fat}</span>
                                </div>
                                
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlaceOrder(meal);
                                  }}
                                  className="mt-1.5 bg-[#22C55E] text-white hover:bg-emerald-600 font-black rounded-lg py-2 text-[10px] uppercase tracking-wider block text-center shadow-xs"
                                >
                                  Add & Position Order
                                </button>
                              </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: PLACING ORDER PROCESS FOR ESCROW */}
                    {eatStep === "ordering" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-6 text-center space-y-4 shadow-xs">
                        <div className="py-6 flex justify-center items-center">
                          <RefreshCw className="w-8 h-8 text-[#22C55E] animate-spin" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-black uppercase text-[#22C55E] tracking-wider animate-pulse">Settle Escrow checkout...</h4>
                          <p className="text-[11px] text-neutral-500">Securing payment from your wallet for {selectedMeal?.name}</p>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: TIMELINE COUNTDOWN TIMER TRACKING */}
                    {eatStep === "timeline" && selectedMeal && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-5 space-y-5 shadow-xs">
                        <div className="text-center pb-2 border-b border-neutral-100">
                          <span className="text-[9px] text-[#22C55E] font-black uppercase tracking-widest bg-[#22C55E]/10 px-2.5 py-1 rounded-full border border-green-200">
                            Live Delivery State Radar
                          </span>
                          <h4 className="text-xs font-black text-neutral-800 mt-2.5">{selectedMeal.name}</h4>
                          <p className="text-[9px] text-neutral-400 font-bold uppercase font-mono mt-0.5">{selectedSubCategory}</p>
                        </div>

                        {/* TIMELINE PROGRESS CHART */}
                        <div className="space-y-4 relative pl-7 py-2 text-left">
                          <div className="absolute left-2.5 top-4 bottom-4 w-0.5 bg-neutral-200" />
                          
                          {/* Step 1 */}
                          <div className="relative flex items-start gap-3">
                            <div className={`absolute -left-[23px] w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 text-[9px] font-bold ${foodTimelineProgress >= 1 ? "bg-[#22C55E] border-transparent text-white" : "bg-white border-neutral-300 text-neutral-400"}`}>
                              1
                            </div>
                            <div>
                              <p className={`text-xs font-black ${foodTimelineProgress >= 1 ? "text-neutral-900" : "text-neutral-400"}`}>Order Confirmed</p>
                              <p className="text-[9px] text-neutral-400 font-semibold">Payment pre-authorized & delivery fee factored.</p>
                            </div>
                          </div>

                          {/* Step 2 */}
                          <div className="relative flex items-start gap-3">
                            <div className={`absolute -left-[23px] w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 text-[9px] font-bold ${foodTimelineProgress >= 2 ? "bg-[#22C55E] border-transparent text-white" : "bg-white border-neutral-300 text-neutral-400"}`}>
                              2
                            </div>
                            <div>
                              <p className={`text-xs font-black ${foodTimelineProgress >= 2 ? "text-neutral-900" : "text-neutral-400"}`}>Kitchen Preparing</p>
                              <p className="text-[9px] text-neutral-400 font-semibold">Chefs are cooking and verifying modifiers.</p>
                            </div>
                          </div>

                          {/* Step 3 */}
                          <div className="relative flex items-start gap-3">
                            <div className={`absolute -left-[23px] w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 text-[9px] font-bold ${foodTimelineProgress >= 3 ? "bg-[#22C55E] border-transparent text-white" : "bg-white border-neutral-300 text-neutral-400"}`}>
                              3
                            </div>
                            <div>
                              <p className={`text-xs font-black ${foodTimelineProgress >= 3 ? "text-neutral-900" : "text-neutral-400"}`}>Courier Dispatched</p>
                              <p className="text-[9px] text-neutral-400 font-semibold">Leo (electric e-bike) accepted delivery order.</p>
                            </div>
                          </div>

                          {/* Step 4 */}
                          <div className="relative flex items-start gap-3">
                            <div className={`absolute -left-[23px] w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 text-[9px] font-bold ${foodTimelineProgress >= 4 ? "bg-[#22C55E] border-transparent text-white" : "bg-white border-neutral-300 text-neutral-400"}`}>
                              4
                            </div>
                            <div>
                              <p className={`text-xs font-black ${foodTimelineProgress >= 4 ? "text-neutral-900" : "text-neutral-400"}`}>Waiting for Prep</p>
                              <p className="text-[9px] text-neutral-400 font-semibold">Leo is at restaurant waiting for food packaging.</p>
                            </div>
                          </div>

                          {/* Step 5 */}
                          <div className="relative flex items-start gap-3">
                            <div className={`absolute -left-[23px] w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 text-[9px] font-bold ${foodTimelineProgress >= 5 ? "bg-[#22C55E] border-transparent text-white" : "bg-white border-neutral-300 text-neutral-400"}`}>
                              5
                            </div>
                            <div>
                              <p className={`text-xs font-black ${foodTimelineProgress >= 5 ? "text-neutral-900" : "text-neutral-400"}`}>Out for Delivery</p>
                              <p className="text-[9px] text-neutral-400 font-semibold">En-route! Live traffic routing AI avoids congestion.</p>
                            </div>
                          </div>

                          {/* Step 6 */}
                          <div className="relative flex items-start gap-3">
                            <div className={`absolute -left-[23px] w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 text-[9px] font-bold ${foodTimelineProgress >= 6 ? "bg-[#22C55E] border-transparent text-white" : "bg-white border-neutral-300 text-neutral-400"}`}>
                              6
                            </div>
                            <div>
                              <p className={`text-xs font-black ${foodTimelineProgress >= 6 ? "text-neutral-900" : "text-neutral-400"}`}>Delivered (Arrived)</p>
                              <p className="text-[9px] text-neutral-400 font-semibold">Photo proof securely uploaded to ledger account.</p>
                            </div>
                          </div>
                        </div>

                        {/* RATING SUBMISSION ONLY ON TIMELINE COMPLETE */}
                        {foodTimelineProgress === 6 && (
                          <div className="bg-neutral-50 border border-neutral-150 p-4 rounded-2xl relative">
                            {!hasRatedFood ? (
                              <div className="space-y-3">
                                <span className="text-[9px] text-neutral-400 font-extrabold uppercase tracking-widest block text-center">
                                  Rate Restaurant and Meal
                                </span>
                                <div className="flex justify-center gap-2">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <button key={star} onClick={() => setFoodRating(star)} className="cursor-pointer">
                                      <Star className={`w-6 h-6 transition-colors ${star <= foodRating ? "text-amber-500 fill-amber-500" : "text-neutral-300"}`} />
                                    </button>
                                  ))}
                                </div>
                                <button 
                                  onClick={() => {
                                    setHasRatedFood(true);
                                    showToast(`Rated ${foodRating} stars for ${selectedSubCategory}!`);
                                  }}
                                  className="w-full bg-neutral-950 text-white hover:bg-neutral-900 font-black py-2.5 rounded-xl text-xs uppercase cursor-pointer"
                                >
                                  Submit Food Rating
                                </button>
                              </div>
                            ) : (
                              <div className="text-center p-2 bg-emerald-50 rounded-2xl border border-emerald-150">
                                <p className="text-[#22C55E] text-xs font-bold">★ Rated successfully. Enjoy!</p>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="bg-neutral-50 border border-neutral-200 p-3 rounded-2xl text-center text-[10px] text-neutral-500 font-semibold">
                          "Citizen escrow processing complete. Disputed window 24h active."
                        </div>
                        {foodTimelineProgress === 6 && (
                          <button 
                            onClick={() => setEatStep("restaurants")}
                            className="w-full bg-[#22C55E] text-white hover:bg-emerald-600 font-black py-3 rounded-2xl text-xs uppercase tracking-widest active:scale-[0.98] shadow-sm cursor-pointer block text-center"
                          >
                            Order Another Cravings
                          </button>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* TAB 4: PRO SERVICE REPAIRS */}
                {activeTab === "book" && (
                  <motion.div
                    key="pro_panel"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4 flex flex-col h-full text-left"
                    id="tab-pro"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => setActiveTab("home")} className="bg-white border border-neutral-200/80 p-2 rounded-xl text-neutral-400 hover:text-neutral-800 shadow-xs">
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900">UrbanPro Repairs</h3>
                      </div>
                      {proStep !== "ai_chat" && (
                        <button 
                          onClick={() => {
                            setProStep("ai_chat");
                            setChatMessages([{ sender: "ai", text: "Hello! Welcome to UrbanPro. Describe what you need fixed...", time: "11:40 AM" }]);
                          }}
                          className="text-xs text-[#22C55E] font-bold uppercase tracking-wider hover:underline"
                        >
                          Reset AI
                        </button>
                      )}
                    </div>

                    {/* MASKED SECURE CHAT INTERACTION */}
                    {(proStep === "ai_chat" || proStep === "paired_chat") && (
                      <div className="space-y-3 bg-white border border-neutral-200/85 rounded-3xl p-4 flex-1 flex flex-col justify-between min-h-[460px] shadow-xs">
                        
                        {/* SCROLLABLE DIALOGUE CONTAINER */}
                        <div className="space-y-3 overflow-y-auto max-h-[350px] pr-1 flex-1">
                          {chatMessages.map((msg, index) => (
                            <div 
                              key={index}
                              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div 
                                className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed text-left ${
                                  msg.sender === "user" 
                                    ? "bg-[#22C55E] text-white font-extrabold shadow-xs" 
                                    : msg.block 
                                      ? "bg-red-50 border border-red-200 text-red-700 font-semibold"
                                      : "bg-neutral-50 border border-neutral-200 text-neutral-800 shadow-3xs"
                                }`}
                              >
                                <p>{msg.text}</p>
                                <span className={`block text-[8px] text-right mt-1.5 ${msg.sender === "user" ? "text-emerald-100" : "text-neutral-400"}`}>
                                  {msg.time}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* INSTANT ANALYSIS PRESETS */}
                        {proStep === "ai_chat" && chatMessages.length === 1 && (
                          <div className="space-y-2 border-t border-neutral-100 pt-3 text-left">
                            <span className="text-[9px] text-[#22C55E] font-black uppercase tracking-wider block">
                              Diagnostic Scanner Presets
                            </span>
                            <div className="grid grid-cols-2 gap-2">
                              {issuePresets.map((preset) => (
                                <button
                                  key={preset.title}
                                  onClick={() => {
                                    handleSendMessage(preset.title + ": " + preset.desc);
                                  }}
                                  className="p-3 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 text-[10px] font-bold text-left text-neutral-700 rounded-xl leading-snug shadow-3xs"
                                >
                                  <span className="block mb-0.5 text-xs">{preset.title.split(" ")[0]}</span>
                                  <span className="truncate block font-black text-neutral-950 font-sans">{preset.title.split(" ").slice(1).join(" ")}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ATTACH DIRECT DIALOGUE INPUT */}
                        <div className="border-t border-neutral-100 pt-3 mt-2 flex gap-2 relative">
                          <button 
                            onClick={() => {
                              showToast("Diagnostic Camera activated. AI scanner is scanning snapshot...");
                              handleSendMessage("📸 [RAW PROBLEMATIC SNAPSHOT UPLOADING]: Joint connection showing mineral rust deposit and leaking water leak beads.");
                            }}
                            className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 p-3 rounded-2xl text-neutral-500 hover:text-black shadow-3xs"
                            title="Upload Problem Snapshot"
                          >
                            <Camera className="w-4 h-4 text-neutral-600" />
                          </button>

                          <input 
                            type="text" 
                            placeholder={proStep === "ai_chat" ? "Describe sink, plumbing, wire repairs..." : "Chat with Dave Miller..."}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                const inputElem = e.currentTarget;
                                handleSendMessage(inputElem.value);
                                inputElem.value = "";
                              }
                            }}
                            className="flex-1 bg-neutral-50 border border-neutral-200 rounded-2xl px-3.5 text-xs font-semibold text-neutral-800 focus:outline-none focus:border-[#22C55E] focus:bg-white placeholder-neutral-400"
                          />

                          <button 
                            onClick={(e) => {
                              const siblingInput = e.currentTarget.previousElementSibling as HTMLInputElement;
                              if (siblingInput) {
                                handleSendMessage(siblingInput.value);
                                siblingInput.value = "";
                              }
                            }}
                            className="bg-[#22C55E] text-white p-3 rounded-2xl shadow-xs"
                          >
                            <Send className="w-4 h-4 text-white" />
                          </button>
                        </div>

                        {proStep === "paired_chat" && (
                          <div className="pt-2">
                            <button 
                              onClick={handleCompleteProFix}
                              className="w-full bg-[#22C55E] text-white font-black rounded-xl py-3 text-xs uppercase shadow-md"
                            >
                              Complete Work & Pay Bid
                            </button>
                          </div>
                        )}

                      </div>
                    )}

                    {/* STEP 2: DIAGNOSING ACTION WITH MULTI PULSE */}
                    {proStep === "diagnosing" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-6 text-center space-y-4 shadow-xs">
                        <div className="py-8 flex justify-center items-center">
                          <RefreshCw className="w-10 h-10 text-[#22C55E] animate-spin" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-black uppercase text-[#22C55E] tracking-widest animate-pulse">Running Diagnostic Core</h4>
                          <p className="text-[10px] text-neutral-500 leading-relaxed font-bold">"Sifting issues, isolating damage metrics, configuring certified solutions tiers..."</p>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: PRICE WARRANTY TIERING OPTIONS */}
                    {proStep === "options" && detectedIssue && (
                      <div className="space-y-3.5">
                        <div className="bg-white border border-neutral-200 rounded-3xl p-4 shadow-xs">
                          <span className="text-[9px] text-[#22C55E] font-black uppercase tracking-widest border border-green-200 px-2 py-0.5 rounded-full bg-green-50">AI Diagnostic Complete</span>
                          <h4 className="text-sm font-black text-neutral-900 mt-2">Problem: {detectedIssue.problem}</h4>
                          <p className="text-[10px] text-neutral-400 font-extrabold mt-0.5">Complexity: {detectedIssue.complexity}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-[9px] text-neutral-400 font-black uppercase tracking-widest">Select Certified Solution Tier</p>
                          {detectedIssue.options.map((opt: any) => (
                            <div 
                              key={opt.name}
                              onClick={() => handleSelectOption(opt)}
                              className="bg-white border border-neutral-200/85 hover:border-neutral-300 p-4 rounded-2xl cursor-pointer transition-all flex justify-between items-center shadow-xs"
                            >
                              <div className="text-left max-w-[240px]">
                                <h5 className="text-xs font-black text-neutral-900 leading-tight">{opt.name}</h5>
                                <p className="text-[9px] text-neutral-500 mt-0.5 font-semibold">Duration: {opt.time} • Warranty: {opt.warranty}</p>
                              </div>
                              <span className="text-xs font-black font-mono text-[#22C55E]">
                                ${opt.price.toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button 
                          onClick={() => setProStep("ai_chat")}
                          className="w-full bg-neutral-100 text-neutral-800 font-black rounded-2xl py-3 text-xs border border-neutral-200"
                        >
                          Modify Diagnostics Request
                        </button>
                      </div>
                    )}

                    {/* STEP 4: DISTRIBUTE BIDS PULSING LOADER */}
                    {proStep === "bidding" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-6 text-center space-y-5 shadow-xs">
                        <div className="relative py-6 flex justify-center items-center">
                          <div className="absolute w-24 h-24 border border-blue-200 rounded-full animate-ping opacity-35"></div>
                          <Compass className="w-8 h-8 text-[#22C55E] animate-spin" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-black uppercase text-[#22C55E] tracking-widest animate-pulse">Broadcasting Escrow Bid</h4>
                          <p className="text-[10px] text-neutral-500 max-w-xs mx-auto leading-relaxed">
                            Connecting encrypted signals to nearby verified lock mechanics, electricians, or plumbing contractors... Dave Miller is responding.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STEP 5: JOB FINALIZED RATE CONTRACTOR */}
                    {proStep === "finished" && (
                      <div className="bg-white border border-neutral-200 rounded-3xl p-6 text-center space-y-6 shadow-xs">
                        <div className="p-4 bg-emerald-50 text-[#22C55E] rounded-3xl inline-block border border-green-200">
                          <ShieldCheck className="w-10 h-10" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-black text-neutral-900">Certified Job Completed!</h4>
                          <p className="text-[11px] text-neutral-500 font-bold">Escrow funds settled securely to Dave Miller.</p>
                        </div>

                        {!hasRatedPro ? (
                          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 space-y-3">
                            <span className="text-[9px] text-neutral-400 font-extrabold uppercase tracking-widest block">
                              Rate the technician (Master Dave)
                            </span>
                            <div className="flex justify-center gap-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button key={star} onClick={() => setProRating(star)}>
                                  <Star className={`w-6 h-6 transition-colors ${star <= proRating ? "text-amber-500 fill-amber-500" : "text-neutral-300"}`} />
                                </button>
                              ))}
                            </div>
                            <button 
                              onClick={() => {
                                setHasRatedPro(true);
                                showToast(`Rated Dave Miller ${proRating} stars! Job logged.`);
                              }}
                              className="w-full bg-[#22C55E] text-white font-black py-2.5 rounded-xl text-xs uppercase shadow-sm"
                            >
                              Submit Repair Rating
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <p className="text-[#22C55E] text-xs font-extrabold">★ Rated successfully. Warranty protection active!</p>
                          </div>
                        )}

                        <button 
                          onClick={() => {
                            setProStep("ai_chat");
                            setChatMessages([{ sender: "ai", text: "Hello! Welcome to UrbanPro. Describe what you need fixed...", time: "11:40 AM" }]);
                          }}
                          className="w-full bg-neutral-900 text-white font-black py-3.5 rounded-2xl text-xs uppercase shadow-sm"
                        >
                          Establish New Diagnosis
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* TAB 5: PROFILE HUB */}
                {activeTab === "profile" && (
                  <motion.div
                    key="profile_panel"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4 text-left"
                    id="tab-profile"
                  >
                    <div className="flex items-center gap-2">
                      <button onClick={() => setActiveTab("home")} className="bg-white border border-neutral-200/80 p-2 rounded-xl text-neutral-400 hover:text-neutral-800 shadow-xs">
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900">Security & Privacy</h3>
                    </div>

                    {/* PROFILE KYC INFORMATION DISPLAY */}
                    <div className="bg-white border border-neutral-200 rounded-3xl p-4 flex items-center gap-3.5 shadow-xs">
                      <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center font-black">
                        {userName.substring(0,2).toUpperCase()}
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-black text-neutral-900">{userName}</h4>
                        <p className="text-[10px] text-neutral-400 font-extrabold mt-0.5">METROPOLIS ID: CO-9988-2026</p>
                        <p className="text-[9px] text-[#22C55E] font-black">Verified Account Credentials</p>
                      </div>
                    </div>

                    {/* ESCROW WALLET CREDIT HIGHLIGHT */}
                    <div className="bg-white border border-neutral-200 p-4 rounded-3xl flex justify-between items-center shadow-xs">
                      <div>
                        <span className="text-[9px] text-neutral-400 font-black uppercase tracking-wider block">Metropolis Ledger balance</span>
                        <span className="text-sm font-black font-mono text-neutral-900 mt-0.5 inline-block">${walletBalance.toFixed(2)}</span>
                      </div>
                      <button 
                        onClick={() => {
                          setActiveTab("home");
                          setIsAddingFunds(true);
                        }}
                        className="bg-[#22C55E] hover:bg-emerald-600 text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-wider shadow-sm"
                      >
                        Add Funds
                      </button>
                    </div>

                    {/* PRIVACY SHIELD CONTROLS */}
                    <div className="bg-white border border-neutral-200 rounded-3xl p-4 space-y-3.5 shadow-xs">
                      <div className="flex items-center gap-1.5 border-b border-neutral-100 pb-2">
                        <Settings className="w-4.5 h-4.5 text-[#22C55E]" />
                        <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-widest">Privacy Configuration</span>
                      </div>

                      <div className="space-y-3.5">
                        
                        {/* Biometric toggle */}
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-xs font-black text-neutral-800 block">Biometric authentication</span>
                            <span className="text-[9px] text-neutral-400 block font-semibold leading-snug">Require Face ID or lock pin on bid deposits.</span>
                          </div>
                          <button 
                            onClick={() => {
                              setEnableBiometrics(!enableBiometrics);
                              showToast(enableBiometrics ? "Biometrics protection deactivated!" : "Biometrics protection secure and locked!");
                            }}
                            className={`w-11 h-6 rounded-full p-0.5 transition-all duration-300 ${enableBiometrics ? "bg-[#22C55E]" : "bg-neutral-200"}`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${enableBiometrics ? "translate-x-5" : "translate-x-0"}`}></div>
                          </button>
                        </div>

                        {/* Two factor sms toggle */}
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-xs font-black text-neutral-800 block">Two-Factor SMS Verification</span>
                            <span className="text-[9px] text-neutral-400 block font-semibold leading-snug">Generate secure PIN block on orders past $50.</span>
                          </div>
                          <button 
                            onClick={() => {
                              setTwoFactorToken(!twoFactorToken);
                              showToast(twoFactorToken ? "SMS PIN code bypass activated!" : "SMS PIN protection is active over $50!");
                            }}
                            className={`w-11 h-6 rounded-full p-0.5 transition-all duration-300 ${twoFactorToken ? "bg-[#22C55E]" : "bg-neutral-200"}`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${twoFactorToken ? "translate-x-5" : "translate-x-0"}`}></div>
                          </button>
                        </div>

                        {/* Encrypted private commuting */}
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-xs font-black text-neutral-800 block">Encrypted Geographic Privacy</span>
                            <span className="text-[9px] text-neutral-400 block font-semibold leading-snug">Obfuscate geographic coords from radar trackers.</span>
                          </div>
                          <button 
                            onClick={() => {
                              setPrivateBrowsing(!privateBrowsing);
                              showToast(privateBrowsing ? "Geographic signal obfuscation disabled." : "Dynamic location spoof shuffling is active!");
                            }}
                            className={`w-11 h-6 rounded-full p-0.5 transition-all duration-300 ${privateBrowsing ? "bg-[#22C55E]" : "bg-neutral-200"}`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${privateBrowsing ? "translate-x-5" : "translate-x-0"}`}></div>
                          </button>
                        </div>

                      </div>
                    </div>

                    {/* SOS ALERT TRIGGER BUTTON ACTIONS */}
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <button 
                        onClick={() => showToast("Calling Emergency dispatch... Location coordinate shared secure.")}
                        className="p-3 bg-red-50 border border-red-150 text-white rounded-2xl text-[10px] font-black uppercase tracking-wider active:scale-[0.98] transition-transform"
                      >
                        🚨 911 SOS ALERT
                      </button>
                      <button 
                        onClick={() => showToast("Opening custom encrypted legal disclosures context...")}
                        className="p-3 bg-neutral-100 hover:bg-neutral-150 border border-neutral-250/60 text-neutral-600 rounded-2xl text-[10px] font-black uppercase tracking-wider active:scale-[0.98] transition-transform"
                      >
                        📄 LEGAL & PRIVACY
                      </button>
                    </div>

                    {/* ONBOARDING REPLAY AND DATABASE RESET */}
                    <div className="space-y-2 pt-2.5 border-t border-neutral-150">
                      <button 
                        onClick={() => {
                          setOnboardingStep(1);
                          setIsOnboarded(false);
                          showToast("Initializing interactive onboarding guide!");
                        }}
                        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-black py-3 rounded-2xl shadow-sm"
                      >
                        Replay Walkthrough Onboarding
                      </button>
                      <button 
                        onClick={() => {
                          setWalletBalance(248.50);
                          setUserName("Brooks Jennings");
                          setRideStep("input");
                          setEatStep("restaurants");
                          setProStep("ai_chat");
                          showToast("All databases, tracking timelines, and wallets refreshed!");
                        }}
                        className="w-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-600 text-xs font-extrabold py-3 rounded-2xl"
                      >
                        Reset Application Database
                      </button>
                    </div>
                  </motion.div>
                )}
              </>
            )}

          </AnimatePresence>
        </div>

        {/* METROPOLIS SECURE BOTTOM APP NAVIGATION BAR (ALWAYS VISIBLE EXCLUDING ONBOARDING) */}
        {isOnboarded && (
          <div className="bg-white px-3 py-3 border-t border-neutral-200/80 flex justify-around select-none">
            
            <button 
              id="nav-btn-home"
              onClick={() => {
                setActiveTab("home");
                setRideStep("input");
                setEatStep("restaurants");
              }}
              className={`flex flex-col items-center gap-1 text-[9px] font-semibold transition-colors ${activeTab === "home" ? "text-[#22C55E] font-black" : "text-neutral-400 hover:text-neutral-700"}`}
            >
              <Compass className="w-5 h-5 stroke-[2.25]" />
              <span>Home</span>
            </button>

            <button 
              id="nav-btn-ride"
              onClick={() => setActiveTab("ride")}
              className={`flex flex-col items-center gap-1 text-[9px] font-semibold transition-colors ${activeTab === "ride" ? "text-[#22C55E] font-black" : "text-neutral-400 hover:text-neutral-700"}`}
            >
              <Car className="w-5 h-5 stroke-[2.25]" />
              <span>Rides</span>
            </button>

            <button 
              id="nav-btn-eat"
              onClick={() => setActiveTab("eat")}
              className={`flex flex-col items-center gap-1 text-[9px] font-semibold transition-colors ${activeTab === "eat" ? "text-[#22C55E] font-black" : "text-neutral-400 hover:text-neutral-700"}`}
            >
              <Sparkles className="w-5 h-5 stroke-[2.25]" />
              <span>Eats</span>
            </button>

            <button 
              id="nav-btn-pro"
              onClick={() => setActiveTab("book")}
              className={`flex flex-col items-center gap-1 text-[9px] font-semibold transition-colors ${activeTab === "book" ? "text-[#22C55E] font-black" : "text-neutral-400 hover:text-neutral-700"}`}
            >
              <Wrench className="w-5 h-5 stroke-[2.25]" />
              <span>Pro Fixer</span>
            </button>

            <button 
              id="nav-btn-profile"
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-1 text-[9px] font-semibold transition-colors ${activeTab === "profile" ? "text-[#22C55E] font-black" : "text-neutral-400 hover:text-neutral-700"}`}
            >
              <User className="w-5 h-5 stroke-[2.25]" />
              <span>Profile</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
