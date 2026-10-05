import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { whatsAppLink } from "../data/shop";

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, totalCount, clearCart } = useCart();
  const { t, productName } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const lines = items.map((item, index) => `${index + 1}. *${productName(item.name)}*\n   ${t.qty}: ${item.quantity}\n   ${t.price}: ${item.price}`).join("\n\n");
    const message = `${t.waCartIntro}\n\n${lines}\n\n${t.waCartOutro}`;
    window.open(whatsAppLink(message), "_blank");
  };

  return (
    <>
      {totalCount > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-5 bottom-24 z-40 rounded-full bg-gold px-5 py-3 font-lato text-sm font-bold text-white shadow-lg md:bottom-6"
        >
          {t.viewOrder} ({totalCount})
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#f0e6d6] px-6 py-5">
              <h3 className="font-playfair text-2xl text-dark">{t.yourOrder}</h3>
              <button onClick={() => setIsOpen(false)} className="text-2xl text-muted" aria-label={t.closeOrder}>×</button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <p className="mt-10 text-center font-lato text-sm text-muted">{t.emptyOrder}</p>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.name} className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-lato text-sm font-bold text-dark">{productName(item.name)}</p>
                        <p className="font-lato text-xs text-gold">{item.price}</p>
                      </div>
                      <div className="flex items-center rounded bg-cream">
                        <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="px-2" aria-label="Decrease">−</button>
                        <span className="w-5 text-center font-lato text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="px-2" aria-label="Increase">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.name)} className="text-sm text-red-600" aria-label={`${t.remove} ${productName(item.name)}`}>{t.remove}</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t border-[#f0e6d6] px-6 py-5">
                <button onClick={handleWhatsAppOrder} className="w-full rounded-lg bg-[#128C7E] py-3 font-lato text-sm font-bold text-white">
                  {t.confirmWhatsApp}
                </button>
                <button onClick={clearCart} className="mt-3 w-full font-lato text-xs text-muted">{t.clearAll}</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
