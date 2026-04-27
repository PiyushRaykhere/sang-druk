import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-removebg-preview.png";
import buddha from "@/assets/buddha-medicine.png";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=917018922152&text=Hello%20Sang-Druk%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const productCategories = [
  { name: "Supplements", href: "/products/supplements" },
  { name: "Skin & Hair Care", href: "/products/skincare" },
  { name: "Health Drinks", href: "/products/drinks" },
  { name: "Incense", href: "/products/incense" },
];

const serviceItems = [
  { name: "Tibetan Medicine (Rinchen Drangjor)", href: "/tibetan-medicine" },
  { name: "Services & Treatments", href: "/services-treatments" },
];

const aboutItems = [
  { name: "Who we are", href: "/" },
  { name: "Why choose us", href: "/" },
  { name: "History of Tibetan Medicine", href: "/" },
  { name: "Development Tibetan medicine in Exile", href: "/" },
  { name: "Four Tantras", href: "/" },
  { name: "Medicine Buddha", href: "/" },
];


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-elegant">
      {/* Top bar — hides on scroll */}
      <div
        className={`bg-spa-green-deep overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-48 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-40 flex items-center justify-between">
          {/* Left — Logo */}
          <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)} aria-label="Sang-Druk Home">
            <img
              src={logo}
              alt="Sang-Druk Logo"
              className="w-20 h-24 sm:w-24 sm:h-28 lg:w-32 lg:h-32  "
            />
          </Link>

          {/* Center — Title (PROPER CENTERED) */}
          <div className="flex-1 flex flex-col items-center text-center px-2 min-w-0">
            {/* Tibetan Text */}
            <span className="text-yellow-300 font-serif text-sm sm:text-xl lg:text-2xl leading-tight" lang="bo">
              ༄༅། །བཟང་དྲུག་བོད་ལུགས་གསོ་རིག་སྨན་ཁང་།
            </span>

            {/* Main Title */}
            <span className="text-white font-serif font-bold text-sm sm:text-lg lg:text-2xl tracking-wide uppercase mt-1">
              SANG-DRUK TIBETAN HERBAL CLINIC
            </span>

            {/* Tagline */}
            <span className="hidden sm:block text-white/80 italic font-sans text-xs lg:text-sm mt-1.5 leading-snug max-w-3xl">
              At the heart of Sowa Rigpa, healing begins where compassion meets wisdom — 
            </span>
            <span className="hidden sm:block text-white/80 italic font-sans text-xs lg:text-sm mt-1.5 leading-snug max-w-3xl">
              restoring balance to body,
              mind, and the science of life.
            </span>
          </div>

          {/* Right — Buddha image */}
          <div className="hidden lg:flex shrink-0 items-center justify-center">
            <img
              src={buddha}
              alt="Medicine Buddha"
              className="w-24 h-24 lg:w-24 lg:h-28 object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground ml-auto p-2 -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Bottom bar — sticky gold menu */}
      <nav className="hidden lg:block h-[47px] bg-spa-gold ">
        <div className="max-w-7xl mx-auto px-10 flex items-center gap-1">
          {/* Centered links */}
          <div className="flex-1 flex items-center justify-center gap-1">
            <Link
              to="/"
              className="px-5 py-3.5 text-spa-green-deep font-bold text-sm tracking-wider uppercase font-sans hover:bg-spa-green-deep hover:text-spa-gold transition-colors"
            >
              Home
            </Link>
            <div
  ref={aboutRef}
  className="relative"
  onMouseEnter={() => setAboutOpen(true)}
  onMouseLeave={() => setAboutOpen(false)}
>
  <button className="flex items-center gap-1 px-5 py-3.5 text-spa-green-deep font-bold text-sm tracking-wider uppercase font-sans hover:bg-spa-green-deep hover:text-spa-gold transition-colors">
    About Us
    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
  </button>

  {/* Dropdown */}
  <div
    className={`absolute top-full left-0 bg-background rounded-b-xl shadow-elegant border border-border py-2 min-w-[240px] z-50 transition-all duration-300 ${
      aboutOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
    }`}
  >
    {aboutItems.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className="block px-4 py-2.5 text-sm text-foreground hover:bg-spa-gold/15 hover:text-spa-green-deep transition-colors font-sans font-semibold"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>

            <div ref={productsRef} className="relative">
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-3.5 text-spa-green-deep font-bold text-xs tracking-wider uppercase font-sans hover:bg-spa-green-deep hover:text-spa-gold transition-colors"
              >
                Products{" "}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 bg-background rounded-b-xl shadow-elegant border border-border py-2 min-w-[240px] z-50">
                  {productCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setProductsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-spa-gold/15 hover:text-spa-green-deep transition-colors font-sans font-semibold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div ref={servicesRef} className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setProductsOpen(false);
                }}
                className="flex items-center gap-1.5 px-5 py-3.5 text-spa-green-deep font-bold text-sm tracking-wider uppercase font-sans hover:bg-spa-green-deep hover:text-spa-gold transition-colors"
              >
                Services{" "}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-background rounded-b-xl shadow-elegant border border-border py-2 min-w-[300px] z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-spa-gold/15 hover:text-spa-green-deep transition-colors font-sans font-semibold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="px-5 py-3.5 text-spa-green-deep font-bold text-sm tracking-wider uppercase font-sans hover:bg-spa-green-deep hover:text-spa-gold transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right — Book Now */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center bg-spa-green-deep text-spa-gold font-bold text-sm px-6 py-2.5 rounded-full hover:bg-spa-green hover:shadow-gold transition-all"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-spa-green-deep p-6 flex flex-col gap-1 lg:hidden border-t border-spa-gold/30 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <Link
            to="/"
            className="text-primary-foreground text-base font-bold font-sans py-3 border-b border-primary-foreground/10"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-sangdruk"
            className="text-primary-foreground text-base font-bold font-sans py-3 border-b border-primary-foreground/10"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <div className="py-3 border-b border-primary-foreground/10">
            <p className="text-spa-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 font-sans">Products</p>
            {productCategories.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-primary-foreground text-[15px] font-medium font-sans pl-3 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="py-3 border-b border-primary-foreground/10">
            <p className="text-spa-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 font-sans">Services</p>
            {serviceItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-primary-foreground text-[15px] font-medium font-sans pl-3 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            className="text-primary-foreground text-base font-bold font-sans py-3 border-b border-primary-foreground/10"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-spa-gold text-spa-green-deep font-bold text-sm px-6 py-3.5 rounded-full text-center mt-4 shadow-gold"
            onClick={() => setMobileOpen(false)}
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
