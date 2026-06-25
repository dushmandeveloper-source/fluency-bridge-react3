import BannerBackground from '../components/BannerBackground';

// Split out of the Team page so each page stays short enough for the shared
// banner photo to frame like the home page.
export default function LegalPartners() {
  return (
    <BannerBackground>
      <main className="relative z-20 w-full min-h-screen flex items-center justify-center px-6 py-32 sm:py-40">
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <span
              className="inline-flex items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
              style={{ backgroundColor: 'var(--custom-blue)' }}
            >
              Legal &amp; Immigration Partners
            </span>
            <h1 className="sans-font text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-[1.3] tracking-tight">
              Accredited Compliance Partners
            </h1>
          </div>

          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-7 sm:px-12 py-10 sm:py-12 w-full">
            <p className="sans-font text-white font-black text-xs sm:text-base md:text-lg mb-3">
              Partnered Licensed Immigration Advisers &amp; Lawyers
            </p>
            <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
              To ensure absolute regulatory compliance for Fluency Bridge Global Limited, all legal immigration
              strategies and visa applications are processed exclusively through our accredited New Zealand immigration
              partners. Individual credentials and firm details are provided directly during personal consultations.
            </p>
          </div>

          <a
            href="#/contact"
            className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-lg sm:rounded-xl transition-all hover:opacity-90 interactive-el"
            style={{ backgroundColor: 'var(--custom-green)' }}
          >
            Book a Consultation
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </main>

      {/* Fades the banner image into the footer's colour so the seam isn't visible */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.2) 50%, rgba(0, 49, 133, 0.55) 70%, rgba(0, 49, 133, 0.85) 88%, #002c78 100%)',
        }}
      />
    </BannerBackground>
  );
}
