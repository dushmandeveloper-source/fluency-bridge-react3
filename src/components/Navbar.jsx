import { useState } from 'react';
import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true, color: 'var(--custom-green)' },
  { label: 'English Coaching', href: '#', color: 'var(--custom-green)' },
  { label: 'NZ Academic Bridge', href: '#', color: 'var(--custom-blue)' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // flex justify-between on mobile (2 visible groups); lg:grid grid-cols-3 once the center nav pill appears, so it lands at the true page center regardless of the side groups' widths
  return (
    <nav className="fixed w-full z-50 top-4 sm:top-6 px-4 lg:px-12 flex justify-between lg:grid lg:grid-cols-3 items-center interactive-el">
      <div className="flex items-center justify-self-start glass-nav py-2 px-4 sm:px-5 rounded-full">
        <img src={fluencyBridgeLogo} alt="Fluency Bridge" className="h-9 sm:h-10 lg:h-12 object-contain" />
      </div>

      {/* Hidden until lg: below that, the hamburger menu below handles navigation instead */}
      <div className="hidden lg:flex justify-center">
        <div className="glass-nav rounded-full p-1.5 flex items-center">
          {NAV_LINKS.map((link, idx) => (
            <span key={link.label} className="flex items-center">
              {idx > 0 && <span className="text-slate-300 mx-2">|</span>}
              <a
                href={link.href}
                className={
                  link.active
                    ? 'text-white px-6 py-2 rounded-full font-bold text-xs lg:text-sm shadow-md transition whitespace-nowrap'
                    : 'text-slate-600 px-4 py-2 text-xs lg:text-sm font-semibold transition hover:opacity-70 whitespace-nowrap'
                }
                style={link.active ? { backgroundColor: link.color } : { color: link.color }}
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-self-end gap-2 sm:gap-3">
        <a
          href="https://wa.me/642108631134"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="glass-nav rounded-full px-3 sm:px-6 py-2.5 flex items-center gap-2 font-bold transition hover:bg-slate-50"
          style={{ color: 'var(--custom-blue)' }}
        >
          <svg className="w-4 h-4 shrink-0" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="hidden sm:inline text-xs lg:text-sm whitespace-nowrap">+64 210 863 1134</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden glass-nav rounded-full p-3 flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-3 lg:hidden glass-nav rounded-2xl p-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                link.active
                  ? 'text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md transition'
                  : 'text-slate-600 px-4 py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-70'
              }
              style={link.active ? { backgroundColor: link.color } : { color: link.color }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
