import { useEffect, useState } from 'react';
import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#/', route: 'home', color: 'var(--custom-green)' },
  { label: 'Home 2', href: '#/home2', route: 'home2', color: 'var(--custom-green)' },
  { label: 'Fluency Bridge', href: '#', route: null, color: 'var(--custom-green)' },
  { label: 'NZ Academic Bridge', href: '#', route: null, color: 'var(--custom-blue)' },
  { label: 'About Us', href: '#/about', route: 'about', color: 'var(--custom-blue)' },
  { label: 'Consultant Team', href: '#/team', route: 'team', color: 'var(--custom-green)' },
  { label: 'Contact Us', href: '#/contact', route: 'contact', color: 'var(--custom-green)' },
];

export default function Navbar({ route = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On desktop the centre links have no glass pill so they read cleanly over the
  // banner. Once the page scrolls they can pass over white content, so fade the
  // glass background (and dark text) back in to keep them visible.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Flex layout with a flex-1 centre group so the nav pill sizes to its content
  // and stays centred without a fixed 1/3 column (which used to overflow). The
  // full nav only appears at xl; below that the hamburger handles navigation,
  // so mid-size laptops never get a cramped/overlapping bar.
  return (
    <nav className="fixed w-full z-50 top-4 sm:top-6 px-4 lg:px-8 xl:px-12 flex justify-between items-center gap-3 interactive-el">
      <div className="flex items-center shrink-0 glass-nav py-2 px-4 sm:px-5 rounded-full">
        <img src={fluencyBridgeLogo} alt="Fluency Bridge" className="h-9 sm:h-10 lg:h-12 object-contain" />
      </div>

      {/* Hidden until xl: below that, the hamburger menu below handles navigation
          instead. On desktop the links sit directly on the banner (no glass pill);
          a soft text-shadow keeps them legible over the photo. */}
      <div className="hidden xl:flex flex-1 justify-center min-w-0">
        <div className={`rounded-full p-1.5 flex items-center transition-colors duration-300 ${scrolled ? 'glass-nav' : ''}`}>
          {NAV_LINKS.map((link, idx) => {
            const active = link.route === route;
            return (
              <span key={link.label} className="flex items-center">
                {idx > 0 && <span className={`mx-1 ${scrolled ? 'text-slate-300' : 'text-white/40'}`}>|</span>}
                <a
                  href={link.href}
                  className={
                    active
                      ? 'text-white px-3.5 2xl:px-4 py-2 rounded-full font-bold text-xs 2xl:text-sm shadow-md transition whitespace-nowrap'
                      : `px-2.5 2xl:px-3 py-2 text-xs 2xl:text-sm font-semibold transition hover:opacity-70 whitespace-nowrap ${scrolled ? 'text-slate-600' : 'text-white/90'}`
                  }
                  style={active ? { backgroundColor: link.color } : scrolled ? { color: link.color } : { textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
                >
                  {link.label}
                </a>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex items-center shrink-0 gap-2 sm:gap-3">
        <a
          href="https://wa.me/642108631134"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="glass-nav rounded-full px-3 sm:px-5 xl:px-6 py-2.5 flex items-center gap-2 font-bold transition hover:bg-slate-50"
          style={{ color: 'var(--custom-blue)' }}
        >
          <svg className="w-4 h-4 shrink-0" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="hidden sm:inline text-xs xl:text-sm whitespace-nowrap">Start a Conversation</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="xl:hidden glass-nav rounded-full p-3 flex items-center justify-center"
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
        <div className="absolute top-full left-4 right-4 mt-3 xl:hidden glass-nav rounded-2xl p-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = link.route === route;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  active
                    ? 'text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md transition'
                    : 'text-slate-600 px-4 py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-70'
                }
                style={active ? { backgroundColor: link.color } : { color: link.color }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
