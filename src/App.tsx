/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StickyContact from './components/layout/StickyContact';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import ProductsAndBrands from './components/sections/ProductsAndBrands';
import WhyChooseUs from './components/sections/WhyChooseUs';
import HowItWorks from './components/sections/HowItWorks';
import BookingAndContact from './components/sections/BookingAndContact';
import ReviewsAndFAQ from './components/sections/ReviewsAndFAQ';

export default function App() {
  return (
    <div className="font-sans antialiased text-white bg-gradient-to-br from-[#021B3D] via-[#0A4D92] to-[#1E90FF] min-h-screen selection:bg-blue-300 selection:text-blue-900 pb-16 md:pb-0 relative overflow-x-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none fixed"></div>
      <div className="absolute bottom-[-150px] right-[-50px] w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[120px] pointer-events-none fixed"></div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <ProductsAndBrands />
        <WhyChooseUs />
        <HowItWorks />
        <BookingAndContact />
        <ReviewsAndFAQ />
      </main>

      <Footer />
      
      <FloatingWhatsApp />
      <StickyContact />
    </div>
  );
}
