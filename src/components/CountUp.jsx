import { useEffect, useRef, useState } from 'react';

// Splits "500+", "95%", "100%" into its numeric target and trailing suffix.
function parseValue(value) {
  const match = String(value).match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: String(value) };
  return { target: parseFloat(match[1]), suffix: match[2] };
}

// Counts up from 0 to the numeric part of `value` the first time it scrolls into
// view, then pins to the exact target. Respects prefers-reduced-motion.
export default function CountUp({ value, duration = 1600, className }) {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setDisplay(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(target);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.round(display)}
      {suffix}
    </span>
  );
}
