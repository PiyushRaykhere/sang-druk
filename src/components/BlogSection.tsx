import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import Reveal from "@/components/Reveal";

const posts = [
  { img: blog1, date: "April 7, 2026", cat: "Sowa-Rigpa", title: "Understanding Tibetan Pulse Diagnosis", desc: "Discover how traditional pulse reading reveals your body's unique constitution and guides personalized healing." },
  { img: blog2, date: "March 20, 2026", cat: "Herbal Medicine", title: "The Power of Tibetan Herbal Formulations", desc: "Learn about authentic Tibetan herbs and how they work to restore balance in body and mind." },
  { img: blog3, date: "March 5, 2026", cat: "Traditional Therapies", title: "Acupuncture & Moxibustion in Tibetan Healing", desc: "Explore how these ancient therapies relieve pain, restore energy flow, and promote natural healing." },
];

const BlogSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-section overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-spa-green/70 mb-4 font-sans font-medium">— Blog —</p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-[1.15] max-w-xl text-balance">
              Insights into <em className="italic text-spa-green">Tibetan Healing</em>
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 bg-gradient-green text-primary-foreground font-sans text-sm px-7 py-3.5 rounded-full shadow-elevated hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5 self-start md:self-auto">
            Read All Articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="group cursor-pointer bg-background rounded-2xl overflow-hidden shadow-soft card-lift border border-border/50 h-full flex flex-col">
                <div className="overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={640} height={512} />
                  <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase text-foreground font-semibold">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-sans text-muted-foreground mb-2 tracking-wider">{p.date}</p>
                  <h4 className="text-xl font-serif mb-3 group-hover:text-spa-green transition-colors leading-snug">{p.title}</h4>
                  <p className="text-muted-foreground text-sm font-sans leading-[1.75] flex-1">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-spa-green text-sm font-sans font-semibold">
                    Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
