import { useEffect, useState } from 'react';
import { FLASH_DEALS, waLink } from '../lib/data';
import { CountdownChip } from './CountDown';

export default function FlashCarousel() {
  const [index, setIndex] = useState(0);
  const total = FLASH_DEALS.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [total]);

  const deal = FLASH_DEALS[index];

  return (
    <section id="flash" className="scroll-mt-24 bg-[#f4f1ff]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-lg text-white">
              <i className="fa-solid fa-bolt" />
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Ofertas Relâmpago</h2>
          </div>
          <div className="flex items-center gap-2">
            <CountdownChip />
            <span className="hidden text-xs font-medium text-slate-500 sm:inline">Alternando ofertas a cada 4 segundos</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-indigo-100">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[340px]">
              <img src={deal.img} alt={deal.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-brand-red shadow">
                <i className="fa-solid fa-bolt mr-1 text-brand-red" />
                {deal.discount}
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-brand-red px-3 py-1.5 text-xs font-bold text-white shadow">
                Economize {deal.saved}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red">{deal.category}</span>
              <h3 className="text-2xl font-extrabold leading-tight text-slate-900">{deal.title}</h3>
              <p className="text-sm text-slate-600">{deal.desc}</p>
              <div className="flex items-end gap-2">
                <span className="text-sm text-slate-400 line-through">{deal.oldLabel}</span>
                <span className="text-3xl font-black text-brand-blue">
                  {deal.newLabel.split(',')[0]}
                  <span className="text-xl">,{deal.newLabel.split(',')[1]}<span className="text-sm font-bold text-slate-500">{deal.unit}</span></span>
                </span>
              </div>
              <a
                href={waLink(deal.wppMsg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-green-dark"
              >
                <i className="fa-brands fa-whatsapp text-base" />
                Enviar oferta no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {FLASH_DEALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para oferta ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-brand-blue' : 'w-2.5 bg-indigo-200 hover:bg-indigo-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}