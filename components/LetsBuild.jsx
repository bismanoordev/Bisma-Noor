'use client';

import { FaArrowRight } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const links = [
  { label: 'LinkedIn',      href: 'https://www.linkedin.com/in/bisma-noor-952092396/' },
  { label: 'GitHub',        href: 'https://github.com/bismanoordev' },
  { label: 'X / Twitter',   href: 'https://x.com/' },
  { label: 'Download CV',   href: '/resume.pdf' },
];

export default function LetsBuild() {
  return (
    <section id="lets-build" className="pb-16 lg:pb-24 pt-4 !border-t-0">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal animation="fadeUp">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-[rgba(34,211,238,0.15)]
              bg-[#0a1120] px-7 sm:px-12 lg:px-16 py-14 lg:py-20"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[rgba(34,211,238,0.08)] blur-[130px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* LEFT — big headline */}
              <div>
                <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Let&apos;s Talk
                </p>

                <h2
                  className="font-black text-white leading-[0.95]"
                  style={{
                    fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
                    letterSpacing: '-0.03em',
                    fontFamily: 'var(--font-space)',
                  }}
                >
                  Got an{' '}
                  <em
                    className="italic font-light"
                    style={{ WebkitTextStroke: '1.5px var(--text)', color: 'transparent' }}
                  >
                    idea?
                  </em>
                  <br />
                  Let&apos;s{' '}
                  <span className="inline-block bg-[var(--accent)] text-[#04252b] px-3 rounded-lg -rotate-1">
                    build it.
                  </span>
                </h2>
              </div>

              {/* RIGHT — email + social links */}
              <div className="lg:pl-8">
                <p className="text-[10px] font-bold tracking-[0.25em] text-[var(--muted)] uppercase mb-3">
                  Drop me an email
                </p>
                <a
                  href="mailto:bismanoordeveloper@gmail.com"
                  className="inline-block text-lg sm:text-2xl italic font-semibold text-[var(--accent)] hover:underline underline-offset-4 mb-8 break-all"
                >
                  bismanoordeveloper@gmail.com
                </a>

                <div className="flex flex-col gap-3">
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...(label === 'Download CV' ? { download: true } : {})}
                      className="group flex items-center justify-between gap-4 rounded-full
                        border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.02)]
                        px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--muted)]
                        hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[rgba(34,211,238,0.06)]
                        transition-all duration-200"
                    >
                      {label}
                      <FaArrowRight
                        size={12}
                        className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom line — copyright (at the very end, like a footer) */}
        <div className="mt-10 pt-9 border-t border-[rgba(34,211,238,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Bisma Noor. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Built with <span className="text-[var(--accent)]">me</span> 
            {/* <span className="text-[var(--accent)]">Tailwind CSS</span> */}
          </p>
        </div>
      </div>
    </section>
  );
}
