'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const sync = () => setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    sync();
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'serendib-theme' || event.key === null) {
        document.documentElement.setAttribute('data-theme', event.newValue === 'light' ? 'light' : 'dark');
        sync();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  function chooseTheme(next: Theme) {
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
    try { localStorage.setItem('serendib-theme', next); } catch { /* Theme still works when storage is unavailable. */ }
  }

  return (
    <div className="theme-switch" role="group" aria-label="Colour theme">
      {(['dark', 'light'] as const).map((option) => (
        <button key={option} type="button" aria-pressed={theme === option} onClick={() => chooseTheme(option)}>
          {option === 'dark' ? 'Dark' : 'Light'}
        </button>
      ))}
    </div>
  );
}
