'use client';

import { useEffect } from 'react';

export type LightboxItem = {
  src: string;
  code: string;
  label: string;
};

export default function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  useEffect(() => {
    if (activeIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(((activeIndex ?? 0) + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate(((activeIndex ?? 0) - 1 + items.length) % items.length);
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeIndex, items.length, onClose, onNavigate]);

  if (activeIndex === null) return null;
  const item = items[activeIndex];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.label}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button
        className="lightbox-nav prev"
        onClick={() => onNavigate((activeIndex - 1 + items.length) % items.length)}
        aria-label="Previous"
      >
        ←
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.label} className="lightbox-image" />
      <button
        className="lightbox-nav next"
        onClick={() => onNavigate((activeIndex + 1) % items.length)}
        aria-label="Next"
      >
        →
      </button>
      <div className="lightbox-meta">
        <span className="lightbox-code">{item.code}</span>
        <span className="lightbox-label">{item.label}</span>
      </div>
    </div>
  );
}
