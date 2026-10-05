import { MAPS_URL } from "../../data/shop";
import { useLanguage } from "../../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-playfair text-4xl text-dark">{t.reviewsTitle}</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.reviews.map((review) => (
            <figure key={review} className="rounded-2xl border border-[#f0e6d6] bg-cream p-6">
              <blockquote className="font-playfair text-lg leading-relaxed text-dark">“{review}”</blockquote>
              <figcaption className="mt-4 font-lato text-sm text-muted">{t.regularCustomer}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center font-lato text-sm">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">
            {t.googleReviews}
          </a>
        </p>
      </div>
    </section>
  );
}
