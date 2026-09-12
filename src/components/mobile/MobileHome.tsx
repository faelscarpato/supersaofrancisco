import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FAQ_ITEMS,
  IMG,
  MOBILE_FLASH,
  MOBILE_PRODUCTS,
  TABLOIDE_PAGES,
  PHONE_DISPLAY,
  ADDRESS,
  HOURS,
  waLink,
  formatBRL,
} from '../../lib/data';
import { useCart } from '../../lib/cart';
import { useCountdown, pad } from '../CountDown';

const CATEGORY_PILLS = [
  { emoji: '🌶️', label: 'Hortifrúti' },
  { emoji: '🥩', label: 'Carnes & Aves' },
  { emoji: '🥖', label: 'Padaria' },
  { emoji: '🧀', label: 'Frios' },
  { emoji: '🥫', label: 'Mercearia' },
  { emoji: '🧃', label: 'Bebidas' },
  { emoji: '🍦', label: 'Frozen' },
  { emoji: '🐟', label: 'Peixaria' },
];

function useMaskedCountdown() {
  const s = useCountdown();
  return { h: Math.floor(s / 3600), m: Math.floor((s % 3600) / 60), sec: s % 60 };
}

export default function MobileHome() {
  const { count, openCart, addItem } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pill, setPill] = useState(0);
  const [added, setAdded] = useState<string | null>(null);
  const { h, m, sec } = useMaskedCountdown();

  const quickAdd = (name: string, price: number) => {
    addItem({ name, price }, { open: false });
    setAdded(name);
    setTimeout(() => setAdded(null), 900);
  };

  const featured = MOBILE_PRODUCTS.find((p) => p.featured) ?? MOBILE_PRODUCTS[0];

  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-m3-surface md:hidden">
      {/* ── Top App Bar ─────────────────────────────── */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-2 bg-m3-surface px-4 pb-2 pt-3">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-m3-on-surface hover:bg-m3-surface-container"
        >
          <i className="fa-solid fa-bars text-xl" />
        </button>
        <Link to="/" className="flex flex-1 justify-center">
          <img src={IMG.logoMobile} alt="Varejão São Francisco" className="h-9 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar"
            className="flex h-10 w-10 items-center justify-center rounded-full text-m3-on-surface hover:bg-m3-surface-container"
          >
            <i className="fa-solid fa-magnifying-glass text-xl" />
          </button>
          <button
            onClick={openCart}
            aria-label="Sacola"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-m3-on-surface hover:bg-m3-surface-container"
          >
            <i className="fa-solid fa-basket-shopping text-xl" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-m3-secondary px-1 text-[10px] font-bold text-m3-on-secondary">
                {count}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Floating voucher */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed left-4 top-2.5 z-20 hidden rounded-full bg-m3-primary-container px-3 py-1 text-[11px] font-bold text-m3-on-primary shadow-lg"
      >
        🎨 Cupom de R$ 20 OFF
      </button>

      {/* ── Content ─────────────────────────────────── */}
      <main className="pb-24">
        {/* Hero */}
        <section className="mx-4 mt-2 overflow-hidden rounded-3xl bg-m3-primary-container text-white">
          <div className="relative">
            <img src={IMG.heroHorti} alt="Feira fresca" className="h-44 w-full object-cover opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-t from-m3-primary-container via-transparent" />
            <div className="absolute inset-x-3 bottom-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBA707] px-2.5 py-1 text-[10px] font-bold text-[#3e2600]">
                <i className="fa-solid fa-bolt" /> OFERTA DO DIA
              </span>
              <h2 className="mt-2 text-headline-lg font-extrabold drop-shadow">
                Feira fresquinha, todos os dias da semana.
              </h2>
              <p className="text-body-sm text-white/90">Entrega em até 2h · Pagamento na entrega</p>
            </div>
          </div>
        </section>

        {/* Category pills */}
        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-4">
          {CATEGORY_PILLS.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setPill(i)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-label-md font-semibold transition ${
                pill === i
                  ? 'bg-m3-primary-container text-m3-on-primary shadow'
                  : 'bg-m3-surface-container text-m3-on-surface-variant'
              }`}
            >
              <span>{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>

        {/* Tableau / Tabloide mobile */}
        <section className="mx-4 mt-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-headline-md font-extrabold text-m3-on-surface">Mercado Semaine</h3>
              <p className="text-body-sm text-m3-on-surface-variant">As ofertas mais gostosas da semana, com tabela de preços e receitas completas no aplicativo.</p>
            </div>
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-m3-surface-container-high text-m3-primary">
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>

          <div className="mt-3 relative overflow-hidden rounded-3xl bg-white shadow ring-1 ring-black/5">
            <img src={TABLOIDE_PAGES[0].img} alt="Encarte da semana" className="w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-label-md font-extrabold uppercase tracking-wide">Promoções imperdíveis</p>
                  <p className="text-body-sm text-white/85">Quermesse — Mercado Semaine · Ver todos</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-m3-secondary text-white">
                  <i className="fa-solid fa-play" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-body-sm text-m3-on-surface-variant">
            <i className="fa-solid fa-bookmark text-m3-secondary" />
            Guarde suas lojas favoritas para acessar rapidamente todas as ofertas.
            <button className="font-bold text-m3-primary">Saiba mais</button>
          </div>

          {/* Delicie-se promos */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-between rounded-2xl bg-m3-surface-container-high p-3">
              <div>
                <p className="text-label-md font-extrabold text-m3-on-surface">Delicie-se</p>
                <p className="text-body-sm text-m3-on-surface-variant">Pão quentinho toda manhã</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-m3-on-primary text-m3-primary">
                <i className="fa-solid fa-bread-slice" />
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-m3-secondary-container p-3 text-white">
              <div>
                <p className="text-label-md font-extrabold">Premium</p>
                <p className="text-body-sm text-white/90">Cortes nobres</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-m3-secondary">
                <i className="fa-solid fa-drumstick-bite" />
              </span>
            </div>
          </div>
        </section>

        {/* Flash offer */}
        <section className="mx-4 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-m3-secondary px-2 py-1 text-label-sm font-extrabold uppercase text-white">⚡ Oferta Relâmpago</span>
              <span className="flex items-center gap-1 rounded-full bg-m3-error-container px-2 py-1 text-label-md font-bold text-m3-error">
                <i className="fa-solid fa-clock" /> {pad(h)}:{pad(m)}:{pad(sec)}
              </span>
            </div>
            <Link
              to="/gourmet"
              className="flex items-center gap-1 rounded-full bg-[#FBA707] px-2.5 py-1 text-label-sm font-extrabold text-[#3e2600]"
            >
              <i className="fa-solid fa-star" /> Gourmet
            </Link>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-3xl bg-white p-3 shadow ring-1 ring-black/5">
            <img src={MOBILE_FLASH.img} alt={MOBILE_FLASH.title} className="h-24 w-24 rounded-2xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-label-sm font-bold uppercase tracking-wide text-m3-secondary">{MOBILE_FLASH.category}</p>
              <h4 className="truncate text-headline-sm font-bold text-m3-on-surface">{MOBILE_FLASH.title}</h4>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-body-sm text-m3-outline line-through">{MOBILE_FLASH.oldLabel}</span>
                <span className="text-price-integer font-black text-m3-primary">
                  {MOBILE_FLASH.priceInteger}
                  <span className="text-price-cents">{MOBILE_FLASH.priceCents}</span>
                  <span className="text-body-sm font-semibold text-m3-on-surface-variant">{MOBILE_FLASH.unit}</span>
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="rounded-full bg-m3-error-container px-2 py-0.5 text-label-sm font-bold text-m3-error">{MOBILE_FLASH.discount}</span>
                <span className="text-label-sm font-semibold text-m3-on-surface-variant">Oferta válida hoje</span>
              </div>
            </div>
            <button
              onClick={() => quickAdd(MOBILE_FLASH.bagName, MOBILE_FLASH.bagPrice)}
              aria-label={`Adicionar ${MOBILE_FLASH.title}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-m3-primary text-white shadow-lg transition active:scale-90"
            >
              <i className="fa-solid fa-plus text-xl" />
            </button>
          </div>
        </section>

        {/* Products */}
        <section className="mx-4 mt-6">
          <div className="flex items-end justify-between">
            <h3 className="text-headline-md font-extrabold text-m3-on-surface">Hoje no Mercado</h3>
            <span className="flex items-center gap-1 text-label-md font-semibold text-amber-500">
              <i className="fa-solid fa-star" /> 4,9 geral
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3">
            {featured ? (
              <article className="flex items-center gap-3 rounded-3xl bg-m3-primary-container p-3 text-white shadow">
                <img src={featured.img} alt={featured.name} className="h-20 w-20 rounded-2xl object-cover" />
                <div className="min-w-0 flex-1">
                  <span className="rounded-full bg-[#FBA707] px-2 py-0.5 text-label-sm font-bold text-[#3e2600]">⭐ Mais Vendido</span>
                  <h4 className="mt-1 truncate text-headline-sm font-bold">{featured.name}</h4>
                  <p className="mt-0.5 flex items-center gap-1 text-label-sm text-white/85">
                    <i className="fa-solid fa-star text-[#FBA707]" /> {featured.rating.toFixed(1)}
                    avaliação geral
                  </p>
                </div>
              </article>
            ) : null}

            {MOBILE_PRODUCTS.map((p) => (
              <article
                key={p.id}
                className="flex items-center gap-3 rounded-3xl bg-m3-surface-container-low p-3 shadow ring-1 ring-black/5"
              >
                <img src={p.img} alt={p.name} className="h-24 w-24 rounded-2xl object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`rounded-full px-2 py-0.5 text-label-sm font-bold ${p.badgeClass}`}>{p.badge}</span>
                    <span className="flex items-center gap-0.5 text-label-sm font-semibold text-amber-500">
                      <i className="fa-solid fa-star" /> {p.rating.toFixed(1)}
                    </span>
                  </div>
                  <h4 className="mt-1 truncate text-headline-sm font-bold text-m3-on-surface">{p.name}</h4>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-body-sm text-m3-outline line-through">{p.oldLabel}</span>
                    <span className="text-price-integer font-black text-m3-primary">
                      {formatBRL(p.price).split(',')[0]}
                      <span className="text-price-cents">,{formatBRL(p.price).split(',')[1]}</span>
                      <span className="text-body-sm font-semibold text-m3-on-surface-variant">{p.unit}</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => quickAdd(p.name, p.price)}
                  aria-label={`Adicionar ${p.name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-m3-primary text-white shadow-lg transition active:scale-90"
                >
                  {added === p.name ? (
                    <i className="fa-solid fa-check" />
                  ) : (
                    <i className="fa-solid fa-plus text-xl" />
                  )}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="mx-4 mt-6 rounded-3xl bg-m3-surface-container p-4">
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-shield-heart text-m3-primary" />
            <span className="text-label-md font-extrabold text-m3-on-surface">Compra protegida</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { icon: 'fa-truck-fast', label: 'Entrega rápida' },
              { icon: 'fa-rotate-left', label: 'Devolução fácil' },
              { icon: 'fa-lock', label: 'Compra segura' },
            ].map((t) => (
              <div key={t.label} className="rounded-2xl bg-white p-3">
                <i className={`fa-solid ${t.icon} text-xl text-m3-primary`} />
                <p className="mt-1.5 text-label-sm font-semibold text-m3-on-surface-variant">{t.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gourmet entry */}
        <section className="mx-4 mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-m3-primary-container to-m3-primary p-4 text-white">
          <Link to="/gourmet" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBA707] text-xl">
              <i className="fa-solid fa-star" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-label-md font-extrabold uppercase tracking-wide">Varejão Gourmet</p>
              <p className="text-body-sm text-white/90">Edição editorial de sabores & ingredientes selecionados</p>
            </div>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </section>

        {/* FAQ */}
        <section className="mx-4 mt-6 space-y-2">
          <h3 className="text-headline-md font-extrabold text-m3-on-surface">Dúvidas frequentes</h3>
          {FAQ_ITEMS.slice(0, 5).map((f) => (
            <details key={f.q} className="rounded-2xl bg-white p-3.5 shadow ring-1 ring-black/5">
              <summary className="cursor-pointer text-label-md font-bold text-m3-on-surface">{f.q}</summary>
              <p className="mt-2 text-body-sm text-m3-on-surface-variant">{f.a}</p>
            </details>
          ))}
        </section>
      </main>

      {/* ── Bottom navigation ───────────────────────── */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-m3-outline-variant/50 bg-m3-surface pb-safe">
        <div className="grid grid-cols-5">
          <button className="flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-bold text-m3-primary">
            <i className="fa-solid fa-house text-lg" />
            Início
          </button>
          <button
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-semibold text-m3-on-surface-variant"
          >
            <i className="fa-solid fa-magnifying-glass text-lg" />
            Buscar
          </button>
          <button
            onClick={openCart}
            className="relative flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-semibold text-m3-on-surface-variant"
          >
            <i className="fa-solid fa-basket-shopping text-lg" />
            Compras
            {count > 0 && (
              <span className="absolute -top-0.5 right-1/2 flex h-4 min-w-4 translate-x-5 items-center justify-center rounded-full bg-m3-secondary px-1 text-[9px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button className="flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-semibold text-m3-on-surface-variant">
            <span className="relative">
              <i className="fa-solid fa-tag text-lg" />
              <span className="absolute -right-1.5 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#FBA707] text-[7px] text-[#3e2600]">%</span>
            </span>
            Ofertas
          </button>
          <button className="flex flex-col items-center gap-0.5 py-1.5 text-[10px] font-semibold text-m3-on-surface-variant">
            <i className="fa-solid fa-user text-lg" />
            Perfil
          </button>
        </div>
      </nav>

      {/* ── Sidebar menu ────────────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="absolute inset-0 h-full w-full bg-black/40" />
          <aside className="absolute left-0 top-0 flex h-full w-[300px] flex-col bg-m3-surface p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <img src={IMG.logoMobile} alt="Varejão" className="h-9 w-auto object-contain" />
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-m3-surface-container hover:bg-m3-surface-container-high"
                aria-label="Fechar"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <nav className="mt-6 space-y-1">
              {[
                { icon: 'fa-house', label: 'Início', href: '/' },
                { icon: 'fa-star', label: 'Varejão Gourmet', href: '/gourmet' },
                { icon: 'fa-fire-flame-curved', label: 'Ofertas Relâmpago', href: '/#flash' },
                { icon: 'fa-book-open', label: 'Encarte da Semana', href: '/#tabloide' },
                { icon: 'fa-kitchen-set', label: 'Receitas', href: '/#receitas' },
                { icon: 'fa-circle-question', label: 'Dúvidas', href: '/#faq' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-label-lg font-semibold text-m3-on-surface transition hover:bg-m3-surface-container"
                >
                  <i className={`fa-solid ${item.icon} w-5 text-m3-primary`} />
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-2 border-t border-m3-outline-variant/50 pt-4 text-body-sm text-m3-on-surface-variant">
              <p className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-m3-primary" /> {ADDRESS}</p>
              <p className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-m3-primary" /> {PHONE_DISPLAY}</p>
              <p className="flex items-center gap-2"><i className="fa-solid fa-clock text-m3-primary" /> {HOURS.replace('| ', '· ')}</p>
              <a
                href={waLink('Olá! Vim pelo aplicativo do Varejão.')}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-m3-primary py-2.5 text-label-md font-bold text-white"
              >
                <i className="fa-brands fa-whatsapp text-lg" /> Falar no WhatsApp
              </a>
            </div>
          </aside>
        </div>
      )}

      {/* ── Search sheet ────────────────────────────── */}
      {searchOpen && (
        <div className="fixed inset-0 z-40">
          <button aria-label="Fechar busca" onClick={() => setSearchOpen(false)} className="absolute inset-0 h-full w-full bg-black/40" />
          <div className="absolute inset-x-0 top-0 rounded-b-3xl bg-m3-surface p-4 shadow-2xl">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-magnifying-glass text-m3-outline" />
              <input
                autoFocus
                placeholder="Buscar produtos, marcas..."
                className="flex-1 bg-transparent py-2 text-body-lg outline-none"
              />
              <button onClick={() => setSearchOpen(false)} className="font-bold text-m3-primary">Cancelar</button>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="rounded-full bg-m3-surface-container px-3 py-1.5 text-label-sm font-semibold text-m3-on-surface">
                Hortifrúti
              </button>
              <button className="rounded-full bg-m3-surface-container px-3 py-1.5 text-label-sm font-semibold text-m3-on-surface">
                Carnes
              </button>
              <button className="rounded-full bg-m3-surface-container px-3 py-1.5 text-label-sm font-semibold text-m3-on-surface">
                Padaria
              </button>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-label-sm font-semibold text-m3-on-surface-variant">
              <i className="fa-solid fa-bell text-m3-primary" /> Novidades fresquinhas da semana ao se cadastrar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}