import { Heart, ShieldCheck, Leaf, Users, Award } from "lucide-react";

const items = [
  { icon: Heart, label: "500+ Patients Healed" },
  { icon: ShieldCheck, label: "Certified Sowa-Rigpa" },
  { icon: Leaf, label: "100% Natural Herbs" },
  { icon: Users, label: "Trusted by Families" },
  { icon: Award, label: "Men-Tsee-Khang Trained" },
];

const LogoStrip = () => {
  return (
    <section className="relative py-8 bg-gradient-card border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-14">
          {items.map((item, i) => (
            <div key={i} className="group flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
              <span className="w-9 h-9 rounded-full bg-gradient-gold-soft flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-4 h-4 text-spa-green" />
              </span>
              <span className="font-sans text-xs tracking-wide font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
