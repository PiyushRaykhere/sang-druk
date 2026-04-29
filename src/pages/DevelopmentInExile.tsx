import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import sliderDalailama from "@/assets/slider-dalailama.webp";
import sliderProduction from "@/assets/slider-production.webp";
import sangDrukClinic from "@/assets/sang-druk-clinic-new.webp";

const DevelopmentInExile = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-primary-foreground mb-4">Development of Tibetan Medicine in Exile</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            Preservation and development of Sowa Rigpa in India
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Overview</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Preservation of Tibetan Medicine in India</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              Tibetan Medicine, known as Sowa Rigpa, is one of the world's oldest traditional healing systems, with a history of more than 2,500 years. It is a complete science of healing that focuses on restoring balance between body, mind, and energy through natural medicine, preventive care, and holistic treatment.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
              The preservation of Tibetan Medicine in India began after 1959, when His Holiness the 14th Dalai Lama and thousands of Tibetans came into exile following the political situation in Tibet. Along with the Tibetan community, there was an urgent need to protect and preserve Tibet's rich cultural heritage, including its language, religion, education, and traditional medical knowledge.
            </p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              To safeguard these ancient traditions, monasteries, schools, and important cultural institutions were reestablished in India, including centers dedicated to Tibetan Medicine and Astrology.
            </p>
          </div>
          <img src={sliderDalailama} alt="His Holiness the Dalai Lama" className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg" loading="lazy" />
        </div>
      </section>

      {/* Men-Tsee-Khang */}
      <section className="bg-section-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <img src={sliderMenlha} alt="Men-Tsee-Khang" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Establishment of Medical School</p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-5">Men-Tsee-Khang</h2>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
                The original Men-Tsee-Khang (Tibetan Medical & Astro Institute) was first established in 1916 in Lhasa, Tibet, by His Holiness the 13th Dalai Lama. After exile, His Holiness the 14th Dalai Lama re-established Men-Tsee-Khang in Dharamshala, Himachal Pradesh, India, on 23 March 1961, with the mission of preserving, promoting, and practicing Tibetan Medicine and Astrology for future generations.
              </p>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
                The institute began with one doctor, one astrologer, and ten students in two separate campuses in Dharamshala. Under the leadership of great physicians such as Dr. Yeshi Dhonden and other senior doctors, Men-Tsee-Khang became the central institution for the education, research, clinical practice, and global development of Sowa Rigpa.
              </p>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                In 1967, the Medicine and Astrology schools were merged into one institute, and in 1982, the headquarters moved to its present location in McLeod Ganj, Dharamshala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">Growth and Global Development</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5">Expanding Globally</h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-5">
              Over the years, Men-Tsee-Khang expanded into multiple departments, including:
            </p>
            <ul className="text-muted-foreground text-sm font-sans space-y-2 mb-5">
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Clinical healthcare services</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Pharmaceutical production</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Materia Medica and herbal research</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Medical and astrological education</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Herbal product development</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Academic training for doctors and astrologers</li>
              <li className="flex items-start gap-2"><span className="text-spa-gold mt-0.5">•</span> Public health awareness and preventive healthcare</li>
            </ul>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Today, Tibetan Medicine continues to grow globally, serving people from all walks of life by offering a safe, natural, and holistic approach to healthcare. Its focus on prevention, personalized treatment, and long-term wellness makes it increasingly valued around the world.
            </p>
          </div>
          <img src={sliderProduction} alt="Tibetan medicine production" className="w-full h-56 sm:h-72 object-cover rounded-lg" loading="lazy" />
        </div>
      </section>

      {/* Sang-Druk in India */}
      <section className="bg-spa-green py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-3 font-sans">Sang-Druk Tibetan Herbal Clinic</p>
              <h2 className="text-3xl md:text-4xl leading-tight text-primary-foreground mb-5">In the Heart of India</h2>
              <p className="text-primary-foreground/80 text-sm font-sans leading-relaxed mb-4">
                Continuing this rich tradition, Sang-Druk Tibetan Herbal Clinic proudly brings the 2,500-year-old healing wisdom of Sowa Rigpa (Traditional Tibetan Medicine) to the heart of India. Located in Indore, Madhya Pradesh, Sang-Druk is recognized as one of the first dedicated Tibetan Sowa Rigpa clinics in Central India and the first Tibetan Herbal Clinic in Madhya Pradesh focused on authentic Tibetan healthcare.
              </p>
              <p className="text-primary-foreground/80 text-sm font-sans leading-relaxed mb-4">
                Our clinic provides safe, natural, and personalized treatment based on the true principles of Tibetan Medicine, including pulse diagnosis, urine analysis, Tibetan herbal medicine, dietary guidance, lifestyle correction, and traditional external therapies.
              </p>
              <p className="text-primary-foreground/80 text-sm font-sans leading-relaxed">
                With the experience of a former doctor of Men-Tsee-Khang, Sang-Druk follows the authentic lineage of Tibetan Medicine and remains committed to preserving this ancient healing science while making it accessible to modern patients. Our mission is to restore balance, promote preventive healthcare, and serve humanity through compassionate healing rooted in the timeless wisdom of Tibetan Medicine.
              </p>
            </div>
            <img src={sangDrukClinic} alt="Sang-Druk clinic in Indore" className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg" loading="lazy" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DevelopmentInExile;
