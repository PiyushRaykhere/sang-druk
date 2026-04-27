import Reveal from "@/components/Reveal";

const WelcomeSection = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-section">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-radial-mint blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-gold-soft blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal className="text-center max-w-4xl mx-auto">
          <p className="text-lg tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Welcome —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] leading-[1.15] mb-8 text-balance">
            Welcome to <em className="italic text-spa-green">Sang-Dr̈uk Tibetan Herbal Clinic</em>
          </h2>

          <div className="space-y-5 text-muted-foreground text-[15px] font-sans leading-[1.8] max-w-3xl mx-auto">
            <p>
              <strong className="text-foreground">Sang-Druk Tibetan Herbal Clinic</strong> is Indore's first dedicated centre for the ancient science of <strong className="text-foreground">Sowa Rigpa (Traditional Tibetan Medicine)</strong>. We are honoured to bring the profound healing wisdom of the Himalayas to the heart of India - Madhya Pradesh — marking a meaningful step in sharing this 2,500-year-old medical tradition.
            </p>
            <p>
              Rooted in the principles of balance, prevention, and holistic wellness, Sowa Rigpa focuses on harmonizing the body’s three vital energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm)—to restore health, prevent disease, and promote long-lasting well-being. Rather than treating only symptoms, Tibetan Medicine addresses the root cause of illness through personalized diagnosis and natural healing methods
            </p>
            <p>
              The preservation and development of Tibetan Medicine in India gained remarkable strength in 1961 when His Holiness the 14th Dalai Lama founded <strong className="text-foreground">Men-Tsee-Khang</strong> (The Tibetan Medical and Astro Institute).  This institution was established to preserve, promote, and practice Tibetan Medicine and Astrology while improving public health, awareness, and accessible healthcare for all—regardless of caste, creed, or color.
            </p>
            <p>
              Continuing this rich and compassionate tradition, Sang-Dr̈uk Tibetan Herbal Clinic proudly brings authentic Tibetan healing to Indore, Madhya Pradesh, serving as one of Central India’s pioneering centers for Sowa Rigpa and traditional Tibetan healthcare.
            </p>
            <p>
              Our mission is to offer safe, natural, and personalized treatment through the timeless wisdom of Tibetan medicine—helping every patient achieve true balance, health, and harmony             </p>
          </div>

          <div className="mt-12 inline-block glass rounded-2xl px-8 py-6 shadow-elevated">
            <p className="text-foreground font-semibold font-serif text-lg md:text-xl italic leading-relaxed text-balance">
              "True healing goes beyond treating symptoms; it begins when wisdom and compassion unite to restore balance, harmony, and lasting well-being."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WelcomeSection;
