import { useEffect, useMemo, useRef } from 'react';
import { animate, stagger, set } from 'animejs';

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
  loop = false,
  loopDelay = 3500,
  accent = false,
  glow = false,
  accentColor,
  glowRgb = '78, 166, 117',
  onComplete,
}) {
  const containerRef = useRef(null);
  const chars = useMemo(() => toChars(text), [text]);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll('.motion-letter');
    if (!letters || letters.length === 0) return;

    let cancelled = false;
    let timeoutId;

    const playReveal = (isFirstPlay) => {
      if (cancelled) return;
      animate(letters, {
        translateY: ['1.1em', '0em'],
        opacity: [0, 1],
        ease: 'outExpo',
        duration,
        delay: stagger(staggerMs, { start: isFirstPlay ? delayOffset : 0 }),
        onComplete: () => {
          if (cancelled) return;
          if (isFirstPlay) onComplete?.();
          if (loop) {
            timeoutId = setTimeout(() => {
              if (cancelled) return;
              set(letters, { translateY: '1.1em', opacity: 0 });
              playReveal(false);
            }, loopDelay);
          }
        },
      });
    };

    playReveal(true);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [chars, delayOffset, staggerMs, duration, loop, loopDelay, onComplete]);

  return (
    <Tag
      ref={containerRef}
      className={`${accent ? 'motion-text-accent' : ''} ${className}`}
      style={{
        color: accentColor,
        textShadow:
          accent || glow
            ? `0 0 10px rgba(${glowRgb}, 0.9), 0 0 26px rgba(${glowRgb}, 0.7), 0 0 48px rgba(${glowRgb}, 0.45)`
            : undefined,
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
