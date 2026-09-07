import { useState, useEffect } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-black/20 shadow-2xl py-4 border-b border-white/10' : 'backdrop-blur-sm bg-black/5 py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplets className="h-8 w-8 text-white" />
            <span className="font-bold text-2xl text-white tracking-tight">Himalaya<span className="text-green-400">RO</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium opacity-90 uppercase tracking-widest text-white hover:text-green-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="tel:+918601177569" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-[#021B3D] px-5 py-2.5 rounded-full font-bold text-xs uppercase shadow-xl transition-all">
              <Phone className="h-4 w-4" />
              <span>8601177569</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-green-400 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A4D92]/95 backdrop-blur-xl border-t border-white/10 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-bold text-white hover:text-green-400 hover:bg-white/10 uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
