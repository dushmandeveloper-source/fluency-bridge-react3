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

      {/* Fade reaches fully opaque white by its own bottom edge, and that edge lines up exactly
          with where this padding (and the banner photo) ends, so no raw photo edge/line peeks
          out past it — the floating StatsBar card then overlaps the top portion of this fade. */}
      <div className="hero-fade absolute inset-x-0 bottom-0 h-24 sm:h-32 pointer-events-none" />
    </main>
  );
}
