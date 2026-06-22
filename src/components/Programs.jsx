import ProgramCard from './ProgramCard';
import { programs } from '../data/programs.jsx';

export default function Programs() {
  return (
    <main className="relative z-20 w-full mt-4 sm:mt-6 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-40 sm:h-56 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 49, 133, 0.2) 50%, rgba(0, 49, 133, 0.55) 70%, rgba(0, 49, 133, 0.85) 88%, #002c78 100%)',
        }}
      />
    </main>
  );
}
