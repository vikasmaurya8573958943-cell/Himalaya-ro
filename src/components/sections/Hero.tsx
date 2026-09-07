import { Phone, MessageCircle, Wrench, ShieldCheck } from 'lucide-react';
import roHeroImage from '../../assets/images/ro_hero_banner_1788754576549.jpg';

import { Phone, MessageCircle, Wrench, ShieldCheck } from 'lucide-react';
import roHeroImage from '../../assets/images/ro_hero_banner_1788754576549.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={roHeroImage} 
          alt="Premium RO Water Purifier" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021B3D]/90 via-[#0A4D92]/70 to-[#1E90FF]/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="max-w-2xl flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 w-max backdrop-blur-md">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-white">All Major RO Brands • Professional Service • Quick Response</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-2">
            Himalaya RO – <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Pure Water,</span> Healthy Life
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 max-w-lg leading-relaxed mb-4">
            Professional RO Water Purifier Sales, Service & Repair in Sector 46, Gurugram.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="tel:+918601177569"
              className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#021B3D] px-8 py-4 rounded-2xl font-bold flex flex-col items-center shadow-2xl transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="text-xs opacity-60 uppercase">Call Now</span>
              </div>
              <span className="text-lg">8601177569</span>
            </a>
            
            <a 
              href="https://wa.me/918601177569?text=Hello%20Himalaya%20RO,%20I%20want%20to%20book%20an%20RO%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-2xl font-bold flex flex-col items-center shadow-2xl transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs opacity-80 uppercase">WhatsApp</span>
              </div>
              <span className="text-lg">Book Now</span>
            </a>
            
            <a 
              href="#booking"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl"
            >
              <Wrench className="h-5 w-5" />
              Book RO Service
            </a>
          </div>

          <div className="flex items-center gap-4 text-white/80 text-sm md:text-base mt-2 py-4 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Call Us Directly:</span>
              <span className="text-[10px] uppercase opacity-60 tracking-widest text-white">8601177569 | 8808682180</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
