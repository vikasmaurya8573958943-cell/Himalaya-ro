import { Phone, CalendarCheck, MapPin, ThumbsUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { 
      num: "01", 
      title: "Contact Us", 
      desc: "Call or WhatsApp Himalaya RO with your requirement.",
      icon: Phone 
    },
    { 
      num: "02", 
      title: "Book Service", 
      desc: "Tell us your RO problem and choose a preferred time.",
      icon: CalendarCheck 
    },
    { 
      num: "03", 
      title: "Service Visit", 
      desc: "A professional technician visits your location on time.",
      icon: MapPin 
    },
    { 
      num: "04", 
      title: "Problem Solved", 
      desc: "Your RO is checked, serviced, and restored to perfect condition.",
      icon: ThumbsUp 
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-blue-100/80">
            A simple 4-step process to get your RO water purifier running perfectly again.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/20 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white/10 border-4 border-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-2xl group-hover:border-green-400/50 group-hover:scale-105 transition-all relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#25D366] text-[#021B3D] rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-100/80 max-w-xs">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
