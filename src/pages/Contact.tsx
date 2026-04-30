import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleMapSection from "@/components/GoogleMapSection";
import CtaSection from "@/components/CtaSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Contact = () => {
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-3 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          {/* <h1 className="text-2xl sm:text-4xl md:text-5xl text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Get in touch with Sang-Druk Tibetan Herbal Clinic
          </p> */}
        </div>
      </div>

      <GoogleMapSection />
      <CtaSection />

      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default Contact;
