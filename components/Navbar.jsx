'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LiaLaptopCodeSolid } from 'react-icons/lia';

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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

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

  const handleNavClick = (href) => {
    setOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060b14]/90 backdrop-blur-md border-b border-[rgba(34,211,238,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group"
        >
          <LiaLaptopCodeSolid className="w-8 h-8 text-[var(--accent)] group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] transition duration-300" />
          <span className="font-display font-bold text-white text-lg tracking-tight group-hover:text-[var(--accent)] transition duration-300">
            Bisma<span className="text-[var(--accent)]">.</span>
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
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg
                    ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-white'}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Hire me button */}
        <a
          href="https://www.linkedin.com/in/bisma-noor-952092396/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex btn-primary text-sm"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-[var(--muted)] hover:text-white hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${open ? 'visible' : 'invisible'}`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-72 bg-[#060b14]/95 border-l border-[rgba(34,211,238,0.15)] backdrop-blur-xl p-6 flex flex-col gap-6 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-white text-lg">
              Bisma<span className="text-[var(--accent)]">.</span>
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
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
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
            className="btn-primary justify-center mt-auto"
          >
            Hire Me
          </a>
        </aside>
      </div>
    </header>
  );
}
