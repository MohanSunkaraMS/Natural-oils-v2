import { useState } from "react";
import { PHONE_TEL, SHOP_NAME, whatsAppLink } from "../../data/shop";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const orderLink = whatsAppLink(t.waOrder);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const languageSwitch = (
    <div className="flex rounded-full border border-[#e7d7c3] p-0.5" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 font-lato text-xs font-bold ${lang === "en" ? "bg-dark text-white" : "text-muted"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("te")}
        className={`rounded-full px-2.5 py-1 text-xs font-bold ${lang === "te" ? "bg-dark text-white" : "text-muted"}`}
        aria-pressed={lang === "te"}
      >
        తె
      </button>
    </div>
  );

  return (
    <nav className="border-b border-[#f0e6d6] bg-[#fbf7f1]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <button onClick={() => scrollTo("home")} className="min-w-0 flex-1 text-left">
          <span className="block truncate font-playfair text-base leading-tight font-bold text-dark sm:text-lg">{SHOP_NAME}</span>
          <span className="mt-0.5 block font-lato text-[0.68rem] tracking-[0.18em] text-muted uppercase">{t.city}</span>
        </button>

        <ul className="hidden items-center gap-5 md:flex">
          {t.nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`font-lato text-xs font-bold text-dark hover:text-gold ${lang === "en" ? "tracking-[0.14em] uppercase" : ""}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>{languageSwitch}</li>
          <li>
            <a href={orderLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-tgreen px-4 py-2 font-lato text-xs font-bold text-white">
              {t.whatsApp}
            </a>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {languageSwitch}
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-dark" />
            <span className="block h-0.5 w-6 bg-dark" />
            <span className="block h-0.5 w-6 bg-dark" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-[#f0e6d6] bg-[#fbf7f1] px-5 py-3 md:hidden">
          {t.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="border-b border-[#f0e6d6] py-3 text-left font-lato text-sm text-dark"
            >
              {item.label}
            </button>
          ))}
          <a href={orderLink} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-lg bg-tgreen py-3 text-center font-lato text-sm font-bold text-white">
            {t.whatsApp}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="rounded-lg border border-dark py-3 text-center font-lato text-sm font-bold text-dark">
            {t.call}
          </a>
        </div>
      )}
    </nav>
  );
}
