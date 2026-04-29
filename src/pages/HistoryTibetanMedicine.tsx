import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import image1 from '@/assets/historiimage/image1.png'
import image2 from '@/assets/historiimage/image2.png'
import image3 from '@/assets/historiimage/image3.png'
import image4 from '@/assets/historiimage/image4.png'
import image5 from '@/assets/historiimage/image5.png'
import image6 from '@/assets/historiimage/image6.png'
import image7 from '@/assets/historiimage/image7.png'



// Placeholder images — replace with actual imports or URLs
const imgBuddha = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=Buddha+Shakyamuni";
const imgLhaThothori = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=Lha+Thothori";
const imgElderYuthog = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=Elder+Yuthog";
const imgJuniorYuthog = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=Junior+Yuthog";
const imgRegentSangye = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=Regent+Sangye";
const imgKhyenrab = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=Rev.+Khyenrab";
const img13thDalai = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=13th+Dalai+Lama";
const img14thDalai = "https://placehold.co/220x260/d4c5a9/5c4a2a?text=14th+Dalai+Lama";

/* ─── Small reusable pieces ─── */

const SectionHeading = ({ children }) => (
  <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 mt-8">
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="text-[13px] font-bold text-gray-800 mt-5 mb-2">
    {children}
  </h3>
);

// Updated FloatImg component:
const FloatImg = ({ src, alt, caption, side = "left", width = "w-[260px]", height = "h-[270px]" }) => (
  <figure
    className={`${
      side === "left" ? "float-left mr-5" : "float-right ml-5"
    } mb-3 ${width} text-center`}
  >
    <img
      src={src}
      alt={alt}
      className={`w-full ${height} object-cover rounded shadow-sm border border-gray-200`}
    />
    {caption && (
      <figcaption className="text-[10px] text-gray-500 mt-1 italic leading-tight">
        {caption}
      </figcaption>
    )}
  </figure>
);
//     <img
//       src={src}
//       alt={alt}
//       className="w-full rounded shadow-sm border border-gray-200"
//     />
//     {caption && (
//       <figcaption className="text-[10px] text-gray-500 mt-1 italic leading-tight">
//         {caption}
//       </figcaption>
//     )}
//   </figure>
// );

/* ─── Main Component ─── */

const HistoryTibetanMedicine = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-spa-green">
        <Navbar />
        <div className="pt-48 pb-16 px-6 max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-3">
            History of Tibetan Medicine
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-sm">
            A journey through one of the world's oldest healing traditions
          </p>
        </div>
      </div>

      {/* ARTICLE */}
      <article className="max-w-6xl mx-auto  py-10 text-[17.5px] leading-relaxed text-gray-800 font-sans">

        {/* ── INTRO ── */}
        <p className="mb-3">
          The Tibetan medical system is one of the world's oldest known medical
          traditions. It is an integral part of Tibetan culture and has been
          developed through many centuries. We believe that the origin of the
          Tibetan medical tradition is as old as civilization itself.
        </p>
        <p className="mb-3">
          Because humankind has depended on nature for sustenance and survival,
          the instinctive urge to health and accumulated knowledge has guided us
          to discover certain remedies for common ailments from natural sources.
          For example, applying residual barley from <em>chang</em> (Tibetan
          wine) on swollen body parts, drinking hot water for indigestion, and
          using melted butter for bleeding are some of the therapies that arose
          from practical experiences and gradually formed the basis for the art
          of healing in Tibet. The Tibetan medical heritage is based on the book
          of the Four Tantras (<em>rGyud-bZhi</em>), which remains the
          fundamental medical text even today.
        </p>
        <p className="mb-4">
          The era from the beginning of human civilisation to the advent of
          Buddhism in Tibet can be termed as the pre-Buddhist era. During that
          time, Bon tradition flourished in Tibet and Bon medical practice
          influenced and enriched the existing Tibetan Medical knowledge and
          practice. It has been clearly mentioned in a Bon text titled
          "Jam-ma tsa-drel" that around 200 B.C., during the emergence of the
          first Tibetan King Nyatri Tsenpo, there lived twelve scholars of Bon
          tradition including a medical scholar who treated diseases through
          medication and therapy. This indicates that Tibetans practiced
          medicine and there were Tibetan physicians even prior to the advent of
          Buddhism in Tibet.
        </p>

        {/* ── BUDDHA SHAKYAMUNI ── */}
        <SectionHeading>
          Buddha Shakyamuni (961–881 B.C.) — according to Phuglug Tradition of
          Tibetan Astrology
        </SectionHeading>

        <FloatImg
          src= {image1}
          alt="Buddha Shakyamuni"
          caption="Buddha Shakyamuni"
          side="left"
        />

        <p className="mb-3">
          Shakyamuni Buddha was born in circa 961 B.C., and he lived till 881
          BC. During his life time he taught Buddha Dharma (popularly known as
          Buddhism). Buddhism came to Tibet during the reign of King Thothori
          Nyantsen (245–364 A.D.) (according to <em>gSo-rig Kuns 'Dus</em>).
          The Buddhist teachings gradually spread and were assimilated into
          every part of Tibetan culture, becoming Tibet's state religion.
        </p>
        <p className="mb-3">
          The philosophy of Tibetan Medicine also got motivated by it and the
          influences are clearly visible in <em>rGyud-Zhi</em> (the principal
          Tibetan medical text). The incorporation of Buddhist views of the four
          immeasurable thoughts and six perfections in the prerequisite
          conditions of Tibetan physicians are testimony of these influences.
        </p>

        <div className="clear-both" />

        {/* ── LHA THOTHORI NYANTSAN ── */}
        <SectionHeading>
          Lha Thothori Nyantsan (245–364 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SectionHeading>

        {/* <FloatImg
          src={imgLhaThothori}
          alt="Lha Thothori Nyantsan"
          caption="Lha Thothori Nyantsan"
          side="right"
        /> */}

        <p className="mb-3">
          The Indian physicians Biji Gaje and Bila Gazey (according to Yuthok
          Sernying kyi Namthar) were born to rNga-Chenpo, the King of Yul Pema
          Nyingpo, and his two wives. The mothers offered ten drums and ten
          bells to the Mahabodhi Stupa of Vajrasana and made prayers for their
          children's success in benefitting sentient beings. When the boy and
          girl grew older, they requested their parents to let them learn the
          Science of Healing.
        </p>
        <p className="mb-3">
          After getting permission, they went to Taxilla in present day Pakistan
          and studied medicine under the great Physician Atreya. Afterwards,
          they travelled throughout India and also visited China, Nepal and East
          Turkistan. They also received medical teachings from another great
          physician, Kumara Jivaka, at Magadha.
        </p>
        <p className="mb-3">
          When they were in Vajrasana, Arya Tara prophesied that they would go
          to Tibet and propagate the Medical Science. During the reign of the
          28th King, Lha Thotho-Ri-Nyantsen, Biji Gaje and Bilha Gaje did
          visit Tibet. The King invited them to his Palace, Yumbu Lakhar, and
          gave his daughter Yidkyi Rolcha as a bride to Biji Gaje. It is
          believed that Biji Gaje and Bilha Gaje are still alive and exist in a
          forest of sandalwood after attaining immortality.
        </p>

        <div className="clear-both" />

        {/* ── DUNG GI THORCHOG ── */}
        <SubHeading>Dung gi Thorchog (Dates Unknown)</SubHeading>
        <p className="mb-3">
          From Biji Gaje and Yidkyi Rolcha the first known physician in Yuthog
          lineage, Dung gi Thorchog, was born in the 4th century. He learned
          the art of pulse reading, pharmacology, moxibustion, bloodletting,
          dressing and treatment of wounds from his father at an early age.
        </p>
        <p className="mb-3">
          He became eminent in his field and was appointed as the personal
          physician to his grandfather, King Lha Thothori Nyantsen, and Trinyan
          Zungtsan. He was one of the most innovative physicians in Tibet and
          under his lineage the famous Yuthog Yonten Gonpo is said to have been
          born. His successive sons continued the lineage and served as personal
          physicians to the kings of their times for four consecutive
          generations.
        </p>

        {/* ── SONGTSEN GAMPO ── */}
        <SubHeading>
          Dharma King Songtsen Gampo (617–650 A.D.) — according to{" "}
          <em>Dungkar tsigzod chenmo</em>
        </SubHeading>
        <p className="mb-3">
          During the reign of the 33rd King, Songtsen Gampo, eminent physicians
          from India (Bhardvaj), China (Han Wang Hang De), and Persia (Galenos)
          were invited to share their knowledge with Tibetan physicians. Each
          physician wrote a treatise that was later incorporated into a text
          called Mijigpe-Tsoncha (A Fearless Weapon), which contains seven
          volumes. This was presented to the king.
        </p>
        <p className="mb-4">
          Although the Indian and Chinese physicians returned to their countries,
          Galenos remained in Tibet to practice and teach, and wrote several
          texts on medicine. In addition, King Songtsen Gampo's Chinese wife
          Kong-jo had brought a Chinese medical text with her, which was
          translated into Tibetan by Hashang Maha Deva and Dharma Kosha.
        </p>

        {/* ── TRISONG DEUTSEN ── */}
        <SubHeading>
          Dharma King Trisong Deutsen (742–797 A.D.) — according to{" "}
          <em>Dungkar tsigzod chenmo</em>
        </SubHeading>
        <p className="mb-4">
          In the 8th century, King Trisong Deutsen invited several great
          physicians for the first ever known medical conference at Samye, Tibet.
          In attendance there were eminent physicians from India, China, Persia,
          East Turkistan, and Nepal. Elder Yuthog Yonten Gonpo represented
          Tibet. The conference lasted for several days, during which the
          delegates discussed the theories and practices of their medical systems
          in comparison to those of the others.
        </p>

        {/* ── ELDER YUTHOG ── */}
        <SectionHeading>
          Elder Yuthog Yonten Gonpo (708–833 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SectionHeading>

        <FloatImg
          src={image2}
          alt="Elder Yuthog Yonten Gonpo"
          caption="Elder Yuthog Yonten Gonpo"
          side="left"
        />

        <p className="mb-3">
          Yuthog Yonten Gonpo was born at Toelung Kyina to Yuthog Khyungpo
          Dorjee and Gyapa Choeky Dolma on June 25, 708 A.D. In the tradition
          and father-son lineage, he learned from his father and started
          practicing basic elements of medical science at an early age. In
          order to test his knowledge, the King Me-Agtsom summoned him at the
          age of ten for a debate with the famed Tibetan physician Drangti
          Gyalnye Kharphug and many others.
        </p>
        <p className="mb-3">
          Yuthog emerged victorious and became supreme among the nine eminent
          physicians of Tibet. His clever answers to the visiting scholars, such
          as Shanti Garba of India and Tongsum Gangwa of China, earned Yuthog a
          great reputation amongst them, and he was respected by all as an
          emanation of the medicine Buddha.
        </p>
        <p className="mb-3">
          Yuthog Yonten Gonpo became the personal physician to the Tibetan King
          Me-Agtsom and Trisong Deutsen. He visited India several times to study
          with eminent physicians and travelled to China as well. He established
          Tibet's first medical institute called "Tanadug" at Kongpo Manlung in
          the south in 763 A.D. He devoted his whole life to the propagation and
          promotion of Tibetan medical science.
        </p>
        

        <div className="clear-both" />

        {/* ── TRI-RALPACHEN ── */}
        <SubHeading>
          Dharma King Tri-Ralpachen (866–901 A.D.) — according to{" "}
          <em>Dungkar tsigzod chenmo</em>
        </SubHeading>
        <p className="mb-3">
          Tri-Ralpachen was the 41st Dharma king of Tibet. He is considered very
          important in the history of Tibetan Buddhism. The Tibetan Empire
          reached its greatest extent under his rule. In 901 A.D., the Dharma
          King Tri Ralpa Chen was assassinated by his elder brother Lang Darma
          and the throne was forcefully seized by the latter. Due to Lang Darma's
          poor administration, Tibet disintegrated with civil war. Buddhism was
          completely destroyed in the central parts of Tibet, but survived in
          the Far East and West. For the next 411 years Tibet was decentralized
          and weakened.
        </p>

        {/* ── LOCHEN RINCHEN SANGPO ── */}
        <SubHeading>
          Lochen Rinchen Sangpo (958–1056 A.D.) — according to{" "}
          <em>Ghang-Jong Sorig Tenpae Nyin-je rim-jon gi Namthar Chog-dig</em>
        </SubHeading>
        <p className="mb-3">
          Lochen Rinchen Sangpo was born in 958 A.D. amidst portentous signs, in
          a small hamlet called Radni, situated in present Tibetan territory
          beyond the Shipki pass. From his birth he displayed uncommon qualities
          that soon led him to master the Buddhist scriptures.
        </p>
        <p className="mb-4">
          In the later development of Buddhism, the great translator Lochen
          Rinchen Sangpo (958–1056 A.D.) with all his effort revived Buddhism
          and Tibetan Medicine. He travelled to Kashmir and received medical
          teachings including Ashtanga Samhita and its commentary, Dhaser
          (Moonlight), and the veterinary text Shali Hotra from the great Pandit
          Chandra Ananda, which was later translated into Tibetan. His work
          enhanced the development of both Buddhism and medicine in Tibet.
        </p>

        {/* ── JUNIOR YUTHOG ── */}
        <SectionHeading>
          Junior Yuthog Yonten Gonpo (1126–1202 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SectionHeading>

        <FloatImg
          src={image3}
          alt="Junior Yuthog Yonten Gonpo"
          caption="Junior Yuthog Yonten Gonpo"
          side="right"
        />

        <p className="mb-3">
          Junior Yuthog Yonten Gonpo was the 13th in the lineage of the Elder
          Yuthog Yonten Gonpo. Born in Goshi Rethang to Yuthog Khyungpo Dorjee
          and Padma Oden, he began studying medicine at the age of eight. At
          ten, he received the whole teachings of <em>rGyud-bZhi</em> from
          Rogton Konchok Kyab, and from the age of eighteen he visited India six
          times and received teachings from Dakini Palden Trengwa and the sage
          Caraka.
        </p>
        <p className="mb-3">
          On his return to Tibet, Yuthog Yonten Gonpo dedicated his life to the
          practice of medicine for the benefit of all sentient beings. He wrote{" "}
          <em>Serchen</em> (Golden Notes), <em>Zongchen</em> (Wealthy Notes),{" "}
          <em>cha-lag bco-brGyad</em> (Eighteen Supplementary Works), and{" "}
          <em>Nyingpo Duspa</em> (Condensation of the Essences) and a commentary
          on its theoretical points called <em>Thongway Melong</em>. He gave his
          entire teachings to his heart disciple Yeshe Sung. Of his many
          disciples, three hundred are well known today.
        </p>

        <div className="clear-both" />

        {/* ── JANGPA NAMGYAL ── */}
        <SubHeading>
          Jangpa Namgyal Dragsang (1395–1475 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SubHeading>
        <p className="mb-3">
          Jangpa Namgyal Dragsang was the seventh in the lineage of King Se'u of
          Minyag. He was awarded the title Rinpoche Thamka by the King
          Gongma-Sechen. At the age of ten, he learned Sutra, Tantra and
          medicines from Palden Naggi Rinchen and Bodong Chogle Namgyal. He
          wrote many books on Buddhist Philosophy, Crafts, and Astrology, and
          eleven books on Medicine. He is one of the two renowned founders of
          the Jangpa tradition of Tibetan medicine.
        </p>

        {/* ── ZURKHAR ── */}
        <SubHeading>
          Zurkhar Nyamnyi Dorjee (1439–1475 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SubHeading>
        <p className="mb-4">
          Zurkhar Nyamnyi Dorjee was born to Rigzin Phuntsok in the Earth Sheep
          year. He learned Buddhist philosophy and medicine from many renowned
          scholars and, at the age of 16, he wrote <em>Manngag-Jewa-Ringsel</em>{" "}
          (Pith Instructions, Relics in Crores) and many other treatises. He was
          the founder of the Zurlug tradition of Tibetan medicine. Later, his
          grandson Zurkhar Lodoe Gyalpo wrote a commentary on{" "}
          <em>rGyud-bZhi</em> called <em>Mepoi Zal-lung</em> (Oral Instructions
          of my Forefathers).
        </p>

        {/* ── REGENT SANGYE GYATSO ── */}
        <SectionHeading>
          Regent Sangye Gyatso (1653–1706 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SectionHeading>

        <FloatImg
          src={image4}
          alt="Regent Sangye Gyatso"
          caption="Regent Sangye Gyatso"
          side="left"
        />

        <p className="mb-3">
          Sangye Gyatso was born to Asug and Buthi Gyalmo in the Water Snake
          year. He began his studies at the age of five and when he was eight,
          he learned Sutras and Tantras from the Great Fifth Dalai Lama. He
          learned Astrology and grammar from Darpo Lotsa and medicine from
          Jangpa Lhunding Namgyal Dorjee, and he became an expert in all these
          fields.
        </p>
        <p className="mb-3">
          Sangye Gyatso was appointed Regent by the Great Fifth Dalai Lama
          (1617–1682). During his 26 years in this position, the Potala Palace
          was rebuilt and expanded to its present size and the golden stupa of
          the Great Fifth Dalai Lama was built.
        </p>
        <p className="mb-3">
          Under his guidance, seventy-nine medical thangkas depicting human
          anatomy were produced, the <em>rGyud-bZhi</em> was edited and
          published, and the Chagpori Medical College was established in Lhasa
          in 1696 (the Fire Mouse year). Sangye Gyatso wrote many books on
          astrology, especially <em>Vaidurya-Karpo</em> (White Beryl), and
          medicine, including <em>Vaidurya sNgon-po</em> (Blue Beryl), the
          most popular commentary on <em>rGyud-bZhi</em>. He also wrote the
          famous book on Tibetan Medicinal History titled <em>Sorig Khogboog</em>{" "}
          and a book on medical practice called <em>Man-ngag Lhen-thab</em>. On
          the whole he brought Tibetan Medicine and Astrology to a higher level
          with utmost dedication and sincerity.
        </p>

        <div className="clear-both" />

        {/* ── KHYENRAB NORBU ── */}
        <SectionHeading>
          Rev. Khyenrab Norbu (1883–1962 A.D.) — according to{" "}
          <em>gSo-rig Kuns 'Dus</em>
        </SectionHeading>

        <FloatImg
          src={image5}
          alt="Rev. Khyenrab Norbu"
          caption="Rev. Khyenrab Norbu"
          side="right"
        />

        <p className="mb-3">
          Rev. Khyenrab Norbu was born to Astrologer Ngawo-che and Yangchen in
          the Water Sheep year at Tsethang, southern Tibet. He was admitted to
          Ngachoe Monastery, and was known for his excellence in studies,
          intelligence, compassion and humbleness. As a result, he was selected
          from many young monks as a candidate to study medicine and went to
          Chagpori Medical College in Lhasa. There he was taught by Dr. Ngawang
          Choden. He passed his exams in a relatively short time.
        </p>
        <p className="mb-3">
          In order to preserve and expand Tibetan medicine, the Great Thirteenth
          Dalai Lama (1876–1933) in 1897 appointed Tekhang Jampa Thubwang and
          Jabung Damchoe Palden as his senior and junior physicians respectively,
          and ordered them to teach selected students. Khyenrab Norbu, Tenpa
          Yarphel and Tsultrim Nyandrag were chosen from Chagpori Medical
          College to study under the senior physician and they received teachings
          on <em>rGyud-bZhi</em> and its various commentaries.
        </p>
        <p className="mb-3">
          Khyenrab Norbu also learned medicine, astrology, poetry and grammar. He
          was named "Yangchen rgyas pai Lodoe" as an honour to his hard work. The
          Great Thirteenth Dalai Lama established Lhasa Men-Tsee-Khang in the
          year of the Fire Dragon, 1916. Dr. Khyenrab Norbu was appointed to the
          post of Junior Physician to H.H. The Dalai Lama in 1918 and spent his
          entire life promoting Tibetan culture, especially medicine and
          astrology.
        </p>

        <p className="mb-2 font-semibold text-[12.5px]">He wrote and compiled many books, including:</p>
        <ul className="list-disc list-inside mb-3 text-[13px] space-y-1 ml-2">
          <li>
            <em>gsorig-rgya-tso-nyingpo</em> — Essences from the Ocean of
            Medical Healing
          </li>
          <li>
            <em>Ngotsar-sergyi-nyema</em> — Wonderful Golden Hair (medicinal
            plants)
          </li>
          <li>
            <em>Man-byor-nuspa-phyogdus</em> — Condensation of the Effects of
            the Medicine
          </li>
          <li>
            <em>Duetsi-'bumsang</em> — One Hundred Thousand Good Nectars
          </li>
          <li>
            <em>Rigden-nyingthig</em> — Endowment of Knowledge of the
            Heart-Drop (astrology)
          </li>
        </ul>

        <div className="clear-both" />

        {/* 13th Dalai Lama image */}
        <FloatImg
          src={image6}
          alt="H.H. the 13th Dalai Lama"
          caption="H.H. the 13th Dalai Lama"
          side="left"
        />
        

        <p className="mb-3">
          Some of the contemporary eminent physicians like Dr. Tenzin Choedak
          and Dr. Lobsang Wangyal (the Senior and Junior physicians to H.H. The
          XIV Dalai Lama), Dr. Yeshi Dhonden (the former personal physician to
          H.H. The XIV Dalai Lama) and Dr. Jampa Thinley (the former director
          of Lhasa Men-Tsee-Khang) were all his disciples. He died at the age of
          eighty in the Water Tiger year, 1962.
        </p>

        <div className="clear-both" />

        {/* ── DARK PERIOD ── */}
        <SectionHeading>A Dark Period in Tibetan History</SectionHeading>
        <p className="mb-3">
          The Chinese invaded Tibet from the east in 1949. On 10th March, 1959,
          the Chinese ruthlessly suppressed peaceful Tibetan demonstrations in
          Lhasa by artillery fire and bombardment. His Holiness the 14th Dalai
          Lama, followed by thousands of Tibetans, escaped into exile in India.
        </p>
        <p className="mb-4">
          During the Cultural Revolution (1966–1976) the Chinese destroyed more
          than 6,000 monasteries, demolished statues, burnt religious and
          astrology-medicine books, destroyed forests, and wreaked unimaginable
          destruction to flora and fauna. As a direct consequence of Chinese
          repression, more than 1.2 million Tibetans died.
        </p>

        {/* ── MEN-TSEE-KHANG IN EXILE ── */}
        <SectionHeading>Men-Tsee-Khang in Exile</SectionHeading>

        <FloatImg
          src={image7}
          alt="H.H. the 14th Dalai Lama"
          caption="H.H. the 14th Dalai Lama"
          side="right"
        />

        <p className="mb-3">
          The Chinese have used every possible means to exterminate the culture
          and identity of the Tibetan people. In order to preserve and promote
          the richness of Tibetan culture, many institutions, monasteries and
          schools were re-established in India under the auspices of His
          Holiness the 14th Dalai Lama.
        </p>
        <p className="mb-3">
          Men-Tsee-Khang (Tibetan Medical and Astro. Institute of H.H. the Dalai
          Lama) was re-established under the visionary guidance of His Holiness
          the 14th Dalai Lama on March 23rd, 1961, with Dr. Yeshi Dhonden and
          Ven. Dukhorwa Lodoe Gyatso as the heads of the Medical and
          Astrological centers, respectively. With the arrival of other senior
          doctors from Tibet like Dr. Tenzin Choedak, Dr. Lobsang Wangyal and
          Dr. Nyarongshar Kunga Gyurmey in the 1980s, the institution was
          further developed.
        </p>
        <p className="mb-3">
          Since its inception, the institution has undergone significant
          development. Today it houses various academic departments like the
          Pharmaceutical, Clinical Research, Materia Medica, Medical and Astro.
          Literary Research, Herbal Product Research, Astrology department and
          the College where Tibetan doctors and astrologers are trained.
        </p>
        <p className="mb-4">
          The Pharmacy manufactures different forms of remedial pills; the
          Clinical Research conducts research on disorders like diabetes, cancer,
          hepatitis and hypertension in collaboration with western scientific
          systems of analysis; Materia Medica identifies and documents herbs using
          correct Latin names; Medical & Astro. Literary Research documents and
          publishes Tibetan medical and astrological treatises; Herbal Products
          Research manufactures herbal products for rejuvenating body and skin
          based on traditional Tibetan formulation; and the Quality Assurance
          Laboratory checks the quality of raw materials, medicines and herbal
          health care products according to scientific methods as per the norms
          of GMP (Good Manufacturing Practice).
        </p>

        <div className="clear-both" />

        {/* ── REFERENCES ── */}
        <div className="border-t border-gray-300 mt-10 pt-5">
          <h2 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
            References
          </h2>
          <ul className="text-[11.5px] text-gray-600 space-y-1 leading-snug">
            <li>
              <em>gSo-rig Kun 'Dus las bod kyi gSo-ba rig-pa</em>, Tibet
              people's printing press, 2000
            </li>
            <li>
              <em>GangsChan mKhasGrub rimbyon mingmZod</em>, Kansui Mirig
              printing press, 1992
            </li>
            <li>
              <em>
                Gang–lJongs gSo-rig bsTan-pa'i Nyin-byad rim-byon gyi
                rNam-thar phyogs-bsGrigs
              </em>
              , Dharamsala Men-Tsee-Khang, 1992
            </li>
            <li>Tibetan Annual Almanac of Water Dragon Year, 2012</li>
            <li>
              <em>Dung dkar_Tshig mdzod chen mo</em>, Chinese Tibetan studies
              printing press, 2002
            </li>
          </ul>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default HistoryTibetanMedicine;