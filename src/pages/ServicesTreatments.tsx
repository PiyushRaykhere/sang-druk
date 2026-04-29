import { Link } from "react-router-dom";
import { ArrowLeft, Stethoscope, Heart, Leaf, Eye, Pill, Compass, Activity, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const services = [
  { icon: Stethoscope, title: "Online & Offline Consultation", desc: "Authentic Sowa Rigpa consultation through secure video call for patients across India, offering diagnosis, treatment guidance, and Tibetan herbal remedies delivered nationwide." },
  { icon: Activity, title: "Pulse Reading Diagnosis", desc: "A fundamental diagnostic method in Tibetan medicine that evaluates the body's three constitutional energies through precise pulse reading to identify the root cause of imbalance." },
  { icon: Eye, title: "Urine Analysis Diagnosis", desc: "A traditional diagnostic method where urine characteristics such as color, vapor, bubbles, and sediment are examined to understand internal health conditions." },
  { icon: Compass, title: "Tongue, Eyes & Clinical Observation", desc: "The practitioner carefully observes the tongue, eyes, skin tone, and overall appearance to identify imbalances in Lung (wind), Tripa (bile), and Beken (phlegm)." },
  { icon: Pill, title: "Authentic Tibetan Herbal Medicine", desc: "Treatment using natural high-altitude Tibetan herbal formulations prepared according to classical Sowa Rigpa medical texts to restore internal balance." },
  { icon: Leaf, title: "Sowa Rigpa Lifestyle Guidance", desc: "Personalized dietary advice, daily routines, and lifestyle corrections based on individual body constitution to maintain health and prevent disease." },
  { icon: Heart, title: "External Tibetan Therapies", desc: "Traditional treatments including acupuncture, moxibustion, cupping, and venesection designed to improve circulation and release energy blockages." },
  { icon: Shield, title: "Chronic Disease & Pain Management", desc: "Holistic treatment approach for conditions such as joint pain, digestive disorders, fatigue, stress, and hormonal imbalance." },
  { icon: Sparkles, title: "Preventive Health & Wellness Care", desc: "Focus on maintaining long-term health through early diagnosis, herbal medicine, and lifestyle balance." },
];

const ServicesTreatments = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-52 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">Services & Treatments</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            True healing arises when compassion meets wisdom, restoring balance in body, energy, and mind.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
        <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-12 max-w-3xl">
          Welcome to Sang-Druk Tibetan Herbal Clinic — Indore's first specialized Sowa Rigpa (Tibetan Medicine) clinic. We provide personalized diagnosis through traditional pulse reading and urine analysis, followed by treatment using authentic Tibetan herbal formulations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-section-bg rounded-lg p-6 hover:shadow-md transition-shadow">
              <s.icon className="w-8 h-8 text-spa-green mb-4" />
              <h3 className="text-lg font-serif mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicesTreatments;
