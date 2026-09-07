import { Phone, MessageCircle, Wrench } from 'lucide-react';

export default function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A4D92]/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-40 md:hidden flex items-center justify-between p-2 border-t border-white/10">
      <a 
        href="tel:+918601177569" 
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        <Phone className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
      </a>
      
      <div className="w-px h-8 bg-white/20"></div>
      
      <a 
        href="https://wa.me/918601177569?text=Hello%20Himalaya%20RO,%20I%20want%20to%20book%20an%20RO%20service.%20Please%20share%20the%20details." 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-green-400 hover:bg-white/10 rounded-lg transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <div className="w-px h-8 bg-white/20"></div>
      
      <a 
        href="#booking" 
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-blue-100 hover:bg-white/10 rounded-lg transition-colors"
      >
        <Wrench className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Book Service</span>
      </a>
    </div>
  );
}
