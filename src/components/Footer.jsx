const BRANCHES = ['Fluency Bridge Coaching', 'NZ Academic Bridge', 'About the Company'];

export default function Footer() {
  return (
    <footer className="text-white pt-20 pb-10 relative z-20" style={{ backgroundColor: 'var(--custom-blue-dark)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="font-black text-xl" style={{ color: 'var(--custom-blue)' }}>
                NZ
              </span>
            </div>
            <h4 className="font-black text-2xl tracking-wide">Fluency Bridge Ltd.</h4>
          </div>
          <p className="text-sm text-white/80 mb-4 pr-4 leading-relaxed font-medium">
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
            <li className="flex items-center gap-2 text-white font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+64 21 0863 1134</span>
            </li>
            <li>
              <a href="mailto:info@fluencybridge.co.nz" className="hover:text-white transition interactive-el">
                info@fluencybridge.co.nz
              </a>
            </li>
            <li>
              <a href="mailto:info@nzacademicbridge.co.nz" className="hover:text-white transition interactive-el">
                info@nzacademicbridge.co.nz
              </a>
            </li>
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
