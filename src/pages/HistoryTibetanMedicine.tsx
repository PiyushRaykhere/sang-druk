import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import sliderDalailama from "@/assets/slider-dalailama.webp";

const HistoryTibetanMedicine = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">History of Tibetan Medicine</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            A journey through one of the world's oldest healing traditions
          </p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="mb-10">
          <img src={sliderMenlha} alt="History of Tibetan Medicine" className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg mb-6 sm:mb-8" loading="lazy" />
          <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-5">
            Tibetan Medicine, known as Sowa Rigpa, traces its origins to the ancient wisdom traditions of the Himalayan region. Rooted in a profound understanding of the human body and its relationship with nature, this healing system has sustained communities for millennia through its holistic approach to health and well-being. The earliest foundations of Tibetan Medicine were laid by accomplished physicians and spiritual masters who combined empirical observation with deep philosophical insight.
          </p>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-8">
            Over centuries, Tibetan Medicine evolved through the synthesis of indigenous Himalayan healing practices, Indian Ayurveda, Chinese medicine, and Persian medical knowledge. This rich integration gave rise to a unique and comprehensive system that continues to provide effective, natural healing to people across the world. The tradition was further codified and refined through generations of dedicated scholars, physicians, and practitioners who preserved and transmitted this precious knowledge.
          </p>
          <img src={sliderDalailama} alt="Tibetan medical heritage" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default HistoryTibetanMedicine;
