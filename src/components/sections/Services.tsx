import { Wrench, Settings, Droplet, RefreshCw, PenTool, ShieldAlert, BadgeCheck, Power, Wrench as Tool, Drill, CalendarClock, ShoppingBag, Home, Building2, Star } from 'lucide-react';

export default function Services() {
  const serviceList = [
    { id: 1, title: 'RO Installation', desc: 'Professional installation for new RO water purifiers.', icon: Drill },
    { id: 2, title: 'RO Repair', desc: 'Expert diagnosis and repair for all RO problems.', icon: Wrench },
    { id: 3, title: 'RO Servicing', desc: 'Comprehensive cleaning and servicing of RO systems.', icon: Settings },
    { id: 4, title: 'RO Filter Change', desc: 'Timely replacement of sediment and carbon filters.', icon: RefreshCw },
    { id: 5, title: 'RO Membrane Replacement', desc: 'High-quality membrane replacements for pure water.', icon: Droplet },
    { id: 6, title: 'RO Pump Repair/Replacement', desc: 'Fixing or replacing faulty booster pumps.', icon: Power },
    { id: 7, title: 'RO Water Leakage Repair', desc: 'Stopping drips and pipe leaks instantly.', icon: ShieldAlert },
    { id: 8, title: 'RO TDS Problem Solution', desc: 'Adjusting and fixing output TDS levels.', icon: BadgeCheck },
    { id: 9, title: 'RO Purifier Cleaning', desc: 'Deep cleaning of water tank and components.', icon: Droplet },
    { id: 10, title: 'RO Parts Replacement', desc: 'Genuine spare parts replacement service.', icon: Tool },
    { id: 11, title: 'RO Annual Maintenance', desc: 'AMC plans for year-round peace of mind.', icon: CalendarClock },
    { id: 12, title: 'New RO Purifier Sales', desc: 'Latest models of all major RO brands available.', icon: ShoppingBag },
    { id: 13, title: 'Home RO Service', desc: 'Dedicated residential RO services.', icon: Home },
    { id: 14, title: 'Office RO Service', desc: 'Commercial and office water purifier solutions.', icon: Building2 },
    { id: 15, title: 'All Major RO Brand Service', desc: 'We service Kent, Aquaguard, Livpure, and more.', icon: Star },
  ];

  return (
    <section id="services" className="py-20 bg-transparent relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
         <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute top-1/3 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-[10px] mb-2">
            <span className="w-8 h-0.5 bg-green-400"></span>
            Our Services
            <span className="w-8 h-0.5 bg-green-400"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            A-to-Z RO Water Purifier Services
          </h2>
          <p className="text-lg text-blue-100/80">
            From basic filter changes to complete system overhauls, Himalaya RO provides every service your water purifier needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-inner group-hover:bg-[#25D366] transition-colors duration-300">
                  <Icon className="h-7 w-7 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-blue-100/80 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <a 
                  href="#booking" 
                  className="inline-flex items-center text-sm font-bold text-green-400 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Book Service
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
