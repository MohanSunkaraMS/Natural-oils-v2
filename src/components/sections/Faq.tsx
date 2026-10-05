import { useLanguage } from "../../context/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-cream px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-playfair text-4xl text-dark">{t.faqTitle}</h2>
        <div className="mt-8 divide-y divide-[#f0e6d6] overflow-hidden rounded-2xl border border-[#f0e6d6] bg-white">
          {t.faqs.map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-playfair text-lg text-dark marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="font-lato text-gold group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 font-lato text-sm leading-relaxed text-[#7a5c3a]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
