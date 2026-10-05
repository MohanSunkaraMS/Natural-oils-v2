// src/context/CartContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

export interface CartItem {
    name: string;
    price: string;
    quantity: number;
    emoji: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: { name: string, price: string, emoji: string }) => void;
    removeFromCart: (name: string) => void;
    updateQuantity: (name: string, quantity: number) => void;
    clearCart: () => void;
    totalCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: { name: string, price: string, emoji: string }) => {
        setItems(prev => {
            const existing = prev.find(item => item.name === product.name);
            if (existing) {
                return prev.map(item =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (name: string) => {
        setItems(prev => prev.filter(item => item.name !== name));
    };

    const updateQuantity = (name: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(name);
            return;
        }
        setItems(prev => prev.map(item =>
            item.name === name ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setItems([]);

    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
}
