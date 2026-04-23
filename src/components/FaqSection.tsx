import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

const faqs = [
  { q: "What is Sowa-Rigpa?", a: "Sowa-Rigpa is the traditional Tibetan system of medicine with over 2,500 years of history. It focuses on restoring balance in body, mind, and life through herbal medicine, therapies, and lifestyle guidance." },
  { q: "How does Tibetan pulse diagnosis work?", a: "Our practitioners read your pulse at specific points on the wrist to assess the state of your internal organs, energy channels, and overall constitution. This guides personalized treatment." },
  { q: "What treatments do you offer?", a: "We offer Tibetan herbal medicine, acupuncture, moxibustion, cupping, venesection, and individualized diet and lifestyle guidance." },
  { q: "Is this clinic suitable for first-time patients?", a: "Absolutely! We welcome everyone. Our practitioners will explain each step of the diagnosis and treatment process to ensure your comfort." },
  { q: "Are the herbal medicines safe?", a: "Yes, all our Tibetan herbal formulations are authentic and prepared according to traditional methods. Sang-Druk aims to provide safe and effective healing." },
  { q: "Do I need a referral to visit?", a: "No referral is needed. You can directly book a consultation with us by calling 070189 22152." },
  { q: "Where is the clinic located?", a: "We are located at Ground Floor, AG 296, Vijay Nagar, Scheme No 74, Indore, Madhya Pradesh 452010." },
  { q: "How long does a consultation take?", a: "An initial consultation with pulse reading and urine analysis typically takes 30-45 minutes, followed by a personalized treatment plan." },
];

const FaqSection = () => {
  return (
    <section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-16">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— FAQ —</p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-balance">
            Frequently Asked <em className="italic text-spa-green">Questions</em>
          </h2>
        </div>
        <p className="text-muted-foreground text-[15px] font-sans max-w-md leading-[1.8]">
          Learn more about Tibetan Sowa-Rigpa healing, our treatments, and what to expect at Sang-Druk.
        </p>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 bg-gradient-card rounded-3xl p-6 lg:p-10 shadow-soft border border-border/50">
          <Accordion type="multiple" className="space-y-0">
            {faqs.slice(0, 4).map((f, i) => (
              <AccordionItem key={i} value={`left-${i}`} className="border-b border-border/60 last:border-b-0 md:last:border-b">
                <AccordionTrigger className="text-left font-sans text-sm py-5 hover:no-underline hover:text-spa-green transition-colors">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-sans leading-[1.8] pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="multiple" className="space-y-0">
            {faqs.slice(4).map((f, i) => (
              <AccordionItem key={i} value={`right-${i}`} className="border-b border-border/60 last:border-b-0">
                <AccordionTrigger className="text-left font-sans text-sm py-5 hover:no-underline hover:text-spa-green transition-colors">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-sans leading-[1.8] pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
};

export default FaqSection;
