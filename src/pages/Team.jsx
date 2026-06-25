import BannerBackground from '../components/BannerBackground';
import ProfileCard from '../components/ProfileCard';

const CONSULTANT_LINES = [
  "Bachelor's Graduate (Sri Lanka)",
  "Master's / MBA Graduate (New Zealand)",
  'Dedicated academic strategist',
];

// Six advisory-board placeholders. `image` uses dummy randomuser.me portraits for
// now — swap these for the real team headshots when available.
const CONSULTANTS = [
  { id: 1, name: 'Profile Space 1', role: 'Academic Consultant', image: 'https://randomuser.me/api/portraits/men/32.jpg', lines: CONSULTANT_LINES },
  { id: 2, name: 'Profile Space 2', role: 'Academic Consultant', image: 'https://randomuser.me/api/portraits/women/44.jpg', lines: CONSULTANT_LINES },
  { id: 3, name: 'Profile Space 3', role: 'Academic Consultant', image: 'https://randomuser.me/api/portraits/men/55.jpg', lines: CONSULTANT_LINES },
  { id: 4, name: 'Profile Space 4', role: 'Academic Consultant', image: 'https://randomuser.me/api/portraits/women/68.jpg', lines: CONSULTANT_LINES },
  { id: 5, name: 'Profile Space 5', role: 'Academic Consultant', image: 'https://randomuser.me/api/portraits/men/41.jpg', lines: CONSULTANT_LINES },
  { id: 6, name: 'Profile Space 6', role: 'Academic Consultant', image: 'https://randomuser.me/api/portraits/women/26.jpg', lines: CONSULTANT_LINES },
];

// Dummy CEO portrait for now — replace with the real headshot when available.
const CEO_IMAGE = 'https://randomuser.me/api/portraits/men/75.jpg';

// Typography mirrors the home page: sans-font headings at the hero's responsive
// sizes, home-sized cards.
export default function Team() {
  return (
    <BannerBackground fixed>
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
            <div className="md:col-span-2 relative h-48 md:h-auto md:min-h-[16rem] bg-white/10 overflow-hidden">
              <img src={CEO_IMAGE} alt="Chathuranga Liyanage" className="w-full h-full object-cover" />
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
              <ProfileCard key={person.id} name={person.name} role={person.role} image={person.image} lines={person.lines} accent="var(--custom-green-light)" />
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
