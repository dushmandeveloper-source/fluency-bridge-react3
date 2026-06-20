import { useEffect, useMemo, useRef } from 'react';
import { animate, stagger } from 'animejs';

function toChars(text) {
  return text.split('').map((char, index) => ({
    key: `${index}-${char}`,
    char: char === ' ' ? ' ' : char,
  }));
}

export default function MotionText({
  text,
  as: Tag = 'span',
  className = '',
  delayOffset = 0,
  staggerMs = 40,
  duration = 1200,
  accent = false,
  accentColor,
  glowRgb = '78, 166, 117',
  onComplete,
}) {
  const containerRef = useRef(null);
  const chars = useMemo(() => toChars(text), [text]);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll('.motion-letter');
    if (!letters || letters.length === 0) return;

    const reveal = animate(letters, {
      translateY: ['1.1em', '0em'],
      opacity: [0, 1],
      ease: 'outExpo',
      duration,
      delay: stagger(staggerMs, { start: delayOffset }),
      onComplete: () => {
        if (accent && containerRef.current) {
          animate(containerRef.current, {
            opacity: [1, 0.5],
            duration: 1250,
            ease: 'inOutSine',
            loop: true,
            alternate: true,
          });
        }
        onComplete?.();
      },
    });

    return () => reveal.pause();
  }, [chars, delayOffset, staggerMs, duration, accent, onComplete]);

  return (
    <Tag
      ref={containerRef}
      className={`${accent ? 'motion-text-accent' : ''} ${className}`}
      style={{
        color: accentColor,
        textShadow: accent ? `0 0 8px rgba(${glowRgb}, 0.7), 0 0 28px rgba(${glowRgb}, 0.4)` : undefined,
      }}
    >
      {chars.map(({ key, char }) => (
        <span key={key} className="motion-letter-mask">
          <span className="motion-letter">{char}</span>
        </span>
      ))}
    </Tag>
  );
}
