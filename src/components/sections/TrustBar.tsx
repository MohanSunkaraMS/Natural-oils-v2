import { useLanguage } from "../../context/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-[#f0e6d6] bg-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.facts.map((fact) => (
          <li key={fact.title}>
            <p className="font-playfair text-xl text-dark">{fact.title}</p>
            <p className="mt-1 font-lato text-sm text-muted">{fact.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
