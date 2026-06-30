import Reveal from './Reveal';

const FEATURES = [
  {
    title: 'Expert Guidance',
    text: 'Qualified coaches and education consultants with years of industry experience.',
    color: 'var(--custom-green)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 00-9.288 0M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    title: 'Ethical & Transparent',
    text: 'We provide honest advice with your best interests at heart.',
    color: 'var(--custom-blue)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.04 8.25-8.965 9.75C7.04 20.25 4 16.556 4 12V6.75l8-3.75 8 3.75V12z" />,
  },
  {
    title: 'NZ Specialists',
    text: 'Deep knowledge of the New Zealand education system and pathways.',
    color: 'var(--custom-green)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3 7.5 7.03 7.5 12 9.515 21 12 21zM3 12h18" />,
  },
  {
    title: 'Student Focused',
    text: 'Personalised support every step of the way to your success.',
    color: 'var(--custom-blue)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="sans-font text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Why Choose Fluency Bridge?</h2>
          <span className="block w-14 h-1 rounded-full mx-auto my-4" style={{ backgroundColor: 'var(--custom-green)' }} />
          <p className="text-slate-500 text-sm sm:text-base">We combine expertise, experience and genuine care to help you achieve your dreams.</p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 100}
              className="reveal bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-7 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow duration-500"
            >
              <span
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                style={{ backgroundColor: f.color === 'var(--custom-green)' ? 'rgba(78,166,117,0.12)' : 'rgba(0,74,204,0.12)', color: f.color }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {f.icon}
                </svg>
              </span>
              <h4 className="sans-font font-black text-slate-900 text-xs sm:text-base">{f.title}</h4>
              <p className="text-slate-500 text-[0.65rem] sm:text-sm leading-relaxed">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
