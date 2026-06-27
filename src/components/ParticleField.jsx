import { useMemo } from 'react';

const COLORS = ['#a8e8c4', '#9cc8ff', '#ffffff'];
const DEFAULT_PARTICLE_COUNT = 28;

export default function ParticleField({ count = DEFAULT_PARTICLE_COUNT }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = Math.random() * 3 + 2;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 70 + 50;
        return {
          id: i,
          size,
          color,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          dx: `${(Math.cos(angle) * distance).toFixed(0)}px`,
          dy: `${(Math.sin(angle) * distance).toFixed(0)}px`,
          animationDuration: `${Math.random() * 4 + 3}s`,
          animationDelay: `-${Math.random() * 7}s`,
        };
      }),
    [count]
  );

  return (
    <div id="particle-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            color: p.color,
            left: p.left,
            top: p.top,
            '--dx': p.dx,
            '--dy': p.dy,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
