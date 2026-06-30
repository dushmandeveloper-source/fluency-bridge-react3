import Reveal from './Reveal';

const PARTNERS = ['The University of Auckland', 'AUT', 'Massey University', 'Unitec', 'NZQA'];

export default function PartnerInstitutions() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="reveal text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Our Partner Institutions</h2>
          <span className="block w-14 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: 'var(--custom-green)' }} />
        </Reveal>

        <Reveal className="reveal flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="sans-font font-black text-slate-400 text-sm sm:text-lg uppercase tracking-wide hover:text-slate-700 transition-colors"
            >
              {name}
            </span>
          ))}
        </Reveal>

        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-6' : 'w-1.5'}`}
              style={{ backgroundColor: i === 0 ? 'var(--custom-blue)' : '#cbd5e1' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
