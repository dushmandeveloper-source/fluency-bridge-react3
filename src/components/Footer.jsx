import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';

const BRANCHES = ['Fluency Bridge Coaching', 'NZ Academic Bridge', 'About the Company'];
const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Footer() {
  return (
    <footer
      className="text-white pt-10 sm:pt-12 pb-10 relative z-20 flex-1 flex flex-col justify-between"
      style={{ backgroundColor: 'var(--custom-blue-dark)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
        {/* Four equal columns keep the gaps even and the block visually centered */}
        <div>
          {/* Logo + company name mirrors the header branding; white border and layered drop-shadows make it stand out against the dark footer */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src={fluencyBridgeLogo}
              alt="Fluency Bridge"
              className="h-12 sm:h-16 object-contain bg-white rounded-xl border-2 border-white p-1.5 drop-shadow-[0_0_14px_rgba(255,255,255,1)] drop-shadow-[0_0_28px_rgba(255,255,255,0.85)] drop-shadow-[0_0_45px_rgba(255,255,255,0.6)]"
            />
            <span className="font-black text-sm tracking-wide leading-tight">Fluency Bridge Global Limited</span>
          </div>
          <p className="text-sm text-white/80 mb-4 leading-relaxed font-medium">
            Architecting Global Futures through elite English coaching and ethical NZ education consultancy.
          </p>
          <p className="text-xs text-white/60 mb-6 font-bold uppercase tracking-wider">New Zealand Registered</p>
          <div className="flex gap-4 text-sm font-bold text-white">
            <a href="#" className="hover:text-white/70 transition interactive-el">
              Facebook ↗
            </a>
            <a href="#" className="hover:text-white/70 transition interactive-el">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-black text-lg mb-6 tracking-wide" style={{ color: 'var(--custom-green)' }}>
            Quick Links
          </h5>
          <ul className="space-y-4 text-sm font-semibold text-white/90">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition interactive-el">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-black text-lg mb-6 tracking-wide" style={{ color: 'var(--custom-green)' }}>
            Branches
          </h5>
          <ul className="space-y-4 text-sm font-semibold text-white/90">
            {BRANCHES.map((branch) => (
              <li key={branch}>
                <a href="#" className="hover:text-white transition interactive-el">
                  {branch}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-black text-lg mb-6 tracking-wide" style={{ color: 'var(--custom-green)' }}>
            Reach
          </h5>
          <ul className="space-y-4 text-sm font-semibold text-white/90">
            <li>
              <a
                href="https://wa.me/642108631134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold hover:text-white/80 transition interactive-el"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>+64 210 863 1134</span>
              </a>
            </li>
            {['info@fluencybridge.co.nz', 'info@nzacademicbridge.co.nz', 'info@fluencybg.com'].map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white transition interactive-el">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-white/60">
        <p>&copy; 2026 Fluency Bridge Global Limited. All rights reserved.</p>
        <p className="italic font-serif text-white/80 mt-4 md:mt-0 text-sm">Cross over to natural English.</p>
      </div>
    </footer>
  );
}
