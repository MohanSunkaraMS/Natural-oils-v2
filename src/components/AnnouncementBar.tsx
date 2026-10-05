import { useLanguage } from "../context/LanguageContext";

const show = true;

export default function AnnouncementBar() {
  const { t } = useLanguage();
  if (!show) return null;

  return (
    <div className="bg-gold px-4 py-2.5 text-center font-lato text-sm font-semibold text-white">
      {t.announcement}
    </div>
  );
}
