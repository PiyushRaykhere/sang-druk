import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import logo from "@/assets/logo.webp";
import aboutImg from "@/assets/about-img.webp";
import directorImg from "@/assets/director.webp";
import sliderMenlha from "@/assets/slider-menlha.webp";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">Who We Are</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Authentic Tibetan healing rooted in the wisdom of Sowa Rigpa
          </p>
        </div>
      </div>

      {/* About Tibetan Medicine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">About Tibetan Medicine (Sowa Rigpa)</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">A 2,500-Year Healing Science</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              Tibetan Medicine, also known as Sowa Rigpa, is one of the world's oldest traditional healing systems, with a history of more than 2,500 years. It is a complete science of healing based on restoring balance between the body, mind, and energy for long-term health and well-being.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              At the heart of Tibetan Medicine are the three vital energies of the body:
            </p>
            <ul className="text-muted-foreground text-sm font-sans space-y-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span><span><strong className="text-foreground">Lung (Wind)</strong> – governs movement, the nervous system, breathing, and mental activity</span></li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span><span><strong className="text-foreground">Tripa (Bile)</strong> – controls body heat, digestion, metabolism, and liver function</span></li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span><span><strong className="text-foreground">Beken (Phlegm)</strong> – maintains stability, strength, immunity, and body fluids</span></li>
            </ul>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              According to Sowa Rigpa, disease develops when these three energies become imbalanced due to improper diet, unhealthy lifestyle, stress, emotional disturbances, seasonal changes, or environmental factors.
            </p>
          </div>
          <img src={sliderMenlha} alt="Tibetan Medicine" className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg" loading="lazy" />
        </div>

        <div className="mt-10">
          <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
            Unlike systems that focus only on symptoms, Tibetan Medicine identifies and treats the root cause of illness. Treatment aims to restore natural balance through:
          </p>
          <ul className="text-muted-foreground text-sm font-sans space-y-2 mb-6">
            <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Authentic Tibetan herbal medicine</li>
            <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Personalized dietary guidance</li>
            <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Lifestyle correction and preventive care</li>
            <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> External therapies such as cupping therapy, moxibustion, Horme therapy, and other traditional healing methods</li>
          </ul>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed">
            Tibetan Medicine not only supports healing from disease but also focuses on prevention, strengthening immunity, improving vitality, and creating harmony between body, mind, and life energy. Its goal is complete healing, long-term wellness, and a naturally balanced life.
          </p>
        </div>
      </section>

      {/* What is Sang-Druk */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <img src={aboutImg} alt="Sang-Druk Clinic" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">What is Sang-Druk?</p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-5">Six Purified Healing Essences</h2>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
                The name Sang-Druk (བཟང་དྲུག) reflects the true essence of Tibetan healing and holistic wellness.
              </p>
              <ul className="text-muted-foreground text-sm font-sans space-y-2 mb-4">
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span><span><strong className="text-foreground">"Sang"</strong> represents purification, cleansing, and healing</span></li>
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span><span><strong className="text-foreground">"Druk"</strong> symbolizes the six essential healing elements connected to the body's vital organs and the restoration of internal balance</span></li>
              </ul>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                Together, Sang-Druk means "Six Purified Healing Essences," representing a natural, balanced, and complete system of healing rooted in the wisdom of Sowa Rigpa. These six healing elements symbolize harmony of the body, energy, mind, and life while helping balance the three vital energies—Lung, Tripa, and Beken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Six Healing Elements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">The Six Healing Elements</p>
          <h2 className="text-3xl md:text-4xl leading-tight">Medicinal Ingredients of Our Logo</h2>
          <p className="text-muted-foreground text-sm font-sans mt-3 max-w-2xl mx-auto">
            The six medicinal ingredients forming the symbolic shape of the number "6" in our logo represent the six healing essences of Sang-Druk.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: "1", name: "Bamboo Silica", desc: "Supports the Lungs and helps regulate Tripa (Bile), promoting respiratory health, reducing excess heat, and strengthening internal vitality." },
            { num: "2", name: "Saffron / Safflower", desc: "Connected to the Liver, these herbs balance Tripa (Bile), supporting blood purification, liver function, and emotional stability." },
            { num: "3", name: "Clove", desc: "Linked to the Life-Channel, Clove helps balance Lung (Wind), improving circulation, warmth, nerve strength, and mental clarity." },
            { num: "4", name: "Green Cardamom", desc: "Supports the Kidneys and helps regulate Beken (Phlegm), improving digestion, kidney function, and reducing excess coldness and heaviness." },
            { num: "5", name: "Nutmeg", desc: "Associated with the Heart, Nutmeg balances Lung (Wind), strengthening heart energy, improving sleep, calming the mind, and supporting emotional well-being." },
            { num: "6", name: "Black Cardamom", desc: "Connected to the Spleen, it helps regulate Beken (Phlegm), supporting digestive fire, metabolism, and internal strength." },
          ].map((item) => (
            <div key={item.num} className="border border-border rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-spa-green flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold font-sans text-sm">{item.num}</span>
              </div>
              <h4 className="font-serif text-lg mb-2">{item.name}</h4>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-section-bg rounded-lg p-6">
          <h4 className="font-serif text-xl mb-3">Chebula (Haritaki) – The King of Tibetan Medicine</h4>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed">
            Chebula holds a special place in Tibetan Medicine as the King of Medicine. It symbolizes complete balance and harmony, containing the essence of the five natural elements and supporting all three energies—Lung, Tripa, and Beken. It represents complete healing, longevity, vitality, and holistic wellness.
          </p>
        </div>
      </section>

      {/* Logo Philosophy */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Our Logo Philosophy</p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-5">A Visual Expression of Tibetan Healing</h2>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
                The Sang-Druk logo is a visual expression of Tibetan healing philosophy and spiritual harmony. It represents:
              </p>
              <ul className="text-muted-foreground text-sm font-sans space-y-2">
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Six medicinal ingredients forming the shape of the number "6," symbolizing the six healing essences</li>
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Body, Speech, and Mind, the foundation of holistic health and spiritual well-being</li>
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Two supportive hands, reflecting compassion, care, protection, and the healing process</li>
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Golden outlines inspired by traditional Thangka art, expressing Tibetan spiritual richness</li>
                <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Natural vibrant colors, symbolizing the vitality and healing power of herbal medicine</li>
              </ul>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mt-4">
                The integration of Tibetan and English text represents the union of ancient wisdom and modern healthcare—preserving tradition while making healing accessible to all.
              </p>
            </div>
            <img src={logo} alt="Sang-Druk Logo" className="w-52 h-52 object-contain mx-auto" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Our Mission</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Bringing Authentic Tibetan Healing to India</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Sang-Druk Tibetan Herbal Clinic is dedicated to bringing authentic Tibetan healing to the heart of India through compassionate, personalized, and natural healthcare. With the experience of a former doctor of Men-Tsee-Khang (The Tibetan Medical and Astro Institute), we follow the true lineage of Tibetan Medicine and focus on treating the root cause of illness rather than only managing symptoms. Our mission is to restore balance, promote preventive healthcare, and help every patient achieve lasting wellness through the timeless wisdom of Sowa Rigpa.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Aims & Objectives</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Our Commitment</h2>
            <ul className="text-muted-foreground text-sm font-sans space-y-2">
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Preserving, promoting, and practicing Sowa Rigpa (Tibetan Medicine)</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Providing holistic, natural, and preventive healthcare</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Improving health, hygiene, and overall well-being of individuals and communities</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Offering accessible healthcare regardless of caste, creed, or background</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Creating awareness about healthy lifestyle practices and disease prevention</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Safeguarding the rich Himalayan medical heritage of Tibetan Medicine</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Introducing authentic Tibetan healing traditions to Indore and Central India</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Building a stable and sustainable foundation for long-term healthcare service and community benefit</li>
            </ul>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mt-4">
              Our purpose is not only to treat illness, but to serve humanity through compassionate healing, traditional wisdom, and holistic well-being.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default WhoWeAre;
