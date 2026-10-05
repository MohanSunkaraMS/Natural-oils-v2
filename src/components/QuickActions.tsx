import { PHONE_DISPLAY, PHONE_TEL, whatsAppLink } from "../data/shop";
import { useLanguage } from "../context/LanguageContext";

export default function QuickActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[#f0e6d6] bg-white md:hidden">
      <a href={`tel:${PHONE_TEL}`} className="flex-1 py-3 text-center font-lato text-sm font-bold text-dark">
        {t.call} {PHONE_DISPLAY}
      </a>
      <a href={whatsAppLink(t.waOrder)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-tgreen py-3 text-center font-lato text-sm font-bold text-white">
        {t.whatsApp}
      </a>
    </div>
  );
}
