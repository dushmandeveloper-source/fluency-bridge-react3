import { useMemo } from 'react';

const COLORS = ['#4ea675', '#004acc', '#003185'];
const PARTICLE_COUNT = 60;

export default function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const size = Math.random() * 3 + 2;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
          id: i,
          size,
          color,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 15 + 10}s`,
          animationDelay: `-${Math.random() * 15}s`,
        };
      }),
    []
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
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
