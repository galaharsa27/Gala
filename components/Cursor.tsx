'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 280, damping: 24 });
  const springY = useSpring(cursorY, { stiffness: 280, damping: 24 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    window.addEventListener('mousemove', move);
    const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(255,83,83,0.24)]"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[55] rounded-full border transition-all duration-200 ${
          isHovering ? 'h-16 w-16 border-accent/70' : 'h-8 w-8 border-white/30'
        }`}
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
