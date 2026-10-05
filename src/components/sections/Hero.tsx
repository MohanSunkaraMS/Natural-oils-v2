import { whatsAppLink } from "../../data/shop";
import { useLanguage } from "../../context/LanguageContext";
import oilShop from "../../assets/oil shop.jpg";

export default function Hero() {
  const { t } = useLanguage();
  const scrollToProducts = () => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  const orderLink = whatsAppLink(t.waInterest);

  return (
    <section id="home" className="bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div className="min-w-0">
          <p className="font-lato text-xs font-bold tracking-[0.22em] text-gold uppercase">{t.city}</p>
          <h1 className="mt-3 max-w-full font-playfair text-4xl leading-[1.05] font-bold text-dark sm:text-5xl md:text-6xl">
            {t.heroTitle1}
            <span className="block">{t.heroTitle2}</span>
          </h1>
          <p className="mt-4 font-playfair text-xl text-gold italic sm:text-2xl">{t.heroLine}</p>
          <p className="mt-4 max-w-md font-lato text-base leading-relaxed text-[#7a5c3a]">{t.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollToProducts} className="rounded-md bg-gold px-6 py-3 font-lato text-sm font-bold text-white">
              {t.seeProducts}
            </button>
            <a href={orderLink} target="_blank" rel="noopener noreferrer" className="rounded-md border border-dark px-6 py-3 font-lato text-sm font-bold text-dark">
              {t.whatsAppUs}
            </a>
          </div>
        </div>
        <img
          src={oilShop}
          alt={t.heroTitle1 + " " + t.heroTitle2 + " — " + t.city}
          className="w-full min-w-0 rounded-3xl border border-[#f0e6d6] object-cover"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
