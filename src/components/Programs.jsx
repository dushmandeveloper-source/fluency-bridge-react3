import ProgramCard from './ProgramCard';
import { programs } from '../data/programs.jsx';

export default function Programs() {
  return (
    <main className="relative z-20 w-full mt-4 sm:mt-6 pb-6 sm:pb-8">
      <div className="max-w-sm sm:max-w-md md:max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-24">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* Fades the banner photo into the white content below (Stats/Why Choose Us section) so the seam isn't visible */}
      <div className="hero-fade absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none" />
    </main>
  );
}
