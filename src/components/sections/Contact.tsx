import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SHOP_NAME, whatsAppLink } from "../../data/shop";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const orderLink = whatsAppLink(t.waOrder);

  return (
    <section id="contact" className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-tgreen px-8 py-10 text-white">
          <h2 className="font-playfair text-4xl">{t.orderTitle}</h2>
          <p className="mt-3 font-lato text-sm leading-relaxed text-white/90">{t.orderBody}</p>
          <a href={orderLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-lato text-sm font-bold text-tgreen">
            {t.chat}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="mt-4 block font-lato text-lg font-bold">{PHONE_DISPLAY}</a>
        </div>

        <div className="rounded-3xl border border-[#f0e6d6] bg-cream px-8 py-10">
          <h2 className="font-playfair text-4xl text-dark">{t.visitTitle}</h2>
          <p className="mt-4 font-playfair text-xl text-dark">{SHOP_NAME}</p>
          <address className="mt-2 font-lato text-sm leading-relaxed text-[#7a5c3a] not-italic">
            {t.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
          <p className="mt-4 font-lato text-sm text-dark">{t.hours}</p>
          <p className="mt-2 font-lato text-sm text-[#7a5c3a]">{t.delivery}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-lato text-sm font-bold text-gold">
            {t.openMaps}
          </a>
        </div>
      </div>
    </section>
  );
}
