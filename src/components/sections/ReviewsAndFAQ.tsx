import { useState } from 'react';
import { ChevronDown, ChevronUp, Star, MessageSquare } from 'lucide-react';

export default function ReviewsAndFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What RO brands do you service?",
      a: "We service all major RO water purifier brands including Kent, Aquaguard, Aquasure, Livpure, Pureit, AO Smith, Havells, LG, and Whirlpool among others."
    },
    {
      q: "Do you provide home RO service?",
      a: "Yes, we provide doorstep residential RO services across Sector 46, Gurugram, and all nearby areas."
    },
    {
      q: "Do you provide RO installation?",
      a: "Absolutely! We offer professional RO installation for all new water purifier systems."
    },
    {
      q: "Can I book RO service through WhatsApp?",
      a: "Yes, you can easily book a service by messaging us on WhatsApp at 8601177569."
    },
    {
      q: "Do you replace RO filters and membranes?",
      a: "Yes, we provide genuine replacement parts, including sediment filters, carbon filters, and RO membranes."
    },
    {
      q: "Do you provide office RO service?",
      a: "Yes, we service high-capacity commercial RO systems used in offices, schools, and businesses."
    },
    {
      q: "Where do you provide RO service?",
      a: "Our primary service area is Sector 46, Gurugram, but we also cover most of the surrounding regions."
    },
    {
      q: "How can I contact Himalaya RO?",
      a: "You can call us directly at 8601177569 or 8808682180, message us on WhatsApp, or fill out the booking form on our website."
    }
  ];

  return (
    <>
      {/* Reviews Section */}
      <section className="py-20 bg-transparent border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Customer Reviews
          </h2>
          <p className="text-lg text-blue-100/80 mb-12">
            Your feedback matters to us. We strive to provide the best RO service in Gurugram.
          </p>
          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-2xl mx-auto flex flex-col items-center shadow-2xl">
            <div className="flex gap-1 mb-4 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-current drop-shadow-sm" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">How was our service?</h3>
            <p className="text-blue-100/80 mb-8 max-w-md">
              We would love to hear about your experience with Himalaya RO. Share your thoughts and help us improve.
            </p>
            <button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-[#021B3D] px-8 py-3 rounded-full font-bold transition-colors shadow-xl uppercase tracking-wider">
              <MessageSquare className="w-5 h-5" />
              Leave a Review
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-blue-100/80">
              Quick answers to common questions about our RO services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-xl"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/50 shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-blue-100/80">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
