import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import testimonialImg from "@/assets/testimonial-img.webp";
import Reveal from "@/components/Reveal";

const testimonials = [
  { name: "Tenzin Dorje", location: "Indore, Madhya Pradesh", text: "I had been suffering from chronic digestive issues and joint pain for years. After consulting at Sang-Druk clinic, the pulse diagnosis identified the root cause immediately. The Tibetan herbal treatment brought remarkable improvement within weeks.", rating: 5 },
  { name: "Priya Sharma", location: "Bhopal, Madhya Pradesh", text: "I was skeptical about traditional medicine at first, but Sang-Druk completely changed my perspective. After three months of herbal treatment, my chronic migraines have almost disappeared. Truly life-changing!", rating: 5 },
  { name: "Lobsang Tsering", location: "Dharamsala, Himachal Pradesh", text: "As someone who grew up with Tibetan medicine, finding an authentic Sowa-Rigpa clinic in central India was a blessing. The quality of herbs and the depth of diagnosis at Sang-Druk is on par with the best clinics I've visited.", rating: 5 },
  { name: "Rajesh Patel", location: "Ujjain, Madhya Pradesh", text: "My skin condition had persisted for over two years despite multiple treatments. The Tibetan herbal formulations prescribed at Sang-Druk showed visible improvement within just a few weeks.", rating: 5 },
  { name: "Sunita Verma", location: "Indore, Madhya Pradesh", text: "The acupuncture and moxibustion treatments at Sang-Druk have been incredible for my back pain. After just four sessions, I felt significant relief. The entire clinic has a very calming, healing atmosphere.", rating: 4 },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);
  const t = testimonials[current];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-section overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-gold-soft blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Testimonials —</p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-balance">
              What Our <em className="italic text-spa-green">Patients</em> Say
            </h2>
          </div>
          <div className="flex gap-3 mt-2 md:mt-0">
            <button onClick={prev} aria-label="Previous testimonial" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-gradient-green hover:text-primary-foreground hover:border-transparent transition-all duration-300 shadow-soft hover:shadow-elevated">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next testimonial" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-gradient-green hover:text-primary-foreground hover:border-transparent transition-all duration-300 shadow-soft hover:shadow-elevated">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

        <Reveal variant="scale">
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-elegant bg-gradient-card border border-border/50">
            <div className="relative h-52 sm:h-64 md:h-auto md:min-h-[380px]">
              <img src={testimonialImg} alt="Happy patient" className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-green-deep/40 to-transparent" />
            </div>
            <div className="flex flex-col">
              <div className="bg-gradient-green text-primary-foreground p-6 sm:p-8 lg:p-12 flex-1 flex flex-col justify-center relative">
                <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-foreground/10" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-spa-gold text-spa-gold" : "text-primary-foreground/30"}`} />
                  ))}
                </div>
                <p className="text-primary-foreground/90 text-[15px] font-sans leading-[1.8] mb-6 italic">
                  "{t.text}"
                </p>
                <h4 className="text-xl font-serif mb-1">{t.name}</h4>
                <p className="text-primary-foreground/60 text-xs font-sans tracking-wider uppercase">Patient — {t.location}</p>
              </div>
              <div className="bg-background p-5 flex items-center justify-between border-t border-border/50">
                <p className="text-xs font-sans text-muted-foreground tracking-wider">
                  <span className="text-foreground font-semibold">{String(current + 1).padStart(2, "0")}</span> / {String(testimonials.length).padStart(2, "0")}
                </p>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-6 bg-spa-green" : "w-1.5 bg-border hover:bg-spa-green/50"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
