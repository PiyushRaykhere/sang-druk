import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const preciousPills = [
  {
    name: "Rinchen Drangjor Rilnag Chenmo",
    subtitle: "The Precious Black Pill of Cold Compound — 140 Ingredients",
    desc: "Contains the precious \"Tsothel\", king of the essence, calcinated powder of precious stones and metals like gold, silver, copper, iron, sapphire, diamond, emerald, turquoise, as well as saffron, nutmeg, and chebulic myrobalan.",
    indications: "Stomach problems, excess blood in liver, abdominal cramp, burning sensation, bloody diarrhea, heart disorder, water retention, arthritis, skin disorders, chronic wound, food poisoning, leprosy, malignant tumor.",
  },
  {
    name: "Rinchen Ratna Samphel (Mutik 70)",
    subtitle: "The Precious Wish Flourishing Pill — 70 Ingredients",
    desc: "Contains precious Tsothel, calcinated powder of pearl, turquoise, coral, Zi stone, gold, silver, copper, iron, six superlative medicines, three myrobalan fruits, and saffron.",
    indications: "High blood pressure, headache, nausea, stroke, hemiplegia, facial palsy, impaired speech, loss of memory, insanity, brain concussion, heart disorder, nerve disorders, epileptic fit.",
  },
  {
    name: "Rinchen Mangjor Chenmo",
    subtitle: "The Great Precious Multiple Compound — 50 Ingredients",
    desc: "Contains Tsothel, moon light iron compound, saffron, three myrobalan fruits, turquoise, coral, pearl, clove, nutmeg, and cardamom.",
    indications: "Stomach and intestinal pain, food poisoning, abdominal cramps, contagious fever, chronic fever, blockage of channels, digestive disorders.",
  },
  {
    name: "Rinchen Tsotru Dashel Chenmo",
    subtitle: "The Great Precious Processed Moon Crystal Compound — 50 Ingredients",
    desc: "Contains Tsothel, calcite treated with milk of Zomo, six superlative medicines, mineral pitch, moon light iron compound, purified nux vomica, and conessi tree.",
    indications: "Abdominal pain, indigestion, acidic reflux, chronic gastrointestinal disorder, chronic fever, physical weakness, shortness of breath.",
  },
  {
    name: "Rinchen Yunying Nyernga",
    subtitle: "The Precious Old Turquoise 25 Compound — 25 Ingredients",
    desc: "Contains old turquoise, coral, pearl, iron powder, mineral pitch, saffron, three myrobalan fruits, clove, and vasaka.",
    indications: "Liver disorders, blood disorders, and conditions requiring turquoise-based healing compounds.",
  },
  {
    name: "Rinchen Jumar Nyernga",
    subtitle: "The Precious Red Coral Compound — 25 Ingredients",
    desc: "Contains competently detoxified coral, laguritum, pearl, calamine, saffron, nutmeg, and chebulic myrobalan.",
    indications: "Disorders related to blood and bile imbalance, inflammatory conditions.",
  },
  {
    name: "Rinchen Seljed Chakril Chenmo",
    subtitle: "The Great Precious Iron Compound of Clear Sight — 40 Ingredients",
    desc: "Contains iron powder prepared through standard detoxifying processes, three myrobalan fruits, saffron, magnet, vasaka, and mineral pitch.",
    indications: "Eye disorders, vision problems, and conditions requiring iron-based therapeutic compounds.",
  },
  {
    name: "Rinchen Tsajor Chenmo",
    subtitle: "The Great Precious Hot Compound",
    desc: "A powerful compound based on practical instructions of past eminent masters, enriched with spiritual blessing.",
    indications: "Conditions requiring warming therapeutic compounds for restoring balance.",
  },
];

const TibetanMedicine = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">Rinchen Drangjor — Precious Pills</h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            The most revered formulations in Tibetan Medicine, prepared through rigorous detoxification processes and enriched with spiritual blessing.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16 space-y-8">
        <div className="bg-section-bg rounded-lg p-6 mb-8">
          <h3 className="font-serif text-xl mb-3">Instructions for Taking Precious Pills</h3>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed">
            A night before taking the precious pill, take a light decoction prepared from seven grains of yer-ma (prickly ash) to open up body channels. Soak the pill in a small amount of hot boiled water using a clean unbroken cup, cover with a lid and leave overnight. Early the next morning before daybreak, crush and stir the content, drink the whole mixture with little hot water. Retire to bed with warm covering and sleep for about one hour to induce perspiration.
          </p>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed mt-3">
            <strong className="text-foreground">Cautions:</strong> For 3–7 days after taking the medicine, avoid fish, pork, egg, sour alcohols, onion, garlic, wild garlic, putrid food, hot spices, strenuous physical activities, daytime sleep, cold bath and sex.
          </p>
        </div>

        {preciousPills.map((pill, i) => (
          <div key={i} className="border border-border rounded-lg p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-serif mb-1">{pill.name}</h3>
            <p className="text-spa-gold text-sm font-sans mb-3">{pill.subtitle}</p>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">{pill.desc}</p>
            <div>
              <h4 className="font-serif text-base mb-2">Indications</h4>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{pill.indications}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TibetanMedicine;
