import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;
      }

      if (outlineRef.current) {
        gsap.to(outlineRef.current, {
          left: posX,
          top: posY,
          duration: 0.4,
        });
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .interactive-el')) {
        document.body.classList.add('cursor-hover');
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .interactive-el')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-outline" ref={outlineRef} />
    </>
  );
}
