import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import sliderMenlha from "@/assets/slider-menlha.webp";
import sliderDalaiLama from "@/assets/slider-dalailama.webp";
import buddhaMedicine from "@/assets/buddha-medicine.webp";

const HistoryTibetanMedicine = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl text-primary-foreground mb-4 font-serif">
            History of Tibetan Medicine
          </h1>
          <p className="text-primary-foreground/70 font-sans text-sm max-w-2xl">
            A journey through one of the world's oldest and most comprehensive healing traditions
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 prose-custom">
        {/* Introduction */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6">
            <img
              src={sliderMenlha}
              alt="Menla – Medicine Buddha"
              className="w-full md:w-64 lg:w-80 h-48 md:h-auto object-cover rounded-lg shadow-md flex-shrink-0"
              loading="eager"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4">Introduction</h2>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
                Tibetan Medicine, known as <em>Sowa Rigpa</em> (the "Science of Healing"), is one of the world's oldest and most
                sophisticated systems of traditional medicine. Practiced for over 2,500 years, it represents a profound body of
                knowledge that integrates physical, mental, and spiritual well-being into a single holistic framework.
              </p>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed">
                The history of Tibetan Medicine is inseparable from the history of Tibetan civilization itself. It evolved through
                the synthesis of indigenous Himalayan healing wisdom, Indian Ayurveda, Chinese medicine, and Persian medical
                knowledge. This integration gave rise to a unique and comprehensive medical system, meticulously recorded in the
                renowned <em>Gyushi</em> (Four Tantras) — the foundational textbook of Tibetan Medicine that remains central to
                its practice to this day.
              </p>
            </div>
          </div>
        </section>

        {/* Buddha Shakyamuni */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-start mb-6">
            <img
              src={buddhaMedicine}
              alt="Medicine Buddha"
              className="w-full md:w-56 lg:w-72 h-48 md:h-auto object-contain rounded-lg shadow-md flex-shrink-0 bg-spa-green-deep/5"
              loading="lazy"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4">Buddha Shakyamuni and the Origins</h2>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
                According to Tibetan medical tradition, the origins of medicine are traced back to the teachings of <strong>Sangye Menla</strong>,
                the Medicine Buddha, who is believed to have taught the Four Tantras in a pure realm. These teachings were
                transmitted through successive lineages of enlightened masters and ultimately reached the human realm.
              </p>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
                <strong>Buddha Shakyamuni</strong> himself is revered as a great healer. His teachings on the nature of suffering and the path
                to liberation encompass profound insights into physical and mental health. The Buddha classified diseases as rooted
                in the "three poisons" — ignorance, attachment, and aversion — which correspond to the three humors (<em>nyipa sum</em>)
                of Tibetan Medicine: <em>Lung</em> (Wind), <em>Tripa</em> (Bile), and <em>Beken</em> (Phlegm).
              </p>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed">
                The early development of Tibetan medicine was thus deeply intertwined with Buddhist philosophy and the compassionate
                aspiration to relieve the suffering of all sentient beings. Physicians were considered spiritual practitioners, and
                the healing art was regarded as a sacred vocation.
              </p>
            </div>
          </div>
        </section>

        {/* Early Tibetan Physicians */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-6 border-b border-spa-gold/30 pb-3">
            Early Tibetan Physicians and Royal Patronage
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Lha-Thothori Nyentsen (c. 5th Century CE)</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              During the reign of the 28th Tibetan king, <strong>Lha-Thothori Nyentsen</strong>, the first documented medical texts
              arrived in Tibet. Sacred objects and scriptures, including early Buddhist and medical texts, are said to have descended
              miraculously upon the royal palace of Yumbu Lakhang. Though their content could not yet be read, they were preserved
              with great reverence, marking the beginning of formal medical knowledge in Tibet.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Dung-gi Thorchog Chenmo</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              Around the same era, <strong>Dung-gi Thorchog Chenmo</strong>, a legendary physician, is credited with establishing
              early healing practices in Tibet. He was renowned for his skill in treating illnesses and his deep understanding
              of medicinal plants and remedies native to the Tibetan plateau. His knowledge formed part of the indigenous
              healing tradition that was later integrated with foreign medical systems.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Dharma King Songtsen Gampo (617–650 CE)</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              The unification of Tibet under the great <strong>Dharma King Songtsen Gampo</strong> marked a transformative period
              for Tibetan Medicine. His ministers developed the Tibetan script, enabling the translation of foreign texts. The
              king invited physicians from India, China, Persia (Dachen), and other regions to his court, facilitating the
              first major synthesis of medical knowledge in Tibet.
            </p>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              Three renowned physicians — <strong>Bharadhvaja</strong> from India, <strong>Hanthen Hankang</strong> from China,
              and <strong>Galenos</strong> from Persia — came to Tibet and collaborated to compile the <em>Sman dpyad zla ba'i rgyal po</em>
              (Lunar King of Medical Practice), a comprehensive medical text that became one of Tibet's earliest formal medical compilations.
            </p>
          </div>
        </section>

        {/* Trisong Deutsen */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <img
              src={sliderDalaiLama}
              alt="Tibetan medical heritage — His Holiness the Dalai Lama"
              className="w-full md:w-64 lg:w-72 h-48 md:h-auto object-cover rounded-lg shadow-md flex-shrink-0"
              loading="lazy"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4">Dharma King Trisong Deutsen (755–797 CE)</h2>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
                The golden age of early Tibetan Medicine came during the reign of <strong>King Trisong Deutsen</strong>, who invited
                the greatest physicians from nine countries to Tibet. A grand medical conference was held, resulting in the
                translation of numerous medical texts into Tibetan. This conference produced the <em>Somaradza</em>, a major
                compilation of medical knowledge.
              </p>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
                It was during this period that the legendary physician <strong>Yuthog Yontan Gonpo the Elder</strong> (708–833 CE)
                emerged as the greatest medical scholar Tibet had ever known. Yuthog Yontan Gonpo undertook extensive journeys
                to India where he studied under renowned Ayurvedic masters, bringing back invaluable knowledge to enrich the
                Tibetan medical tradition.
              </p>
              <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed">
                Yuthog the Elder is credited with compiling the foundational version of the <em>Gyushi</em> (Four Tantras), which
                integrated the wisdom of multiple medical traditions into a coherent and comprehensive system uniquely adapted
                to the Tibetan context.
              </p>
            </div>
          </div>
        </section>

        {/* Yuthog the Younger */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            Yuthog Yontan Gonpo the Younger (1126–1202 CE)
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            The <em>Gyushi</em> reached its definitive form through the work of <strong>Yuthog Yontan Gonpo the Younger</strong>,
            widely regarded as the "Father of Tibetan Medicine." Born into a lineage of physicians, he demonstrated extraordinary
            medical talent from childhood. He made three journeys to India and engaged in extensive study with the greatest
            Ayurvedic masters of his time.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Upon his return, Yuthog the Younger systematically revised, expanded, and completed the Four Tantras. He added
            several important chapters, incorporated new clinical observations, and integrated tantric healing practices and
            spiritual exercises into the medical curriculum. He also founded a medical school that trained hundreds of
            physicians throughout Tibet.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            The <em>Gyushi</em> (Four Tantras) as completed by Yuthog the Younger consists of:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-sans text-sm sm:text-base">
            <li><strong>Root Tantra</strong> (<em>Tsagyud</em>) — Overview of the entire system in 6 chapters</li>
            <li><strong>Explanatory Tantra</strong> (<em>Shezhey Gyud</em>) — Detailed anatomy, physiology, and pathology in 31 chapters</li>
            <li><strong>Oral Tradition Tantra</strong> (<em>Mennag Gyud</em>) — Clinical practice and treatment in 92 chapters</li>
            <li><strong>Subsequent Tantra</strong> (<em>Chima Gyud</em>) — Diagnostics, pharmacology, and therapy in 27 chapters</li>
          </ul>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed">
            Beyond his scholarly contributions, Yuthog the Younger was also a great tantric master. He composed the
            <em>Yuthog Nyingthig</em> (Heart Essence of Yuthog), a profound cycle of practice combining healing and spiritual
            development, which is still practiced by Tibetan physicians today.
          </p>
        </section>

        {/* Post-Yuthog Developments */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-6 border-b border-spa-gold/30 pb-3">
            The Physician Kings and Later Masters
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Physician King Tri-Ralpachen (c. 9th Century)</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              <strong>Tri-Ralpachen</strong>, grandson of Trisong Deutsen, continued the royal tradition of supporting medical
              scholarship. During his reign, further medical texts were translated into Tibetan and the training of royal physicians
              was systematized. His patronage helped establish medicine as an integral part of Tibetan monastic and secular education.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Lochen Rinchen Zangpo (958–1055 CE)</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              Known as the "Great Translator," <strong>Lochen Rinchen Zangpo</strong> was instrumental in the second transmission
              of Buddhism and medical knowledge into Tibet following a period of religious suppression. He translated numerous
              Sanskrit medical and pharmacological texts, greatly enriching the Tibetan medical literature and introducing
              refined Indian Ayurvedic knowledge to a new generation of Tibetan scholars and healers.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Jangtse Tenpai Drongme (14th–15th Century)</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              <strong>Jangtse Tenpai Drongme</strong> was a prominent physician-scholar who composed important commentaries on
              the Four Tantras. He worked to make the complex medical teachings more accessible to students and practitioners,
              systematizing the curriculum of Tibetan medical education. His contributions helped maintain the integrity
              and depth of the tradition during a period of political transition in Tibet.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-spa-green mb-3">Zurkhar Nyamni Dorje (1439–1475 CE)</h3>
            <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
              <strong>Zurkhar Nyamni Dorje</strong> was the founder of the Zurkar medical tradition, one of the two great
              scholarly lineages of Tibetan Medicine (the other being the Jangtse tradition). He authored extensive commentaries
              on the Four Tantras and compiled important pharmacological works documenting the medicinal properties of hundreds
              of herbs, minerals, and animal substances found in the Tibetan medical pharmacopoeia.
            </p>
          </div>
        </section>

        {/* Desi Sangye Gyatso */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            Desi Sangye Gyatso and the Blue Beryl (17th Century)
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            <strong>Desi Sangye Gyatso</strong> (1653–1705), the regent of the Fifth Dalai Lama, made one of the most significant
            contributions to Tibetan medical literature by composing the <em>Vaidurya Ngonpo</em> (Blue Beryl) — a monumental
            commentary on the Four Tantras consisting of four volumes.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Accompanying the Blue Beryl was the famous <em>Mewang Gyushi</em> — a set of 79 illustrated medical thangkas (scroll
            paintings) that visually depicted the entire content of the Four Tantras. These thangkas covered anatomy, disease
            classification, diagnosis, pharmacology, and therapeutic procedures, serving as a comprehensive visual medical
            encyclopedia. They remain among the most remarkable achievements in the history of medical illustration.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Desi Sangye Gyatso also re-established and expanded the <strong>Men-Tsee-Khang</strong> (Medical and Astrological
            Institute) at Chakpori Hill in Lhasa in 1696, creating the most important institution for training Tibetan physicians.
            Chakpori became renowned throughout Tibet and neighboring regions as the premier center of traditional medical education.
          </p>
        </section>

        {/* Trapmi Sangye Gyatso */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            Trapmi Sangye Gyatso and Further Contributions
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            <strong>Trapmi Sangye Gyatso</strong> continued the scholarly tradition of his predecessors, producing important
            works on Tibetan pharmacology and clinical medicine. He worked to standardize the preparation of traditional
            Tibetan medicines, establishing quality criteria for medicinal ingredients and refining the techniques for
            compounding complex multi-ingredient formulations, including the renowned <em>Rinchen</em> (precious) pills that
            remain among the most valued preparations in Tibetan Medicine.
          </p>
        </section>

        {/* Rev. Khyenrab Norbu */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            Rev. Khyenrab Norbu and the Lhasa Men-Tsee-Khang (20th Century)
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            In 1916, at the invitation of the 13th Dalai Lama, the great physician <strong>Khyenrab Norbu</strong> (1883–1962)
            established a new Tibetan Medical and Astrological Institute — the <strong>Men-Tsee-Khang</strong> — in Lhasa.
            This institution expanded upon the earlier Chakpori school and introduced systematic medical training, combining
            traditional apprenticeship with structured academic instruction.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Under Khyenrab Norbu's leadership, the Men-Tsee-Khang trained hundreds of physicians, standardized medical
            examination protocols, and expanded the production of traditional Tibetan medicines. He authored important
            medical texts and worked to preserve the richness of the Tibetan medical heritage during a period of significant
            political change.
          </p>
        </section>

        {/* Sino-Tibetan Exchange */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            Sino-Tibetan Medical Exchange
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Throughout the history of Tibetan Medicine, there was significant exchange with Chinese medical traditions.
            The diplomatic relationships between Tibetan kings and Chinese emperors facilitated the exchange of physicians,
            texts, and medicinal substances. Chinese medical concepts relating to diagnosis, pulse reading, and the use of
            certain herbs were incorporated and adapted into the Tibetan system.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            This exchange was particularly significant during the Tang Dynasty (618–907 CE), when the marriage of the
            Chinese Princess Wencheng to King Songtsen Gampo brought with her a large collection of Chinese medical texts
            and physicians. The resulting synthesis enriched both traditions and helped shape the distinctive character
            of Tibetan Medicine as a truly integrative system.
          </p>
        </section>

        {/* A Dark Period */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            A Dark Period: Suppression and Survival (1950s–1970s)
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            The Chinese occupation of Tibet beginning in 1950, and the subsequent Cultural Revolution (1966–1976), posed
            an existential threat to Tibetan Medicine. The Chakpori medical school was destroyed, the Lhasa Men-Tsee-Khang
            was closed, physicians were persecuted, and the practice of traditional medicine was suppressed across Tibet.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Many physicians fled Tibet following the Dalai Lama's exile in 1959. This diaspora, while tragically displacing
            practitioners and destroying institutions within Tibet, ultimately served to transmit the living tradition of
            Tibetan Medicine to the wider world. Physicians settled in India, Nepal, Bhutan, and Europe, where they continued
            to practice and teach.
          </p>
        </section>

        {/* New Free-Flowing Era */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-spa-green-deep mb-4 border-b border-spa-gold/30 pb-3">
            Revival in Exile: A New Free-Flowing Era
          </h2>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            In 1961, under the direction of <strong>His Holiness the 14th Dalai Lama</strong>, the <strong>Men-Tsee-Khang</strong>
            was re-established in Dharamsala, India — the seat of the Tibetan Government in Exile. This revival marked
            a new era for Tibetan Medicine, enabling its systematic practice, teaching, and research to continue and
            expand under freedom.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            The Men-Tsee-Khang in Dharamsala has since grown into a major institution with a medical college offering
            five-year training programs, extensive pharmacological research facilities, a network of branch clinics
            throughout India and Nepal, and an international outreach program. It has been instrumental in preserving
            and disseminating authentic Tibetan medical knowledge globally.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed mb-4">
            Today, Tibetan Medicine is practiced across South Asia, East Asia, Europe, and North America. Research
            programs in collaboration with modern universities are investigating the pharmacological basis of traditional
            Tibetan remedies, finding promising results in areas ranging from neurological disorders to cancer research.
            In 2018, UNESCO recognized Sowa Rigpa as an Intangible Cultural Heritage, affirming its global cultural
            and medical significance.
          </p>
          <p className="text-foreground/80 font-sans text-sm sm:text-base leading-relaxed">
            Organizations such as <strong>Sang-Druk Tibetan Herbal Clinic</strong> carry forward this precious tradition,
            making the healing wisdom of Sowa Rigpa available to those who seek holistic, time-tested remedies rooted
            in one of the world's great healing traditions.
          </p>
        </section>

        {/* References */}
        <section className="mb-12 border-t border-spa-gold/30 pt-8">
          <h2 className="text-xl font-serif text-spa-green-deep mb-4">References</h2>
          <ul className="space-y-2 text-foreground/60 font-sans text-xs sm:text-sm">
            <li>Desi Sangye Gyatso. <em>Vaidurya Ngonpo</em> (Blue Beryl Commentary on the Four Tantras). 17th Century.</li>
            <li>Drungtso, Tsering Thakchoe &amp; Drungtso, Tsering Dolma. <em>Tibetan-English Dictionary of Tibetan Medicine and Astrology</em>. Dharamsala: Drungtso Publications, 2005.</li>
            <li>Gyatso, Janet. <em>Being Human in a Buddhist World: An Intellectual History of Medicine in Early Modern Tibet</em>. Columbia University Press, 2015.</li>
            <li>Khangkar, Lobsang Dolma. <em>Lectures on Tibetan Medicine</em>. Dharamsala: Library of Tibetan Works and Archives, 1986.</li>
            <li>Men-Tsee-Khang. <em>Introduction to Tibetan Medicine</em>. Dharamsala: Men-Tsee-Khang Publications, 2001.</li>
            <li>Parfionovitch, Yuri; Dorje, Gyurme; Meyer, Fernand (eds.). <em>Tibetan Medical Paintings: Illustrations to the Blue Beryl Treatise of Sangye Gyamtso</em>. London: Serindia Publications, 1992.</li>
            <li>Yuthog Yontan Gonpo (the Younger). <em>Gyushi</em> (Four Tantras). 12th Century. Translated by Men-Tsee-Khang.</li>
          </ul>
        </section>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default HistoryTibetanMedicine;
