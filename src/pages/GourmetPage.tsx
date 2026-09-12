import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GOURMET_BAKERY,
  GOURMET_CESTA,
  GOURMET_HORTIFRUTI,
  GOURMET_MEATS,
  GOURMET_RECIPES,
  IMG,
  PHONE_DISPLAY,
  TABLOIDE_SPREADS,
  formatBRL,
  waLink,
} from '../lib/data';
import { useCart } from '../lib/cart';
import type { BagItem } from '../lib/data';
import TabloideCarousel from '../components/TabloideCarousel';

function GourmetNav({ onCategory }: { onCategory: (id: string) => void }) {
  const { count, openCart } = useCart();
  const chips = [
    { id: 'menu-editorial', label: 'Editorial', emoji: '📰' },
    { id: 'coluna-hortifruti', label: 'Hortifrúti', emoji: '🧺' },
    { id: 'coluna-carnes', label: 'Carnes & Cia', emoji: '🥩' },
    { id: 'coluna-padaria', label: 'Padaria & Doceria', emoji: '🥐' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-blue transition hover:bg-brand-blue/10"
            aria-label="Voltar ao catálogo"
          >
            <i className="fa-solid fa-arrow-left" />
          </Link>
          <img src={IMG.logoGourmetHeader} alt="Varejão Gourmet" className="h-10 w-auto object-contain" />
        </div>

        <div className="no-scrollbar hidden items-center gap-1 sm:flex sm:overflow-x-auto">
          {chips.map((c) => (
            <button
              key={c.id}
              onClick={() => onCategory(c.id)}
              className="whitespace-nowrap rounded-full border border-brand-blue/20 bg-white px-3 py-1.5 text-xs font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 md:block">
            EDIÇÃO nº 3
          </span>
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-white transition hover:bg-brand-blue"
            aria-label="Abrir sacola"
          >
            <i className="fa-solid fa-basket-shopping text-lg" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function EditorialCapa() {
  const { addItem } = useCart();
  const [zoom, setZoom] = useState(false);

  return (
    <section id="menu-editorial" className="scroll-mt-20 border-b-4 border-double border-brand-blue bg-brand-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
        {/* left column */}
        <div className="relative">
          <p className="watermark-text absolute -left-1 top-24 hidden h-[420px] text-[11px] font-extrabold uppercase tracking-[0.35em] text-brand-blue/30 lg:block">
            SUPERMERCADOS VAREJÃO SÃO FRANCISCO
          </p>

          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white">
            <i className="fa-solid fa-bolt" /> Gourmet Lookbook
          </span>
          <h1 className="font-display mt-4 text-4xl font-bold leading-none text-brand-ink sm:text-6xl">
            A ARTE DE<br />
            <span className="text-brand-red">SABOREAR</span> O<br />
            SIMPLES<span className="text-brand-blue">.</span>
          </h1>
          <p className="mt-4 max-w-md font-jakarta text-sm leading-relaxed text-slate-600">
            Bem-vindo à edição sensorial do Varejão São Francisco. Inspirados pela coragem de Dona Geni e pela tradição das
            barracas da feirinha, selecionamos ingredientes que viram memória e história na sua mesa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#sacola"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-ink transition hover:brightness-95"
            >
              <i className="fa-solid fa-basket-shopping" />
              Para o Item no. 1000 — Cesta Mestre
            </a>
            <a
              href="#coluna-carnes"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-6 py-3 font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              ✔️ Ver Item no. 1001 — Picanha no. 1001
            </a>
          </div>

          {/* Cesta Mestre card */}
          <article className="mt-8 max-w-md rounded-2xl border-2 border-brand-blue bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between border-b-2 border-double border-brand-blue pb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-blue">Oferta da Capa · Item no. 1000</span>
              <span className="badge-stamp flex h-10 w-10 items-center justify-center bg-brand-gold text-[10px] font-extrabold text-brand-ink">
                OFERTA
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-brand-ink">{GOURMET_CESTA.name}</h3>
                <p className="mt-1 text-xs text-slate-600">{GOURMET_CESTA.desc}</p>
                <p className="mt-2 text-xs text-slate-500">
                  <s>{GOURMET_CESTA.oldLabel}</s>{' '}
                  <span className="text-xl font-black text-brand-blue">
                    {formatBRL(GOURMET_CESTA.price).split(',')[0]}
                    <span className="text-sm">,{formatBRL(GOURMET_CESTA.price).split(',')[1]}</span>
                  </span>
                </p>
              </div>
              <button
                onClick={() => addItem({ name: GOURMET_CESTA.bagName, price: GOURMET_CESTA.price })}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-ink transition hover:brightness-95"
                aria-label="Guardar cesta na sacola"
              >
                <i className="fa-solid fa-basket-shopping text-xl" />
              </button>
            </div>
          </article>
        </div>

        {/* right column */}
        <div className="relative">
          <img
            src={IMG.tabloide4Spread2}
            alt="Cesta Gourmet da capa"
            className={`w-full rounded-r-[60px] border-4 border-white object-cover shadow-2xl ${zoom ? 'rounded-l-[60px]' : ''}`}
            loading="lazy"
          />
          <button
            onClick={() => setZoom((z) => !z)}
            className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow transition hover:bg-brand-blue hover:text-white"
            aria-label="Ampliar capa"
          >
            <i className={`fa-solid ${zoom ? 'fa-compress' : 'fa-magnifying-glass-plus'}`} />
          </button>
          <div className="absolute -bottom-5 left-8 rounded-full bg-brand-red px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg">
            Cesta Mestre — Edição nº 3
          </div>
        </div>
      </div>
    </section>
  );
}

function HortifrutiColumn() {
  const { addItem } = useCart();
  return (
    <section id="coluna-hortifruti" className="scroll-mt-20 border-b-2 border-double border-brand-blue/30 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-double border-brand-blue pb-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand-blue">Coluna Especial</p>
            <h2 className="font-display text-3xl font-bold text-brand-ink">Hortifrúti</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
            <i className="fa-solid fa-leaf" /> Colheita de hoje
          </span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {GOURMET_HORTIFRUTI.map((item) => (
            <article
              key={item.id}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-brand-blue hover:shadow-lg"
            >
              <div className="relative shrink-0">
                <img src={item.img} alt={item.name} className="h-24 w-24 rounded-2xl object-cover" loading="lazy" />
                <span className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${item.tagClass}`}>
                  {item.tag}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{item.no}</p>
                <h3 className="font-bold leading-tight text-brand-ink">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-slate-400 line-through">{item.oldLabel}</span>
                  <span className="font-black text-brand-blue">
                    {formatBRL(item.price).split(',')[0]}
                    <span className="text-sm">,{formatBRL(item.price).split(',')[1]}</span>
                    <span className="ml-1 text-xs font-bold text-slate-500">{item.unit}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => addItem({ name: item.bagName, price: item.price })}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition hover:bg-brand-red-dark active:scale-90"
                aria-label={`Guardar ${item.name} na sacola`}
              >
                <i className="fa-solid fa-basket-shopping" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarnesColumn() {
  const { addItem } = useCart();
  const star = GOURMET_MEATS.find((m) => m.star) ?? GOURMET_MEATS[0];

  const addBag = (name: string, price: number) => addItem({ name, price } as BagItem);

  return (
    <section id="coluna-carnes" className="scroll-mt-20 bg-[#241a12] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-double border-brand-gold pb-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-brand-gold">Coluna Especial</p>
            <h2 className="font-display text-3xl font-bold">Carnes & Cia</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-extrabold text-brand-ink">
            <i className="fa-solid fa-trophy" /> A estrela da edição
          </span>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Star meat */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red to-brand-red-dark p-1 shadow-2xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#2b2017]">
              <img src={star.img} alt={star.name} className="h-64 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-[11px] font-extrabold text-brand-ink">
                ⭐ ESTRELA DA EDIÇÃO
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold">{star.dept}</p>
                <h3 className="font-display text-2xl font-bold">{star.name}</h3>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <s className="text-sm text-white/50">{star.oldLabel}</s>
                    <p className="text-3xl font-black text-brand-gold">
                      {formatBRL(star.price).split(',')[0]}
                      <span className="text-base">,{formatBRL(star.price).split(',')[1]}</span>
                      <span className="ml-1 text-sm font-bold text-white/70">{star.unit}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => addBag(star.bagName, star.price)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-ink transition hover:brightness-95"
                    aria-label={`Guardar ${star.name}`}
                  >
                    <i className="fa-solid fa-basket-shopping text-xl" />
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/70">{star.desc}</p>
              </div>
            </div>
          </article>

          <div className="space-y-4">
            {GOURMET_MEATS.map((m) => (
              <article
                key={m.id}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <img src={m.img} alt={m.name} className="h-20 w-20 rounded-xl object-cover" loading="lazy" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${m.badgeClass}`}>{m.badge}</span>
                    <p className="truncate text-[10px] font-semibold uppercase tracking-widest text-white/50">{m.dept}</p>
                  </div>
                  <h3 className="mt-1 font-bold leading-tight">{m.name}</h3>
                  <p className="mt-0.5 line-clamp-1 text-xs text-white/60">{m.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <s className="text-[11px] text-white/40">{m.oldLabel}</s>
                  <p className="font-black text-brand-gold">{formatBRL(m.price)}</p>
                  <button
                    onClick={() => addBag(m.bagName, m.price)}
                    className="mt-1 inline-flex items-center gap-1 rounded-full bg-brand-gold px-3 py-1 text-[11px] font-extrabold text-brand-ink transition hover:brightness-95"
                  >
                    <i className="fa-solid fa-basket-shopping text-xs" /> Ir para o item
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReceitasDestaque() {
  const { addItem } = useCart();
  const bakery = GOURMET_BAKERY[0];
  const cake = GOURMET_BAKERY[1];

  return (
    <section id="coluna-padaria" className="scroll-mt-20 bg-[#f6efe3] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
            <i className="fa-solid fa-crown" /> Padaria & Doceria
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-ink">Receitas da Coluna</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {GOURMET_RECIPES.map((r) => (
            <article
              key={r.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img src={r.img} alt={r.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-extrabold ${r.tagClass}`}>{r.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-brand-ink">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                <a
                  href={waLink(r.wppMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue transition hover:text-brand-red"
                >
                  Pedir kit completo no WhatsApp <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => addItem({ name: bakery.bagName, price: bakery.price })}
            className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 font-bold text-white transition hover:bg-brand-blue"
          >
            <i className="fa-solid fa-basket-shopping" /> Guardar {bakery.title}
          </button>
          <button
            onClick={() => addItem({ name: cake.bagName, price: cake.price })}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink px-6 py-3 font-bold text-brand-ink transition hover:bg-brand-ink hover:text-white"
          >
            <i className="fa-solid fa-basket-shopping" /> Guardar {cake.title}
          </button>
        </div>
      </div>
    </section>
  );
}

function SacolaSection() {
  const { items, totalLabel, removeItem, checkoutLink } = useCart();
  return (
    <section id="sacola" className="scroll-mt-20 bg-brand-ink py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col items-start gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-3xl text-brand-ink">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Sacola<br />
              <span className="text-brand-gold">Editorial</span>
            </h2>
            <p className="max-w-sm text-white/70">
              Seus itens favoritos da edição Gourmet guardados na sacola, prontinhos para finalizar o pedido pelo WhatsApp —
              com a gentileza de sempre.
            </p>
            <a
              href={checkoutLink || waLink('Olá! Quero finalizar meu pedido da Edição Gourmet.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 font-bold text-white transition hover:bg-brand-green-dark"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Falar com um Feirante
            </a>
            <p className="text-xs text-white/50">Pagamento na entrega: PIX · Cartões · Alelo / VR / Sodexo</p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-5">
            <div className="mb-4 flex items-center justify-between border-b-2 border-double border-brand-gold pb-3">
              <span className="text-sm font-extrabold uppercase tracking-widest text-brand-gold">
                Itens ({items.length})
              </span>
              <span className="text-xl font-black text-brand-gold">{totalLabel}</span>
            </div>
            {items.length === 0 ? (
              <p className="py-8 text-center text-sm text-white/60">
                Sua sacola está vazia. Navegue pela edição e toque em <i className="fa-solid fa-basket-shopping" /> para guardar
                itens aqui.
              </p>
            ) : (
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3 py-2.5">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-brand-gold">{formatBRL(item.price)}</span>
                      <button
                        onClick={() => removeItem(i)}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition hover:bg-brand-red hover:text-white"
                        aria-label={`Remover ${item.name}`}
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-center text-xs text-white/50">Total da sacola calculado automaticamente para o WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GourmetFooter() {
  return (
    <footer className="bg-[#151019] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <img src={IMG.logoGourmetFooter} alt="Varejão São Francisco" className="h-14 w-auto object-contain" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Edição editorial trimestral do Supermercados Varejão São Francisco. Receitas, histórias de nossos feirantes e
              ingredientes selecionados — do campo à sua mesa.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-brand-gold">Expediente Editorial</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Direção editorial · Dona Geni</li>
              <li>Curadoria de cortes · Açougue Nota 10</li>
              <li>Seleção de hortifrúti · Produtores parceiros</li>
              <li>Confeitaria · Padaria Varejão</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-brand-gold">Atendimento</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Televendas: (11) 4002-8922</li>
              <li>WhatsApp: {PHONE_DISPLAY}</li>
              <li>Av. São Francisco, 1500 - Centro</li>
              <li>Seg à Sáb 07h-22h · Dom 07h-20h</li>
            </ul>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-blue"
            >
              <i className="fa-solid fa-arrow-left" /> Voltar ao Catálogo
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:px-6 lg:px-8">
          <p>© 2025 Supermercados Varejão São Francisco. Edição Gourmet. Todos os direitos reservados.</p>
          <p>Pagamento na Entrega: PIX • Cartões • Alelo / VR / Sodexo</p>
        </div>
      </div>
    </footer>
  );
}

export default function GourmetPage() {
  const { count } = useCart();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-paper">
      <GourmetNav onCategory={scrollTo} />
      <EditorialCapa />
      <TabloideCarousel
        pages={TABLOIDE_SPREADS}
        badge="Lookbook de Ofertas"
        title="O Encarte do Mercadão na Edição Editorial"
        eventLabel="Tabloide Gourmet — confira os destaques da semana e guarde na sacola."
      />
      <HortifrutiColumn />
      <CarnesColumn />
      <ReceitasDestaque />
      <SacolaSection />
      <GourmetFooter />
      {count > 0 && (
        <button
          onClick={() => scrollTo('sacola')}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-2xl transition hover:brightness-95"
        >
          <i className="fa-solid fa-basket-shopping" />
          {count} item{count === 1 ? '' : 's'} na sacola
        </button>
      )}
    </div>
  );
}