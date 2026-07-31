import { ServiceItem, FaqItem, AreaServed } from './types';

export const WORKSHOP_INFO = {
  name: "MYS Street Tune Workshop",
  tagline: "Reliable Car Servicing & General Repairs in Sungai Merab",
  phone: "0173703796",
  phoneDisplay: "017-370 3796",
  intlPhone: "+60173703796",
  whatsappNumber: "60173703796",
  address: "Lot 1234, Jalan Merab Luar, Sungai Merab Luar, 43000 Kajang, Selangor, Malaysia",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MYS+Street+Tune+Workshop+Sungai+Merab+Luar+Kajang",
  wazeUrl: "https://waze.com/ul?q=MYS%20Street%20Tune%20Workshop%20Sungai%20Merab",
  defaultWhatsAppMessage: "Hi MYS Street Tune, I would like to enquire about car servicing/repair.",
  hours: "Monday - Saturday: 9:00 AM - 6:00 PM (Sunday & PH: Closed)",
  googleRating: "5.0",
  reviewCount: "48+",
  yearsExp: "10+",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "engine-oil",
    title: "Engine Oil & Filter Service",
    icon: "oil_barrel",
    shortDesc: "Premium synthetic lubricants and high-flow filters to keep your engine running smooth and cool.",
    features: ["Fully Synthetic & Semi-Synthetic Options", "OEM Oil Filter Replacements", "Free 15-Point Safety Inspection", "Fluid Level Top-Ups"],
    estimatedTime: "30 - 45 Mins"
  },
  {
    id: "brake-suspension",
    title: "Brake & Suspension",
    icon: "car_repair",
    shortDesc: "Complete brake pad replacement, rotor skimming, and suspension health checks for better handling.",
    features: ["Ceramic Low-Dust Brake Pads", "Precision Disc Rotor Skimming", "Absorber & Bushing Testing", "Brake Fluid Flushing"],
    estimatedTime: "45 - 90 Mins"
  },
  {
    id: "battery-electrical",
    title: "Battery & Electrical",
    icon: "battery_charging_full",
    shortDesc: "Diagnostic battery testing and high-performance battery replacements for all modern vehicles.",
    features: ["Free Digital Battery Health Test", "1-Year Official Warranty", "Alternator Charging System Check", "MF & EFB/AGM Batteries Available"],
    estimatedTime: "15 - 30 Mins"
  },
  {
    id: "general-troubleshooting",
    title: "General Troubleshooting",
    icon: "build",
    shortDesc: "Expert diagnostic services for engine check lights, weird noises, and overall performance issues.",
    features: ["OBD-II Computer Diagnostics", "Detailed Error Code Scan Reports", "Engine Knock & Noise Inspection", "Electrical Short Troubleshooting"],
    estimatedTime: "30 - 60 Mins"
  },
  {
    id: "aircond-service",
    title: "Aircond Service",
    icon: "ac_unit",
    shortDesc: "Full air-conditioning system flush, gas refill, and cooling coil cleaning for Malaysia's heat.",
    features: ["R134a Gas & PAG Oil Refills", "Cooling Coil Chemical Cleaning", "Cabin Filter Replacement", "Odor & Antibacterial Treatment"],
    estimatedTime: "45 - 60 Mins"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "location",
    question: "Where is MYS Street Tune Workshop located and what areas do you serve?",
    answer: "MYS Street Tune Workshop is located at Lot 1234, Jalan Merab Luar, Sungai Merab Luar, 43000 Kajang, Selangor, Malaysia. We proudly serve car owners from Kajang, Bandar Baru Bangi, Putrajaya, Sungai Merab, Cyberjaya, and surrounding areas."
  },
  {
    category: "services",
    question: "What services do you offer for regular car maintenance?",
    answer: "We offer comprehensive car care including Engine Oil & OEM Filter Changes, Brake Pad Replacement, Disc Rotor Skimming, Battery Health Testing & Installation, Aircond System Gas Flushing, Suspension Inspection, and Computer OBD-II Diagnostics."
  },
  {
    category: "appointment",
    question: "Do I need to make an appointment for an engine oil filter change?",
    answer: "Walk-ins are always welcome! However, booking an appointment via WhatsApp (+60173703796) guarantees immediate queue priority and faster turnaround time."
  },
  {
    category: "timing",
    question: "How long does a general repair or servicing take at your shop?",
    answer: "A standard engine oil and filter service usually takes between 30 to 45 minutes. General repairs, computer diagnostics, or brake pad replacements take approximately 1 to 2 hours depending on vehicle complexity."
  },
  {
    category: "parts",
    question: "Can I bring my own engine oil or spare parts?",
    answer: "Yes! You can bring your own engine oil or spare parts. We charge a fair and transparent labor rate for installation. Alternatively, we also stock genuine OEM filters, fully synthetic oils, and certified replacement parts at competitive prices."
  },
  {
    category: "services",
    question: "What payment methods are accepted at MYS Street Tune Workshop?",
    answer: "We accept Cash, Online Instant Banking Transfer, and DuitNow QR for seamless payment after servicing."
  }
];

export const AREAS_SERVED: AreaServed[] = [
  { name: "Sungai Merab Luar", distance: "0 km (Primary Hub)", highlights: "Immediate priority walk-ins & fast turnaround" },
  { name: "Bandar Baru Bangi", distance: "3 - 5 km", highlights: "Convenient 8-min drive from Seksyen 1, 3, 8 & 9" },
  { name: "Kajang Town", distance: "5 - 8 km", highlights: "Direct access via Jalan Sungai Merab / Jalan Reko" },
  { name: "Putrajaya (Presint 14/15)", distance: "4 - 7 km", highlights: "Quick route for civil servants & residents" },
  { name: "Cyberjaya", distance: "10 - 12 km", highlights: "Reliable workshop alternative with honest labor fees" }
];
