import { useEffect, useRef, useState } from 'react';

// Adds an `in-view` class the first time the element scrolls into view, so CSS
// (.reveal / .reveal-img / .timeline-line) can animate it. `delay` staggers
// grouped items; `as` lets it render as section/div/li etc.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, threshold = 0.15, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Respect users who prefer reduced motion
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`${className} ${inView ? 'in-view' : ''}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
