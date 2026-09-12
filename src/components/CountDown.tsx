import { useEffect, useState } from 'react';

const START_SECONDS = 3 * 3600 + 45 * 60 + 9;

export function useCountdown(initial = START_SECONDS) {
  const [seconds, setSeconds] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 0) return initial;
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [initial]);
  return seconds;
}

export function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export function CountdownChip({ className = '' }: { className?: string }) {
  const s = useCountdown();
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${className}`}
    >
      <i className="fa-solid fa-fire-flame-curved text-amber-300" />
      Acaba em {pad(h)}:{pad(m)}:{pad(sec)}
    </span>
  );
}