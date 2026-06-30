import Reveal from './Reveal';

export default function CTABanner() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6">
      <Reveal
        className="reveal max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(120deg, var(--custom-blue-dark), var(--custom-blue) 60%, var(--custom-green))' }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/40 shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8.7L20.29 3.7a.6.6 0 01.76.76L16.7 21l-4.4-7.3L3 8.7z" />
              </svg>
            </span>
            <div>
              <h3 className="sans-font text-xl sm:text-2xl font-black text-white leading-tight">Ready to Begin Your Journey?</h3>
              <p className="text-white/80 text-sm mt-1">Book a free consultation with our experts today!</p>
            </div>
          </div>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm py-3 px-7 rounded-xl transition-all hover:opacity-90 interactive-el shrink-0"
          >
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
