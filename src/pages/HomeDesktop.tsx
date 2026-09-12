import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ADDRESS,
  CATEGORIES,
  FAQ_ITEMS,
  FLASH_DEALS,
  HOURS,
  IMG,
  PHONE_DISPLAY,
  PHONE_TELEVENDAS,
  PRODUCTS,
  RECIPES,
  TABLOIDE_PAGES,
  TESTIMONIALS,
  formatBRL,
  waLink,
} from '../lib/data';
import type { Product } from '../lib/data';
import StarRating from '../components/StarRating';
import FlashCarousel from '../components/FlashCarousel';
import TabloideCarousel from '../components/TabloideCarousel';
import Faq from '../components/Faq';
import headerPattern from '../assets/Ativo 3padrão_azul.svg';

type FilterKey = 'todos' | Product['category'];

function TopBar() {
  return (
    <div className="bg-brand-red text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 sm:flex">
            <i className="fa-solid fa-location-dot" /> {ADDRESS}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-clock" /> {HOURS}
          </span>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <span className="hidden items-center gap-1.5 sm:flex">
            <i className="fa-solid fa-phone" /> Televendas: {PHONE_TELEVENDAS}
          </span>
          <a
            href={waLink('Olá! Vim pelo site do Varejão São Francisco.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 transition hover:bg-white/25"
          >
            <i className="fa-brands fa-whatsapp" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header
      className="sticky top-0 z-40 bg-white shadow-lg"
      style={{
        backgroundImage: `url("${headerPattern}"), linear-gradient(to right, #0000ffe7, #f5f5f85d)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#0112ad77',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0">
          <img src="/src/assets/Ativo 5logos.svg" alt="Supermercados Varejão São Francisco" className="h-30 w-auto object-contain shadow-lg" />
        </Link>

        <div className="bg-white hidden flex-1 items-center gap-2 rounded-full border-2 border-slate-200 px-4 py-2 focus-within:border-brand-blue lg:flex lg:max-w-xl">
          <i className="fa-solid fa-magnifying-glass text-slate-400" />
          <input
            type="text"
            placeholder="Busque por produtos, marcas ou departamentos..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
          <button className="rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold text-white hover:bg-brand-blue-dark">
            Buscar
          </button>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            to="/gourmet"
            className="hidden items-center gap-1.5 rounded-full bg-brand-gold px-4 py-2 text-sm font-extrabold text-brand-ink transition hover:brightness-95 sm:inline-flex"
          >
            <i className="fa-solid fa-star" />
            Varejão Gourmet
          </Link>
          <a
            href={waLink('Olá! Gostaria de montar meu pedido.')}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-green-dark lg:inline-flex"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
            Pedir no WhatsApp
          </a>
          <span className="hidden h-9 w-px bg-brand-white md:block" />
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue text-brand-blue transition hover:border-brand-white hover:text-brand-gold">
            <i className="fa-solid fa-basket-shopping text-lg" />
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </nav>
      </div>

      <nav className="hidden bg-brand-red border-t border-slate-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
          {[
            { label: 'Ofertas Relâmpago', href: '#flash' },
            { label: 'Encarte da Semana', href: '#tabloide' },
            { label: 'Hortifrúti', href: '#catalogo' },
            { label: 'Açougue', href: '#catalogo' },
            { label: 'Padaria', href: '#catalogo' },
            { label: 'Laticínios', href: '#catalogo' },
            { label: 'Receitas', href: '#receitas' },
            { label: 'Dúvidas', href: '#faq' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-b-2 border-transparent px-3 py-2.5 text-[13px] font-semibold text-white transition hover:border-white hover:text-brand-red
              hover:bg-white hover:backdrop-blur-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-blue via-brand-blue to-blue-900 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-ink">
            <i className="fa-solid fa-tag" /> Hortifrúti Fresco Todos os Dias
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            O <span className="text-brand-gold">melhor preço</span> de São Francisco
            <span className="text-brand-gold">.</span>
          </h1>
          <p className="mt-4 max-w-lg text-white/80">
            Legumes, verduras e frutas chegam todos os dias direto de produtores parceiros. E você pede tudo pelo WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-ink transition hover:brightness-95"
            >
              Ver ofertas da semana
              <i className="fa-solid fa-arrow-down" />
            </a>
            <a
              href={waLink('Quero montar uma cesta de Hortifrúti com vocês!')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-bold text-white ring-1 ring-white/30 transition hover:bg-white/25"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Monte sua cesta
            </a>
          </div>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {[
              { icon: 'fa-truck-fast', label: 'Entrega em até 2h' },
              { icon: 'fa-shield-heart', label: 'Qualidade garantida' },
              { icon: 'fa-credit-card', label: 'Pague na entrega' },
            ].map((f) => (
              <div key={f.label} className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                <i className={`fa-solid ${f.icon} text-brand-gold`} />
                <p className="mt-1.5 text-[11px] font-semibold leading-tight">{f.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img src={IMG.heroHorti} alt="Hortifrúti fresco" className="w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-5 left-6 rounded-2xl bg-white p-4 text-slate-900 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-brand-red">
                <i className="fa-solid fa-leaf" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-500">Entregue com frescor</p>
                <p className="font-extrabold">Colhido hoje de manhã</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCatalog() {
  const [filter, setFilter] = useState<FilterKey>('todos');
  const visible = filter === 'todos' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="catalogo" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red">Catálogo de ofertas</span>
            <h2 className="mt-1 text-3xl font-extrabold text-slate-900">Ofertas em destaque</h2>
            <p className="mt-1 text-sm text-slate-600">Validade até quinta-feira ou fim de estoques.</p>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue sm:flex">
            <i className="fa-solid fa-circle-check text-green-600" />
            Preço mínimo de garantia
          </span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter === cat.key
                  ? 'bg-brand-blue text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold ${product.badgeClass}`}>
                  {product.badge}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-extrabold text-brand-red shadow">
                  -{Math.round((1 - product.price / parsePrice(product.oldLabel)) * 100)}%
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{product.dept}</p>
                <h3 className="font-bold leading-snug text-slate-900">{product.name}</h3>
                <div className="flex items-center gap-1.5">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-[11px] text-slate-400">({product.ratingCount})</span>
                </div>
                <div className="mt-auto flex items-end gap-2 pt-1">
                  <span className="text-xs text-slate-400 line-through">{product.oldLabel}</span>
                  <span className="text-xl font-black text-brand-blue">
                    {formatBRL(product.price).split(',')[0]}
                    <span className="text-sm">,{formatBRL(product.price).split(',')[1]}</span>
                    <span className="ml-0.5 text-xs font-bold text-slate-500">{product.unit}</span>
                  </span>
                </div>
                <a
                  href={waLink(
                    `Olá! Gostaria de pedir ${product.name} (${formatBRL(product.price)}${product.unit}) da promoção.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-green px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-green-dark"
                >
                  <i className="fa-brands fa-whatsapp text-base" />
                  Pedir
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function parsePrice(label: string): number {
  return Number(label.replace('R$ ', '').replace('.', '').replace(',', '.'));
}

function ServiceStrip() {
  const services = [
    { icon: 'fa-truck-fast', title: 'Entrega Express', desc: 'Em até 2 horas para pedidos até as 17h' },
    { icon: 'fa-stamp', title: 'Procedência SIF', desc: 'Carnes de frigoríficos inspecionados' },
    { icon: 'fa-hand-holding-dollar', title: 'Pague na entrega', desc: 'PIX, cartões e vale-alimentação' },
    { icon: 'fa-mobile-screen-button', title: 'Peça pelo WhatsApp', desc: 'Atendimento rápido com listas salvas' },
  ];
  return (
    <section className="border-y border-slate-100 bg-blue-50/40 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {services.map((s) => (
          <div key={s.title} className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-xl text-brand-blue">
              <i className={`fa-solid ${s.icon}`} />
            </span>
            <div>
              <p className="font-bold text-slate-900">{s.title}</p>
              <p className="text-xs leading-snug text-slate-500">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recipes() {
  return (
    <section id="receitas" className="scroll-mt-24 bg-[#f8f6ff] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
            <i className="fa-solid fa-kitchen-set" />
            Receitas do Varejão
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Ideias para a sua mesa</h2>
          <p className="mt-2 text-sm text-slate-600">Receitas práticas com os ingredientes da semana.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {RECIPES.map((r) => (
            <article
              key={r.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img src={r.img} alt={r.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold ${r.tagClass}`}>{r.tag}</span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <i className="fa-regular fa-clock" /> {r.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <i className="fa-solid fa-utensils" /> {r.portions}
                  </span>
                </div>
                <h3 className="font-bold leading-snug text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                <a
                  href={waLink(r.wppMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red transition hover:text-brand-red-dark"
                >
                  Pedir ingredientes pelo WhatsApp
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={waLink('Olá! Quero receber todas as receitas da semana.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green px-5 py-2.5 text-sm font-bold text-brand-green transition hover:bg-brand-green hover:text-white"
          >
            <i className="fa-brands fa-whatsapp" />
            Receber receitas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-ink">
            <i className="fa-solid fa-star" />
            Quem compra, recomenda
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Histórias de quem pede todo dia</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-100 bg-blue-50/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold ${t.initialsClass}`}>
                  {t.initials}
                </span>
                <div>
                  <figcaption className="font-bold text-slate-900">{t.name}</figcaption>
                  <p className="text-xs text-slate-500">{t.meta}</p>
                </div>
              </div>
              <StarRating rating={5} size="sm" />
              <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">{t.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GourmetBanner() {
  return (
    <section className="bg-[#f7f0e6]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-brand-ink via-[#20243a] to-brand-blue p-10 text-white lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-ink">
              <i className="fa-solid fa-star" /> Varejão Gourmet
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A edição editorial de sabores & ingredientes selecionados
            </h2>
            <p className="mt-3 max-w-md text-white/75">
              Cortes nobres, hortifrúti de colheita diária, confeitaria própria e uma sacola de compras com finalização pelo
              WhatsApp — tudo em um lookbook inspirado no melhor da gastronomia.
            </p>
            <Link
              to="/gourmet"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-ink transition hover:brightness-95"
            >
              Explorar edição Gourmet
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {FLASH_DEALS.slice(0, 3).map((d) => (
              <div key={d.title} className="overflow-hidden rounded-xl">
                <img src={d.img} alt={d.title} className="h-24 w-full object-cover sm:h-32" loading="lazy" />
                <p className="bg-white/10 px-2 py-1.5 text-center text-[10px] font-bold text-white/90 backdrop-blur">
                  {d.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopFooter() {
  const destaques = PRODUCTS.slice(0, 6);
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={IMG.logoFooter} alt="Varejão São Francisco" className="h-14 w-auto object-contain" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              O supermercado da sua família, com hortifrúti de produtores parceiros, açougue SIF e entrega rápida no conforto
              do seu lar.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-brand-gold" /> {ADDRESS}
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-brand-gold" /> Televendas: {PHONE_TELEVENDAS}
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-brand-gold" /> WhatsApp: {PHONE_DISPLAY}
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              {['fa-instagram', 'fa-facebook-f', 'fa-square-x-twitter', 'fa-youtube'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={icon}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-gold hover:text-brand-ink"
                >
                  <i className={`fa-brands ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-brand-gold">Confira os destaques</h3>
            <ul className="space-y-2.5">
              {destaques.map((p) => (
                <li key={p.id}>
                  <a href="#catalogo" className="text-sm text-white/70 transition hover:text-white">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-brand-gold">Institucional</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#receitas" className="transition hover:text-white">Nossa história</a></li>
              <li><Link to="/gourmet" className="transition hover:text-white">Varejão Gourmet</Link></li>
              <li><a href="#" className="transition hover:text-white">Seja um franqueado</a></li>
              <li><a href="#" className="transition hover:text-white">Trabalhe conosco</a></li>
              <li><a href="#" className="transition hover:text-white">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-brand-gold">Fale com a gente</h3>
            <p className="text-sm leading-relaxed text-white/70">Seg à Sáb: 07h às 22h<br />Dom e Feriados: 07h às 20h</p>
            <a
              href={waLink('Olá! Preciso de ajuda com meu pedido.')}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-green-dark"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Falar com o Varejão
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-sm text-white/60 sm:px-6 lg:px-8">
          <p>© 2025 Supermercados Varejão São Francisco. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white/80">PIX</span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white/80">Cartões de Crédito</span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white/80">Alelo</span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white/80">VR</span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white/80">Sodexo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={waLink('Olá! Vim pelo site do Varejão São Francisco.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-2xl text-white shadow-2xl shadow-green-600/40 transition hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}

export default function HomeDesktop() {
  return (
    <div className="hidden md:block">
      <TopBar />
      <Header />
      <Hero />
      <FlashCarousel />
      <ServiceStrip />
      <TabloideCarousel
        pages={TABLOIDE_PAGES}
        badge="Encarte Oficial da Semana"
        title="Tabloide de Ofertas"
        eventLabel="Válido apenas enquanto durarem os estoques."
      />
      <ProductCatalog />
      <Recipes />
      <Testimonials />
      <GourmetBanner />
      <Faq items={FAQ_ITEMS} />
      <DesktopFooter />
      <WhatsAppFloat />
    </div>
  );
}