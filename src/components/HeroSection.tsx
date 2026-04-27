import { useState, useCallback, useEffect } from "react";
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
    <section className="relative w-full aspect-[15/9] bg-[#999967] pt-[140px] sm:pt-[150px] lg:pt-[210px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative w-full aspect-[21/9] overflow-hidden  shadow-elegant bg-spa-green-deep/10">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
