import { Droplets, Wrench, Zap, Home, RefreshCw, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { title: "Quality RO Service", desc: "We ensure pure, clean water with our meticulous servicing.", icon: Droplets },
    { title: "Professional Repair", desc: "Expert technicians handling all types of RO issues.", icon: Wrench },
    { title: "Quick Response", desc: "Fast service scheduling and on-time visits in Gurugram.", icon: Zap },
    { title: "Home & Office Service", desc: "Convenient doorstep service for residential and commercial setups.", icon: Home },
    { title: "Genuine Parts", desc: "We use only high-quality, genuine, or compatible spare parts.", icon: RefreshCw },
    { title: "Customer-Focused", desc: "Your health and satisfaction are our top priorities.", icon: Star },
  ];

  return (
    <section id="why-us" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-[10px] mb-2">
            <span className="w-8 h-0.5 bg-green-400"></span>
            Why Choose Us
            <span className="w-8 h-0.5 bg-green-400"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            The Himalaya RO Advantage
          </h2>
          <p className="text-lg text-blue-100/80">
            Trusted by families and businesses across Sector 46, Gurugram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-white/10 border border-white/20 shadow-inner rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100/80 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
