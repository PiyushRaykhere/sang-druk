import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import supplementsImg from "@/assets/products-supplements.webp";
import skincareImg from "@/assets/products-skincare.webp";
import drinksImg from "@/assets/products-drinks.webp";
import incenseImg from "@/assets/products-incense.webp";

const productData: Record<string, {
  title: string;
  img: string;
  intro: string;
  items: { name: string; desc: string }[];
}> = {
  supplements: {
    title: "Tibetan Herbal Supplements",
    img: supplementsImg,
    intro: "Our supplements are prepared from authentic high-altitude Himalayan herbs following classical Tibetan medical formulations. Each product is designed to support specific health needs while promoting overall vitality and balance.",
    items: [
      { name: "Padma Basic", desc: "A classic Tibetan herbal formula combining 20+ herbs to support circulatory health, immune function, and general well-being." },
      { name: "Agar 35", desc: "A traditional nerve-calming formula with 35 ingredients that supports healthy sleep, reduces stress, and balances the Lung (wind) energy." },
      { name: "Dashel Dutsi", desc: "A moon crystal compound that supports digestive health, reduces acidity, and helps with chronic gastrointestinal issues." },
      { name: "Chugang 25", desc: "A 25-ingredient liver-support formula that detoxifies and nourishes the liver while balancing bile metabolism." },
      { name: "Gabur 25", desc: "Supports kidney function and urinary health using camphor-based formulations with 25 carefully selected ingredients." },
      { name: "Semnyi Kundrol", desc: "A heart-calming formula that eases anxiety, palpitations, and emotional imbalance by harmonizing the subtle energies." },
    ],
  },
  skincare: {
    title: "Sorig Skin & Hair Care",
    img: skincareImg,
    intro: "Our Sorig line of skin and hair care products combines the wisdom of Tibetan medicine with natural Himalayan botanicals. Each product is formulated for specific body constitutions (Lung, Tripa, Beken) to provide targeted care.",
    items: [
      { name: "Sorig Herbal Body Lotion", desc: "A nourishing body lotion infused with Tibetan herbs that moisturizes, protects, and rejuvenates the skin naturally." },
      { name: "Sorig Herbal Talc Powder", desc: "A soothing talc powder made from aromatic Tibetan herbs, ideal for keeping skin fresh and preventing irritation." },
      { name: "Sorig Herbal Face Cream", desc: "A gentle face cream with anti-aging properties, formulated with high-altitude botanicals to nourish and protect facial skin." },
      { name: "Sorig Hair Oil", desc: "Traditional hair oil infused with Tibetan herbs that strengthens hair roots, reduces hair fall, and promotes natural shine." },
      { name: "Sorig Herbal Shampoo", desc: "A gentle herbal shampoo free from harsh chemicals, designed to cleanse the scalp and nourish hair from root to tip." },
    ],
  },
  drinks: {
    title: "Tibetan Health Drinks",
    img: drinksImg,
    intro: "Our health drinks are carefully blended from traditional Tibetan herbal recipes. Each tea and beverage is formulated to address specific constitutional needs and promote internal balance.",
    items: [
      { name: "Loong Tea (Wind Balance)", desc: "A calming herbal tea designed to balance Lung (wind) energy, reduce anxiety, improve sleep quality, and soothe the nervous system." },
      { name: "Tripa Tea (Bile Balance)", desc: "A cooling herbal blend that balances Tripa (bile) energy, aids digestion, reduces acidity, and supports liver health." },
      { name: "Baekan Tea (Phlegm Balance)", desc: "A warming herbal tea that balances Baekan (phlegm) energy, boosts metabolism, reduces congestion, and improves respiratory health." },
      { name: "Sorig Detox Tea", desc: "A cleansing herbal blend designed to flush toxins, improve digestion, and rejuvenate the body's natural purification processes." },
      { name: "Tibetan Wellness Tea", desc: "A general wellness blend combining multiple Himalayan herbs for daily health maintenance and immune support." },
    ],
  },
  incense: {
    title: "Traditional Tibetan Incense",
    img: incenseImg,
    intro: "Our incense is hand-crafted using traditional methods from natural aromatic herbs gathered in the Himalayas. Used for centuries in meditation, healing rituals, and spiritual practice, each blend serves a specific purpose.",
    items: [
      { name: "Men-Tsee-Khang Healing Incense", desc: "A medicinal-grade incense formulated according to classical Tibetan medical texts, used for purification and promoting a healing environment." },
      { name: "Tibetan Meditation Incense", desc: "A calming aromatic blend designed to deepen meditation practice, promote mental clarity, and create a peaceful atmosphere." },
      { name: "Sorig Relaxation Incense", desc: "A soothing incense blend that reduces stress, calms the mind, and promotes restful sleep through natural aromatic herbs." },
      { name: "Purification Incense (Sangchoe)", desc: "Traditional purification incense used in spiritual ceremonies to cleanse spaces of negative energies and create an auspicious environment." },
      { name: "Aromatic Herbal Incense", desc: "A naturally fragrant incense made from a blend of Himalayan herbs, ideal for daily use to freshen living spaces." },
    ],
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen">
        <div className="bg-spa-green">
          <Navbar />
          <div className="pt-52 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-4xl text-primary-foreground">Product Not Found</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-muted-foreground mb-6">The product category you're looking for doesn't exist.</p>
          <Link to="/" className="text-spa-green hover:underline font-sans text-sm">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-52 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">{product.title}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <img src={product.img} alt={product.title} className="w-full md:w-1/2 h-72 object-cover rounded-lg" />
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">{product.intro}</p>
          </div>
        </div>

        <h3 className="text-2xl font-serif mb-8">Available Products</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {product.items.map((item, i) => (
            <div key={i} className="bg-section-bg rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-serif mb-2">{item.name}</h4>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-spa-green/10 rounded-lg p-8 text-center">
          <h4 className="font-serif text-xl mb-3">Interested in Our Products?</h4>
          <p className="text-muted-foreground text-sm font-sans mb-4">Contact us for availability, pricing, and personalized product recommendations based on your constitution.</p>
          <a href="https://api.whatsapp.com/send?phone=917018922152" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-spa-green text-primary-foreground px-6 py-3 rounded-full text-sm font-sans hover:bg-spa-green-light transition-colors">
            Contact on WhatsApp
          </a>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductDetail;
