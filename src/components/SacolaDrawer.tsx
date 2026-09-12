import { useEffect } from 'react';
import { useCart } from '../lib/cart';
import { formatBRL } from '../lib/data';

export default function SacolaDrawer() {
  const { items, count, totalLabel, isOpen, closeCart, removeItem, checkoutLink } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        aria-label="Fechar sacola"
        onClick={closeCart}
        className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-sm"
      />
      <div className="paper-texture absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col rounded-t-3xl shadow-2xl md:inset-x-auto md:left-auto md:right-4 md:top-4 md:bottom-4 md:max-h-none md:w-[400px] md:rounded-3xl">
        <header className="flex items-center justify-between border-b border-brand-blue/20 px-5 py-4">
          <div>
            <h3 className="font-display text-xl font-bold text-brand-ink">
              Sacola <span className="text-brand-red">Editorial</span>
            </h3>
            <p className="text-xs text-slate-500">
              {count === 0 ? 'Sua sacola está vazia' : `${count} ${count === 1 ? 'item' : 'itens'} na sacola`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={() => items.forEach(() => removeItem(0))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-brand-red hover:text-brand-red"
                aria-label="Esvaziar sacola"
              >
                <i className="fa-solid fa-trash text-sm" />
              </button>
            )}
            <button
              onClick={closeCart}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white transition hover:bg-brand-blue-dark"
              aria-label="Fechar"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-14 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-3xl text-brand-blue">
                <i className="fa-solid fa-basket-shopping" />
              </span>
              <p className="font-semibold text-slate-700">Nenhum item por aqui</p>
              <p className="max-w-[240px] text-sm text-slate-500">
                Explore o catálogo ou a edição Gourmet e guarde seus produtos favoritos.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
                  <span className="text-sm font-semibold leading-snug text-slate-800">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="whitespace-nowrap text-sm font-extrabold text-brand-blue">{formatBRL(item.price)}</span>
                    <button
                      onClick={() => removeItem(i)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-brand-red hover:text-white"
                      aria-label={`Remover ${item.name}`}
                    >
                      <i className="fa-solid fa-minus text-xs" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t-2 border-double border-brand-blue px-5 py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-600">Total da sacola</span>
              <span className="text-2xl font-black text-brand-ink">{totalLabel}</span>
            </div>
            <a
              href={checkoutLink}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-green-dark"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Finalizar pedido no WhatsApp
            </a>
            <p className="mt-2 text-center text-[11px] text-slate-500">
              Pagamento na entrega via PIX · Cartões · Alelo / VR / Sodexo
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}