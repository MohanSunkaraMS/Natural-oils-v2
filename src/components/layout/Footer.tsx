import { PHONE_DISPLAY, PHONE_TEL, SHOP_NAME, whatsAppLink } from "../../data/shop";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark px-6 pt-10 pb-24 text-center font-lato text-sm text-[#c4a882] md:pb-10">
      <p className="font-playfair text-lg text-gold">{SHOP_NAME}</p>
      <p className="mx-auto mt-3 max-w-md leading-relaxed">{t.address.join(", ")}</p>
      <p className="mt-2">{t.hours}</p>
      <p className="mt-3">
        <a href={`tel:${PHONE_TEL}`} className="text-gold">{PHONE_DISPLAY}</a>
        {" · "}
        <a href={whatsAppLink(t.waOrder)} target="_blank" rel="noopener noreferrer" className="text-gold">
          {t.whatsApp}
        </a>
      </p>
      <p className="mt-6 text-xs">© {new Date().getFullYear()} {SHOP_NAME}</p>
    </footer>
  );
}
