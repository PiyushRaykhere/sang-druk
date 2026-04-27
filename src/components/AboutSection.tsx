import { ArrowRight, Award } from "lucide-react";
import aboutImg from "@/assets/about-img.webp";
import qcImg from "@/assets/slider-qc.webp";
import directorImg from "@/assets/director.webp";
import Reveal from "@/components/Reveal";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-26 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="text-l tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— About Us —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[37px] leading-[1.15] mb-6 text-balance">
            Bridging <em className="italic text-spa-green"> Ancient Tibetan Wisdom</em> with Modern Holistic Care
          </h2>
          <p className="text-muted-foreground text-[15px] font-sans leading-[1.8] mb-4">
            <strong>Sang-Druk Tibetan Herbal Clinic</strong> brings the 2,500-year-old healing wisdom of Sowa Rigpa (Traditional Tibetan Medicine) to the heart of India. We offer personalized diagnosis through traditional pulse reading, urine analysis, and holistic consultation, followed by treatment using authentic Tibetan herbal medicine and natural healing methods.
          </p>
          <p className="text-muted-foreground text-[15px] font-sans leading-[1.8] mb-8">
            With the experience of a former doctor of Men-Tsee-Khang (The Tibetan Medical and Astro Institute), our clinic follows the authentic lineage of Tibetan medicine, combining ancient knowledge with compassionate, patient-centered care. We focus on identifying and treating the root cause of illness rather than only managing symptoms, helping patients achieve long-term health, balance, and well-being.
          </p>
          <a
            href="/about-sangdruk"
            className="group inline-flex items-center gap-2 bg-gradient-green text-primary-foreground font-sans text-sm px-7 py-3.5 rounded-full shadow-elevated hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore more
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal variant="scale" delay={120}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-elevated card-lift">
                <img src={aboutImg} alt="Tibetan herbal medicine" className="w-full h-44 object-cover" loading="lazy" width={320} height={200} />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-elevated card-lift">
                <img src={qcImg} alt="Quality control at Tibetan medicine lab" className="w-full h-44 object-cover" loading="lazy" width={320} height={200} />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-2xl shadow-premium card-lift">
                <img src={directorImg} alt="Director of Sang-Druk Tibetan Herbal Clinic" className="w-full h-56 object-cover" loading="lazy" width={320} height={300} />
              </div>
              <div className="bg-gradient-green text-primary-foreground rounded-2xl p-6 shadow-elegant relative overflow-hidden">
                <Award className="absolute -top-2 -right-2 w-20 h-20 text-primary-foreground/10" />
                <span className="text-4xl font-serif block mb-1">2,500+</span>
                <span className="text-xs font-sans text-primary-foreground/80 uppercase tracking-wider">Years of Sowa-Rigpa</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
