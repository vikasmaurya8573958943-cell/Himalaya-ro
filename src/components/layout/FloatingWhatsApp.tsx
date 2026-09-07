import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918601177569?text=Hello%20Himalaya%20RO,%20I%20want%20to%20book%20an%20RO%20service.%20Please%20share%20the%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 bg-[#25D366] text-[#021B3D] p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] border border-[#25D366]/50 hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-4 bg-[#0A4D92]/90 backdrop-blur-md border border-white/20 text-white text-sm font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
