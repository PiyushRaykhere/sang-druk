import { Clock, Sparkles, User, ArrowRight } from "lucide-react";
import serviceAbhyanga from "@/assets/service-abhyanga.webp";
import serviceShirodhara from "@/assets/service-shirodhara.webp";
import servicePinda from "@/assets/service-pinda.webp";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Acupuncture & Moxibustion",
    desc: "Traditional Tibetan needle therapy and heat treatment to restore energy flow, relieve pain, and promote natural healing throughout the body.",
    duration: "45 – 60 min",
    type: "Traditional Therapy",
    focus: "Pain & Energy Flow",
    img: serviceAbhyanga,
    reverse: false,
  },
  {
    title: "Cupping & Venesection",
    desc: "Ancient Tibetan techniques for detoxification and blood purification, helping to remove toxins and restore balance to the body's systems.",
    duration: "30 – 45 min",
    type: "Detox Therapy",
    focus: "Detoxification",
    img: serviceShirodhara,
    reverse: true,
  },
  {
    title: "Tibetan Herbal Medicine",
    desc: "Personalized herbal formulations based on traditional pulse reading and urine analysis, tailored to your unique constitution and condition.",
    duration: "Ongoing",
    type: "Herbal Treatment",
    focus: "Holistic Healing",
    img: servicePinda,
    reverse: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-16">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-3 font-sans font-medium">— Our Treatments —</p>
          <h2 className="text-3xl md:text-4xl leading-[1.15] max-w-2xl text-balance">
            Authentic Tibetan <em className="italic text-spa-green">Sowa-Rigpa</em> Therapies
          </h2>
        </div>
        <a href="https://api.whatsapp.com/send?phone=917018922152&text=Hello%20Sang-Druk%2C%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-spa-gold text-spa-green-deep font-semibold text-sm px-6 py-3 rounded-full shadow-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5 self-start md:self-auto whitespace-nowrap">
          Book Consultation
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-card shadow-elevated card-lift border border-border/50">
              <div className="relative">
                <img src={s.img} alt={s.title} className="w-full h-44 object-cover" loading="lazy" width={640} height={360} />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-green-deep/50 to-transparent" />
                <div className="absolute top-3 left-3 glass-dark rounded-full px-2.5 py-1 text-[10px] font-sans tracking-widest uppercase text-primary-foreground">
                  0{i + 1}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl mb-2 leading-tight">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-sans mb-4 leading-relaxed line-clamp-3">{s.desc}</p>
                <div className="space-y-1.5 mb-4 font-sans text-xs text-muted-foreground border-t border-border/50 pt-3">
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-spa-gold" /> {s.duration}</div>
                  <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-spa-gold" /> {s.type}</div>
                  <div className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-spa-gold" /> {s.focus}</div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=917018922152&text=Hello%20Sang-Druk%2C%20I%20would%20like%20to%20know%20more%20about%20your%20treatments." target="_blank" rel="noopener noreferrer" className="mt-auto group/btn inline-flex items-center gap-2 text-spa-green hover:text-spa-gold text-sm font-sans font-semibold transition-colors self-start">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
