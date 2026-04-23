import Reveal from "@/components/Reveal";

const WelcomeSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-section">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-radial-mint blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-gold-soft blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal className="text-center max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Welcome —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] leading-[1.15] mb-8 text-balance">
            Welcome to Sang-Druk <em className="italic text-spa-green">Tibetan Herbal Clinic</em>
          </h2>

          <div className="space-y-5 text-muted-foreground text-[15px] font-sans leading-[1.8] max-w-3xl mx-auto">
            <p>
              <strong className="text-foreground">Sang-Druk Tibetan Herbal Clinic</strong> is Indore's first dedicated centre for the ancient science of <strong className="text-foreground">Sowa Rigpa (Tibetan Medicine)</strong>. We are honoured to bring the profound healing wisdom of the Himalayas to Madhya Pradesh — a meaningful step in sharing this 2,500-year-old medical tradition.
            </p>
            <p>
              In 1959, following the events in Tibet, His Holiness the Dalai Lama established the <strong className="text-foreground">Men-Tsee-Khang</strong> in 1961 to preserve Tibetan medicine and astrology. At Sang-Druk, each patient receives a detailed diagnosis through traditional methods such as pulse reading and urine analysis, followed by carefully selected herbal medicines and therapies.
            </p>
          </div>

          <div className="mt-12 inline-block glass rounded-2xl px-8 py-6 shadow-elevated">
            <p className="text-foreground font-serif text-lg md:text-xl italic leading-relaxed text-balance">
              "True healing goes beyond treating symptoms — it arises when wisdom and compassion come together to restore balance."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WelcomeSection;
