import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import clinicImg from "@/assets/sang-druk-clinic-new.webp";
import Reveal from "@/components/Reveal";

const WhatIsSangDrukSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-section">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gradient-radial-mint blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal variant="scale">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-green opacity-15 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant card-lift">
                <img src={clinicImg} alt="Sang-Druk Tibetan Herbal Clinic" className="w-full h-full object-cover max-h-[480px]" />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 shadow-premium hidden md:flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-spa-gold" />
                <div>
                  <div className="font-serif text-foreground text-lg leading-none">བཟང་ དྲུག</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Six Healing Essences</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Discover —</p>
            <h2 className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] mb-6 text-balance">
              What is <em className="italic text-spa-green">Sang-Druk</em>?
            </h2>
            <p className="text-muted-foreground text-[15px] font-sans leading-[1.8] mb-2">
              Sang Druk Tibetan Clinic reflects the true essence of Tibetan healing rooted in the ancient wisdom of Sowa Rigpa
            </p>
            <p className="text-muted-foreground text-[15px] font-sans leading-[1.8] mb-2">
              <strong className="text-foreground">"Sang"</strong> means purification, cleansing, and healing, while <strong className="text-foreground">"Druk"</strong> represents six essential healing elements connected to vital internal organs. Together, Sang-Druk symbolizes a natural, balanced, and complete system of healing for body, energy, mind, and life.
            </p>
            <p className="text-muted-foreground text-[15px] font-sans leading-[1.8] mb-2">
              The six medicinal ingredients in our logo are Bamboo Silica, Saffron, Clove, Green Cardamom, Nutmeg, and Black Cardamom. Each supports specific organs such as the lungs, liver, heart, kidneys, spleen, and life-channel while balancing the three energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm).
            </p>
            <p className="text-muted-foreground text-[15px] font-sans leading-[1.8] mb-6">
              Chebula, known as the king of Tibetan medicine, represents perfect balance. It contains the essence of the five natural elements and supports all three energies, symbolizing complete healing and longevity.
            </p>
            <Link to="/about-sangdruk" className="group inline-flex items-center gap-2 bg-gradient-green text-primary-foreground font-sans text-sm px-7 py-3.5 rounded-full shadow-elevated hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5">
              Get More Information
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSangDrukSection;
