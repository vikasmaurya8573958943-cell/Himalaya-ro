import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

export default function BookingAndContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    brand: '',
    problem: '',
    date: '',
    time: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to a backend or email API
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', phone: '', address: '', service: '', brand: '', problem: '', date: '', time: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      {/* Anchor for booking */}
      <div id="booking" className="absolute -top-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Book RO Service / Contact Us
          </h2>
          <p className="text-lg text-blue-100/80">
            Schedule a service visit or get in touch with our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Booking Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Service Request Form</h3>
            
            {isSubmitted ? (
              <div className="bg-green-400/20 text-white border border-green-400/50 rounded-xl p-6 text-center backdrop-blur-md">
                <div className="w-16 h-16 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Request Received!</h4>
                <p className="opacity-90">Thank you, {formData.name}. We will contact you shortly to confirm your service visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Customer Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Mobile Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all" placeholder="Enter mobile number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-1">Full Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all" placeholder="House no, Building, Area" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Select Service</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all">
                      <option value="" className="bg-[#0A4D92] text-white">Select an option</option>
                      <option value="RO Repair" className="bg-[#0A4D92] text-white">RO Repair</option>
                      <option value="RO Servicing" className="bg-[#0A4D92] text-white">RO Servicing</option>
                      <option value="RO Installation" className="bg-[#0A4D92] text-white">RO Installation</option>
                      <option value="Filter Change" className="bg-[#0A4D92] text-white">Filter Change</option>
                      <option value="New Purifier" className="bg-[#0A4D92] text-white">New Purifier</option>
                      <option value="Other" className="bg-[#0A4D92] text-white">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">RO Brand</label>
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all" placeholder="e.g. Kent, Aquaguard" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Preferred Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Preferred Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-1">Problem/Requirement</label>
                  <textarea name="problem" value={formData.problem} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all resize-none" placeholder="Briefly describe the issue..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20b858] text-[#021B3D] font-bold py-3.5 rounded-xl transition-colors shadow-xl uppercase tracking-wider">
                  Book RO Service
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Address</h4>
                    <p className="text-blue-100/80 mt-1">Jal Vihar Colony, Sector 46,<br/>Gurugram, Haryana – 122003</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Phone & WhatsApp</h4>
                    <div className="mt-1 flex flex-col gap-1">
                      <a href="tel:+918601177569" className="text-blue-100/80 hover:text-green-400 font-bold transition-colors">8601177569</a>
                      <a href="tel:+918808682180" className="text-blue-100/80 hover:text-green-400 font-bold transition-colors">8808682180</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="tel:+918601177569" className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#021B3D] py-2.5 px-4 rounded-xl font-bold transition-colors">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a href="https://wa.me/918601177569?text=Hello" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-2.5 px-4 rounded-xl font-bold transition-colors">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href="https://maps.google.com/?q=Sector+46,+Gurugram" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white py-2.5 px-4 rounded-xl font-bold transition-colors">
                    <Navigation className="h-4 w-4" /> Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-white/20 h-64 overflow-hidden relative">
               <iframe 
                  title="Himalaya RO Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.795493037956!2d77.0505191!3d28.420807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22638cc24817%3A0xc3f58a5e95db2f4a!2sSector%2046%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '1rem' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
