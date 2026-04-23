import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="relative bg-spa-green-deep text-primary-foreground overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-spa-green-light/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-spa-gold/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src={logo} alt="Sang-Druk Logo" className="w-11 h-11 rounded-full object-contain" />
              <span className="text-primary-foreground font-serif text-2xl">Sang-Druk</span>
            </Link>
            <h4 className="text-base font-serif mb-4 text-primary-foreground/90">Subscribe to stay connected.</h4>
            <div className="flex">
              <input type="email" placeholder="Enter Email" className="bg-primary-foreground/5 border border-primary-foreground/20 rounded-l-full px-4 py-2.5 text-sm font-sans text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-spa-gold/50 transition-colors flex-1" />
              <button aria-label="Subscribe" className="bg-spa-gold text-spa-green-deep rounded-r-full px-5 hover:bg-spa-gold/90 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-5">Quick Link</h5>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-spa-gold transition-colors">Home</Link></li>
              <li><a href="#about" className="hover:text-spa-gold transition-colors">About</a></li>
              <li><Link to="/services-treatments" className="hover:text-spa-gold transition-colors">Treatments</Link></li>
              <li><Link to="/tibetan-medicine" className="hover:text-spa-gold transition-colors">Tibetan Medicine</Link></li>
              <li><Link to="/about-sangdruk" className="hover:text-spa-gold transition-colors">About Sang-Druk</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-5">Support</h5>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
              <li><a href="#contact" className="hover:text-spa-gold transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-spa-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-spa-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-spa-gold transition-colors">Booking Policy</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=917018922152" target="_blank" rel="noopener noreferrer" className="hover:text-spa-gold transition-colors">Live Chat</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-5">Contact</h5>
            <ul className="space-y-3.5 font-sans text-sm text-primary-foreground/70">
              <li><a href="tel:+917018922152" className="flex items-center gap-2.5 hover:text-spa-gold transition-colors"><Phone className="w-4 h-4 text-spa-gold" /> 070189 22152</a></li>
              <li><a href="mailto:info@sangdruk.com" className="flex items-center gap-2.5 hover:text-spa-gold transition-colors"><Mail className="w-4 h-4 text-spa-gold" /> info@sangdruk.com</a></li>
              <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-spa-gold" /> Ground Floor, AG 296, Vijay Nagar, Scheme No 74, Indore, MP 452010</li>
              <li className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-spa-gold" /> Mon - Sat : 9:00AM - 6:00PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <p className="text-xs font-sans text-primary-foreground/50">© 2025 Sang-Druk Tibetan Herbal Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
