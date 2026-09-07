import { ShieldCheck, Droplets } from 'lucide-react';

export default function ProductsAndBrands() {
  const productCategories = [
    { name: "Domestic RO Purifiers", desc: "For clean, safe drinking water at home." },
    { name: "Commercial RO Systems", desc: "High-capacity systems for offices & businesses." },
    { name: "RO + UV Purifiers", desc: "Dual protection against impurities and microbes." },
    { name: "RO + UF Purifiers", desc: "Advanced filtration with Ultra-Filtration." },
    { name: "RO + UV + UF", desc: "Complete multi-stage purification." },
    { name: "Alkaline Water Purifiers", desc: "Adds essential minerals back into water." },
    { name: "Water Purifier Accessories", desc: "Pre-filter housings, stands, and covers." },
    { name: "RO Spare Parts", desc: "Pumps, adapters, membranes, and inline filters." },
  ];

  const brands = [
    "Kent", "Aquaguard", "Aquasure", "Livpure", "Pureit", 
    "AO Smith", "Havells", "LG", "Whirlpool", "Blue Star",
    "Eureka Forbes", "Panasonic"
  ];

  return (
    <>
      {/* Products Section */}
      <section id="products" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              RO Water Purifiers & Parts
            </h2>
            <p className="text-lg text-blue-100/80">
              We offer sales of new RO systems, genuine spare parts, and accessories for all your water purification needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((product, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-colors flex flex-col h-full shadow-2xl">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 shadow-inner text-green-400 border border-white/10">
                  <Droplets className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{product.name}</h3>
                <p className="text-sm text-blue-100/80 mb-6 flex-grow">{product.desc}</p>
                <a 
                  href="https://wa.me/918601177569?text=Hello%20Himalaya%20RO,%20I%20want%20to%20know%20the%20best%20price%20for%20a%20new%20RO%20System."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-white/10 border border-white/20 hover:bg-[#25D366] hover:border-[#25D366] text-white font-medium py-2 rounded-lg transition-colors text-sm uppercase tracking-wider"
                >
                  Get Price
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-black/10 backdrop-blur-md border-y border-white/10 relative overflow-hidden">
        {/* Subtle background waves pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" width="100" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center justify-center gap-3 text-white">
            <ShieldCheck className="h-8 w-8 text-green-400" />
            We Service All Major RO Brands
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {brands.map((brand, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 font-semibold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all shadow-xl text-white"
              >
                {brand}
              </div>
            ))}
          </div>
          <div className="mt-8 text-blue-200">
            ...and many other major RO brands.
          </div>
        </div>
      </section>
    </>
  );
}
