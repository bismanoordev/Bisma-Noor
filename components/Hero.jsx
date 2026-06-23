'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaInstagram, FaDownload } from 'react-icons/fa';
import myImage from '@/assets/profile.png';
import ScrollReveal from './ScrollReveal';

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/bisma-noor-952092396/', label: 'LinkedIn'  },
  { icon: FaGithub,     href: 'https://github.com/bismanoordev',                    label: 'GitHub'    },
  { icon: FaInstagram,  href: 'https://www.instagram.com/',                         label: 'Instagram' },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2);
    const y = (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2);
    setMouse({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);

  return (
    <section id="home" className="relative overflow-hidden">

      {/* ════════════════════════════════════════
          MOBILE  (< md)  — stacked layout
          ════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen">

        {/* Top: badge + name + description */}
        <div className="pt-20 pb-3 px-5 flex flex-col items-center text-center gap-2">
          <ScrollReveal animation="fadeDown" delay={0}>
            <span className="badge text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Available for work
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={120}>
            <h1
              className="font-black uppercase leading-none text-white mt-1"
              style={{ fontSize: 'clamp(2.6rem, 16vw, 5rem)', letterSpacing: '-0.04em', fontFamily: 'var(--font-space)' }}
            >
              BISMA<br />
              NOO<span style={{ color: 'var(--accent)' }}>R</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={230}>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Web Developer — React &amp; Next.js<br />
              Building fast, modern web experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Bottom: buttons + socials */}
        <div className="px-5 pt-4 pb-10 flex flex-col items-center gap-4">
          <ScrollReveal animation="fadeUp" delay={340} className="flex flex-col gap-2 w-full max-w-xs">
            <a
              href="https://www.linkedin.com/in/bisma-noor-952092396/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 tracking-[0.08em] uppercase w-full text-center justify-center whitespace-nowrap"
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              download="Bisma Noor - Web Developer.pdf"
              className="btn-outline text-xs py-2.5 tracking-[0.08em] uppercase w-full justify-center whitespace-nowrap"
            >
              <FaDownload size={10} />
              Download CV
            </a>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={440} className="flex items-center gap-3 mt-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </ScrollReveal>
        </div>
      </div>

      {/* ════════════════════════════════════════
          TABLET + DESKTOP  (md+)  — 3D editorial layout
          ════════════════════════════════════════ */}
      <div
        className="hidden md:block relative h-screen"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[rgba(34,211,238,0.06)] blur-[120px]" />
          <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-[rgba(59,130,246,0.07)] blur-[100px]" />
        </div>

        {/* ── 3D FLOATING SHAPES ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

          {/* Ring 1 — large cyan ring, top-left, rotates on X */}
          <div className="absolute" style={{
            top: '12%', left: '6%',
            transition: 'transform 0.4s ease-out',
            transform: `translate3d(${mouse.x * -22}px, ${mouse.y * -12}px, 0)`,
          }}>
            <div style={{
              width: 160, height: 160,
              border: '1.5px solid rgba(34,211,238,0.22)',
              borderRadius: '50%',
              animation: 'ring3dX 9s linear infinite',
            }} />
          </div>

          {/* Ring 2 — medium blue ring, top-right, rotates on Y */}
          <div className="absolute" style={{
            top: '18%', right: '8%',
            transition: 'transform 0.35s ease-out',
            transform: `translate3d(${mouse.x * 28}px, ${mouse.y * 14}px, 0)`,
          }}>
            <div style={{
              width: 110, height: 110,
              border: '1px solid rgba(59,130,246,0.28)',
              borderRadius: '50%',
              animation: 'ring3dY 7s linear infinite',
            }} />
          </div>

          {/* Ring 3 — small ring, bottom-right, rotates XY */}
          <div className="absolute" style={{
            bottom: '20%', right: '22%',
            transition: 'transform 0.3s ease-out',
            transform: `translate3d(${mouse.x * 18}px, ${mouse.y * 22}px, 0)`,
          }}>
            <div style={{
              width: 70, height: 70,
              border: '1px solid rgba(34,211,238,0.18)',
              borderRadius: '50%',
              animation: 'ring3dXY 6s linear infinite',
            }} />
          </div>

          {/* Square 1 — rotating 3D square, bottom-left */}
          <div className="absolute" style={{
            bottom: '28%', left: '14%',
            transition: 'transform 0.25s ease-out',
            transform: `translate3d(${mouse.x * -30}px, ${mouse.y * 18}px, 0)`,
          }}>
            <div style={{
              width: 44, height: 44,
              border: '1.5px solid rgba(34,211,238,0.3)',
              animation: 'square3d 5s linear infinite',
            }} />
          </div>

          {/* Diamond — rotated square, mid-left */}
          <div className="absolute" style={{
            top: '55%', left: '5%',
            transition: 'transform 0.3s ease-out',
            transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -20}px, 0)`,
          }}>
            <div style={{
              width: 28, height: 28,
              border: '1px solid rgba(59,130,246,0.35)',
              animation: 'diamond3d 4s linear infinite',
            }} />
          </div>

          {/* Diamond 2 — top-center area */}
          <div className="absolute" style={{
            top: '8%', left: '42%',
            transition: 'transform 0.45s ease-out',
            transform: `translate3d(${mouse.x * 10}px, ${mouse.y * -25}px, 0)`,
          }}>
            <div style={{
              width: 22, height: 22,
              border: '1px solid rgba(34,211,238,0.25)',
              animation: 'diamond3d 3.5s linear infinite reverse',
            }} />
          </div>

          {/* Floating dots — move at different depths */}
          {[
            { top: '25%', left: '3%',  dx: -18, dy: -10, size: 4, op: 0.5 },
            { top: '40%', left: '7%',  dx: -24, dy:  15, size: 3, op: 0.35 },
            { top: '70%', left: '3%',  dx: -12, dy:  20, size: 5, op: 0.4 },
            { top: '15%', right: '4%', dx:  20, dy: -14, size: 3, op: 0.4 },
            { top: '45%', right: '5%', dx:  25, dy:  10, size: 4, op: 0.5 },
            { top: '75%', right: '3%', dx:  15, dy:  18, size: 3, op: 0.3 },
            { top: '85%', left: '30%', dx: -8,  dy:  22, size: 3, op: 0.3 },
            { top: '5%',  left: '55%', dx:  12, dy: -20, size: 4, op: 0.35 },
          ].map((d, i) => (
            <div key={i}
              className="absolute rounded-full bg-[var(--accent)]"
              style={{
                top: d.top,
                left: d.left,
                right: d.right,
                width:  d.size,
                height: d.size,
                opacity: d.op,
                transition: 'transform 0.5s ease-out',
                transform: `translate3d(${mouse.x * d.dx}px, ${mouse.y * d.dy}px, 0)`,
              }}
            />
          ))}
        </div>

        {/* ── BIG LEFT TEXT — parallax away from center ── */}
        <div className="absolute left-0 top-1/2 z-0 select-none pointer-events-none"
          style={{ paddingLeft: 'clamp(8px, 2vw, 40px)', transition: 'transform 0.15s ease-out', transform: `translate3d(${mouse.x * -14}px, calc(-50% + ${mouse.y * -7}px), 0)` }}
        >
          <ScrollReveal animation="fadeLeft" delay={100}>
            <span
              className="block font-black uppercase leading-none text-white"
              style={{ fontSize: 'clamp(3rem, 10vw, 13rem)', letterSpacing: '-0.04em', fontFamily: 'var(--font-space)', lineHeight: 0.88, textShadow: `${mouse.x * 10}px ${mouse.y * 5}px 30px rgba(34,211,238,0.12)` }}
            >
              BISMA
            </span>
          </ScrollReveal>
        </div>

        {/* ── BIG RIGHT TEXT — parallax opposite direction ── */}
        <div className="absolute right-0 top-1/2 z-0 select-none pointer-events-none"
          style={{ paddingRight: 'clamp(8px, 2vw, 40px)', transition: 'transform 0.15s ease-out', transform: `translate3d(${mouse.x * 14}px, calc(-50% + ${mouse.y * -7}px), 0)` }}
        >
          <ScrollReveal animation="fadeRight" delay={100}>
            <span
              className="block font-black uppercase leading-none text-white"
              style={{ fontSize: 'clamp(3rem, 10vw, 13rem)', letterSpacing: '-0.04em', fontFamily: 'var(--font-space)', lineHeight: 0.88, textShadow: `${mouse.x * -10}px ${mouse.y * 5}px 30px rgba(59,130,246,0.12)` }}
            >
              NOO<span style={{ color: 'var(--accent)' }}>R</span>
            </span>
          </ScrollReveal>
        </div>

        {/* ── PROFILE IMAGE — subtle parallax ── */}
        <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
          <ScrollReveal animation="scale" delay={200}>
          <div
            style={{
              position: 'relative',
              width: 'clamp(220px, 42vw, 560px)',
              height: '100vh',
              transition: 'transform 0.3s ease-out',
              transform: `translate3d(${mouse.x * 5}px, ${mouse.y * 3}px, 0)`,
            }}
          >
            <Image
              src={myImage}
              alt="Bisma Noor"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
              style={{ background: 'linear-gradient(to top, var(--bg) 24%, rgba(6,11,20,0.7) 58%, transparent)' }}
            />
          </div>
          </ScrollReveal>
        </div>

        {/* Available badge — top right */}
        <ScrollReveal animation="fadeDown" delay={50} className="absolute top-24 right-5 lg:right-12 z-20">
          <span className="badge text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Available for work
          </span>
        </ScrollReveal>

        {/* BOTTOM LEFT — buttons */}
        <ScrollReveal animation="fadeLeft" delay={350} className="absolute bottom-8 lg:bottom-10 left-5 lg:left-10 z-20 max-w-[200px] lg:max-w-[240px]">
          <div className="flex flex-col gap-2.5">
            <a
              href="https://www.linkedin.com/in/bisma-noor-952092396/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] px-4 py-2.5 tracking-[0.1em] uppercase justify-center"
            >
              [ Hire Me ]
            </a>
            <a
              href="/resume.pdf"
              download="Bisma Noor - Web Developer.pdf"
              className="btn-outline text-[11px] px-4 py-2.5 tracking-[0.1em] uppercase justify-center"
            >
              <FaDownload size={10} />
              [ Download CV ]
            </a>
          </div>
        </ScrollReveal>

        {/* BOTTOM RIGHT — description + socials */}
        <ScrollReveal animation="fadeRight" delay={350} className="absolute bottom-8 lg:bottom-10 right-5 lg:right-10 xl:right-16 z-20 max-w-[180px] lg:max-w-[220px] xl:max-w-[280px] text-right">
          <p className="text-[var(--muted)] text-[12px] lg:text-sm xl:text-base leading-relaxed mb-4">
            — Web Developer<br />
            skilled in React &amp; Next.js —<br />
            building fast, modern<br />
            web experiences.
          </p>
          <div className="flex items-center justify-end gap-2 xl:gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 xl:w-10 xl:h-10 rounded-lg border border-[rgba(34,211,238,0.2)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_10px_rgba(34,211,238,0.25)] transition-all duration-200"
              >
                <Icon size={12} className="xl:hidden" />
                <Icon size={15} className="hidden xl:block" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px z-20"
          style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
        />
      </div>

    </section>
  );
}
