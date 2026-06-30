import Reveal from './Reveal';

const STATS = [
  {
    value: '500+',
    label: 'Students Guided',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12.083 12.083 0 0121 12.5c0 2.5-4 6.5-9 6.5s-9-4-9-6.5c0-1.07.5-2.5 1.84-3.92L12 14z" />
    ),
  },
  {
    value: '95%',
    label: 'Success Rate',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
  },
  {
    value: '100%',
    label: 'Ethical Guidance',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.04 8.25-8.965 9.75C7.04 20.25 4 16.556 4 12V6.75l8-3.75 8 3.75V12z" />,
  },
  {
    value: '20+',
    label: 'Partner Institutions',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M5 21V7l8-4 8 4v14M9 9h1m-1 4h1m4-4h1m-1 4h1M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4" />,
  },
  {
    value: '5+',
    label: 'Years Experience',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

export default function StatsBar() {
  return (
    // Negative top margin pulls this card up so it straddles the seam between the
    // banner photo above and the white page below, instead of sitting fully below it.
    <section className="relative z-30 px-4 sm:px-6 -mt-14 sm:-mt-20 pb-2">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 px-4 sm:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="reveal flex flex-col items-start gap-1.5">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full shrink-0"
                  style={{
                    backgroundColor: i % 2 === 0 ? 'rgba(78,166,117,0.12)' : 'rgba(0,74,204,0.12)',
                    color: i % 2 === 0 ? 'var(--custom-green)' : 'var(--custom-blue)',
                  }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </span>
                <p className="sans-font text-xl sm:text-2xl md:text-3xl font-black text-slate-900 whitespace-nowrap">{s.value}</p>
              </div>
              <p className="text-slate-500 text-[0.65rem] sm:text-xs font-semibold leading-snug">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
