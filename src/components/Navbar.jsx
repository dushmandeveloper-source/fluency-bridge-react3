import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true, color: 'var(--custom-green)' },
  { label: 'English Coaching', href: '#', color: 'var(--custom-green)' },
  { label: 'NZ Academic Bridge', href: '#', color: 'var(--custom-blue)' },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-6 px-4 md:px-12 flex justify-between items-center interactive-el">
      <div className="flex items-center glass-nav py-2 px-5 rounded-full">
        <img src={fluencyBridgeLogo} alt="Fluency Bridge" className="h-10 md:h-12 object-contain" />
      </div>

      <div className="hidden md:flex glass-nav rounded-full p-1.5 items-center">
        {NAV_LINKS.map((link, idx) => (
          <span key={link.label} className="flex items-center">
            {idx > 0 && <span className="text-slate-300 mx-2">|</span>}
            <a
              href={link.href}
              className={
                link.active
                  ? 'text-white px-6 py-2 rounded-full font-bold text-sm shadow-md transition'
                  : 'text-slate-600 px-4 py-2 text-sm font-semibold transition hover:opacity-70'
              }
              style={link.active ? { backgroundColor: link.color } : { color: link.color }}
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>

      <a
        href="#"
        className="glass-nav rounded-full px-6 py-2.5 flex items-center gap-2 font-bold transition hover:bg-slate-50"
        style={{ color: 'var(--custom-blue)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-sm">+64 21 0863 1134</span>
      </a>
    </nav>
  );
}
