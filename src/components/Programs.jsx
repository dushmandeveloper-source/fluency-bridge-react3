import ProgramCard from './ProgramCard';
import { programs } from '../data/programs.jsx';

export default function Programs() {
  return (
    <main className="relative z-20 w-full bg-slate-50 pt-20 pb-32">
      <div className="text-center mb-8 px-6">
        <h2
          className="text-sm font-extrabold mb-3 sans-font tracking-widest uppercase"
          style={{ color: 'var(--custom-blue)' }}
        >
          One parent infrastructure
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 sans-font">
          Two{' '}
          <span className="serif-font blink-text italic" style={{ color: 'var(--custom-green)' }}>
            specialised
          </span>{' '}
          crossings.
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </main>
  );
}
