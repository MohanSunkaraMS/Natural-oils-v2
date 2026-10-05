import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, items, updateQuantity } = useCart();
  const { t, productName, productDesc } = useLanguage();
  const quantity = items.find((item) => item.name === product.name)?.quantity || 0;
  const name = productName(product.name);
  const desc = productDesc(product.name, product.desc);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#f0e6d6] bg-white">
      <div className="relative aspect-square bg-warm">
        {product.image ? (
          <img src={product.image} alt={name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="grid h-full place-items-center text-5xl">{product.emoji}</div>
        )}
        {!product.inStock && (
          <span className="absolute top-3 right-3 rounded bg-red-100 px-2 py-1 font-lato text-[0.65rem] font-bold tracking-wide text-red-800 uppercase">
            {t.outOfStock}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-playfair text-xl text-dark">{name}</h3>
        <p className="mt-1 flex-1 font-lato text-sm leading-relaxed text-muted">{desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-lato text-lg font-bold text-gold">{product.price}</span>
          {product.inStock && <span className="font-lato text-xs font-semibold text-tgreen">{t.inStock}</span>}
        </div>
        {quantity > 0 ? (
          <div className="mt-3 flex items-center justify-between rounded-lg border border-gold bg-cream px-2 py-2">
            <button onClick={() => updateQuantity(product.name, quantity - 1)} className="px-3 font-bold text-gold" aria-label={`Remove one ${product.name}`}>−</button>
            <span className="font-lato font-bold text-dark">{quantity}</span>
            <button onClick={() => updateQuantity(product.name, quantity + 1)} className="px-3 font-bold text-gold" aria-label={`Add one ${product.name}`}>+</button>
          </div>
        ) : (
          <button
            onClick={() => product.inStock && addToCart({ name: product.name, price: product.price, emoji: product.emoji })}
            disabled={!product.inStock}
            className="mt-3 rounded-lg bg-tgreen py-2.5 font-lato text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-[#d1d5db]"
          >
            {product.inStock ? t.addToOrder : t.unavailable}
          </button>
        )}
      </div>
    </article>
  );
}
