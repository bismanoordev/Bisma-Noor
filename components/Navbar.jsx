'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Jab menu open ho — background scroll band
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="flex items-center gap-2 sm:gap-4 pl-5 pr-2 py-2 rounded-full
          bg-[#0d1526]/80 backdrop-blur-xl border border-[rgba(34,211,238,0.18)]
          shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
      >
        {/* Logo — status dot + name */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group pr-1"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
          <span className="font-display font-black italic text-white text-base sm:text-lg tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
            Bisma
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200
                    ${isActive
                      ? 'text-[var(--accent)] bg-[rgba(34,211,238,0.08)]'
                      : 'text-[var(--muted)] hover:text-white'}`}
                >
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Hire Me — pill button */}
        <a
          href="https://www.linkedin.com/in/bisma-noor-952092396/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold
            bg-[var(--accent)] text-[#04252b] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
            hover:-translate-y-0.5 transition-all duration-200"
        >
          Hire Me <span aria-hidden>→</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${open ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-[#060b14]/80 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-72 bg-[#0d1526] border-l border-[rgba(34,211,238,0.15)] p-6 flex flex-col gap-6 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-display font-black italic text-white text-lg">Bisma</span>
            </span>
            <button onClick={() => setOpen(false)} className="p-2 text-[var(--muted)] hover:text-white">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 mt-4">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                      ${isActive ? 'bg-[rgba(34,211,238,0.1)] text-[var(--accent)] border border-[rgba(34,211,238,0.25)]' : 'text-[var(--muted)] hover:bg-white/5 hover:text-white'}`}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href="https://www.linkedin.com/in/bisma-noor-952092396/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-bold bg-[var(--accent)] text-[#04252b]"
          >
            Hire Me <span aria-hidden>→</span>
          </a>
        </aside>
      </div>
    </header>
  );
}
