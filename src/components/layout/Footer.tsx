import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 relative z-20 text-white/80 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Himalaya<span className="text-green-400">RO</span></h3>
            <p className="text-blue-100/70 mb-6">
              "Pure Water. Professional RO Service."<br/>
              Expert RO water purifier solutions in Sector 46, Gurugram.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'FAQ', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Service Links</h4>
            <ul className="space-y-3">
              {['RO Repair', 'RO Service', 'Installation', 'Filter Change', 'Membrane Replacement', 'RO Parts'].map(link => (
                <li key={link}>
                  <a href="#services" className="hover:text-green-400 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="font-medium text-blue-100/90">Jal Vihar Colony, Sector 46, Gurugram, Haryana – 122003</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+918601177569" className="block hover:text-green-400 font-medium text-blue-100/90">8601177569</a>
                  <a href="tel:+918808682180" className="block hover:text-green-400 font-medium text-blue-100/90">8808682180</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <a href="mailto:vikasmaurya857395@gmail.com" className="hover:text-green-400 font-medium text-blue-100/90">Email Us</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Himalaya RO. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Professional RO Water Purifier Sales, Service & Repair.</p>
        </div>
      </div>
    </footer>
  );
}
