
import fluencyBridgeLogo from '../assets/NZ01.png';
import nzAcademicBridgeLogo from '../assets/NZ02.png';

const BRANCHES = ['Fluency Bridge Coaching', 'NZ Academic Bridge'];
const QUICK_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'Our Consultants', href: '#/team' },
  { label: 'Contact Us', href: '#/contact' },
];

const FACEBOOK_HREFS = {
  'fluency-bridge': 'https://www.facebook.com/share/1QpNGEReAV/?mibextid=wwXIfr',
  'nz-academic-bridge': 'https://www.facebook.com/share/1KrECNtYBq/?mibextid=wwXIfr',
};

// Facebook: NZ Academic Bridge page owns nz-academic-bridge + team (consultants);
// Fluency Bridge page owns home, about, fluency-bridge, and contact.
const NZ_ACADEMIC_FACEBOOK_ROUTES = new Set(['nz-academic-bridge', 'team']);

const INSTAGRAM_HREFS = {
  'fluency-bridge': 'https://www.instagram.com/fluency_bridge/',
  'nz-academic-bridge': 'https://www.instagram.com/nzacademicbridge?igsh=MXR0dmQ2OGNocTlobQ==',
};

// Instagram: NZ Academic Bridge owns nz-academic-bridge, team (consultants), and contact;
// Fluency Bridge owns home, about, and fluency-bridge.
const NZ_ACADEMIC_INSTAGRAM_ROUTES = new Set(['nz-academic-bridge', 'team', 'contact']);

export default function Footer({ route }) {
  const isNzAcademicPage = route === 'nz-academic-bridge' || route === 'team';
  const logo = isNzAcademicPage ? nzAcademicBridgeLogo : fluencyBridgeLogo;
  const logoAlt = isNzAcademicPage ? 'NZ Academic Bridge' : 'Fluency Bridge';
  const facebookHref = NZ_ACADEMIC_FACEBOOK_ROUTES.has(route) ? FACEBOOK_HREFS['nz-academic-bridge'] : FACEBOOK_HREFS['fluency-bridge'];
  const instagramHref = NZ_ACADEMIC_INSTAGRAM_ROUTES.has(route) ? INSTAGRAM_HREFS['nz-academic-bridge'] : INSTAGRAM_HREFS['fluency-bridge'];
  return (
    <footer
      className="text-white pt-10 sm:pt-12 pb-10 relative z-20 flex-1 flex flex-col justify-between"
      style={{ backgroundColor: 'var(--custom-blue-dark)' }}
    >
      {/* Continues the banner's light-to-dark progression down through the footer, deepening gradually to full black toward the bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.32) 100%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
        {/* Four equal columns keep the gaps even and the block visually centered */}
        <div>
          {/* Logo + company name mirrors the header branding; white border and layered drop-shadows make it stand out against the dark footer */}
          <a href="#/" className="flex items-center gap-3 mb-5 interactive-el" aria-label="Go to home">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden shrink-0">
              <img
                src={logo}
                alt={logoAlt}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-black text-sm tracking-wide leading-tight">Fluency Bridge Global Limited</span>
          </a>
          <p className="text-sm text-white mb-4 leading-relaxed font-medium">
            Architecting Global Futures through elite English coaching and ethical NZ education consultancy.
          </p>
          <p className="text-xs text-white mb-6 font-bold uppercase tracking-wider">New Zealand Registered</p>
          <div className="flex gap-3">
            <a href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:opacity-80 transition interactive-el">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/fluency-bridge-global-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:opacity-80 transition interactive-el">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:opacity-80 transition interactive-el">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <radialGradient id="igGradient" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497"/>
                    <stop offset="5%" stopColor="#fdf497"/>
                    <stop offset="45%" stopColor="#fd5949"/>
                    <stop offset="60%" stopColor="#d6249f"/>
                    <stop offset="90%" stopColor="#285AEB"/>
                  </radialGradient>
                </defs>
                <path fill="url(#igGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCerz2yHrXmeXdYS0a5J5M_w" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:opacity-80 transition interactive-el">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@fluency_bridge_global?_r=1&_t=ZS-97mAUfnrdRd" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:opacity-80 transition interactive-el">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#000000" d="M16.6 5.82c-1.05-.94-1.66-2.24-1.66-3.68h-3.14v13.8c0 1.55-1.26 2.8-2.8 2.8s-2.8-1.25-2.8-2.8 1.26-2.8 2.8-2.8c.28 0 .55.04.8.12V9.9a6 6 0 00-.8-.05c-3.28 0-5.94 2.66-5.94 5.94S6.72 21.73 10 21.73s5.94-2.66 5.94-5.94V9.14a8.9 8.9 0 005.06 1.57V7.57a5.4 5.4 0 01-4.4-1.75z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-black text-lg mb-6 tracking-wide" style={{ color: 'var(--custom-green)' }}>
            Quick Links
          </h5>
          <ul className="space-y-4 text-sm font-semibold text-white">
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
            Services
          </h5>
          <ul className="space-y-4 text-sm font-semibold text-white">
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
          <ul className="space-y-4 text-sm font-semibold text-white">
            <li>
              <a
                href="https://wa.me/642108631134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold hover:text-white/80 transition interactive-el"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>+64 210 863 1134</span>
              </a>
            </li>
            {['info@fluencybridge.co.nz', 'info@nzacademicbridge.co.nz', 'info@fluencybg.com'].map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white transition interactive-el">
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-4 text-center text-xs text-white leading-relaxed">
        <p>
          Fluency Bridge Global Ltd. is a registered New Zealand company. Services under{' '}
          <a
            href="https://fluencybridge.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline interactive-el"
            style={{ color: 'var(--custom-green)' }}
          >
            Fluency Bridge
          </a>{' '}
          and{' '}
          <a
            href="https://nzacademicbridge.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline interactive-el"
            style={{ color: 'var(--custom-green)' }}
          >
            NZ Academic Bridge
          </a>{' '}
          are proudly operated by Fluency Bridge Global Ltd.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center text-xs font-semibold text-white">
        <p>&copy; 2026 Fluency Bridge Global Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
