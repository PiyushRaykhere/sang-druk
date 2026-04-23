import { Leaf, Heart, ShieldCheck, Stethoscope } from "lucide-react";
import whyImg1 from "@/assets/why-choose-1.webp";
import whyImg2 from "@/assets/why-choose-2.webp";
import Reveal from "@/components/Reveal";

const features = [
  { icon: ShieldCheck, title: "Traditional Pulse & Urine Diagnosis", desc: "Personalized diagnosis through authentic Tibetan methods of pulse reading and urine analysis." },
  { icon: Leaf, title: "Authentic Tibetan Herbal Medicine", desc: "Treatment using genuine Tibetan herbal formulations prepared according to ancient traditions." },
  { icon: Stethoscope, title: "Holistic Lifestyle Guidance", desc: "Individualized diet and lifestyle counseling based on your unique body constitution." },
  { icon: Heart, title: "Safe & Effective Healing", desc: "Compassionate care combining acupuncture, moxibustion, cupping, and lifestyle guidance." },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-radial-mint blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Why Choose Us —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] mb-5 text-balance">
            Why Choose <em className="italic text-spa-green">Sang-Druk</em>
          </h2>
          <p className="text-muted-foreground text-[15px] font-sans leading-[1.8]">
            Experience authentic Tibetan Sowa-Rigpa healing rooted in 2,500 years of tradition, now in Indore, MP.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Left feature cards */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {features.slice(0, 2).map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-gradient-green text-primary-foreground rounded-2xl p-7 shadow-elegant card-lift h-full relative overflow-hidden">
                  <f.icon className="absolute -bottom-4 -right-4 w-28 h-28 text-primary-foreground/10" />
                  <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-spa-gold" />
                  </div>
                  <h4 className="text-lg font-serif mb-2 leading-snug">{f.title}</h4>
                  <p className="text-primary-foreground/75 text-sm font-sans leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Center image collage */}
          <Reveal variant="scale" delay={150} className="md:col-span-4">
            <div className="grid gap-5 h-full">
              <div className="rounded-2xl overflow-hidden shadow-elevated card-lift relative h-56 md:h-64">
                <img src={whyImg1} alt="Tibetan healing herbs" className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-elevated card-lift relative flex-1 min-h-[200px]">
                <img src={whyImg2} alt="Traditional therapies" className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
              </div>
            </div>
          </Reveal>

          {/* Right feature cards */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {features.slice(2).map((f, i) => (
              <Reveal key={i} delay={(i + 2) * 100}>
                <div className="bg-gradient-green text-primary-foreground rounded-2xl p-7 shadow-elegant card-lift h-full relative overflow-hidden">
                  <f.icon className="absolute -bottom-4 -right-4 w-28 h-28 text-primary-foreground/10" />
                  <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-spa-gold" />
                  </div>
                  <h4 className="text-lg font-serif mb-2 leading-snug">{f.title}</h4>
                  <p className="text-primary-foreground/75 text-sm font-sans leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
