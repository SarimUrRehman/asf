/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * ============================================================================
 * ASF CAR DETAILING AND VALETING — SINGLE-FILE CONFIGURATION & APPLICATION
 * ============================================================================
 * HOW TO UPDATE YOUR CONTACT DETAILS & TEXT:
 * Edit the `SITE_CONFIG` object right below this comment block.
 * Replace the clearly marked placeholder values for:
 *   - `phoneDisplay` & `phoneRaw`
 *   - `whatsappNumber` (use international format without '+' or spaces, e.g. "447123456789")
 *   - `email`
 *   - `instagramHandle` & `instagramUrl`
 *   - `facebookHandle` & `facebookUrl`
 *   - `openingHours`
 * All links, contact cards, and the WhatsApp/Instagram DM booking generator
 * will automatically update across the entire website.
 * ============================================================================
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Check,
  Copy,
  ArrowRight,
  ChevronDown,
  Clock,
  ShieldCheck,
  Sparkles,
  Calendar,
  Car,
  User,
  FileText,
  ExternalLink,
  Upload,
  RotateCcw,
} from 'lucide-react';

// ============================================================================
// 1. OWNER CONFIGURATION OBJECT (EDIT ALL DETAILS HERE)
// ============================================================================
export const SITE_CONFIG = {
  business: {
    name: 'ASF Car Detailing and Valeting',
    shortName: 'ASF',
    subtitle: 'CAR DETAILING AND VALETING',
    tagline: 'Luxury Car Detailing & Valeting',
    positioning: 'Interior & Exterior Specialists',
    area: 'North Lanarkshire & Surrounding Areas',
    bookingNote: 'We confirm all bookings by DM.',
    trustStrip: [
      'Full Valets',
      'Deep Cleans',
      'Interior & Exterior',
      'Mobile-friendly Booking',
    ],
  },

  // 👉 REPLACE THESE PLACEHOLDERS WITH YOUR REAL CONTACT DETAILS:
  contact: {
    phoneDisplay: '07XXX XXXXXX (Replace with your phone)',
    phoneRaw: '+447000000000', // Used for tel: links
    whatsappNumber: '447000000000', // International format without '+' (e.g. 447123456789)
    email: 'your-email@example.com', // Replace with your business email
    instagramHandle: '@your_instagram_handle', // Replace with your Instagram handle
    instagramUrl: 'https://instagram.com/', // Replace with full link e.g. https://instagram.com/asfdetailing
    facebookHandle: 'ASF Car Detailing and Valeting',
    facebookUrl: 'https://facebook.com/', // Replace with full link to your Facebook page
  },

  // 👉 EDIT YOUR OPENING HOURS PLACEHOLDER HERE:
  openingHours: [
    { days: 'Monday – Friday', hours: '08:00 – 18:00 (Edit hours)' },
    { days: 'Saturday', hours: '09:00 – 17:00 (Edit hours)' },
    { days: 'Sunday', hours: 'By Appointment / DM Only' },
  ],

  // Areas covered in & around North Lanarkshire
  serviceAreas: [
    'Motherwell',
    'Wishaw',
    'Coatbridge',
    'Airdrie',
    'Cumbernauld',
    'Bellshill',
    'Hamilton',
    'Viewpark & Surrounding Areas',
  ],

  // Core 4 Services (No invented prices; uses "Get a quote" positioning)
  services: [
    {
      id: 'Full Valet',
      index: '01',
      title: 'Full Valet',
      quoteLabel: 'Get a quote · Complete inside & out refresh',
      description:
        'A comprehensive interior and exterior package designed to restore showroom freshness, deep gloss, and cabin comfort in a single booking.',
      features: [
        'Safe snow-foam pre-wash & two-bucket contact wash',
        'Wheels, tyres, arches & door shuts cleaned and dressed',
        'Thorough interior vacuum, plastics dressed & streak-free glass',
        'Exterior paintwork finished with high-gloss protective sealant',
      ],
    },
    {
      id: 'Deep Clean',
      index: '02',
      title: 'Deep Clean',
      quoteLabel: 'Get a quote · Intensive restorative treatment',
      description:
        'Built for heavily used vehicles needing intensive attention. Every surface is decontaminated, agitated, and sanitised from headliner to wheel barrels.',
      features: [
        'Multi-stage exterior wash & chemical decontamination',
        'Wet extraction & steam sanitisation for upholstery and carpets',
        'Intricate crevice brushing across vents, consoles & switchgear',
        'Odour neutralisation and durable surface protection throughout',
      ],
    },
    {
      id: 'Interior Detailing',
      index: '03',
      title: 'Interior Detailing',
      quoteLabel: 'Get a quote · Cabin & trim perfection',
      description:
        'Dedicated precision care for your cabin. We gently lift embedded dirt, stains, and dust from leather, fabric, Alcantara, and gloss trim.',
      features: [
        'Deep vacuuming & compressed-air purge of tight seams',
        'pH-neutral leather cleansing & matte conditioning',
        'Carpet & fabric shampoo extraction for a factory-fresh finish',
        'Crystal-clear interior glass & anti-static dashboard dressing',
      ],
    },
    {
      id: 'Exterior Detailing',
      index: '04',
      title: 'Exterior Detailing',
      quoteLabel: 'Get a quote · Paintwork clarity & protection',
      description:
        'Meticulous exterior decontamination and gloss enhancement to bring out deep, mirror-like reflections while shielding your paintwork from the elements.',
      features: [
        'Citrus pre-treatment, snow foam & ultra-soft mitts',
        'Iron fallout & tar removal for glass-smooth paintwork',
        'Deep alloy wheel face, barrel & brake calliper detailing',
        'Hydrophobic sealant application & satin tyre dressing',
      ],
    },
  ],

  // About Section Copy
  about: {
    headline: 'Obsessed With Every Detail',
    paragraphs: [
      'At ASF Car Detailing and Valeting, every vehicle is treated with the care, patience, and respect of a showroom centrepiece. Whether it is your daily driver, family SUV, or weekend performance car, we believe proper detailing is about preserving condition and elevating pride of ownership.',
      'We use safe, professional wash methods, dedicated microfibre systems, and carefully selected detailing formulations that clean deeply without harming delicate clearcoats, gloss trims, or cabin materials.',
      'Proudly serving clients across North Lanarkshire and surrounding areas, our focus is simple: honest advice, meticulous workmanship, and a finish that speaks for itself the moment you step back and look at your car.',
    ],
    highlights: [
      {
        title: 'Interior & Exterior Specialists',
        description:
          'Complete bumper-to-bumper care tailored to delicate paintwork, leather, fabrics, and modern cabin finishes.',
      },
      {
        title: 'Full Valets & Deep Cleans',
        description:
          'From routine maintenance valets to intensive restorative deep cleans that reset your vehicle inside and out.',
      },
      {
        title: 'Premium Care For Your Vehicle',
        description:
          'Safe contact wash techniques, pH-balanced products, and unhurried attention to badges, shuts, and seams.',
      },
      {
        title: 'Local To North Lanarkshire',
        description:
          'Conveniently serving drivers across North Lanarkshire and nearby towns with straightforward DM booking.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Inspect',
        description:
          'We assess your paintwork, wheels, and cabin materials to select the safest products and approach.',
      },
      {
        step: '02',
        title: 'Clean',
        description:
          'Thorough pre-wash, safe contact wash, and deep interior extraction remove built-up grime without marring.',
      },
      {
        step: '03',
        title: 'Detail',
        description:
          'Intricate attention to vents, stitching, door shuts, wheel barrels, and paint decontamination.',
      },
      {
        step: '04',
        title: 'Finish',
        description:
          'Protective sealants, satin tyre dressing, streak-free glass, and a final inspection under showroom light.',
      },
    ],
  },
};

// ============================================================================
// 2. CUSTOM INLINE SVG ARTWORK (LOGO, HERO CAR, SERVICE ICONS)
// ============================================================================

/**
 * Compact SVG Sports Car Outline for the Navbar & Footer Logo
 */
function LogoCarSVG({ className = 'w-16 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoChromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="35%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
      </defs>
      {/* Sleek Sports Coupe Roofline & Body Silhouette */}
      <path
        d="M14 48 C22 42, 34 35, 56 32 L88 18 C112 14, 144 15, 168 28 L198 34 C205 37, 208 42, 208 48 L190 49 M64 49 L146 49"
        stroke="url(#logoChromeGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side Window Sweeping Line */}
      <path
        d="M66 31 L92 21 C113 18, 138 19, 156 29 L66 31 Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeOpacity="0.85"
      />
      {/* Front & Rear Wheel Arches / Rims */}
      <circle
        cx="46"
        cy="49"
        r="11"
        stroke="url(#logoChromeGrad)"
        strokeWidth="3"
      />
      <circle cx="46" cy="49" r="4" fill="#FFFFFF" />
      <circle
        cx="168"
        cy="49"
        r="11"
        stroke="url(#logoChromeGrad)"
        strokeWidth="3"
      />
      <circle cx="168" cy="49" r="4" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Large Hero Animated Line-Art Sports Car (matches the ASF logo aesthetic)
 */
function HeroSportsCarSVG({ replayKey }: { replayKey: number }) {
  return (
    <svg
      key={replayKey}
      viewBox="0 0 800 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[680px] mx-auto drop-shadow-[0_0_28px_rgba(255,255,255,0.18)]"
      role="img"
      aria-label="Line-art luxury sports car silhouette above ASF wordmark"
    >
      <defs>
        <linearGradient id="heroCarChrome" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="22%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E5E7EB" />
          <stop offset="78%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="heroBodyGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id="floorSpotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#9CA3AF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle Showroom Floor Reflection Ellipse */}
      <ellipse cx="400" cy="212" rx="350" ry="18" fill="url(#floorSpotlight)" />

      {/* Ground Horizon Line */}
      <path
        d="M40 205 L760 205"
        stroke="url(#heroCarChrome)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />

      {/* Subtle Translucent Body Fill */}
      <path
        d="M68 172 C75 148, 118 128, 198 118 L305 68 C375 50, 485 52, 575 96 L695 118 C728 128, 742 148, 745 174 L675 182 L130 182 Z"
        fill="url(#heroBodyGlow)"
      />

      {/* Primary Animated Sports Car Silhouette Line */}
      <path
        className="animate-car-draw"
        d="M58 176 C64 150, 112 128, 195 116 L305 66 C378 48, 492 50, 580 96 L702 118 C734 126, 748 148, 750 176 L722 184 L658 184 M242 184 L558 184 M142 184 L68 184 Z"
        stroke="url(#heroCarChrome)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Aerodynamic Greenhouse / Cabin Window Graphic */}
      <path
        className="animate-car-draw"
        d="M225 114 L316 74 C382 59, 474 62, 548 98 L572 112 L225 114 Z"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.9"
      />

      {/* Sweeping Character Crease & Side Air Intake */}
      <path
        className="animate-car-draw"
        d="M115 148 C195 136, 360 132, 608 142 L565 166 L265 166"
        stroke="url(#heroCarChrome)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.75"
      />

      {/* LED Headlight & Taillight Blade Accents */}
      <path
        d="M72 152 L126 142"
        stroke="#E0F2FE"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M712 132 L742 140"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Front Performance Alloy Wheel */}
      <g>
        <circle
          cx="192"
          cy="176"
          r="38"
          fill="#050505"
          stroke="url(#heroCarChrome)"
          strokeWidth="4"
        />
        <circle
          cx="192"
          cy="176"
          r="27"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        <circle cx="192" cy="176" r="9" fill="#FFFFFF" />
      </g>

      {/* Rear Performance Alloy Wheel */}
      <g>
        <circle
          cx="608"
          cy="176"
          r="38"
          fill="#050505"
          stroke="url(#heroCarChrome)"
          strokeWidth="4"
        />
        <circle
          cx="608"
          cy="176"
          r="27"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        <circle cx="608" cy="176" r="9" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/**
 * Custom Inline SVG Icons for the 4 Services
 */
function ServiceIconSVG({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case 'Full Valet':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-9 h-9 text-white"
          aria-hidden="true"
        >
          <path
            d="M6 30 L12 18 C15 15, 33 15, 36 18 L42 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 30 H44 V36 C44 37.1 43.1 38 42 38 H6 C4.9 38 4 37.1 4 36 V30 Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="38" r="4" fill="#000" stroke="currentColor" strokeWidth="2" />
          <circle cx="34" cy="38" r="4" fill="#000" stroke="currentColor" strokeWidth="2" />
          <path
            d="M24 6 V11 M16 9 L18 12 M32 9 L30 12"
            stroke="#BAE6FD"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'Deep Clean':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-9 h-9 text-white"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="24"
            r="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <circle cx="24" cy="24" r="10" stroke="#BAE6FD" strokeWidth="2" />
          <path
            d="M24 7 V14 M24 34 V41 M7 24 H14 M34 24 H41"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
        </svg>
      );
    case 'Interior Detailing':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-9 h-9 text-white"
          aria-hidden="true"
        >
          {/* Luxury Sport Seat / Steering Silhouette */}
          <path
            d="M16 10 C16 7.8 17.8 6 20 6 H28 C30.2 6 32 7.8 32 10 V28 L36 36 H12 L16 28 V10 Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M20 14 H28 M19 20 H29 M18 26 H30"
            stroke="#BAE6FD"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10 41 H38"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'Exterior Detailing':
    default:
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-9 h-9 text-white"
          aria-hidden="true"
        >
          {/* Shield + Hydrophobic Beading / Gloss Reflection */}
          <path
            d="M24 6 L38 12 V23 C38 32.5 31.8 39.8 24 43 C16.2 39.8 10 32.5 10 23 V12 L24 6 Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M17 28 L31 14"
            stroke="#BAE6FD"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M21 32 L32 21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
        </svg>
      );
  }
}

// ============================================================================
// 3. MAIN SINGLE-PAGE APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [heroCarReplay, setHeroCarReplay] = useState(0);

  // Subtle Desktop Cursor Spotlight Refs (avoids React re-renders)
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  // Optional Interactive Work Photo Preview in About Section (so owner can preview their own photo)
  const [customWorkPhoto, setCustomWorkPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    carMakeModel: '',
    service: SITE_CONFIG.services[0].id,
    preferredDate: '',
    preferredTime: 'Morning',
    areaPostcode: '',
    notes: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [serviceHighlightFlash, setServiceHighlightFlash] = useState(false);

  // Today's date in YYYY-MM-DD for minimum booking date
  const todayStr = new Date().toISOString().split('T')[0];

  // Track scroll position for sticky navbar blur and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ['home', 'services', 'about', 'book', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Cursor Glow Effect (compositor-friendly transform)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorGlowRef.current) return;
      cursorGlowRef.current.style.transform = `translate3d(${e.clientX - 220}px, ${e.clientY - 220}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth Scroll Helper
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Pre-select a service from the Services cards and scroll to Booking form
  const handleSelectServiceAndBook = (serviceName: string) => {
    setFormData((prev) => ({ ...prev, service: serviceName }));
    setIsSubmitted(false);
    setServiceHighlightFlash(true);
    scrollToSection('book');
    setTimeout(() => setServiceHighlightFlash(false), 1400);
  };

  // Handle Work Photo Upload Preview (Optional local preview for the site owner)
  const handleWorkPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setCustomWorkPhoto(objectUrl);
  };

  // Validate Booking Form
  const validateBookingForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }
    const cleanedPhone = formData.phone.replace(/[\s()-]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 7 || !/^[+0-9]+$/.test(cleanedPhone)) {
      errors.phone = 'Please enter a valid contact phone number.';
    }
    if (!formData.carMakeModel.trim()) {
      errors.carMakeModel = 'Please enter your vehicle make and model.';
    }
    if (!formData.preferredDate) {
      errors.preferredDate = 'Please choose a preferred date.';
    }
    if (!formData.areaPostcode.trim()) {
      errors.areaPostcode = 'Please enter your town or postcode.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Format the DM Booking Message
  const buildBookingMessage = () => {
    const lines = [
      `Hi ${SITE_CONFIG.business.name}, I'd like to request a booking quote:`,
      ``,
      `• Name: ${formData.fullName.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Vehicle: ${formData.carMakeModel.trim()}`,
      `• Service: ${formData.service}`,
      `• Preferred Date: ${formData.preferredDate}`,
      `• Preferred Time: ${formData.preferredTime}`,
      `• Area / Postcode: ${formData.areaPostcode.trim()}`,
    ];

    if (formData.notes.trim()) {
      lines.push(`• Additional Notes: ${formData.notes.trim()}`);
    }

    lines.push(``, `Please let me know availability and a quote. Thank you!`);
    return lines.join('\n');
  };

  // Handle Form Submit
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateBookingForm()) {
      setIsSubmitted(true);
    }
  };

  // Copy Booking Message to Clipboard
  const handleCopyMessage = async () => {
    const msg = buildBookingMessage();
    try {
      await navigator.clipboard.writeText(msg);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    } catch {
      // Fallback copy method
      const textArea = document.createElement('textarea');
      textArea.value = msg;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    }
  };

  const formattedBookingMessage = buildBookingMessage();
  const whatsappBookingUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    formattedBookingMessage
  )}`;
  const directWhatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${SITE_CONFIG.business.name}, I'd like to enquire about booking a valet / detail.`
  )}`;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'book', label: 'Book' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white/20 selection:text-white">
      {/* Subtle Desktop Cursor Spotlight (GPU-accelerated, zero layout impact) */}
      <div
        ref={cursorGlowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[440px] h-[440px] rounded-full opacity-25 hidden lg:block z-10 transition-transform duration-75 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(224,242,254,0.10) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)',
        }}
      />

      {/* ====================================================================
          1. STICKY NAVBAR (3-Zone Top Bar Contract)
      ==================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/90 to-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark with SVG Car Silhouette */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-sky-200 rounded-lg"
            aria-label="ASF Car Detailing and Valeting Home"
          >
            <LogoCarSVG className="w-14 h-5 sm:w-16 sm:h-6 transition-transform duration-200 group-hover:scale-105" />
            <span className="font-display italic font-black text-2xl sm:text-3xl tracking-wider text-chrome pr-1">
              {SITE_CONFIG.business.shortName}
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-200 rounded ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action ("Book Now" Chrome Button) & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('book')}
              className="btn-chrome shine-sweep px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-200"
            >
              Book Now
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2.5 rounded-lg bg-zinc-900/90 border border-white/15 text-zinc-200 hover:text-white hover:border-white/30 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-200"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-In Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="md:hidden bg-zinc-950/98 backdrop-blur-2xl border-b border-white/15 px-6 pt-4 pb-6"
            >
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400" />
                    </a>
                  );
                })}
              </nav>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  {SITE_CONFIG.business.area}
                </span>
                <span>DM to Book</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ====================================================================
            2. LANDING / HERO SECTION
        ==================================================================== */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-black"
        >
          {/* Showroom Spotlight & Sweeping Light-Streak Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Top-down showroom cone spotlight */}
            <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[550px] rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255,255,255,0.22) 0%, rgba(186,230,253,0.08) 40%, rgba(0,0,0,0) 75%)',
              }}
            />
            {/* Animated diagonal paint reflection streak */}
            <div
              className="animate-streak absolute top-1/4 -left-1/4 w-[140%] h-32 blur-2xl"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 45%, rgba(224,242,254,0.18) 50%, rgba(255,255,255,0.10) 55%, transparent 100%)',
              }}
            />
            {/* Fine showroom studio grid lines at floor level */}
            <div
              className="absolute inset-x-0 bottom-0 h-64 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to top, rgba(255,255,255,0.07) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
                maskImage: 'linear-gradient(to top, black 10%, transparent 90%)',
                WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent 90%)',
              }}
            />
          </div>

          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-4 pb-8 text-center">
            {/* Location Indicator (Unboxed clean metadata with pin icon) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-zinc-300 mb-4"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              <span>{SITE_CONFIG.business.area}</span>
            </motion.div>

            {/* Animated Line-Art Sports Car Silhouette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative mx-auto max-w-2xl -mb-2 sm:-mb-5 group cursor-pointer"
              onClick={() => setHeroCarReplay((prev) => prev + 1)}
              title="Click to replay showroom line animation"
            >
              <HeroSportsCarSVG replayKey={heroCarReplay} />
            </motion.div>

            {/* Huge Chrome-Gradient "ASF" Headline + Wide-Spaced Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <h1 className="flex flex-col items-center justify-center">
                <span className="font-display italic font-black text-6xl sm:text-8xl md:text-9xl tracking-wider text-chrome leading-none select-none pr-3">
                  {SITE_CONFIG.business.shortName}
                </span>
                <span className="mt-3 sm:mt-4 font-display font-bold text-xs sm:text-base md:text-lg tracking-[0.34em] sm:tracking-[0.46em] text-zinc-200 uppercase">
                  {SITE_CONFIG.business.subtitle}
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed [text-wrap:balance]"
            >
              {SITE_CONFIG.business.tagline}{' '}
              <span className="text-zinc-600 px-1.5" aria-hidden="true">
                |
              </span>{' '}
              <span className="text-white font-medium">
                {SITE_CONFIG.business.positioning}
              </span>
            </motion.p>

            {/* Hero Primary & Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToSection('book')}
                className="w-full sm:w-auto btn-chrome shine-sweep px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-200"
              >
                <span>Book Your Valet</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto shine-sweep px-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase text-white bg-zinc-950/80 border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-200"
              >
                View Services
              </button>
            </motion.div>
          </div>

          {/* Bottom Trust Strip & Scroll Indicator */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
              {/* Unboxed Trust Strip with bullet separators */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 tracking-wider uppercase text-[11px] sm:text-xs text-zinc-300">
                {SITE_CONFIG.business.trustStrip.map((item, idx) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {idx < SITE_CONFIG.business.trustStrip.length - 1 && (
                      <span className="text-zinc-600" aria-hidden="true">
                        •
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Scroll Down Indicator */}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
              >
                <span>Explore Services</span>
                <ChevronDown className="w-4 h-4 animate-bounce text-zinc-300" />
              </a>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2b. SERVICES SECTION (4 Glassmorphism Cards with Pre-Select Booking)
        ==================================================================== */}
        <section
          id="services"
          className="relative py-24 sm:py-32 bg-[#070708] border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
                Bespoke Vehicle Care · North Lanarkshire
              </p>
              <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl tracking-wide text-chrome [text-wrap:balance]">
                Precision Detailing &amp; Valeting Services
              </h2>
              <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
                Every vehicle arrives in a different condition. Select a core service
                below to request a tailored quote via DM based on your car&apos;s size
                and requirements.
              </p>
            </motion.div>

            {/* 4 Glassmorphism Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {SITE_CONFIG.services.map((service, index) => (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-panel glass-panel-hover shine-sweep rounded-2xl p-7 sm:p-9 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Editorial Number + Custom Inline SVG Icon */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <span className="font-display italic text-xs tracking-[0.25em] text-zinc-400 block mb-1">
                          {service.index}. SERVICE PACKAGE
                        </span>
                        <h3 className="font-display italic font-bold text-2xl sm:text-3xl text-white group-hover:text-sky-100 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 group-hover:border-sky-200/40 transition-colors shrink-0">
                        <ServiceIconSVG serviceId={service.id} />
                      </div>
                    </div>

                    {/* Unboxed Quote Metadata */}
                    <p className="text-xs uppercase tracking-[0.18em] text-sky-200/90 mb-4">
                      {service.quoteLabel}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Included Highlights */}
                    <ul className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm text-zinc-300"
                        >
                          <Check className="w-4 h-4 text-zinc-200 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button: Scrolls to #book and pre-selects this service */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleSelectServiceAndBook(service.id)}
                      className="w-full py-3.5 px-5 rounded-xl bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/20 hover:border-white font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <span>Book this service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. ABOUT SECTION (Split Layout + Paint Reflection / Photo Slot + Process)
        ==================================================================== */}
        <section
          id="about"
          className="relative py-24 sm:py-32 bg-black border-t border-white/10 overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Split Layout: Story Left, Stylised Paint Reflection / Work Photo Placeholder Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
                  About {SITE_CONFIG.business.shortName} · Interior &amp; Exterior Specialists
                </p>
                <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl tracking-wide text-chrome mb-6 [text-wrap:balance]">
                  {SITE_CONFIG.about.headline}
                </h2>

                <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
                  {SITE_CONFIG.about.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => scrollToSection('book')}
                    className="btn-chrome shine-sweep px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Serving {SITE_CONFIG.business.area}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Stylised Showroom Paint-Reflection & Work Photo Placeholder Panel */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="lg:col-span-6"
              >
                <div className="glass-panel shine-sweep rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/20">
                  {/* Top Chrome Bar Header */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10 text-xs text-zinc-400">
                    <span className="uppercase tracking-[0.22em] text-zinc-200 font-medium">
                      Showroom Finish Showcase
                    </span>
                    <span className="text-zinc-400">
                      {SITE_CONFIG.business.shortName} Detailing Studio
                    </span>
                  </div>

                  {/* Styled Placeholder / Preview Container */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-white/15 flex flex-col items-center justify-center text-center p-6 group">
                    {/* Paint-reflection light beams */}
                    <div
                      className="pointer-events-none absolute -inset-full rotate-12 opacity-30 transition-transform duration-1000 group-hover:translate-x-12"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent 35%, rgba(255,255,255,0.16) 48%, rgba(186,230,253,0.22) 50%, rgba(255,255,255,0.12) 52%, transparent 65%)',
                      }}
                      aria-hidden="true"
                    />

                    {customWorkPhoto ? (
                      <>
                        <img
                          src={customWorkPhoto}
                          alt="Uploaded detailing work preview"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                        <div className="relative z-10 mt-auto w-full flex items-center justify-between gap-2 pt-4">
                          <span className="text-xs uppercase tracking-[0.2em] text-white font-medium">
                            Work Photo Preview
                          </span>
                          <button
                            type="button"
                            onClick={() => setCustomWorkPhoto(null)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-white/25 text-xs text-zinc-200 hover:text-white cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reset Placeholder</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="relative z-10 flex flex-col items-center max-w-sm">
                        <LogoCarSVG className="w-28 h-10 mb-4 opacity-90" />
                        <p className="font-display italic font-bold text-lg sm:text-xl text-chrome tracking-wide">
                          Add your work photo here
                        </p>
                        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          Replace this placeholder panel with your favourite before &amp;
                          after gloss shot, or click below to preview a photo from your
                          device right now.
                        </p>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleWorkPhotoUpload}
                          className="hidden"
                          aria-label="Preview a work photo"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.07] hover:bg-white/15 border border-white/20 text-xs font-medium uppercase tracking-widest text-zinc-200 transition-colors cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Test Photo Preview</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Bottom Caption Strip */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
                    <span>Mirror-Finish Gloss &amp; Cabin Restoration</span>
                    <span className="text-zinc-300">North Lanarkshire</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SITE_CONFIG.about.highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="glass-panel glass-panel-hover rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center mb-4 text-sky-200">
                    {idx === 0 && <Sparkles className="w-5 h-5" />}
                    {idx === 1 && <Car className="w-5 h-5" />}
                    {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 3 && <MapPin className="w-5 h-5" />}
                  </div>
                  <h3 className="font-display italic font-bold text-base sm:text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* "Our Process" Animated Timeline Row: Inspect → Clean → Detail → Finish */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="mt-20 pt-16 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">
                    Showroom Methodology
                  </p>
                  <h3 className="font-display italic font-bold text-2xl sm:text-3xl text-chrome">
                    Our 4-Stage Detailing Process
                  </h3>
                </div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400">
                  Inspect → Clean → Detail → Finish
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {SITE_CONFIG.about.process.map((proc, index) => (
                  <div
                    key={proc.step}
                    className="relative glass-panel rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display italic font-black text-2xl text-chrome">
                        {proc.step}
                      </span>
                      {index < SITE_CONFIG.about.process.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-zinc-500 hidden lg:block" />
                      )}
                    </div>
                    <h4 className="font-display italic font-bold text-lg text-white mb-2">
                      {proc.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ====================================================================
            4. BOOKING SECTION (Lightweight DM Request Builder — No Backend)
        ==================================================================== */}
        <section
          id="book"
          className="relative py-24 sm:py-32 bg-[#070708] border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
                Fast Mobile-Friendly Booking
              </p>
              <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl tracking-wide text-chrome [text-wrap:balance]">
                Book Your Valet or Detail
              </h2>
              <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
                Fill in your vehicle details below to generate a ready-to-send booking
                request for WhatsApp or Instagram DM.{' '}
                <span className="text-white font-medium">
                  {SITE_CONFIG.business.bookingNote}
                </span>
              </p>
            </motion.div>

            {/* Glassmorphism Form / Confirmation Card */}
            <div
              className={`glass-panel rounded-2xl p-6 sm:p-10 transition-all duration-300 ${
                serviceHighlightFlash
                  ? 'border-sky-300/80 shadow-[0_0_35px_rgba(186,230,253,0.25)]'
                  : 'border-white/15'
              }`}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleBookingSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                        >
                          Full Name <span className="text-sky-300">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="fullName"
                            type="text"
                            placeholder="e.g. Callum Reid"
                            value={formData.fullName}
                            onChange={(e) => {
                              setFormData({ ...formData, fullName: e.target.value });
                              if (formErrors.fullName) {
                                setFormErrors({ ...formErrors, fullName: '' });
                              }
                            }}
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/70 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-200 transition-colors"
                          />
                        </div>
                        {formErrors.fullName && (
                          <p className="mt-1.5 text-xs text-rose-400">
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                        >
                          Phone Number <span className="text-sky-300">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="phone"
                            type="tel"
                            placeholder="e.g. 07700 900123"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (formErrors.phone) {
                                setFormErrors({ ...formErrors, phone: '' });
                              }
                            }}
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/70 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-200 transition-colors"
                          />
                        </div>
                        {formErrors.phone && (
                          <p className="mt-1.5 text-xs text-rose-400">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Car Make & Model */}
                      <div>
                        <label
                          htmlFor="carMakeModel"
                          className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                        >
                          Car Make &amp; Model <span className="text-sky-300">*</span>
                        </label>
                        <div className="relative">
                          <Car className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="carMakeModel"
                            type="text"
                            placeholder="e.g. Audi RS3 / BMW M3 / Range Rover"
                            value={formData.carMakeModel}
                            onChange={(e) => {
                              setFormData({ ...formData, carMakeModel: e.target.value });
                              if (formErrors.carMakeModel) {
                                setFormErrors({ ...formErrors, carMakeModel: '' });
                              }
                            }}
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/70 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-200 transition-colors"
                          />
                        </div>
                        {formErrors.carMakeModel && (
                          <p className="mt-1.5 text-xs text-rose-400">
                            {formErrors.carMakeModel}
                          </p>
                        )}
                      </div>

                      {/* Service Dropdown */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                        >
                          Select Service <span className="text-sky-300">*</span>
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-black/90 border border-white/15 text-white text-sm focus:outline-none focus:border-sky-200 transition-colors cursor-pointer"
                        >
                          {SITE_CONFIG.services.map((s) => (
                            <option key={s.id} value={s.id} className="bg-zinc-950 text-white">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                        >
                          Preferred Date <span className="text-sky-300">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="preferredDate"
                            type="date"
                            min={todayStr}
                            value={formData.preferredDate}
                            onChange={(e) => {
                              setFormData({ ...formData, preferredDate: e.target.value });
                              if (formErrors.preferredDate) {
                                setFormErrors({ ...formErrors, preferredDate: '' });
                              }
                            }}
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/70 border border-white/15 text-white text-sm focus:outline-none focus:border-sky-200 transition-colors [color-scheme:dark]"
                          />
                        </div>
                        {formErrors.preferredDate && (
                          <p className="mt-1.5 text-xs text-rose-400">
                            {formErrors.preferredDate}
                          </p>
                        )}
                      </div>

                      {/* Preferred Time (Morning / Afternoon / Evening) */}
                      <div>
                        <label className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium">
                          Preferred Time <span className="text-sky-300">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-black/80 border border-white/15">
                          {(['Morning', 'Afternoon', 'Evening'] as const).map((slot) => {
                            const active = formData.preferredTime === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() =>
                                  setFormData({ ...formData, preferredTime: slot })
                                }
                                className={`py-2.5 px-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                                  active
                                    ? 'bg-white text-black shadow-sm'
                                    : 'text-zinc-400 hover:text-white'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Area / Postcode */}
                    <div>
                      <label
                        htmlFor="areaPostcode"
                        className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                      >
                        Area / Postcode <span className="text-sky-300">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="areaPostcode"
                          type="text"
                          placeholder="e.g. Motherwell, ML1 / Coatbridge / Cumbernauld"
                          value={formData.areaPostcode}
                          onChange={(e) => {
                            setFormData({ ...formData, areaPostcode: e.target.value });
                            if (formErrors.areaPostcode) {
                              setFormErrors({ ...formErrors, areaPostcode: '' });
                            }
                          }}
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/70 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-200 transition-colors"
                        />
                      </div>
                      {formErrors.areaPostcode && (
                        <p className="mt-1.5 text-xs text-rose-400">
                          {formErrors.areaPostcode}
                        </p>
                      )}
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-xs uppercase tracking-[0.18em] text-zinc-300 mb-2 font-medium"
                      >
                        Additional Notes (Optional)
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
                        <textarea
                          id="notes"
                          rows={3}
                          placeholder="Any specific areas of concern, pet hair, spillages, or questions?"
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/70 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-sky-200 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit / Prepare DM Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-zinc-400">
                        <span className="text-zinc-200 font-medium">Note:</span>{' '}
                        {SITE_CONFIG.business.bookingNote}
                      </p>

                      <button
                        type="submit"
                        className="w-full sm:w-auto btn-chrome shine-sweep px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                      >
                        <span>Prepare Booking Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* ============================================================
                     BOOKING SUCCESS STATE (Summary Card + WhatsApp / Instagram DM)
                  ============================================================ */
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.98, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                      <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-sky-200 block mb-1">
                          Booking Request Ready
                        </span>
                        <h3 className="font-display italic font-bold text-2xl text-white">
                          Send Your Request to Confirm
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="self-start sm:self-auto text-xs uppercase tracking-widest text-zinc-300 hover:text-white underline underline-offset-4 cursor-pointer"
                      >
                        Edit Details
                      </button>
                    </div>

                    {/* Clean Summary Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/60 rounded-xl p-5 border border-white/10 text-sm">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-zinc-400 block">
                          Client
                        </span>
                        <span className="text-white font-medium">
                          {formData.fullName} · {formData.phone}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-zinc-400 block">
                          Vehicle
                        </span>
                        <span className="text-white font-medium">
                          {formData.carMakeModel}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-zinc-400 block">
                          Selected Service
                        </span>
                        <span className="text-sky-200 font-semibold">
                          {formData.service}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-zinc-400 block">
                          Preferred Slot &amp; Location
                        </span>
                        <span className="text-white font-medium">
                          {formData.preferredDate} ({formData.preferredTime}) ·{' '}
                          {formData.areaPostcode}
                        </span>
                      </div>
                    </div>

                    {/* Formatted Message Preview */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                        <span className="uppercase tracking-wider">
                          Pre-filled DM Message
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white cursor-pointer"
                        >
                          {copiedSuccess ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300 font-medium">
                                Copied to clipboard!
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy text</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="w-full p-4 rounded-xl bg-black/90 border border-white/10 text-xs sm:text-sm text-zinc-300 font-sans whitespace-pre-wrap leading-relaxed">
                        {formattedBookingMessage}
                      </pre>
                    </div>

                    {/* Primary DM Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* 1. Send via WhatsApp */}
                      <a
                        href={whatsappBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-chrome shine-sweep py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 text-center"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" />
                        <span>Send via WhatsApp</span>
                      </a>

                      {/* 2. Copy Message & DM on Instagram */}
                      <a
                        href={SITE_CONFIG.contact.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          handleCopyMessage();
                        }}
                        className="shine-sweep py-4 px-6 rounded-xl bg-white/[0.08] hover:bg-white/15 border border-white/25 hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 text-center transition-all"
                      >
                        <Instagram className="w-4 h-4 shrink-0" />
                        <span>
                          {copiedSuccess
                            ? 'Copied! Opening Instagram...'
                            : 'Copy message & DM on Instagram'}
                        </span>
                      </a>
                    </div>

                    <p className="text-center text-xs text-zinc-400 pt-1">
                      {SITE_CONFIG.business.bookingNote}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. CONTACT SECTION (Tappable Cards + North Lanarkshire Area Panel + CTA)
        ==================================================================== */}
        <section
          id="contact"
          className="relative py-24 sm:py-32 bg-black border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
                Direct Enquiries &amp; Quotes
              </p>
              <h2 className="font-display italic font-extrabold text-3xl sm:text-5xl tracking-wide text-chrome">
                Get In Touch
              </h2>
              <p className="mt-4 text-zinc-300 text-base sm:text-lg">
                Have a question about a Full Valet, Deep Clean, or bespoke detailing
                package? Reach out directly by DM, WhatsApp, phone, or email.
              </p>
            </motion.div>

            {/* 5 Tappable Glass Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
              {/* 1. Instagram / Facebook (DM to book) */}
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover shine-sweep rounded-xl p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:border-sky-200/50">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Instagram / Facebook
                  </span>
                  <p className="font-semibold text-white text-sm break-all">
                    {SITE_CONFIG.contact.instagramHandle}
                  </p>
                  <p className="text-xs text-sky-200 mt-1">DM to book →</p>
                </div>
              </a>

              {/* 2. WhatsApp */}
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover shine-sweep rounded-xl p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:border-sky-200/50">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    WhatsApp
                  </span>
                  <p className="font-semibold text-white text-sm">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </p>
                  <p className="text-xs text-sky-200 mt-1">Message on WhatsApp →</p>
                </div>
              </a>

              {/* 3. Phone */}
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="glass-panel glass-panel-hover shine-sweep rounded-xl p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:border-sky-200/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Phone
                  </span>
                  <p className="font-semibold text-white text-sm">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">Tap to call directly</p>
                </div>
              </a>

              {/* 4. Email */}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="glass-panel glass-panel-hover shine-sweep rounded-xl p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:border-sky-200/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Email
                  </span>
                  <p className="font-semibold text-white text-sm break-all">
                    {SITE_CONFIG.contact.email}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">Send an enquiry</p>
                </div>
              </a>

              {/* 5. Service Area */}
              <a
                href="#service-area-panel"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('service-area-panel')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glass-panel glass-panel-hover shine-sweep rounded-xl p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:border-sky-200/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Service Area
                  </span>
                  <p className="font-semibold text-white text-sm">
                    {SITE_CONFIG.business.area}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">View local coverage</p>
                </div>
              </a>
            </div>

            {/* Stylised Service-Area Graphic Panel + Opening Hours Placeholder */}
            <div
              id="service-area-panel"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
            >
              {/* Stylised North Lanarkshire Vector Coverage Panel */}
              <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-1">
                      Coverage Map
                    </span>
                    <h3 className="font-display italic font-bold text-xl sm:text-2xl text-white">
                      {SITE_CONFIG.business.area}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-200">
                    <span className="w-2 h-2 rounded-full bg-sky-300 animate-ping" />
                    Active Across Lanarkshire
                  </span>
                </div>

                {/* Stylised SVG Radar / Coverage Graphic with Location Pin */}
                <div className="relative rounded-xl bg-black/80 border border-white/10 p-6 overflow-hidden">
                  <svg
                    viewBox="0 0 600 220"
                    fill="none"
                    className="w-full h-44 sm:h-48"
                    role="img"
                    aria-label="Stylised coverage graphic for North Lanarkshire and surrounding areas"
                  >
                    {/* Concentric coverage rings */}
                    <circle
                      cx="300"
                      cy="110"
                      r="95"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="300"
                      cy="110"
                      r="60"
                      stroke="rgba(255,255,255,0.14)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="300"
                      cy="110"
                      r="28"
                      stroke="rgba(186,230,253,0.3)"
                      strokeWidth="1.5"
                    />
                    {/* Connecting highway vectors (M8 / M74 / M80 stylized lines) */}
                    <path
                      d="M40 90 Q 180 110, 300 110 T 560 85"
                      stroke="rgba(255,255,255,0.16)"
                      strokeWidth="2"
                    />
                    <path
                      d="M210 20 Q 270 75, 300 110 T 390 205"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1.5"
                    />
                    {/* Surrounding Town Nodes */}
                    <circle cx="195" cy="70" r="3.5" fill="#9CA3AF" />
                    <text x="135" y="65" fill="#D4D4D8" fontSize="11" letterSpacing="1">
                      CUMBERNAULD
                    </text>

                    <circle cx="235" cy="105" r="3.5" fill="#E5E7EB" />
                    <text x="150" y="122" fill="#D4D4D8" fontSize="11" letterSpacing="1">
                      COATBRIDGE
                    </text>

                    <circle cx="365" cy="88" r="3.5" fill="#E5E7EB" />
                    <text x="380" y="92" fill="#D4D4D8" fontSize="11" letterSpacing="1">
                      AIRDRIE
                    </text>

                    <circle cx="265" cy="145" r="3.5" fill="#E5E7EB" />
                    <text x="190" y="162" fill="#D4D4D8" fontSize="11" letterSpacing="1">
                      BELLSHILL
                    </text>

                    <circle cx="345" cy="152" r="3.5" fill="#E5E7EB" />
                    <text x="360" y="156" fill="#D4D4D8" fontSize="11" letterSpacing="1">
                      MOTHERWELL &amp; WISHAW
                    </text>

                    {/* Center Pin Marker */}
                    <circle cx="300" cy="110" r="7" fill="#BAE6FD" />
                    <circle
                      cx="300"
                      cy="110"
                      r="14"
                      stroke="#BAE6FD"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                  </svg>
                </div>

                {/* Town List Unboxed Separators */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-300">
                  {SITE_CONFIG.serviceAreas.map((town, i) => (
                    <React.Fragment key={town}>
                      <span>{town}</span>
                      {i < SITE_CONFIG.serviceAreas.length - 1 && (
                        <span className="text-zinc-600" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Opening Hours Card (Editable Placeholder) */}
              <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-zinc-400 mb-2">
                    <Clock className="w-4 h-4 text-sky-200" />
                    <span>Availability</span>
                  </div>
                  <h3 className="font-display italic font-bold text-xl sm:text-2xl text-white mb-6">
                    Opening Hours
                  </h3>

                  <div className="space-y-4 border-t border-white/10 pt-5">
                    {SITE_CONFIG.openingHours.map((slot) => (
                      <div
                        key={slot.days}
                        className="flex items-center justify-between gap-4 pb-3 border-b border-white/5 text-sm"
                      >
                        <span className="text-zinc-300">{slot.days}</span>
                        <span className="text-white font-medium tabular-nums text-right">
                          {slot.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>{SITE_CONFIG.business.bookingNote}</span>
                  <a
                    href={SITE_CONFIG.contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bold Final Call-To-Action Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="glass-panel shine-sweep rounded-2xl p-8 sm:p-12 border border-white/25 relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-200 mb-2">
                  {SITE_CONFIG.business.name}
                </p>
                <h3 className="font-display italic font-black text-2xl sm:text-4xl text-chrome [text-wrap:balance]">
                  Ready For A Showroom Finish? DM To Book.
                </h3>
                <p className="mt-3 text-zinc-300 text-sm sm:text-base">
                  Lock in your Full Valet, Deep Clean, or Interior &amp; Exterior
                  Detail across North Lanarkshire.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scrollToSection('book')}
                  className="w-full sm:w-auto btn-chrome shine-sweep px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/15 border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Instagram className="w-4 h-4" />
                  <span>DM on Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          6. QUIET LUXURY FOOTER
      ==================================================================== */}
      <footer className="bg-[#040405] border-t border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            {/* Brand Lockup */}
            <div>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="inline-flex items-center gap-3"
              >
                <LogoCarSVG className="w-16 h-6" />
                <span className="font-display italic font-black text-2xl tracking-wider text-chrome pr-1">
                  {SITE_CONFIG.business.shortName}
                </span>
              </a>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-400">
                {SITE_CONFIG.business.tagline} · {SITE_CONFIG.business.positioning}
              </p>
            </div>

            {/* Quick Links */}
            <nav
              className="flex flex-wrap items-center gap-6 text-sm text-zinc-400"
              aria-label="Footer Navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright & Area */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.business.name}. All rights
              reserved.
            </p>
            <p>{SITE_CONFIG.business.area}</p>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          7. FLOATING WHATSAPP / DM ACTION BUTTON (Bottom-Right)
      ==================================================================== */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="#book"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('book');
          }}
          aria-label="Book or DM via WhatsApp and Instagram"
          className="btn-chrome shine-sweep px-4 py-3 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline">DM to Book</span>
        </a>
      </div>
    </div>
  );
}
