import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, BookOpen, Leaf, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InquiryForm from "@/components/InquiryForm";
import logo from "@/assets/logo.webp";
import directorImg from "@/assets/director.webp";
import aboutImg from "@/assets/about-img.webp";
import sliderProduction from "@/assets/slider-production.webp";
import sliderQc from "@/assets/slider-qc.webp";
import sliderMenlha from "@/assets/slider-menlha.webp";

const AboutSangDruk = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-3">About Sang-Druk</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Compassionate Healing through the Wisdom of Tibetan Medicine
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">WHO WE ARE</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Indore's First Tibetan Medicine Clinic</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-3">
              Sang-Druk Tibetan Herbal Clinic brings the 2,500-year-old Tibetan wisdom of Sowa Rigpa to Madhya Pradesh. We provide personalized diagnosis through traditional pulse reading and urine analysis, followed by treatment using authentic Tibetan herbal medicine.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-5">
              "Sang" refers to purification and healing, while "Druk" represents six essential healing elements. Together, Sang-Druk (བཟང་ དྲུག) symbolizes "Six Purified Healing Essences" — a natural and balanced system of healing restoring harmony of body, energy, mind and life.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=917018922152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-spa-green text-primary-foreground font-sans text-sm px-6 py-3 rounded-full hover:bg-spa-green-light transition-colors"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={aboutImg} alt="Tibetan herbal medicine" className="w-full h-44 object-cover rounded-lg" loading="lazy" />
            <img src={sliderProduction} alt="Medicine production" className="w-full h-44 object-cover rounded-lg" loading="lazy" />
            <img src={sliderQc} alt="Quality control" className="w-full h-44 object-cover rounded-lg" loading="lazy" />
            <div className="bg-spa-green rounded-lg p-5 flex flex-col justify-center text-primary-foreground">
              <span className="text-3xl font-serif">2,500+</span>
              <span className="text-xs font-sans text-primary-foreground/70">Years of Sowa-Rigpa Tradition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-section-bg py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src={sliderMenlha} alt="The Great Medicinal Buddha" className="w-full h-72 object-cover rounded-lg" loading="lazy" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">OUR JOURNEY</p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-5">Rooted in Ancient Wisdom</h2>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-3">
                The journey of Tibetan medicine into India is deeply connected with history. In 1959, following the Chinese invasion of Tibet, His Holiness the Dalai Lama and thousands of Tibetans came into exile in India.
              </p>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-3">
                The Men-Tsee-Khang (Tibetan Medical and Astro Institute) was established in 1961 under His Holiness's guidance to preserve Tibetan culture, medicine, and astrology. Our practitioners are trained in this noble tradition.
              </p>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                The core text "Gyud-Zhi" (The Four Medical Tantras) continues to guide diagnosis, treatment, and pharmaceutical preparation — principles we practice daily at Sang-Druk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">LEADERSHIP</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Meet Our Director</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-3">
              Our clinic is led by an experienced practitioner trained at the prestigious Men-Tsee-Khang institution, bringing years of expertise in traditional Tibetan diagnosis and herbal medicine formulation.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              With deep compassion and dedication, our director ensures every patient receives personalized care rooted in the authentic principles of Sowa Rigpa — combining ancient knowledge with modern understanding for holistic well-being.
            </p>
          </div>
          <img src={directorImg} alt="Director of Sang-Druk Clinic" className="w-full h-80 object-cover rounded-lg" loading="lazy" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-section-bg py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">OUR PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl leading-tight">Healing Body, Energy & Mind</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: "Compassionate Care", desc: "Every patient is treated with genuine compassion, respecting their unique constitution and needs." },
              { icon: Leaf, title: "Natural Healing", desc: "100% natural herbal medicines sourced from the Himalayas with no synthetic chemicals or side effects." },
              { icon: BookOpen, title: "Ancient Wisdom", desc: "Guided by the Four Medical Tantras (Gyueshi), a 2,500-year-old holistic medical tradition." },
              { icon: Shield, title: "Holistic Balance", desc: "Addressing root causes through the balance of Lung (wind), Tripa (bile), and Beken (phlegm)." },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-spa-green/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-spa-green" />
                </div>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Meaning */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={logo} alt="Sang-Druk Logo" className="w-52 h-52 object-contain mx-auto" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">OUR IDENTITY</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">The Logo Symbolizes</h2>
            <ul className="text-muted-foreground text-sm font-sans space-y-2 list-disc pl-5">
              <li>Six medicinal ingredients forming the shape of "6," symbolizing the six healing essences</li>
              <li>Body, Speech, and Mind — the foundation of holistic health</li>
              <li>Two supportive hands reflecting compassion and the healing process</li>
              <li>Golden outlines inspired by traditional Thangka art</li>
              <li>Vibrant natural colours symbolizing herbal medicine's vitality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions + CTA */}
      <section className="bg-spa-green py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-3 font-sans">WHAT WE TREAT</p>
              <h2 className="text-3xl md:text-4xl leading-tight text-primary-foreground mb-6">Conditions We Treat</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Digestive Problems (IBS, Gastritis)",
                  "Joint Pain, Arthritis & Back Pain",
                  "Stress, Anxiety & Sleep Disorders",
                  "Skin Diseases (Psoriasis, Eczema)",
                  "Respiratory Issues (Asthma, Allergy)",
                  "Kidney & Liver Disorders",
                  "Migraine & Neurological Conditions",
                  "Hormonal & Women's Health Issues",
                ].map((c, i) => (
                  <p key={i} className="text-primary-foreground/80 text-sm font-sans flex items-start gap-2">
                    <span className="text-spa-gold mt-0.5">•</span> {c}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-serif text-xl mb-4 text-foreground">Send Us an Inquiry</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AboutSangDruk;
