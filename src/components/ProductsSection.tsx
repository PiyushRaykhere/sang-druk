import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import supplementsImg from "@/assets/products-supplements.webp";
import skincareImg from "@/assets/products-skincare.webp";
import drinksImg from "@/assets/products-drinks.webp";
import incenseImg from "@/assets/products-incense.webp";
import Reveal from "@/components/Reveal";

const products = [
  { title: "Supplements", desc: "Traditional Tibetan health supplements formulated from high-altitude Himalayan herbs.", img: supplementsImg, slug: "supplements" },
  { title: "Skin & Hair Care", desc: "Natural Sorig skin and hair care products including lotions, herbal talc, and treatments.", img: skincareImg, slug: "skincare" },
  { title: "Health Drinks", desc: "Authentic Tibetan herbal teas — Loong, Tripa, Baekan and specialized wellness blends.", img: drinksImg, slug: "drinks" },
  { title: "Incense", desc: "Traditional Tibetan incense crafted from natural aromatic herbs for meditation and purification.", img: incenseImg, slug: "incense" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 lg:py-28 bg-gradient-section overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-gold-soft blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Our Products —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] mb-5 text-balance">
            Herbal Health Care <em className="italic text-spa-green">Products</em>
          </h2>
          <p className="text-muted-foreground text-[15px] font-sans leading-[1.8]">
            Authentic Tibetan herbal products prepared according to classical formulations for holistic well-being.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <Link
                to={`/products/${p.slug}`}
                className="group block bg-gradient-card rounded-2xl overflow-hidden border border-border/50 shadow-soft card-lift h-full"
              >
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-36 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={400} height={300} />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-green-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4 sm:p-6 flex flex-col">
                  <h4 className="text-xl font-serif mb-2 group-hover:text-spa-green transition-colors">{p.title}</h4>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed flex-1">{p.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-spa-green text-sm font-sans font-semibold">
                    View More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
