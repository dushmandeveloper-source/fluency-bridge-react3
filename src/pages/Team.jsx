import BannerBackground from '../components/BannerBackground';
import ProfileCard from '../components/ProfileCard';

// Six advisory-board placeholders, ready for real headshots + details.
const CONSULTANTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Profile Space ${i + 1}`,
  role: 'Academic Consultant',
  lines: [
    "Bachelor's Graduate (Sri Lanka)",
    "Master's / MBA Graduate (New Zealand)",
    'Dedicated academic strategist',
  ],
}));

// Typography mirrors the home page: sans-font headings at the hero's responsive
// sizes, home-sized cards.
export default function Team() {
  return (
    <BannerBackground>
      <main className="relative z-20 w-full px-6 py-28 sm:py-36">
        {/* Page intro */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center mb-10 sm:mb-14">
          <span
            className="inline-flex items-center gap-2 text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
            style={{ backgroundColor: 'var(--custom-blue)' }}
          >
            Our Team
          </span>
          <h1 className="sans-font text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-[1.3] tracking-tight">
            Leadership &amp; Advisory Board
          </h1>
          <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-medium max-w-2xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}>
            A multidisciplinary team of professionals dedicated to ethically delivering the best education guidelines and
            career pathways in New Zealand.
          </p>
        </div>

        {/* Founder & CEO */}
        <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="sans-font text-white text-base sm:text-xl md:text-2xl font-black tracking-tight mb-4 sm:mb-5 pl-1">Founder &amp; CEO</h2>
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 relative h-32 md:h-auto bg-white/10 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1.5 text-white/50">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                </svg>
                <span className="text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-widest">Photo</span>
              </div>
            </div>
            <div className="md:col-span-3 px-5 sm:px-8 py-6 sm:py-8 flex flex-col gap-2.5">
              <div>
                <h3 className="sans-font text-sm sm:text-lg md:text-xl font-black text-white leading-tight">Chathuranga Liyanage</h3>
                <p className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: 'var(--custom-green-light)' }}>
                  Founder &amp; CEO, Fluency Bridge Global Limited
                </p>
              </div>
              <p className="text-white/85 text-[0.65rem] sm:text-xs md:text-sm font-semibold">
                <span style={{ color: 'var(--custom-green-light)' }}>Credentials:</span> B.Sc. Civil Engineering (Hons) —
                University of Peradeniya (2011).
              </p>
              <p className="text-white/80 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
                Over 15 years of diverse, international experience in the civil engineering industry, currently directing
                operations as a Construction Project Manager in New Zealand. He applies engineering precision and
                structured project management to global education, mentoring future leaders with a philosophy built on
                lived experience across all parent portfolios and subsidiary branches.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Consultants & Advisory Board */}
        <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="sans-font text-white text-base sm:text-xl md:text-2xl font-black tracking-tight mb-4 sm:mb-5 pl-1">
            Academic Consultants &amp; Advisory Board
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CONSULTANTS.map((person) => (
              <ProfileCard key={person.id} name={person.name} role={person.role} lines={person.lines} accent="var(--custom-green-light)" />
            ))}
          </div>
        </section>

        {/* Legal & Immigration Partners */}
        <section className="max-w-4xl mx-auto">
          <h2 className="sans-font text-white text-base sm:text-xl md:text-2xl font-black tracking-tight mb-4 sm:mb-5 pl-1">
            Legal &amp; Immigration Partners
          </h2>
          <div className="glass-panel rounded-2xl sm:rounded-[2rem] px-6 sm:px-9 py-7 sm:py-9">
            <p className="sans-font text-white font-black text-xs sm:text-base md:text-lg mb-2">Partnered Licensed Immigration Advisers &amp; Lawyers</p>
            <p className="text-white/80 text-[0.65rem] sm:text-xs md:text-sm font-medium leading-relaxed">
              To ensure absolute regulatory compliance for Fluency Bridge Global Limited, all legal immigration
              strategies and visa applications are processed exclusively through our accredited New Zealand immigration
              partners. Individual credentials and firm details are provided directly during personal consultations.
            </p>
          </div>

          {/* Per the blueprint, the team page links to the NZ Academic Bridge branch */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-7 rounded-lg sm:rounded-xl transition-all hover:opacity-90 interactive-el"
              style={{ backgroundColor: 'var(--custom-blue)' }}
            >
              Visit NZ Academic Bridge
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
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
