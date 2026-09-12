import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { BagItem } from './data';
import { formatBRL, waLink } from './data';

interface CartContextValue {
  items: BagItem[];
  count: number;
  total: number;
  totalLabel: string;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: BagItem, opts?: { open?: boolean }) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  checkoutLink: string;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: BagItem, opts?: { open?: boolean }) => {
    setItems((prev) => [...prev, item]);
    if (opts?.open !== false) setIsOpen(true);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = items.length;
  const total = useMemo(() => items.reduce((sum, it) => sum + it.price, 0), [items]);
  const totalLabel = formatBRL(total);

  const checkoutLink = useMemo(() => {
    if (items.length === 0) return '';
    const lines = items.map((it, i) => `${i + 1}. ${it.name} — ${formatBRL(it.price)}`);
    const msg = `Olá! Gostaria de finalizar meu pedido no Varejão:\n\n${lines.join('\n')}\n\nTotal: ${formatBRL(total)}\n\nPode confirmar o valor e o prazo de entrega?`;
    return waLink(msg);
  }, [items, total]);

  const value: CartContextValue = {
    items,
    count,
    total,
    totalLabel,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    clearCart,
    checkoutLink,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}