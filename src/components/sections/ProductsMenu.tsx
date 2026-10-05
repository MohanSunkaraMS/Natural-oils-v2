import { useMemo, useState } from "react";
import ProductCard from "../ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { products as staticProducts, staticByName, type Product } from "../../data/products";
import { FEATURED, whatsAppLink } from "../../data/shop";
import { useLanguage } from "../../context/LanguageContext";

const tabs = [
  { id: "oils" },
  { id: "ghees" },
  { id: "pickles" },
  { id: "powders" },
] as const;

function prepare(list: Product[] | undefined) {
  return (list ?? [])
    .filter((product) => !/sunflower/i.test(product.name))
    .map((product) => {
      const fallback = staticByName.get(product.name);
      return {
        ...product,
        image: product.image || fallback?.image || "",
        desc: product.desc || fallback?.desc || "",
        emoji: product.emoji || fallback?.emoji || "🌿",
      };
    });
}

export default function ProductsMenu() {
  const { products } = useProducts();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("oils");

  const catalog = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    for (const tab of tabs) {
      const fromShop = prepare(products[tab.id]);
      grouped[tab.id] = fromShop.length > 0 ? fromShop : prepare(staticProducts[tab.id]);
    }
    return grouped;
  }, [products]);

  const visibleTabs = tabs.filter((tab) => tab.id !== "powders" || catalog.powders.length > 0);
  const featured = FEATURED
    .map((name) => Object.values(catalog).flat().find((product) => product.name === name))
    .filter((product): product is Product => Boolean(product));

  const bulkLink = whatsAppLink(t.waBulk);

  return (
    <section id="products" className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-playfair text-4xl text-dark">{t.bestsellers}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-lato text-sm leading-relaxed text-[#7a5c3a]">
          {t.bestsellersBody}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <h2 className="mt-20 text-center font-playfair text-4xl text-dark">{t.fullList}</h2>
        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 rounded-xl bg-warm p-1.5">
            {visibleTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-5 py-2 font-lato text-xs font-bold tracking-wider uppercase ${
                  activeTab === tab.id ? "bg-gold text-white" : "text-muted"
                }`}
              >
                {t.tabs[tab.id]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(catalog[activeTab] ?? []).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <p className="mt-8 text-center font-lato text-sm text-[#7a5c3a]">
          {t.bulkBefore}{" "}
          <a href={bulkLink} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">
            {t.bulkLink}
          </a>
          . {t.bulkAfter}
        </p>
      </div>
    </section>
  );
}
