import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import buddhaImg from "@/assets/buddha-medicine.webp";
import sliderMenlha from "@/assets/slider-menlha.webp";

const MedicineBuddha = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">Medicine Buddha</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Bhaishajyaguru — the Teacher of Medicine and King of Lapis Lazuli Light
          </p>
        </div>
      </div>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">About the Medicine Buddha</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Sangye Menla — Vaidurya</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              The medicine Buddha, the Teacher of Medicine and the king of Lapis Lazuli Light (Bhaishajyaguru, Sangye Menla, Vaidurya). His radiant body is azure blue. His left hand is in the meditation mudra and holds a begging bowl full of long life nectar in his lap.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              As a sign that he gives protection from illness, his right hand is outstretched in the gesture of giving and holds the "great medicine", the myrobalan plant (a-ru-ra).
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Following verses is reprint from Chagmed Rinpoche's Hymn in Praise of the Medicinal Buddha.
            </p>
          </div>
          <img src={buddhaImg} alt="Medicine Buddha" className="w-full h-72 sm:h-80 md:h-96 object-contain rounded-lg" loading="lazy" />
        </div>
      </section>

      {/* Praise */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Hymn in Praise</p>
            <h2 className="text-3xl md:text-4xl leading-tight">Namo Maha Beshajeya</h2>
            <p className="text-spa-gold font-sans text-sm mt-2">Honor to the Great Medicinal Buddha!</p>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground text-sm font-sans leading-relaxed italic mb-6">
              Whoever due to wrong ideas and attitudes<br />
              Is bound to fall into states of suffering<br />
              If he even hears the sound of your sacred name,<br />
              He will not be reborn in sorrow<br />
              And will reach the state of immaculate Purity.
            </p>
          </div>
        </div>
      </section>

      {/* Mantra */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Sacred Practice</p>
          <h2 className="text-3xl md:text-4xl leading-tight">Medicine Buddha Mantra</h2>
        </div>

        <div className="bg-spa-green rounded-lg p-5 sm:p-8 text-center mb-8">
          <p className="text-primary-foreground font-serif text-base leading-loose mb-4">
            "Om Namo Bhagavate Beishajaye Guru Vaidurya Prabha Rajaya Tathagataya Arahate Samayak Sam Buddhaya Tadyatha Om Beishajaye Beishajaye Maha Beishajaye Beishajaye Rajaya Samungate Svaha"
          </p>
          <div className="border-t border-primary-foreground/20 pt-4 mt-4">
            <p className="text-primary-foreground/80 font-sans text-sm">
              Tad-ya-ta: Om Be-kan-dze/ Be-kan-dze/ Ma-ha Be-kan-dze/ Ra-dza/ Sa-mung-ga-te So-ha
            </p>
          </div>
        </div>

        {/* Tibetan Script */}
        <div className="bg-section-bg rounded-lg p-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5 font-sans">Tibetan Text</p>
          <div className="text-foreground font-serif text-base leading-loose space-y-2" lang="bo">
            <p>ཐུགས་རྗེ་ཀུན་ལ་སྙོམས་པའི་བཅོམ་ལྡན་འདས། །</p>
            <p>མཚན་ཙམ་ཐོས་པས་ངན་འགྲོའི་སྡུག་བསྔལ་སེལ། །</p>
            <p>དུག་གསུམ་ནད་སེལ་སངས་རྒྱས་སྨན་གི་བླ། །</p>
            <p>བཻ་ཌཱུརྻ་ཡི་འོད་ལ་ཕྱག་འཚལ་ལོ། །</p>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <p className="text-muted-foreground font-sans text-xs leading-loose">
              ཨོཾ་ན་མོ་བྷ་ག་ཝ་ཏེ། བྷཻ་ཥ་ཛེ་གུ་རུ་བཻཌཱུརྱ་པྲ་བྷ་རཱ་ཛ་ཡ། ཏ་ཐཱ་ག་ཏཱ་ཡ། ཨརྷཏེ་སཾམྱཀཾ་བུདྡྷ་ཡ།
              ཏདྱཐཱ། ཨོཾ་བྷཻ་ཥ་ཛེ་བྷཻ་ཥ་ཛེ། མ་ཧཱ་བྷཻ་ཥ་ཛེ་བྷཻ་ཥ་ཛེ་རཱ་ཛ་ས་མུངྒ་ཏེ་སྭཱ་ཧཱ།
            </p>
          </div>
        </div>
      </section>

      {/* Praise verses */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Tibetan Verses of Praise</p>
            <h2 className="text-3xl md:text-4xl leading-tight">Praises to the Medicine Buddha</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={sliderMenlha} alt="Medicine Buddha thangka" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
            <div className="space-y-4 text-muted-foreground text-sm font-sans leading-relaxed" lang="bo">
              <p>འཚོ་མཛད་སྨན་པའི་རྒྱལ་པོ་བཅོམ་ལྡན་འདས། །</p>
              <p>དུག་གསུམ་ནད་སེལ་སངས་རྒྱས་སྨན་གི་བླ། །</p>
              <p>སྐུ་མདོག་མཐིང་ག་བེཌཱུརྱ་ཡི་འོད། །</p>
              <p>སྤྲུལ་པའི་སྐུ་ལ་མཚན་དང་དཔེ་བད་ལྡན། །</p>
              <p>རླུང་མཁིས་བད་ཀན་ནད་ཀིས་གདུངས་པ་ལ། །</p>
              <p>ནད་ཀི་གཉེན་པོ་ཕྱག་གཡས་ཨ་རུ་ར། །</p>
              <p>ཕྱག་གཡོན་བདུད་རིའི་ལྷུང་བཟེད་པར་པུ་བསམས། །</p>
              <p>བེཌཱུརྱ་ཡི་འོད་ལ་ཕྱག་འཚལ་ལོ། །</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default MedicineBuddha;
