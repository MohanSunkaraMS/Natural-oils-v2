import { useLanguage } from "../../context/LanguageContext";
import groundnutOil from "../../assets/groundnut_oil.jpg";
import coconutOil from "../../assets/cocunut_oil.webp";
import sesameOil from "../../assets/sesame_oil.jpg";
import mustardOil from "../../assets/mustard_oil.webp";
import castorOil from "../../assets/casstor_oil.jpg";

const images: Record<string, string> = {
  groundnut: groundnutOil,
  coconut: coconutOil,
  sesame: sesameOil,
  mustard: mustardOil,
  castor: castorOil,
};

export default function WhichOil() {
  const { t } = useLanguage();

  return (
    <section id="guide" className="bg-cream px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-playfair text-4xl text-dark">{t.whichTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-lato text-sm leading-relaxed text-[#7a5c3a]">{t.whichBody}</p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.oils.map((oil) => (
            <li key={oil.id} className="overflow-hidden rounded-2xl border border-[#f0e6d6] bg-white">
              <img src={images[oil.id]} alt={oil.name} className="aspect-square w-full object-cover" loading="lazy" />
              <div className="p-4">
                <p className="font-playfair text-lg text-dark">{oil.name}</p>
                <p className="mt-1 font-lato text-sm text-muted">{oil.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
