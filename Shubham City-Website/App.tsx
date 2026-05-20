/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  Home, 
  TrendingUp, 
  ShieldCheck, 
  Waves, 
  Trees, 
  Clock, 
  Smartphone, 
  Calendar,
  Menu,
  X,
  ArrowRight,
  Phone,
  Bed,
  Bath,
  Layout,
  Coffee,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  PlugZap,
  Gamepad2,
  Flower2,
  Users,
  Sparkles,
  User,
  Mail,
  MessageSquare,
  Send
} from 'lucide-react';
import { cn } from '@/utils';

// Images - Using high-quality placeholders since internal generator hit quota
const HERO_IMAGE = "https://i.ibb.co/99KF85Mx/Entry-night-view.jpg";
const HERO_MOBILE_IMAGE = "https://i.ibb.co/nsMvX5WN/image.png";
const INTERIOR_BEDROOM_IMAGE = "https://i.ibb.co/sJPmHPkK/image.png";
const INTERIOR_LIVING_IMAGE = "https://i.ibb.co/bRH1TQPm/image.png";
const INTERIOR_WASHROOM_IMAGE = "https://i.ibb.co/svwZs9pQ/image.png";
const LIFESTYLE_IMAGE = "https://i.ibb.co/TJ204WL/image.png";
const AMENITY_IMAGE = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000";
const FLOOR_PLAN_STUDIO = "https://i.ibb.co/qYXs8rJT/image.png";
const FLOOR_PLAN_1BHK = "https://i.ibb.co/R1dkF5Y/image.png";

const AMENITIES = [
  { icon: Home, title: "Clubhouse", desc: "Premium social & recreational hub", img: "https://i.ibb.co/jZDZFSKr/Club.jpg", label: "CLUB AND POOL VIEW" },
  { icon: Gamepad2, title: "Indoor Games", desc: "Leisure and entertainment for all ages", img: "https://i.ibb.co/tpZ8vdw3/Club-indoor-games.jpg", label: "CLUB INDOORS" },
  { icon: PlugZap, title: "EV Charging", desc: "Future-ready infrastructure for your eco-lifestyle", img: "https://i.ibb.co/QFBZCzfB/E-charge-view.jpg", label: "E-CHARGE STATION" },
  { icon: Flower2, title: "Terrace Garden", desc: "Rooftop serenity and community gatherings", img: "https://i.ibb.co/cc6VqcGP/Terrace-park.jpg", label: "PARK" },
  { icon: Dumbbell, title: "Modern Gym", desc: "State-of-the-art fitness and wellness center", img: "https://i.ibb.co/tTgTFmFz/Gym.jpg", label: "GYM" },
  { icon: MapPin, title: "Temple View", desc: "Spiritual connection and peaceful environment", img: "https://i.ibb.co/0Rwzhkws/Temple-park-view.jpg", label: "TEMPLE VIEW" },
];

const LegalView = ({ type, onBack }: { type: 'disclaimer' | 'privacy' | 'terms', onBack: () => void }) => {
  const [activeType, setActiveType] = useState<'disclaimer' | 'privacy' | 'terms'>(type);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeType]);

  const getLegalContent = (currentType: 'disclaimer' | 'privacy' | 'terms') => {
    if (currentType === 'disclaimer') {
      return [
        {
          title: "General Information",
          content: "The information on this website is provided for general project awareness and enquiry purposes for Shubham City. It should not be treated as a final offer, booking confirmation, allotment, sale agreement, or legally binding commitment."
        },
        {
          title: "Project Details",
          content: "Images, renderings, floor plans, layouts, amenities, specifications, prices, rental references, availability, payment information, and location details are indicative and may be changed, corrected, withdrawn, or updated without prior notice."
        },
        {
          title: "Verification",
          content: "Before making any decision, payment, booking, or site visit plan, visitors should verify all details directly with the authorized Shubham City sales team. Final terms will be governed only by official documents shared at the time of booking or agreement."
        },
        {
          title: "Investment And Rental",
          content: "Any mention of appreciation potential, rental income, holiday-home benefits, or investment value is for informational communication only. Shubham City does not guarantee future returns, resale value, rental income, occupancy, or market performance."
        },
        {
          title: "Third-Party Services",
          content: "Maps, WhatsApp, phone links, email services, and form submission tools are provided for visitor convenience. Shubham City is not responsible for interruptions, inaccuracies, or actions taken on third-party platforms."
        }
      ];
    } else if (currentType === 'privacy') {
      return [
        {
          title: "Information We Collect",
          content: "When you submit an enquiry, we may collect your full name, mobile number, email address, selected villa type, date of submission, form context, and the page from which the enquiry was sent."
        },
        {
          title: "How We Use It",
          content: "Your details are used to respond to enquiries, share Shubham City project information, arrange site visits, provide availability details, and maintain internal lead records."
        },
        {
          title: "Consent To Contact",
          content: "By submitting the enquiry form, you authorize Shubham City and its representatives to contact you through phone calls, SMS, email, or WhatsApp regarding the project, site visits, availability, and related offers."
        },
        {
          title: "Storage And Service Providers",
          content: "Enquiry details may be stored using tools such as Google Sheets, Apps Script, email, or similar lead-management services. Access is limited to representatives and service providers needed to process your enquiry."
        },
        {
          title: "Data Requests",
          content: "To request correction, update, or deletion of your enquiry details, contact us at praveen1chauhan@gmail.com or call +91 9625344852."
        },
        {
          title: "Security",
          content: "We take reasonable steps to protect submitted information, but no internet-based system can be guaranteed to be completely secure. Please avoid submitting sensitive financial or identity documents through the enquiry form."
        }
      ];
    } else {
      return [
        {
          title: "Use Of Website",
          content: "By using this website, you agree to these terms. If you do not agree, please do not use the website or submit an enquiry through it."
        },
        {
          title: "Project Information",
          content: "All project details, floor plans, images, specifications, amenities, pricing, offers, rental references, availability, pricing, and availability shown on this website are indicative and subject to verification, correction, and change."
        },
        {
          title: "Bookings And Payments",
          content: "No booking, allotment, payment plan, price, possession timeline, or commercial term is final unless confirmed in official written communication and applicable project documents issued by the authorized Shubham City team."
        },
        {
          title: "User Responsibility",
          content: "You agree to provide accurate enquiry information and not misuse the website, forms, call links, WhatsApp links, images, text, or any interactive feature."
        },
        {
          title: "Intellectual Property",
          content: "The website content, layout, text, branding, images, and design elements are owned by or licensed for Shubham City. They may not be copied, reused, modified, or distributed without permission."
        },
        {
          title: "Limitation Of Liability",
          content: "Shubham City will not be liable for losses arising from reliance on website content, third-party service interruptions, inaccurate visitor submissions, or decisions made without independent verification of project information."
        },
        {
          title: "Contact",
          content: "For questions about these terms, contact praveen1chauhan@gmail.com or call +91 9625344852."
        }
      ];
    }
  };

  const content = getLegalContent(activeType);
  const title = activeType === 'disclaimer' ? 'DISCLAIMER' : activeType === 'privacy' ? 'PRIVACY POLICY' : 'TERMS OF USE';

  return (
    <div className="min-h-screen bg-white selection:bg-gold selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-premium h-20 px-6 md:px-12 lg:px-20 flex items-center justify-center border-b border-gold/10">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-serif tracking-tighter font-black uppercase leading-none text-green-deep">
            Shubham City
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-1.5 text-gold">Haridwar</span>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-[80vh]">
        <motion.div
           key={activeType}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-16"
        >
          <div className="text-center space-y-4">
             <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] italic">Information & Compliance</span>
             <h1 className="text-5xl md:text-7xl font-serif text-green-deep uppercase tracking-tighter">
               {title}
             </h1>
             <div className="h-0.5 w-20 bg-gold mx-auto"></div>
          </div>

          <div className="space-y-12">
            {content.map((section, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4 group"
              >
                <h2 className="text-2xl font-serif text-gold italic group-hover:pl-2 transition-all duration-300">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg font-light text-justify md:text-left">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-16 border-t border-gold/10 flex flex-col items-center gap-8">
             {/* Tab Switcher */}
             <div className="flex flex-wrap justify-center gap-3">
               {[
                 { id: 'disclaimer', label: 'Disclaimer' },
                 { id: 'terms', label: 'Terms' },
                 { id: 'privacy', label: 'Privacy' }
               ].map((tab) => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveType(tab.id as any)}
                   className={cn(
                     "px-6 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-black transition-all",
                     activeType === tab.id 
                       ? "bg-gold text-white shadow-md scale-105" 
                       : "bg-offwhite text-green-deep/40 hover:bg-gold/10 hover:text-gold"
                   )}
                 >
                   {tab.label}
                 </button>
               ))}
             </div>

             <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest hover:text-green-deep transition-colors text-xs"
             >
                <ChevronLeft className="w-5 h-5" />
                Return to main website
             </button>
          </div>
        </motion.div>
      </div>
      
      <footer className="bg-green-deep text-white/30 py-12 px-6 text-center border-t border-gold/20">
         <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
               <span className="text-xl font-serif tracking-tighter font-bold uppercase text-white leading-none">
                  Shubham City
               </span>
               <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mt-1">Haridwar</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-medium">© 2024 Shubham City Residences. All Rights Reserved.</p>
         </div>
      </footer>
    </div>
  );
};

const INCLUSIONS = [
  { category: "Wooden Work", items: ["Modular Kitchen", "Full-height wardrobe", "Double bed", "Dressing unit"] },
  { category: "Electric & Light", items: ["Air Conditioner", "LED panel lights", "Ceiling fans", "Bedside lamp"] },
  { category: "Kitchen", items: ["Refrigerator", "Induction cooktop", "Kettle & Toaster", "Coffee maker"] },
  { category: "Bathroom", items: ["Premium fittings", "Geyser", "Basin & Mirror", "Modern sanitary"] },
];

const LOCATION_HIGHLIGHTS = [
  { place: "NH-334 Delhi-Haridwar Highway", time: "1 Minute" },
  { place: "Crystal World Water Park", time: "3 Minutes" },
  { place: "Patanjali Yogpeeth", time: "5 Minutes" },
  { place: "Roorkee City", time: "10 Minutes" },
  { place: "Har Ki Pauri (Haridwar)", time: "18 Minutes" },
];

const MobileAmenitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = Math.ceil(AMENITIES.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesCount);
    }, 4500);
    return () => clearInterval(timer);
  }, [slidesCount]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slidesCount) % slidesCount);

  return (
    <div className="relative overflow-visible -mx-6">
      <div className="overflow-hidden rounded-none border-y border-gold/20 shadow-premium">
        <motion.div
           animate={{ x: `-${currentIndex * 100}%` }}
           transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
           className="flex"
        >
          {Array.from({ length: slidesCount }).map((_, slideIdx) => (
            <div key={slideIdx} className="min-w-full">
              {[AMENITIES[slideIdx * 2], AMENITIES[slideIdx * 2 + 1]].filter(Boolean).map((amenity, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className={cn(
                    "relative h-[300px] w-full overflow-hidden",
                    itemIdx === 0 && AMENITIES[slideIdx * 2 + 1] ? "border-b border-white/40" : ""
                  )}
                >
                  <div className="absolute inset-0 bg-white/5 z-10"></div>
                  <div className="absolute inset-0 z-0">
                    <img src={amenity.img} alt={amenity.title} className="w-full h-full object-cover scale-110 brightness-115 contrast-[1.05] saturate-110" />
                  </div>
                  {amenity.label && (
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="text-white font-poppins font-bold text-base tracking-[0.2em] uppercase opacity-90">{amenity.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons - Positioned at "contact point" (300px) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-[300px] -translate-y-1/2 w-10 h-10 rounded-full gold-gradient text-white shadow-2xl z-30 flex items-center justify-center transition-all active:scale-90 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-[300px] -translate-y-1/2 w-10 h-10 rounded-full gold-gradient text-white shadow-2xl z-30 flex items-center justify-center transition-all active:scale-90 border border-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'studio' | '1bhk'>('studio');
  const [scrolled, setScrolled] = useState(false);
  const [legalPage, setLegalPage] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...data
      })
    })
      .then(() => {
        setIsSubmitted(true);
        if (isBookingModalOpen) {
          setTimeout(() => {
            setIsSubmitted(false);
            setIsBookingModalOpen(false);
          }, 3000);
        }
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   if (legalPage) {
     return <LegalView type={legalPage} onBack={() => setLegalPage(null)} />;
   }

   return (
     <div className="min-h-screen bg-offwhite selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 px-6 md:px-12 lg:px-20 flex items-center justify-between",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-premium h-20 border-b border-gold/10" : "bg-transparent"
      )}>
        <div className="flex flex-col">
          <span className={cn("text-2xl md:text-3xl font-serif tracking-tighter font-black uppercase leading-none transition-colors", scrolled ? "text-[#051a14]" : "text-green-deep")}>
            Shubham City
          </span>
          <span className={cn("text-[10px] uppercase tracking-[0.3em] font-bold mt-1.5 transition-colors", scrolled ? "text-[#8b6f2b]" : "text-gold")}>Haridwar</span>
        </div>

        <div className={cn("hidden md:flex items-center gap-6 lg:gap-8 text-[9px] uppercase tracking-[0.2em] font-black transition-colors", scrolled ? "text-green-deep" : "text-white")}>
          <a href="#" className="hover:text-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-gold transition-colors">Overview</a>
          <a href="#amenities" className="hover:text-gold transition-colors">Amenities</a>
          <a href="#floorplan" className="hover:text-gold transition-colors">Floor Plans</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#location" className="hover:text-gold transition-colors">Location Map</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Price List</a>
          <a href="#enquiry-form" className="hover:text-gold transition-colors">Contact Us</a>
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="px-6 py-2.5 bg-gold text-green-deep rounded-full font-black uppercase tracking-[0.15em] hover:bg-white hover:shadow-xl transition-all ml-2"
          >
            Enquire Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6 text-black" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-offwhite flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif font-bold text-2xl text-green-deep border-b-2 border-gold pb-1">SHUBHAM CITY</span>
              <button className="bg-green-deep/5 p-2 rounded-full" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8 text-green-deep" /></button>
            </div>
            <div className="flex flex-col gap-5 text-xl font-serif text-green-deep/80">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Home</a>
              <a href="#overview-mobile" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Overview</a>
              <a href="#amenities" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Amenities</a>
              <a href="#floorplan" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Floor Plans</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Gallery</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Location Map</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Price List</a>
              <a href="#enquiry-form" onClick={() => setIsMenuOpen(false)} className="hover:text-gold">Contact Us</a>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center gap-4 text-green-deep font-medium mb-4">
                 <Phone className="w-6 h-6 text-gold" /> +91 96253 44852
              </div>
              <a 
                href="tel:+919625344852"
                onClick={() => setIsMenuOpen(false)}
                className="w-full gold-gradient text-white p-5 rounded-sm flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-gold/20 no-underline"
              >
                <Phone className="w-6 h-6" />
                Book Site Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-auto md:h-screen flex flex-col md:block pt-20 overflow-hidden bg-white">
        {/* Background Image Container */}
        <div className="relative h-[45vh] md:absolute md:inset-0 md:h-full md:z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={HERO_IMAGE} 
            alt="Shubham City Entrance" 
            className="w-full h-full object-cover hidden md:block"
          />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={HERO_MOBILE_IMAGE} 
            alt="Shubham City Entrance Mobile" 
            className="w-full h-full object-cover block md:hidden"
          />
          {/* Desktop Overlays */}
          <div className="absolute inset-0 bg-black/10 hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-transparent to-transparent hidden md:block"></div>
          
          {/* Desktop White fade out effect */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block"></div>
        </div>

        {/* Hero Content Area - Right Aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-0 md:h-full flex items-center justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-2xl md:ml-auto text-center md:text-right space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/15 md:bg-gold/20 md:backdrop-blur-md border border-gold/40 rounded-full text-gold-deep md:text-gold text-[10px] font-black uppercase tracking-[0.4em] mx-auto md:mx-0 md:ml-auto">
              <ShieldCheck className="w-4 h-4 fill-gold/20 md:fill-gold/20" />
              HRDA Approved Township
            </div>

            <h1 id="overview-mobile" className="text-4xl md:text-6xl lg:text-7xl font-serif italic font-light leading-[1.1] text-green-deep md:text-white tracking-tight md:drop-shadow-2xl">
              Peaceful <span className="text-gold-deep md:text-gold font-normal not-italic">Sanctuary</span><br/>
              Built for <span className="underline decoration-gold-deep/50 md:decoration-gold/50 underline-offset-8">Generations.</span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-green-deep/70 md:text-white/95 italic font-medium max-w-lg mx-auto md:ml-auto md:mr-0 tracking-wider">
              Shubham City is an HRDA-approved township in Haridwar offering premium plots, studio apartments, and 1 BHK holiday homes designed for modern families, investors, and senior citizen living. Enjoy gated security, green surroundings, wellness-focused amenities, and excellent connectivity near NH-334.
            </p>

            <motion.a
              whileTap={{ scale: 0.95 }}
              href="tel:+919625344852"
              className="md:hidden w-full max-w-sm mx-auto gold-gradient-deep text-white py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl shadow-gold-deep/30 flex items-center justify-center gap-3 transition-all active:scale-95 no-underline"
            >
              <Phone className="w-5 h-5" />
              Book a Site Visit
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="md:hidden text-xl font-serif italic font-bold text-green-deep tracking-wide mt-2"
            >
              Spread across lush landscapes, Shubham City offers:
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="md:hidden flex flex-col items-center gap-3 mt-8 pb-8"
            >
              {[
                "Residential Plots",
                "Luxury Villas",
                "Fully furnished Studio Apartments",
                "Modern 1 BHK Apartments",
                "Senior Citizen Living"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 w-full max-w-sm px-6 py-3 bg-green-deep rounded-xl shadow-lg border border-white/10">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-poppins font-bold text-white tracking-wide leading-tight text-left italic-none uppercase">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle Stats Indication in the corner */}
        <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
           <div className="flex gap-10">
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-gold font-black mb-1">Pricing</p>
                <p className="text-2xl font-serif text-white">₹19.9L*</p>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-gold font-black mb-1">Yield</p>
                <p className="text-2xl font-serif text-white">₹15K/mo</p>
              </div>
           </div>
        </div>
      </section>

      {/* About Shubham City */}
      <section id="about" className="hidden md:block py-16 md:py-24 px-6 bg-white overflow-hidden relative border-b border-gold/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 space-y-12 flex flex-col items-start text-left"
            >
              <div className="space-y-4 flex flex-col items-start">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold-deep text-[10px] font-black uppercase tracking-[0.3em]">
                   Township Legacy
                </div>
                <h2 className="text-4xl md:text-[75px] font-serif text-green-deep leading-[1] uppercase font-normal tracking-tighter" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  ABOUT <span className="text-gold italic font-normal">SHUBHAM CITY</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-serif text-gold italic font-normal text-left">
                    A Lifestyle beyond ordinary
                  </h3>
                </div>
                
                <div className="space-y-6 text-slate-800">
                  <p className="text-xl leading-relaxed font-bold">
                    Shubham City is an HRDA-approved integrated township thoughtfully designed to offer the perfect blend of modern living, peaceful surroundings, and long-term value. Strategically located just off NH-334 near Haridwar, the township provides excellent connectivity while maintaining a calm, green, and community-focused environment.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-slate-700">
                    Spread across beautifully landscaped surroundings, Shubham City brings together residential plots, luxury villas, fully furnished studio apartments, and modern 1 BHK homes — making it an ideal destination for families, investors, holiday home buyers, and senior citizens.
                  </p>
                </div>
                
                <div className="pt-12 border-t border-gold/20 flex flex-col items-start">
                  <p className="text-sm font-black text-gold-deep uppercase tracking-[0.2em] mb-10 flex items-center gap-6 w-full">
                    Spread across lush landscapes, Shubham City offers:
                    <span className="flex-grow h-[1px] bg-gold/30"></span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {[
                      "HRDA Approved Township",
                      "Residential Plots",
                      "Luxury Villas",
                      "Fully Furnished Studio Apartments",
                      "Modern 1 BHK Apartments",
                      "Senior Citizen Friendly Living",
                      "Holiday Home Investment Opportunities",
                      "Landscaped Parks & Wide Roads",
                      "Secure Gated Community",
                      "Excellent Highway Connectivity"
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center justify-start gap-5 p-5 bg-alt-bg border border-gold/10 rounded-2xl group/item cursor-default transition-all hover:bg-white hover:shadow-premium hover:border-gold/30"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-deep text-white shrink-0 shadow-lg group-hover/item:bg-gold transition-colors">
                          <Check className="w-5 h-5" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-black text-green-deep uppercase tracking-widest leading-tight">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-gold/20 flex flex-col items-start space-y-6">
                  <h4 className="text-3xl font-serif text-green-deep font-black uppercase tracking-[0.1em]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                    Why <span className="text-gold italic font-normal">Choose</span> Shubham City?
                  </h4>
                  <p className="text-lg text-slate-800 leading-relaxed font-bold">
                    At Shubham City, every space is designed to create a sense of comfort, peace, and belonging. It is not just a real estate project — it is a thoughtfully built community where modern lifestyle meets natural serenity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image Gallery Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column of Gallery */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl relative group h-[450px] transition-all hover:shadow-gold/20">
                    <img 
                      src="https://i.ibb.co/3mysf8bf/image.png" 
                      alt="Township Overview" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[30px] overflow-hidden shadow-xl h-[280px] group transition-all hover:shadow-gold/10">
                    <img 
                      src="https://i.ibb.co/NgNK5BkS/Entrance.jpg" 
                      alt="Main Entrance" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[30px] overflow-hidden shadow-xl h-[350px] group transition-all hover:shadow-gold/10">
                    <img 
                      src="https://i.ibb.co/1YSMkQbS/Landscape-view-3.jpg" 
                      alt="Landscape View" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[30px] overflow-hidden shadow-xl h-[300px] group transition-all hover:shadow-gold/10">
                    <img 
                      src="https://i.ibb.co/7JM4fvS7/Road-night-view.jpg" 
                      alt="Road Night View" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Right Column of Gallery - Offset */}
                <div className="flex flex-col gap-6 pt-20">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl relative group h-[380px] transition-all hover:shadow-gold/20">
                    <img 
                      src="https://i.ibb.co/jvcqcn8v/image.png" 
                      alt="Modern Living" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[30px] overflow-hidden shadow-xl h-[320px] group transition-all hover:shadow-gold/10">
                    <img 
                      src="https://i.ibb.co/RGPkYjJt/Road-View.jpg" 
                      alt="Internal Roads" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[30px] overflow-hidden shadow-xl h-[350px] group transition-all hover:shadow-gold/10">
                    <img 
                      src="https://i.ibb.co/mrnmGkQt/image.png" 
                      alt="Community Space" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[30px] overflow-hidden shadow-xl h-[250px] group transition-all hover:shadow-gold/10">
                    <img 
                      src="https://i.ibb.co/23NcSW7b/Parking-night-view.jpg" 
                      alt="Parking Night View" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-deep/5 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apartment Interior Views */}
      <section id="interiors" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#fdfcfb]">
        {/* Subtle stone texture background simulation */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/marble-similar.png')]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-7xl font-serif text-[#4a3427] tracking-tight uppercase">Apartment Interior Views</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-[#c5a07c]"></div>
                <p className="text-xl md:text-3xl font-serif italic text-[#8c6d5a]">Premium Interiors That Feel Like Home</p>
                <div className="h-px w-12 bg-[#c5a07c]"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {/* Primary View: Bedroom */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gold/10 bg-[#f8f4f0]">
                <img 
                  src={INTERIOR_BEDROOM_IMAGE} 
                  alt="Studio Bedroom" 
                  className="w-full h-[500px] md:h-[650px] object-cover object-[50%_33%] scale-[1.2] transition-transform duration-1000 group-hover:scale-[1.25]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="mt-8 flex gap-5 items-start max-w-4xl">
                <div className="w-3 h-3 rounded-full bg-gold mt-2 animate-pulse shrink-0"></div>
                <p className="text-xl md:text-2xl font-serif text-[#4a3427] leading-relaxed">
                  <span className="font-bold border-b border-gold/30">Studio Bedroom</span>
                  <span className="text-[#8c6d5a] ml-4 font-light italic">
                    | Warm tones, premium headboard, modern lighting, and elegant storage, creating a cozy and luxurious retreat.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Secondary Views: Grid */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-12">
              {/* Living Area */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-gold/10 aspect-[3/2] bg-[#f8f4f0]">
                  <img 
                    src={INTERIOR_LIVING_IMAGE} 
                    alt="Studio Living + Kitchen" 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="mt-8 flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold mt-2 shrink-0"></div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-[#4a3427] font-bold">Studio Living + Kitchen</h3>
                    <p className="text-lg font-serif italic text-[#6d5a4a] leading-relaxed opacity-80">
                      A sleek living space with compact modular kitchen, premium stone textures, soft lighting, and modern fittings.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Washroom */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-gold/10 aspect-[3/2] bg-[#f8f4f0]">
                  <img 
                    src={INTERIOR_WASHROOM_IMAGE} 
                    alt="Studio Washroom" 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="mt-8 flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold mt-2 shrink-0"></div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-[#4a3427] font-bold">Studio Washroom</h3>
                    <p className="text-lg font-serif italic text-[#6d5a4a] leading-relaxed opacity-80">
                      Hotel-style bathroom with premium tiling, soft backlit mirror, modern sanitaryware.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Lifestyle Section */}
      <section className="relative pt-16 pb-32 md:py-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={LIFESTYLE_IMAGE}
            alt="Lifestyle"
            className="w-full h-full object-cover opacity-15 grayscale-[0.5] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-16 bg-gold/30"></div>
              <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]">Pure Essence</span>
              <div className="h-px w-16 bg-gold/30"></div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif text-green-deep tracking-tight mb-8">
              A <span className="italic font-light">Sanctuary</span> for <br/>
              the <span className="text-gold underline underline-offset-[12px] decoration-1">Spirited</span> Soul
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed italic">
              "Find your rhythm where the whispers of nature meet the convenience of tomorrow. Shubham City isn't just a location; it's a legacy of peace."
            </p>

            <div className="pt-12">
              <div className="inline-block px-8 py-6 md:px-10 md:py-5 border border-gold/20 rounded-2xl md:rounded-full backdrop-blur-sm bg-white/30 w-full md:w-auto">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="text-center md:text-left md:border-r border-gold/10 pb-4 md:pb-0 md:pr-8 w-full md:w-auto border-b md:border-b-0">
                    <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Atmosphere</p>
                    <p className="text-lg font-serif text-green-deep">Lush & Serene</p>
                  </div>
                  <div className="text-center md:text-left md:border-r border-gold/10 pb-4 md:pb-0 md:pr-8 w-full md:w-auto border-b md:border-b-0">
                    <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Aesthetic</p>
                    <p className="text-lg font-serif text-green-deep">Modern Organic</p>
                  </div>
                  <div className="text-center md:text-left w-full md:w-auto">
                    <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Experience</p>
                    <p className="text-lg font-serif text-green-deep">Uninterrupted</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section id="floorplan" className="pt-12 pb-24 md:py-24 px-6 bg-[#fdfcfb] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-green-deep tracking-tight uppercase -mt-[45px] mb-[17px] ml-0 mr-0 pl-0">Masterful Layouts</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gold/50"></div>
                <p className="text-lg md:text-xl font-serif italic text-gold-deep">Smartly Designed Floor Plans</p>
                <div className="h-px w-12 bg-gold/50"></div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gold/5 p-1.5 rounded-full border border-gold/10 shadow-sm">
              <button 
                onClick={() => setActiveTab('studio')}
                className={cn(
                  "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                  activeTab === 'studio' 
                    ? "bg-gold text-green-deep shadow-lg" 
                    : "text-green-deep/60 hover:text-green-deep"
                )}
              >
                STUDIO APARTMENT
              </button>
              <button 
                onClick={() => setActiveTab('1bhk')}
                className={cn(
                  "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                  activeTab === '1bhk' 
                    ? "bg-gold text-green-deep shadow-lg" 
                    : "text-green-deep/60 hover:text-green-deep"
                )}
              >
                1 BHK RESIDENCE
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'studio' ? (
                <motion.div
                  key="studio"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="relative bg-white p-8 md:p-16 rounded-[40px] shadow-premium border border-gold/10 overflow-hidden grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
                    <div className="relative z-10 w-full max-w-sm ml-0">
                      <img 
                        src={FLOOR_PLAN_STUDIO} 
                        alt="Studio Apartment Floor Plan" 
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="text-left space-y-8 relative z-10">
                      <div className="space-y-4">
                        <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Spacious Living</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-green-deep font-bold leading-tight">STUDIO APARTMENT</h3>
                        <p className="text-gold-deep mt-4 text-lg font-serif italic max-w-xs">A masterfully designed sanctuary optimized for modern urbanites or as a high-yield holiday retreat.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 border-t border-gold/10">
                        {[
                          "Separate Sleeping Zone",
                          "Designer Washroom",
                          "Private Balcony View",
                          "Smart Storage Space",
                          "Higher Rental Potential"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-gold" />
                            </div>
                            <span className="text-sm font-medium text-green-deep/80">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-8 border-t border-gold/10">
                        <p className="text-sm font-black text-green-deep uppercase tracking-[0.2em] mb-4">Ideally Suited For</p>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { text: "Holiday Home", icon: Home },
                            { text: "Rental Income", icon: TrendingUp },
                            { text: "Senior Living", icon: ShieldCheck }
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 p-5 bg-green-deep rounded-2xl border border-gold/30 shadow-xl group/suited hover:bg-green-deep/95 transition-all">
                              <item.icon className="w-7 h-7 text-gold transition-transform group-hover/suited:scale-110" />
                              <span className="text-[9px] font-bold text-white uppercase tracking-widest text-center leading-tight">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-32 -translate-y-32"></div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="1bhk"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="relative bg-white p-8 md:p-16 rounded-[40px] shadow-premium border border-gold/10 overflow-hidden grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
                    <div className="relative z-10 w-full max-w-sm ml-0">
                      <img 
                        src={FLOOR_PLAN_1BHK} 
                        alt="1 BHK Residence Floor Plan" 
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="text-left space-y-8 relative z-10">
                      <div className="space-y-4">
                        <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Premium Layout</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-green-deep font-bold leading-tight">1 BHK RESIDENCE</h3>
                        <p className="text-gold-deep mt-4 text-lg font-serif italic max-w-xs">Elegance meets functionality in these spacious residences, designed for families who value privacy and space.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 border-t border-gold/10">
                        {[
                          "Defined Living & Dining",
                          "Modular Kitchen Ready",
                          "Spacious Master Suite",
                          "Double Balcony Access",
                          "Long-term Capital Value"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-gold" />
                            </div>
                            <span className="text-sm font-medium text-green-deep/80">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-8 border-t border-gold/10">
                        <p className="text-sm font-black text-green-deep uppercase tracking-[0.2em] mb-4">Ideally Suited For</p>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { text: "Self-Use", icon: Home },
                            { text: "Small Families", icon: Users },
                            { text: "Luxury Getaway", icon: Sparkles }
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 p-5 bg-green-deep rounded-2xl border border-gold/30 shadow-xl group/suited hover:bg-green-deep/95 transition-all">
                              <item.icon className="w-7 h-7 text-gold transition-transform group-hover/suited:scale-110" />
                              <span className="text-[9px] font-bold text-white uppercase tracking-widest text-center leading-tight">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-32 -translate-y-32"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="pricing" className="pt-16 pb-12 md:py-32 px-6 bg-green-deep/2 border-y border-gold/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 -mt-[45px]">
            <h2 className="text-4xl md:text-6xl font-serif text-green-deep mb-6">Investment Strategy</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Choose between high-efficiency smart studios or spacious 1 BHK apartments with guaranteed returns.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Studio Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gold/40 p-10 rounded-2xl flex flex-col justify-between shadow-premium relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-gold/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Exclusive Inventory</span>
                <h2 className="text-4xl font-serif mt-2 text-green-deep">Studio Apartments</h2>
                <p className="text-green-muted text-xs mt-2 font-mono uppercase tracking-widest">328 SQ. FT. Total Area</p>
                <div className="mt-6 flex flex-wrap gap-2">
                   <span className="text-[9px] uppercase tracking-widest font-bold border border-gold/20 px-3 py-1 rounded-full text-gold">Smart Layout</span>
                   <span className="text-[9px] uppercase tracking-widest font-bold border border-gold/20 px-3 py-1 rounded-full text-gold">Fully Furnished</span>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex justify-between items-end border-b border-dashed border-gold/30 pb-6">
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-green-muted mb-1">Standard Pricing</p>
                    <p className="text-4xl font-serif text-green-deep italic">₹19.90 <span className="text-sm font-sans tracking-normal not-italic opacity-60">Lakhs</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-semibold text-green-muted mb-1">Booking Amount</p>
                    <p className="text-lg font-serif text-green-deep italic">₹1.0 <span className="text-xs font-sans tracking-normal not-italic opacity-60">Lakhs</span></p>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-alt-bg py-6 px-8 rounded-xl border border-gold/10">
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-green-muted">Assured Rental</p>
                    <p className="text-2xl font-serif text-green-deep">₹10,000 <span className="text-xs font-sans italic">/ month</span></p>
                  </div>
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="h-12 w-12 border border-gold text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all transform group-hover:translate-x-1"
                  >➔</button>
                </div>
              </div>
            </motion.div>

            {/* 1BHK Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-deep text-white p-10 rounded-2xl flex flex-col justify-between shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">High Yield Opportunity</span>
                <h2 className="text-4xl font-serif mt-2 text-white">1 BHK Residences</h2>
                <p className="text-gold/80 text-xs mt-2 font-mono uppercase tracking-widest">518 SQ. FT. Total Area</p>
                <div className="mt-6 flex flex-wrap gap-2">
                   <span className="text-[9px] uppercase tracking-widest font-bold border border-white/10 px-3 py-1 rounded-full text-white/50">Prime Space</span>
                   <span className="text-[9px] uppercase tracking-widest font-bold border border-white/10 px-3 py-1 rounded-full text-white/50">Luxury Finishing</span>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-6">
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-white/60 mb-1">Standard Pricing</p>
                    <p className="text-4xl font-serif text-gold italic">₹27.90 <span className="text-sm font-sans tracking-normal not-italic text-white/40">Lakhs</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-semibold text-white/60 mb-1">Booking Amount</p>
                    <p className="text-lg font-serif text-gold italic">₹1.5 <span className="text-xs font-sans tracking-normal not-italic text-white/40">Lakhs</span></p>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white/5 py-6 px-8 rounded-xl border border-white/10">
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-white/60">Assured Rental</p>
                    <p className="text-2xl font-serif text-gold">₹15,000 <span className="text-xs font-sans text-white/60 italic">/ month</span></p>
                  </div>
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="h-12 w-12 bg-gold text-green-deep rounded-full flex items-center justify-center hover:bg-white hover:text-green-deep transition-all transform group-hover:translate-x-1"
                  >➔</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inclusions Slider / Checklist */}
      <section id="inclusions" className="pt-8 pb-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-gold"></div>
                  <span className="text-gold font-bold tracking-widest uppercase text-xs">Ready To Move</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif text-green-deep mb-8 leading-tight">
                  Seamlessly <br />Fully <br />Furnished
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                  Every home comes fully loaded with premium fittings and appliances. Designed so you can start living your dream life from day one.
                </p>
                <div className="inline-flex items-center gap-4 p-5 bg-offwhite border-2 border-gold/10 rounded-sm shadow-premium">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-white">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-deep tracking-widest uppercase">Jaguar / Kohler</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Grade Sanitary Fittings</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
              {INCLUSIONS.map((group, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 bg-alt-bg border border-gold/10 rounded-2xl hover:shadow-2xl transition-all duration-500"
                >
                  <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-green-deep mb-8 border-b border-gold/20 pb-4">{group.category}</h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center text-sm gap-3 group/item">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full transition-transform group-hover/item:scale-150"></div>
                        <span className="text-green-muted font-medium group-hover/item:text-green-deep transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Lifestyle */}
      <section id="amenities" className="pt-16 pb-24 md:py-32 px-6 bg-green-deep relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/40"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-7xl font-serif text-gold mb-8 italic">Amenities</h2>
             <p className="text-white/40 max-w-2xl mx-auto text-lg font-light tracking-wide">Walkable green streets, landscaped gardens, and nature-rich surroundings create a lifestyle of calm balance.</p>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
            {AMENITIES.map((amenity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-[350px] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl"
              >
                 <div className="absolute inset-0 bg-white/5 z-10 transition-colors group-hover:bg-transparent"></div>
                 <div className="absolute inset-0 z-0">
                    <img src={amenity.img} alt={amenity.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-110 contrast-[1.05] saturate-110" />
                 </div>
                 {amenity.label && (
                   <div className="absolute bottom-8 left-8 z-20">
                     <span className="text-white font-poppins font-bold text-sm tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">{amenity.label}</span>
                   </div>
                 )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <MobileAmenitiesSlider />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="pt-16 pb-24 md:py-32 px-6 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-green-deep mb-6 uppercase">Project Gallery</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src={HERO_IMAGE} alt="Gallery 1" className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white" />
            <img src={INTERIOR_BEDROOM_IMAGE} alt="Gallery 2" className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white" />
            <img src={INTERIOR_LIVING_IMAGE} alt="Gallery 3" className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white" />
            <img src={INTERIOR_WASHROOM_IMAGE} alt="Gallery 4" className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white" />
            <img src={LIFESTYLE_IMAGE} alt="Gallery 5" className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white" />
            <img src={AMENITY_IMAGE} alt="Gallery 6" className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white" />
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section id="location" className="pt-16 pb-24 md:py-32 px-6 bg-offwhite relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full"
             >
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-[2px] w-12 bg-gold"></div>
                  <span className="text-gold font-bold tracking-widest uppercase text-xs">The Connectivity</span>
                  <div className="h-[2px] w-12 bg-gold"></div>
                </div>

                {/* Address Box */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16 w-full max-w-3xl mx-auto p-8 md:p-12 bg-[#fdfaf5] border border-gold/20 rounded-xl shadow-[0_15px_40px_rgba(184,146,64,0.08)] relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
                  
                  <div className="flex flex-col items-center gap-6 relative z-10">
                    <div className="space-y-1 font-serif font-bold text-[#063d2c] bg-[#fdfaf5] border border-gold/10 px-4 py-2 rounded-md">
                      <h3 className="text-2xl md:text-3xl text-[#065631] tracking-tight">Shubham City, Near NH-334,</h3>
                      <h3 className="text-2xl md:text-3xl text-[#065631] tracking-tight">Haridwar, Uttarakhand</h3>
                    </div>
                    
                    <motion.a
                      href="https://www.google.com/maps/search/?api=1&query=29.9028876,77.9812142"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 inline-flex items-center gap-3 bg-green-deep text-white px-10 py-4.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-green-deep/10 hover:bg-gold-dark transition-all duration-300 group"
                    >
                      <MapPin className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                      VIEW LOCATION
                    </motion.a>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-serif text-green-deep mb-10 leading-[1.1]">Strategic Location <br />Advantage</h2>
                
                <div className="space-y-4 text-left w-full max-w-2xl mx-auto">
                   {LOCATION_HIGHLIGHTS.map((h, i) => (
                     <div key={i} className="flex justify-between items-center p-6 border border-slate-200/50 rounded-sm bg-white hover:border-gold/30 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-4">
                           <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                           <span className="text-green-deep font-semibold tracking-tight">{h.place}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gold-dark bg-gold/5 px-4 py-2 rounded-full">
                           <Clock className="w-4 h-4" />
                           <span className="font-bold text-xs tracking-widest">{h.time}</span>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-20 flex flex-col md:flex-row gap-12 items-stretch max-w-6xl mx-auto">
                 {/* Form Container */}
                  <div id="enquiry-form" className="md:w-1/2 p-7 md:p-10 bg-[#fdfaf5] border border-gold/20 rounded-xl shadow-[0_15px_40px_rgba(184,146,64,0.08)] text-left relative overflow-hidden group scroll-mt-24">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-10">
                         <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-3">Priority Inquiry</h4>
                         <h3 className="text-3xl font-serif text-green-deep italic">Request a Call Back</h3>
                      </div>
                      
                      <form name="shubham-city-inquiry" data-netlify="true" onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-7">
                        <input type="hidden" name="form-name" value="shubham-city-inquiry" />
                        <div className="relative">
                          <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Full Name</span>
                          <div className="relative">
                             <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                             <input 
                                type="text" 
                                name="fullName"
                                placeholder="e.g. Rahul Sharma" 
                                required
                                className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium"
                             />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Email Address</span>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                             <input 
                                type="email" 
                                name="email"
                                placeholder="rahul@example.com" 
                                required
                                className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium"
                             />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Mobile Number</span>
                          <div className="relative">
                             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                             <input 
                                type="tel" 
                                name="phone"
                                placeholder="+91 98765 43210" 
                                required
                                className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium"
                             />
                          </div>
                        </div>

                        <div className="relative">
                          <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">City</span>
                          <div className="relative">
                             <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                             <input 
                                type="text" 
                                name="city"
                                placeholder="e.g. New Delhi" 
                                className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium"
                             />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Your Message</span>
                          <div className="relative">
                             <MessageSquare className="absolute left-4 top-6 w-3.5 h-3.5 text-gold/60" />
                             <textarea 
                                name="message"
                                rows={2} 
                                placeholder="Tell us what you're looking for..." 
                                className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep resize-none placeholder:text-slate-300 font-medium"
                             ></textarea>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          {isSubmitted ? (
                            <div className="w-full bg-green-deep/10 text-green-deep py-4.5 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 border border-gold/30">
                              Enquiry Sent Successfully
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          ) : (
                            <button type="submit" className="w-full bg-green-deep text-white py-4.5 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gold-dark transition-all duration-500 shadow-xl shadow-green-deep/10 group">
                               Submit Inquiry
                               <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Showcase Images Container */}
                  <div className="hidden md:grid md:w-1/2 grid-rows-2 gap-6">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-xl overflow-hidden shadow-2xl group"
                    >
                      <img 
                        src="https://i.ibb.co/MkJKVqW5/image.png" 
                        alt="Project Showcase 1" 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent"></div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-xl overflow-hidden shadow-2xl group"
                    >
                      <img 
                        src="https://i.ibb.co/bgGxx21y/image.png" 
                        alt="Project Showcase 2" 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent"></div>
                    </motion.div>
                  </div>
                </div>

             </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-green-deep text-white py-8 md:py-10 px-6 relative overflow-hidden border-t border-gold/20">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-6 lg:gap-12">
               <div className="col-span-2 md:col-span-1">
                  <div className="flex flex-col">
                     <div>
                        <div className="flex flex-col mb-4 text-center md:text-left">
                           <span className="text-5xl md:text-4xl lg:text-6xl font-serif tracking-tighter font-bold uppercase text-white leading-none">
                              Shubham City
                           </span>
                           <span className="text-xs lg:text-xs uppercase tracking-widest text-gold font-semibold mt-1">Lifestyle Beyond Ordinary</span>
                        </div>
                        <p className="text-white/40 text-base md:text-[10px] lg:text-base max-w-sm lg:max-w-md leading-relaxed font-light text-center md:text-left mx-auto md:mx-0">
                           A premier integrated residential project approved by HRDA, offering a unique blend of spiritual tranquility and modern luxury in the heart of Haridwar.
                        </p>
                     </div>
                  </div>
               </div>
               
               <div className="col-span-1 md:mt-0 lg:mt-0 flex flex-col gap-10 text-left md:text-left">
                  <div>
                     <h4 className="text-[10px] md:text-[10px] lg:text-xs uppercase tracking-widest text-gold font-bold mb-4">Office & Site Address</h4>
                     <p className="text-white/60 text-xs md:text-[10px] lg:text-base font-light leading-relaxed">
                        Shubham City, Near NH-334,<br/>
                        Badheri Rajputana,<br/>
                        Haridwar, Uttarakhand.
                     </p>
                  </div>
                  <div>
                     <h4 className="text-[10px] md:text-[10px] lg:text-xs uppercase tracking-widest text-gold font-bold mb-4">Contact Number</h4>
                     <p className="text-white/60 text-xs md:text-[10px] lg:text-base font-light leading-relaxed">
                        +91 9625344852
                     </p>
                  </div>
               </div>
               
               <div className="col-span-1 order-4 md:order-3 md:mt-0 lg:mt-0 flex flex-col gap-16 justify-between lg:justify-start">
                  <div className="text-left md:text-left">
                     <h4 className="text-xs md:text-[10px] lg:text-sm uppercase tracking-widest text-gold font-bold mb-4">EXPLORE</h4>
                     <ul className="space-y-4 text-white/60 text-xs md:text-[10px] lg:text-xs font-medium uppercase tracking-widest">
                        <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                        <li>
                          <a href="#about" className="hidden md:inline hover:text-gold transition-colors">Overview</a>
                          <a href="#overview-mobile" className="md:hidden hover:text-gold transition-colors">Overview</a>
                        </li>
                        <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
                        <li><a href="#floorplan" className="hover:text-gold transition-colors">Floor Plans</a></li>
                        <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
                        <li><a href="#location" className="hover:text-gold transition-colors">Location Map</a></li>
                        <li><a href="#pricing" className="hover:text-gold transition-colors">Price List</a></li>
                     </ul>
                  </div>
               </div>

               <div className="col-span-1 order-3 md:order-4 md:mt-0 lg:mt-0 flex flex-col gap-16 justify-between lg:justify-start">
                  <div className="text-left md:text-left">
                     <h4 className="text-xs md:text-[10px] lg:text-sm uppercase tracking-widest text-gold font-bold mb-4">LEGAL</h4>
                     <ul className="space-y-4 text-white/60 text-xs md:text-[10px] lg:text-xs font-medium uppercase tracking-widest">
                        <li><span onClick={() => setLegalPage('disclaimer')} className="hover:text-gold cursor-pointer transition-colors">DISCLAIMER</span></li>
                        <li><span onClick={() => setLegalPage('terms')} className="hover:text-gold cursor-pointer transition-colors">Terms of Use</span></li>
                        <li><span onClick={() => setLegalPage('privacy')} className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-medium opacity-30">
               <p>© 2024 Shubham City Residences. All Rights Reserved.</p>
            </div>
         </div>
      </section>





      {/* Booking Modal */}
<AnimatePresence>
  {isBookingModalOpen && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsBookingModalOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-green-deep/90 backdrop-blur-md cursor-pointer"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#fdfaf5] border border-gold/20 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative cursor-default"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <button 
          onClick={() => {
            setIsBookingModalOpen(false);
            setIsSubmitted(false);
          }}
          className="absolute top-8 right-6 p-2 bg-white/50 hover:bg-white rounded-full transition-all z-40 border border-gold/5 shadow-sm group"
        >
          <X className="w-5 h-5 text-green-deep/40 group-hover:text-green-deep transition-colors" />
        </button>

        {isSubmitted ? (
          <div className="p-16 text-center relative z-10">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-3xl font-serif text-green-deep mb-4 leading-tight">Request Received</h3>
            <p className="text-slate-500 leading-relaxed italic text-sm">Our relationship manager will reach out within 15 minutes to schedule your VIP site visit to Shubham City.</p>
          </div>
        ) : (
          <div className="p-7 md:p-12 relative z-10">
            <div className="text-center mb-10">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-3">Priority Inquiry</h4>
              <h3 className="text-3xl font-serif text-green-deep italic">Request a Call Back</h3>
            </div>

            <form name="shubham-city-modal-inquiry" form data-netlify="true" onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-7">
              <input type="hidden" name="form-name" value="shubham-city-modal-inquiry" />
              <div className="relative">
                <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Full Name</span>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                  <input 
                    required 
                    type="text" 
                    name="modalFullName"
                    className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium" 
                    placeholder="e.g. Rahul Sharma" 
                  />
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Email Address</span>
                <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                   <input 
                      required
                      type="email" 
                      name="modalEmail"
                      placeholder="rahul@example.com" 
                      className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium"
                   />
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Mobile Number</span>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                  <input 
                    required 
                    type="tel" 
                    name="modalPhone"
                    pattern="[0-9]{10}" 
                    className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium" 
                    placeholder="98765 43210" 
                  />
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">City</span>
                <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/60" />
                   <input 
                      required
                      type="text" 
                      name="modalCity"
                      placeholder="e.g. New Delhi" 
                      className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep placeholder:text-slate-300 font-medium"
                   />
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-3 left-3 bg-[#fdfaf5] px-2 text-[10px] uppercase tracking-widest text-green-deep font-black z-20">Your Message</span>
                <div className="relative">
                   <MessageSquare className="absolute left-4 top-6 w-3.5 h-3.5 text-gold/60" />
                   <textarea 
                      name="modalMessage"
                      rows={2} 
                      placeholder="Tell us what you're looking for..." 
                      className="w-full bg-white border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-green-deep resize-none placeholder:text-slate-300 font-medium"
                   ></textarea>
                </div>
              </div>
              
              <div className="pt-2">
                 <button 
                   type="submit"
                   className="w-full bg-green-deep text-white py-4.5 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gold-dark transition-all duration-500 shadow-xl shadow-green-deep/10 group"
                 >
                   Submit Inquiry
                   <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </div>
              
              <p className="text-[9px] text-center text-slate-400 mt-4 leading-relaxed italic uppercase tracking-tighter">By clicking, you agree to being contacted regarding your inquiry.</p>
            </form>
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
