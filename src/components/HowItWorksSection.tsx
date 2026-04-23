import Reveal from "@/components/Reveal";

const steps = [
  { num: "01", title: "Pulse & Urine Diagnosis", desc: "Traditional Tibetan diagnostic methods to understand your unique constitution and health condition." },
  { num: "02", title: "Personalized Treatment", desc: "A tailored plan combining herbal medicine, therapies, and lifestyle guidance based on your diagnosis." },
  { num: "03", title: "Healing Therapies", desc: "Acupuncture, moxibustion, cupping, venesection, and authentic Tibetan herbal medicine treatments." },
  { num: "04", title: "Lasting Wellness", desc: "Individualized diet and lifestyle guidance to maintain balance in body, mind, and life long-term." },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-16">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— How It Works —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-balance">
            Your Path to <em className="italic text-spa-green">Balanced Healing</em>
          </h2>
        </div>
        <p className="text-muted-foreground text-[15px] font-sans max-w-md leading-[1.8]">
          From traditional diagnosis to personalized treatment, experience the complete journey of Tibetan Sowa-Rigpa healing at Sang-Druk.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-spa-green/30 to-transparent" />

        {steps.map((step, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="relative bg-gradient-card rounded-2xl p-7 lg:p-8 shadow-soft border border-border/50 card-lift h-full">
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-green text-primary-foreground shadow-elevated mb-5">
                <span className="text-lg font-serif">{step.num}</span>
              </div>
              <h4 className="text-lg lg:text-xl font-serif mb-3 leading-snug">{step.title}</h4>
              <p className="text-muted-foreground text-sm font-sans leading-[1.75]">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
