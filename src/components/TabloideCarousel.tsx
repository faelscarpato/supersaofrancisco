import { useState } from 'react';
import type { TabloidPage } from '../lib/data';
import { waLink } from '../lib/data';

export default function TabloideCarousel({
  pages,
  badge,
  title,
  eventLabel,
}: {
  pages: TabloidPage[];
  badge: string;
  title: string;
  eventLabel: string;
}) {
  const [cur, setCur] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const page = pages[cur];

  return (
    <section id="tabloide" className="scroll-mt-24 bg-gradient-to-b from-white to-blue-50/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
            <i className="fa-solid fa-fire-flame-curved text-amber-300" />
            {badge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">{eventLabel}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className={`overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl shadow-indigo-200 transition-all duration-300 ${
              zoomed ? 'max-w-7xl' : ''
            }`}
            style={{ transitionProperty: 'max-width' }}
          >
            <img src={page.img} alt={page.label} className="w-full select-none object-cover" draggable={false} />
          </div>

          <button
            onClick={() => setCur((c) => (c - 1 + pages.length) % pages.length)}
            aria-label="Página anterior"
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-lg transition hover:bg-brand-blue hover:text-white"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            onClick={() => setCur((c) => (c + 1) % pages.length)}
            aria-label="Próxima página"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-lg transition hover:bg-brand-blue hover:text-white"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => setZoomed((z) => !z)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1.5 text-xs font-bold text-white transition hover:bg-brand-blue-dark"
          >
            <i className={`fa-solid ${zoomed ? 'fa-compress' : 'fa-magnifying-glass-plus'}`} />
            {zoomed ? 'Reduzir' : 'Ampliar encarte'}
          </button>
          <span className="text-xs font-semibold text-slate-500">
            {cur + 1} / {pages.length} — {page.label}
          </span>
          <a
            href={waLink(`Olá! Quero receber o ${title} completo no WhatsApp.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3 py-1.5 text-xs font-bold text-white transition hover:bg-brand-green-dark"
          >
            <i className="fa-brands fa-whatsapp" />
            Receber encarte
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {pages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCur(i)}
              aria-label={p.label}
              className={`rounded-lg border text-[11px] font-semibold transition ${
                i === cur
                  ? 'border-brand-blue bg-brand-blue text-white'
                  : 'border-slate-300 bg-white text-slate-600 hover:border-brand-blue'
              }`}
            >
              <span className="px-3 py-1.5">{p.thumbLabel}</span>
            </button>
          ))}
        </div>

        {zoomed && (
          <p className="mt-4 text-center text-xs text-slate-400">Dica: abra o encarte em uma foto ou outro monitor para ampliar.</p>
        )}
      </div>
    </section>
  );
}