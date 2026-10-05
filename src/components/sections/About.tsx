import { useLanguage } from "../../context/LanguageContext";
import cleaning from "../../assets/cleaning.jpg";
import washing from "../../assets/washing.jpg";
import drying from "../../assets/drying.webp";
import coldPress from "../../assets/cold-press.jpeg";
import settle from "../../assets/settle.jpg";
import packing from "../../assets/packing.webp";

const images = [cleaning, washing, drying, coldPress, settle, packing];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-playfair text-4xl text-dark">{t.aboutTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-lato text-sm leading-relaxed text-[#7a5c3a]">{t.aboutBody}</p>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.steps.map((step, index) => (
            <li key={step.title} className="overflow-hidden rounded-2xl border border-[#f0e6d6] bg-white">
              <img src={images[index]} alt={step.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="font-lato text-xs font-bold tracking-[0.16em] text-gold uppercase">0{index + 1}</p>
                <h3 className="mt-2 font-playfair text-2xl text-dark">{step.title}</h3>
                <p className="mt-2 font-lato text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
