import { Phone, Mail, MapPin, Clock } from "lucide-react";

const GoogleMapSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">FIND US</p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] leading-tight">Visit Our Clinic</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 rounded-lg overflow-hidden border border-border">
          <div className="p-8 flex flex-col justify-center bg-background">
            <h3 className="text-xl font-serif mb-6">Sang-Druk Tibetan Herbal Clinic</h3>
            <ul className="space-y-4 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-spa-green" />
                <span>Ground Floor, AG 296, Vijay Nagar, Scheme No 74, Indore, Madhya Pradesh 452010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-spa-green" />
                <a href="tel:+917018922152" className="hover:text-foreground transition-colors">070189 22152</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-spa-green" />
                <a href="mailto:info@sangdruk.com" className="hover:text-foreground transition-colors">info@sangdruk.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 shrink-0 text-spa-green" />
                <span>Mon – Sat : 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/dir//Ground+floor,+AG+296,+Vijay+Nagar,+Scheme+No+74,+Indore,+Madhya+Pradesh+452010"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-spa-green text-primary-foreground font-sans text-sm px-6 py-2.5 rounded-full hover:bg-spa-green-light transition-colors self-start"
            >
              Get Directions
            </a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2!2d75.893!3d22.751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAzLjYiTiA3NcKwNTMnMzQuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Ground+floor,+AG+296,+Vijay+Nagar,+Scheme+No+74,+Indore,+Madhya+Pradesh+452010"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sang-Druk Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
