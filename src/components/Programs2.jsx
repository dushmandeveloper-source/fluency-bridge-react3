import ProgramCard from './ProgramCard';
import { programs } from '../data/programs.jsx';

export default function Programs2() {
  return (
    <main className="relative z-20 w-full mt-4 sm:mt-6 pb-24 sm:pb-32">
      <div className="max-w-sm sm:max-w-md md:max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-24">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* Gradient fades to PURE white (#fff, matching the page below) and overhangs the seam by a
          pixel (-bottom-px) so the banner photo's hard bottom edge is fully covered — no faint
          line peeking out past the floating StatsBar card. */}
      <div
        className="absolute inset-x-0 -bottom-px h-24 sm:h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(255,255,255,0.92) 72%, #ffffff 88%, #ffffff 100%)',
        }}
      />
    </main>
  );
}
