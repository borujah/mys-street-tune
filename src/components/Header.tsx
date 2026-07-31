import React, { useState } from 'react';
import { WORKSHOP_INFO } from '../data';

interface HeaderProps {
  onOpenExporter?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExporter }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(WORKSHOP_INFO.defaultWhatsAppMessage)}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-xs border-b-2 border-red-600 transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Brand Logo with Interlocking STREET & TUNE Typography */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex flex-col font-extrabold tracking-tight leading-none text-left select-none">
            {/* Top Row: STREET */}
            <div className="flex items-center text-xl md:text-2xl font-black">
              <span className="text-red-600 font-black">S</span>
              <span className="text-slate-900 tracking-wider">TREET</span>
            </div>
            
            {/* Bottom Row: TUNE - Vertically aligned under the 'T' of STREET with a bridging red anchor */}
            <div className="flex items-center text-xl md:text-2xl font-black -mt-1.5 pl-[0.95rem]">
              <span className="text-red-600 font-black relative">
                T
                {/* Visual Interlocking Connector Bridge */}
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-[3px] h-4 bg-red-600 rounded-full opacity-90 shadow-xs"></span>
              </span>
              <span className="text-slate-900 tracking-wider">UNE</span>
            </div>
          </div>

          <div className="hidden sm:block h-9 w-[2px] bg-red-600/80 mx-1"></div>
          
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-xs font-black tracking-[0.2em] text-slate-900 uppercase">MYS WORKSHOP</span>
            <span className="text-[10px] font-extrabold text-red-600 tracking-wider uppercase">SUNGAI MERAB • KAJANG</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#services" className="font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-red-600 transition-colors">Services</a>
          <a href="#location" className="font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-red-600 transition-colors">Location & Map</a>
          <a href="#faq" className="font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-red-600 transition-colors">FAQ & Q&A</a>

          <a 
            href={`tel:${WORKSHOP_INFO.intlPhone}`} 
            className="bg-red-600 text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-900 active:scale-95 transition-all shadow-xs flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Call {WORKSHOP_INFO.phoneDisplay}
          </a>
        </nav>

        {/* Mobile Menu Trigger & Quick Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
            title="WhatsApp MYS Street Tune"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
          </a>

          <button 
            className="p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          <a 
            href="#services" 
            className="font-bold text-gray-800 py-2 border-b border-gray-100 hover:text-red-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Services
          </a>
          <a 
            href="#location" 
            className="font-bold text-gray-800 py-2 border-b border-gray-100 hover:text-red-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Workshop Location & Operating Hours
          </a>
          <a 
            href="#faq" 
            className="font-bold text-gray-800 py-2 border-b border-gray-100 hover:text-red-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Frequently Asked Questions (FAQ)
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-emerald-600 text-white py-3 font-bold rounded-lg hover:bg-emerald-700 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              Book via WhatsApp ({WORKSHOP_INFO.phoneDisplay})
            </a>
            
            <a 
              href={`tel:${WORKSHOP_INFO.intlPhone}`}
              className="w-full text-center bg-red-600 text-white py-3 font-bold rounded-lg hover:bg-gray-900 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">call</span>
              Direct Call Workshop
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
