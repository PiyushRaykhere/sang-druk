import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import aboutImg from "@/assets/about-img.webp";

const tantras = [
  {
    num: "1",
    name: "The Root Tantra",
    tibetan: "Tsa Gyue",
    desc: "Presents an overview of the essence of Tibetan medicine. In six chapters, it clearly outlines the basic principles of health and disease, methods of diagnosis as well as therapeutic approaches. The text begins with a sincere homage to the Medicine Buddha in both the Sanskrit and Tibetan language, which shows respect and gratitude to all the great masters, who contributed their knowledge to the Tibetan medical system.",
  },
  {
    num: "2",
    name: "The Explanatory Tantra",
    tibetan: "Shed Gyue",
    desc: "Addresses the theoretical foundation of Tibetan medical science in a detailed and systematic manner. It begins with a description of the formation of the human body and its relation to the theory of the five elements (Jungwa Nga), followed by a description of the anatomical structures, physiological characteristics, and the final disintegration of the function of the human body. The second section contains a detailed explanation on the causes and conditions, locations, characteristic, signs and symptoms, and the classification of disorders. The dietary and behavioral principles that can be employed in the prevention and treatment of illnesses are also thoroughly explained. The subsequent chapters describe medicinal substances (their distinctive properties and their tastes and post-digestive tastes), the compounding of medicines, and medical instruments. Distinctive means of diagnosis, a range of therapeutic approaches, and the qualities and ethical principles of a physician are explained thoroughly. The Explanatory Tantra completely integrates Tibetan medical philosophy and practice and is therefore considered the most valuable of the four tantras.",
  },
  {
    num: "3",
    name: "The Oral Instruction Tantra",
    tibetan: "Man Nyag Gyue",
    desc: "Deals with practical applications of theoretical principles with regard to the treatment of general and specific disorders. The cause, the condition, the classification, the signs and symptoms, and the treatment of many disorders are clearly revealed in ninety-two chapters. It begins with the diagnosis and treatment of the three nyepa followed by abdominal disorders, febrile disorders, disorders of the upper part of body, disorders of the vital and vessel organs, genital disorders, unclassified disorders, disorders characterized by the simultaneous development of lesions, pediatric disorders, gynecological disorders, disorders caused by evil spirits, wounds and other injuries, toxicosis, geriatric disorders, and infertility. The comprehensiveness and reliability of this medical system is demonstrated by the fact that an effective treatment for every possible health-related problem can be found in the Oral Instruction Tantra.",
  },
  {
    num: "4",
    name: "The Subsequent Tantra",
    tibetan: "Chima Gyue",
    desc: "Presents the theoretical principles behind the major practical techniques, including the compounding of medicines, the application of evacuative therapies, and the use of mild and drastic external therapies. The Subsequent Tantra begins with a detailed and systematic description of pulse and urine examinations. The practical methods of compounding different forms of medicines (including decoction, powder, pill, paste, medicinal butter, calcinated powder, concentrated decoction, medicinal beverages, precious medicines and singular herbal compounds) and their uses for specific disorders as well as hot and cold disorders, in general, are comprehensively explained in great detail. A discussion of the administration of evacuative therapies such as purgation, emesis, nasal medication, mild enema, strong enema, and channel cleansing is followed by a description of the mild and strong external therapies, including compression, medicinal bath therapy, massage, moxibustion/cauterization, venesection, and surgical therapy. The Subsequent Tantra concludes with a summary of the important basic characteristics of the theory and practice of Tibetan medicine, followed by an entrustment of the Gyueshi to worthy students.",
  },
];

const FourTantras = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-primary-foreground mb-4">The Four Medical Tantras</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Gyueshi — the foundational scripture of Tibetan Medicine
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Introduction</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">The Gyueshi</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              The Gyueshi contains four Tantras, namely Tsa Gyue (the Root Tantra), Shed Gyue (the Explanatory Tantra), Man Nyag Gyue (the Oral Instruction Tantra) and Chima Gyue (the Subsequent Tantra).
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              The Gyueshi is based on the perspective that the nature of the body, disorders and remedies are all fundamentally similar. This perspective is one of the most outstanding features of Tibetan medicine, and based on this philosophical foundation Tibetan medicine will continue to offer holistic treatment for the complete well-being of humankind.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              This text shows great precision and consistency while arranging the topics sequentially. The description of medical theories and practices are based entirely on the law of nature and are made very clear.
            </p>
          </div>
          <img src={sliderMenlha} alt="Gyueshi - Four Medical Tantras" className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg" loading="lazy" />
        </div>
      </section>

      {/* The Four Tantras */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">The Four Tantras</p>
            <h2 className="text-3xl md:text-4xl leading-tight">Structure of the Gyueshi</h2>
          </div>
          <div className="space-y-8">
            {tantras.map((tantra) => (
              <div key={tantra.num} className="bg-background rounded-lg p-5 sm:p-6 lg:p-8 border border-border">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-spa-green flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold font-serif text-lg">{tantra.num}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl lg:text-2xl mb-1">{tantra.name}</h3>
                    <p className="text-spa-gold text-sm font-sans mb-3">{tantra.tibetan}</p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{tantra.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <img src={aboutImg} alt="Tibetan medical texts" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Living Tradition</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Guiding Modern Practice</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              The Four Medical Tantras remain the living foundation of Tibetan medical practice today. At Sang-Druk Tibetan Herbal Clinic, every diagnosis, treatment protocol, and herbal formulation is grounded in the principles laid out in the Gyueshi.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              The core text "Gyud-Zhi" continues to guide diagnosis, treatment, and pharmaceutical preparation — principles we practice daily to deliver authentic, effective, and compassionate care to every patient.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default FourTantras;
