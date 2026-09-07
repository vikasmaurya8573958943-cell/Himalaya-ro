import { CheckCircle2 } from 'lucide-react';
import roTechnicianImage from '../../assets/images/ro_technician_1788754590535.jpg';

export default function About() {
  const highlights = [
    "Professional RO Service",
    "RO Repair",
    "RO Installation",
    "Filter Replacement",
    "RO Parts",
    "New RO Purifiers",
    "Regular Maintenance",
    "All Major Brands"
  ];

  const focusPoints = [
    "Quality service",
    "Transparent communication",
    "Reliable solutions",
    "Customer satisfaction",
    "Professional workmanship",
    "All major RO brands"
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Highlight Section */}
        <div className="bg-white/10 rounded-3xl p-8 md:p-12 text-center mb-24 shadow-2xl border border-white/20 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Reliable RO Water Purifier Solutions
          </h2>
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto mb-8">
            Himalaya RO provides professional, quick, and reliable RO water purifier solutions for homes, offices, and businesses in Sector 46, Gurugram.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {highlights.map((item, idx) => (
              <span key={idx} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-white/20 backdrop-blur-sm">
                {item}
              </span>
            ))}
          </div>
          
          <a href="#booking" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-xl text-sm uppercase tracking-wider">
            Book Your RO Service Today
          </a>
        </div>

        {/* About Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-[2rem] transform translate-x-4 translate-y-4 border border-white/10 backdrop-blur-sm"></div>
            <img 
              src={roTechnicianImage} 
              alt="Himalaya RO Technician Servicing Water Purifier" 
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl object-cover aspect-[4/3] border border-white/20"
            />
            
            {/* Decorative Drop */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl z-20 border border-white/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                10+
              </div>
              <div className="text-sm font-bold text-white leading-tight">
                Years of <br/> Experience
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-[10px] mb-2">
              <span className="w-8 h-0.5 bg-green-400"></span>
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              About Himalaya RO
            </h2>
            <p className="text-blue-100/80 text-lg mb-6 leading-relaxed">
              Himalaya RO provides A-to-Z RO water purifier services in Sector 46, Gurugram, and nearby areas. We are dedicated to ensuring that your family or employees always have access to clean, safe, and healthy drinking water.
            </p>
            <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
              Our experienced technicians handle everything from new installations to complex repairs and routine filter changes. We focus on delivering top-tier service without hassle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
                  <span className="text-white font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
