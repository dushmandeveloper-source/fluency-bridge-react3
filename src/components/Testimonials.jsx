import Reveal from './Reveal';

// Placeholder copy — swap in real student testimonials when available.
const TESTIMONIALS = [
  {
    quote: 'Fluency Bridge helped me build real confidence in English and reach the IELTS score I needed for university.',
    name: 'IELTS Student',
    role: 'University Applicant',
  },
  {
    quote: 'The team guided me through every step of the placement and visa process. Professional and trustworthy from day one.',
    name: 'NZ Academic Bridge Client',
    role: 'International Student',
  },
  {
    quote: 'The coaching sessions are practical and engaging — my confidence speaking English improved so much.',
    name: 'Fluency Bridge Student',
    role: 'English Coaching Programme',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" style={{ color: 'var(--custom-green)' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l2.59 5.86 6.41.56-4.84 4.27 1.46 6.31L10 15.42l-5.62 3.08 1.46-6.31L1 7.92l6.41-.56L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">What Our Students Say</h2>
          <span className="block w-14 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: 'var(--custom-blue)' }} />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 120}
              className="reveal bg-white rounded-2xl border border-slate-100 shadow-lg p-6 sm:p-7 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-500"
            >
              <Stars />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-full text-white font-black text-xs shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--custom-green)' : 'var(--custom-blue)' }}
                >
                  {t.name
                    .split(' ')
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">{t.name}</p>
                  <p className="text-slate-400 text-[0.65rem] sm:text-xs">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-6' : 'w-1.5'}`}
              style={{ backgroundColor: i === 0 ? 'var(--custom-green)' : '#cbd5e1' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
