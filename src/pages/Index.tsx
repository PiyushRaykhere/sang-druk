import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import WhatIsSangDrukSection from "@/components/WhatIsSangDrukSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";

import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleMapSection from "@/components/GoogleMapSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <WhatIsSangDrukSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialSection />
      <HowItWorksSection />
      <BlogSection />
      <FaqSection />
      <GoogleMapSection />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
