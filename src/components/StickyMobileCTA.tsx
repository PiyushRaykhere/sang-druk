import { Phone, Calendar } from "lucide-react";

const PHONE = "917018922152";

const StickyMobileCTA = () => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-border/60 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] flex gap-2 shadow-elegant">
      <a
        href={`tel:+${PHONE}`}
        className="flex-1 flex items-center justify-center gap-2 bg-background border border-spa-green/30 text-spa-green text-sm font-medium font-sans py-3 rounded-full active:scale-95 transition-transform"
        aria-label="Call clinic"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
      <a
        href={`https://api.whatsapp.com/send?phone=${PHONE}&text=Hello%20Sang-Druk%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium font-sans py-3 rounded-full active:scale-95 transition-transform shadow-elevated"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0z"/>
        </svg>
        Chat
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-green text-primary-foreground text-sm font-medium font-sans py-3 rounded-full active:scale-95 transition-transform shadow-elevated"
      >
        <Calendar className="w-4 h-4" /> Book
      </a>
    </div>
  );
};

export default StickyMobileCTA;
