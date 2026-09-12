import { useState } from 'react';
import type { FaqItem } from '../lib/data';
import { waLink } from '../lib/data';

export default function Faq({ items, title = 'Perguntas Frequentes' }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
            <i className="fa-solid fa-circle-question" />
            Dúvidas
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">{title}</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border transition ${
                  isOpen ? 'border-brand-blue bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-bold text-slate-900">{item.q}</span>
                  <i className={`fa-solid fa-chevron-down text-brand-blue transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{item.a}</p>}
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Não encontrou sua resposta?{' '}
          <a
            href={waLink('Olá! Tenho uma dúvida sobre o Varejão São Francisco.')}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand-blue underline underline-offset-2 hover:text-brand-red"
          >
            Fale com a gente no WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}