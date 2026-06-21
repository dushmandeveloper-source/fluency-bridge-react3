import ProgramCard from './ProgramCard';
import { programs } from '../data/programs.jsx';

export default function Programs() {
  return (
    <main className="relative z-20 w-full bg-slate-50 -mt-10 sm:-mt-14 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </main>
  );
}
