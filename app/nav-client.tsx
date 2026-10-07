'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavItem = {
  label: string;
  href: string;
  /** If this is a section anchor (e.g. "services"), we observe its visibility */
  anchorId?: string;
  /** The path this item is "home" for — used for page-level active detection */
  activePath?: string;
};

const NAV: NavItem[] = [
  { label: 'Home',     href: '/',          activePath: '/' },
  { label: 'Services', href: '/#services', anchorId: 'services' },
  { label: 'About',    href: '/about',     activePath: '/about' },
  { label: 'Contact',  href: '/#contact',  anchorId: 'contact' },
];

export function NavLinks() {
  const pathname = usePathname();
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  /* ── Observe section visibility on the home page ── */
  useEffect(() => {
    if (pathname !== '/') return;

    const anchors = NAV.filter((n) => n.anchorId).map((n) => n.anchorId!);
    const observers: IntersectionObserver[] = [];

    anchors.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveAnchor(id); },
        { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    /* When scrolled back to the very top, clear the anchor active state */
    const onScroll = () => {
      if (window.scrollY < 80) setActiveAnchor(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return (
    <>
      {NAV.map(({ label, href, anchorId, activePath }) => {
        let isActive = false;

        if (activePath) {
          /* page link — active when pathname matches */
          isActive = pathname === activePath;
        } else if (anchorId) {
          /* anchor link — active when that section is visible */
          isActive = pathname === '/' && activeAnchor === anchorId;
        }

        return (
          <a
            key={label}
            href={href}
            className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => {
              /* Immediately highlight on click for instant feedback */
              if (anchorId) setActiveAnchor(anchorId);
            }}
          >
            {label}
          </a>
        );
      })}
    </>
  );
}
