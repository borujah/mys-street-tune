import React, { useState } from 'react';
import { Header } from './components/Header';
import { WORKSHOP_INFO, SERVICES, FAQS, AREAS_SERVED } from './data';

export default function App() {
  const [faqFilter, setFaqFilter] = useState<string>('all');

  const defaultWhatsappUrl = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(WORKSHOP_INFO.defaultWhatsAppMessage)}`;

  const filteredFaqs = faqFilter === 'all' 
    ? FAQS 
    : FAQS.filter(f => f.category === faqFilter);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col">
      
      {/* Header */}
      <Header />

      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 px-4 md:px-8 bg-slate-50/50 overflow-hidden border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-red-600/10 border-l-4 border-red-600 text-red-600 text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Professional Mechanic Kajang & Bangi
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
                Your Trusted <span className="text-red-600">Auto Workshop</span> in Sungai Merab.
              </h1>

              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                Specialized workshop for engine oil change, OEM filter replacement, brake pads, battery replacement, and precision troubleshooting. Serving <span className="font-bold text-slate-900">Kajang, Bandar Baru Bangi, Putrajaya</span>, and <span className="font-bold text-slate-900">Sungai Merab</span>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-red-600 text-white px-8 py-4 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-900 active:scale-95 transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-xl">chat</span>
                  Book via WhatsApp ({WORKSHOP_INFO.phoneDisplay})
                </a>

                <a
                  href="#location"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-800 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">directions</span>
                  Get Directions & Location
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  <span className="material-symbols-outlined text-amber-500 text-base">star</span>
                  <span>5.0 Rated Workshop</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  <span className="material-symbols-outlined text-red-600 text-base">verified</span>
                  <span>100% Quality Parts</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  <span className="material-symbols-outlined text-emerald-600 text-base">verified_user</span>
                  <span>Transparent Fees</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Banner Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh2__YTKC1D9zkSL5l39vaq8exngd9kdvu1lkNWBLzLtuTWVQgOMh8T3cKQgeLChszu9-dYpDpB4e64LgkAScq5Y53tkLw89Zoyjw6Lq6WlInPCrCSbQGmFHPBIVqGpU5fH1RzTG1U3niwYN8FXE5EGT86SEF6gaP3Gf_v0TBTd1TidshSIkzpFPnS5QLkoAOvxUtrMItbApsGgce7dESc6EWHI2t8Ftc3VW7SJ19XpbVOThg_l7UH"
                  alt="MYS Street Tune Workshop interior - professional car servicing in Sungai Merab Kajang"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-md border-l-4 border-red-600 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-600 font-black text-2xl leading-none">100%</p>
                      <p className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mt-1">Quality Parts & Service Guarantee</p>
                      <p className="text-slate-500 text-xs mt-1">We use only original OEM filters or certified performance components.</p>
                    </div>
                    <span className="material-symbols-outlined text-red-600 text-3xl">build_circle</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TRUST & STATS BAR */}
        <section className="bg-slate-900 text-white py-10 px-4 md:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            <div>
              <div className="text-red-500 font-display text-3xl md:text-4xl font-black mb-1">{WORKSHOP_INFO.googleRating} ★</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Google Rating ({WORKSHOP_INFO.reviewCount})</div>
            </div>
            <div>
              <div className="text-red-500 font-display text-3xl md:text-4xl font-black mb-1">{WORKSHOP_INFO.yearsExp}</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Years Experience</div>
            </div>
            <div>
              <div className="text-red-500 font-display text-3xl md:text-4xl font-black mb-1">Sungai Merab</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Primary Hub (Kajang)</div>
            </div>
            <div>
              <div className="text-red-500 font-display text-3xl md:text-4xl font-black mb-1">Certified</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Expert Mechanics</div>
            </div>
          </div>
        </section>

        {/* PRECISION WORKSHOP SERVICES */}
        <section id="services" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-2">Comprehensive Maintenance</span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-slate-900">Precision Workshop Services</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {SERVICES.map((service) => (
                <div 
                  key={service.id}
                  className="bg-slate-50 p-6 rounded-r-lg border-l-4 border-red-600 border-y border-r border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-red-600 font-extrabold uppercase tracking-wider text-xs flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-lg">{service.icon}</span>
                        <span>{service.title}</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Est. {service.estimatedTime}</span>
                    </div>

                    <p className="text-slate-700 text-xs leading-relaxed mb-4">{service.shortDesc}</p>

                    <ul className="space-y-2 border-t border-slate-200/80 pt-3">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="material-symbols-outlined text-red-600 text-sm shrink-0">check</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Custom Enquiries Card */}
              <div className="bg-slate-900 text-white p-6 rounded-r-lg border-l-4 border-red-600 border-y border-r border-slate-800 flex flex-col justify-between text-center shadow-md">
                <div className="space-y-3 my-auto">
                  <span className="material-symbols-outlined text-4xl text-red-500">build</span>
                  <h3 className="font-display font-extrabold text-lg uppercase tracking-wider">Need Custom Repairs?</h3>
                  <p className="text-slate-300 text-xs max-w-xs mx-auto leading-relaxed">
                    Engine check lights, cooling coil leaks, absorber noise, or custom exhaust tuning—our mechanics are ready to assist.
                  </p>
                </div>
              </div>
            </div>

            {/* Single CTA Button at the bottom of Workshop Services */}
            <div className="text-center bg-slate-50 p-8 rounded-lg border border-slate-200 max-w-3xl mx-auto shadow-xs space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-xl text-slate-900 uppercase tracking-wider mb-1">
                  Ready to Book or Need an Estimate?
                </h3>
                <p className="text-slate-600 text-xs md:text-sm">
                  Send us your car model and required maintenance via WhatsApp for an immediate response.
                </p>
              </div>

              <a 
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-slate-900 text-white px-8 py-4 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                Book Service via WhatsApp ({WORKSHOP_INFO.phoneDisplay})
              </a>
            </div>

          </div>
        </section>

        {/* LOCATION & AREAS SERVED SECTION */}
        <section id="location" className="py-20 px-4 md:px-8 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-2">Location & Coverage</span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-slate-900 mb-4">Visit Our Workshop in Sungai Merab</h2>
                <p className="text-slate-600 text-sm">
                  Conveniently situated along Jalan Merab Luar in Sungai Merab, providing fast access for car owners across Kajang, Bangi, and Putrajaya.
                </p>
              </div>

              <div className="space-y-5 bg-white p-6 rounded-lg border-l-4 border-red-600 border-y border-r border-slate-200 shadow-xs">
                
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-1">Workshop Address</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{WORKSHOP_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-slate-100 pt-4">
                  <div className="w-9 h-9 rounded bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-1">Operating Hours</h4>
                    <p className="text-slate-700 text-sm">{WORKSHOP_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-slate-100 pt-4">
                  <div className="w-9 h-9 rounded bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-1">Direct Hotline & WhatsApp</h4>
                    <p className="text-slate-700 text-sm">
                      <a href={`tel:${WORKSHOP_INFO.intlPhone}`} className="text-red-600 font-bold hover:underline">
                        {WORKSHOP_INFO.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Navigation CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={WORKSHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
                >
                  <span className="material-symbols-outlined text-base">map</span>
                  Open Google Maps
                </a>

                <a
                  href={WORKSHOP_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">navigation</span>
                  Open in Waze
                </a>
              </div>

              {/* Areas Served List */}
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3">Key Areas Served Nearby</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {AREAS_SERVED.map((area, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded border-l-2 border-red-600 border-y border-r border-slate-200">
                      <div className="font-bold text-slate-900">{area.name} ({area.distance})</div>
                      <div className="text-slate-500 mt-0.5">{area.highlights}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Map Preview Container */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-slate-300 shadow-md bg-slate-200 h-[450px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdcoa-6e-27TKZL7fghiB8AhpwwaWQkVUHKiTKcVqb9DAUdgMQrJnKWAnXHShBcWG0_IiZi3-7xDR0HrMXswZb_YF86hBkvDUF9asLbhJ240_zIZRH1s2mxRAwXV4uA5npGlAnbDt0gG0tphaaWMNGsoVLEDNuAd3I9iFsUX3aZ8_8OYUxfVUTjTvmsE8q5zPRsH2qkWyQH9RV2IZqkCwR_qsILHPvGJSRHVPHfLFsD_fguO5w7Dg"
                  alt="MYS Street Tune Workshop Location Map - Sungai Merab Luar Kajang"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded shadow-md border border-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Workshop Open Today (9am - 6pm)</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">MYS Street Tune Workshop</p>
                    <p className="text-xs text-slate-300">Jalan Merab Luar, Sungai Merab, 43000 Kajang</p>
                  </div>
                  <a
                    href={WORKSHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-red-700"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CONVERSATIONAL AI & LOCAL FAQ SECTION */}
        <section id="faq" className="py-20 px-4 md:px-8 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 shadow-xs">
            
            <div className="text-left mb-8 pb-4 border-b border-slate-200">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-1">Parsed by AI Search & Google</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-slate-800">
                Common Questions & Answers
              </h2>
              <p className="text-slate-600 text-xs md:text-sm mt-1">
                Frequently asked questions for car owners in Kajang, Bangi & Putrajaya.
              </p>

              {/* FAQ Category Filter */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                <button
                  onClick={() => setFaqFilter('all')}
                  className={`px-3 py-1.5 rounded transition-all uppercase tracking-wider text-[11px] ${
                    faqFilter === 'all' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All Questions
                </button>
                <button
                  onClick={() => setFaqFilter('location')}
                  className={`px-3 py-1.5 rounded transition-all uppercase tracking-wider text-[11px] ${
                    faqFilter === 'location' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Location & Areas
                </button>
                <button
                  onClick={() => setFaqFilter('services')}
                  className={`px-3 py-1.5 rounded transition-all uppercase tracking-wider text-[11px] ${
                    faqFilter === 'services' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => setFaqFilter('appointment')}
                  className={`px-3 py-1.5 rounded transition-all uppercase tracking-wider text-[11px] ${
                    faqFilter === 'appointment' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Appointments
                </button>
                <button
                  onClick={() => setFaqFilter('timing')}
                  className={`px-3 py-1.5 rounded transition-all uppercase tracking-wider text-[11px] ${
                    faqFilter === 'timing' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Duration
                </button>
              </div>
            </div>

            {/* Pure HTML Details & Summary Accordion for 100% Lightweight GitHub Pages Compatibility */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-slate-200 rounded overflow-hidden transition-all duration-200 open:border-red-600"
                >
                  <summary className="w-full text-left px-5 py-4 flex justify-between items-center cursor-pointer select-none focus:outline-hidden">
                    <span className="font-bold text-slate-800 text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-red-600 transition-transform duration-300 accordion-chevron shrink-0">
                      expand_more
                    </span>
                  </summary>

                  <div className="px-5 pb-5 pt-2 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Quick Contact Prompt */}
            <div className="mt-8 text-center p-5 bg-white rounded border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Have another question about your car?</h4>
              <p className="text-xs text-slate-600 mb-3">Send us a photo or sound recording of your car issue on WhatsApp!</p>
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Ask Mechanic on WhatsApp ({WORKSHOP_INFO.phoneDisplay})
              </a>
            </div>

          </div>
        </section>

        {/* WORKSHOP QUICK AT A GLANCE SUMMARY */}
        <section id="workshop-info" className="py-12 bg-slate-900 text-white border-t border-slate-800 text-xs">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">info</span>
                Workshop At A Glance
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-slate-300">
              <div>
                <strong className="text-white block mb-0.5">Workshop Name:</strong>
                MYS Street Tune Workshop
              </div>
              <div>
                <strong className="text-white block mb-0.5">Location:</strong>
                Jalan Merab Luar, Sungai Merab Luar, 43000 Kajang, Selangor
              </div>
              <div>
                <strong className="text-white block mb-0.5">Core Services:</strong>
                Engine Oil Service, Brakes, Battery, Diagnostics & Aircond
              </div>
              <div>
                <strong className="text-white block mb-0.5">Hotline / WhatsApp:</strong>
                {WORKSHOP_INFO.phoneDisplay}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white py-12 px-4 md:px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex flex-col font-extrabold tracking-tight leading-none text-left select-none">
                <div className="flex items-center text-xl font-black">
                  <span className="text-red-500 font-black">S</span>
                  <span className="text-white tracking-wider">TREET</span>
                </div>
                <div className="flex items-center text-xl font-black -mt-1 pl-[0.8rem]">
                  <span className="text-red-500 font-black relative">
                    T
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-red-500 rounded-full"></span>
                  </span>
                  <span className="text-white tracking-wider">UNE</span>
                </div>
              </div>
              <div className="h-7 w-[2px] bg-red-500/80 mx-1"></div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-black tracking-[0.2em] text-white uppercase">MYS WORKSHOP</span>
                <span className="text-[9px] font-extrabold text-red-400 tracking-wider">SUNGAI MERAB • KAJANG</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Your trusted destination for performance car care and reliable general servicing in the heart of Sungai Merab Luar, Kajang.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider mb-2">Navigation</h5>
            <div><a href="#services" className="text-gray-400 hover:text-white">Workshop Services</a></div>
            <div><a href="#location" className="text-gray-400 hover:text-white">Location & Operating Hours</a></div>
            <div><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider mb-2">Direct Contact</h5>
            <p className="text-gray-400">Phone: <a href={`tel:${WORKSHOP_INFO.intlPhone}`} className="text-white font-bold hover:underline">{WORKSHOP_INFO.phoneDisplay}</a></p>
            <p className="text-gray-400">Address: Lot 1234, Jalan Merab Luar, 43000 Kajang, Selangor</p>
            <p className="text-red-400 font-bold mt-2">Engage Performance.</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} MYS Street Tune Workshop. All rights reserved.</p>
        </div>
      </footer>

      {/* HIGH CONVERSION FLOATING WHATSAPP BUTTON */}
      <a
        href={defaultWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse hover:scale-110 active:scale-95 transition-transform duration-300"
        title="Chat with MYS Street Tune Workshop on WhatsApp"
        aria-label="WhatsApp MYS Street Tune Workshop"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="absolute -top-2 -right-1 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border border-white">
          1
        </span>
      </a>

    </div>
  );
}
