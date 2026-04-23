import InquiryForm from "@/components/InquiryForm";
import ctaBg from "@/assets/cta-bg.webp";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="Tibetan healing" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-spa-green-deep/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-xs tracking-[0.25em] uppercase text-spa-gold mb-4 font-sans font-medium">— Get In Touch —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-primary-foreground mb-5 text-balance">
            Restore Balance in <em className="italic text-spa-gold">Body, Mind</em> and Life
          </h2>
          <p className="text-primary-foreground/80 text-[15px] font-sans leading-[1.8] mb-8">
            Experience authentic Tibetan traditional healing at Indore's first Sowa-Rigpa clinic. Fill the form and we'll connect with you on WhatsApp — or call us directly.
          </p>
          <a
            href="tel:+917018922152"
            className="inline-flex items-center gap-3 glass-dark text-primary-foreground font-sans text-sm px-6 py-3.5 rounded-full hover:bg-primary-foreground/15 transition-all"
          >
            <span className="w-9 h-9 rounded-full bg-spa-gold/20 flex items-center justify-center animate-pulse-ring">
              <Phone className="w-4 h-4 text-spa-gold" />
            </span>
            Call us: 070189 22152
          </a>
        </Reveal>

        <Reveal variant="scale" delay={120}>
          <div className="glass rounded-3xl p-7 lg:p-8 shadow-elegant">
            <h3 className="font-serif text-2xl mb-1">Quick Inquiry</h3>
            <p className="text-muted-foreground text-sm font-sans mb-6">We respond within minutes on WhatsApp.</p>
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
