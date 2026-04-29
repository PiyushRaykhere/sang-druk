import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import sliderDalaiLama from "@/assets/slider-dalailama.webp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import sliderProduction from "@/assets/slider-production.webp";
import sliderQc from "@/assets/slider-qc.webp";

const slides = [
  { img: heroBg, alt: "Sang-Druk Tibetan Herbal Clinic" },
  { img: sliderDalaiLama, alt: "His Holiness the 14th Dalai Lama" },
  { img: sliderMenlha, alt: "The Great Medicinal Buddha" },
  { img: sliderProduction, alt: "Authentic Tibetan Herbal Medicine Production" },
  { img: sliderQc, alt: "Modern Quality Control & Research" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    /*
      pt values clear the fixed navbar at each breakpoint:
        mobile  (<sm)  : top-bar ≈ 72px  → pt-[72px]
        sm      (640px): top-bar ≈ 88px  → pt-[88px]
        md      (768px): top-bar ≈ 104px → pt-[104px]
        lg      (1024px): top-bar ≈ 112px + gold-nav 47px = 159px → pt-[159px]
    */
    <section className="w-full bg-spa-green-deep pt-[72px] sm:pt-[88px] md:pt-[104px] lg:pt-[159px]">
      <div className="bg-spa-green-deep/10 px-3 py-3 sm:px-5 sm:py-4 md:px-8 md:py-5">
      <div className="relative w-full aspect-video max-h-[85vh] min-h-[200px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-contain object-center"
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/65 text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/65 text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-spa-gold"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Slide caption */}
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 text-center px-4 z-10 pointer-events-none">
          <p className="text-white/75 text-xs sm:text-sm font-sans tracking-wide drop-shadow">
            {slides[current].alt}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
