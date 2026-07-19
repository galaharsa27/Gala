'use client';

import { useEffect, useState } from 'react';

const LINE = 'OPENING DOSSIER: G.K.R.';
const STORAGE_KEY = 'gala-dossier-opened';

export default function DossierIntro() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let alreadyOpened = false;
    try {
      alreadyOpened = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      alreadyOpened = false;
    }

    if (alreadyOpened || reduced) {
      return;
    }

    setVisible(true);
    document.body.classList.add('dossier-locked');

    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(LINE.slice(0, i));
      if (i >= LINE.length) {
        clearInterval(typeInterval);
      }
    }, 22);

    const closeTimer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('dossier-locked');
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        /* storage unavailable, safe to ignore */
      }
    }, 1200);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(closeTimer);
      document.body.classList.remove('dossier-locked');
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="dossier-intro" role="presentation" aria-hidden="true">
      <div className="dossier-intro-scan" />
      <p className="dossier-intro-line">{typed}</p>
    </div>
  );
}
