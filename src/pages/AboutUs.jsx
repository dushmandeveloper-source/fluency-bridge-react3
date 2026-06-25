import BannerBackground from '../components/BannerBackground';

// Distinct from Home: a single centered glass hero panel (no program cards),
// an eyebrow chip, serif headline and a light "story coming soon" placeholder.
export default function AboutUs() {
  return (
    <BannerBackground>
      <main className="relative z-20 w-full min-h-screen flex items-center justify-center px-6 py-32 sm:py-40">
        <div className="glass-panel w-full max-w-3xl mx-auto rounded-3xl px-7 sm:px-12 py-12 sm:py-16 text-center flex flex-col items-center gap-6">
          <span
            className="inline-flex items-center gap-2 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-white px-4 py-1.5 rounded-full"
            style={{ backgroundColor: 'var(--custom-green)' }}
          >
            About Us
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Architecting Global Futures
          </h1>

          <p
            className="text-white/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
          >
            Fluency Bridge Global Limited is a premier New Zealand-based enterprise bridging the gap
            between regional potential and global success — driven by industry professionals.
          </p>

          {/* Light value chips give the panel structure while the full story is being written */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2">
            {[
              { value: 'Vision', label: 'A world-class global education ecosystem' },
              { value: 'Mission', label: 'Authentic fluency & zero-fee placement' },
              { value: 'Ethics', label: 'Student rights, NZ compliance first' },
            ].map((item) => (
              <div
                key={item.value}
                className="bg-white/15 border border-white/30 rounded-2xl px-4 py-5 backdrop-blur-md"
              >
                <p className="font-black text-white text-base sm:text-lg mb-1" style={{ color: 'var(--custom-green)' }}>
                  {item.value}
                </p>
                <p className="text-white/80 text-[0.7rem] sm:text-xs font-medium leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-2">
            Full company story — coming soon
          </p>
        </div>
      </main>

      <FooterFade />
    </BannerBackground>
  );
}

// Fades the banner image into the footer's colour so the seam isn't visible
function FooterFade() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none z-10"
      style={{
        background:
          'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.2) 50%, rgba(0, 49, 133, 0.55) 70%, rgba(0, 49, 133, 0.85) 88%, #002c78 100%)',
      }}
    />
  );
}
