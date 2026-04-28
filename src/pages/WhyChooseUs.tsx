import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import directorImg from "@/assets/director.webp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import whyChoose1 from "@/assets/why-choose-1.webp";
import whyChoose2 from "@/assets/why-choose-2.webp";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">Why Choose Us</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Authentic Tibetan healthcare rooted in 2,500 years of Sowa Rigpa wisdom
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Why Choose Us & Trust Us</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Compassionate Care Backed by Ancient Wisdom</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              At Sang-Druk Tibetan Herbal Clinic, we provide authentic Tibetan healthcare rooted in the ancient wisdom of Sowa Rigpa (Traditional Tibetan Medicine)—a healing system practiced for more than 2,500 years. Our approach combines traditional knowledge, compassionate care, and personalized treatment to support complete physical, mental, and emotional well-being.
            </p>
          </div>
          <img src={whyChoose1} alt="Tibetan herbal clinic" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
        </div>
      </section>

      {/* Key Pillars */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Our Strengths</p>
            <h2 className="text-3xl md:text-4xl leading-tight">What Sets Us Apart</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Authentic Tibetan Medical Care",
                desc: "We follow the true principles of Tibetan Medicine by focusing on the root cause of disease, not just the symptoms. Every patient receives an individual diagnosis based on traditional pulse reading, urine analysis, body constitution, and overall health condition. Our treatments are natural, safe, and personalized, using authentic Tibetan herbal medicine, dietary guidance, lifestyle correction, and traditional external therapies to restore balance and promote lasting wellness.",
              },
              {
                title: "Experienced Men-Tsee-Khang Tradition",
                desc: "With the experience of a former doctor of Men-Tsee-Khang (The Tibetan Medical and Astro Institute), we bring genuine Tibetan medical care with strong clinical knowledge and practical expertise. Men-Tsee-Khang is one of the most respected institutions for Tibetan Medicine, founded by His Holiness the 14th Dalai Lama to preserve and promote authentic Sowa Rigpa. Our clinic proudly continues this trusted lineage of healing.",
              },
              {
                title: "Specialized Care for Chronic & Lifestyle Diseases",
                desc: "We provide holistic care for chronic, complex, and lifestyle-related health conditions, including digestive disorders, stress-related conditions, joint pain, hormonal imbalance, skin diseases, sleep disorders, women's health concerns, and general weakness caused by imbalance in the body's energies. Our goal is not temporary relief, but long-term healing and sustainable health improvement.",
              },
              {
                title: "Prevention, Immunity & Long-Term Wellness",
                desc: "Tibetan Medicine places strong emphasis on prevention. We help patients strengthen immunity, improve internal balance, and maintain health before disease becomes severe. By creating harmony between body, mind, and energy, we support a healthier, stronger, and more balanced life.",
              },
              {
                title: "Compassionate Patient-Centered Healing",
                desc: "At Sang-Druk, healing is more than treatment—it is trust, compassion, and complete well-being. We believe every patient deserves time, understanding, and respectful care. Our mission is to guide each person toward better health through natural healing, genuine care, and the timeless wisdom of Tibetan Medicine.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border">
                <div className="w-8 h-8 rounded-full bg-spa-green flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold font-sans text-xs">{i + 1}</span>
                </div>
                <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <img src={whyChoose2} alt="Tibetan treatment" className="w-full h-full min-h-48 object-cover rounded-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-start">
          <img src={directorImg} alt="Dr. Sonam Tsering" className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg" loading="lazy" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Doctor Profile</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-2">Dr. Sonam Tsering</h2>
            <p className="text-spa-gold font-sans text-sm mb-1">Former Doctor of Men-Tsee-Khang</p>
            <p className="text-muted-foreground font-sans text-sm mb-5">BSRMS (Bachelor of Sowa-Rigpa Medicine & Surgery)</p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              Dr. Sonam Tsering is a trained and experienced Tibetan medical professional with a deep commitment to the healing traditions of Sowa Rigpa (Traditional Tibetan Medicine). He completed his Bachelor of Sowa-Rigpa Medicine & Surgery (BSRMS) from Men-Tsee-Khang in 2018, where he received extensive education and clinical training in Tibetan Medicine, including diagnosis, herbal pharmacology, disease management, and holistic patient care.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              His studies were further enriched through traditional spiritual and philosophical learning at Gurmey Tantric Monastery, South India, with a focus on body, mind, and life care. With more than 5 years of professional experience in Tibetan Herbal Medicine, Dr. Sonam combines deep traditional knowledge with practical clinical expertise to provide safe, effective, and compassionate healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Career Journey</p>
            <h2 className="text-3xl md:text-4xl leading-tight">Professional Experience</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                role: "Men-Tsee-Khang Pharmacy Department",
                period: "April 2019 – Present",
                desc: "Began professional practice under the guidance of senior doctors including Dr. Jamyang Tashi and Dr. Penpa. Gained extensive experience in Tibetan medicine preparation, traditional pharmacology, herbal formulation, and medicinal quality control.",
              },
              {
                role: "Doctor-in-Charge – Pill Coating Section",
                period: "3 Years",
                desc: "Managed the pill coating section with responsibility for quality control, ensuring high standards in medicinal preparation and production.",
              },
              {
                role: "Clinical Reliever Doctor-in-Charge – Bomdila Men-Tsee-Khang",
                period: "September 2023 – December 2023",
                desc: "Provided clinical consultation and treatment for a wide range of medical conditions while strengthening practical skills in patient diagnosis and care.",
              },
              {
                role: "Clinical Doctor-in-Charge – Jaigaon Men-Tsee-Khang",
                period: "January 2024 – March 2024",
                desc: "Served patients through authentic Tibetan medical treatment and expanded experience in managing chronic and complex health conditions.",
              },
              {
                role: "Acupuncture Training",
                period: "April – May 2024",
                desc: "Completed professional acupuncture training under Dr. Kayber in Dehradun, integrating acupuncture into a broader holistic healing approach.",
              },
              {
                role: "Doctor-in-Charge – Jispa Men-Tsee-Khang",
                period: "June – September 2024",
                desc: "Continued advanced clinical practice, treating patients and further strengthening practical expertise in Tibetan Medicine. Conducted medical camps in village and remote rural areas. Also engaged in medicinal plant research and field studies in high-altitude regions known for rich Himalayan medicinal plants.",
              },
              {
                role: "Professional Health Consultant – My Tibet Clinic, Kazakhstan",
                period: "2025",
                desc: "Worked as a professional health consultant, extending Tibetan medical services internationally and supporting holistic patient care through traditional healing methods.",
              },
              {
                role: "Founder & Chief Medical Officer (CMO) – Sang-Druk Tibetan Herbal Clinic, India",
                period: "Present",
                desc: "At Sang-Druk Tibetan Herbal Clinic, Dr. Sonam Tsering combines authentic Tibetan medical lineage, extensive clinical experience, and compassionate healing to provide trusted healthcare rooted in the ancient science of Sowa Rigpa.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-spa-green mt-1 shrink-0" />
                  {i < 7 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                </div>
                <div className="pb-6">
                  <h4 className="font-serif text-base mb-1">{item.role}</h4>
                  <p className="text-spa-gold text-xs font-sans mb-2">{item.period}</p>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default WhyChooseUs;
