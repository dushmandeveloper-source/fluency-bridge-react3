import ProgramCard from './ProgramCard';
import { programs } from '../data/programs.jsx';

export default function Programs2() {
  return (
    <main className="relative z-20 w-full mt-4 sm:mt-6 pb-10 sm:pb-14">
      <div className="max-w-sm sm:max-w-md md:max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-24">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* Fills exactly the bottom padding reserved above, so the StatsBar card (which overlaps
          a little further up than this) never lands on top of the card buttons. */}
      <div className="hero-fade absolute inset-x-0 bottom-0 h-10 sm:h-14 pointer-events-none" />
    </main>
  );
}
