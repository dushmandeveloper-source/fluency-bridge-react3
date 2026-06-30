import { useEffect, useMemo, useRef, useState } from 'react';

import { COUNTRIES } from '../data/countries';

const flagSrc = (iso2) => `https://flagcdn.com/w40/${iso2}.png`;

// Combined phone field: a searchable country selector (flag + dial code) on the
// left and a free number input on the right, inside one bordered control. A
// hidden input carries the combined "<dial> <number>" so the parent form's
// FormData picks it up under `name` with no extra wiring.
export default function CountryPhoneInput({ name = 'phone', defaultIso2 = 'nz', required = false, variant = 'light' }) {
  const glass = variant === 'glass';
  const initial = useMemo(
    () => COUNTRIES.find((c) => c.iso2 === defaultIso2) ?? COUNTRIES.find((c) => c.iso2 === 'nz') ?? COUNTRIES[0],
    [defaultIso2]
  );

  const [country, setCountry] = useState(initial);
  const [number, setNumber] = useState('');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapRef = useRef(null);
  const searchRef = useRef(null);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    // Focus the search box when the list opens
    searchRef.current?.focus();
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.replace('+', '').includes(q.replace('+', '')) || c.iso2.includes(q)
    );
  }, [query]);

  const pick = (c) => {
    setCountry(c);
    setOpen(false);
    setQuery('');
  };

  return (
    <div className="relative" ref={wrapRef}>
      <div className={`w-full flex items-stretch border rounded-xl text-sm font-medium transition ${glass ? 'bg-white/10 border-white/25 focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/15' : 'bg-slate-50 border-slate-200 focus-within:border-[color:var(--custom-blue)] focus-within:ring-2 focus-within:ring-blue-100'}`}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`Country code: ${country.name} ${country.dial}`}
          className={`flex items-center gap-2 pl-3.5 pr-2.5 py-3 shrink-0 rounded-l-xl transition interactive-el ${glass ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
        >
          <img src={flagSrc(country.iso2)} alt="" width="22" height="16" className="w-[22px] h-4 object-cover rounded-[3px] shadow-sm" />
          <span className={`font-semibold tabular-nums ${glass ? 'text-white' : 'text-slate-900'}`}>{country.dial}</span>
          <svg className={`w-3.5 h-3.5 transition-transform ${glass ? 'text-white/60' : 'text-slate-400'} ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <span className={`w-px my-2 ${glass ? 'bg-white/20' : 'bg-slate-200'}`} />

        <input
          type="tel"
          inputMode="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="21 234 5678"
          aria-label="Phone number"
          className={`flex-1 min-w-0 bg-transparent px-3.5 py-3 focus:outline-none rounded-r-xl ${glass ? 'text-white placeholder-white/50' : 'text-slate-900 placeholder-slate-400'}`}
        />

        {/* Combined value for the form (e.g. "+64 21 234 5678") */}
        <input type="hidden" name={name} required={required} value={number ? `${country.dial} ${number}` : ''} />
      </div>

      {open && (
        <div className="absolute z-40 left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
          <div className="p-2 border-b border-slate-100">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code…"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[color:var(--custom-blue)]"
            />
          </div>
          <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 && <li className="px-4 py-3 text-sm text-slate-400">No matches</li>}
            {filtered.map((c) => {
              const active = c.iso2 === country.iso2;
              return (
                <li key={c.iso2}>
                  <button
                    type="button"
                    onClick={() => pick(c)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-left transition interactive-el ${active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                  >
                    <img src={flagSrc(c.iso2)} alt="" width="22" height="16" loading="lazy" className="w-[22px] h-4 object-cover rounded-[3px] shadow-sm shrink-0" />
                    <span className="flex-1 text-sm text-slate-700 font-medium truncate">{c.name}</span>
                    <span className="text-sm text-slate-400 font-semibold tabular-nums">{c.dial}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
