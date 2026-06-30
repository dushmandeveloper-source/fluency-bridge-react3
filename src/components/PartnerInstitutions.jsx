import Reveal from './Reveal';

const PARTNERS = ['The University of Auckland', 'AUT', 'Massey University', 'Unitec', 'NZQA'];

export default function PartnerInstitutions() {
  // Two identical copies so the -50% marquee slide loops seamlessly.
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white py-10 sm:py-14 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Our Partner Institutions</h2>
          <span className="block w-14 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: 'var(--custom-green)' }} />
        </Reveal>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {loop.map((name, i) => (
            <span
              key={i}
              className="sans-font font-black text-slate-400 text-sm sm:text-lg uppercase tracking-wide whitespace-nowrap px-7 sm:px-10 hover:text-slate-700 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
